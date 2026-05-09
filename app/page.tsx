import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QuicklyTools — Free Everyday Calculators",
  description:
    "Free, fast, no-signup tools for everyday calculations. No account needed, works in your browser.",
};

const TOOLS = [
  {
    href: "/paycheck",
    icon: "💰",
    name: "Paycheck Calculator",
    description:
      "Estimate your take-home pay after federal tax, state tax, Social Security, and Medicare.",
    color: "from-green-500 to-emerald-600",
  },
  {
    href: "/shift",
    icon: "📅",
    name: "Shift Work Schedule",
    description:
      "Generate a 4-week calendar for Panama, Pitman, 4-on-4-off, and DuPont rotations.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    href: "/pace",
    icon: "🏃",
    name: "Running Pace Calculator",
    description:
      "Calculate pace, predict finish times, and forecast race results using the Riegel formula.",
    color: "from-orange-500 to-red-500",
  },
  {
    href: "/pregnancy",
    icon: "🤰",
    name: "Pregnancy Calculator",
    description:
      "Find your due date, current week, trimester milestones, and fertile window.",
    color: "from-pink-500 to-rose-500",
  },
  {
    href: "/contrast",
    icon: "🎨",
    name: "Color Contrast Checker",
    description:
      "Check WCAG AA/AAA contrast ratios for text and get suggested accessible color alternatives.",
    color: "from-purple-500 to-violet-600",
  },
  {
    href: "/loan",
    icon: "🏦",
    name: "Loan Calculator",
    description: "Calculate monthly payments and total interest for any loan or mortgage.",
    color: "from-blue-500 to-blue-600",
  },
  {
    href: "/tip",
    icon: "🧾",
    name: "Tip Calculator",
    description: "Split the bill and calculate tip for any party size.",
    color: "from-orange-500 to-amber-600",
  },
  {
    href: "/bmi",
    icon: "⚖️",
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index and healthy weight range.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    href: "/convert",
    icon: "🔄",
    name: "Unit Converter",
    description: "Convert length, weight, temperature, and volume between any units.",
    color: "from-violet-500 to-purple-600",
  },
  {
    href: "/age",
    icon: "🎂",
    name: "Age Calculator",
    description: "Find your exact age in years, months, and days — or the difference between any two dates.",
    color: "from-pink-500 to-rose-600",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free, fast tools for everyday life
          </h1>
          <p className="text-navy-200 text-lg md:text-xl max-w-2xl mx-auto">
            No account required. No data collected. All calculations happen
            directly in your browser.
          </p>
        </div>
      </section>

      {/* Tool cards */}
      <section className="py-12 px-4" aria-label="Available tools">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Choose a tool
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group block bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:outline-none"
              >
                <div className={`h-2 bg-gradient-to-r ${tool.color}`} aria-hidden="true" />
                <div className="p-6">
                  <div className="text-3xl mb-3" aria-hidden="true">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-navy-700 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {tool.description}
                  </p>
                  <span className="inline-flex items-center text-navy-700 font-semibold text-sm group-hover:gap-2 transition-all">
                    Use Tool
                    <span className="ml-1" aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="bg-white py-12 px-4 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Why QuicklyTools?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-3" aria-hidden="true">⚡</div>
              <h3 className="font-semibold text-slate-800 mb-2">Instant results</h3>
              <p className="text-slate-500 text-sm">
                No loading spinners. Results appear as you type.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3" aria-hidden="true">🔒</div>
              <h3 className="font-semibold text-slate-800 mb-2">Private by default</h3>
              <p className="text-slate-500 text-sm">
                Everything runs in your browser. Nothing leaves your device.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3" aria-hidden="true">📱</div>
              <h3 className="font-semibold text-slate-800 mb-2">Works everywhere</h3>
              <p className="text-slate-500 text-sm">
                Fully responsive. Works great on phone, tablet, and desktop.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
