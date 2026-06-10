import type { Metadata } from "next";
import PregnancyTool from "./PregnancyTool";

export const metadata: Metadata = {
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
            <li>Enter the first day of your last menstrual period (LMP) — this is the standard starting point used by healthcare providers.</li>
            <li>Your estimated due date, current week of pregnancy, and trimester are calculated immediately.</li>
            <li>Scroll down to see key milestone dates for each trimester and important prenatal appointment windows.</li>
            <li>Use the Ovulation tab to calculate your estimated fertile window based on your average cycle length.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Pregnancy Week by Week: Key Milestones</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">First Trimester (Weeks 1–12)</h3>
              <p>The embryo implants and major organ systems begin forming. The heartbeat is detectable by ultrasound around week 6. Morning sickness is common. Your first prenatal appointment is typically scheduled between weeks 8–10.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Second Trimester (Weeks 13–26)</h3>
              <p>Often called the "golden trimester" — nausea typically eases and energy returns. The anatomy ultrasound (usually around week 20) checks for structural development. Fetal movement (quickening) is first felt between weeks 16–22.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Third Trimester (Weeks 27–40)</h3>
              <p>Rapid growth and final organ maturation. The baby's lungs mature and they gain most of their birth weight. Weekly appointments typically begin around week 36. Full term is considered 39–40 weeks.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How is a due date calculated?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The standard method is Naegele's Rule: add 280 days (40 weeks) to the first day of your last menstrual period. This method assumes a 28-day cycle and ovulation on day 14. Your healthcare provider may adjust the due date based on ultrasound measurements, which are typically more accurate in the first trimester.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How accurate is an estimated due date?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Only about 4–5% of babies are born on their exact due date. Most births occur within two weeks before or after the EDD. A due date is best thought of as the center of a birth window rather than a fixed deadline.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What if my cycle is longer or shorter than 28 days?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Naegele's Rule is calibrated for a 28-day cycle. If your cycle is consistently longer (e.g., 35 days), ovulation likely occurs later and your due date may be a week or so later than the standard calculation. The ovulation calculator on this tool adjusts for custom cycle lengths.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">When should I confirm my due date with a doctor?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Always confirm your due date with your healthcare provider at your first prenatal visit. A first-trimester ultrasound (before 13 weeks 6 days) is the most accurate way to date a pregnancy and will be used to confirm or adjust the estimated due date.
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
