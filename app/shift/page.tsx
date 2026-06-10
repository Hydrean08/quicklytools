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
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Shift Work Calculator</h2>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>Select your rotation type from the dropdown (Panama, Pitman, 4-on-4-off, or DuPont).</li>
            <li>Enter the start date of your current rotation cycle — typically the first day of a new block.</li>
            <li>Choose Team A or Team B if your workplace uses alternating crews.</li>
            <li>The calculator generates a 4-week color-coded calendar showing your work days and off days.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Common Shift Rotation Patterns Explained</h2>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Panama (2-2-3)</h3>
              <p>Alternates between 2 days on, 2 days off, and 3 days on in a repeating cycle. Over a 4-week period you work 14 days and have 14 days off. Shifts are typically 12 hours. Popular in manufacturing, healthcare, and public safety.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Pitman (2-3 Rotation)</h3>
              <p>A 2-week cycle of 2 days on, 3 days off, 2 days on, 2 days off. Results in every other weekend off. Works well for workers who need predictable time off for family commitments.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">4-on-4-off</h3>
              <p>Four consecutive work days followed by four consecutive days off. Simple and easy to plan around. Results in roughly 182 work days per year with 12-hour shifts. Shifts rotate between days and nights over the cycle.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">DuPont</h3>
              <p>A 28-day cycle covering four crews across 12-hour shifts. Each crew rotates through days and nights with a 7-day stretch off every 28 days. More complex but gives a longer recovery block each month.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How many hours per year does each schedule produce?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                All four schedules are designed to provide approximately 2,184 hours per year with 12-hour shifts (182 days × 12 hours), which is slightly above the standard 2,080-hour work year. This is intentional — it accounts for overtime and ensures 24/7 coverage with the minimum number of crews.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is the difference between Team A and Team B?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                In two-team rotations, Team A and Team B work mirror schedules — when one team is working, the other is off. This ensures continuous coverage. Enter the correct team for your crew to see your specific work days rather than your co-workers' days.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Can I use this to plan vacations and appointments?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes — that is one of the most common uses. Generate your calendar with the correct start date, then use the off-day blocks to plan around your schedule. The 4-week view makes it easy to spot long stretches of consecutive off days.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What if my workplace uses a custom rotation?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The four patterns here cover the most common industrial and healthcare rotations. If your schedule doesn't match, use the "Between Dates" feature in the Age Calculator to count days between your cycle anchor date and any future date, then map it to your pattern manually.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
