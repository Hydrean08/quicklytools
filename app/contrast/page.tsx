"use client";

import { useState, useMemo } from "react";
import AdSlot from "@/components/AdSlot";
import { checkContrast, isValidHex } from "@/lib/contrast";

function PassBadge({ pass }: { pass: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
        pass ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
      }`}
      aria-label={pass ? "Pass" : "Fail"}
    >
      {pass ? "✓ Pass" : "✗ Fail"}
    </span>
  );
}

function ColorInput({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const normalized = value.startsWith("#") ? value : `#${value}`;
  const isValid = isValidHex(value);

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <div className="flex gap-2 items-center">
        <input
          type="color"
          value={isValid ? normalized : "#000000"}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-12 rounded border border-slate-300 cursor-pointer p-0.5 bg-white"
          aria-label={`${label} color picker`}
        />
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#000000"
          maxLength={7}
          className={`input-field font-mono ${!isValid && value ? "border-red-400 focus:ring-red-400" : ""}`}
          aria-describedby={!isValid && value ? `${id}-error` : undefined}
        />
      </div>
      {!isValid && value && (
        <p id={`${id}-error`} className="text-xs text-red-500 mt-1" role="alert">
          Enter a valid hex color (e.g. #3f3bc8)
        </p>
      )}
    </div>
  );
}

export default function ContrastPage() {
  const [fg, setFg] = useState("#1c1e4b");
  const [bg, setBg] = useState("#ffffff");

  const result = useMemo(() => {
    if (!isValidHex(fg) || !isValidHex(bg)) return null;
    return checkContrast(fg, bg);
  }, [fg, bg]);

  const fgNorm = fg.startsWith("#") ? fg : `#${fg}`;
  const bgNorm = bg.startsWith("#") ? bg : `#${bg}`;
  const fgValid = isValidHex(fg);
  const bgValid = isValidHex(bg);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Color Contrast Checker</h1>
        <p className="text-slate-500">
          Check WCAG 2.2 contrast ratios for text and background colors. Instant AA/AAA pass/fail feedback.
        </p>
      </div>

      <AdSlot slot="PLACEHOLDER" label="Top banner" className="mb-6" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inputs */}
        <section className="card" aria-label="Color inputs">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Colors</h2>

          <div className="space-y-4 mb-6">
            <ColorInput id="fg-color" label="Foreground (text)" value={fg} onChange={setFg} />
            <ColorInput id="bg-color" label="Background" value={bg} onChange={setBg} />
          </div>

          {/* Live preview */}
          <div>
            <p className="text-sm font-medium text-slate-700 mb-2">Preview</p>
            <div
              className="rounded-lg p-5 border border-slate-200"
              style={{
                backgroundColor: bgValid ? bgNorm : "#ffffff",
                color: fgValid ? fgNorm : "#000000",
              }}
              aria-label="Color contrast preview"
            >
              <p className="text-lg font-bold mb-1">The quick brown fox</p>
              <p className="text-sm">Normal text sample (16px)</p>
              <p className="text-xs mt-2 opacity-75">Small text sample (12px)</p>
            </div>

            {/* Swap button */}
            <button
              onClick={() => {
                setFg(bg);
                setBg(fg);
              }}
              className="mt-3 w-full py-2 px-4 rounded-lg border border-slate-200 text-sm text-slate-600
                         hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500"
            >
              ⇄ Swap Colors
            </button>
          </div>
        </section>

        {/* Results */}
        <section className="card" aria-label="Contrast results" aria-live="polite">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Results</h2>

          {result ? (
            <>
              {/* Ratio */}
              <div className="bg-navy-50 rounded-lg p-4 text-center mb-5">
                <p className="text-4xl font-bold text-navy-700">{result.ratioDisplay}</p>
                <p className="text-sm text-slate-500 mt-1">Contrast Ratio</p>
              </div>

              {/* WCAG grid */}
              <div className="divide-y divide-slate-100 rounded-lg border border-slate-200 overflow-hidden mb-5">
                <div className="result-row px-4">
                  <div>
                    <p className="text-sm font-medium text-slate-700">WCAG AA — Normal text</p>
                    <p className="text-xs text-slate-400">Minimum 4.5:1</p>
                  </div>
                  <PassBadge pass={result.wcagAANormal} />
                </div>
                <div className="result-row px-4">
                  <div>
                    <p className="text-sm font-medium text-slate-700">WCAG AA — Large text</p>
                    <p className="text-xs text-slate-400">Minimum 3:1 (18px+ or 14px+ bold)</p>
                  </div>
                  <PassBadge pass={result.wcagAALarge} />
                </div>
                <div className="result-row px-4">
                  <div>
                    <p className="text-sm font-medium text-slate-700">WCAG AAA — Normal text</p>
                    <p className="text-xs text-slate-400">Enhanced 7:1</p>
                  </div>
                  <PassBadge pass={result.wcagAAANormal} />
                </div>
                <div className="result-row px-4">
                  <div>
                    <p className="text-sm font-medium text-slate-700">WCAG AAA — Large text</p>
                    <p className="text-xs text-slate-400">Enhanced 4.5:1</p>
                  </div>
                  <PassBadge pass={result.wcagAAALarge} />
                </div>
              </div>

              {/* Suggestion */}
              {result.suggestedColor && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-amber-800 mb-2">
                    Suggested fix for AA compliance
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded border border-slate-300 flex-shrink-0"
                      style={{ backgroundColor: result.suggestedColor }}
                      aria-hidden="true"
                    />
                    <code className="text-sm font-mono text-amber-900">{result.suggestedColor}</code>
                    <button
                      onClick={() => setFg(result.suggestedColor!)}
                      className="ml-auto text-xs text-amber-700 hover:text-amber-900 underline focus:outline-none focus:ring-1 focus:ring-amber-500 rounded"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-48 text-slate-400 text-sm">
              Enter valid hex colors to see results.
            </div>
          )}
        </section>
      </div>

      <AdSlot slot="PLACEHOLDER" label="Bottom banner" className="mt-8" />
    </div>
  );
}
