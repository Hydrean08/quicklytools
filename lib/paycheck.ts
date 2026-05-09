export type FilingStatus = "single" | "married";
export type PayFrequency = "weekly" | "biweekly" | "semimonthly" | "monthly";

export interface PaycheckInput {
  grossAnnual: number;
  payFrequency: PayFrequency;
  filingStatus: FilingStatus;
  stateCode: string;
}

export interface PaycheckResult {
  grossPerPeriod: number;
  federalTax: number;
  stateTax: number;
  socialSecurity: number;
  medicare: number;
  totalDeductions: number;
  netPay: number;
  annualNet: number;
  effectiveFederalRate: number;
  effectiveStateRate: number;
  periodsPerYear: number;
}

// Approximate 2024 flat effective state income tax rates
export const STATE_TAX_RATES: Record<string, { name: string; rate: number }> = {
  AL: { name: "Alabama", rate: 0.04 },
  AK: { name: "Alaska", rate: 0.0 },
  AZ: { name: "Arizona", rate: 0.025 },
  AR: { name: "Arkansas", rate: 0.047 },
  CA: { name: "California", rate: 0.093 },
  CO: { name: "Colorado", rate: 0.044 },
  CT: { name: "Connecticut", rate: 0.055 },
  DE: { name: "Delaware", rate: 0.066 },
  FL: { name: "Florida", rate: 0.0 },
  GA: { name: "Georgia", rate: 0.055 },
  HI: { name: "Hawaii", rate: 0.08 },
  ID: { name: "Idaho", rate: 0.058 },
  IL: { name: "Illinois", rate: 0.0495 },
  IN: { name: "Indiana", rate: 0.0315 },
  IA: { name: "Iowa", rate: 0.057 },
  KS: { name: "Kansas", rate: 0.057 },
  KY: { name: "Kentucky", rate: 0.045 },
  LA: { name: "Louisiana", rate: 0.042 },
  ME: { name: "Maine", rate: 0.075 },
  MD: { name: "Maryland", rate: 0.0575 },
  MA: { name: "Massachusetts", rate: 0.05 },
  MI: { name: "Michigan", rate: 0.0425 },
  MN: { name: "Minnesota", rate: 0.0698 },
  MS: { name: "Mississippi", rate: 0.047 },
  MO: { name: "Missouri", rate: 0.054 },
  MT: { name: "Montana", rate: 0.069 },
  NE: { name: "Nebraska", rate: 0.0664 },
  NV: { name: "Nevada", rate: 0.0 },
  NH: { name: "New Hampshire", rate: 0.0 },
  NJ: { name: "New Jersey", rate: 0.0637 },
  NM: { name: "New Mexico", rate: 0.059 },
  NY: { name: "New York", rate: 0.0685 },
  NC: { name: "North Carolina", rate: 0.0475 },
  ND: { name: "North Dakota", rate: 0.025 },
  OH: { name: "Ohio", rate: 0.04 },
  OK: { name: "Oklahoma", rate: 0.0475 },
  OR: { name: "Oregon", rate: 0.099 },
  PA: { name: "Pennsylvania", rate: 0.0307 },
  RI: { name: "Rhode Island", rate: 0.0599 },
  SC: { name: "South Carolina", rate: 0.07 },
  SD: { name: "South Dakota", rate: 0.0 },
  TN: { name: "Tennessee", rate: 0.0 },
  TX: { name: "Texas", rate: 0.0 },
  UT: { name: "Utah", rate: 0.0465 },
  VT: { name: "Vermont", rate: 0.0875 },
  VA: { name: "Virginia", rate: 0.0575 },
  WA: { name: "Washington", rate: 0.0 },
  WV: { name: "West Virginia", rate: 0.065 },
  WI: { name: "Wisconsin", rate: 0.0765 },
  WY: { name: "Wyoming", rate: 0.0 },
  DC: { name: "District of Columbia", rate: 0.0895 },
};

// 2024 Federal income tax brackets
function calcFederalTax(taxableIncome: number, status: FilingStatus): number {
  const brackets =
    status === "single"
      ? [
          { min: 0, max: 11600, rate: 0.1 },
          { min: 11600, max: 47150, rate: 0.12 },
          { min: 47150, max: 100525, rate: 0.22 },
          { min: 100525, max: 191950, rate: 0.24 },
          { min: 191950, max: 243725, rate: 0.32 },
          { min: 243725, max: 609350, rate: 0.35 },
          { min: 609350, max: Infinity, rate: 0.37 },
        ]
      : [
          { min: 0, max: 23200, rate: 0.1 },
          { min: 23200, max: 94300, rate: 0.12 },
          { min: 94300, max: 201050, rate: 0.22 },
          { min: 201050, max: 383900, rate: 0.24 },
          { min: 383900, max: 487450, rate: 0.32 },
          { min: 487450, max: 731200, rate: 0.35 },
          { min: 731200, max: Infinity, rate: 0.37 },
        ];

  // Standard deduction 2024
  const standardDeduction = status === "single" ? 14600 : 29200;
  const adjustedIncome = Math.max(0, taxableIncome - standardDeduction);

  let tax = 0;
  for (const bracket of brackets) {
    if (adjustedIncome <= bracket.min) break;
    const taxable = Math.min(adjustedIncome, bracket.max) - bracket.min;
    tax += taxable * bracket.rate;
  }
  return tax;
}

export function calcPeriodsPerYear(freq: PayFrequency): number {
  const map: Record<PayFrequency, number> = {
    weekly: 52,
    biweekly: 26,
    semimonthly: 24,
    monthly: 12,
  };
  return map[freq];
}

export function calculatePaycheck(input: PaycheckInput): PaycheckResult {
  const { grossAnnual, payFrequency, filingStatus, stateCode } = input;

  const periodsPerYear = calcPeriodsPerYear(payFrequency);
  const grossPerPeriod = grossAnnual / periodsPerYear;

  // Federal tax (annual, then divide by periods)
  const annualFederalTax = calcFederalTax(grossAnnual, filingStatus);
  const federalTax = annualFederalTax / periodsPerYear;
  const effectiveFederalRate = grossAnnual > 0 ? annualFederalTax / grossAnnual : 0;

  // State tax (flat rate approximation)
  const stateRate = STATE_TAX_RATES[stateCode]?.rate ?? 0;
  const stateTax = (grossAnnual * stateRate) / periodsPerYear;
  const effectiveStateRate = stateRate;

  // FICA — Social Security caps at $168,600 in 2024
  const ssCap = 168600;
  const ssableIncome = Math.min(grossAnnual, ssCap);
  const annualSS = ssableIncome * 0.062;
  const socialSecurity = annualSS / periodsPerYear;

  const medicare = (grossAnnual * 0.0145) / periodsPerYear;

  const totalDeductions = federalTax + stateTax + socialSecurity + medicare;
  const netPay = grossPerPeriod - totalDeductions;
  const annualNet = netPay * periodsPerYear;

  return {
    grossPerPeriod,
    federalTax,
    stateTax,
    socialSecurity,
    medicare,
    totalDeductions,
    netPay,
    annualNet,
    effectiveFederalRate,
    effectiveStateRate,
    periodsPerYear,
  };
}
