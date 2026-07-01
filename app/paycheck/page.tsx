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

        {/* Block 1 — How to Use */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Paycheck Calculator</h2>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>Choose whether you earn an annual salary or an hourly wage using the toggle at the top of the form.</li>
            <li>Enter your pay rate. For hourly workers, also enter your typical hours per week — the calculator converts that to an annual figure automatically.</li>
            <li>Select your pay frequency: weekly (52 paychecks per year), bi-weekly (26), semi-monthly (24), or monthly (12). This controls how your annual withholding is divided across each paycheck.</li>
            <li>Choose your federal filing status. &ldquo;Single&rdquo; applies the single-filer standard deduction and brackets; &ldquo;Married filing jointly&rdquo; applies the wider married brackets and a larger standard deduction, which usually means less federal tax withheld per paycheck.</li>
            <li>Select your state from the dropdown. States with no income tax — Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming — will show $0 in the state tax line.</li>
            <li>Your estimated gross pay, each withholding line, and net take-home pay update instantly in the results panel on the right.</li>
          </ol>
        </div>

        {/* Block 2 — What Comes Out */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">What Comes Out of Your Paycheck</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Your gross pay is your total earnings before anything is removed. Net pay — the amount deposited into your bank account — is what remains after mandatory withholdings are subtracted. For most employees, four categories of withholding reduce every paycheck.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong className="text-slate-800">Federal income tax</strong> is calculated using the IRS progressive tax brackets for your filing status. The first dollars of your income are taxed at the lowest rates, and each additional tier of income is taxed at a progressively higher rate. Before brackets apply, the IRS allows a standard deduction — $14,600 for single filers and $29,200 for married filing jointly in 2024 — which reduces the income subject to tax. The calculator applies the 2024 brackets and standard deduction to estimate your annual federal liability, then divides it across your pay periods.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong className="text-slate-800">State income tax</strong> depends entirely on where you work. This calculator uses a flat effective rate for each state to approximate state withholding — it is not a bracket-by-bracket simulation of every state&apos;s specific rules, so treat state tax as an estimate. Nine states levy no income tax at all.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong className="text-slate-800">FICA taxes</strong> — Federal Insurance Contributions Act — cover Social Security and Medicare. Unlike income tax, FICA is a flat rate applied to gross wages, not taxable income, so there is no standard deduction to reduce it.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Withholding Type</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Rate</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Wage Cap (2024)</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Paid By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Federal Income Tax</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">10% – 37% (brackets)</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">None</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Employee</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">State Income Tax</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">0% – ~9.9% (varies)</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">None (most states)</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Employee</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Social Security (OASDI)</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">6.2%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">$168,600</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Employee (+ 6.2% employer match)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Medicare (HI)</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">1.45%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">None</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Employee (+ 1.45% employer match)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            Together, Social Security at 6.2% and Medicare at 1.45% total 7.65% of gross wages — commonly called the FICA rate. Your employer pays an identical 7.65% on your behalf, so the combined FICA contribution reaching the government is 15.3%, but you only see the employee half deducted from your paycheck. Social Security withholding stops once your wages cross $168,600 for the year; Medicare has no such ceiling.
          </p>
        </div>

        {/* Block 3 — Worked Example */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">A Worked Example: $60,000 Single Filer, Bi-Weekly Pay</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Here is how the calculator arrives at an estimated take-home for a single filer earning $60,000 per year, paid bi-weekly (26 paychecks). All figures are approximate estimates — your actual withholding will differ based on your W-4 elections, pre-tax benefit deductions, and your state&apos;s exact rules.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Step</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Calculation</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">Annual Amount</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">Per Paycheck</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Gross wages</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Starting point</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">$60,000</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">$2,307.69</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Standard deduction (single)</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">$60,000 &minus; $14,600</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">$45,400 taxable</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">&mdash;</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Federal income tax (est.)</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">10%/12%/22% brackets on $45,400</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">&approx; $5,508</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">&approx; $211.85</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Social Security</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">$60,000 &times; 6.2%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">$3,720</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">$143.08</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Medicare</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">$60,000 &times; 1.45%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">$870</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">$33.46</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">State tax (Texas — none)</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">$60,000 &times; 0%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">$0</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">$0</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">Estimated net pay</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Gross minus all withholdings</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-800">&approx; $49,902</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-800">&approx; $1,919.31</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            In this Texas example, the combined FICA withholding is $4,590 per year (7.65% of $60,000), and federal income tax adds roughly $5,508 for a total annual withholding of about $10,098 — leaving approximately $49,902 in annual take-home pay. If the same person lived in California, the state&apos;s approximate 9.3% effective rate would add another $5,580 in state tax, reducing annual take-home to around $44,322.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            These are estimates. Your real paycheck will vary if your employer withholds extra federal tax based on your W-4, if you have pre-tax deductions for a 401(k) or health insurance that reduce taxable wages, or if your state uses a graduated bracket system rather than the flat rate this calculator applies.
          </p>
        </div>

        {/* Block 4 — Why Take-Home Is Less */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Why Your Take-Home Is Less Than Your Salary</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The gap between your salary and your take-home pay can feel large — and it is, for good reason. Beyond the mandatory withholdings this calculator shows, many employees have additional pre-tax deductions that further reduce the amount deposited each pay period. Understanding these deductions can help you plan your budget accurately.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong className="text-slate-800">Pre-tax benefit deductions</strong> are amounts your employer withholds before calculating taxable wages. Common examples include 401(k) or 403(b) retirement contributions, health insurance premiums, dental and vision premiums, Health Savings Account (HSA) contributions, and Flexible Spending Account (FSA) contributions. Because these come out before taxes, they reduce your taxable income and therefore lower your federal income tax withholding — meaning the tax savings partially offset the cost of the benefit. This calculator does not model these deductions; to include them, subtract your expected pre-tax contributions from your gross salary before entering it in the tool.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong className="text-slate-800">Filing status</strong> has a significant effect on federal withholding. A married couple filing jointly benefits from wider tax brackets and a $29,200 standard deduction (versus $14,600 for single filers in 2024), so the same gross income results in less federal tax withheld per paycheck. If your spouse also works, your combined income could push your household into a higher bracket than each paycheck alone suggests — the IRS provides a multi-job worksheet in the W-4 instructions to help you adjust.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong className="text-slate-800">Tax refunds and balance due</strong> are both signs of imprecise withholding. A large refund means your employer withheld more than your actual tax liability throughout the year — you gave the government an interest-free loan. A balance due means you were under-withheld. Neither is inherently bad, but adjusting your W-4 to target a near-zero balance means your paychecks are as large as possible throughout the year without a surprise bill in April. You can update your W-4 with your employer at any time.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Finally, some states and many cities layer additional taxes on top of federal and state withholding. New York City residents pay a city income tax, for example. This calculator covers only federal and state-level tax; if you live or work in a jurisdiction with a local income tax, your actual take-home will be lower than what is shown here.
          </p>
        </div>

        {/* Block 5 — FAQ */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Why is my take-home pay so much lower than my salary?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Federal income tax, FICA (Social Security + Medicare), and state income tax together can reduce a paycheck by 20–35% or more depending on your income and state. Additionally, most employees also have pre-tax deductions for health insurance, retirement contributions, or other benefits that are not modeled here. The combined effect is that a $60,000 salary typically yields $45,000–$52,000 in actual take-home pay per year.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is FICA and why do I have to pay it?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                FICA stands for Federal Insurance Contributions Act. It funds Social Security (retirement, disability, and survivor benefits) and Medicare (health coverage for people 65 and older). Every employee pays 6.2% of gross wages to Social Security (on wages up to $168,600 in 2024) and 1.45% to Medicare, for a total employee FICA rate of 7.65%. Your employer matches that same 7.65%, doubling the contribution reaching the government.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Does this calculator include state income tax?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes — select your state from the dropdown and the calculator applies an approximate flat effective rate for that state. Nine states (Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming) have no state income tax and will show $0 on that line. Note that the rates are approximations; most states actually use graduated brackets, and some have local or city taxes that this tool does not model.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is the difference between gross pay and net pay?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Gross pay is your total compensation before any deductions — it is the number in your offer letter or employment contract. Net pay (also called take-home pay) is what is deposited into your bank account after federal tax, state tax, Social Security, Medicare, and any other benefit deductions are subtracted. The calculator shows both figures so you can see exactly where the difference goes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How do 401(k) contributions or health insurance premiums change my take-home?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pre-tax benefit deductions like 401(k) contributions and employer-sponsored health insurance premiums reduce your taxable wages before federal income tax is calculated. That means contributing $5,000 per year to a 401(k) does not reduce your paycheck by the full $5,000 — a portion of that amount is offset by the reduction in income tax withheld. This calculator does not model these deductions. To estimate your net pay after pre-tax benefits, subtract your expected annual contributions from your gross salary before entering the figure.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Is this calculator exact, or just an estimate?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                It is an estimate. The federal tax calculation uses 2024 brackets and the standard deduction, which closely approximates withholding for most straightforward situations. State tax uses a single flat effective rate per state rather than each state&apos;s actual bracket structure. The calculator also does not account for pre-tax deductions, local or city income taxes, the Additional Medicare Tax on wages over $200,000, or specific W-4 withholding adjustments. For precise withholding figures, use the IRS Tax Withholding Estimator at irs.gov or speak with a tax professional.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Why do I get a big tax refund every year?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A large refund means your employer withheld more in federal income tax throughout the year than you actually owed. While a refund feels like a windfall, it really means you loaned the government that money interest-free for months. You can reduce future over-withholding by submitting an updated W-4 to your employer — claim the correct filing status and, if applicable, indicate deductions or credits you expect to take. Targeting a refund close to zero maximizes the size of each paycheck.
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
