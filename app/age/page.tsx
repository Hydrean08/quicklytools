import type { Metadata } from "next";
import AgeTool from "./AgeTool";

export const metadata: Metadata = {
  title: "Age Calculator — How Old Am I? Date Difference Tool",
  description:
    "Calculate your exact age in years, months, and days. Find the difference between any two dates, days until your next birthday, and more. Free age calculator.",
};

export default function AgePage() {
  return <AgeTool />;
}
