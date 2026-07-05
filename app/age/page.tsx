import type { Metadata } from "next";
import AgeTool from "./AgeTool";

export const metadata: Metadata = {
  alternates: { canonical: "/age/" },
  title: "Age Calculator — How Old Am I? Date Difference Tool",
  description:
    "Calculate your exact age in years, months, and days. Find the difference between any two dates, days until your next birthday, and more. Free age calculator.",
};

export default function AgePage() {
  return (
    <>
      <AgeTool />

      <section className="max-w-2xl mx-auto px-4 pb-16 space-y-10">
        {/* Block 1 — How to Use */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Age Calculator</h2>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>
              Select the <strong>My Age</strong> tab if you want to find out how old you are right now. The calculator automatically uses today&apos;s date as the end point.
            </li>
            <li>
              Click or tap the <strong>Birth Date</strong> field and pick your date of birth from the date picker. Your age appears instantly — no button to press.
            </li>
            <li>
              Read your exact age displayed in years, months, and days at the top of the results card. Below that you&apos;ll find your total days lived, total weeks lived, the day of the week you were born, your next birthday date, and how many days remain until that birthday.
            </li>
            <li>
              Switch to the <strong>Between Dates</strong> tab any time you need the gap between two specific calendar dates rather than your age. Enter a start date and an end date — the order does not matter, the calculator always subtracts the earlier date from the later one.
            </li>
            <li>
              Use the Between Dates tab for anniversaries, contract durations, project timelines, event countdowns, or any other date-difference problem. The result shows the same year/month/day breakdown plus total days and weeks.
            </li>
          </ol>
        </div>

        {/* Block 2 — How Age Is Calculated */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How Age Is Calculated</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The calculation method used here matches the one on passports, medical records, and legal documents worldwide: count the number of complete years first, then count the remaining complete months, and finally count the leftover days. This three-step approach is necessary because calendar months vary in length — February has 28 or 29 days while July has 31 — so a fixed divisor like 30 or 30.5 would give the wrong answer.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The algorithm works as follows. Starting from the birth date and the current date, it subtracts the birth year from the current year to get a provisional year count, subtracts the birth month from the current month to get a provisional month count, and subtracts the birth day from the current day to get a provisional day count. If the day count is negative — meaning the current day of the month is earlier than the birth day — the algorithm &ldquo;borrows&rdquo; from the previous month. It looks up how many days were in the month immediately before the current month and adds that number to the negative day count to make it positive, while reducing the month count by one. If the month count is then negative, it borrows 12 months from the year count and adds them to the month count.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            This borrowing approach is why your age in years, months, and days is not the same as simply dividing total elapsed days by 365.25. A person who has lived exactly 13,149 days is not necessarily 36 years old to the day — the calendar year in which their birthday falls and the varying lengths of months both affect the precise breakdown.
          </p>
        </div>

        {/* Block 3 — Worked Example */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">A Worked Example</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Suppose someone was born on <strong>March 15, 1990</strong> and today is <strong>July 1, 2026</strong>. Here is the step-by-step calculation.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong>Step 1 — Provisional totals.</strong> Subtract the birth year, month, and day from the current year, month, and day independently:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Component</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Current</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Birth</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Provisional</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Year</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">2026</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">1990</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">36</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Month</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">7 (July)</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">3 (March)</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">4</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Day</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">1</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">15</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600 font-semibold text-red-600">−14</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong>Step 2 — Borrow for negative days.</strong> The day count is −14, which is invalid. The algorithm looks at the month before July, which is June, and June has <strong>30 days</strong>. It adds 30 to −14 to get <strong>16 days</strong>, and reduces the month count by 1: 4 − 1 = <strong>3 months</strong>.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong>Step 3 — Check months.</strong> The month count is now 3, which is non-negative, so no further borrowing is needed. The year count stays at 36.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong>Result: 36 years, 3 months, 16 days.</strong>
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The same span expressed in other units:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Unit</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Value</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">How derived</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Total months</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">435</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">36 × 12 + 3</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Total days</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">13,257</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Exact calendar count (includes 9 leap years)</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Total weeks</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">1,893</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">13,257 ÷ 7, rounded down</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Block 4 — Leap Years and Edge Cases */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Leap Years and Other Edge Cases</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Most dates work without special handling, but a few situations deserve extra attention:
          </p>
          <ul className="space-y-3 text-slate-600 text-sm leading-relaxed list-disc list-inside mb-4">
            <li>
              <strong>February 29 birthdays.</strong> People born on a leap day (February 29) only have an exact calendar birthday every four years. In non-leap years this calculator treats the birthday as having occurred when the month flips from February to March — effectively February 28 — which is the convention used in most legal jurisdictions, including the United States and United Kingdom.
            </li>
            <li>
              <strong>Why total days diverge from years × 365.</strong> The Gregorian calendar adds a leap day roughly every four years (with century-year exceptions). A 36-year span that crosses 9 leap years accumulates 36 × 365 + 9 = 13,149 + 9 = 13,158 &ldquo;base&rdquo; days, but the actual count from March 15, 1990 to July 1, 2026 is higher because 3 months and 16 additional days are included. The calculator counts elapsed milliseconds and divides by the exact milliseconds per day, so leap days are automatically and correctly accounted for.
            </li>
            <li>
              <strong>End-of-month edge cases.</strong> The borrow step always looks up the real length of the preceding month rather than assuming 30 days. A span from January 31 to March 1 borrows February&apos;s length — 28 days in a common year, 29 in a leap year — giving 1 month and 1 (or 0) days depending on the year. This is mathematically precise and matches how courts and government agencies interpret the period.
            </li>
            <li>
              <strong>Time zones.</strong> The calculator parses both dates as local midnight in your browser&apos;s time zone, avoiding the UTC-shift problem that trips up many naive date libraries. If you run the tool at 11 PM on your birthday and your server clock is in a different time zone, the result is still correct because no UTC conversion takes place.
            </li>
            <li>
              <strong>Same-day spans.</strong> If the start and end date are identical the result is zero years, zero months, zero days, and zero total days. The Between Dates tab requires the two dates to be different before showing a result.
            </li>
          </ul>
        </div>

        {/* Block 5 — FAQ */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How is my exact age calculated?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The calculator subtracts your birth year, month, and day from today&apos;s year, month, and day independently, then applies a borrowing step whenever the day or month count goes negative. This produces the same years-months-days breakdown used on official documents worldwide — it is the legally recognised definition of age in most countries.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How are leap years handled?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Leap years are handled automatically in two places. First, the total-days count is computed from exact timestamps, so every February 29 that falls within your lifespan is counted as a real day. Second, the borrowing step fetches the real length of the previous month using JavaScript&apos;s built-in Date object, which is leap-year aware, so a span touching February always uses the correct 28- or 29-day length.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Can I find the gap between any two dates, not just ages?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes. The <strong>Between Dates</strong> tab accepts any two calendar dates — past, present, or future. You can measure how long ago a contract started, how many days until a deadline, how long you&apos;ve been at a job, or the exact span between two historical events. The algorithm is identical to the age calculation; only the label changes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Why can&apos;t I just divide total days by 365?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dividing by 365 ignores leap years and produces a decimal, neither of which matches how people or legal systems think about age. Dividing by 365.25 corrects for the average leap-year frequency but still gives a decimal and can be off by a day near your birthday. The year-month-day method is the only approach that returns a whole-number result consistent with how birthdays actually work on the calendar.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Does the calculator count the end date itself?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No. The calculation is exclusive of the end date and inclusive of the start date, which is the standard convention for age. On your birthday you have completed another full year, but the birthday day itself has not yet passed, so it is not counted in the &ldquo;days remaining&rdquo; component. This matches how the law counts age in the vast majority of jurisdictions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How do I find the number of days until a future date?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Open the <strong>Between Dates</strong> tab, set the start date to today and the end date to the future date you care about. The &ldquo;Total days&rdquo; row in the results gives the exact day count. Alternatively, if you are counting down to your own birthday, the <strong>My Age</strong> tab already shows &ldquo;Days until birthday&rdquo; as part of your age result — no extra steps needed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What age reckoning system does this calculator use?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                This calculator uses the international Western system, where a person&apos;s age increases by one year on each anniversary of their birth date, and age at birth is zero. Some East Asian traditions (historically used in Korea, China, and Japan) start counting at one and increment on the lunar new year rather than the birthday — this tool does not use that system. South Korea officially adopted the international system for legal purposes in 2023.
              </p>
            </div>
          </div>
        </div>

        {/* Closing note */}
        <p className="text-slate-500 text-xs leading-relaxed">
          All calculations run entirely in your browser. No dates or personal information are sent to any server.
        </p>
      </section>
    </>
  );
}
