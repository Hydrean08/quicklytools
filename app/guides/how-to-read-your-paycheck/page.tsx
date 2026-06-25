import type { Metadata } from "next";
import { getGuide } from "@/lib/guides";
import { GuideLayout, H2, UL, Callout } from "@/components/guide";

const guide = getGuide("how-to-read-your-paycheck")!;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.description,
};

export default function Page() {
  return (
    <GuideLayout guide={guide}>
      <p>
        The first time you compare your annual salary to the amount that actually lands in your bank
        account, the gap can be a shock. A $60,000 salary does not mean $5,000 a month in your
        pocket. The difference is explained, line by line, on your pay stub — and once you can read
        it, you can spot errors, plan your budget, and make smarter choices about benefits and
        withholding. Here is what every section means.
      </p>

      <H2>Gross pay: where everything starts</H2>
      <p>
        Gross pay is your earnings before any deductions. For a salaried employee, it is your annual
        salary divided by the number of pay periods in the year — 26 for biweekly, 24 for
        semi-monthly, 12 for monthly. For an hourly employee, it is hours worked times your rate,
        plus any overtime (typically 1.5× for hours over 40 in a week). Bonuses, commissions, and
        tips also show up here. Every deduction below is calculated from this number.
      </p>

      <H2>Federal income tax withholding</H2>
      <p>
        This is usually the largest single deduction. Your employer estimates your annual federal
        tax bill based on the information you entered on Form W-4 — your filing status, dependents,
        and any extra withholding you requested — and takes a slice out of each paycheck. The US
        uses a progressive system, so only the income that falls inside each bracket is taxed at
        that bracket&apos;s rate. A common misconception is that &ldquo;moving into a higher bracket&rdquo;
        taxes all your income at the higher rate; it does not. Only the dollars above the threshold
        are taxed at the higher rate.
      </p>
      <Callout>
        Withholding is an estimate, not your final tax bill. If too much is withheld across the
        year, you get a refund at tax time. If too little is withheld, you owe. Adjusting your W-4
        is how you move that dial.
      </Callout>

      <H2>FICA: Social Security and Medicare</H2>
      <p>
        FICA stands for the Federal Insurance Contributions Act, and it funds two programs you will
        likely draw on later. These are flat percentages, not bracketed:
      </p>
      <UL>
        <li>
          <strong>Social Security — 6.2%</strong> of your gross pay, up to an annual wage cap that
          rises most years. Earnings above the cap are not taxed for Social Security.
        </li>
        <li>
          <strong>Medicare — 1.45%</strong> of all your gross pay, with no cap. High earners pay an
          additional 0.9% on wages above a threshold.
        </li>
      </UL>
      <p>
        Your employer pays a matching 6.2% and 1.45% that you never see on your stub. If you are
        self-employed, you pay both halves yourself — the &ldquo;self-employment tax.&rdquo;
      </p>

      <H2>State and local taxes</H2>
      <p>
        Most states levy their own income tax, withheld much like federal tax. A handful — including
        Texas, Florida, and Washington — have no state income tax at all, which is why two people
        with identical salaries in different states can have very different take-home pay. Some
        cities and counties add a local income tax on top. If you see a deduction you do not
        recognize, check whether your municipality has one.
      </p>

      <H2>Pre-tax deductions: the order matters</H2>
      <p>
        Some deductions come out <em>before</em> taxes are calculated, which lowers your taxable
        income and therefore your tax. These are some of the most valuable lines on your stub:
      </p>
      <UL>
        <li><strong>401(k) or 403(b) contributions</strong> — retirement savings, taxed later when you withdraw.</li>
        <li><strong>Health, dental, and vision insurance premiums</strong> — usually pre-tax.</li>
        <li><strong>HSA and FSA contributions</strong> — for medical and dependent-care expenses.</li>
      </UL>
      <p>
        Because these reduce your taxable income, a dollar contributed to a pre-tax 401(k) costs you
        less than a dollar of take-home pay. That is the quiet advantage of these accounts.
      </p>

      <H2>Post-tax deductions</H2>
      <p>
        Other deductions come out after taxes: Roth 401(k) contributions, wage garnishments, union
        dues, and some insurance products. These do not lower your taxable income, but a Roth
        account grows tax-free, so the tax is simply paid now instead of later.
      </p>

      <H2>Net pay: what you actually take home</H2>
      <p>
        Net pay — the &ldquo;take-home&rdquo; figure — is gross pay minus every deduction above. This is the
        number that hits your bank account, and it is the one to budget around. It is also the
        number our paycheck calculator estimates: enter your salary, filing status, and state, and
        it breaks down each deduction so you can see exactly where your money goes before you ever
        get a stub.
      </p>

      <H2>Reading the year-to-date columns</H2>
      <p>
        Most stubs show two columns: the current period and year-to-date (YTD). The YTD column is
        worth a glance every few months. It confirms you are on track with retirement contributions,
        shows how close you are to the Social Security wage cap, and gives you the running totals you
        will need at tax time. If a number looks off, it is far easier to fix a payroll error in
        March than to untangle it the following April.
      </p>
    </GuideLayout>
  );
}
