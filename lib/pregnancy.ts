export interface DueDateResult {
  dueDate: Date;
  currentWeek: number;
  currentDay: number;
  trimester: 1 | 2 | 3;
  percentComplete: number;
  milestones: { label: string; date: Date; week: number }[];
}

export interface OvulationResult {
  ovulationDate: Date;
  fertileWindowStart: Date;
  fertileWindowEnd: Date;
  nextPeriodDate: Date;
}

// Naegele's rule: due date = LMP + 280 days (40 weeks)
export function calcDueDate(lmpDateStr: string): DueDateResult {
  const lmp = new Date(lmpDateStr + "T00:00:00");
  const dueDate = new Date(lmp);
  dueDate.setDate(lmp.getDate() + 280);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const daysSinceLmp = Math.floor(
    (today.getTime() - lmp.getTime()) / (1000 * 60 * 60 * 24)
  );
  const currentWeek = Math.max(0, Math.floor(daysSinceLmp / 7));
  const currentDay = Math.max(0, daysSinceLmp % 7);

  let trimester: 1 | 2 | 3 = 1;
  if (currentWeek >= 28) trimester = 3;
  else if (currentWeek >= 13) trimester = 2;

  const percentComplete = Math.min(100, Math.max(0, (daysSinceLmp / 280) * 100));

  const weekDate = (weeksFromLmp: number): Date => {
    const d = new Date(lmp);
    d.setDate(lmp.getDate() + weeksFromLmp * 7);
    return d;
  };

  const milestones: { label: string; date: Date; week: number }[] = [
    { label: "Heartbeat detectable (6 weeks)", date: weekDate(6), week: 6 },
    { label: "End of 1st Trimester (13 weeks)", date: weekDate(13), week: 13 },
    { label: "Anatomy scan (20 weeks)", date: weekDate(20), week: 20 },
    { label: "Viability milestone (24 weeks)", date: weekDate(24), week: 24 },
    { label: "3rd Trimester begins (28 weeks)", date: weekDate(28), week: 28 },
    { label: "Full term (37 weeks)", date: weekDate(37), week: 37 },
    { label: "Due date (40 weeks)", date: dueDate, week: 40 },
  ];

  return {
    dueDate,
    currentWeek,
    currentDay,
    trimester,
    percentComplete,
    milestones,
  };
}

// Ovulation typically occurs 14 days before the next period
// Fertile window is roughly 5 days before ovulation + ovulation day
export function calcOvulation(lmpDateStr: string, cycleLength: number): OvulationResult {
  const lmp = new Date(lmpDateStr + "T00:00:00");

  // Days until ovulation from start of cycle
  const daysToOvulation = cycleLength - 14;

  const ovulationDate = new Date(lmp);
  ovulationDate.setDate(lmp.getDate() + daysToOvulation);

  const fertileWindowStart = new Date(ovulationDate);
  fertileWindowStart.setDate(ovulationDate.getDate() - 5);

  const fertileWindowEnd = new Date(ovulationDate);
  fertileWindowEnd.setDate(ovulationDate.getDate() + 1);

  const nextPeriodDate = new Date(lmp);
  nextPeriodDate.setDate(lmp.getDate() + cycleLength);

  return {
    ovulationDate,
    fertileWindowStart,
    fertileWindowEnd,
    nextPeriodDate,
  };
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
