import type { Metadata } from "next";
import BmiTool from "./BmiTool";

export const metadata: Metadata = {
  title: "BMI Calculator — Body Mass Index for Adults",
  description:
    "Calculate your Body Mass Index (BMI) in metric or imperial units. See your BMI category and healthy weight range instantly. Free online BMI calculator.",
};

export default function BmiPage() {
  return (
    <>
      <BmiTool />

      <section className="max-w-2xl mx-auto px-4 pb-16 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the BMI Calculator</h2>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>Select your preferred unit system — metric (cm / kg) or imperial (ft, in / lbs).</li>
            <li>Enter your height. For imperial, enter feet and inches separately.</li>
            <li>Enter your current weight.</li>
            <li>Your BMI score, category, and healthy weight range for your height appear instantly.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Understanding BMI Categories</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            BMI (Body Mass Index) is a number calculated from your height and weight. It is a widely used screening tool for weight categories that may lead to health problems, though it is not a diagnostic measure on its own.
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

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Is BMI an accurate measure of health?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                BMI is a useful population-level screening tool, but it has limitations for individuals. It does not distinguish between muscle and fat mass, so athletes and very muscular people often register as overweight despite being healthy. It also does not account for age, sex, bone density, or fat distribution.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How is BMI calculated?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                BMI is calculated by dividing your weight in kilograms by the square of your height in meters: <strong>BMI = weight (kg) ÷ height² (m²)</strong>. In imperial units the formula is: BMI = 703 × weight (lbs) ÷ height² (inches²).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What BMI range is considered healthy for adults?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                For most adults, a BMI of 18.5 to 24.9 is considered healthy. However, these thresholds may differ slightly for older adults and certain ethnic populations. Always consult a healthcare provider for a complete health assessment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Does BMI apply to children?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                For children and teens (ages 2–19), BMI is interpreted differently using age- and sex-specific growth charts. This calculator is designed for adults. For children, consult a pediatrician or use a CDC growth chart.
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-200 pt-6">
          <strong>Disclaimer:</strong> BMI results are for informational and educational purposes only and do not constitute medical advice. Consult a qualified healthcare provider before making any changes to your diet or exercise habits.
        </p>
      </section>
    </>
  );
}
