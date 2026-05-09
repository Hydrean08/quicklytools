import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-navy-950 border-b border-navy-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl hover:text-navy-200 transition-colors">
          <span className="text-2xl" aria-hidden="true">🔧</span>
          <span>QuicklyTools</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1 text-sm">
            <li>
              <Link href="/paycheck" className="text-navy-200 hover:text-white px-3 py-2 rounded hover:bg-navy-800 transition-colors">
                Paycheck
              </Link>
            </li>
            <li>
              <Link href="/shift" className="text-navy-200 hover:text-white px-3 py-2 rounded hover:bg-navy-800 transition-colors">
                Shift
              </Link>
            </li>
            <li>
              <Link href="/pace" className="text-navy-200 hover:text-white px-3 py-2 rounded hover:bg-navy-800 transition-colors">
                Pace
              </Link>
            </li>
            <li>
              <Link href="/pregnancy" className="text-navy-200 hover:text-white px-3 py-2 rounded hover:bg-navy-800 transition-colors">
                Pregnancy
              </Link>
            </li>
            <li>
              <Link href="/contrast" className="text-navy-200 hover:text-white px-3 py-2 rounded hover:bg-navy-800 transition-colors">
                Contrast
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
