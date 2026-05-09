"use client";

import { useState, useMemo } from "react";
import AdSlot from "@/components/AdSlot";
import { calcAge, calcAgeBetween } from "@/lib/age";

type Tab = "my-age" | "between";

export default function AgeTool() {
  const [tab, setTab] = useState<Tab>("my-age");

  // My Age tab
  const [birthDate, setBirthDate] = useState("");

  // Between Dates tab
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const myAgeResult = useMemo(() => {
    if (!birthDate) return null;
    try {
      return calcAge(birthDate);
    } catch {
      return null;
    }
  }, [birthDate]);

  const betweenResult = useMemo(() => {
    if (!date1 || !date2 || date1 === date2) return null;
    try {
      return calcAgeBetween(date1, date2);
    } catch {
      return null;
    }
  }, [date1, date2]);

  const tabs: { id: Tab; label: string }[] = [
    { id: "my-age", label: "My Age" },
    { id: "between", label: "Between Dates" },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Age Calculator</h1>
        <p className="text-slate-500">
          Find your exact age in years, months, and days — or the difference between any two dates.
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

      {/* My Age tab */}
      {tab === "my-age" && (
        <div id="panel-my-age" role="tabpanel" aria-label="My age calculator">
          <div className="card mb-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Date of Birth</h2>
            <div>
              <label htmlFor="birth-date" className="block text-sm font-medium text-slate-700 mb-1">
                Birth Date
              </label>
              <input
                id="birth-date"
                type="date"
                max={today}
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="input-field"
              />
            </div>
          </div>

          {myAgeResult && (
            <div className="card" aria-live="polite">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Your Age</h2>

              {/* Main age display */}
              <div className="bg-navy-50 rounded-lg p-5 mb-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-600 mb-2">Age</p>
                <div className="flex justify-center gap-6">
                  <div>
                    <p className="text-5xl font-bold text-navy-700">{myAgeResult.years}</p>
                    <p className="text-sm text-slate-500 mt-1">years</p>
                  </div>
                  <div className="text-3xl font-light text-slate-300 self-center">·</div>
                  <div>
                    <p className="text-5xl font-bold text-navy-700">{myAgeResult.months}</p>
                    <p className="text-sm text-slate-500 mt-1">months</p>
                  </div>
                  <div className="text-3xl font-light text-slate-300 self-center">·</div>
                  <div>
                    <p className="text-5xl font-bold text-navy-700">{myAgeResult.days}</p>
                    <p className="text-sm text-slate-500 mt-1">days</p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                <div className="result-row">
                  <span className="text-sm text-slate-600">Total days lived</span>
                  <span className="text-sm font-semibold text-slate-800">{myAgeResult.totalDays.toLocaleString()}</span>
                </div>
                <div className="result-row">
                  <span className="text-sm text-slate-600">Total weeks lived</span>
                  <span className="text-sm font-semibold text-slate-800">{myAgeResult.totalWeeks.toLocaleString()}</span>
                </div>
                <div className="result-row">
                  <span className="text-sm text-slate-600">Day of week born</span>
                  <span className="text-sm font-semibold text-slate-800">{myAgeResult.dayOfWeekBorn}</span>
                </div>
                <div className="result-row">
                  <span className="text-sm text-slate-600">Next birthday</span>
                  <span className="text-sm font-semibold text-slate-800">{myAgeResult.nextBirthday}</span>
                </div>
                <div className="result-row">
                  <span className="text-sm text-slate-600">Days until birthday</span>
                  <span className="text-sm font-semibold text-navy-700">
                    {myAgeResult.daysUntilBirthday === 0 ? "🎂 Today!" : `${myAgeResult.daysUntilBirthday} days`}
                  </span>
                </div>
              </div>
            </div>
          )}

          {!myAgeResult && (
            <div className="card flex items-center justify-center text-slate-400 text-sm min-h-[100px]">
              Enter your date of birth to calculate your age.
            </div>
          )}
        </div>
      )}

      {/* Between Dates tab */}
      {tab === "between" && (
        <div id="panel-between" role="tabpanel" aria-label="Date difference calculator">
          <div className="card mb-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Date Range</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="date-1" className="block text-sm font-medium text-slate-700 mb-1">
                  Start Date
                </label>
                <input
                  id="date-1"
                  type="date"
                  value={date1}
                  onChange={(e) => setDate1(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="date-2" className="block text-sm font-medium text-slate-700 mb-1">
                  End Date
                </label>
                <input
                  id="date-2"
                  type="date"
                  value={date2}
                  onChange={(e) => setDate2(e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
          </div>

          {betweenResult && (
            <div className="card" aria-live="polite">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Difference</h2>

              <div className="bg-navy-50 rounded-lg p-5 mb-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-600 mb-2">Time Between Dates</p>
                <div className="flex justify-center gap-6">
                  <div>
                    <p className="text-5xl font-bold text-navy-700">{betweenResult.years}</p>
                    <p className="text-sm text-slate-500 mt-1">years</p>
                  </div>
                  <div className="text-3xl font-light text-slate-300 self-center">·</div>
                  <div>
                    <p className="text-5xl font-bold text-navy-700">{betweenResult.months}</p>
                    <p className="text-sm text-slate-500 mt-1">months</p>
                  </div>
                  <div className="text-3xl font-light text-slate-300 self-center">·</div>
                  <div>
                    <p className="text-5xl font-bold text-navy-700">{betweenResult.days}</p>
                    <p className="text-sm text-slate-500 mt-1">days</p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                <div className="result-row">
                  <span className="text-sm text-slate-600">Total days</span>
                  <span className="text-sm font-semibold text-slate-800">{betweenResult.totalDays.toLocaleString()}</span>
                </div>
                <div className="result-row">
                  <span className="text-sm text-slate-600">Total weeks</span>
                  <span className="text-sm font-semibold text-slate-800">{betweenResult.totalWeeks.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}

          {!betweenResult && (
            <div className="card flex items-center justify-center text-slate-400 text-sm min-h-[100px]">
              Enter two different dates to see the difference.
            </div>
          )}
        </div>
      )}

      <AdSlot slot="PLACEHOLDER" label="Bottom banner" className="mt-8" />
    </div>
  );
}
