export interface LoanResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  interestPercent: number;
}

export interface AmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export function calcLoan(
  principal: number,
  annualRate: number,
  termMonths: number
): LoanResult {
  if (principal <= 0 || termMonths <= 0) {
    return { monthlyPayment: 0, totalPayment: 0, totalInterest: 0, interestPercent: 0 };
  }

  // Handle 0% interest rate
  if (annualRate === 0) {
    const monthlyPayment = principal / termMonths;
    return {
      monthlyPayment,
      totalPayment: principal,
      totalInterest: 0,
      interestPercent: 0,
    };
  }

  const r = annualRate / 100 / 12;
  const n = termMonths;
  // M = P[r(1+r)^n]/[(1+r)^n-1]
  const monthlyPayment = (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
  const totalPayment = monthlyPayment * n;
  const totalInterest = totalPayment - principal;
  const interestPercent = (totalInterest / principal) * 100;

  return { monthlyPayment, totalPayment, totalInterest, interestPercent };
}

export function generateAmortization(
  principal: number,
  annualRate: number,
  termMonths: number
): AmortizationRow[] {
  if (principal <= 0 || termMonths <= 0) return [];

  const rows: AmortizationRow[] = [];
  const r = annualRate / 100 / 12;
  let balance = principal;

  const monthlyPayment =
    annualRate === 0
      ? principal / termMonths
      : (principal * (r * Math.pow(1 + r, termMonths))) /
        (Math.pow(1 + r, termMonths) - 1);

  for (let month = 1; month <= termMonths; month++) {
    const interest = annualRate === 0 ? 0 : balance * r;
    const principalPaid = monthlyPayment - interest;
    balance = Math.max(0, balance - principalPaid);

    rows.push({
      month,
      payment: monthlyPayment,
      principal: principalPaid,
      interest,
      balance,
    });
  }

  return rows;
}
