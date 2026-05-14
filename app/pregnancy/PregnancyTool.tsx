"use client";

import { useState, useMemo } from "react";
import AdSlot from "@/components/AdSlot";
import { calcDueDate, calcOvulation, formatDate } from "@/lib/pregnancy";

type Tab = "duedate" | "ovulation";

export default function PregnancyTool() {
  const [tab, setTab] = useState<Tab>("duedate");

  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  // Due date state
  const [lmpDate, setLmpDate] = useState("");

  // Ovulation state
  const [ovLmpDate, setOvLmpDate] = useState("");
  const [cycleLength, setCycleLength] = useState("28");

  const dueDateResult = useMemo(() => {
    if (!lmpDate) return null;
    try {
      return calcDueDate(lmpDate);
    } catch {
      return null;
    }
  }, [lmpDate]);

  const ovulationResult = useMemo(() => {
    if (!ovLmpDate) return null;
    const len = parseInt(cycleLength);
    if (!len || len < 21 || len > 40) return null;
    try {
      return calcOvulation(ovLmpDate, len);
    } catch {
      return null;
    }
  }, [ovLmpDate, cycleLength]);

  const trimesterLabel = (t: 1 | 2 | 3) =>
    ["", "First Trimester", "Second Trimester", "Third Trimester"][t];

  const trimesterColor = (t: 1 | 2 | 3) =>
    [
      "",
      "bg-emerald-100 text-emerald-800",
      "bg-blue-100 text-blue-800",
      "bg-purple-100 text-purple-800",
    ][t];

  const tabs: { id: Tab; label: string }[] = [
    { id: "duedate", label: "Due Date" },
    { id: "ovulation", label: "Ovulation / Fertile Window" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Pregnancy Calculator</h1>
        <p className="text-slate-500">
          Calculate your due date and pregnancy milestones, or find your fertile window and ovulation day.
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

      {/* Due Date Tab */}
      {tab === "duedate" && (
        <div id="panel-duedate" role="tabpanel" aria-label="Due date calculator">
          <div className="card">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">Pregnancy Due Date</h2>
            <p className="text-sm text-slate-500 mb-5">
              Enter the first day of your last menstrual period (LMP) to calculate your due date and milestones.
            </p>

            <div className="mb-6">
              <label htmlFor="lmp-date" className="block text-sm font-medium text-slate-700 mb-1">
                First day of last period (LMP)
              </label>
              <input
                id="lmp-date"
                type="date"
                value={lmpDate}
                max={todayStr}
                onChange={(e) => setLmpDate(e.target.value)}
                className="input-field max-w-xs"
              />
            </div>

            {dueDateResult && (
              <div aria-live="polite">
                {/* Key stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-navy-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-navy-700">
                      {formatDate(dueDateResult.dueDate)}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">Due Date</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-slate-700">
                      {dueDateResult.currentWeek}w {dueDateResult.currentDay}d
                    </p>
                    <p className="text-xs text-slate-500 mt-1">Gestational Age</p>
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex items-center justify-center">
                    <span className={`px-3 py-1.5 rounded-full text-sm font-semibold ${trimesterColor(dueDateResult.trimester)}`}>
                      {trimesterLabel(dueDateResult.trimester)}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>Progress</span>
                    <span>{dueDateResult.percentComplete.toFixed(1)}%</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden" role="progressbar"
                    aria-valuenow={dueDateResult.percentComplete}
                    aria-valuemin={0} aria-valuemax={100}
                    aria-label="Pregnancy progress">
                    <div
                      className="h-full bg-navy-700 rounded-full transition-all"
                      style={{ width: `${dueDateResult.percentComplete}%` }}
                    />
                  </div>
                </div>

                {/* Milestones */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Key Milestones</p>
                  <div className="divide-y divide-slate-100 rounded-lg border border-slate-200 overflow-hidden">
                    {dueDateResult.milestones.map((m) => {
                      const isPast = m.date < today;
                      return (
                        <div key={m.week} className={`result-row px-4 ${isPast ? "opacity-50" : ""}`}>
                          <span className="text-sm text-slate-700">{m.label}</span>
                          <span className={`text-sm font-medium ${isPast ? "text-slate-400 line-through" : "text-navy-700"}`}>
                            {formatDate(m.date)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Ovulation Tab */}
      {tab === "ovulation" && (
        <div id="panel-ovulation" role="tabpanel" aria-label="Ovulation calculator">
          <div className="card">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">Ovulation &amp; Fertile Window</h2>
            <p className="text-sm text-slate-500 mb-5">
              Find your fertile window and ovulation day based on your cycle.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="ov-lmp-date" className="block text-sm font-medium text-slate-700 mb-1">
                  First day of last period
                </label>
                <input
                  id="ov-lmp-date"
                  type="date"
                  value={ovLmpDate}
                  max={todayStr}
                  onChange={(e) => setOvLmpDate(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="cycle-length" className="block text-sm font-medium text-slate-700 mb-1">
                  Cycle length (days)
                </label>
                <input
                  id="cycle-length"
                  type="number"
                  min="21"
                  max="40"
                  value={cycleLength}
                  onChange={(e) => setCycleLength(e.target.value)}
                  className="input-field"
                />
                <p className="text-xs text-slate-400 mt-1">Typically 21–40 days</p>
              </div>
            </div>

            {ovulationResult && (
              <div aria-live="polite">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-pink-50 rounded-lg p-4">
                    <p className="text-xs font-semibold text-pink-600 uppercase tracking-wide mb-1">Ovulation Day</p>
                    <p className="text-xl font-bold text-pink-700">{formatDate(ovulationResult.ovulationDate)}</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">Fertile Window</p>
                    <p className="text-base font-bold text-emerald-700">
                      {formatDate(ovulationResult.fertileWindowStart)}
                    </p>
                    <p className="text-sm text-emerald-600">to {formatDate(ovulationResult.fertileWindowEnd)}</p>
                  </div>
                </div>

                <div className="divide-y divide-slate-100 rounded-lg border border-slate-200 overflow-hidden">
                  <div className="result-row px-4">
                    <span className="text-sm text-slate-600">Next expected period</span>
                    <span className="text-sm font-medium text-navy-700">
                      {formatDate(ovulationResult.nextPeriodDate)}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mt-4">
                  Based on ovulation occurring ~14 days before the next period. Actual timing varies. Not medical advice.
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
