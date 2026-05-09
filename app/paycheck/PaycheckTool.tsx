"use client";

import { useState, useMemo } from "react";
import AdSlot from "@/components/AdSlot";
import {
  calculatePaycheck,
  STATE_TAX_RATES,
  calcPeriodsPerYear,
  type FilingStatus,
  type PayFrequency,
} from "@/lib/paycheck";

const PAY_FREQUENCY_LABELS: Record<PayFrequency, string> = {
  weekly: "Weekly (52/yr)",
  biweekly: "Bi-Weekly (26/yr)",
  semimonthly: "Semi-Monthly (24/yr)",
  monthly: "Monthly (12/yr)",
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}

function formatPercent(value: number): string {
  return (value * 100).toFixed(1) + "%";
}

export default function PaycheckTool() {
  const [grossInput, setGrossInput] = useState("");
  const [inputType, setInputType] = useState<"annual" | "hourly">("annual");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [payFrequency, setPayFrequency] = useState<PayFrequency>("biweekly");
  const [filingStatus, setFilingStatus] = useState<FilingStatus>("single");
  const [stateCode, setStateCode] = useState("TX");

  const grossAnnual = useMemo(() => {
    const val = parseFloat(grossInput.replace(/,/g, ""));
    if (isNaN(val) || val <= 0) return 0;
    if (inputType === "hourly") {
      const hrs = parseFloat(hoursPerWeek) || 40;
      return val * hrs * 52;
    }
    return val;
  }, [grossInput, inputType, hoursPerWeek]);

  const result = useMemo(() => {
    if (grossAnnual <= 0) return null;
    return calculatePaycheck({ grossAnnual, payFrequency, filingStatus, stateCode });
  }, [grossAnnual, payFrequency, filingStatus, stateCode]);

  const periodLabel = payFrequency.charAt(0).toUpperCase() + payFrequency.slice(1);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Paycheck Calculator</h1>
        <p className="text-slate-500">
          Estimate your take-home pay after federal taxes, state taxes, Social Security, and Medicare.
          Uses 2024 tax brackets and approximate state flat rates.
        </p>
      </div>

      {/* Top ad */}
      <AdSlot slot="PLACEHOLDER" label="Top banner" className="mb-6" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inputs */}
        <section className="card" aria-label="Calculator inputs">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Your Information</h2>

          {/* Input type toggle */}
          <div className="mb-4">
            <fieldset>
              <legend className="block text-sm font-medium text-slate-700 mb-1">
                Salary type
              </legend>
              <div className="flex rounded-lg border border-slate-300 overflow-hidden">
                {(["annual", "hourly"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setInputType(type)}
                    className={`flex-1 py-2 text-sm font-medium transition-colors ${
                      inputType === type ? "tab-active" : "tab-inactive"
                    }`}
                    aria-pressed={inputType === type}
                  >
                    {type === "annual" ? "Annual salary" : "Hourly wage"}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Gross input */}
          <div className="mb-4">
            <label htmlFor="gross-input" className="block text-sm font-medium text-slate-700 mb-1">
              {inputType === "annual" ? "Annual salary ($)" : "Hourly wage ($)"}
            </label>
            <input
              id="gross-input"
              type="number"
              min="0"
              step="0.01"
              value={grossInput}
              onChange={(e) => setGrossInput(e.target.value)}
              placeholder={inputType === "annual" ? "60000" : "25.00"}
              className="input-field"
              aria-describedby="gross-hint"
            />
            <p id="gross-hint" className="text-xs text-slate-400 mt-1">
              {inputType === "annual"
                ? "Enter your gross annual salary before any deductions."
                : "Enter your hourly rate before taxes."}
            </p>
          </div>

          {/* Hours per week (only for hourly) */}
          {inputType === "hourly" && (
            <div className="mb-4">
              <label htmlFor="hours-per-week" className="block text-sm font-medium text-slate-700 mb-1">
                Hours per week
              </label>
              <input
                id="hours-per-week"
                type="number"
                min="1"
                max="168"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(e.target.value)}
                className="input-field"
              />
            </div>
          )}

          {/* Pay frequency */}
          <div className="mb-4">
            <label htmlFor="pay-frequency" className="block text-sm font-medium text-slate-700 mb-1">
              Pay frequency
            </label>
            <select
              id="pay-frequency"
              value={payFrequency}
              onChange={(e) => setPayFrequency(e.target.value as PayFrequency)}
              className="input-field"
            >
              {(Object.entries(PAY_FREQUENCY_LABELS) as [PayFrequency, string][]).map(
                ([val, label]) => (
                  <option key={val} value={val}>
                    {label}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Filing status */}
          <div className="mb-4">
            <fieldset>
              <legend className="block text-sm font-medium text-slate-700 mb-1">
                Federal filing status
              </legend>
              <div className="flex rounded-lg border border-slate-300 overflow-hidden">
                {(["single", "married"] as FilingStatus[]).map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setFilingStatus(status)}
                    className={`flex-1 py-2 text-sm font-medium transition-colors capitalize ${
                      filingStatus === status ? "tab-active" : "tab-inactive"
                    }`}
                    aria-pressed={filingStatus === status}
                  >
                    {status === "single" ? "Single" : "Married filing jointly"}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          {/* State */}
          <div className="mb-2">
            <label htmlFor="state-select" className="block text-sm font-medium text-slate-700 mb-1">
              State
            </label>
            <select
              id="state-select"
              value={stateCode}
              onChange={(e) => setStateCode(e.target.value)}
              className="input-field"
            >
              {Object.entries(STATE_TAX_RATES)
                .sort(([, a], [, b]) => a.name.localeCompare(b.name))
                .map(([code, { name }]) => (
                  <option key={code} value={code}>
                    {name} ({code})
                  </option>
                ))}
            </select>
          </div>
        </section>

        {/* Results */}
        <section aria-label="Calculation results" aria-live="polite">
          {result ? (
            <div className="card">
              <h2 className="text-lg font-semibold text-slate-800 mb-1">
                Per Paycheck Breakdown
              </h2>
              <p className="text-sm text-slate-500 mb-4">
                {calcPeriodsPerYear(payFrequency)} paychecks/year &middot;{" "}
                {formatCurrency(grossAnnual)} gross annual
              </p>

              {/* Net pay highlight */}
              <div className="bg-navy-950 rounded-lg p-4 mb-4 text-center">
                <p className="text-navy-300 text-sm mb-1">Net take-home per {payFrequency === "semimonthly" ? "period" : "paycheck"}</p>
                <p className="text-3xl font-bold text-white">
                  {formatCurrency(result.netPay)}
                </p>
                <p className="text-navy-300 text-sm mt-1">
                  {formatCurrency(result.annualNet)} / year
                </p>
              </div>

              <div className="space-y-1">
                <div className="result-row">
                  <span className="text-slate-600 text-sm">Gross pay</span>
                  <span className="font-medium text-slate-900">{formatCurrency(result.grossPerPeriod)}</span>
                </div>
                <div className="result-row">
                  <span className="text-slate-600 text-sm">
                    Federal income tax{" "}
                    <span className="text-slate-400">({formatPercent(result.effectiveFederalRate)} eff.)</span>
                  </span>
                  <span className="font-medium text-red-600">- {formatCurrency(result.federalTax)}</span>
                </div>
                <div className="result-row">
                  <span className="text-slate-600 text-sm">
                    {STATE_TAX_RATES[stateCode]?.name ?? stateCode} state tax{" "}
                    <span className="text-slate-400">({formatPercent(result.effectiveStateRate)})</span>
                  </span>
                  <span className="font-medium text-red-600">- {formatCurrency(result.stateTax)}</span>
                </div>
                <div className="result-row">
                  <span className="text-slate-600 text-sm">Social Security (6.2%)</span>
                  <span className="font-medium text-red-600">- {formatCurrency(result.socialSecurity)}</span>
                </div>
                <div className="result-row">
                  <span className="text-slate-600 text-sm">Medicare (1.45%)</span>
                  <span className="font-medium text-red-600">- {formatCurrency(result.medicare)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t-2 border-slate-300 mt-2">
                  <span className="font-semibold text-slate-800">Net pay</span>
                  <span className="font-bold text-green-700 text-lg">{formatCurrency(result.netPay)}</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 mt-4">
                * Estimates only. Uses 2024 federal brackets and approximate state flat rates.
                Does not include pre-tax deductions (401k, HSA, etc.).
              </p>
            </div>
          ) : (
            <div className="card flex items-center justify-center min-h-[200px] text-center">
              <p className="text-slate-400">
                Enter your salary details to see your paycheck breakdown.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* Bottom ad */}
      <AdSlot slot="PLACEHOLDER" label="Bottom banner" className="mt-8" />
    </div>
  );
}
