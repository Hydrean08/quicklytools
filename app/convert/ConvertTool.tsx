"use client";

import { useState, useMemo } from "react";
import AdSlot from "@/components/AdSlot";
import {
  convert,
  formatResult,
  getConversionFormula,
  UNIT_LISTS,
  type ConvertCategory,
} from "@/lib/convert";

const CATEGORIES: { id: ConvertCategory; label: string }[] = [
  { id: "length", label: "Length" },
  { id: "weight", label: "Weight" },
  { id: "temperature", label: "Temperature" },
  { id: "volume", label: "Volume" },
];

export default function ConvertTool() {
  const [category, setCategory] = useState<ConvertCategory>("length");
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("ft");

  const units = UNIT_LISTS[category];

  const result = useMemo(() => {
    const v = parseFloat(inputValue);
    if (inputValue === "" || isNaN(v)) return null;
    return convert(v, fromUnit, toUnit, category);
  }, [inputValue, fromUnit, toUnit, category]);

  const formula = useMemo(
    () => getConversionFormula(fromUnit, toUnit, category),
    [fromUnit, toUnit, category]
  );

  function handleCategoryChange(cat: ConvertCategory) {
    setCategory(cat);
    const newUnits = UNIT_LISTS[cat];
    setFromUnit(newUnits[0].value);
    setToUnit(newUnits[1]?.value ?? newUnits[0].value);
    setInputValue("");
  }

  function handleSwap() {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Unit Converter</h1>
        <p className="text-slate-500">
          Convert between metric and imperial units instantly — length, weight, temperature, and volume.
        </p>
      </div>

      <AdSlot slot="PLACEHOLDER" label="Top banner" className="mb-6" />

      {/* Category tabs */}
      <div className="flex gap-1 bg-slate-100 p-1 rounded-lg mb-6" role="tablist" aria-label="Conversion category">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={category === cat.id}
            aria-controls={`panel-${cat.id}`}
            onClick={() => handleCategoryChange(cat.id)}
            className={`flex-1 py-2 px-2 rounded-md text-sm font-medium transition-colors ${
              category === cat.id ? "tab-active" : "tab-inactive"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="card" id={`panel-${category}`} role="tabpanel" aria-label={`${category} converter`}>
        <h2 className="text-lg font-semibold text-slate-800 mb-4 capitalize">{category} Conversion</h2>

        {/* From */}
        <div className="mb-3">
          <label htmlFor="from-value" className="block text-sm font-medium text-slate-700 mb-1">
            Convert from
          </label>
          <div className="flex gap-2">
            <input
              id="from-value"
              type="number"
              step="any"
              placeholder="Enter value"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="input-field flex-1"
            />
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="input-field w-44"
              aria-label="From unit"
            >
              {units.map((u) => (
                <option key={u.value} value={u.value}>{u.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Swap button */}
        <div className="flex justify-center mb-3">
          <button
            onClick={handleSwap}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500"
            aria-label="Swap from and to units"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 3v14M4 8l6-6 6 6M4 12l6 6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* To */}
        <div className="mb-5">
          <label htmlFor="to-value" className="block text-sm font-medium text-slate-700 mb-1">
            Converted to
          </label>
          <div className="flex gap-2">
            <input
              id="to-value"
              type="text"
              readOnly
              value={result !== null ? formatResult(result) : ""}
              placeholder="Result"
              className="input-field flex-1 bg-slate-50 font-semibold text-navy-700"
              aria-live="polite"
              aria-label="Conversion result"
            />
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="input-field w-44"
              aria-label="To unit"
            >
              {units.map((u) => (
                <option key={u.value} value={u.value}>{u.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Formula */}
        <div className="bg-navy-50 rounded-lg px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-navy-600 mb-0.5">Conversion rate</p>
          <p className="text-sm text-navy-800 font-mono">{formula}</p>
        </div>
      </div>

      <AdSlot slot="PLACEHOLDER" label="Bottom banner" className="mt-8" />
    </div>
  );
}
