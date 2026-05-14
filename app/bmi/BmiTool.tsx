"use client";

import { useState, useMemo } from "react";
import AdSlot from "@/components/AdSlot";
import { calcBMI, calcBMIImperial } from "@/lib/bmi";

type Unit = "metric" | "imperial";

const CATEGORY_COLORS: Record<string, string> = {
  Underweight: "bg-blue-100 text-blue-800",
  Normal: "bg-green-100 text-green-800",
  Overweight: "bg-yellow-100 text-yellow-800",
  Obese: "bg-red-100 text-red-800",
};

const SCALE_MARKERS = [
  { label: "Under 18.5", color: "bg-blue-400", widthPct: 18.5 },
  { label: "18.5–24.9", color: "bg-green-400", widthPct: 12.5 },
  { label: "25–29.9", color: "bg-yellow-400", widthPct: 12.5 },
  { label: "30+", color: "bg-red-400", widthPct: 56.5 },
];

function bmiToScalePct(bmi: number): number {
  // Map BMI 10–40 to 0–100%
  const MIN = 10;
  const MAX = 40;
  return Math.min(100, Math.max(0, ((bmi - MIN) / (MAX - MIN)) * 100));
}

export default function BmiTool() {
  const [unit, setUnit] = useState<Unit>("metric");

  // Metric inputs
  const [weightKg, setWeightKg] = useState("");
  const [heightCm, setHeightCm] = useState("");

  // Imperial inputs
  const [weightLbs, setWeightLbs] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");

  const result = useMemo(() => {
    if (unit === "metric") {
      const w = parseFloat(weightKg);
      const h = parseFloat(heightCm);
      if (!w || !h || w <= 0 || h <= 0) return null;
      return calcBMI(w, h);
    } else {
      const w = parseFloat(weightLbs);
      const ft = parseFloat(heightFt) || 0;
      const inches = parseFloat(heightIn) || 0;
      if (!w || w <= 0 || (ft <= 0 && inches <= 0)) return null;
      return calcBMIImperial(w, ft, inches);
    }
  }, [unit, weightKg, heightCm, weightLbs, heightFt, heightIn]);

  const scalePct = result ? bmiToScalePct(result.bmi) : null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">BMI Calculator</h1>
        <p className="text-slate-500">
          Calculate your Body Mass Index and see your healthy weight range.
        </p>
      </div>

      <AdSlot slot="PLACEHOLDER" label="Top banner" className="mb-6" />

      <div className="card mb-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Your Measurements</h2>

        {/* Unit toggle */}
        <div className="flex gap-1 bg-slate-100 p-1 rounded-lg mb-5 w-fit" role="group" aria-label="Unit system">
          {(["metric", "imperial"] as Unit[]).map((u) => (
            <button
              key={u}
              onClick={() => setUnit(u)}
              aria-pressed={unit === u}
              className={`px-5 py-1.5 rounded-md text-sm font-medium transition-colors capitalize ${
                unit === u ? "tab-active" : "tab-inactive"
              }`}
            >
              {u}
            </button>
          ))}
        </div>

        {unit === "metric" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="weight-kg" className="block text-sm font-medium text-slate-700 mb-1">
                Weight (kg)
              </label>
              <input
                id="weight-kg"
                type="number"
                min="0"
                step="0.1"
                placeholder="e.g. 70"
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="height-cm" className="block text-sm font-medium text-slate-700 mb-1">
                Height (cm)
              </label>
              <input
                id="height-cm"
                type="number"
                min="0"
                step="0.1"
                placeholder="e.g. 175"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                className="input-field"
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="weight-lbs" className="block text-sm font-medium text-slate-700 mb-1">
                Weight (lbs)
              </label>
              <input
                id="weight-lbs"
                type="number"
                min="0"
                step="0.1"
                placeholder="e.g. 154"
                value={weightLbs}
                onChange={(e) => setWeightLbs(e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="height-ft" className="block text-sm font-medium text-slate-700 mb-1">
                Height (ft)
              </label>
              <input
                id="height-ft"
                type="number"
                min="0"
                max="8"
                step="1"
                placeholder="e.g. 5"
                value={heightFt}
                onChange={(e) => setHeightFt(e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="height-in" className="block text-sm font-medium text-slate-700 mb-1">
                Height (in)
              </label>
              <input
                id="height-in"
                type="number"
                min="0"
                max="11"
                step="1"
                placeholder="e.g. 9"
                value={heightIn}
                onChange={(e) => setHeightIn(e.target.value)}
                className="input-field"
              />
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      {result && scalePct !== null ? (
        <div className="card" aria-live="polite">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Your BMI</h2>

          <div className="flex items-center gap-4 mb-5">
            <div className="text-6xl font-bold text-navy-700">{result.bmi.toFixed(1)}</div>
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${CATEGORY_COLORS[result.category]}`}>
                {result.category}
              </span>
              <p className="text-sm text-slate-500 mt-1">Body Mass Index</p>
            </div>
          </div>

          {/* Scale bar */}
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">BMI Scale</p>
            <div
              className="relative flex rounded-full overflow-hidden h-4"
              role="img"
              aria-label={`BMI scale showing your value of ${result.bmi.toFixed(1)} in the ${result.category} range`}
            >
              {SCALE_MARKERS.map((m) => (
                <div
                  key={m.label}
                  className={`${m.color} h-full`}
                  style={{ width: `${m.widthPct * (100 / 43.5)}%` }}
                />
              ))}
              {/* Position marker */}
              <div
                className="absolute top-0 h-full w-0.5 bg-slate-900"
                style={{ left: `${scalePct}%` }}
                aria-hidden="true"
              />
            </div>
            <div className="flex justify-between mt-1 text-xs text-slate-400">
              <span>10</span>
              <span>18.5</span>
              <span>25</span>
              <span>30</span>
              <span>40+</span>
            </div>
          </div>

          {/* Healthy weight range */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700 mb-1">
              Healthy Weight Range for Your Height
            </p>
            {unit === "metric" ? (
              <p className="text-sm text-slate-700">
                {result.healthyWeightMinKg.toFixed(1)} kg – {result.healthyWeightMaxKg.toFixed(1)} kg
                <span className="text-slate-400 ml-2">
                  ({result.healthyWeightMinLbs.toFixed(0)} – {result.healthyWeightMaxLbs.toFixed(0)} lbs)
                </span>
              </p>
            ) : (
              <p className="text-sm text-slate-700">
                {result.healthyWeightMinLbs.toFixed(0)} lbs – {result.healthyWeightMaxLbs.toFixed(0)} lbs
                <span className="text-slate-400 ml-2">
                  ({result.healthyWeightMinKg.toFixed(1)} – {result.healthyWeightMaxKg.toFixed(1)} kg)
                </span>
              </p>
            )}
          </div>

          <p className="text-xs text-slate-400 mt-4">
            BMI is a screening tool, not a diagnostic. Consult a healthcare provider for personalised advice.
          </p>
        </div>
      ) : (
        <div className="card flex items-center justify-center text-slate-400 text-sm min-h-[100px]">
          Enter your measurements to see your BMI.
        </div>
      )}

      <AdSlot slot="PLACEHOLDER" label="Bottom banner" className="mt-8" />
    </div>
  );
}
