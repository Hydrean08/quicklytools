import type { Metadata } from "next";
import PaceTool from "./PaceTool";

export const metadata: Metadata = {
  title: "Running Pace Calculator — Pace, Finish Time & Race Predictor",
  description:
    "Calculate running pace per mile or km, predict finish times, and forecast race results at any distance using the Riegel formula. Free online running calculator.",
};

export default function PacePage() {
  return <PaceTool />;
}
