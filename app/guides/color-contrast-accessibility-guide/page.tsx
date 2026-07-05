import type { Metadata } from "next";
import { getGuide } from "@/lib/guides";
import { GuideLayout, H2, H3, UL, Callout } from "@/components/guide";

const guide = getGuide("color-contrast-accessibility-guide")!;

export const metadata: Metadata = {
  alternates: { canonical: `/guides/${guide.slug}/` },
  title: guide.title,
  description: guide.description,
};

export default function Page() {
  return (
    <GuideLayout guide={guide}>
      <p>
        Every design decision that involves text has a readability consequence. The gap between
        a foreground color and its background is not a matter of personal taste — it is a
        measurable quantity with a measurable effect on whether real people can read what you
        wrote. For someone with low vision, aging eyes, or a screen in direct sunlight, a
        low-contrast label is not merely harder to read. It may be completely unreadable. The
        good news is that contrast is one of the few accessibility properties you can calculate
        exactly and fix before anyone is harmed by it.
      </p>

      <H2>What a contrast ratio actually means</H2>
      <p>
        A contrast ratio is a single number that compares the relative brightness of two colors.
        It always runs from 1:1, which means the two colors are identical and produce no contrast
        at all, up to 21:1, which is pure black text on a pure white background — the maximum
        physically possible. A ratio of 4.5:1 means the lighter color is 4.5 times as luminant
        as the darker one.
      </p>
      <p>
        The calculation is built on relative luminance, a perceptually weighted measure of how
        much light a color appears to emit. Luminance is not the same as lightness in a color
        picker. It accounts for the fact that the human eye is far more sensitive to green than
        to red or blue, so two colors that look equally &ldquo;bright&rdquo; on a picker may have
        different luminance values.
      </p>
      <Callout>
        <strong>Contrast ratio formula:</strong> ratio = (L1 + 0.05) ÷ (L2 + 0.05), where L1
        is the relative luminance of the lighter color and L2 is the relative luminance of the
        darker color. The 0.05 offset accounts for the ambient light that a real display always
        adds to both colors.
      </Callout>
      <p>
        You rarely need to run this by hand — contrast checkers do it instantly — but
        understanding the formula helps explain why two colors that look fine side by side in
        your design tool can still fail: you are judging perceived hue, not luminance.
      </p>

      <H2>The WCAG thresholds</H2>
      <p>
        The Web Content Accessibility Guidelines define two conformance levels for contrast: AA,
        which is the widely adopted legal and industry baseline, and AAA, which is the stricter
        enhanced target. The thresholds differ based on whether text is considered normal or large.
      </p>
      <UL>
        <li>
          <strong>Normal text, AA:</strong> 4.5:1 minimum. This is the standard target for most
          body copy, labels, and interface text.
        </li>
        <li>
          <strong>Normal text, AAA:</strong> 7:1 minimum. Substantially higher; appropriate for
          high-readability contexts like legal documents or medical information.
        </li>
        <li>
          <strong>Large text, AA:</strong> 3:1 minimum. Large text requires less contrast because
          thicker strokes are inherently more legible.
        </li>
        <li>
          <strong>Large text, AAA:</strong> 4.5:1 minimum. The same threshold as normal text at
          the AA level.
        </li>
        <li>
          <strong>UI components and meaningful graphics:</strong> 3:1 minimum. This applies to
          button borders, form field outlines, icons that convey information, and chart lines.
          It does not apply to decorative artwork or disabled controls.
        </li>
      </UL>
      <p>
        AA conformance is the realistic goal for almost every public-facing product. AAA is worth
        pursuing for text-heavy content where readers will spend significant time, but it is
        impractical to achieve universally — some color combinations simply cannot reach 7:1
        while still looking like your brand.
      </p>

      <H2>What counts as large text</H2>
      <p>
        The distinction between normal and large text has a precise definition in WCAG, and it is
        based on rendered size, not the value in your CSS file.
      </p>
      <p>
        Text qualifies as large if it is at least 18 point (approximately 24 CSS pixels) at normal
        weight, or at least 14 point (approximately 18.66 CSS pixels) when bold. Those numbers
        come from print typography research and represent the point at which thicker, larger letter
        forms compensate for lower contrast. One common mistake is to measure the font-size value
        in the source and forget that a user&apos;s browser zoom or a parent element&apos;s transform can
        change the rendered size. When in doubt, treat text as normal-sized and apply the 4.5:1
        threshold — it is always safe.
      </p>
      <p>
        Headings are frequently large text in practice, which is why design systems often allow
        lighter gray headings that would fail for body copy. Just verify the actual rendered pixel
        size, because a heading set at 16px bold does not meet the 18.66px bold threshold and
        must clear 4.5:1 like any normal text.
      </p>

      <H2>Why your brand color keeps failing</H2>
      <p>
        The most common source of contrast failures is mid-tone color. A medium corporate blue,
        a muted teal, a warm gray, a dusty rose — these shades sit in the middle of the luminance
        scale, which means they are neither light enough nor dark enough to create sufficient
        contrast with either white or black. When placed on a white background, they often land
        around 2:1 to 3.5:1, comfortably below the 4.5:1 threshold.
      </p>
      <p>
        The instinctive fix is to add an underline, make the text bold, or increase the font size.
        Bolding can help at larger sizes by making strokes thicker, but it does not change the
        contrast ratio itself. The only reliable fix is to change the luminance relationship between
        the two colors — darken the text, lighten the background, or do both.
      </p>
      <H3>The color-alone trap</H3>
      <p>
        A related problem is conveying meaning through color without a backup. Red error text on a
        white page may have a 3:1 ratio — enough for large text but not body copy — and it still
        communicates nothing to a user who is color-blind or viewing a monochrome display. WCAG
        requires that color is never the only means of conveying information. Pair color with a
        text label, an icon, or a border pattern so the message survives without the hue.
      </p>

      <H2>Fixing a failing pair</H2>
      <p>
        When a checker flags a pair as failing, a systematic approach is faster than guessing
        at new shades:
      </p>
      <UL>
        <li>
          <strong>Move lightness, not hue.</strong> Most brand guidelines allow flexibility in
          how dark or light a color is used. Take the failing shade and pull its lightness value
          down (for text) or up (for backgrounds) until the ratio clears the target. The hue
          stays the same; only luminance changes.
        </li>
        <li>
          <strong>Aim past the threshold.</strong> A pair that lands at exactly 4.51:1 will fail
          the moment someone views it on a slightly warm-tinted monitor. Target 5:1 or above for
          AA compliance so you have a real buffer.
        </li>
        <li>
          <strong>Test against both light and dark backgrounds.</strong> A color that passes on
          white may fail on a light gray card, and vice versa. Check every surface your text will
          actually appear on, not just the one you designed for.
        </li>
        <li>
          <strong>Check focus indicators separately.</strong> The 3:1 UI component threshold
          applies to focus rings and button outlines. A thin one-pixel focus outline in a light
          color is a very common failure that automated linters often miss.
        </li>
        <li>
          <strong>Re-run automated checks after every token update.</strong> Design token changes
          propagate across dozens of components at once. A single color value edit can create
          failures in places that were previously fine. Wire contrast checks into your CI pipeline
          so regressions surface before they ship.
        </li>
      </UL>

      <p>
        Contrast accessibility is one of the most tractable parts of inclusive design. Unlike
        cognitive load or motor accessibility, which require deep user research to get right,
        contrast has a formula, a threshold, and a checker. There is no ambiguity about whether
        a given pair passes. Build the habit of checking ratios early — during color palette
        selection, not during QA — and most failures never reach your users at all.
      </p>
    </GuideLayout>
  );
}
