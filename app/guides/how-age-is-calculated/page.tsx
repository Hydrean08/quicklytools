import type { Metadata } from "next";
import { getGuide } from "@/lib/guides";
import { GuideLayout, H2, UL, Callout } from "@/components/guide";

const guide = getGuide("how-age-is-calculated")!;

export const metadata: Metadata = {
  alternates: { canonical: `/guides/${guide.slug}/` },
  title: guide.title,
  description: guide.description,
};

export default function Page() {
  return (
    <GuideLayout guide={guide}>
      <p>
        Asking someone&apos;s age feels like the simplest question in the world. Yet the moment you
        want a precise answer — not just years, but years, months, and days — the arithmetic becomes
        genuinely tricky. Months have different lengths, leap years shuffle the calendar every four
        years, and the intuitive shortcut of dividing days by 365 quietly drifts off by a day or
        more in ways that matter when precision counts. Understanding how a correct age calculation
        works reveals a small but elegant piece of everyday calendar mathematics.
      </p>

      <H2>Why it isn&apos;t just days divided by 365</H2>
      <p>
        The most obvious approach to measuring age is to count the total number of days that have
        passed since birth and divide by 365. It is appealingly simple, and for rough purposes it
        works. The problem is that the Gregorian calendar does not divide evenly into 365-day years.
        A leap year adds an extra day every four years (with century-year exceptions), so the average
        year is actually 365.2425 days long. Using 365 as the divisor means every four years you
        accumulate an error of about one day, and using 365.25 instead just trades one rounding
        problem for another.
      </p>
      <p>
        The practical consequence is that a person born on January 1 and measured on December 31
        might show as &ldquo;almost 1&rdquo; or &ldquo;already 1&rdquo; depending solely on how many leap days happened to
        fall in between. For a years-months-days breakdown that holds up in any real-world context —
        legal, medical, or personal — the day-division method is not reliable enough. A different
        approach is needed.
      </p>

      <H2>The calendar method</H2>
      <p>
        The standard and correct way to compute age is to work directly with calendar units: subtract
        birth year from current year, birth month from current month, and birth day from current day.
        The subtraction is done in that order, and each field is adjusted independently before moving
        on. This is the method that mirrors how people naturally think about dates — &ldquo;it has been
        three years, four months, and twelve days&rdquo; — and it handles variable month lengths and leap
        years correctly by construction.
      </p>
      <p>
        The mechanics work like this. Start by computing the raw differences:
      </p>
      <UL>
        <li><strong>Raw years</strong> = current year − birth year</li>
        <li><strong>Raw months</strong> = current month − birth month</li>
        <li><strong>Raw days</strong> = current day − birth day</li>
      </UL>
      <p>
        Because you are subtracting a later date from an earlier date, the raw days value can come
        out negative — for example if the birth day is the 20th and the current day is the 5th. When
        that happens, you need to borrow. Similarly, the raw months value can go negative if the
        birth month is later in the year than the current month.
      </p>
      <Callout>
        <strong>The borrow rule:</strong> If raw days is negative, subtract 1 from the months
        tally and add the number of days in the <em>previous calendar month</em> (the month just
        before the current one) to the days tally. If raw months is then negative, subtract 1 from
        the years tally and add 12 to the months tally. Always resolve days first, then months.
      </Callout>
      <p>
        The key detail in the days borrow is that you must use the length of the specific previous
        month, not a fixed number. February has 28 days in common years and 29 in leap years. April,
        June, September, and November have 30. All others have 31. Getting that month length right
        is what makes the calendar method accurate where the day-division method fails.
      </p>

      <H2>A worked example</H2>
      <p>
        Suppose someone was born on <strong>March 15, 1990</strong>, and today is{" "}
        <strong>July 1, 2026</strong>. Here is how to find their exact age step by step.
      </p>
      <p>
        Start with the raw differences:
      </p>
      <UL>
        <li>Raw years: 2026 − 1990 = 36</li>
        <li>Raw months: 7 − 3 = 4</li>
        <li>Raw days: 1 − 15 = −14</li>
      </UL>
      <p>
        Raw days is negative, so we invoke the borrow rule. The previous month is June, which has
        30 days. We subtract 1 from the months tally (4 becomes 3) and add 30 to the days tally
        (−14 + 30 = 16). Raw months is now 3, which is not negative, so no further borrowing is
        needed.
      </p>
      <p>
        The result is <strong>36 years, 3 months, and 16 days</strong>. You can verify this
        intuitively: the person turned 36 on March 15, 2026. From March 15 to July 1 is three full
        months (March 15 → April 15 → May 15 → June 15) plus the 16 days from June 15 to July 1.
        That checks out exactly.
      </p>

      <H2>Leap years and February 29</H2>
      <p>
        Leap years create a special edge case for people born on February 29. That date exists in
        only roughly one out of every four years, so in common years there is no exact anniversary
        of the birth date. Different countries and legal systems handle this differently. The two
        most common conventions are:
      </p>
      <UL>
        <li>
          <strong>February 28 convention.</strong> The person is considered to have their birthday
          on the last day of February in non-leap years. This means they &ldquo;turn&rdquo; a year older on
          February 28.
        </li>
        <li>
          <strong>March 1 convention.</strong> The birthday is treated as falling on the first day
          of March in common years. Several legal codes, including some in Europe, use this
          interpretation.
        </li>
      </UL>
      <p>
        The choice of convention changes not just the birthday date but also the days-remaining
        count displayed by any age calculator. Neither convention is universally correct; they are
        simply agreed-upon rules for resolving an ambiguity that the calendar itself does not answer.
      </p>
      <p>
        Leap years also explain why the total-days figure you get from an age calculation does not
        simply equal years multiplied by 365. A person who is exactly 36 years old will have lived
        through either 8 or 9 leap years depending on their birth date and the current date, giving
        a total-days count somewhere around 13,149 rather than the 13,140 you would get from
        36 × 365. The calendar method absorbs all of this correctly because it works with actual
        calendar dates rather than an average year length.
      </p>

      <H2>Measuring any gap between two dates</H2>
      <p>
        Everything described above applies not just to birthdays but to any pair of dates you want
        to compare. The calendar subtraction method with borrowing will give you the correct
        years-months-days breakdown between a wedding anniversary and today, between a project start
        date and its deadline, or between any historical event and the present moment.
      </p>
      <p>
        The only conceptual shift is labeling. For an age calculation, you call the result
        &ldquo;years old.&rdquo; For a countdown, you might call it &ldquo;time remaining.&rdquo; For a retrospective, you
        might call it &ldquo;time elapsed.&rdquo; The arithmetic is identical in every case. The earlier date
        is always subtracted from the later date, and the same borrow logic applies whenever days or
        months would otherwise go negative.
      </p>
      <p>
        One practical note: when computing countdowns to a future date, be careful about which
        direction the subtraction runs. Subtracting today from a future deadline gives you time
        remaining; subtracting a future deadline from today gives you a negative number that needs
        to be interpreted as overdue. Most calculators handle this by identifying which date is
        earlier before performing the subtraction.
      </p>

      <H2>Getting it right matters</H2>
      <p>
        For most everyday uses, being off by a day is harmless. But age matters in contexts where
        precision is real: eligibility cutoffs for schools, pension and retirement calculations,
        insurance underwriting, and legal age thresholds all hinge on exact calendar dates. The
        calendar subtraction method described here is the one that holds up across all of those
        cases. It is what the age calculator on this site uses — working from actual dates rather
        than averaged constants, borrowing correctly for the actual length of each month, and
        handling leap years without special-casing.
      </p>
    </GuideLayout>
  );
}
