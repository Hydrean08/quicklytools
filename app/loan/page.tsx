import type { Metadata } from "next";
import LoanTool from "./LoanTool";

export const metadata: Metadata = {
  title: "Loan & Mortgage Calculator — Monthly Payment Estimator",
  description:
    "Calculate monthly loan payments, total interest, and full amortization schedule. Free mortgage and loan calculator for any term and interest rate.",
};

export default function LoanPage() {
  return (
    <>
      <LoanTool />

      <section className="max-w-3xl mx-auto px-4 pb-16 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Loan Calculator</h2>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>Enter the loan amount — the total amount you are borrowing, not including a down payment.</li>
            <li>Enter the annual interest rate. Use the rate from your lender quote, not the APR (explained below).</li>
            <li>Select the loan term in years. Common terms are 15 and 30 years for mortgages, 3–7 years for auto loans.</li>
            <li>Your monthly payment, total amount paid, and total interest appear instantly along with a principal-vs-interest breakdown.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How Loan Payments Are Calculated</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Monthly loan payments are calculated using the standard amortization formula. Each monthly payment covers the interest accrued that month plus a portion of the principal. Early payments are mostly interest; later payments shift toward principal as the balance decreases.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            For example, on a $300,000 mortgage at 6.5% for 30 years: the monthly payment is about $1,896. Over 30 years you pay roughly $382,600 in interest — more than the original loan amount. Choosing a 15-year term instead raises the monthly payment to about $2,614 but cuts total interest to around $170,500.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Even small extra payments toward principal each month can meaningfully reduce your total interest paid and shorten your loan term.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is the difference between interest rate and APR?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The interest rate is the cost of borrowing the principal. APR (Annual Percentage Rate) includes the interest rate plus fees like origination charges, making it a broader measure of the loan's true cost. Use the interest rate (not APR) in this calculator for monthly payment math; compare APRs across lenders when shopping for the best deal.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How does a shorter loan term affect my payments?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A shorter term means higher monthly payments but significantly less total interest paid over the life of the loan. A longer term lowers your monthly payment but costs more in total interest. Use this calculator to compare terms and find the balance that fits your budget.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Does this calculator include taxes, insurance, or PMI?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No — this calculator shows principal and interest only. Your actual mortgage payment will also include property taxes, homeowner's insurance, and PMI (private mortgage insurance) if your down payment is less than 20%. Add roughly $200–600/month for taxes and insurance depending on your area.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Can I use this for auto loans, personal loans, or student loans?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes. The formula works for any fixed-rate installment loan. Auto loans are typically 36–72 months, personal loans 1–7 years, and student loans 10–25 years. Just enter the loan amount, rate, and term for accurate payment estimates.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What happens if I make extra payments?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Extra payments applied to the principal reduce your remaining balance faster, which means less interest accrues over time. Even an extra $100–200 per month on a 30-year mortgage can cut years off the loan and save tens of thousands in interest. Always confirm with your lender that extra payments are applied to principal, not future interest.
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-200 pt-6">
          <strong>Disclaimer:</strong> Results are estimates for informational purposes only and do not constitute financial or mortgage advice. Contact a licensed lender or financial advisor for personalized guidance.
        </p>
      </section>
    </>
  );
}
