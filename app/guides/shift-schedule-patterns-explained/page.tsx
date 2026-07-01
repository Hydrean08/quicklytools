import type { Metadata } from "next";
import { getGuide } from "@/lib/guides";
import { GuideLayout, H2, UL, Callout } from "@/components/guide";

const guide = getGuide("shift-schedule-patterns-explained")!;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.description,
};

export default function Page() {
  return (
    <GuideLayout guide={guide}>
      <p>
        If you have ever looked at a rotating shift schedule and wondered how anyone is supposed to
        know when they work, you are not alone. The days seem to jump around at random — three on,
        two off, two on, three off — until you realize that what looks chaotic is actually a fixed
        repeating cycle. Every common rotation pattern has a name, a logic, and a set of trade-offs.
        Understanding them helps you plan your life, compare job offers, and get far more out of a
        shift calculator than just a list of dates.
      </p>

      <H2>What a rotation pattern is</H2>
      <p>
        A rotation pattern is a fixed sequence of work days and off days that repeats on a loop. Once
        you know the sequence and where you currently sit inside it, you can predict every future
        shift indefinitely. Most industrial and healthcare schedules use 12-hour shifts and are
        designed so that a facility is always covered by at least one team, around the clock, every
        day of the year.
      </p>
      <p>
        The pattern also determines how days and nights alternate. On a pure day rotation, every
        shift in the cycle is a day shift. On a rotating pattern, you might spend one block of the
        cycle working days and the next block working nights before the cycle starts over. Some
        employers run separate day and night teams on the same underlying pattern; others have each
        worker rotate through both. When comparing schedules, always check whether the pattern shown
        is days-only or a full day-and-night rotation, because that changes how the off days feel.
      </p>

      <H2>The Panama (2-2-3) schedule</H2>
      <p>
        Panama is one of the most widely used 12-hour shift patterns in North America. Its full name
        comes from its repeating block structure: two days on, two days off, three days on — then
        the sequence inverts so you get two days off, two days on, and three days off before the
        whole thing repeats. That produces a 14-day cycle.
      </p>
      <Callout>
        On a Panama schedule, you work 7 twelve-hour shifts over every 14 days — 84 hours per
        fortnight, which averages to exactly 42 hours per week. You also get every other weekend
        completely off, which makes recurring personal commitments much easier to plan.
      </Callout>
      <p>
        The three-consecutive-day stretches are the defining feature of Panama. Working three
        12-hour shifts in a row is demanding, but the payoff is the matching three-day break on the
        other side of the cycle. Many workers find this rhythm easier to adapt to than shorter, more
        frequent stretches because their body has real time to recover. The guaranteed alternating
        weekends off is a major reason Panama is popular with workers who have families or regular
        weekend activities.
      </p>

      <H2>The Pitman schedule</H2>
      <p>
        The Pitman schedule is Panama&apos;s close cousin. It also runs on a 14-day cycle and also
        uses 12-hour shifts, so it produces the same average of 42 hours per week. The difference is
        in how the on and off blocks are arranged. Where Panama groups the longer three-day stretch
        together, Pitman spreads the days across the cycle differently: two on, three off, two on,
        two off — then the mirror image fills out the second week.
      </p>
      <p>
        In practice, Pitman tends to feel slightly less fatiguing during any given stretch because
        you never work more than two shifts in a row. The trade-off is that the longer off blocks are
        also split up, so the sensation of a genuine multi-day break is less pronounced than on
        Panama. Workers who struggle with the three-consecutive-shift grind of Panama often prefer
        Pitman; those who prize a long recovery weekend often prefer Panama. Like Panama, Pitman
        gives every other weekend off.
      </p>

      <H2>The DuPont schedule</H2>
      <p>
        DuPont is the most complex of the common patterns and the one that delivers the most dramatic
        built-in vacation. The cycle runs 28 days and is labeled 3-2-2-3 in the tool. Over those
        four weeks, you alternate blocks of day and night shifts, typically spending the first half
        of the cycle on days and the second half on nights (or vice versa, depending on which team
        you are on).
      </p>
      <p>
        The signature feature of DuPont is the seven consecutive days off that fall in the middle of
        the 28-day cycle. This is a full week of free time, built into the schedule, every single
        month. For workers who want to travel, take on side projects, or simply decompress, this
        block is unusually generous. The cost is that DuPont requires you to alternate between day
        and night shifts, which is harder on the body than a fixed shift. The adjustment period when
        flipping from days to nights — or back — takes several days and disrupts sleep for many
        people. Organizations that use DuPont also need enough staff to rotate all teams through the
        cycle without gaps in coverage.
      </p>

      <H2>The 4-on-4-off schedule</H2>
      <p>
        Four-on-four-off is the simplest rotation to track. The entire cycle is just eight days: four
        consecutive days on, four consecutive days off, then repeat forever. There are no
        sub-patterns, no alternating block lengths, no weeks off — just a perfectly even split that
        never changes.
      </p>
      <p>
        Because the cycle is eight days rather than seven, your work days drift through the calendar
        week over time. A Monday start today means you will eventually be starting a block on a
        Friday, then a Tuesday, and so on. This means you will sometimes work weekends and sometimes
        have them free, in a predictable rotation. Workers who find Panama or DuPont too difficult to
        track mentally often appreciate the simplicity of 4-on-4-off. The four consecutive days off
        also give a solid recovery window without requiring the complex day-night switching of
        DuPont.
      </p>

      <H2>Which rotation is best for you</H2>
      <p>
        There is no universally superior schedule. The right answer depends on your physiology, your
        family situation, and what you value most in time off. Here are the main trade-offs to weigh:
      </p>
      <UL>
        <li>
          <strong>Long unbroken breaks vs. spread-out recovery.</strong> DuPont gives you a full week
          off each month; Panama and Pitman give you shorter but more frequent long weekends; 4-on-4-off
          gives you a steady rhythm of four-day breaks. If travel or intensive hobbies matter to you,
          DuPont&apos;s week off is hard to beat. If you prefer regular shorter breaks, Panama or Pitman
          may suit you better.
        </li>
        <li>
          <strong>Day vs. night shift stability.</strong> Panama, Pitman, and 4-on-4-off can be run
          as fixed-day or fixed-night schedules. DuPont requires rotating between days and nights,
          which many people find biologically disruptive. If you cannot tolerate night shift
          transitions, avoid DuPont.
        </li>
        <li>
          <strong>Weekend predictability.</strong> Panama and Pitman guarantee every other weekend
          off, which makes recurring commitments easy to plan. On 4-on-4-off, weekends cycle in and
          out of your off blocks on an eight-day rhythm, so you get no fixed guarantee but also no
          fixed loss.
        </li>
        <li>
          <strong>Mental simplicity.</strong> 4-on-4-off is the easiest to memorize and explain to
          family. Panama is next once you internalize the two-two-three pattern. DuPont requires
          tracking which phase of a 28-day cycle you are in, and most workers rely on a posted
          schedule or a calculator rather than memory.
        </li>
        <li>
          <strong>Fatigue during long stretches.</strong> Three consecutive 12-hour shifts
          (the maximum in Panama) is the toughest single run in these patterns. Pitman caps you at
          two in a row. If cumulative fatigue is a health concern for you, Pitman or 4-on-4-off may
          be gentler options.
        </li>
      </UL>
      <p>
        Most workers discover their preference through experience rather than theory. If you are
        evaluating a new job or a schedule change, it helps to map out three or four months of the
        proposed rotation against your actual life — school pickups, standing commitments, the trips
        you want to take — before committing. The shift schedule calculator does exactly that: plug
        in your pattern and start date, and you can see what your calendar actually looks like across
        the full cycle.
      </p>
    </GuideLayout>
  );
}
