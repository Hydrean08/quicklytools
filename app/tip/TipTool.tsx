"use client";

import { useState, useMemo } from "react";
import AdSlot from "@/components/AdSlot";
import { calcTip } from "@/lib/tip";

const PRESET_TIPS = [10, 15, 18, 20, 25];

function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
}

export default function TipTool() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercent, setTipPercent] = useState(18);
  const [customTip, setCustomTip] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [numPeople, setNumPeople] = useState(1);
  const [roundUp, setRoundUp] = useState(false);

  const activeTip = isCustom ? parseFloat(customTip) || 0 : tipPercent;

  const result = useMemo(() => {
    const bill = parseFloat(billAmount);
    if (!bill || bill <= 0) return null;
    return calcTip(bill, activeTip, numPeople);
  }, [billAmount, activeTip, numPeople]);

  function handlePreset(pct: number) {
    setTipPercent(pct);
    setIsCustom(false);
  }

  function handleCustomFocus() {
    setIsCustom(true);
  }

  function decreasePeople() {
    setNumPeople((n) => Math.max(1, n - 1));
  }

  function increasePeople() {
    setNumPeople((n) => Math.min(20, n + 1));
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Tip Calculator</h1>
        <p className="text-slate-500">
          Calculate tip and split the bill between any number of people.
        </p>
      </div>

      <AdSlot slot="PLACEHOLDER" label="Top banner" className="mb-6" />

      <div className="card mb-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Bill Details</h2>

        {/* Bill Amount */}
        <div className="mb-5">
          <label htmlFor="bill-amount" className="block text-sm font-medium text-slate-700 mb-1">
            Bill Amount ($)
          </label>
          <input
            id="bill-amount"
            type="number"
            min="0"
            step="0.01"
            placeholder="e.g. 85.00"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            className="input-field"
          />
        </div>

        {/* Tip % selection */}
        <div className="mb-5">
          <p className="block text-sm font-medium text-slate-700 mb-2">Tip Percentage</p>
          <div className="flex flex-wrap gap-2 mb-2" role="group" aria-label="Tip percentage presets">
            {PRESET_TIPS.map((pct) => (
              <button
                key={pct}
                onClick={() => handlePreset(pct)}
                aria-pressed={!isCustom && tipPercent === pct}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-1 ${
                  !isCustom && tipPercent === pct
                    ? "tab-active"
                    : "tab-inactive border border-slate-200"
                }`}
              >
                {pct}%
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="custom-tip" className="text-sm text-slate-600 whitespace-nowrap">
              Custom:
            </label>
            <input
              id="custom-tip"
              type="number"
              min="0"
              max="100"
              step="1"
              placeholder="e.g. 22"
              value={customTip}
              onFocus={handleCustomFocus}
              onChange={(e) => {
                setCustomTip(e.target.value);
                setIsCustom(true);
              }}
              className={`input-field w-28 ${isCustom ? "ring-2 ring-navy-500 border-navy-500" : ""}`}
              aria-label="Custom tip percentage"
            />
            <span className="text-sm text-slate-500">%</span>
          </div>
        </div>

        {/* Number of people */}
        <div className="mb-2">
          <p className="block text-sm font-medium text-slate-700 mb-2">Number of People</p>
          <div className="flex items-center gap-3">
            <button
              onClick={decreasePeople}
              disabled={numPeople <= 1}
              aria-label="Decrease number of people"
              className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed font-bold text-slate-700 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500"
            >
              −
            </button>
            <span
              className="w-8 text-center text-xl font-bold text-slate-800"
              aria-live="polite"
              aria-label={`${numPeople} ${numPeople === 1 ? "person" : "people"}`}
            >
              {numPeople}
            </span>
            <button
              onClick={increasePeople}
              disabled={numPeople >= 20}
              aria-label="Increase number of people"
              className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed font-bold text-slate-700 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500"
            >
              +
            </button>
            <span className="text-sm text-slate-500">{numPeople === 1 ? "person" : "people"}</span>
          </div>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="card" aria-live="polite">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Results <span className="text-slate-400 font-normal text-sm">({activeTip}% tip)</span>
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-5">
            <div className="text-center bg-navy-50 rounded-lg p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-navy-600 mb-1">Tip</p>
              <p className="text-2xl font-bold text-navy-700">{formatCurrency(result.tipAmount)}</p>
            </div>
            <div className="text-center bg-navy-50 rounded-lg p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-navy-600 mb-1">Total</p>
              <p className="text-2xl font-bold text-navy-700">{formatCurrency(result.totalAmount)}</p>
            </div>
            <div className="text-center bg-navy-50 rounded-lg p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-navy-600 mb-1">Per Person</p>
              <p className="text-2xl font-bold text-navy-700">{formatCurrency(result.perPerson)}</p>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            <div className="result-row">
              <span className="text-sm text-slate-600">Tip per person</span>
              <span className="text-sm font-semibold text-slate-800">{formatCurrency(result.tipPerPerson)}</span>
            </div>
            <div className="result-row">
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">Round up per person</span>
                <button
                  role="switch"
                  aria-checked={roundUp}
                  onClick={() => setRoundUp((r) => !r)}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-1 ${
                    roundUp ? "bg-navy-600" : "bg-slate-300"
                  }`}
                  aria-label="Toggle round up"
                >
                  <span
                    className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                      roundUp ? "translate-x-4" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <span className="text-sm font-semibold text-slate-800">
                {roundUp ? formatCurrency(result.perPersonRounded) : "—"}
              </span>
            </div>
          </div>
        </div>
      )}

      {!result && (
        <div className="card flex items-center justify-center text-slate-400 text-sm min-h-[100px]">
          Enter a bill amount to see results.
        </div>
      )}

      <AdSlot slot="PLACEHOLDER" label="Bottom banner" className="mt-8" />
    </div>
  );
}
