import type { Metadata } from "next";
import ContrastTool from "./ContrastTool";

export const metadata: Metadata = {
  title: "Color Contrast Checker — WCAG AA/AAA Accessibility Tool",
  description:
    "Check WCAG 2.2 color contrast ratios instantly. Get pass/fail for AA and AAA standards with suggested fixes. Free accessibility tool for designers and developers.",
};

export default function ContrastPage() {
  return <ContrastTool />;
}
