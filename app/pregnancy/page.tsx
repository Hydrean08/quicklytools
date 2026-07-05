import type { Metadata } from "next";
import PregnancyTool from "./PregnancyTool";

export const metadata: Metadata = {
  alternates: { canonical: "/pregnancy/" },
  title: "Pregnancy Due Date Calculator — Due Date, Milestones & Ovulation",
  description:
    "Calculate your pregnancy due date, track milestones by week, and find your fertile window. Free pregnancy and ovulation calculator — no account required.",
};

export default function PregnancyPage() {
  return (
    <>
      <PregnancyTool />

      <section className="max-w-2xl mx-auto px-4 pb-16 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Pregnancy Calculator</h2>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>Enter the first day of your last menstrual period (LMP) in the date field. If you are unsure of the exact date, use the first day of the most recent period you can recall — this is the same date your healthcare provider will ask for.</li>
            <li>The calculator immediately displays your estimated due date, how many weeks pregnant you are today, which trimester you are in, and your overall percentage of the pregnancy completed.</li>
            <li>Scroll through the milestone timeline to see projected dates for each key stage: the first detectable heartbeat around week 6, the end of the first trimester at week 13, the anatomy scan at week 20, viability at week 24, the start of the third trimester at week 28, and full term at week 37.</li>
            <li>Switch to the Ovulation tab and enter your average cycle length to calculate your fertile window — the days each cycle when conception is most likely. The default cycle length is 28 days, but you can adjust it to match your actual cycle.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How the Due Date Is Calculated</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The standard formula used by healthcare providers worldwide is called <strong>Naegele&apos;s Rule</strong>. The rule is straightforward: the estimated due date (EDD) equals the first day of the last menstrual period plus 280 days, which is exactly 40 weeks. This calculation assumes a regular 28-day menstrual cycle in which ovulation occurs around day 14.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            A common point of confusion is that the count begins from the LMP, not from the moment of conception. Because ovulation and fertilization typically happen around day 14 of the cycle, the embryo is actually about two weeks old when pregnancy is considered to be at &ldquo;4 weeks.&rdquo; In other words, the first two weeks of a 40-week pregnancy are counted before conception even occurs. This is why healthcare providers always anchor the calculation to the LMP rather than a conception date: the LMP is a concrete, observable date, while the moment of ovulation or fertilization can only be estimated.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            The fertile window is calculated separately from the due date. For a standard 28-day cycle, ovulation is estimated to occur on day 14 (cycle length minus 14 days). The fertile window spans the five days before ovulation through the day after, because sperm can survive in the reproductive tract for up to five days while the egg is viable for only 12–24 hours after release.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">A Worked Example</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Suppose the first day of your last menstrual period was <strong>January 1, 2026</strong>. Applying Naegele&apos;s Rule:
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            January 1, 2026 &plus; 280 days &equals; <strong>October 8, 2026</strong>. That is the estimated due date.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Now suppose today is July 1, 2026. The number of days since the LMP is 181 days (January has 31 days, February 28, March 31, April 30, May 31, June 30, plus 1 day in July = 181). Dividing by 7 gives 25 complete weeks and 6 extra days, so the pregnancy is at <strong>25 weeks and 6 days</strong>. Because 25 falls between weeks 13 and 27, the pregnancy is in the <strong>second trimester</strong>. The percentage complete is 181 &divide; 280 &times; 100 &approx; <strong>64.6%</strong>.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            For the ovulation calculation with a standard 28-day cycle: days to ovulation from the LMP &equals; 28 &minus; 14 &equals; 14. So ovulation would have been estimated on <strong>January 15, 2026</strong>. The fertile window would have run from <strong>January 10</strong> (five days before ovulation) through <strong>January 16</strong> (one day after). If your cycle were longer — say 35 days — ovulation would shift to day 21 (35 &minus; 14), making the fertile window approximately January 17–23 and pushing the due date about one week later than the standard formula would suggest.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            These calculations match exactly what the tool above computes. Try entering January 1, 2026 as your LMP and you will see the same figures.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Trimesters and Milestones</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Pregnancy is divided into three trimesters, each roughly three months long. Keep in mind that only about 1 in 20 babies — around 5% — are born on their exact estimated due date. Most births occur within two weeks before or after the EDD, and dates for individual milestones are approximations as well. The table below summarizes what to expect in each period.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Trimester</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Weeks</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">What&apos;s Happening</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="p-3 border border-slate-200 font-medium">First</td>
                  <td className="p-3 border border-slate-200">1–12</td>
                  <td className="p-3 border border-slate-200">All major organ systems begin forming; heartbeat detectable around week 6; nausea and fatigue are common; first prenatal visit usually scheduled by week 10.</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200 font-medium">Second</td>
                  <td className="p-3 border border-slate-200">13–27</td>
                  <td className="p-3 border border-slate-200">Energy typically returns and nausea eases; fetal movement (quickening) felt around weeks 16–22; anatomy ultrasound at approximately week 20 checks structural development.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-medium">Third</td>
                  <td className="p-3 border border-slate-200">28–40</td>
                  <td className="p-3 border border-slate-200">Rapid weight gain and lung maturation; weekly prenatal visits begin around week 36; full term is reached at 39 weeks; birth is expected by 40–42 weeks.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How accurate is an estimated due date?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                An estimated due date is just that — an estimate. Research consistently shows that only about 4–5% of babies are born on their exact EDD. The majority of births happen within ten days on either side of the due date, with the normal birth window spanning from 37 weeks (early term) to 42 weeks (post-term). Think of your due date as the midpoint of a roughly four-week birth window rather than a firm deadline. A first-trimester ultrasound can narrow the range and will often become the reference date your provider uses going forward.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is the difference between LMP and conception date?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The LMP (last menstrual period) is the first day of your most recent period before pregnancy. Conception — the moment sperm fertilizes an egg — typically happens about 14 days later during ovulation. Because conception cannot always be pinpointed precisely, medical dating anchors everything to the LMP. This is why a pregnancy is called &ldquo;4 weeks&rdquo; when the embryo is biologically only about 2 weeks old. If you know your conception date, you can convert it by subtracting approximately 14 days to get the equivalent LMP date.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What if my cycle is not 28 days?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Naegele&apos;s Rule was designed assuming a textbook 28-day cycle. If your cycles are consistently shorter or longer, ovulation shifts accordingly. The rule of thumb is: ovulation occurs approximately 14 days before the next expected period, regardless of cycle length. For a 35-day cycle, ovulation falls around day 21 — one week later than the standard assumption. As a result, a due date based purely on LMP could be off by that same margin. Use the ovulation tab on this calculator to adjust for your actual cycle length, and discuss the result with your provider, who may correct the due date via ultrasound.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How is the fertile window estimated?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The fertile window is calculated from the estimated ovulation date. Ovulation day equals your cycle length minus 14 days (the luteal phase is nearly always 14 days regardless of total cycle length). The fertile window runs from five days before ovulation through one day after. Sperm can live inside the reproductive tract for up to five days, so intercourse in the days leading up to ovulation can still result in conception. The day of ovulation and the day after are the peak fertility days. This calculator uses those same formulas — enter your cycle length in the Ovulation tab to get your personalized window.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Can the due date change after an ultrasound?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes. When ultrasound measurements of the embryo or fetus differ significantly from the LMP-based estimate, most providers revise the due date to match the ultrasound. A first-trimester ultrasound (before 14 weeks) is the most accurate way to date a pregnancy because fetal growth is highly consistent at that stage. In later trimesters, individual variation in fetal size makes dating by ultrasound less reliable, so providers generally do not change the due date based on a second- or third-trimester scan alone.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is a &ldquo;full-term&rdquo; pregnancy?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The American College of Obstetricians and Gynecologists (ACOG) defines full term as 39 weeks 0 days through 40 weeks 6 days. Early term is 37–38 weeks, late term is 41 weeks, and post-term is 42 weeks or beyond. Babies born before 37 weeks are considered preterm. The distinction matters because even at 37 or 38 weeks, some organ systems — particularly the lungs and brain — are still maturing. Waiting until at least 39 weeks, when medically safe to do so, is associated with better outcomes for most newborns.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">When should I have my first prenatal appointment?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Most providers recommend scheduling your first prenatal visit between weeks 8 and 10 of pregnancy. At this appointment your provider will confirm the pregnancy, review your medical history, order initial bloodwork, and often perform or schedule an early ultrasound to verify dates. If you have a history of pregnancy complications, irregular cycles, or fertility treatment, you may be seen earlier. Early prenatal care is one of the most important steps you can take for a healthy pregnancy, so contact your OB-GYN or midwife as soon as you have a positive pregnancy test.
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-200 pt-6">
          <strong>Disclaimer:</strong> This calculator is for informational purposes only and does not constitute medical advice. Always consult your OB-GYN or midwife for personalized pregnancy care and an accurate due date.
        </p>
      </section>
    </>
  );
}
