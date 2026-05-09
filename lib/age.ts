export interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  nextBirthday: string;
  daysUntilBirthday: number;
  dayOfWeekBorn: string;
}

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function parseDate(dateStr: string): Date {
  // Parse as local date to avoid timezone shifting
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function diffYearsMonthsDays(
  from: Date,
  to: Date
): { years: number; months: number; days: number } {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

function totalDaysBetween(from: Date, to: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((to.getTime() - from.getTime()) / msPerDay);
}

function getNextBirthday(birth: Date, today: Date): { date: Date; daysUntil: number } {
  let nextBday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());

  if (nextBday <= today) {
    nextBday = new Date(today.getFullYear() + 1, birth.getMonth(), birth.getDate());
  }

  const daysUntil = totalDaysBetween(today, nextBday);
  return { date: nextBday, daysUntil };
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function calcAge(birthDateStr: string): AgeResult {
  const birth = parseDate(birthDateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const { years, months, days } = diffYearsMonthsDays(birth, today);
  const totalDays = totalDaysBetween(birth, today);
  const totalWeeks = Math.floor(totalDays / 7);
  const dayOfWeekBorn = DAY_NAMES[birth.getDay()];

  const { date: nextBdayDate, daysUntil } = getNextBirthday(birth, today);
  const nextBirthday = formatDate(nextBdayDate);

  return {
    years,
    months,
    days,
    totalDays,
    totalWeeks,
    nextBirthday,
    daysUntilBirthday: daysUntil,
    dayOfWeekBorn,
  };
}

export function calcAgeBetween(date1Str: string, date2Str: string): AgeResult {
  const d1 = parseDate(date1Str);
  const d2 = parseDate(date2Str);

  const from = d1 < d2 ? d1 : d2;
  const to = d1 < d2 ? d2 : d1;

  const { years, months, days } = diffYearsMonthsDays(from, to);
  const totalDays = totalDaysBetween(from, to);
  const totalWeeks = Math.floor(totalDays / 7);
  const dayOfWeekBorn = DAY_NAMES[from.getDay()];

  // Next "birthday" = next anniversary of from-date relative to to-date
  const today = to;
  const { date: nextBdayDate, daysUntil } = getNextBirthday(from, today);
  const nextBirthday = formatDate(nextBdayDate);

  return {
    years,
    months,
    days,
    totalDays,
    totalWeeks,
    nextBirthday,
    daysUntilBirthday: daysUntil,
    dayOfWeekBorn,
  };
}
