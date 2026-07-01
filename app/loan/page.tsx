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

        {/* Block 1 — How to Use */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Loan Calculator</h2>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>
              <strong>Enter the loan amount.</strong> This is the total principal you are borrowing — for a mortgage,
              that is the purchase price minus your down payment. For a car loan it is the vehicle price minus any trade-in
              or deposit. Do not include taxes, insurance, or other fees in this field.
            </li>
            <li>
              <strong>Enter the annual interest rate.</strong> Type the rate as a percentage (e.g., 6.5 for 6.5%). Use the
              base interest rate from your lender quote, not the APR. The difference between those two figures is explained
              in the FAQ below.
            </li>
            <li>
              <strong>Enter the loan term in months.</strong> Common terms are 360 months (30 years) or 180 months (15 years)
              for mortgages, 48&ndash;72 months for auto loans, and 12&ndash;84 months for personal loans. The longer the
              term, the lower your monthly payment — but the more total interest you pay over the life of the loan.
            </li>
            <li>
              <strong>Read your results instantly.</strong> The calculator shows your fixed monthly payment, the total amount
              you will repay across all payments, and the total interest charged. A breakdown chart lets you see at a glance
              how much of every dollar you send in goes toward the principal versus the lender&apos;s interest.
            </li>
            <li>
              <strong>Try different scenarios.</strong> Adjusting the loan amount, rate, or term updates the numbers immediately.
              Use this to compare a 15-year versus 30-year mortgage, or to see how much you save by putting a larger down
              payment down and borrowing less.
            </li>
          </ol>
        </div>

        {/* Block 2 — The Formula */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How Monthly Payments Are Calculated</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Every fixed-rate loan uses the standard amortization formula to compute your monthly payment. The formula
            ensures that each payment is exactly the same dollar amount, yet the split between interest and principal
            shifts with every payment made. Here is the formula:
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong>M = P &times; r &times; (1 + r)&#8319; &divide; ((1 + r)&#8319; &minus; 1)</strong>
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Each variable has a specific meaning:
          </p>
          <ul className="space-y-3 text-slate-600 text-sm leading-relaxed mb-4 list-disc list-inside">
            <li>
              <strong>M</strong> — the fixed monthly payment you will make every month for the life of the loan.
            </li>
            <li>
              <strong>P</strong> — the principal, meaning the original amount borrowed before any payments are made.
            </li>
            <li>
              <strong>r</strong> — the monthly interest rate, calculated as the annual rate divided by 12. For a 6% annual
              rate, r = 0.06 &divide; 12 = 0.005 (or one-half of one percent per month).
            </li>
            <li>
              <strong>n</strong> — the total number of monthly payments. A 5-year loan has n = 60; a 30-year mortgage
              has n = 360.
            </li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The numerator, <strong>P &times; r &times; (1 + r)&#8319;</strong>, scales the principal by the compounded
            growth of interest over all n periods. The denominator, <strong>(1 + r)&#8319; &minus; 1</strong>, converts
            that figure into a level annuity — a stream of equal payments that exactly retires the debt.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Each month, the lender first charges interest on the remaining balance: interest due = balance &times; r.
            The rest of your payment (M &minus; interest due) reduces the principal. Because the balance falls a little
            each month, the interest portion shrinks and the principal portion grows — even though the payment stays the
            same. This gradual shift is the essence of amortization.
          </p>
        </div>

        {/* Block 3 — Worked Example */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">A Worked Example</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Suppose you borrow <strong>$25,000</strong> at <strong>6% APR</strong> for <strong>60 months</strong> (5 years).
            Plugging into the formula:
          </p>
          <ul className="space-y-2 text-slate-600 text-sm leading-relaxed mb-4 list-disc list-inside">
            <li>r = 6% &divide; 12 = <strong>0.5% per month</strong> (0.005)</li>
            <li>n = <strong>60 payments</strong></li>
            <li>(1 + 0.005)&#8�&#8060; = 1.005&#8076;&#8304; &asymp; <strong>1.34885</strong></li>
            <li>M = 25,000 &times; (0.005 &times; 1.34885) &divide; (1.34885 &minus; 1) &asymp; <strong>$483.32</strong></li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Over 60 payments you send in 60 &times; $483.32 = <strong>$28,999</strong>. The original loan was $25,000,
            so your total interest cost is roughly <strong>$3,999</strong> — about 16% of what you borrowed.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Now look at the very first payment. At that point your balance is still the full $25,000, so the interest
            charge is $25,000 &times; 0.005 = <strong>$125.00</strong>. That means only $483.32 &minus; $125.00 =
            <strong> $358.32</strong> goes toward paying down the loan itself. More than a quarter of your first
            payment is pure interest.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            By payment 30 (the midpoint), the remaining balance has fallen to about $13,200. Interest that month is
            $13,200 &times; 0.005 = $66 — so about $417 of the $483.32 payment now reduces principal. By the final
            payment, virtually the entire payment is principal and the interest charge is just a few cents.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            This shift is why paying off a loan early — even by a small amount — saves disproportionately more
            interest than the math of a single extra payment would suggest. Every dollar of extra principal paid
            today eliminates the interest that dollar would have generated across all remaining months.
          </p>
        </div>

        {/* Block 4 — Total Interest and Extra Payments */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Total Interest and Extra Payments</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The loan term and interest rate are the two biggest levers on total interest paid. The table below uses the
            same $25,000 principal to illustrate the impact of changing each variable:
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Rate</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Term</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Monthly Payment</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Total Interest</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">6%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">36 months</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">$760.55</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">$2,380</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">6%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">60 months</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">$483.32</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">$3,999</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">6%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">84 months</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">$368.16</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">$5,926</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">4%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">60 months</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">$460.41</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">$2,625</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">8%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">60 months</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">$506.91</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">$5,415</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Notice that stretching the 6% loan from 36 to 84 months more than doubles the total interest ($2,380 vs $5,926)
            while only saving $392 per month. Meanwhile, a 2-point drop in rate (from 8% to 6% over 60 months) saves
            roughly $1,416 in interest — often worth the effort of shopping lenders or improving your credit score first.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong>Extra payments are powerful.</strong> Making one additional full payment per year on a 60-month loan
            effectively turns it into a roughly 51-month loan, saving you about 9 months of payments and a meaningful
            slice of interest. On a 30-year mortgage at 6%, one extra payment per year can shorten the loan by 4&ndash;5
            years and cut tens of thousands in interest.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            <strong>APR vs. interest rate:</strong> lenders are required to disclose both figures. The stated interest
            rate drives the monthly payment formula above. The APR (Annual Percentage Rate) adds origination fees,
            points, and certain closing costs to that rate, spreading them across the loan term. Always compare APRs —
            not just interest rates — when choosing between loan offers, because a low rate with high fees can cost more
            than a slightly higher rate with no fees.
          </p>
        </div>

        {/* Block 5 — FAQ */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is the difference between APR and interest rate?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The interest rate is the annual cost of borrowing the principal, expressed as a percentage. APR (Annual
                Percentage Rate) is a broader measure that folds in origination fees, discount points, mortgage broker
                fees, and certain closing costs. Because APR distributes those one-time costs over the entire loan term,
                it is always equal to or higher than the stated rate. Use the interest rate when calculating your monthly
                payment; use APR to compare the true all-in cost across competing loan offers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Does this calculator include property taxes, insurance, or PMI?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No. This calculator computes principal and interest only — the two components governed by the amortization
                formula. A real mortgage payment typically also includes property taxes (escrowed monthly), homeowner&apos;s
                insurance, and PMI (private mortgage insurance) if your down payment is less than 20% of the purchase
                price. Depending on your area and loan size, those additions can range from a few hundred to over a
                thousand dollars per month on top of the P&amp;I figure shown here.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is amortization, exactly?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Amortization is the process of paying off a debt through scheduled, equal payments over time. Each payment
                is split between interest (charged on the remaining balance) and principal (the actual debt reduction). In
                the early months of a loan, interest consumes most of each payment because the balance is high. As the
                balance falls, less interest accrues and more of each payment chips away at the principal — even though the
                payment amount never changes. By the final payment, almost the entire amount is principal.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is the difference between a fixed-rate and a variable-rate loan?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A fixed-rate loan locks the interest rate for the entire term, so your monthly payment never changes —
                ideal for budgeting certainty. A variable-rate (or adjustable-rate) loan starts with a rate that can
                change periodically based on a benchmark index like SOFR. ARMs often offer a lower initial rate, which
                can be advantageous if you plan to sell or refinance before the rate adjusts. This calculator models
                fixed-rate loans only. If you have a variable-rate loan, use the current rate for an estimate and
                recalculate whenever your rate adjusts.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How do extra payments reduce my loan faster?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Any amount you pay above the required monthly payment — if applied to the principal — directly lowers
                the balance on which next month&apos;s interest is calculated. That smaller balance generates less interest,
                so more of your next regular payment goes to principal too, creating a compounding acceleration. Even
                a modest extra $50&ndash;$100 per month can shorten a 30-year mortgage by two or more years and save
                thousands in interest. Always tell your lender to apply extra funds to principal, not to prepaid
                future interest, and verify this on your statement.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Can I use this calculator for auto, personal, or student loans?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes — the amortization formula is the same for any fixed-rate installment loan regardless of what the
                money is used for. Auto loans typically run 36&ndash;72 months; personal loans 12&ndash;84 months; federal
                student loans 120&ndash;300 months depending on the repayment plan. Just enter the correct principal,
                rate, and term and the calculator will give you an accurate monthly payment and total interest figure.
                Note that student loans with income-driven repayment plans use a different structure and are not
                modeled here.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Why does paying off my loan early save so much interest?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Interest is charged as a percentage of the outstanding balance each month. When you reduce the balance
                ahead of schedule, every future month&apos;s interest charge is lower than it would have been. Those savings
                compound: a lower balance means less interest in month two, which means even more of the regular payment
                goes to principal in month three, and so on. The front-loading of interest in amortized loans means the
                savings from early payoff are concentrated in the periods you eliminate from the end of the schedule —
                periods where your regular payments would have been mostly principal anyway but you would still have paid
                interest on a nonzero balance.
              </p>
            </div>

          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-200 pt-6">
          <strong>Disclaimer:</strong> Results are estimates for informational purposes only and do not constitute
          financial or mortgage advice. Contact a licensed lender or financial advisor for personalized guidance.
        </p>

      </section>
    </>
  );
}
