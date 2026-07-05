import type { Metadata } from "next";
import BmiTool from "./BmiTool";

export const metadata: Metadata = {
  alternates: { canonical: "/bmi/" },
  title: "BMI Calculator — Body Mass Index for Adults",
  description:
    "Calculate your Body Mass Index (BMI) in metric or imperial units. See your BMI category and healthy weight range instantly. Free online BMI calculator.",
};

export default function BmiPage() {
  return (
    <>
      <BmiTool />

      <section className="max-w-2xl mx-auto px-4 pb-16 space-y-10">
        {/* Block 1: How to Use */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the BMI Calculator</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            This calculator gives you an instant BMI result the moment you finish entering your measurements — no button press needed. Here is how to get the most out of it:
          </p>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>Select your preferred unit system — <strong>metric</strong> (centimetres and kilograms) or <strong>imperial</strong> (feet, inches, and pounds) — using the toggle at the top of the form.</li>
            <li>Enter your height. For imperial, fill in feet and inches in the two separate fields; for metric, enter your total height in centimetres.</li>
            <li>Enter your current weight in the weight field.</li>
            <li>Your BMI score, category badge, and the healthy weight range for your exact height appear instantly in the results card below the form.</li>
            <li>The colour-coded scale bar shows where your BMI falls relative to all four categories so you can see at a glance how far you are from each boundary.</li>
            <li>To compare different scenarios — say, a target weight — simply update the weight field. Results recalculate in real time.</li>
          </ol>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            No data is sent to any server. All calculations happen locally in your browser, so your measurements stay private.
          </p>
        </div>

        {/* Block 2: How BMI Is Calculated */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How BMI Is Calculated</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Body Mass Index was developed by Belgian mathematician Adolphe Quetelet in the 1830s as a simple way to compare weight across populations of different heights. Despite being nearly two centuries old, it remains the most widely used screening tool for weight classification because it requires only two easily measured values.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The core formula divides weight by the square of height, which corrects for the fact that taller people naturally weigh more even at the same relative body composition:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-1">Metric formula</p>
            <p className="text-slate-600 text-sm leading-relaxed font-mono">BMI = weight (kg) ÷ height² (m²)</p>
            <p className="text-sm font-semibold text-slate-700 mt-3 mb-1">Imperial formula</p>
            <p className="text-slate-600 text-sm leading-relaxed font-mono">BMI = 703 × weight (lb) ÷ height² (in²)</p>
            <p className="text-xs text-slate-400 mt-2">The constant 703 is a unit-conversion factor that makes the imperial result equal to the metric result.</p>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            This calculator converts imperial inputs to metric internally before computing, so both paths produce identical results for the same physical measurements. The healthy weight range shown in results is derived by solving the formula in reverse for the BMI boundaries of 18.5 and 24.9, using your entered height.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The World Health Organization and the CDC define four standard adult categories based on the resulting number:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">BMI Range</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Category</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Health Considerations</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="p-3 border border-slate-200">Below 18.5</td>
                  <td className="p-3 border border-slate-200 font-medium text-blue-600">Underweight</td>
                  <td className="p-3 border border-slate-200">May indicate nutritional deficiency; worth discussing with a doctor.</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">18.5 – 24.9</td>
                  <td className="p-3 border border-slate-200 font-medium text-green-600">Normal weight</td>
                  <td className="p-3 border border-slate-200">Associated with the lowest risk for most weight-related conditions.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200">25.0 – 29.9</td>
                  <td className="p-3 border border-slate-200 font-medium text-yellow-600">Overweight</td>
                  <td className="p-3 border border-slate-200">Modestly elevated risk for some conditions; lifestyle changes are often beneficial.</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">30.0 and above</td>
                  <td className="p-3 border border-slate-200 font-medium text-red-600">Obese</td>
                  <td className="p-3 border border-slate-200">Higher risk for cardiovascular disease, type 2 diabetes, and other conditions.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Block 3: Worked Example */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">A Worked Example</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Suppose someone is 5&apos;10&quot; (178 cm) and currently weighs 176 lb (80 kg). Here is how the calculation works step by step using both formulas.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-1 font-semibold">Using the metric formula:</p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 text-sm text-slate-700 space-y-1 font-mono">
            <p>Height: 178 cm = 1.78 m</p>
            <p>Height²: 1.78 × 1.78 = 3.1684 m²</p>
            <p>BMI = 80 kg ÷ 3.1684 = <strong>25.3</strong></p>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-1 font-semibold">Using the imperial formula:</p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 text-sm text-slate-700 space-y-1 font-mono">
            <p>Height: 5&apos;10&quot; = 70 inches</p>
            <p>Height²: 70 × 70 = 4,900 in²</p>
            <p>BMI = 703 × 176 ÷ 4,900 = 123,728 ÷ 4,900 = <strong>25.3</strong></p>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Both formulas agree: a BMI of <strong>25.3</strong>, which falls just inside the <span className="font-semibold text-yellow-600">Overweight</span> range (25.0–29.9). The person is only 0.3 BMI points above the upper edge of the Normal category.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-1 font-semibold">Healthy weight range for 5&apos;10&quot; (178 cm):</p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 text-sm text-slate-700 space-y-1 font-mono">
            <p>Min (BMI 18.5): 18.5 × 3.1684 = 58.6 kg &nbsp;≈&nbsp; 129 lb</p>
            <p>Max (BMI 24.9): 24.9 × 3.1684 = 78.9 kg &nbsp;≈&nbsp; 174 lb</p>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            To reach the top of the Normal range (174 lb / 78.9 kg), the person would need to lose about 2 lb. To reach the midpoint of their healthy range (roughly 151 lb / 68.5 kg) would require losing around 25 lb. This kind of reference point is exactly what the calculator surfaces automatically — you can see your own healthy range in the green box that appears when you enter your measurements.
          </p>
        </div>

        {/* Block 4: Common Misunderstandings */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Common Misunderstandings About BMI</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            BMI is a useful first-pass screening number, but it is frequently misread. Understanding where it falls short helps you put your result in the right context.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Misunderstanding</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Reality</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="p-3 border border-slate-200 font-medium">A high BMI always means excess fat</td>
                  <td className="p-3 border border-slate-200">BMI cannot distinguish muscle from fat. A 200 lb athlete with very low body fat may have the same BMI as a sedentary person carrying excess fat. Body composition measurements (DEXA scan, hydrostatic weighing) give a clearer picture.</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200 font-medium">BMI thresholds are universal</td>
                  <td className="p-3 border border-slate-200">Research shows that people of Asian descent can have elevated metabolic risk at BMIs below 25. Several health organisations recommend lower thresholds (e.g., 23 for overweight) for certain ethnic groups.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-medium">BMI works the same for children</td>
                  <td className="p-3 border border-slate-200">Children and teenagers are assessed using age- and sex-specific growth chart percentiles, not fixed adult cut-offs. A BMI of 22 could be healthy or above average depending on the child&apos;s age and sex.</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200 font-medium">Older adults need higher BMIs</td>
                  <td className="p-3 border border-slate-200">Adults over 65 naturally lose muscle mass (sarcopenia). A BMI in the range of 23–27 is often considered acceptable for older adults, as very low BMI in this group is associated with increased frailty and mortality risk.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-medium">BMI diagnoses obesity</td>
                  <td className="p-3 border border-slate-200">BMI screens populations and flags individuals for further evaluation. A clinical diagnosis of obesity requires additional assessments, including waist circumference, blood markers, and in some cases body fat percentage testing.</td>
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
              <h3 className="font-semibold text-slate-800 mb-1">Is BMI an accurate measure of health?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                BMI is a useful population-level screening tool, but it has real limitations when applied to individuals. It does not distinguish between muscle mass and fat mass, so a very muscular person may register as overweight while carrying very little fat. It also does not account for age, sex, bone density, or how fat is distributed around the body — all of which matter for metabolic health. Use BMI as a starting point, not a final verdict.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How is BMI calculated?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                BMI is calculated by dividing your weight in kilograms by the square of your height in metres: <strong>BMI = weight (kg) ÷ height² (m²)</strong>. In imperial units the equivalent formula is: <strong>BMI = 703 × weight (lb) ÷ height² (in²)</strong>. The factor 703 is a unit-conversion constant that makes the two formulas produce the same number for the same person.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What BMI range is considered healthy for adults?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                For most adults, a BMI between 18.5 and 24.9 is classified as Normal weight by the WHO and CDC. However, these thresholds are population averages. Older adults, people from certain ethnic backgrounds, and highly muscular individuals may have different optimal ranges. Always combine BMI with other health indicators and professional guidance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Does BMI apply to children?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No — not in the same way. For children and teens (ages 2–19), BMI is plotted on age- and sex-specific growth charts and interpreted as a percentile rather than a fixed category. A BMI that falls at the 85th percentile for age and sex is considered overweight for that child, regardless of the absolute number. This calculator is designed for adults only. For children, consult a paediatrician or use CDC growth chart tools.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What&apos;s the difference between BMI and body fat percentage?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                BMI is an indirect estimate calculated from height and weight alone. Body fat percentage is a direct measurement of how much of your total mass is fat tissue. Two people can have identical BMIs but very different body fat percentages. A 35-year-old male competitive cyclist at 25.5 BMI might carry 12% body fat; a sedentary person of the same height and weight might carry 28% fat. Methods for measuring body fat include DEXA scanning, hydrostatic (underwater) weighing, air displacement plethysmography, and bioelectrical impedance analysis. BMI is free and instant; body fat percentage testing is more expensive and less accessible, but far more informative about body composition.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Does BMI differ for men and women?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The standard BMI categories (18.5, 25, 30) are the same for adult men and women, but the biological reality differs. Women naturally carry more essential body fat than men — roughly 10–13% of body mass compared to 2–5% for men — due to hormonal and reproductive factors. This means a woman and a man with the same BMI may have meaningfully different actual body fat percentages. Some researchers advocate for sex-specific BMI adjustments, though no universal alternative thresholds have been officially adopted.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Why did my BMI category change with a small weight change?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                BMI categories have hard boundaries at 18.5, 25.0, and 30.0. If your BMI sits near one of those lines — say 24.8 or 25.2 — a change of just a pound or two is enough to cross into the next category. This is not a meaningful health transition; it is an artifact of the discrete classification system. Research consistently shows that health risk changes gradually across the BMI range, not in sudden steps at the category boundaries. Focus on the trend over weeks and months rather than the exact category on any given day.
              </p>
            </div>
          </div>
        </div>

        {/* Block 6: Disclaimer */}
        <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-200 pt-6">
          <strong>Disclaimer:</strong> BMI results are for informational and educational purposes only and do not constitute medical advice. Consult a qualified healthcare provider before making any changes to your diet or exercise habits.
        </p>
      </section>
    </>
  );
}
