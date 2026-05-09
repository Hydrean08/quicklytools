import type { Metadata } from "next";
import LoanTool from "./LoanTool";

export const metadata: Metadata = {
  title: "Loan & Mortgage Calculator — Monthly Payment Estimator",
  description:
    "Calculate monthly loan payments, total interest, and full amortization schedule. Free mortgage and loan calculator for any term and interest rate.",
};

export default function LoanPage() {
  return <LoanTool />;
}
