import type { Metadata } from "next";
import TipTool from "./TipTool";

export const metadata: Metadata = {
  alternates: { canonical: "/tip/" },
  title: "Tip Calculator — Split Bills & Calculate Gratuity",
  description:
    "Calculate tip amount and split the bill between any number of people. Choose 10–25% or enter a custom tip percentage. Free, instant tip calculator.",
};

export default function TipPage() {
  return (
    <>
      <TipTool />

      <section className="max-w-2xl mx-auto px-4 pb-16 space-y-10">

        {/* Block 1 — How to use */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use the Tip Calculator</h2>
          <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
            <li>Enter your bill amount — the subtotal before any tip or service charge is added.</li>
            <li>Select a preset tip percentage (10%, 15%, 18%, 20%, or 25%) or type any custom percentage in the custom field.</li>
            <li>Use the + and &minus; buttons to set how many people are splitting the bill. The calculator supports 1 to 20 people.</li>
            <li>Your tip amount, grand total, and per-person share update instantly — no need to tap a calculate button.</li>
            <li>Toggle &ldquo;Round up per person&rdquo; to round each share up to the nearest whole dollar, which makes settling in cash much simpler.</li>
          </ol>
        </div>

        {/* Block 2 — How calculations work */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How Tip and Bill Splitting Are Calculated</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The math behind gratuity is straightforward. Three formulas drive every result in this calculator:
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong className="text-slate-800">Tip amount</strong> = Bill &times; (Tip % &divide; 100). Multiply the bill by the tip rate expressed as a decimal. A 20% tip on an $85.00 bill is 85 &times; 0.20 = $17.00.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong className="text-slate-800">Total bill</strong> = Bill + Tip amount. Add the original bill to the tip to get the grand total. $85.00 + $17.00 = $102.00.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong className="text-slate-800">Per-person share</strong> = Total &divide; Number of people. Divide the grand total evenly. $102.00 &divide; 4 people = $25.50 per person.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            The &ldquo;Round up per person&rdquo; toggle applies a ceiling function — it rounds each share up to the next whole dollar rather than rounding to the nearest dollar. On $25.50, the rounded amount would be $26.00. This means the group collectively pays slightly more than the exact total, which typically works in the restaurant&apos;s favor and avoids awkward coin counting.
          </p>
        </div>

        {/* Block 3 — Worked example */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">A Worked Example</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Your dinner bill comes to <strong className="text-slate-800">$85.00</strong> and you decide to leave a 20% tip. Here is the arithmetic step by step:
          </p>
          <ul className="space-y-2 text-slate-600 text-sm leading-relaxed mb-4 list-disc list-inside">
            <li>Tip amount: $85.00 &times; (20 &divide; 100) = $85.00 &times; 0.20 = <strong className="text-slate-800">$17.00</strong></li>
            <li>Grand total: $85.00 + $17.00 = <strong className="text-slate-800">$102.00</strong></li>
            <li>Split 4 ways: $102.00 &divide; 4 = <strong className="text-slate-800">$25.50 per person</strong></li>
            <li>Rounded up: &lceil;$25.50&rceil; = <strong className="text-slate-800">$26.00 per person</strong></li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Curious what different percentages look like on that same $85.00 bill? The table below shows the tip amount and total for the four most common rates:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Tip %</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Tip Amount</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Grand Total</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Per Person (4)</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="p-3 border border-slate-200">15%</td>
                  <td className="p-3 border border-slate-200">$12.75</td>
                  <td className="p-3 border border-slate-200">$97.75</td>
                  <td className="p-3 border border-slate-200">$24.44</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">18%</td>
                  <td className="p-3 border border-slate-200">$15.30</td>
                  <td className="p-3 border border-slate-200">$100.30</td>
                  <td className="p-3 border border-slate-200">$25.07</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200">20%</td>
                  <td className="p-3 border border-slate-200">$17.00</td>
                  <td className="p-3 border border-slate-200">$102.00</td>
                  <td className="p-3 border border-slate-200">$25.50</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">25%</td>
                  <td className="p-3 border border-slate-200">$21.25</td>
                  <td className="p-3 border border-slate-200">$106.25</td>
                  <td className="p-3 border border-slate-200">$26.56</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Block 4 — How much to tip */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">How Much Should You Tip?</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            In the United States, gratuity directly supplements workers&apos; wages. Many tipped employees earn a lower base minimum wage set by state law, meaning tips can make up the majority of their take-home pay. Norms vary by service type:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Service</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Typical Tip</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Notes</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="p-3 border border-slate-200">Sit-down restaurant</td>
                  <td className="p-3 border border-slate-200">18–20%</td>
                  <td className="p-3 border border-slate-200">20–25% for exceptional service</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">Buffet</td>
                  <td className="p-3 border border-slate-200">10%</td>
                  <td className="p-3 border border-slate-200">Server still clears plates and refills drinks</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200">Bartender</td>
                  <td className="p-3 border border-slate-200">$1–2 per drink or 15–20% of tab</td>
                  <td className="p-3 border border-slate-200">Whichever is higher for complex cocktails</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">Food delivery</td>
                  <td className="p-3 border border-slate-200">15–20%</td>
                  <td className="p-3 border border-slate-200">Tip the driver, not the app service fee</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200">Rideshare (Uber/Lyft)</td>
                  <td className="p-3 border border-slate-200">10–20%</td>
                  <td className="p-3 border border-slate-200">Higher for late night, long trips, or heavy luggage</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">Barber / hair salon</td>
                  <td className="p-3 border border-slate-200">15–20%</td>
                  <td className="p-3 border border-slate-200">Tip stylist directly, even at upscale salons</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong className="text-slate-800">Pre-tax vs. post-tax tipping:</strong> Etiquette guides generally suggest tipping on the pre-tax subtotal because the service rendered does not vary with the local tax rate. In practice the difference is small — on an $85 bill with 8% sales tax, tipping 20% on the pre-tax amount is $17.00 versus $18.36 on the post-tax total. Either is considered acceptable.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            <strong className="text-slate-800">Automatic gratuity and service charges:</strong> Many restaurants add a mandatory 18–20% gratuity for parties of 6 or more, or for banquets. Always check your bill before leaving an additional tip — adding 20% on top of an existing 20% gratuity would be unusually generous. If the menu says &ldquo;a service charge of 20% will be added,&rdquo; that amount legally belongs to the restaurant and may or may not be distributed to servers. When in doubt, ask your server whether the charge goes directly to them.
          </p>
        </div>

        {/* Block 5 — FAQ */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Should I tip on the pre-tax or post-tax amount?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tipping on the pre-tax subtotal is technically the more correct convention, since your server&apos;s effort does not scale with your local sales tax rate. However, tipping on the post-tax total is equally common and the difference is rarely more than a dollar or two. Do whatever math is easiest in the moment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What if a service charge or gratuity is already on the bill?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Do not add another tip on top of a mandatory service charge — you would be double-tipping. Check whether the charge flows to the service staff or stays with the restaurant. If it goes to the house and you received excellent table service, a small additional cash tip directly to your server is always appreciated but never required.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How do I split the bill unevenly when people ordered different things?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                This calculator splits the total evenly, which works well for groups ordering similar amounts. For uneven splits, first use the calculator to find the full total with tip included, then divide it proportionally. For example, if Person A&apos;s food was $40 and Person B&apos;s was $60 on a $100 pre-tip bill, Person A owes 40% of the total and Person B owes 60%. Apps like Splitwise can automate this if you track each item.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Is tipping expected on takeout or counter service orders?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tipping on takeout is optional. No table service is involved, so the social expectation is lower. That said, tipping $1–2 or 10% on a takeout order is a kind gesture, especially at smaller local restaurants where the person who packed your food also works the counter and kitchen. For full counter-service coffee or fast-casual meals, a small tip is appreciated but not expected.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">How much should I tip for bad service?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Consider whether the problem was within the server&apos;s control. Slow food usually means a busy kitchen — not the server&apos;s fault. If your server was inattentive, rude, or consistently forgot requests despite an uncrowded restaurant, 10–15% is a reasonable signal. Leaving nothing can look like you forgot, so if you want the feedback heard, speaking directly with a manager is more effective than a zero tip.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Should I tip on the full price when using a coupon or discount?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes — tipping on the original menu price is considered proper etiquette. Your server delivered the same experience regardless of the deal you found online. Tipping only on the discounted amount significantly reduces what the server earns for identical work.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">What does &ldquo;round up per person&rdquo; actually do?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The round-up toggle applies a ceiling function to each person&apos;s share — it always rounds to the next whole dollar, never down. If the exact share is $25.50, you pay $26.00. If it is $25.01, you also pay $26.00. The result is that each person pays a clean dollar amount, which is handy when splitting cash. The restaurant ends up with slightly more than the calculated total, which is a nice bonus for your server.
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-200 pt-6">
          <strong>Disclaimer:</strong> Tip amounts shown are for informational purposes only. Tipping customs vary by country, region, and establishment. This calculator does not constitute financial or etiquette advice.
        </p>
      </section>
    </>
  );
}
