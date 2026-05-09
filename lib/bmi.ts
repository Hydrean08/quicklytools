export interface BmiResult {
  bmi: number;
  category: "Underweight" | "Normal" | "Overweight" | "Obese";
  healthyWeightMinKg: number;
  healthyWeightMaxKg: number;
  healthyWeightMinLbs: number;
  healthyWeightMaxLbs: number;
}

const KG_TO_LBS = 2.20462;

function getBmiCategory(bmi: number): BmiResult["category"] {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

function calcHealthyRange(heightM: number): {
  minKg: number;
  maxKg: number;
  minLbs: number;
  maxLbs: number;
} {
  const minKg = 18.5 * heightM * heightM;
  const maxKg = 24.9 * heightM * heightM;
  return {
    minKg,
    maxKg,
    minLbs: minKg * KG_TO_LBS,
    maxLbs: maxKg * KG_TO_LBS,
  };
}

export function calcBMI(weightKg: number, heightCm: number): BmiResult {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const category = getBmiCategory(bmi);
  const { minKg, maxKg, minLbs, maxLbs } = calcHealthyRange(heightM);

  return {
    bmi,
    category,
    healthyWeightMinKg: minKg,
    healthyWeightMaxKg: maxKg,
    healthyWeightMinLbs: minLbs,
    healthyWeightMaxLbs: maxLbs,
  };
}

export function calcBMIImperial(
  weightLbs: number,
  heightFt: number,
  heightIn: number
): BmiResult {
  const totalInches = heightFt * 12 + heightIn;
  const heightCm = totalInches * 2.54;
  const weightKg = weightLbs / KG_TO_LBS;
  return calcBMI(weightKg, heightCm);
}
