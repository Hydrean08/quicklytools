import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact QuicklyTools — send us feedback or report an issue.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Contact Us</h1>
      <p className="text-navy-300 text-sm mb-10">
        Have a question, found a bug, or want to suggest a new tool? We&apos;d love to hear from you.
      </p>

      <div className="bg-navy-900 border border-navy-800 rounded-2xl p-8 space-y-6">
        <div>
          <h2 className="text-white font-semibold mb-1">Email</h2>
          <a
            href="mailto:andersondevsolutions@gmail.com"
            className="text-blue-400 hover:underline text-sm"
          >
            andersondevsolutions@gmail.com
          </a>
          <p className="text-navy-400 text-xs mt-1">We typically respond within 1–2 business days.</p>
        </div>

        <div className="border-t border-navy-800 pt-6">
          <h2 className="text-white font-semibold mb-3">Common Topics</h2>
          <ul className="space-y-2 text-navy-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-navy-500 mt-0.5">→</span>
              <span><strong className="text-white">Bug reports</strong> — tell us which tool and what went wrong</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy-500 mt-0.5">→</span>
              <span><strong className="text-white">Tool suggestions</strong> — what everyday calculator would help you?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy-500 mt-0.5">→</span>
              <span><strong className="text-white">Ad or privacy concerns</strong> — we take these seriously</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
