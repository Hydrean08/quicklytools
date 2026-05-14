"use client";

import { useState, useMemo } from "react";
import AdSlot from "@/components/AdSlot";
import {
  calcPace,
  calcFinishTime,
  predictRaceTimes,
  parseTimeToSeconds,
  parsePaceToSeconds,
  RACE_DISTANCES,
} from "@/lib/pace";

type Tab = "pace" | "finish" | "predict";

export default function PaceTool() {
  const [tab, setTab] = useState<Tab>("pace");

  // Pace calculator state
  const [paceDistanceKm, setPaceDistanceKm] = useState("");
  const [paceDistanceUnit, setPaceDistanceUnit] = useState<"km" | "mi">("km");
  const [paceHours, setPaceHours] = useState("0");
  const [paceMinutes, setPaceMinutes] = useState("");
  const [paceSeconds, setPaceSeconds] = useState("0");

  // Finish time state
  const [finishDistanceLabel, setFinishDistanceLabel] = useState("5K");
  const [finishDistanceKm, setFinishDistanceKm] = useState("5");
  const [finishPaceMin, setFinishPaceMin] = useState("");
  const [finishPaceSec, setFinishPaceSec] = useState("0");
  const [finishPaceUnit, setFinishPaceUnit] = useState<"km" | "mi">("km");

  // Predictor state
  const [predKnownLabel, setPredKnownLabel] = useState("5K");
  const [predKnownKm, setPredKnownKm] = useState("5");
  const [predHours, setPredHours] = useState("0");
  const [predMinutes, setPredMinutes] = useState("");
  const [predSeconds, setPredSeconds] = useState("0");

  const KM_TO_MI = 0.621371;

  const paceResult = useMemo(() => {
    const raw = parseFloat(paceDistanceKm);
    if (!raw || raw <= 0) return null;
    const distKm = paceDistanceUnit === "mi" ? raw / KM_TO_MI : raw;
    const totalSec = parseTimeToSeconds(
      parseInt(paceHours || "0"),
      parseInt(paceMinutes || "0"),
      parseInt(paceSeconds || "0")
    );
    if (totalSec <= 0) return null;
    return calcPace(distKm, totalSec);
  }, [paceDistanceKm, paceDistanceUnit, paceHours, paceMinutes, paceSeconds]);

  const finishResult = useMemo(() => {
    const distKm = parseFloat(finishDistanceKm);
    if (!distKm || distKm <= 0) return null;
    const paceInKm =
      finishPaceUnit === "mi"
        ? parsePaceToSeconds(finishPaceMin, finishPaceSec) * KM_TO_MI
        : parsePaceToSeconds(finishPaceMin, finishPaceSec);
    if (paceInKm <= 0) return null;
    return calcFinishTime(distKm, paceInKm);
  }, [finishDistanceKm, finishPaceMin, finishPaceSec, finishPaceUnit]);

  const predictions = useMemo(() => {
    const distKm = parseFloat(predKnownKm);
    if (!distKm || distKm <= 0) return null;
    const totalSec = parseTimeToSeconds(
      parseInt(predHours || "0"),
      parseInt(predMinutes || "0"),
      parseInt(predSeconds || "0")
    );
    if (totalSec <= 0) return null;
    return predictRaceTimes(distKm, totalSec);
  }, [predKnownKm, predHours, predMinutes, predSeconds]);

  function handleFinishDistanceChange(label: string) {
    const found = RACE_DISTANCES.find((d) => d.label === label);
    setFinishDistanceLabel(label);
    if (found) setFinishDistanceKm(found.km.toString());
  }

  function handlePredKnownChange(label: string) {
    const found = RACE_DISTANCES.find((d) => d.label === label);
    setPredKnownLabel(label);
    if (found) setPredKnownKm(found.km.toString());
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: "pace", label: "Pace" },
    { id: "finish", label: "Finish Time" },
    { id: "predict", label: "Race Predictor" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Running Pace Calculator</h1>
        <p className="text-slate-500">
          Calculate pace, predict finish times, and forecast race results using the Riegel formula.
        </p>
      </div>

      <AdSlot slot="PLACEHOLDER" label="Top banner" className="mb-6" />

      {/* Tabs */}
      <div className="flex gap-1 bg-slate-100 p-1 rounded-lg mb-6" role="tablist" aria-label="Calculator mode">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            onClick={() => setTab(t.id)}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              tab === t.id ? "tab-active" : "tab-inactive"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Pace Tab */}
      {tab === "pace" && (
        <div id="panel-pace" role="tabpanel" aria-label="Pace calculator">
          <div className="card">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Calculate Your Pace</h2>
            <p className="text-sm text-slate-500 mb-5">Enter your distance and finish time to get your pace.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="pace-distance" className="block text-sm font-medium text-slate-700 mb-1">
                  Distance
                </label>
                <input
                  id="pace-distance"
                  type="number"
                  min="0"
                  step="any"
                  placeholder="e.g. 5"
                  value={paceDistanceKm}
                  onChange={(e) => setPaceDistanceKm(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="pace-unit" className="block text-sm font-medium text-slate-700 mb-1">
                  Unit
                </label>
                <select
                  id="pace-unit"
                  value={paceDistanceUnit}
                  onChange={(e) => setPaceDistanceUnit(e.target.value as "km" | "mi")}
                  className="input-field"
                >
                  <option value="km">Kilometers</option>
                  <option value="mi">Miles</option>
                </select>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-1">Finish Time</label>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <input
                    type="number" min="0" max="99" placeholder="0"
                    value={paceHours} onChange={(e) => setPaceHours(e.target.value)}
                    className="input-field text-center"
                    aria-label="Hours"
                  />
                  <p className="text-xs text-center text-slate-400 mt-1">hrs</p>
                </div>
                <div>
                  <input
                    type="number" min="0" max="59" placeholder="mm"
                    value={paceMinutes} onChange={(e) => setPaceMinutes(e.target.value)}
                    className="input-field text-center"
                    aria-label="Minutes"
                  />
                  <p className="text-xs text-center text-slate-400 mt-1">min</p>
                </div>
                <div>
                  <input
                    type="number" min="0" max="59" placeholder="0"
                    value={paceSeconds} onChange={(e) => setPaceSeconds(e.target.value)}
                    className="input-field text-center"
                    aria-label="Seconds"
                  />
                  <p className="text-xs text-center text-slate-400 mt-1">sec</p>
                </div>
              </div>
            </div>

            {paceResult && (
              <div className="bg-navy-50 rounded-lg p-4 mt-2" aria-live="polite">
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-600 mb-3">Your Pace</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-navy-700">{paceResult.pacePerMile}</p>
                    <p className="text-sm text-slate-500 mt-1">min / mile</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-navy-700">{paceResult.pacePerKm}</p>
                    <p className="text-sm text-slate-500 mt-1">min / km</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Finish Time Tab */}
      {tab === "finish" && (
        <div id="panel-finish" role="tabpanel" aria-label="Finish time calculator">
          <div className="card">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Predict Your Finish Time</h2>
            <p className="text-sm text-slate-500 mb-5">Enter your target pace and distance to calculate your finish time.</p>

            <div className="mb-4">
              <label htmlFor="finish-distance" className="block text-sm font-medium text-slate-700 mb-1">
                Distance
              </label>
              <select
                id="finish-distance"
                value={finishDistanceLabel}
                onChange={(e) => handleFinishDistanceChange(e.target.value)}
                className="input-field"
              >
                {RACE_DISTANCES.map((d) => (
                  <option key={d.label} value={d.label}>{d.label}</option>
                ))}
                <option value="Custom">Custom</option>
              </select>
            </div>

            {finishDistanceLabel === "Custom" && (
              <div className="mb-4">
                <label htmlFor="finish-custom-km" className="block text-sm font-medium text-slate-700 mb-1">
                  Custom distance (km)
                </label>
                <input
                  id="finish-custom-km"
                  type="number" min="0" step="any" placeholder="e.g. 8.5"
                  value={finishDistanceKm} onChange={(e) => setFinishDistanceKm(e.target.value)}
                  className="input-field"
                />
              </div>
            )}

            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Your pace
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="number" min="0" max="59" placeholder="mm"
                  value={finishPaceMin} onChange={(e) => setFinishPaceMin(e.target.value)}
                  className="input-field text-center w-24"
                  aria-label="Pace minutes"
                />
                <span className="text-slate-500 font-bold">:</span>
                <input
                  type="number" min="0" max="59" placeholder="ss"
                  value={finishPaceSec} onChange={(e) => setFinishPaceSec(e.target.value)}
                  className="input-field text-center w-24"
                  aria-label="Pace seconds"
                />
                <select
                  value={finishPaceUnit}
                  onChange={(e) => setFinishPaceUnit(e.target.value as "km" | "mi")}
                  className="input-field"
                  aria-label="Pace unit"
                >
                  <option value="km">/ km</option>
                  <option value="mi">/ mile</option>
                </select>
              </div>
            </div>

            {finishResult && (
              <div className="bg-navy-50 rounded-lg p-4 mt-2" aria-live="polite">
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-600 mb-2">Estimated Finish Time</p>
                <p className="text-4xl font-bold text-navy-700">{finishResult.finishTime}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Race Predictor Tab */}
      {tab === "predict" && (
        <div id="panel-predict" role="tabpanel" aria-label="Race time predictor">
          <div className="card">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">Race Time Predictor</h2>
            <p className="text-sm text-slate-500 mb-5">
              Enter a recent race result and we'll predict your times at other distances using the Riegel formula.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="pred-distance" className="block text-sm font-medium text-slate-700 mb-1">
                  Known race distance
                </label>
                <select
                  id="pred-distance"
                  value={predKnownLabel}
                  onChange={(e) => handlePredKnownChange(e.target.value)}
                  className="input-field"
                >
                  {RACE_DISTANCES.map((d) => (
                    <option key={d.label} value={d.label}>{d.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Your finish time</label>
                <div className="grid grid-cols-3 gap-1">
                  <div>
                    <input type="number" min="0" max="99" placeholder="0"
                      value={predHours} onChange={(e) => setPredHours(e.target.value)}
                      className="input-field text-center" aria-label="Hours" />
                    <p className="text-xs text-center text-slate-400 mt-0.5">h</p>
                  </div>
                  <div>
                    <input type="number" min="0" max="59" placeholder="mm"
                      value={predMinutes} onChange={(e) => setPredMinutes(e.target.value)}
                      className="input-field text-center" aria-label="Minutes" />
                    <p className="text-xs text-center text-slate-400 mt-0.5">m</p>
                  </div>
                  <div>
                    <input type="number" min="0" max="59" placeholder="0"
                      value={predSeconds} onChange={(e) => setPredSeconds(e.target.value)}
                      className="input-field text-center" aria-label="Seconds" />
                    <p className="text-xs text-center text-slate-400 mt-0.5">s</p>
                  </div>
                </div>
              </div>
            </div>

            {predictions && (
              <div aria-live="polite">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Predicted Times</p>
                <div className="divide-y divide-slate-100 rounded-lg border border-slate-200 overflow-hidden">
                  {predictions.map((p) => (
                    <div key={p.distance} className="result-row px-4">
                      <span className="text-sm font-medium text-slate-700">{p.distance}</span>
                      <span className="text-sm font-bold text-navy-700">{p.predictedTime}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Predicted using the Riegel formula: T₂ = T₁ × (D₂/D₁)^1.06
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <AdSlot slot="PLACEHOLDER" label="Bottom banner" className="mt-8" />
    </div>
  );
}
