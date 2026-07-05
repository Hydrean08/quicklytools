import type { Metadata } from "next";
import ShiftTool from "./ShiftTool";

export const metadata: Metadata = {
  alternates: { canonical: "/shift/" },
  title: "Shift Rota Calculator — Panama, Pitman, DuPont & 4-on-4-off",
  description:
    "Free shift rota calculator: generate a 4-week color-coded rotation calendar for Panama (2-2-3), Pitman, 4-on-4-off, and DuPont shift patterns. Instant, no signup.",
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
            All four schedules below are designed for 12-hour shifts covering 24/7 operations. The on/off sequences
            in the table are derived directly from the rotation patterns the tool uses, so the descriptions match
            exactly what the calendar generates.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Pattern</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">On/Off Sequence</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Cycle</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Work Days / Cycle</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Avg Hrs / Week</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Typical Industries</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">2-2-3 Panama</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">2 on, 2 off, 3 on, 3 off, 2 on, 2 off</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">14 days</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">7 of 14</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">42 hrs</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Emergency services, healthcare, refineries</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">Pitman</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">2 on, 3 off, 2 on, 2 off, 2 on, 3 off</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">14 days</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">6 of 14</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">36 hrs</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Manufacturing, utilities, police</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">4-on-4-off</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">4 on, 4 off</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">8 days</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">4 of 8</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">42 hrs</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Security, mining, oil &amp; gas, transit</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">3-2-2-3 DuPont</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">3 on, 2 off, 2 on, 3 off, 3 on, 4 off, 3 on, 3 off, 2 on, 3 off</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">28 days</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">13 of 28</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">39 hrs</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Chemical plants, petrochemical, paper mills</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            Panama and 4-on-4-off are true 50/50 schedules: exactly half of all days are work days. Pitman is the
            lightest at roughly 43% work time (about 156 work days per year with 12-hour shifts), which is why some
            employers pair it with a lower base hourly rate. DuPont sits in between at about 46% work time and
            approximately 170 work days per year.
          </p>
        </div>

        {/* Block 3 — Worked Example */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">A Worked Example: Panama 2-2-3 Over Two Weeks</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The Panama schedule is one of the most widely used 12-hour shift rotations in North America. Here is how
            one crew&apos;s two-week block looks when the cycle starts on a Monday. &ldquo;W&rdquo; is a work day
            and &ldquo;O&rdquo; is an off day.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Week</th>
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
                  <td className="border border-slate-200 px-3 py-2 text-center font-bold text-slate-800">W</td>
                  <td className="border border-slate-200 px-3 py-2 text-center font-bold text-slate-800">W</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-slate-400">O</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-slate-400">O</td>
                  <td className="border border-slate-200 px-3 py-2 text-center font-bold text-slate-800">W</td>
                  <td className="border border-slate-200 px-3 py-2 text-center font-bold text-slate-800">W</td>
                  <td className="border border-slate-200 px-3 py-2 text-center font-bold text-slate-800">W</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">Week 2</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-slate-400">O</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-slate-400">O</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-slate-400">O</td>
                  <td className="border border-slate-200 px-3 py-2 text-center font-bold text-slate-800">W</td>
                  <td className="border border-slate-200 px-3 py-2 text-center font-bold text-slate-800">W</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-slate-400">O</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-slate-400">O</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            Week 1 breaks down as: work Monday and Tuesday (2 on), rest Wednesday and Thursday (2 off), then work
            Friday through Sunday (3 on) &mdash; the &ldquo;2-2-3&rdquo; of the name. Week 2 picks up from day 8 of
            the cycle: Monday through Wednesday off (3 off), Thursday and Friday on (2 on), then Saturday and Sunday
            off (2 off). At the end of Sunday in week 2 the full 14-day cycle is finished and week 3 restarts
            identically to week 1. Over the two weeks you log 7 work days and 7 off days. At 12 hours per shift that
            is 84 hours in a two-week pay period, or roughly 42 hours per week on average.
          </p>
        </div>

        {/* Block 4 — Choosing and Living With a Rotation */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Choosing and Living With a Rotation</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            No single schedule is right for everyone. The best rotation depends on your commute, family obligations,
            health, and how well you adapt to irregular sleep. Here are the key trade-offs to weigh before accepting
            or requesting a particular pattern.
          </p>
          <ul className="space-y-3 text-slate-600 text-sm leading-relaxed list-disc list-inside">
            <li>
              <strong>Longer blocks off vs. fewer total hours.</strong> Pitman gives the most off-days per year (about
              209 off days with 12-hour shifts) but also the fewest paid hours, averaging around 36 hours per week.
              Panama and 4-on-4-off hit 42 hours per week on average. If pay matters more than days off, Panama or
              4-on-4-off is the better fit.
            </li>
            <li>
              <strong>Predictability for family life.</strong> The Pitman schedule repeats on a strict 14-day calendar
              anchor, which means every other weekend is consistently off. If you have school-age children or a
              partner with a fixed Monday-to-Friday schedule, that predictability is often worth more than raw days
              off.
            </li>
            <li>
              <strong>Built-in long weekends.</strong> The DuPont cycle includes a 4-consecutive-day stretch off
              mid-cycle every 28 days. Workers who enjoy travel or need extended recovery time value that block even
              though DuPont&apos;s 39-hour-per-week average is slightly below Panama.
            </li>
            <li>
              <strong>Simple math wins for planning.</strong> The 4-on-4-off schedule is the easiest to memorize and
              explain to family members. The trade-off: because an 8-day cycle does not align with a 7-day week, your
              days off rotate through different weekdays each cycle. Some workers love the variety; others find it
              disorienting when trying to book recurring appointments.
            </li>
            <li>
              <strong>Night shift and sleep hygiene.</strong> All four patterns describe work/off days only &mdash; the
              tool does not distinguish day shifts from night shifts. If you rotate between days and nights, anchor
              your sleep to your first shift type of each block and shift it gradually (about 2 hours per day) rather
              than flipping overnight. After a string of night shifts, darken your bedroom and protect at least 7
              hours of sleep before your next shift starts.
            </li>
            <li>
              <strong>Fatigue in long work blocks.</strong> The three-consecutive-day openers in the DuPont cycle and
              the three-day Friday-to-Sunday block in Panama are the most fatigue-intensive stretches across all four
              schedules. Many experienced shift workers front-load chores and meal prep on the first day of a long
              block so the final days stay as restful as possible.
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
                A Panama schedule is a 14-day repeating rotation with the sequence: 2 days on, 2 days off, 3 days on,
                3 days off, 2 days on, 2 days off. The name is commonly attributed to the Panama Canal, where this
                pattern was adopted to maintain 24/7 operations with two crews. It is widely used in emergency
                services, hospitals, and utilities because no single work stretch ever exceeds three consecutive
                12-hour days, which limits acute fatigue while still covering all seven days of the week.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is the DuPont schedule?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The DuPont schedule is a 28-day cycle developed at DuPont chemical plants. The exact sequence this
                calculator uses is: 3 on, 2 off, 2 on, 3 off, 3 on, 4 off, 3 on, 3 off, 2 on, 3 off &mdash; then
                the block repeats. That adds up to 13 work days in every 28-day period. The standout feature is the
                4-consecutive-day stretch off mid-cycle, which gives workers a monthly recovery block long enough for
                travel or extended rest. DuPont is common in chemical and petrochemical plants where sustained mental
                alertness matters and management wants longer off periods to reduce fatigue-related incidents.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is the Pitman schedule?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The Pitman schedule is a 14-day rotation that follows the sequence: 2 on, 3 off, 2 on, 2 off, 2 on,
                3 off. It completes 6 work days in every 14-day cycle, making it the lightest of the four patterns in
                terms of total hours (roughly 36 hours per week on average with 12-hour shifts). Because it repeats
                on a two-week calendar anchor, workers typically know well in advance which weekends they have off.
                It is popular in manufacturing and policing where scheduled family time is a retention factor.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How many hours per week does each schedule average?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                With 12-hour shifts: Panama and 4-on-4-off both average 42 hours per week (7 work days per 14-day
                cycle, or 4 work days per 8-day cycle &mdash; each is exactly 50% work time). DuPont averages about
                39 hours per week (13 work days per 28-day cycle, roughly 46% work time). Pitman is the lightest at
                approximately 36 hours per week (6 work days per 14-day cycle, about 43% work time). If your
                facility uses 8-hour shifts, multiply work days by 8 instead of 12 to get your hours.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Which rotation gives the most consecutive days off?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The DuPont schedule has the longest single stretch: 4 consecutive off days mid-cycle. The 4-on-4-off
                schedule also gives 4 consecutive off days, but because the 8-day cycle floats across the calendar
                those days land on different weekdays each time. Panama&apos;s longest off stretch is 3 consecutive
                days. Pitman&apos;s longest is 3 consecutive off days as well. If a reliable multi-day block at a
                fixed calendar position matters to you, DuPont is typically the strongest option.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How do I find out which shift I&apos;m on next week?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Set today as your start date, then use the &ldquo;current week in rotation&rdquo; selector to tell
                the calculator which week of the cycle today falls in. The calendar will extend the pattern forward
                through the next four weeks. To look further ahead, advance the start date to any future date and
                the calculator continues the pattern from the same position in the cycle.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Do these rotations work for 8-hour shifts?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The calculator tracks which days you work, not the length of each shift. If your facility runs 8-hour
                shifts, the work/off day calendar is still accurate &mdash; you would work 8 hours on each work day
                instead of 12. However, all four patterns were designed around 12-hour coverage, so the total hours
                per year will be lower on 8-hour shifts and your employer may need three crews instead of two to
                maintain full 24/7 coverage. Always confirm the crew count and shift length with your schedule
                coordinator.
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
