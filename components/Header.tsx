"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/paycheck", label: "Paycheck" },
  { href: "/shift", label: "Shift" },
  { href: "/pace", label: "Pace" },
  { href: "/pregnancy", label: "Pregnancy" },
  { href: "/contrast", label: "Contrast" },
  { href: "/loan", label: "Loan" },
  { href: "/tip", label: "Tip" },
  { href: "/bmi", label: "BMI" },
  { href: "/convert", label: "Convert" },
  { href: "/age", label: "Age" },
  { href: "/guides", label: "Guides" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-navy-950 border-b border-navy-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-bold text-xl hover:text-navy-200 transition-colors"
        >
          <span className="text-2xl" aria-hidden="true">🔧</span>
          <span>QuicklyTools</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-navy-200 hover:text-white px-3 py-2 rounded hover:bg-navy-800 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 text-navy-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-navy-400 rounded"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="md:hidden border-t border-navy-800 bg-navy-950">
          <ul className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-navy-200 hover:text-white px-3 py-3 rounded hover:bg-navy-800 transition-colors text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
