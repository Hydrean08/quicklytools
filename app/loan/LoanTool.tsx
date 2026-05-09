"use client";

import { useState, useMemo } from "react";
import AdSlot from "@/components/AdSlot";
import { calcLoan } from "@/lib/loan";

const TERM_OPTIONS = [1, 2, 3, 5, 7, 10, 15, 20, 25, 30];

function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
}

export default function LoanTool() {
  const [principal, setPrincipal] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [termYears, setTermYears] = useState(30);

  const result = useMemo(() => {
    const p = parseFloat(principal);
    const r = parseFloat(annualRate);
    if (!p || p <= 0 || r < 0 || isNaN(r)) return null;
    return calcLoan(p, r, termYears * 12);
  }, [principal, annualRate, termYears]);

  const principalPct = result
    ? (parseFloat(principal) / result.totalPayment) * 100
    : 50;
  const interestPct = result ? 100 - principalPct : 50;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Loan & Mortgage Calculator</h1>
        <p className="text-slate-500">
          Calculate your monthly payment, total interest, and amortization breakdown for any loan or mortgage.
        </p>
      </div>

      <AdSlot slot="PLACEHOLDER" label="Top banner" className="mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="card">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Loan Details</h2>

          <div className="mb-4">
            <label htmlFor="loan-principal" className="block text-sm font-medium text-slate-700 mb-1">
              Loan Amount ($)
            </label>
            <input
              id="loan-principal"
              type="number"
              min="0"
              step="1000"
              placeholder="e.g. 300000"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="loan-rate" className="block text-sm font-medium text-slate-700 mb-1">
              Annual Interest Rate (%)
            </label>
            <input
              id="loan-rate"
              type="number"
              min="0"
              max="100"
              step="0.01"
              placeholder="e.g. 6.5"
              value={annualRate}
              onChange={(e) => setAnnualRate(e.target.value)}
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="loan-term" className="block text-sm font-medium text-slate-700 mb-1">
              Loan Term (years)
            </label>
            <select
              id="loan-term"
              value={termYears}
              onChange={(e) => setTermYears(parseInt(e.target.value))}
              className="input-field"
            >
              {TERM_OPTIONS.map((y) => (
                <option key={y} value={y}>{y} years</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="card">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Results</h2>

          {result ? (
            <div aria-live="polite">
              <div className="bg-navy-50 rounded-lg p-4 mb-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-600 mb-1">Monthly Payment</p>
                <p className="text-4xl font-bold text-navy-700">{formatCurrency(result.monthlyPayment)}</p>
              </div>

              <div className="divide-y divide-slate-100">
                <div className="result-row">
                  <span className="text-sm text-slate-600">Total Payment</span>
                  <span className="text-sm font-semibold text-slate-800">{formatCurrency(result.totalPayment)}</span>
                </div>
                <div className="result-row">
                  <span className="text-sm text-slate-600">Total Interest</span>
                  <span className="text-sm font-semibold text-slate-800">{formatCurrency(result.totalInterest)}</span>
                </div>
                <div className="result-row">
                  <span className="text-sm text-slate-600">Interest as % of Loan</span>
                  <span className="text-sm font-semibold text-slate-800">{result.interestPercent.toFixed(1)}%</span>
                </div>
              </div>

              {/* Principal vs Interest bar */}
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Principal vs Interest</p>
                <div className="flex rounded-full overflow-hidden h-4" role="img" aria-label={`${principalPct.toFixed(0)}% principal, ${interestPct.toFixed(0)}% interest`}>
                  <div
                    className="bg-navy-600 transition-all"
                    style={{ width: `${principalPct}%` }}
                  />
                  <div
                    className="bg-orange-400 transition-all"
                    style={{ width: `${interestPct}%` }}
                  />
                </div>
                <div className="flex justify-between mt-1.5 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className="inline-block w-2.5 h-2.5 rounded-sm bg-navy-600" aria-hidden="true" />
                    Principal ({principalPct.toFixed(0)}%)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="inline-block w-2.5 h-2.5 rounded-sm bg-orange-400" aria-hidden="true" />
                    Interest ({interestPct.toFixed(0)}%)
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-slate-400 text-sm">Enter your loan details to see results.</p>
          )}
        </div>
      </div>

      <AdSlot slot="PLACEHOLDER" label="Bottom banner" className="mt-8" />
    </div>
  );
}
