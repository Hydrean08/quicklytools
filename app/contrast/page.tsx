import type { Metadata } from "next";
import ContrastTool from "./ContrastTool";

export const metadata: Metadata = {
  title: "Color Contrast Checker — WCAG AA/AAA Accessibility Tool",
  description:
    "Check WCAG 2.2 color contrast ratios instantly. Get pass/fail for AA and AAA standards with suggested fixes. Free accessibility tool for designers and developers.",
};

export default function ContrastPage() {
  return (
    <>
      <ContrastTool />

      <section className="max-w-2xl mx-auto px-4 pb-16 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Color Contrast Checker</h2>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>Enter your foreground (text) color as a hex code (e.g., <code className="bg-slate-100 px-1 rounded">#1a1a1a</code>) or use the color picker.</li>
            <li>Enter your background color the same way.</li>
            <li>The contrast ratio and WCAG AA/AAA pass/fail status appear instantly for both normal and large text sizes.</li>
            <li>If the pair fails, use the suggested alternative colors to find a compliant combination that stays close to your brand palette.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">WCAG Contrast Requirements Explained</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The Web Content Accessibility Guidelines (WCAG) define minimum contrast ratios to ensure text is readable by people with low vision or color deficiencies. The ratio compares the relative luminance of the foreground and background colors on a scale of 1:1 (no contrast) to 21:1 (black on white).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Standard</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Normal Text</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Large Text</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">UI Components</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="p-3 border border-slate-200 font-medium">WCAG AA (Level 2)</td>
                  <td className="p-3 border border-slate-200">4.5:1 minimum</td>
                  <td className="p-3 border border-slate-200">3:1 minimum</td>
                  <td className="p-3 border border-slate-200">3:1 minimum</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200 font-medium">WCAG AAA (Level 3)</td>
                  <td className="p-3 border border-slate-200">7:1 minimum</td>
                  <td className="p-3 border border-slate-200">4.5:1 minimum</td>
                  <td className="p-3 border border-slate-200">Not defined</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-2">Large text is defined as 18pt (24px) regular weight or 14pt (approximately 18.67px) bold weight or larger.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is WCAG and why does it matter?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                WCAG (Web Content Accessibility Guidelines) is an international standard published by the W3C that defines how to make web content accessible to people with disabilities, including those with visual, auditory, cognitive, and motor impairments. WCAG AA compliance is legally required in many jurisdictions including the EU, UK, Canada, and for US federal websites under Section 508.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is the difference between AA and AAA?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                AA is the practical standard used in most accessibility audits and legal requirements. AAA is a higher bar that not all content can realistically meet — WCAG itself notes that meeting AAA for all content is not possible. Target AA for all text; reach for AAA where feasible, especially for body copy and important UI labels.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Does contrast ratio apply to images and icons?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes. Informational icons and graphics that convey meaning must meet a 3:1 contrast ratio against their background under WCAG 1.4.11 (Non-text Contrast). Purely decorative images with no informational value are exempt. Use alt="" on decorative images to signal this to screen readers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">My brand colors fail AA — what should I do?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                You don't have to abandon your brand colors entirely. Use the failing color for decorative elements (borders, backgrounds, icons) and switch to a darker or lighter variant for text. Most brands have compliant versions of their palette — or you can darken/lighten the color until it passes while keeping the hue consistent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
