import type { Metadata } from "next";
import PregnancyTool from "./PregnancyTool";

export const metadata: Metadata = {
  title: "Pregnancy Due Date Calculator — Due Date, Milestones & Ovulation",
  description:
    "Calculate your pregnancy due date, track milestones by week, and find your fertile window. Free pregnancy and ovulation calculator — no account required.",
};

export default function PregnancyPage() {
  return <PregnancyTool />;
}
