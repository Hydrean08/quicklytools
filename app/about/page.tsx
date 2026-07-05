import type { Metadata } from "next";
import Link from "next/link";
import { TOOLS } from "@/lib/tools";

export const metadata: Metadata = {
  alternates: { canonical: "/about/" },
  title: "About",
  description:
    "About QuicklyTools — who builds it, how our calculators are built and checked, and the standards behind every tool.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">About QuicklyTools</h1>
      <p className="text-slate-600 text-base leading-relaxed mb-10">
        QuicklyTools is a collection of free, fast, everyday calculators that run entirely in your
        browser. No sign-up required. No data sent anywhere. Just open a tool and get your answer.
      </p>

      <section className="mb-12">
        <h2 className="text-slate-900 font-semibold text-xl mb-4">Who Builds QuicklyTools</h2>
        <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
          <p>
            QuicklyTools is an independent project built and maintained by Anderson Dev Solutions,
            a small software studio run by a working developer who got tired of calculator sites
            buried under pop-ups, sign-up walls, and trackers. The goal here is simple: build the
            clearest, fastest version of each everyday tool, write a plain-English explanation of
            how it works, and charge nothing for it.
          </p>
          <p>
            Every tool on this site was written and tested by hand. We are a real, contactable
            team — you can reach us any time on our{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              contact page
            </Link>
            , and we read every message.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-slate-900 font-semibold text-xl mb-4">How Our Tools Are Built</h2>
        <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
          <p>
            We take accuracy seriously. Each calculator is built from published formulas and
            authoritative sources, then checked against worked examples before it ships:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              <strong className="text-slate-900">Paycheck &amp; tax tools</strong> use current IRS
              federal brackets, Social Security and Medicare (FICA) rates, and published state rates.
            </li>
            <li>
              <strong className="text-slate-900">Health tools</strong> (BMI, pregnancy) follow the
              standard formulas used by the CDC and WHO and the clinical conventions for due-date
              estimation (Naegele&apos;s rule).
            </li>
            <li>
              <strong className="text-slate-900">Finance tools</strong> (loan, mortgage) use the
              standard amortization formula, the same math a bank uses to build your payment schedule.
            </li>
            <li>
              <strong className="text-slate-900">Fitness &amp; accessibility tools</strong> use
              recognized models such as the Riegel race-time formula and the WCAG 2.2 contrast-ratio
              algorithm.
            </li>
          </ul>
          <p>
            When a tool produces an estimate rather than an exact figure — taxes and due dates are
            both estimates by nature — we say so plainly on the page and point you to the right
            professional. Read more in our{" "}
            <Link href="/guides" className="text-blue-600 hover:underline">
              guides
            </Link>
            , where we explain the math behind each calculator in depth.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-slate-900 font-semibold text-xl mb-6">Our Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TOOLS.map(({ href, icon, name, description }) => (
            <Link
              key={href}
              href={href}
              className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all"
            >
              <span className="text-2xl flex-shrink-0" aria-hidden="true">{icon}</span>
              <div>
                <div className="text-slate-900 font-medium text-sm">{name}</div>
                <div className="text-slate-500 text-xs mt-0.5">{description}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-slate-900 font-semibold text-xl mb-4">Our Philosophy</h2>
        <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
          <p>
            <strong className="text-slate-900">Privacy first.</strong> Every calculation happens
            locally in your browser. We don&apos;t log your inputs or store your results.
          </p>
          <p>
            <strong className="text-slate-900">No fluff.</strong> No accounts, no email walls, no
            paywalls. Open a tool, get your answer, done.
          </p>
          <p>
            <strong className="text-slate-900">Accessible.</strong> All tools are keyboard-navigable
            and meet WCAG 2.2 AA contrast standards.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-slate-900 font-semibold text-xl mb-4">Disclaimer</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Tax calculations use approximate federal and state rates and are intended for estimation
          purposes only. Consult a licensed tax professional for official advice. Health and pregnancy
          information is for informational purposes only and does not constitute medical advice.
          Always consult a qualified healthcare provider.
        </p>
      </section>
    </div>
  );
}
