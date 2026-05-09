import type { Metadata } from "next";
import BmiTool from "./BmiTool";

export const metadata: Metadata = {
  title: "BMI Calculator — Body Mass Index for Adults",
  description:
    "Calculate your Body Mass Index (BMI) in metric or imperial units. See your BMI category and healthy weight range instantly. Free online BMI calculator.",
};

export default function BmiPage() {
  return <BmiTool />;
}
