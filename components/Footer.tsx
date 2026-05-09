import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-navy-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-white font-bold text-lg mb-3">QuicklyTools</h2>
            <p className="text-navy-300 text-sm">
              Free, fast, no-signup tools for everyday calculations.
              All computations happen in your browser — no data is sent anywhere.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/paycheck" className="text-navy-300 hover:text-white text-sm transition-colors">
                  Paycheck Calculator
                </Link>
              </li>
              <li>
                <Link href="/shift" className="text-navy-300 hover:text-white text-sm transition-colors">
                  Shift Work Schedule
                </Link>
              </li>
              <li>
                <Link href="/pace" className="text-navy-300 hover:text-white text-sm transition-colors">
                  Running Pace Calculator
                </Link>
              </li>
              <li>
                <Link href="/pregnancy" className="text-navy-300 hover:text-white text-sm transition-colors">
                  Pregnancy Calculator
                </Link>
              </li>
              <li>
                <Link href="/contrast" className="text-navy-300 hover:text-white text-sm transition-colors">
                  Color Contrast Checker
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Disclaimer</h3>
            <p className="text-navy-300 text-sm">
              Tax calculations are estimates using approximate rates. Consult a
              tax professional for official advice. Pregnancy and health
              information is for informational purposes only — not medical advice.
            </p>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-4 text-center text-navy-400 text-sm">
          <p>&copy; {currentYear} QuicklyTools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
