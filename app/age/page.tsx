import type { Metadata } from "next";
import AgeTool from "./AgeTool";

export const metadata: Metadata = {
  title: "Age Calculator — How Old Am I? Date Difference Tool",
  description:
    "Calculate your exact age in years, months, and days. Find the difference between any two dates, days until your next birthday, and more. Free age calculator.",
};

export default function AgePage() {
  return (
    <>
      <AgeTool />

      <section className="max-w-2xl mx-auto px-4 pb-16 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Age Calculator</h2>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>Select the <strong>My Age</strong> tab to calculate your current age from your date of birth.</li>
            <li>Enter your birth date using the date picker. The calculator uses today's date automatically.</li>
            <li>Your age in years, months, and days appears immediately, along with total days lived, total weeks, the day of the week you were born, and a countdown to your next birthday.</li>
            <li>Switch to the <strong>Between Dates</strong> tab to find the exact time elapsed between any two calendar dates — useful for calculating work anniversaries, contract durations, or event countdowns.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How Age Is Calculated</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Age calculation sounds simple but has a few subtleties. A person born on March 15, 2000 turns 25 on March 15, 2025 — but how old are they on March 14, 2025? Exactly 24 years, 11 months, and 29 days. This calculator counts completed years first, then remaining months, then remaining days — the same method used on legal documents and in most countries worldwide.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Month lengths vary (28–31 days), so the "days" component of an age always refers to remaining days after full months are counted, not a fixed 30-day approximation.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What if I was born on February 29 (a leap day)?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                In non-leap years, February 29 birthdays are conventionally observed on February 28 or March 1 depending on jurisdiction and personal preference. Most countries legally treat February 28 as the birthday for official purposes. This calculator uses February 28 as the equivalent in non-leap years.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Why is my age shown differently in some Asian countries?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                In traditional East Asian age reckoning (used historically in Korea, China, and Japan), a person is considered 1 year old at birth and gains a year on New Year's Day rather than their birthday. This calculator uses the international (Western) system where age increases on the birthday.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Can I calculate the age difference between two people?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes. Use the <strong>Between Dates</strong> tab and enter both people's birth dates. The result shows the exact time difference in years, months, and days — which is the age gap between them.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What common uses are there for a date difference calculator?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Common uses include calculating how long until an event (vacation, retirement, wedding), how long ago something happened (employment start date, diagnosis date), contract or warranty duration, project timelines, and legal or financial deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
