import type { Metadata } from "next";
import ShiftTool from "./ShiftTool";

export const metadata: Metadata = {
  title: "Shift Work Schedule Calculator — Panama, Pitman, DuPont Rotations",
  description:
    "Generate a 4-week color-coded calendar for your shift rotation. Supports Panama, Pitman, 4-on-4-off, and DuPont schedules. Free, instant, no account needed.",
};

export default function ShiftPage() {
  return (
    <>
      <ShiftTool />

      <section className="max-w-2xl mx-auto px-4 pb-16 space-y-10">

        {/* Block 1 — How to Use */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Shift Schedule Calculator</h2>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>
              <strong>Choose your rotation type</strong> from the dropdown. The four options &mdash; 2-2-3 Panama,
              Pitman, 4-on-4-off, and 3-2-2-3 DuPont &mdash; cover the most common industrial and healthcare shift
              patterns used in North America.
            </li>
            <li>
              <strong>Enter your start date.</strong> This is the first calendar day you want the 4-week view to begin
              from. Most workers set this to today or to the Monday that started their current block.
            </li>
            <li>
              <strong>Select your current week in the rotation cycle.</strong> Each rotation has a fixed cycle length
              (8, 14, or 28 days). The &ldquo;current week&rdquo; field tells the calculator which week of that cycle
              your start date falls in, so the work and off days line up with your actual schedule rather than always
              starting from day one of the pattern.
            </li>
            <li>
              <strong>Read the color-coded calendar.</strong> Dark cells are work days; light cells are off days. The
              summary panel on the left counts your total work days and off days across the 4-week window at a glance.
            </li>
            <li>
              <strong>Plan ahead.</strong> Scroll through the four weeks to spot long stretches of consecutive off days.
              Those are your best windows for scheduling appointments, travel, or family events without burning vacation
              days.
            </li>
            <li>
              <strong>Change the start date</strong> at any time to jump forward or backward in the calendar. The
              pattern repeats automatically, so you can preview any future period by moving the start date ahead.
            </li>
          </ol>
        </div>

        {/* Block 2 — Patterns Table */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Common Shift Rotation Patterns</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            All four schedules below are built for 12-hour shifts covering 24/7 operations. Each one balances
            continuous coverage against worker rest. The table describes the exact on/off sequence the calculator uses,
            derived directly from the rotation patterns encoded in the tool.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Pattern</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">On/Off Sequence</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Cycle Length</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Work Days per Cycle</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Typical Industries</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">2-2-3 Panama</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">2 on, 2 off, 3 on, 3 off, 2 on, 2 off (then repeats)</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">14 days</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">7 of 14</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Emergency services, healthcare, refineries</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">Pitman</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">2 on, 3 off, 2 on, 2 off, 2 on, 2 off, 2 on, 3 off (then repeats)</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">14 days</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">7 of 14</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Manufacturing, utilities, police</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">4-on-4-off</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">4 on, 4 off (then repeats)</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">8 days</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">4 of 8</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Security, mining, oil &amp; gas, transit</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">3-2-2-3 DuPont</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">3 on, 2 off, 2 on, 3 off, 3 on, 4 off, 3 on, 3 off, 2 on, 2 off, 3 off (full 28-day block)</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">28 days</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">14 of 28</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Chemical plants, petrochemical, paper mills</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            All four schedules land on exactly 50% work time across their full cycle, which makes staffing math
            straightforward: two crews cover a 24-hour operation with no gaps and no mandatory overtime built into the
            base schedule.
          </p>
        </div>

        {/* Block 3 — Worked Example */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">A Worked Example: Panama 2-2-3 Over Two Weeks</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The Panama schedule is one of the most widely used 12-hour shift rotations in North America. Here is how
            a single crew&apos;s two-week block looks when the cycle starts on a Monday. &ldquo;W&rdquo; is a work
            day; &ldquo;O&rdquo; is an off day.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Day</th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold text-slate-700">Mon</th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold text-slate-700">Tue</th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold text-slate-700">Wed</th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold text-slate-700">Thu</th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold text-slate-700">Fri</th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold text-slate-700">Sat</th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold text-slate-700">Sun</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">Week 1</td>
                  <td className="border border-slate-200 px-3 py-2 text-center font-bold text-navy-700">W</td>
                  <td className="border border-slate-200 px-3 py-2 text-center font-bold text-navy-700">W</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-slate-400">O</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-slate-400">O</td>
                  <td className="border border-slate-200 px-3 py-2 text-center font-bold text-navy-700">W</td>
                  <td className="border border-slate-200 px-3 py-2 text-center font-bold text-navy-700">W</td>
                  <td className="border border-slate-200 px-3 py-2 text-center font-bold text-navy-700">W</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">Week 2</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-slate-400">O</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-slate-400">O</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-slate-400">O</td>
                  <td className="border border-slate-200 px-3 py-2 text-center font-bold text-navy-700">W</td>
                  <td className="border border-slate-200 px-3 py-2 text-center font-bold text-navy-700">W</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-slate-400">O</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-slate-400">O</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            Week 1 reads: work Monday and Tuesday (2), take Wednesday and Thursday off (2), then work Friday through
            Sunday (3) &mdash; giving you the &ldquo;2-2-3&rdquo; name. Week 2 picks up in the middle of the cycle:
            three consecutive off days Monday through Wednesday (3), then two work days Thursday and Friday (2), then
            Saturday and Sunday off (2). At the end of week 2 the 14-day cycle is complete and week 3 restarts
            identically to week 1. Over the full 14 days you log 7 work days and 7 off days. With 12-hour shifts that
            is 84 hours worked in a two-week pay period &mdash; the equivalent of roughly 2,184 hours per year, which
            is how shift workers earn their annual overtime differential.
          </p>
        </div>

        {/* Block 4 — Choosing and Living With a Rotation */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Choosing and Living With a Rotation</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            No single schedule is right for everyone. The best rotation for you depends on your commute, family
            obligations, health, and how well you adapt to irregular sleep. Here are the key trade-offs to weigh.
          </p>
          <ul className="space-y-3 text-slate-600 text-sm leading-relaxed list-disc list-inside">
            <li>
              <strong>Longer blocks off vs. less fatigue mid-week.</strong> The DuPont schedule gives you a 4-day
              stretch off mid-cycle and a 3-day stretch at the end, which is excellent for travel. The trade-off is
              working three 12-hour nights in a row, which many workers find more taxing than the shorter Panama
              bursts.
            </li>
            <li>
              <strong>Predictability for family life.</strong> The Pitman schedule repeats on a strict 14-day calendar
              so every other weekend is guaranteed off. If you have children in school or a partner with a fixed
              schedule, predictability is often worth more than total days off.
            </li>
            <li>
              <strong>Simple math wins for planning.</strong> The 4-on-4-off schedule is the easiest to memorize and
              to explain to family members. Because the 8-day cycle does not align with a 7-day week, your days off
              rotate through different weekdays each cycle &mdash; some workers love the variety; others find it
              disorienting.
            </li>
            <li>
              <strong>Day vs. night rotation.</strong> All four schedules assume the same on/off pattern regardless
              of whether you work days or nights. Night shift workers tend to experience more sleep disruption. If you
              rotate between days and nights, anchor your sleep schedule to your first shift type of each block and
              shift it gradually rather than all at once.
            </li>
            <li>
              <strong>Sleep hygiene on 12-hour shifts.</strong> After a night shift, darken your bedroom fully and
              keep your phone on silent for at least 7 hours before your next shift starts. On your off days, resist
              the urge to flip immediately to a day schedule &mdash; a gradual 2-hour shift per day is less stressful
              on your body clock than snapping back overnight.
            </li>
            <li>
              <strong>Fatigue in long work blocks.</strong> The 3-day openers in the DuPont cycle and the 3-day
              weekend block in the Panama schedule are the most fatigue-intensive stretches. Many experienced shift
              workers front-load chores and meal prep on the first day of a long block so the final days stay as
              restful as possible.
            </li>
          </ul>
        </div>

        {/* Block 5 — FAQ */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is a Panama or 2-2-3 schedule?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A Panama schedule is a 14-day repeating rotation built on the sequence: 2 days on, 2 days off, 3 days
                on, 3 days off, 2 days on, 2 days off. The name comes from the Panama Canal, where this pattern was
                developed to maintain 24/7 operations with two crews. It is popular in emergency services, hospitals,
                and utilities because it gives workers several mid-week breaks without any single work stretch
                exceeding three consecutive days.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is the DuPont schedule?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The DuPont schedule is a 28-day cycle originally designed by DuPont chemical plants in the 1950s to
                cover four rotating crews across two 12-hour shifts. The sequence this calculator uses is: 3 on, 2
                off, 2 on, 3 off, 3 on, 4 off, 3 on, 3 off, 2 on, 2 off, 3 off &mdash; then the full 28-day block
                repeats. The standout feature is a 4-consecutive-day stretch off mid-cycle, which functions like a
                built-in long weekend every month. That recovery block makes DuPont popular in chemical and
                petrochemical plants where mental alertness is critical and fatigue is a safety risk.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is the Pitman schedule?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The Pitman schedule is a 14-day rotation that follows the pattern: 2 on, 3 off, 2 on, 2 off, 2 on,
                2 off, 2 on, 3 off. Because it repeats every two weeks and is anchored to the calendar week, workers
                on the Pitman schedule always have the same two weekends per month as &ldquo;guaranteed&rdquo; off
                weekends (alternating). This makes it particularly well-suited to manufacturing and police departments
                where shift workers need predictable family time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How many hours per week do these schedules average?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every schedule in this calculator is designed to deliver exactly 50% work time across its full cycle,
                which with 12-hour shifts works out to 42 hours per week on average. Over a full year that is
                approximately 2,184 hours (182 work days &times; 12 hours), compared to the standard 2,080-hour
                salaried year. The extra hours are built into the base schedule and are typically compensated as
                overtime or factored into an elevated hourly rate negotiated at hire.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Which rotation gives the most consecutive days off?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The DuPont schedule has the longest single stretch of consecutive off days: 4 days off in a row
                mid-cycle. The Panama schedule&apos;s longest stretch is 3 consecutive off days. The 4-on-4-off
                schedule gives 4 consecutive off days, matching DuPont, but those days rotate through different
                weekdays each cycle rather than falling on a fixed calendar position. If you want a reliable long
                weekend every month, DuPont is usually the winner; if you want the same weekday off pattern to repeat,
                Panama or Pitman may suit you better.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How do I know which shift I&apos;m on next week?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enter today as your start date, then set the &ldquo;current week in rotation&rdquo; to the week your
                cycle is currently in. The calculator will display the next four weeks of your schedule. To look
                further ahead, change the start date to any future Monday and the pattern will continue to extend
                correctly from wherever your cycle currently sits.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Do these rotations work for 8-hour shifts?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The on/off patterns in this calculator describe which days you work, not how many hours per day. If
                your facility runs 8-hour shifts instead of 12-hour shifts, the work/off day calendar is still
                accurate &mdash; you would just work 8 hours on each &ldquo;W&rdquo; day instead of 12. However,
                most of these rotations were designed specifically for 12-hour coverage, so an 8-hour version would
                require three crews instead of two to maintain 24/7 coverage, and the schedules are rarely used that
                way in practice.
              </p>
            </div>
          </div>
        </div>

        {/* Short note */}
        <p className="text-xs text-slate-400">
          This calculator generates a 28-day calendar view based on publicly documented shift rotation patterns. Actual
          schedules at your workplace may vary. Always confirm your specific rotation with your supervisor or HR
          department.
        </p>

      </section>
    </>
  );
}
