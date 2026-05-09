import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "QuicklyTools — Free Everyday Calculators",
    template: "%s | QuicklyTools",
  },
  description:
    "Free, fast, no-signup tools for everyday calculations. Paycheck estimator, shift work schedule, running pace, pregnancy due date, and color contrast checker.",
  keywords: [
    "paycheck calculator",
    "shift work schedule",
    "running pace calculator",
    "pregnancy due date",
    "color contrast checker",
    "WCAG accessibility",
  ],
  openGraph: {
    siteName: "QuicklyTools",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* AdSense script — replace ca-pub-PLACEHOLDER with your publisher ID */}
        {process.env.NODE_ENV === "production" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-PLACEHOLDER"
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
