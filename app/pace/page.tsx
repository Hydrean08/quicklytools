import type { Metadata } from "next";
import PaceTool from "./PaceTool";

export const metadata: Metadata = {
  title: "Running Pace Calculator — Pace, Finish Time & Race Predictor",
  description:
    "Calculate running pace per mile or km, predict finish times, and forecast race results at any distance using the Riegel formula. Free online running calculator.",
};

export default function PacePage() {
  return (
    <>
      <PaceTool />

      <section className="max-w-2xl mx-auto px-4 pb-16 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Running Pace Calculator</h2>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>Select your preferred unit — miles or kilometers.</li>
            <li>To find your pace: enter the distance you ran and your finish time. Your pace per mile/km appears instantly.</li>
            <li>To find a finish time: enter your distance goal and target pace. The calculator shows your projected finish time.</li>
            <li>Use the Race Predictor section to estimate a finish time at a different distance based on a known result, using the Riegel formula.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Common Running Paces and What They Mean</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Pace (per mile)</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Level</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">5K Finish Time</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="p-3 border border-slate-200">15:00+</td>
                  <td className="p-3 border border-slate-200">Beginner walker/jogger</td>
                  <td className="p-3 border border-slate-200">~46 min+</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">12:00 – 15:00</td>
                  <td className="p-3 border border-slate-200">Casual runner</td>
                  <td className="p-3 border border-slate-200">37 – 46 min</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200">10:00 – 12:00</td>
                  <td className="p-3 border border-slate-200">Recreational runner</td>
                  <td className="p-3 border border-slate-200">31 – 37 min</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">8:00 – 10:00</td>
                  <td className="p-3 border border-slate-200">Intermediate runner</td>
                  <td className="p-3 border border-slate-200">25 – 31 min</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200">6:00 – 8:00</td>
                  <td className="p-3 border border-slate-200">Advanced runner</td>
                  <td className="p-3 border border-slate-200">19 – 25 min</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">Under 6:00</td>
                  <td className="p-3 border border-slate-200">Elite / competitive</td>
                  <td className="p-3 border border-slate-200">Under 19 min</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How does the Riegel race predictor formula work?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The Riegel formula predicts finish time at a new distance based on a known performance: <strong>T2 = T1 × (D2 / D1)^1.06</strong>. The exponent 1.06 accounts for the fact that performance degrades slightly over longer distances — you can't maintain a 5K pace for a marathon. It was developed by Pete Riegel in 1977 and remains one of the most widely used prediction models in recreational running.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is a good pace for a beginner runner?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A sustainable beginner pace is one where you can hold a conversation — typically 12–15 minutes per mile (7:30–9:20 per km). Speed comes with consistency. Most coaches recommend building mileage at an easy, conversational effort before focusing on pace.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How accurate is the race predictor?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The Riegel formula is most accurate when predicting across similar distances (e.g., 5K to 10K). Accuracy decreases for large jumps like 5K to marathon, where training, fueling strategy, and long-run adaptation play a bigger role than raw speed. Use it as a ballpark, not a guarantee.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is a negative split and should I aim for one?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A negative split means running the second half of a race faster than the first. Most running coaches recommend it — starting conservatively prevents early fatigue and typically results in a faster overall time. Use the pace calculator to set a first-half target pace slightly slower than your goal pace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
