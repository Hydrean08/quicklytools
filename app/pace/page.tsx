import type { Metadata } from "next";
import PaceTool from "./PaceTool";

export const metadata: Metadata = {
  alternates: { canonical: "/pace/" },
  title: "Running Pace Calculator — Pace, Finish Time & Race Predictor",
  description:
    "Calculate running pace per mile or km, predict finish times, and forecast race results at any distance using the Riegel formula. Free online running calculator.",
};

export default function PacePage() {
  return (
    <>
      <PaceTool />

      <section className="max-w-2xl mx-auto px-4 pb-16 space-y-10">

        {/* Block 1: How to Use */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Pace Calculator</h2>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>Open the <strong>Pace</strong> tab. Enter the distance you ran and your total finish time (hours, minutes, seconds). The calculator instantly shows your pace in both min/km and min/mile.</li>
            <li>Open the <strong>Finish Time</strong> tab. Select a race distance from the dropdown (5K, 10K, Half Marathon, Marathon, and more) or enter a custom distance in kilometers. Type your target pace and choose whether it is per kilometer or per mile. Your projected finish time appears immediately.</li>
            <li>Open the <strong>Race Predictor</strong> tab. Select your known race distance, enter the time you ran it, and the calculator outputs predicted finish times for all other common race distances using the Riegel formula.</li>
            <li>All three tabs update in real time — no button to press. Change any input and results refresh automatically.</li>
            <li>Pace is shown in both min/km and min/mile regardless of which unit you enter, so you never need to convert manually.</li>
          </ol>
        </div>

        {/* Block 2: How Pace and Finish Time Are Calculated */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How Pace and Finish Time Are Calculated</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Running pace is the time it takes to cover one unit of distance — one kilometer or one mile. The formula is straightforward:
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong>Pace = Total Time &divide; Distance</strong>
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            For example, if you ran 10 km in 55 minutes and 0 seconds (3,300 seconds total), your pace per kilometer is 3,300 &divide; 10 = 330 seconds, which equals 5 minutes and 30 seconds per km (5:30/km). To convert that to a per-mile pace, the calculator multiplies the per-km seconds by 1.60934 (the number of kilometers in one mile): 330 &times; 1.60934 &asymp; 531 seconds, or 8 minutes 51 seconds per mile (8:51/mi).
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Going the other direction, <strong>Finish Time = Pace &times; Distance</strong>. If your target pace is 6:00 per km and your race is 21.0975 km (a half marathon), the projected finish time is 6 &times; 21.0975 = 126.585 minutes, or roughly 2 hours, 6 minutes, and 35 seconds.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            If you enter a pace in min/mile, the calculator converts it to a per-km pace internally (dividing by 1.60934) before multiplying by the distance in kilometers. This keeps all the math consistent regardless of which unit you prefer to train in.
          </p>
        </div>

        {/* Block 3: Worked Example */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">A Worked Example</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Suppose you ran a 10 km race in exactly 50 minutes (50:00). Here is how the numbers work out:
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Total time in seconds: 50 &times; 60 = 3,000 seconds. Divide by 10 km: 3,000 &divide; 10 = 300 seconds per km = <strong>5:00 per km</strong>. To get the mile pace: 300 &times; 1.60934 &asymp; 483 seconds = <strong>8:03 per mile</strong>.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Now use that pace to estimate finish times at other distances:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Race</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Distance</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Finish Time at 5:00/km</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="p-3 border border-slate-200">1 Mile</td>
                  <td className="p-3 border border-slate-200">1.609 km</td>
                  <td className="p-3 border border-slate-200">8:03</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">5K</td>
                  <td className="p-3 border border-slate-200">5 km</td>
                  <td className="p-3 border border-slate-200">25:00</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200">10K</td>
                  <td className="p-3 border border-slate-200">10 km</td>
                  <td className="p-3 border border-slate-200">50:00</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">Half Marathon</td>
                  <td className="p-3 border border-slate-200">21.097 km</td>
                  <td className="p-3 border border-slate-200">1:45:29</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200">Marathon</td>
                  <td className="p-3 border border-slate-200">42.195 km</td>
                  <td className="p-3 border border-slate-200">3:29:58</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            Keep in mind these are <em>even-pace</em> projections — they assume you hold exactly 5:00/km for the entire race. In practice, fatigue sets in over longer distances, which is exactly what the Riegel formula accounts for in the Race Predictor tab.
          </p>
        </div>

        {/* Block 4: Riegel Formula */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Predicting Race Times (Riegel Formula)</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The Race Predictor uses the Riegel formula, published by Pete Riegel in a 1977 paper in <em>Runner&apos;s World</em>. It accounts for the fact that performance degrades slightly as distance increases — no one can hold their 5K pace through a marathon.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong>T2 = T1 &times; (D2 &divide; D1)^1.06</strong>
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Where T1 is your known finish time, D1 is the known distance, D2 is the target distance, and T2 is the predicted finish time. The exponent 1.06 is an empirically derived fatigue factor — slightly above 1.0 to reflect the nonlinear relationship between distance and performance.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong>Example:</strong> You ran a 10K in 50:00 (3,000 seconds). Predict your half marathon (21.0975 km):
            T2 = 3,000 &times; (21.0975 &divide; 10)^1.06 = 3,000 &times; (2.10975)^1.06 &asymp; 3,000 &times; 2.227 &asymp; 6,681 seconds = <strong>1:51:21</strong>.
            Notice this is longer than the simple even-pace projection of 1:45:29 — the formula builds in the realistic slowdown over the extra distance.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The Riegel formula is most reliable when predicting between distances of similar magnitude (5K to 10K, 10K to half marathon). Accuracy drops for large jumps — for example, using a 1-mile time to predict a marathon — because training specificity, nutrition strategy, and long-run endurance become dominant factors the formula cannot model. Use predictions as a training target, not a race-day guarantee.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The table below shows the equivalent predicted paces for common race distances if your 10K time is 50:00, to illustrate how the Riegel formula adjusts pace expectations at each distance:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Race Distance</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Predicted Finish</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Implied Pace (per km)</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="p-3 border border-slate-200">5K</td>
                  <td className="p-3 border border-slate-200">23:52</td>
                  <td className="p-3 border border-slate-200">4:46/km</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">10K (known)</td>
                  <td className="p-3 border border-slate-200">50:00</td>
                  <td className="p-3 border border-slate-200">5:00/km</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200">Half Marathon</td>
                  <td className="p-3 border border-slate-200">1:51:21</td>
                  <td className="p-3 border border-slate-200">5:17/km</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">Marathon</td>
                  <td className="p-3 border border-slate-200">3:54:04</td>
                  <td className="p-3 border border-slate-200">5:33/km</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Block 5: FAQ */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How is running pace calculated?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pace is calculated by dividing your total time (in seconds) by the distance you covered. The result is seconds per kilometer or seconds per mile, which is then formatted as minutes:seconds. For example, 3,300 seconds over 10 km = 330 seconds/km = 5:30 per km.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What&apos;s a good running pace?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                &ldquo;Good&rdquo; is relative to your experience and goals. A comfortable beginner pace is around 7:00&ndash;9:00 per km (11:00&ndash;14:30 per mile). Recreational runners often settle around 5:00&ndash;7:00 per km (8:00&ndash;11:00 per mile). Advanced runners typically train between 4:00 and 5:30 per km (6:30&ndash;9:00 per mile). Elite athletes race well under 3:00 per km. The best benchmark is your own progress over time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How accurate is the race predictor?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The Riegel formula is well-validated for predictions within a two-to-three times distance ratio — such as 5K to 10K or 10K to half marathon. For larger jumps, like a 5K to a marathon, accuracy decreases significantly because endurance training, nutrition, pacing strategy, and aerobic base all become more important than the formula can account for. Always combine the prediction with sport-specific training.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is the difference between pace and speed?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Speed is distance divided by time (e.g., 12 km/h), while pace is time divided by distance (e.g., 5:00 per km). Runners typically use pace because it directly tells you how long each kilometer or mile will take — which is more useful for pacing a race than a speed number. Cyclists and swimmers more often use speed. To convert: speed (km/h) = 60 &divide; pace (min/km).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How do I convert min/km to min/mile?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Multiply your per-km pace in seconds by 1.60934. For example, 5:00/km = 300 seconds &times; 1.60934 &asymp; 483 seconds = 8:03 per mile. To go the other direction, divide your per-mile seconds by 1.60934. This calculator does both conversions automatically every time you enter a result.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How should my race pace differ from my training pace?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Most training should be done at an easy pace — roughly 60&ndash;90 seconds per km slower than your goal race pace. This builds aerobic capacity without excessive fatigue. Only a small portion of weekly mileage (typically 10&ndash;20%) should be at race pace or faster. Running all your training at race pace increases injury risk and limits long-term development. Use this calculator to set easy-day targets and distinguish them from your goal race pace.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Can I use a 5K time to predict a marathon?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Technically yes, but the prediction will likely be optimistic. The Riegel formula assumes you have trained appropriately for the target distance. A runner who has only ever raced 5Ks probably lacks the marathon-specific endurance and fueling experience to hit the predicted time. Use a 5K-to-marathon prediction as a distant ceiling, not a race-day target, until you have completed a half marathon under similar conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Block 6: Closing note */}
        <p className="text-slate-500 text-xs leading-relaxed">
          Pace and finish time calculations use direct division. Race predictions use the Riegel formula (T2 = T1 &times; (D2/D1)^1.06) and are estimates only. Results are for informational purposes and should not replace advice from a qualified running coach or sports medicine professional.
        </p>

      </section>
    </>
  );
}
