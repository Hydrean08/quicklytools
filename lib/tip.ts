export interface TipResult {
  tipAmount: number;
  totalAmount: number;
  perPerson: number;
  tipPerPerson: number;
  perPersonRounded: number;
}

export function calcTip(
  billAmount: number,
  tipPercent: number,
  numPeople: number
): TipResult {
  const people = Math.max(1, numPeople);
  const tipAmount = billAmount * (tipPercent / 100);
  const totalAmount = billAmount + tipAmount;
  const perPerson = totalAmount / people;
  const tipPerPerson = tipAmount / people;
  const perPersonRounded = Math.ceil(perPerson);

  return { tipAmount, totalAmount, perPerson, tipPerPerson, perPersonRounded };
}
