import type { Metadata } from "next";
import { getGuide } from "@/lib/guides";
import { GuideLayout, H2, UL, Callout } from "@/components/guide";

const guide = getGuide("pregnancy-due-date-explained")!;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.description,
};

export default function Page() {
  return (
    <GuideLayout guide={guide}>
      <p>
        The moment a pregnancy is confirmed, the first question is almost always &ldquo;when is it due?&rdquo;
        The answer comes back as a single, specific date — but that date is really the center of a
        range. Only about one in twenty babies actually arrives on the predicted day. Understanding
        how the estimate is built makes it far less mysterious, and helps set realistic expectations
        for those final weeks.
      </p>

      <H2>The 40-week count from your last period</H2>
      <p>
        By long-standing convention, pregnancy is counted as 40 weeks measured from the first day of
        your last menstrual period (LMP) — not from conception. This may seem odd, since conception
        happens roughly two weeks after that, but the LMP is used because it is a date most people
        can identify reliably, while the exact moment of conception usually cannot be pinned down.
        The trade-off is that for the first couple of weeks of &ldquo;pregnancy,&rdquo; you were not yet
        pregnant in the biological sense.
      </p>
      <Callout>
        Standard estimate: due date = first day of last period + 280 days (40 weeks). This is the
        clinical convention, and it is why early ultrasounds sometimes adjust the date.
      </Callout>

      <H2>Naegele&apos;s rule</H2>
      <p>
        The classic shortcut for the same calculation is Naegele&apos;s rule, named for the German
        obstetrician who popularized it: take the first day of your last period, add one year,
        subtract three months, and add seven days. The result is your estimated due date. It is
        simply a convenient way to add 280 days by hand, and it produces the same answer as the
        40-week count.
      </p>

      <H2>Why it&apos;s only an estimate</H2>
      <p>
        The standard calculation assumes a textbook 28-day cycle with ovulation on day 14. Real
        cycles vary widely. If your cycles run longer or shorter than 28 days, or if ovulation is
        earlier or later, the LMP-based date can be off by several days. Several factors shift the
        true date:
      </p>
      <UL>
        <li><strong>Cycle length.</strong> Longer cycles generally push the date later; shorter cycles pull it earlier.</li>
        <li><strong>Ultrasound dating.</strong> An early ultrasound measures the embryo directly and is often more accurate than the LMP, so providers may revise the date.</li>
        <li><strong>First versus later pregnancies.</strong> First-time pregnancies tend, on average, to go slightly longer.</li>
      </UL>
      <p>
        A full-term delivery is considered anywhere from 37 to 42 weeks. The due date is best thought
        of as the midpoint of a normal arrival window, not a deadline.
      </p>

      <H2>What the trimesters mark</H2>
      <p>
        Pregnancy is divided into three trimesters, each with its own broad milestones:
      </p>
      <UL>
        <li><strong>First trimester (weeks 1–12):</strong> major organ development; early symptoms like fatigue and nausea are common.</li>
        <li><strong>Second trimester (weeks 13–27):</strong> often the most comfortable stretch; movement is typically felt and anatomy scans take place.</li>
        <li><strong>Third trimester (weeks 28–40):</strong> rapid growth and preparation for birth; more frequent prenatal visits.</li>
      </UL>

      <H2>The fertile window, briefly</H2>
      <p>
        For those planning a pregnancy, the fertile window is the handful of days each cycle when
        conception is possible — generally the five days before ovulation plus ovulation day itself,
        because sperm can survive several days while the egg is viable for about a day. Cycle-tracking
        tools estimate this window from your cycle length, but like the due date it is an estimate
        built on averages.
      </p>

      <H2>Using your date wisely</H2>
      <p>
        Treat your due date as a planning anchor, not a countdown clock. It is useful for scheduling
        prenatal care, parental leave, and preparations — but build in flexibility, because babies
        keep their own schedule. Our pregnancy calculator estimates your due date, current week, and
        trimester milestones from your last period and cycle length; your healthcare provider, with
        the benefit of examinations and ultrasounds, will give you the most accurate picture as the
        pregnancy progresses.
      </p>
    </GuideLayout>
  );
}
