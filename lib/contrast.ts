export interface ContrastResult {
  ratio: number;
  ratioDisplay: string;
  wcagAANormal: boolean;
  wcagAALarge: boolean;
  wcagAAANormal: boolean;
  wcagAAALarge: boolean;
  suggestedColor: string | null;
}

// Parse a hex color string to [r, g, b] 0-255
export function hexToRgb(hex: string): [number, number, number] | null {
  const clean = hex.replace("#", "").trim();
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16);
    const g = parseInt(clean[1] + clean[1], 16);
    const b = parseInt(clean[2] + clean[2], 16);
    return [r, g, b];
  }
  if (clean.length === 6) {
    const r = parseInt(clean.slice(0, 2), 16);
    const g = parseInt(clean.slice(2, 4), 16);
    const b = parseInt(clean.slice(4, 6), 16);
    return [r, g, b];
  }
  return null;
}

// sRGB linearization
function linearize(channel: number): number {
  const c = channel / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

// Relative luminance per WCAG 2.x
export function relativeLuminance(r: number, g: number, b: number): number {
  const rL = linearize(r);
  const gL = linearize(g);
  const bL = linearize(b);
  return 0.2126 * rL + 0.7152 * gL + 0.0722 * bL;
}

// Contrast ratio between two luminances
export function contrastRatio(L1: number, L2: number): number {
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

export function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0"))
      .join("")
  );
}

// Try to find a foreground color that passes AA (4.5:1) by darkening or lightening
function suggestPassingColor(
  fgRgb: [number, number, number],
  bgLuminance: number
): string | null {
  const [r, g, b] = fgRgb;
  const fgLum = relativeLuminance(r, g, b);

  // Determine direction: if fg is lighter than bg we darken fg, else lighten it
  const shouldDarken = fgLum > bgLuminance;

  let step = shouldDarken ? -1 : 1;
  let adjustedR = r;
  let adjustedG = g;
  let adjustedB = b;

  for (let i = 0; i < 255; i++) {
    adjustedR = Math.max(0, Math.min(255, adjustedR + step));
    adjustedG = Math.max(0, Math.min(255, adjustedG + step));
    adjustedB = Math.max(0, Math.min(255, adjustedB + step));

    const lum = relativeLuminance(adjustedR, adjustedG, adjustedB);
    const ratio = contrastRatio(lum, bgLuminance);
    if (ratio >= 4.5) {
      return rgbToHex(adjustedR, adjustedG, adjustedB);
    }
  }
  return null;
}

export function checkContrast(fgHex: string, bgHex: string): ContrastResult | null {
  const fg = hexToRgb(fgHex);
  const bg = hexToRgb(bgHex);
  if (!fg || !bg) return null;

  const fgLum = relativeLuminance(...fg);
  const bgLum = relativeLuminance(...bg);
  const ratio = contrastRatio(fgLum, bgLum);
  const ratioDisplay = ratio.toFixed(2) + ":1";

  const wcagAANormal = ratio >= 4.5;
  const wcagAALarge = ratio >= 3.0;
  const wcagAAANormal = ratio >= 7.0;
  const wcagAAALarge = ratio >= 4.5;

  let suggestedColor: string | null = null;
  if (!wcagAANormal) {
    suggestedColor = suggestPassingColor(fg, bgLum);
  }

  return {
    ratio,
    ratioDisplay,
    wcagAANormal,
    wcagAALarge,
    wcagAAANormal,
    wcagAAALarge,
    suggestedColor,
  };
}

export function isValidHex(hex: string): boolean {
  return /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex.trim());
}
