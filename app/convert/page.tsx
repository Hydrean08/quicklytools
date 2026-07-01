import type { Metadata } from "next";
import ConvertTool from "./ConvertTool";

export const metadata: Metadata = {
  title: "Unit Converter — Length, Weight, Temperature & Volume",
  description:
    "Convert between metric and imperial units instantly. Length, weight, temperature, and volume conversions — free online unit converter, no signup needed.",
};

export default function ConvertPage() {
  return (
    <>
      <ConvertTool />

      <section className="max-w-2xl mx-auto px-4 pb-16 space-y-10">

        {/* Block 1 — How to Use */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Unit Converter</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            This tool converts between metric and imperial units instantly as you type. There is no submit button and no page reload — every field updates the moment you enter a number.
          </p>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>Choose a category from the tabs at the top: Length, Weight, Temperature, or Volume.</li>
            <li>Click or tap any unit field and type your value.</li>
            <li>All other unit fields in the same category update simultaneously in real time.</li>
            <li>To start over, clear the field or type a new number — the results replace the old ones instantly.</li>
            <li>Switch categories at any time; each category remembers nothing between switches, so you always start fresh.</li>
          </ol>
        </div>

        {/* Block 2 — Supported Units */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Supported Units</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The converter supports four measurement categories. Every unit listed below is available in the tool.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Category</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Units</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Base Unit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700 font-medium">Length</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">mm, cm, m, km, in, ft, yd, mi</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Meter (m)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700 font-medium">Weight</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">mg, g, kg, t, oz, lb, st</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Gram (g)</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700 font-medium">Temperature</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">°C, °F, K</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Celsius (°C)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700 font-medium">Volume</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">ml, l, tsp, tbsp, fl oz, cup, pt, qt, gal</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">Milliliter (ml)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            Weight includes the metric ton (t = 1,000,000 g) and the British stone (st = 6,350.29 g = 14 lb). Volume uses US customary definitions throughout — see the FAQ for the difference between US and imperial gallons.
          </p>
        </div>

        {/* Block 3 — Common Conversions */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Common Conversions and How They Work</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            For length, weight, and volume the tool multiplies your input by a fixed factor to reach a base unit, then divides by the target unit&apos;s factor. Temperature is different — it uses an additive formula, not a simple ratio, because the Celsius and Fahrenheit scales start at different zero points. Here are everyday examples you can verify directly in the tool.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">From</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">To</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Result</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">How</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">10 km</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">mi</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">6.214 mi</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">÷ 1.60934</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">1 mi</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">km</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">1.609 km</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">× 1.60934</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">1 in</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">cm</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">2.54 cm</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">× 2.54 (exact)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">5 kg</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">lb</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">11.023 lb</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">÷ 0.453592</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">70 °F</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">°C</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">21.11 °C</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">(70 − 32) × 5/9</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">1 cup</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">ml</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">236.6 ml</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">× 236.588</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">1 gal</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">l</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">3.785 l</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">÷ 1000 (from ml)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            The inch-to-centimeter factor (2.54) is exact by international definition since 1959. All other factors are rounded to six significant figures in the tool, which is more than sufficient for everyday use.
          </p>
        </div>

        {/* Block 4 — Metric vs Imperial */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Metric vs. Imperial: Why Two Systems?</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The metric system — formally called the International System of Units (SI) — was developed in France in the late 18th century and designed around powers of ten. Converting between metric units is as simple as moving a decimal point: 1 kilometer is exactly 1,000 meters, 1 kilogram is exactly 1,000 grams. Nearly every country in the world uses metric as its official measurement standard for science, industry, and everyday life.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Imperial units — feet, pounds, gallons — grew from a patchwork of historical English measurements that were standardized in the British Weights and Measures Act of 1824. The factors between imperial units are irregular: 12 inches in a foot, 3 feet in a yard, 1,760 yards in a mile. The United Kingdom officially switched to metric decades ago, though imperial units survive in casual use (road distances in miles, body weight in stone, beer in pints).
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The United States is unusual: it is one of only three countries (alongside Liberia and Myanmar) that has not fully adopted metric as its primary everyday system. The US Metric Conversion Act of 1975 made metric the preferred system for trade and commerce but left adoption voluntary. As a result, Americans routinely mix the two systems — measuring body weight in pounds, drinking milk by the gallon, cooking in cups and teaspoons, but buying soda in two-liter bottles and measuring medicine in milligrams.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            One practical source of confusion is that &ldquo;imperial&rdquo; and &ldquo;US customary&rdquo; volume units look the same but are not. A US gallon is 3.785 liters; a UK imperial gallon is 4.546 liters — roughly 20% larger. The same gap applies to pints and fluid ounces. This converter uses US customary definitions for all volume units.
          </p>
        </div>

        {/* Block 5 — FAQ */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How do I convert kilometers to miles?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Select the Length category, type your kilometer value into the km field, and the mi field updates automatically. The exact factor is 1 km = 0.621371 mi, so 10 km ≈ 6.214 mi. A quick mental shortcut: multiply km by 0.6 to get a rough mile estimate. For running distances, 5 km ≈ 3.1 mi and 10 km ≈ 6.2 mi.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Why is temperature conversion different from other conversions?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Length, weight, and volume conversions use a simple multiplication factor because their scales share the same zero point. Temperature scales do not — Celsius puts zero at the freezing point of water, Fahrenheit puts it at a historical brine-ice mixture, and Kelvin puts it at absolute zero. Because the zeros differ, you need an additive offset in addition to a scale factor. The formula from Celsius to Fahrenheit is °F = °C × 9/5 + 32. Kelvin has no offset from Celsius (°K = °C + 273.15) because both use the same scale size, just different starting points.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is the difference between a US gallon and an imperial gallon?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A US gallon equals 3.785 liters (3,785 ml). A UK imperial gallon equals 4.546 liters — about 20% more. This gap exists because the two standards diverged after American independence. The difference matters practically when comparing fuel-economy figures: a car rated at 30 mpg in the US gets fewer real miles per gallon than a British car rated at 30 mpg, because the US gallon is smaller. This tool uses US customary units for all volume measurements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How accurate are the results?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Results are computed using 64-bit floating-point arithmetic and displayed to six significant figures, which exceeds the precision needed for cooking, construction, travel, or everyday science. The conversion factors themselves match the internationally agreed-upon definitions — for example, the inch is defined as exactly 25.4 mm, so inch-to-millimeter results are mathematically exact. Rounding only appears in the display, not in the underlying calculation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Can I convert between metric and imperial in a single step?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes — that is the main purpose of the tool. All units within a category are shown simultaneously, so entering a value in any metric unit (such as km or kg) immediately shows the corresponding imperial values (mi or lb) in the same panel. There is no need to do a two-step conversion or look up intermediate factors.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How many ml are in a cup?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                One US cup equals 236.588 milliliters. In practice this is often rounded to 240 ml in nutrition labeling. Common cooking fractions: 1/2 cup ≈ 118 ml, 1/4 cup ≈ 59 ml, 1/3 cup ≈ 79 ml. Note that a US cup differs from a metric cup (250 ml, used in Australia and Canada) and from a Japanese cup (200 ml) — this tool uses the US definition.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is the difference between a teaspoon and a tablespoon?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A US tablespoon (tbsp) equals exactly 3 US teaspoons (tsp). In milliliters, 1 tsp = 4.929 ml and 1 tbsp = 14.787 ml. A tablespoon is also equal to half a US fluid ounce (1 fl oz = 2 tbsp = 29.574 ml). These ratios are fixed in the US customary system, making teaspoon-to-tablespoon one of the cleanest conversions in the volume category.
              </p>
            </div>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          All conversions use internationally standardized factors. Results are rounded to six significant figures for display. Temperature conversions use the exact additive formulas defined by the SI and NIST.
        </p>
      </section>
    </>
  );
}
