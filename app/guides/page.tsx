import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES_BY_DATE } from "@/lib/guides";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/" },
  title: "Guides — Plain-English Explainers Behind Every Tool",
  description:
    "In-depth guides explaining the math and meaning behind our calculators: paychecks, BMI, loan amortization, running pace, tipping, pregnancy due dates, and more.",
};

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

export default function GuidesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Guides</h1>
      <p className="text-slate-600 text-base leading-relaxed mb-10">
        A calculator gives you a number. These guides explain what the number means, where the
        formula comes from, and how to use the result in real life. Every guide is written and
        fact-checked by the same people who build the tools.
      </p>

      <div className="space-y-6">
        {GUIDES_BY_DATE.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="block rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all p-6 group"
          >
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
              <time dateTime={guide.date}>{formatDate(guide.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{guide.readingTime} min read</span>
              <span aria-hidden="true">·</span>
              <span className="text-navy-700 font-medium">{guide.related.name}</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-navy-700 transition-colors">
              {guide.title}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">{guide.excerpt}</p>
            <span className="inline-flex items-center gap-1 text-navy-700 font-semibold text-sm mt-3 group-hover:gap-2 transition-all">
              Read guide
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
