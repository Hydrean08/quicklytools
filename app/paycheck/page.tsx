import type { Metadata } from "next";
import PaycheckTool from "./PaycheckTool";

export const metadata: Metadata = {
  title: "Free Paycheck Calculator — Estimate Take-Home Pay After Taxes",
  description:
    "Calculate your net pay after federal tax, state tax, Social Security, and Medicare. Free paycheck estimator for all 50 states — no signup required.",
};

export default function PaycheckPage() {
  return (
    <>
      <PaycheckTool />

      <section className="max-w-2xl mx-auto px-4 pb-16 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Paycheck Calculator</h2>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>Select whether you are paid hourly or on a salary basis.</li>
            <li>Enter your pay rate and choose your pay frequency (weekly, bi-weekly, semi-monthly, or monthly).</li>
            <li>Select your federal filing status (Single, Married Filing Jointly, etc.) and enter your W-4 allowances.</li>
            <li>Choose your state for state income tax withholding. Select "No state tax" if your state has no income tax.</li>
            <li>Your estimated gross pay, each deduction line, and net take-home pay appear immediately.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">What Gets Deducted From Your Paycheck</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Most employees see four standard deductions on every paycheck before optional deductions like health insurance or 401(k) contributions:
          </p>
          <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <li><strong className="text-slate-800">Federal income tax:</strong> Withheld based on your taxable income and W-4 filing status using IRS tax brackets. This is an estimate — your actual tax liability is settled when you file your annual return.</li>
            <li><strong className="text-slate-800">State income tax:</strong> Varies significantly by state. Nine states have no income tax: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming.</li>
            <li><strong className="text-slate-800">Social Security (OASDI):</strong> 6.2% of gross wages up to the annual wage base ($168,600 in 2024). Your employer matches this 6.2%.</li>
            <li><strong className="text-slate-800">Medicare:</strong> 1.45% of all gross wages with no cap. An additional 0.9% applies to wages over $200,000 ($250,000 for married filing jointly).</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Why is my first paycheck smaller than I expected?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Some employers withhold at a flat supplemental rate for your first paycheck, or annualize your income from the first pay period which can over-withhold federal tax. It often evens out by your second or third check. If it persists, check your W-4 on file with HR.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What are W-4 allowances and how do they affect withholding?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Allowances reduce the amount of income subject to withholding. More allowances = less withheld each paycheck = smaller refund (or possible balance due) at tax time. Fewer allowances = more withheld = larger refund. The 2020 W-4 redesign replaced allowances with a dollar-amount system; older W-4s still in effect use the allowance model.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Is this calculator accurate for my exact situation?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                This tool uses approximate federal and state tax rates and is designed for estimation. It does not account for pre-tax deductions (401k, HSA, FSA, health insurance premiums), local city taxes, additional Medicare surcharge for high earners, or supplemental wages. For exact withholding, use the IRS Tax Withholding Estimator or consult a tax professional.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is the difference between gross pay and net pay?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Gross pay is your total earnings before any deductions. Net pay (take-home pay) is what lands in your bank account after all taxes and deductions are subtracted. The gap between the two is commonly 20–35% for most workers depending on income level and state.
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-200 pt-6">
          <strong>Disclaimer:</strong> This calculator uses approximate tax rates and is for estimation purposes only. It does not constitute tax or financial advice. Consult a licensed tax professional for accurate withholding guidance.
        </p>
      </section>
    </>
  );
}
