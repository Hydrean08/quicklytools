import type { Metadata } from "next";
import Link from "next/link";
import { TOOLS } from "@/lib/tools";

export const metadata: Metadata = {
  title: "About",
  description: "About QuicklyTools — free everyday calculators that run in your browser.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-4">About QuicklyTools</h1>
      <p className="text-navy-300 text-base leading-relaxed mb-10">
        QuicklyTools is a collection of free, fast, everyday calculators that run entirely in your
        browser. No sign-up required. No data sent anywhere. Just open a tool and get your answer.
      </p>

      <section className="mb-12">
        <h2 className="text-white font-semibold text-xl mb-6">Our Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TOOLS.map(({ href, icon, name, description }) => (
            <Link
              key={href}
              href={href}
              className="flex items-start gap-3 p-4 rounded-xl bg-navy-900 border border-navy-800 hover:border-navy-600 transition-colors"
            >
              <span className="text-2xl flex-shrink-0" aria-hidden="true">{icon}</span>
              <div>
                <div className="text-white font-medium text-sm">{name}</div>
                <div className="text-navy-400 text-xs mt-0.5">{description}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-white font-semibold text-xl mb-4">Our Philosophy</h2>
        <div className="space-y-4 text-navy-300 text-sm leading-relaxed">
          <p>
            <strong className="text-white">Privacy first.</strong> Every calculation happens locally in
            your browser. We don&apos;t log your inputs or store your results.
          </p>
          <p>
            <strong className="text-white">No fluff.</strong> No accounts, no email walls, no paywalls.
            Open a tool, get your answer, done.
          </p>
          <p>
            <strong className="text-white">Accessible.</strong> All tools are keyboard-navigable and
            meet WCAG 2.2 AA contrast standards.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-white font-semibold text-xl mb-4">Disclaimer</h2>
        <p className="text-navy-300 text-sm leading-relaxed">
          Tax calculations use approximate federal and state rates and are intended for estimation
          purposes only. Consult a licensed tax professional for official advice. Health and pregnancy
          information is for informational purposes only and does not constitute medical advice.
          Always consult a qualified healthcare provider.
        </p>
      </section>
    </div>
  );
}
