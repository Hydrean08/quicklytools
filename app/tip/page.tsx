import type { Metadata } from "next";
import TipTool from "./TipTool";

export const metadata: Metadata = {
  title: "Tip Calculator — Split Bills & Calculate Gratuity",
  description:
    "Calculate tip amount and split the bill between any number of people. Choose 10–25% or enter a custom tip percentage. Free, instant tip calculator.",
};

export default function TipPage() {
  return (
    <>
      <TipTool />

      <section className="max-w-2xl mx-auto px-4 pb-16 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Tip Calculator</h2>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>Enter the total bill amount before any tip has been added.</li>
            <li>Select a preset tip percentage (10%, 15%, 18%, 20%, or 25%) or type a custom percentage.</li>
            <li>Use the + and − buttons to set the number of people splitting the bill.</li>
            <li>Your tip amount, total bill, and per-person share appear instantly.</li>
            <li>Toggle "Round up per person" to make cash splitting easier.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Tipping Guidelines by Service Type</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            In the United States, gratuity is a standard part of the service industry economy and directly supplements workers' wages, especially in states where tipped minimum wage applies.
          </p>
          <ul className="space-y-2 text-slate-600 text-sm leading-relaxed">
            <li><strong className="text-slate-800">Sit-down restaurants:</strong> 15–20% is standard; 20–25% for exceptional service.</li>
            <li><strong className="text-slate-800">Bars:</strong> $1–2 per drink or 15–20% of the tab.</li>
            <li><strong className="text-slate-800">Food delivery:</strong> 10–20% depending on distance and order size.</li>
            <li><strong className="text-slate-800">Coffee shops / counter service:</strong> $1 per order or 10–15% is appreciated.</li>
            <li><strong className="text-slate-800">Hair salons and spas:</strong> 15–20% of the service total, given directly to your stylist or technician.</li>
            <li><strong className="text-slate-800">Hotel housekeeping:</strong> $2–5 per night, left daily for the person actually cleaning your room.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Should I tip on the pre-tax or post-tax amount?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Either is fine. Most people tip on the pre-tax subtotal, which is technically more correct. On a $100 meal with 8% tax, tipping 20% pre-tax gives $20 vs. $21.60 post-tax — a small difference that rarely matters in practice.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What is an appropriate tip for poor service?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                If service was poor due to the server (not kitchen delays), 10–15% is common. If service was genuinely unacceptable, speaking with a manager is more effective than leaving nothing, which can appear accidental rather than intentional.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How do I split the bill unevenly?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                This calculator splits the total evenly. For uneven splits, calculate the full total with tip first, then have each person pay a share proportional to what they ordered.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Should I tip on the full price when using a coupon or discount?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes — it is considered good etiquette to tip based on the full pre-discount amount. The server provided the same level of service regardless of your coupon or deal.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Is tip included automatically at large parties?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Many restaurants automatically add an 18–20% gratuity for parties of 6 or more. Always check your bill before adding an additional tip. If gratuity is already included, any extra you leave is a bonus for exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
