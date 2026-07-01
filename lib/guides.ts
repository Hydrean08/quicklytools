export type Guide = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  readingTime: number; // minutes
  related: { name: string; href: string };
  disclaimer: string;
};

const FINANCE_DISCLAIMER =
  "This article is for general educational purposes only and is not financial, tax, or legal advice. Figures are estimates. Consult a licensed professional before making financial decisions.";

const MEDICAL_DISCLAIMER =
  "This article is for general informational purposes only and does not constitute medical advice. Always consult a qualified healthcare provider about your individual situation.";

const GENERAL_DISCLAIMER =
  "This article is for general informational purposes only. Figures and recommendations are guidelines, not rules.";

export const GUIDES: Guide[] = [
  {
    slug: "how-to-read-your-paycheck",
    title: "How to Read Your Paycheck Stub: Every Line Explained",
    description:
      "A plain-English walkthrough of every line on a US pay stub — gross pay, federal and state withholding, Social Security, Medicare, and the deductions that decide your take-home pay.",
    excerpt:
      "Gross pay, FICA, federal and state withholding, pre-tax deductions — here's what every line on your pay stub actually means and why your take-home is lower than your salary.",
    date: "2026-06-12",
    readingTime: 7,
    related: { name: "Paycheck Calculator", href: "/paycheck" },
    disclaimer: FINANCE_DISCLAIMER,
  },
  {
    slug: "understanding-bmi",
    title: "Understanding BMI: What the Number Tells You (and What It Doesn't)",
    description:
      "What Body Mass Index actually measures, how the categories were set, where BMI breaks down for athletes and older adults, and better ways to think about a healthy weight.",
    excerpt:
      "BMI is a fast screening number, not a diagnosis. Here's how it's calculated, why the categories exist, and the cases where the number misleads.",
    date: "2026-06-14",
    readingTime: 6,
    related: { name: "BMI Calculator", href: "/bmi" },
    disclaimer: MEDICAL_DISCLAIMER,
  },
  {
    slug: "how-loan-amortization-works",
    title: "How Loan Amortization Works: Where Your Monthly Payment Really Goes",
    description:
      "Why early loan payments are almost all interest, how the amortization formula builds your schedule, and how a small extra payment can save years of interest.",
    excerpt:
      "Your payment is fixed, but the split between interest and principal shifts every month. Understand amortization and you'll see exactly how extra payments save you years.",
    date: "2026-06-16",
    readingTime: 8,
    related: { name: "Loan Calculator", href: "/loan" },
    disclaimer: FINANCE_DISCLAIMER,
  },
  {
    slug: "good-running-pace-by-age",
    title: "What's a Good Running Pace? A Realistic Guide by Age and Goal",
    description:
      "There's no single 'good' pace. Here's how to find yours based on age, experience, and goal — plus how race-time prediction formulas like Riegel's actually work.",
    excerpt:
      "A 'good' pace depends on your age, experience, and what you're training for. Here's how to set a realistic target and predict your race times.",
    date: "2026-06-18",
    readingTime: 7,
    related: { name: "Running Pace Calculator", href: "/pace" },
    disclaimer: GENERAL_DISCLAIMER,
  },
  {
    slug: "us-tipping-guide",
    title: "Tipping in the United States: A Practical Guide for Every Situation",
    description:
      "How much to tip at restaurants, bars, for delivery, rideshare, hair salons, hotels, and more — with the reasoning behind each number and how to handle service charges.",
    excerpt:
      "Restaurants, bars, delivery, rideshare, salons, hotels — a situation-by-situation guide to what to tip in the US, and how to handle automatic service charges.",
    date: "2026-06-20",
    readingTime: 6,
    related: { name: "Tip Calculator", href: "/tip" },
    disclaimer: GENERAL_DISCLAIMER,
  },
  {
    slug: "pregnancy-due-date-explained",
    title: "How Your Pregnancy Due Date Is Calculated (and Why It's an Estimate)",
    description:
      "Naegele's rule, the 40-week count from your last period, why due dates use a 28-day cycle assumption, and what trimester milestones to expect along the way.",
    excerpt:
      "Your due date is a single day, but only about 1 in 20 babies arrive on it. Here's how the 40-week estimate is built and what the milestones mean.",
    date: "2026-06-22",
    readingTime: 6,
    related: { name: "Pregnancy Calculator", href: "/pregnancy" },
    disclaimer: MEDICAL_DISCLAIMER,
  },
  {
    slug: "shift-schedule-patterns-explained",
    title: "Panama, Pitman, and DuPont: Common Shift Rotation Patterns Explained",
    description:
      "How the most common rotating shift schedules work — the Panama 2-2-3, Pitman, DuPont, and 4-on-4-off patterns — their cycle lengths, average weekly hours, and trade-offs.",
    excerpt:
      "Rotating shift schedules look confusing until you see the pattern. Here's how Panama, Pitman, DuPont, and 4-on-4-off actually repeat — and how to tell which one fits.",
    date: "2026-06-24",
    readingTime: 7,
    related: { name: "Shift Work Schedule", href: "/shift" },
    disclaimer: GENERAL_DISCLAIMER,
  },
  {
    slug: "color-contrast-accessibility-guide",
    title: "Color Contrast and Readability: A Practical Guide to WCAG",
    description:
      "What a contrast ratio means, where the 4.5:1 and 3:1 WCAG thresholds come from, what counts as large text, and how to fix a brand color that fails an accessibility check.",
    excerpt:
      "A contrast ratio decides whether real people can read your text. Here's what the number means, which WCAG threshold applies, and how to fix colors that fail.",
    date: "2026-06-26",
    readingTime: 6,
    related: { name: "Color Contrast Checker", href: "/contrast" },
    disclaimer: GENERAL_DISCLAIMER,
  },
  {
    slug: "metric-vs-imperial-conversion-guide",
    title: "Metric vs Imperial: A Practical Guide to Everyday Unit Conversions",
    description:
      "Why the US mixes measurement systems, the conversions worth memorizing, why temperature needs a formula instead of a factor, and how US and imperial gallons differ.",
    excerpt:
      "Kilometers to miles, Celsius to Fahrenheit, cups to milliliters — the everyday conversions worth knowing, why temperature is the odd one out, and where US and imperial units split.",
    date: "2026-06-27",
    readingTime: 6,
    related: { name: "Unit Converter", href: "/convert" },
    disclaimer: GENERAL_DISCLAIMER,
  },
  {
    slug: "how-age-is-calculated",
    title: "How Age Is Calculated: Leap Years, Month Math, and Date Differences",
    description:
      "Why exact age isn't just days divided by 365, how the years-months-days breakdown borrows from the calendar, how leap years and Feb 29 birthdays are handled, and how to measure any date gap.",
    excerpt:
      "Your exact age isn't days ÷ 365. Here's how the years-months-days breakdown really works, how leap years fit in, and how to measure the gap between any two dates.",
    date: "2026-06-29",
    readingTime: 6,
    related: { name: "Age Calculator", href: "/age" },
    disclaimer: GENERAL_DISCLAIMER,
  },
  {
    slug: "adjusting-your-w4-withholding",
    title: "How to Adjust Your W-4 So Your Paycheck Withholding Is Right",
    description:
      "What the W-4 actually controls, why a big refund isn't free money, how filing status and extra withholding change your take-home pay, and how to dial in the right amount.",
    excerpt:
      "A big refund means you lent the government money for free. Here's how the W-4 controls your withholding and how to adjust it so your paycheck is right all year.",
    date: "2026-06-30",
    readingTime: 7,
    related: { name: "Paycheck Calculator", href: "/paycheck" },
    disclaimer: FINANCE_DISCLAIMER,
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export const GUIDES_BY_DATE = [...GUIDES].sort((a, b) =>
  a.date < b.date ? 1 : -1,
);
