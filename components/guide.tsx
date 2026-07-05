import Link from "next/link";
import type { ReactNode } from "react";
import type { Guide } from "@/lib/guides";

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

export function GuideLayout({
  guide,
  children,
}: {
  guide: Guide;
  children: ReactNode;
}) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-xs text-slate-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        <span className="mx-2" aria-hidden="true">/</span>
        <Link href="/guides/" className="hover:text-slate-700">Guides</Link>
        <span className="mx-2" aria-hidden="true">/</span>
        <span className="text-slate-700">{guide.title}</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 leading-tight">
        {guide.title}
      </h1>
      <p className="text-slate-500 text-sm mb-8">
        <time dateTime={guide.date}>{formatDate(guide.date)}</time> · {guide.readingTime} min read
      </p>

      <div className="space-y-5 text-slate-700 text-[15px] leading-relaxed">
        {children}
      </div>

      <div className="mt-10 rounded-xl border border-slate-200 bg-white shadow-sm p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
          Try the tool
        </p>
        <p className="text-slate-600 text-sm mb-4">
          Put this into practice with our free, no-signup {guide.related.name.toLowerCase()}.
        </p>
        <Link
          href={guide.related.href}
          className="inline-flex items-center gap-1 font-semibold text-navy-700 hover:gap-2 transition-all text-sm"
        >
          Open the {guide.related.name}
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-200 pt-6 mt-10">
        <strong>Disclaimer:</strong> {guide.disclaimer}
      </p>
    </article>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-xl font-bold text-slate-900 pt-4">{children}</h2>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold text-slate-900">{children}</h3>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="list-disc list-outside ml-5 space-y-2">{children}</ul>;
}

export function OL({ children }: { children: ReactNode }) {
  return <ol className="list-decimal list-outside ml-5 space-y-2">{children}</ol>;
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-navy-50 border-l-4 border-navy-500 rounded-r-lg p-4 text-sm text-slate-700">
      {children}
    </div>
  );
}
