import type { Metadata } from "next";
import TipTool from "./TipTool";

export const metadata: Metadata = {
  title: "Tip Calculator — Split Bills & Calculate Gratuity",
  description:
    "Calculate tip amount and split the bill between any number of people. Choose 10–25% or enter a custom tip percentage. Free, instant tip calculator.",
};

export default function TipPage() {
  return <TipTool />;
}
