export type ConvertCategory = "length" | "weight" | "temperature" | "volume";

export interface UnitDefinition {
  label: string;
  value: string;
}

// Conversion factors relative to a base unit
// Length base: meters
const LENGTH_FACTORS: Record<string, number> = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.344,
};

// Weight base: grams
const WEIGHT_FACTORS: Record<string, number> = {
  mg: 0.001,
  g: 1,
  kg: 1000,
  t: 1_000_000,
  oz: 28.3495,
  lb: 453.592,
  st: 6350.29,
};

// Volume base: milliliters
const VOLUME_FACTORS: Record<string, number> = {
  ml: 1,
  l: 1000,
  tsp: 4.92892,
  tbsp: 14.7868,
  "fl oz": 29.5735,
  cup: 236.588,
  pt: 473.176,
  qt: 946.353,
  gal: 3785.41,
};

export const UNIT_LISTS: Record<ConvertCategory, UnitDefinition[]> = {
  length: [
    { label: "Millimeter (mm)", value: "mm" },
    { label: "Centimeter (cm)", value: "cm" },
    { label: "Meter (m)", value: "m" },
    { label: "Kilometer (km)", value: "km" },
    { label: "Inch (in)", value: "in" },
    { label: "Foot (ft)", value: "ft" },
    { label: "Yard (yd)", value: "yd" },
    { label: "Mile (mi)", value: "mi" },
  ],
  weight: [
    { label: "Milligram (mg)", value: "mg" },
    { label: "Gram (g)", value: "g" },
    { label: "Kilogram (kg)", value: "kg" },
    { label: "Metric Ton (t)", value: "t" },
    { label: "Ounce (oz)", value: "oz" },
    { label: "Pound (lb)", value: "lb" },
    { label: "Stone (st)", value: "st" },
  ],
  temperature: [
    { label: "Celsius (°C)", value: "C" },
    { label: "Fahrenheit (°F)", value: "F" },
    { label: "Kelvin (K)", value: "K" },
  ],
  volume: [
    { label: "Milliliter (ml)", value: "ml" },
    { label: "Liter (l)", value: "l" },
    { label: "Teaspoon (tsp)", value: "tsp" },
    { label: "Tablespoon (tbsp)", value: "tbsp" },
    { label: "Fluid Ounce (fl oz)", value: "fl oz" },
    { label: "Cup (cup)", value: "cup" },
    { label: "Pint (pt)", value: "pt" },
    { label: "Quart (qt)", value: "qt" },
    { label: "Gallon (gal)", value: "gal" },
  ],
};

function convertTemperature(value: number, from: string, to: string): number {
  if (from === to) return value;

  // Convert to Celsius first
  let celsius: number;
  switch (from) {
    case "C":
      celsius = value;
      break;
    case "F":
      celsius = (value - 32) * (5 / 9);
      break;
    case "K":
      celsius = value - 273.15;
      break;
    default:
      return value;
  }

  // Convert from Celsius to target
  switch (to) {
    case "C":
      return celsius;
    case "F":
      return celsius * (9 / 5) + 32;
    case "K":
      return celsius + 273.15;
    default:
      return celsius;
  }
}

export function convert(
  value: number,
  fromUnit: string,
  toUnit: string,
  category: ConvertCategory
): number {
  if (fromUnit === toUnit) return value;

  if (category === "temperature") {
    return convertTemperature(value, fromUnit, toUnit);
  }

  const factors =
    category === "length"
      ? LENGTH_FACTORS
      : category === "weight"
      ? WEIGHT_FACTORS
      : VOLUME_FACTORS;

  const fromFactor = factors[fromUnit];
  const toFactor = factors[toUnit];

  if (fromFactor === undefined || toFactor === undefined) return value;

  // Convert to base unit, then to target
  const base = value * fromFactor;
  return base / toFactor;
}

export function formatResult(value: number): string {
  if (!isFinite(value)) return "—";
  if (value === 0) return "0";

  const abs = Math.abs(value);

  // Use toPrecision for significant figures, then strip trailing zeros
  if (abs >= 0.0001 && abs < 1e15) {
    const formatted = parseFloat(value.toPrecision(6)).toString();
    return formatted;
  }

  return value.toExponential(4);
}

export function getConversionFormula(
  fromUnit: string,
  toUnit: string,
  category: ConvertCategory
): string {
  if (fromUnit === toUnit) return `1 ${fromUnit} = 1 ${toUnit}`;

  const result = convert(1, fromUnit, toUnit, category);
  const formatted = formatResult(result);

  return `1 ${fromUnit} = ${formatted} ${toUnit}`;
}
