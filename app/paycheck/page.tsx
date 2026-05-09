import type { Metadata } from "next";
import PaycheckTool from "./PaycheckTool";

export const metadata: Metadata = {
  title: "Free Paycheck Calculator — Estimate Take-Home Pay After Taxes",
  description:
    "Calculate your net pay after federal tax, state tax, Social Security, and Medicare. Free paycheck estimator for all 50 states — no signup required.",
};

export default function PaycheckPage() {
  return <PaycheckTool />;
}
