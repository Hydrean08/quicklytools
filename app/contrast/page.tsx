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

        {/* Block 1 — How to Use */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Contrast Checker</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The checker works on any foreground/background color pair and gives you an instant WCAG verdict. Follow these steps to get accurate results:
          </p>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>Type or paste a hex color code (e.g., <code className="bg-slate-100 px-1 rounded">#1a1a1a</code>) into the Foreground field, or click the color swatch to open the native color picker.</li>
            <li>Do the same for the Background field. Both fields accept 3- or 6-character hex codes with or without the leading <code className="bg-slate-100 px-1 rounded">#</code>.</li>
            <li>The contrast ratio and four WCAG pass/fail badges (AA Normal, AA Large, AAA Normal, AAA Large) update in real time as you type — no button needed.</li>
            <li>Check the live preview panel to see how your text actually looks against that background at different font sizes.</li>
            <li>If the pair fails AA for normal text, the tool surfaces a suggested foreground color that achieves at least 4.5:1 by nudging the brightness of your original color. Click <strong>Apply</strong> to swap it in without retyping.</li>
            <li>Use the Swap Colors button to flip foreground and background instantly — useful when you want to check both light-on-dark and dark-on-light variations of the same palette.</li>
            <li>Once you have a passing pair, copy the hex codes into your design file or CSS and you are done.</li>
          </ol>
        </div>

        {/* Block 2 — How the Ratio Is Calculated */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How Contrast Ratio Is Calculated</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            WCAG contrast ratio is not a simple brightness difference. It is based on <em>relative luminance</em> — a perceptual measure of how much light a color emits relative to white, calculated according to the sRGB color space used by every modern screen.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            For each color channel (red, green, blue) the raw 0&ndash;255 value is first divided by 255 to bring it into the 0&ndash;1 range. Values at or below 0.03928 are divided by 12.92 to handle the linear segment of the sRGB curve. Values above that threshold follow the power formula <code className="bg-slate-100 px-1 rounded">((c + 0.055) / 1.055) ^ 2.4</code>. The three linearized channels are then combined with perceptual weights that reflect how human vision responds to each wavelength:
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <code className="bg-slate-100 px-1 rounded">L = 0.2126 &times; R + 0.7152 &times; G + 0.0722 &times; B</code>
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The green channel carries the heaviest weight (71.52%) because the human eye is most sensitive to green light. Red contributes about 21%, and blue only 7%. This is why a bright green and a bright blue of the same &ldquo;brightness&rdquo; in a color picker can have very different luminance values.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Once you have the relative luminance of both colors &mdash; call them L1 (lighter) and L2 (darker) &mdash; the ratio is:
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <code className="bg-slate-100 px-1 rounded">Ratio = (L1 + 0.05) &divide; (L2 + 0.05)</code>
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The 0.05 offset on both sides is a WCAG-specified constant that prevents division by zero when comparing against true black (L = 0) and anchors the scale so that black on white produces the theoretical maximum of 21:1. When both colors are identical the ratio is 1:1 &mdash; no contrast at all. The full scale runs from 1:1 to 21:1, and WCAG thresholds sit at specific points along that range.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            This checker performs those calculations entirely in your browser using the exact formula above, so there is no server round-trip and no color data ever leaves your device.
          </p>
        </div>

        {/* Block 3 — WCAG Thresholds */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">WCAG Thresholds</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            WCAG 2.x defines two conformance levels for contrast: AA (the widely adopted legal standard) and AAA (the enhanced tier). Each level sets a different minimum ratio depending on what you are contrasting.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Content type</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">WCAG AA minimum</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">WCAG AAA minimum</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="p-3 border border-slate-200">Normal text</td>
                  <td className="p-3 border border-slate-200">4.5:1</td>
                  <td className="p-3 border border-slate-200">7:1</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">Large text (18pt+ or 14pt+ bold)</td>
                  <td className="p-3 border border-slate-200">3:1</td>
                  <td className="p-3 border border-slate-200">4.5:1</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200">UI components &amp; informational graphics</td>
                  <td className="p-3 border border-slate-200">3:1</td>
                  <td className="p-3 border border-slate-200">Not defined</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4 mb-4">
            WCAG defines &ldquo;large text&rdquo; as text that is at least 18 point (24 CSS pixels) at normal weight, or at least 14 point (approximately 18.67 CSS pixels) when bold. The distinction matters because larger letterforms are easier to recognize even when the contrast is lower, so WCAG relaxes the threshold. Note that the measurement is about the <em>rendered</em> size, not the font-size value in your source CSS &mdash; if you apply a transform scale or use viewport units, the physically rendered size is what counts.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            The UI components threshold (criterion 1.4.11, Non-text Contrast) covers the visual boundaries of interactive elements such as button borders, checkbox outlines, focus rings, and input field edges, as well as any part of an icon or chart that conveys information. Purely decorative graphics and disabled components are exempt from the 3:1 requirement.
          </p>
        </div>

        {/* Block 4 — Worked Example */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">A Worked Example</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Take the classic &ldquo;is this gray accessible?&rdquo; question. The hex color <code className="bg-slate-100 px-1 rounded">#767676</code> on a white (<code className="bg-slate-100 px-1 rounded">#FFFFFF</code>) background is a common design choice, but let&apos;s check the math.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            White has a relative luminance of 1.0 (the maximum). For <code className="bg-slate-100 px-1 rounded">#767676</code>, each channel is 118 in decimal. After sRGB linearization that channel becomes approximately 0.2158, and weighting all three equal channels gives a luminance of roughly 0.2157. Plugging into the formula:
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <code className="bg-slate-100 px-1 rounded">(1.0 + 0.05) &divide; (0.2157 + 0.05) &asymp; 4.54:1</code>
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            A ratio of 4.54:1 clears the 4.5:1 AA threshold for normal text &mdash; but only just. It fails the 7:1 AAA threshold. This is why <code className="bg-slate-100 px-1 rounded">#767676</code> is widely cited as the &ldquo;minimum AA gray&rdquo; on white. Any lighter gray will fail AA entirely.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Foreground</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Background</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Ratio</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">AA Normal</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">AAA Normal</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="p-3 border border-slate-200 font-mono">#767676</td>
                  <td className="p-3 border border-slate-200 font-mono">#FFFFFF</td>
                  <td className="p-3 border border-slate-200">4.54:1</td>
                  <td className="p-3 border border-slate-200 text-emerald-700 font-semibold">Pass</td>
                  <td className="p-3 border border-slate-200 text-red-600 font-semibold">Fail</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200 font-mono">#595959</td>
                  <td className="p-3 border border-slate-200 font-mono">#FFFFFF</td>
                  <td className="p-3 border border-slate-200">7.00:1</td>
                  <td className="p-3 border border-slate-200 text-emerald-700 font-semibold">Pass</td>
                  <td className="p-3 border border-slate-200 text-emerald-700 font-semibold">Pass</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-mono">#AAAAAA</td>
                  <td className="p-3 border border-slate-200 font-mono">#FFFFFF</td>
                  <td className="p-3 border border-slate-200">2.32:1</td>
                  <td className="p-3 border border-slate-200 text-red-600 font-semibold">Fail</td>
                  <td className="p-3 border border-slate-200 text-red-600 font-semibold">Fail</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200 font-mono">#000000</td>
                  <td className="p-3 border border-slate-200 font-mono">#FFFFFF</td>
                  <td className="p-3 border border-slate-200">21.00:1</td>
                  <td className="p-3 border border-slate-200 text-emerald-700 font-semibold">Pass</td>
                  <td className="p-3 border border-slate-200 text-emerald-700 font-semibold">Pass</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            The light gray <code className="bg-slate-100 px-1 rounded">#AAAAAA</code> is a common mistake &mdash; it looks readable on screen but produces only 2.32:1, failing AA by a wide margin. Dropping just to <code className="bg-slate-100 px-1 rounded">#595959</code> hits the full AAA threshold without needing true black.
          </p>
        </div>

        {/* Block 5 — FAQ */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is a good contrast ratio to aim for?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                For body text, aim for at least 4.5:1 to satisfy WCAG AA &mdash; this is the widely enforced legal standard in the EU, UK, Canada, and for US federal websites under Section 508. If your design allows it, targeting 7:1 (AAA) gives even more headroom and benefits users with more severe low vision. For large headings and bold callouts, 3:1 is the legal minimum, though 4.5:1 is still a safe default if you want a single rule to follow across your whole design.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What exactly counts as &ldquo;large text&rdquo; under WCAG?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                WCAG defines large text as 18 point (24px) or larger at normal weight, or 14 point (approximately 18.67px) or larger when set in bold (font-weight 700 or higher). The size refers to the final rendered size seen on screen, not the CSS <code className="bg-slate-100 px-1 rounded">font-size</code> value before transforms or scaling. Text that barely meets the 14pt bold threshold still benefits from the relaxed 3:1 AA ratio, but if you are unsure whether your type qualifies, applying the 4.5:1 normal-text rule everywhere removes any ambiguity.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Does contrast apply to buttons, icons, and input borders?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes. WCAG 1.4.11 (Non-text Contrast) requires a 3:1 ratio between the visual indicator of a UI component &mdash; such as a button border, checkbox square, or the edge of a text input &mdash; and the adjacent color. The same threshold applies to parts of icons, charts, and diagrams that carry meaning. Elements that are purely decorative, disabled, or where the component&apos;s appearance is entirely determined by the browser&apos;s default styling are exempt. Focus indicators on interactive elements are also covered and must meet 3:1 against both the adjacent color and the unfocused state.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">My brand color fails AA &mdash; do I have to change it?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Not necessarily. Brand colors often work fine as background fills, decorative accents, icon fills, or border highlights &mdash; contexts that either do not carry text or fall under the more lenient 3:1 threshold. The fix is to reserve a compliant, darker (or lighter) variant of that hue for text and interactive labels. Adjusting lightness while keeping the same hue and saturation usually preserves brand identity while clearing the threshold. This checker&apos;s suggested-color feature does exactly that: it nudges your foreground brightness until it passes 4.5:1, giving you a starting point for a compliant palette variant.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Is WCAG AAA required by law?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                In most jurisdictions, no. Legal mandates &mdash; including the EU Web Accessibility Directive, the UK Equality Act guidance, Canada&apos;s AODA, and US Section 508 &mdash; typically reference WCAG 2.1 or 2.2 at Level AA. WCAG itself acknowledges that AAA cannot be achieved for all content, so it is treated as a stretch goal rather than a baseline requirement. That said, publicly funded bodies in some regions are increasingly expected to strive for AAA where feasible, and products targeting users with known visual impairments benefit enormously from the higher threshold.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Does poor contrast only affect users with low vision?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No &mdash; low contrast affects almost everyone in the right conditions. Reading on a phone screen in bright sunlight, on a budget display with poor black levels, in a brightly lit office with screen glare, or while tired all degrade effective contrast perception. Users with aging eyes, color vision deficiency (which affects roughly 8% of males), or temporary conditions like eye strain also struggle with borderline contrast. High-contrast text is simply easier to read for all users, which is why improving contrast tends to increase reading speed and reduce errors even in controlled studies with sighted participants.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Does dark mode change which colors pass?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes. A color pair that passes in light mode may fail in dark mode if you simply invert the colors without rechecking. For example, a dark text on a light background that just clears 4.5:1 will still be fine when flipped to light text on a dark background &mdash; the ratio is symmetric &mdash; but if you lighten the text slightly for aesthetic reasons in dark mode, the ratio can drop below the threshold. Always run your dark-mode palette through a contrast checker separately. This tool accepts any foreground/background combination, so checking dark-mode pairs takes just a few seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Final note */}
        <p className="text-slate-500 text-xs leading-relaxed">
          Contrast ratios are computed using the WCAG 2.x relative luminance formula (sRGB, IEC 61966-2-1) entirely in your browser. No color data is transmitted to any server. Results reflect WCAG 2.2 success criteria 1.4.3 (Contrast Minimum) and 1.4.6 (Contrast Enhanced).
        </p>
      </section>
    </>
  );
}
