import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy/" },
  title: "Privacy Policy",
  description: "Privacy Policy for QuicklyTools — how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
      <p className="text-slate-500 text-sm mb-10">Last updated: May 20, 2026</p>

      <div className="space-y-8 text-slate-600 text-sm leading-relaxed">
        <section>
          <h2 className="text-slate-900 font-semibold text-lg mb-3">Overview</h2>
          <p>
            QuicklyTools (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website{" "}
            <strong className="text-slate-900">quicklytools.org</strong>. We are committed to protecting your
            privacy. This policy explains what information we collect, how we use it, and your rights.
          </p>
        </section>

        <section>
          <h2 className="text-slate-900 font-semibold text-lg mb-3">Information We Collect</h2>
          <p className="mb-3">
            <strong className="text-slate-900">No personal data is collected by our tools.</strong> All
            calculations (paycheck, BMI, loan, etc.) run entirely in your browser. No form inputs are
            transmitted to our servers.
          </p>
          <p>We may automatically receive standard web server logs including:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Your IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent</li>
            <li>Referring URL</li>
          </ul>
          <p className="mt-3">
            This information is used solely for site security and aggregate analytics. It is not sold or
            shared with third parties beyond the services described below.
          </p>
        </section>

        <section>
          <h2 className="text-slate-900 font-semibold text-lg mb-3">Cookies</h2>
          <p>
            QuicklyTools itself does not set cookies. However, third-party services we use (including
            Google AdSense) may set cookies on your device to serve relevant advertisements. You can
            opt out of personalized advertising through{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google&apos;s Ads Settings
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-slate-900 font-semibold text-lg mb-3">Advertising</h2>
          <p>
            We use Google AdSense to display advertisements. Google, as a third-party vendor, uses
            cookies to serve ads based on your prior visits to this website or other websites. Google&apos;s
            use of advertising cookies enables it and its partners to serve ads based on your visit to
            our site. You may opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.aboutads.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              aboutads.info
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-slate-900 font-semibold text-lg mb-3">Third-Party Links</h2>
          <p>
            Our website does not contain links to third-party sites except where noted. We are not
            responsible for the privacy practices of external websites.
          </p>
        </section>

        <section>
          <h2 className="text-slate-900 font-semibold text-lg mb-3">Children&apos;s Privacy</h2>
          <p>
            QuicklyTools is not directed to children under 13. We do not knowingly collect personal
            information from children under 13. If you believe a child has provided us with personal
            information, please contact us and we will delete it promptly.
          </p>
        </section>

        <section>
          <h2 className="text-slate-900 font-semibold text-lg mb-3">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated date. Continued use of the site after changes constitutes acceptance of the
            updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-slate-900 font-semibold text-lg mb-3">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              contact us
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
