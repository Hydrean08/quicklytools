"use client";

import { useState, useMemo } from "react";
import AdSlot from "@/components/AdSlot";
import {
  generateShiftCalendar,
  getMaxCurrentWeek,
  ROTATION_LABELS,
  type RotationType,
  type ShiftDay,
} from "@/lib/shift";

const ROTATION_DESCRIPTIONS: Record<RotationType, string> = {
  panama: "2 on, 2 off, 3 on — 14-day cycle. Popular in emergency services.",
  pitman: "2 on, 3 off, 2 on, 2 off — 14-day cycle. Used in manufacturing.",
  "4on4off": "4 on, 4 off — 8-day cycle. Common in continuous operations.",
  dupont: "3 on, 2 off, 2 on, 3 off — 28-day DuPont cycle.",
};

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function WeekCalendar({ days, weekNum }: { days: ShiftDay[]; weekNum: number }) {
  const weekDays = days.filter((d) => d.weekNumber === weekNum);
  if (weekDays.length === 0) return null;

  const start = weekDays[0].date;
  const end = weekDays[weekDays.length - 1].date;

  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold text-slate-600 mb-2">
        Week {weekNum} &mdash;{" "}
        {MONTH_NAMES[start.getMonth()]} {start.getDate()}
        {start.getMonth() !== end.getMonth()
          ? ` – ${MONTH_NAMES[end.getMonth()]} ${end.getDate()}`
          : ` – ${end.getDate()}`}
      </h3>
      <div className="grid grid-cols-7 gap-1" role="list" aria-label={`Week ${weekNum} schedule`}>
        {weekDays.map((day) => (
          <div
            key={day.date.toISOString()}
            role="listitem"
            aria-label={`${DAY_NAMES[day.date.getDay()]} ${MONTH_NAMES[day.date.getMonth()]} ${day.date.getDate()}: ${day.isWork ? "Work" : "Off"}`}
            className={`rounded-lg p-2 text-center text-sm font-medium transition-colors ${
              day.isWork
                ? "bg-navy-700 text-white"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            <div className="text-xs mb-0.5">{DAY_NAMES[day.date.getDay()]}</div>
            <div className="font-bold">{day.date.getDate()}</div>
            <div className="text-xs mt-0.5">{day.isWork ? "Work" : "Off"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ShiftTool() {
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(todayStr);
  const [rotationType, setRotationType] = useState<RotationType>("panama");
  const [currentWeek, setCurrentWeek] = useState(1);

  const maxWeek = useMemo(() => getMaxCurrentWeek(rotationType), [rotationType]);

  const shiftDays = useMemo(() => {
    if (!startDate) return [];
    return generateShiftCalendar({ startDate, rotationType, currentWeek });
  }, [startDate, rotationType, currentWeek]);

  const workCount = shiftDays.filter((d) => d.isWork).length;
  const offCount = shiftDays.length - workCount;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Shift Work Schedule Calculator</h1>
        <p className="text-slate-500">
          Generate a 4-week calendar for your shift rotation. Color-coded work and off days at a glance.
        </p>
      </div>

      <AdSlot slot="PLACEHOLDER" label="Top banner" className="mb-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls */}
        <section className="card" aria-label="Schedule inputs">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Schedule Settings</h2>

          <div className="mb-4">
            <label htmlFor="start-date" className="block text-sm font-medium text-slate-700 mb-1">
              Start date
            </label>
            <input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="rotation-type" className="block text-sm font-medium text-slate-700 mb-1">
              Rotation type
            </label>
            <select
              id="rotation-type"
              value={rotationType}
              onChange={(e) => {
                setRotationType(e.target.value as RotationType);
                setCurrentWeek(1);
              }}
              className="input-field"
            >
              {(Object.entries(ROTATION_LABELS) as [RotationType, string][]).map(([val, label]) => (
                <option key={val} value={val}>
                  {label}
                </option>
              ))}
            </select>
            <p className="text-xs text-slate-400 mt-1">
              {ROTATION_DESCRIPTIONS[rotationType]}
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="current-week" className="block text-sm font-medium text-slate-700 mb-1">
              Current week in rotation (1–{maxWeek})
            </label>
            <select
              id="current-week"
              value={currentWeek}
              onChange={(e) => setCurrentWeek(parseInt(e.target.value))}
              className="input-field"
            >
              {Array.from({ length: maxWeek }, (_, i) => i + 1).map((w) => (
                <option key={w} value={w}>
                  Week {w}
                </option>
              ))}
            </select>
            <p className="text-xs text-slate-400 mt-1">
              Which week of the rotation cycle does your start date fall in?
            </p>
          </div>

          {/* Legend */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <p className="text-xs font-medium text-slate-600 mb-2">Legend</p>
            <div className="flex gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-navy-700" aria-hidden="true" />
                <span className="text-xs text-slate-600">Work</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-slate-100 border border-slate-300" aria-hidden="true" />
                <span className="text-xs text-slate-600">Off</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          {shiftDays.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-xs font-medium text-slate-600 mb-2">Next 4 weeks</p>
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-navy-700">{workCount}</p>
                  <p className="text-xs text-slate-500">Work days</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-400">{offCount}</p>
                  <p className="text-xs text-slate-500">Off days</p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Calendar */}
        <section className="lg:col-span-2 card" aria-label="4-week shift calendar" aria-live="polite">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            4-Week Schedule — {ROTATION_LABELS[rotationType]}
          </h2>

          {shiftDays.length > 0 ? (
            <>
              {[1, 2, 3, 4].map((week) => (
                <WeekCalendar key={week} days={shiftDays} weekNum={week} />
              ))}
            </>
          ) : (
            <p className="text-slate-400 text-center py-8">
              Select a start date to generate your schedule.
            </p>
          )}
        </section>
      </div>

      <AdSlot slot="PLACEHOLDER" label="Bottom banner" className="mt-8" />
    </div>
  );
}
