import type { Metadata } from "next";
import ConvertTool from "./ConvertTool";

export const metadata: Metadata = {
  title: "Unit Converter — Length, Weight, Temperature & Volume",
  description:
    "Convert between metric and imperial units instantly. Length, weight, temperature, and volume conversions — free online unit converter, no signup needed.",
};

export default function ConvertPage() {
  return <ConvertTool />;
}
