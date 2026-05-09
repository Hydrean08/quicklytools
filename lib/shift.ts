export type RotationType = "panama" | "pitman" | "4on4off" | "dupont";

export interface ShiftInput {
  startDate: string; // ISO date string
  rotationType: RotationType;
  currentWeek: number; // 1-based index into the rotation cycle
}

export interface ShiftDay {
  date: Date;
  isWork: boolean;
  weekNumber: number;
}

// Rotation patterns: true = work day, false = off day
// Each rotation describes one full cycle
const ROTATION_PATTERNS: Record<RotationType, boolean[]> = {
  // Panama 2-2-3: 14-day cycle
  // Mon-Tue work, Wed-Thu off, Fri-Sat-Sun work, Mon-Tue-Wed off, Thu-Fri work, Sat-Sun off, repeat
  panama: [
    true, true, false, false, true, true, true,
    false, false, false, true, true, false, false,
  ],
  // Pitman 2-3-2-2: 14-day cycle
  pitman: [
    true, true, false, false, false, true, true,
    false, false, true, true, false, false, false,
  ],
  // 4-on-4-off: 8-day cycle
  "4on4off": [true, true, true, true, false, false, false, false],
  // DuPont 3-2-2-3: 28-day cycle (two teams, simplified for single team view)
  dupont: [
    true, true, true, false, false, true, true, false, false, false,
    true, true, true, false, false, false, false, true, true, true,
    false, false, false, true, true, false, false, false,
  ],
};

export const ROTATION_LABELS: Record<RotationType, string> = {
  panama: "2-2-3 Panama",
  pitman: "Pitman",
  "4on4off": "4-on-4-off",
  dupont: "3-2-2-3 DuPont",
};

export function generateShiftCalendar(input: ShiftInput): ShiftDay[] {
  const { startDate, rotationType, currentWeek } = input;
  const pattern = ROTATION_PATTERNS[rotationType];
  const cycleLength = pattern.length;

  // currentWeek is 1-based; convert to 0-based day offset within the cycle
  // We interpret "currentWeek" as which week (1-indexed) of the rotation the startDate falls in.
  // Week 1 = days 0-6 of cycle, Week 2 = days 7-13, etc.
  const weekOffset = ((currentWeek - 1) * 7) % cycleLength;

  const start = new Date(startDate + "T00:00:00");
  const days: ShiftDay[] = [];

  for (let i = 0; i < 28; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);

    const patternIndex = (weekOffset + i) % cycleLength;
    const isWork = pattern[patternIndex];

    days.push({
      date,
      isWork,
      weekNumber: Math.floor(i / 7) + 1,
    });
  }

  return days;
}

export function getMaxCurrentWeek(rotationType: RotationType): number {
  const pattern = ROTATION_PATTERNS[rotationType];
  return Math.ceil(pattern.length / 7);
}
