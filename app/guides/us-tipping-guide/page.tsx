import type { Metadata } from "next";
import { getGuide } from "@/lib/guides";
import { GuideLayout, H2, UL, Callout } from "@/components/guide";

const guide = getGuide("us-tipping-guide")!;

export const metadata: Metadata = {
  alternates: { canonical: `/guides/${guide.slug}/` },
  title: guide.title,
  description: guide.description,
};

export default function Page() {
  return (
    <GuideLayout guide={guide}>
      <p>
        Tipping in the United States confuses visitors and locals alike. The amounts are rarely
        printed anywhere, the &ldquo;rules&rdquo; shift by region and situation, and the rise of tablet
        checkout screens has made the whole thing feel more fraught. This guide lays out practical
        norms for the most common situations, along with the reasoning behind each — because once you
        understand <em>why</em> a tip exists, deciding how much becomes much easier.
      </p>

      <H2>Why tipping is built into US service</H2>
      <p>
        In many US states, tipped workers can legally be paid a lower base wage on the assumption
        that tips make up the difference. That means a server&apos;s tip is often not a bonus for
        exceptional service but a core part of their income. This is the key cultural difference from
        countries where staff are paid a full wage and tips are a small extra. Knowing this is why
        leaving little or nothing at a sit-down restaurant is considered a real slight rather than a
        neutral choice.
      </p>

      <H2>Restaurants and sit-down dining</H2>
      <UL>
        <li><strong>Standard:</strong> 15–20% of the pre-tax bill for normal service.</li>
        <li><strong>Great service:</strong> 20–25% is a generous, well-received thank-you.</li>
        <li><strong>Poor service:</strong> 10–15%, and consider speaking to a manager rather than only punishing the tip.</li>
      </UL>
      <p>
        Tipping on the pre-tax subtotal is standard, though many people simply tip on the total for
        ease. For large parties, check the bill: restaurants frequently add an automatic gratuity of
        18–20%, in which case no additional tip is expected.
      </p>
      <Callout>
        Watch for the words &ldquo;gratuity,&rdquo; &ldquo;service charge,&rdquo; or &ldquo;auto-grat&rdquo; on your check. If a
        service charge is already included, an extra tip is optional, not expected.
      </Callout>

      <H2>Bars and cafés</H2>
      <p>
        At a bar, the rough norm is $1–2 per drink, or 15–20% if you run a tab. A complex cocktail
        that took real effort warrants more than a poured beer. At a coffee shop, tipping is genuinely
        optional for a simple order; the tip jar or tablet prompt is appreciated but not obligatory,
        and rounding up or dropping in your change is perfectly acceptable.
      </p>

      <H2>Delivery and rideshare</H2>
      <UL>
        <li><strong>Food delivery:</strong> 15–20%, with a common floor of around $3–5 even on small orders, and more in bad weather or for a long drive.</li>
        <li><strong>Rideshare (Uber, Lyft):</strong> 10–20% of the fare; tip in the app afterward if you didn&apos;t in person.</li>
        <li><strong>Grocery delivery:</strong> similar to food delivery, with extra for heavy loads or many items.</li>
      </UL>
      <p>
        Remember that the delivery <em>fee</em> charged by the app usually does not go to your driver.
        The fee and the tip are separate things.
      </p>

      <H2>Personal services</H2>
      <p>
        For haircuts, barbers, nail technicians, massage therapists, and similar personal services,
        15–20% is standard. If you see the same stylist regularly, generous and consistent tipping
        tends to be remembered. For a service provided by the salon owner, tipping norms are looser,
        but a tip is still welcome.
      </p>

      <H2>Hotels and travel</H2>
      <UL>
        <li><strong>Housekeeping:</strong> $2–5 per night, left daily (staff rotate, so day-by-day is better than one lump sum at checkout).</li>
        <li><strong>Bellhop:</strong> $1–2 per bag.</li>
        <li><strong>Valet:</strong> $2–5 when your car is returned.</li>
        <li><strong>Concierge:</strong> $5–20 for securing hard-to-get reservations or tickets.</li>
      </UL>

      <H2>Handling the tablet-screen moment</H2>
      <p>
        The spread of point-of-sale tablets has pushed tip prompts into places that never had them —
        takeout counters, self-serve kiosks, retail. There is no obligation to tip for a simple
        over-the-counter transaction where no real service was provided. It is entirely acceptable to
        select &ldquo;no tip&rdquo; or a custom amount. Reserve your tips for actual service, and use them
        generously where they genuinely matter. When in doubt on the amount, our tip calculator
        splits the bill and the gratuity for any party size in seconds.
      </p>
    </GuideLayout>
  );
}
