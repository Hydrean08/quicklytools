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
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Unit Converter</h2>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>Select a category: Length, Weight, Temperature, or Volume.</li>
            <li>Enter a value in any unit field — all other units in the category update simultaneously.</li>
            <li>No submit button needed — conversions happen as you type.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Common Conversion Reference</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Length</h3>
              <ul className="space-y-1 text-slate-600 text-sm leading-relaxed">
                <li>1 inch = 2.54 centimeters</li>
                <li>1 foot = 0.3048 meters</li>
                <li>1 mile = 1.60934 kilometers</li>
                <li>1 yard = 0.9144 meters</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Weight</h3>
              <ul className="space-y-1 text-slate-600 text-sm leading-relaxed">
                <li>1 pound = 0.453592 kilograms</li>
                <li>1 ounce = 28.3495 grams</li>
                <li>1 stone = 6.35029 kilograms (14 pounds)</li>
                <li>1 metric ton = 1,000 kilograms = 2,204.62 pounds</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Temperature</h3>
              <ul className="space-y-1 text-slate-600 text-sm leading-relaxed">
                <li>°C to °F: multiply by 9/5, then add 32</li>
                <li>°F to °C: subtract 32, then multiply by 5/9</li>
                <li>°C to K: add 273.15</li>
                <li>Key points: water freezes at 0°C / 32°F, boils at 100°C / 212°F</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Volume</h3>
              <ul className="space-y-1 text-slate-600 text-sm leading-relaxed">
                <li>1 US gallon = 3.78541 liters</li>
                <li>1 US fluid ounce = 29.5735 milliliters</li>
                <li>1 US cup = 236.588 milliliters</li>
                <li>1 US pint = 473.176 milliliters</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Why does the US use imperial while most countries use metric?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The US, Liberia, and Myanmar are the only countries that have not officially adopted the metric (SI) system as their primary standard. The US made metric the official system in 1975 with the Metric Conversion Act but left adoption voluntary, so imperial units remained dominant in everyday use. Science, medicine, and the military largely use metric in the US.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is the difference between a US gallon and a UK gallon?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A US gallon is 3.785 liters. A UK (imperial) gallon is 4.546 liters — about 20% larger. This matters when comparing fuel economy (mpg) figures between American and British vehicles. This converter uses US measurements for gallons, pints, and fluid ounces.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is absolute zero in Celsius and Fahrenheit?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Absolute zero — the theoretical coldest possible temperature — is 0 Kelvin, which equals −273.15°C or −459.67°F. At this temperature, particles would have minimum thermal motion. It has never been fully achieved in practice, though laboratories have come within billionths of a degree.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How do I convert a recipe from metric to cups?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Use the volume converter for liquids (ml to cups is the most common). For dry ingredients, note that weight-to-volume conversion depends on the ingredient's density — 240ml of water weighs 240g, but 240ml of flour weighs only about 120g. For cooking precision, weight measurements in grams are more reliable than volume.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
