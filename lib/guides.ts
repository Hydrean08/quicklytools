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
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export const GUIDES_BY_DATE = [...GUIDES].sort((a, b) =>
  a.date < b.date ? 1 : -1,
);
