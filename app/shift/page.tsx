import type { Metadata } from "next";
import ShiftTool from "./ShiftTool";

export const metadata: Metadata = {
  title: "Shift Work Schedule Calculator — Panama, Pitman, DuPont Rotations",
  description:
    "Generate a 4-week color-coded calendar for your shift rotation. Supports Panama, Pitman, 4-on-4-off, and DuPont schedules. Free, instant, no account needed.",
};

export default function ShiftPage() {
  return <ShiftTool />;
}
