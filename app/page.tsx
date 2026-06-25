import type { Metadata } from "next";
import Link from "next/link";
import { TOOLS } from "@/lib/tools";
import { GUIDES_BY_DATE } from "@/lib/guides";

export const metadata: Metadata = {
  title: "QuicklyTools — Free Everyday Calculators",
  description:
    "Free, fast, no-signup tools for everyday calculations. No account needed, works in your browser.",
};

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

      {/* Intro */}
      <section className="py-12 px-4 border-b border-slate-200">
        <div className="max-w-3xl mx-auto text-slate-600 text-base leading-relaxed space-y-4">
          <p>
            QuicklyTools is a growing collection of free online calculators for the everyday
            questions money, health, and time keep throwing at you. Estimate your take-home pay
            after taxes, work out a loan payment, check your BMI, find your running pace, calculate
            a pregnancy due date, split a restaurant bill, or convert between units — each one is
            built to give you a clear answer in seconds.
          </p>
          <p>
            There are no accounts, no pop-ups, and no tracking of your inputs. Every calculation
            runs entirely in your browser, so the numbers you type never leave your device. And when
            you want to understand the math behind a result, our{" "}
            <Link href="/guides" className="text-navy-700 font-semibold hover:underline">
              in-depth guides
            </Link>{" "}
            explain how each tool works in plain English.
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

      {/* From our guides */}
      <section className="py-12 px-4 border-t border-slate-200" aria-label="Latest guides">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-800">From our guides</h2>
            <Link
              href="/guides"
              className="text-navy-700 font-semibold text-sm hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GUIDES_BY_DATE.slice(0, 3).map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group block bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all p-6"
              >
                <div className="text-xs text-slate-500 mb-2">{guide.readingTime} min read</div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-navy-700 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{guide.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
