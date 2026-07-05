import type { Metadata } from "next";
import { getGuide } from "@/lib/guides";
import { GuideLayout, H2, UL, Callout } from "@/components/guide";

const guide = getGuide("how-loan-amortization-works")!;

export const metadata: Metadata = {
  alternates: { canonical: `/guides/${guide.slug}/` },
  title: guide.title,
  description: guide.description,
};

export default function Page() {
  return (
    <GuideLayout guide={guide}>
      <p>
        When you take out a mortgage, car loan, or personal loan with a fixed monthly payment, that
        payment stays the same from the first month to the last. What changes — invisibly, every
        single month — is how the payment is split between interest and principal. Understanding that
        split is the difference between feeling trapped by a loan and using it strategically. The
        process is called amortization, and it is simpler than it sounds.
      </p>

      <H2>The two parts of every payment</H2>
      <p>
        Every loan payment does two jobs at once. Part of it pays the interest that accrued on your
        balance that month. The rest pays down the principal — the amount you actually borrowed.
        Interest is charged on whatever you still owe, so it is calculated fresh each month from your
        current balance.
      </p>
      <Callout>
        Monthly interest = remaining balance × (annual rate ÷ 12). Whatever is left of your fixed
        payment after covering that interest goes to principal.
      </Callout>

      <H2>Why early payments are almost all interest</H2>
      <p>
        At the start of a loan, your balance is at its largest, so the interest charge is at its
        largest too. That leaves only a little of your fixed payment for principal. Consider a
        $300,000 mortgage at 6% over 30 years. In the very first month, interest alone is $300,000 ×
        0.06 ÷ 12 = $1,500. The fixed payment is about $1,799, so only roughly $299 chips away at the
        principal. The bank is not doing anything sneaky — it is just that interest on a large
        balance is large.
      </p>
      <p>
        As the balance shrinks, the monthly interest charge shrinks with it, so more of each
        identical payment attacks the principal. The shift accelerates over time. By the final years
        of the loan, almost the entire payment is principal and almost none is interest. This is why
        a payment schedule is shaped like a slow curve, not a straight line.
      </p>

      <H2>The amortization formula</H2>
      <p>
        The fixed payment is set so that the balance reaches exactly zero on the final scheduled
        payment. The standard formula is:
      </p>
      <Callout>
        Payment = P × [ r(1 + r)<sup>n</sup> ] ÷ [ (1 + r)<sup>n</sup> − 1 ], where P is the loan
        amount, r is the monthly interest rate (annual rate ÷ 12), and n is the total number of
        payments.
      </Callout>
      <p>
        You do not need to compute this by hand — our loan calculator does it instantly and shows
        the full breakdown — but seeing the structure explains why two factors dominate your total
        cost: the interest rate and the length of the term.
      </p>

      <H2>How the term changes everything</H2>
      <p>
        Stretching a loan over more years lowers the monthly payment, which is tempting, but it
        raises the total interest dramatically because you are borrowing the money for longer. The
        same $300,000 at 6% costs far more over 30 years than over 15, even though the 15-year
        payment is higher. The monthly number is what you feel; the term is what you pay.
      </p>

      <H2>The power of extra principal payments</H2>
      <p>
        Here is where understanding amortization pays off. Any extra money you put toward a payment
        goes straight to principal, skipping ahead on the schedule. Because it permanently reduces
        the balance that future interest is calculated on, a small extra payment early in the loan
        can save a surprising amount:
      </p>
      <UL>
        <li>Extra payments made <strong>early</strong> save the most, because they cut interest over the most remaining months.</li>
        <li>Even one extra payment a year can shave years off a 30-year mortgage.</li>
        <li>The savings compound silently — every dollar of principal you retire stops generating interest for the rest of the term.</li>
      </UL>
      <p>
        Before making extra payments, check that your loan has no prepayment penalty, and confirm
        with your lender that extra amounts are applied to principal rather than to your next
        payment.
      </p>

      <H2>Reading your own amortization schedule</H2>
      <p>
        An amortization schedule is a row-by-row table of every payment: the payment number, how
        much went to interest, how much to principal, and the remaining balance. Skim it once and
        you will see the curve for yourself — the slow early grind, the tipping point where
        principal overtakes interest, and the rapid payoff at the end. Plug your numbers into the
        loan calculator to generate yours, then try adding a small monthly extra and watch the total
        interest and payoff date move.
      </p>
    </GuideLayout>
  );
}
