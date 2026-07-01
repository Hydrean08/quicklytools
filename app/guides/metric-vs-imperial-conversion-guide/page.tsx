import type { Metadata } from "next";
import { getGuide } from "@/lib/guides";
import { GuideLayout, H2, UL, Callout } from "@/components/guide";

const guide = getGuide("metric-vs-imperial-conversion-guide")!;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.description,
};

export default function Page() {
  return (
    <GuideLayout guide={guide}>
      <p>
        Most of the world measures distance in kilometres, weighs things in kilograms, and sets the
        oven in degrees Celsius. The United States does something closer to the opposite for nearly
        every one of those things, and several other countries — including the United Kingdom — live
        somewhere in between, freely mixing metric and imperial depending on context. The result is
        that unit conversions are not an exotic skill reserved for scientists. They are a daily
        reality for travellers, home cooks following foreign recipes, online shoppers, and anyone
        reading a weather app in an unfamiliar country.
      </p>

      <H2>Two systems, one origin</H2>
      <p>
        The metric system — formally known today as the International System of Units, or SI — was
        developed in France in the late eighteenth century with a specific design goal: everything
        should be based on powers of ten. A kilometre is exactly 1,000 metres. A kilogram is exactly
        1,000 grams. That decimal coherence makes arithmetic straightforward: to convert kilometres to
        metres, you move a decimal point. There are no awkward multipliers to memorise.
      </p>
      <p>
        Imperial and US customary units grew differently — organically, from historical standards
        that varied by trade and region. An inch was originally the width of a thumb. A foot was a
        foot. A mile comes from the Roman <em>mille passuum</em>, a thousand paces. These units were
        later standardised, but the relationships between them were fixed by convention rather than
        design. Twelve inches in a foot, three feet in a yard, 5,280 feet in a mile — each of those
        numbers requires its own memory slot. The imperial system is not irrational, but it is not
        systematically decimal either.
      </p>

      <H2>The conversions worth memorising</H2>
      <p>
        You do not need to memorise every conversion factor, but a handful of them come up so
        frequently that knowing them by heart saves real time. Here are the most useful ones for
        everyday situations:
      </p>
      <UL>
        <li>
          <strong>Miles and kilometres.</strong> 1 mile = 1.609 km, and 1 km = 0.621 miles. A
          quick mental shortcut: multiply miles by 1.6 to get kilometres, or multiply kilometres by
          0.6 to get a rough miles figure. Speed limits and road signs are the most common place
          this matters when travelling.
        </li>
        <li>
          <strong>Inches and centimetres.</strong> 1 inch = 2.54 cm exactly. This one is exact
          by definition — the international inch has been defined as precisely 2.54 centimetres since
          1959. It comes up constantly for screen sizes, clothing measurements, and DIY projects.
        </li>
        <li>
          <strong>Pounds and kilograms.</strong> 1 lb = 0.454 kg, and 1 kg = 2.205 lb. Body weight
          and food packaging are the two places most people encounter this. If someone says they weigh
          70 kg, that is about 154 lb; a 500 g steak is roughly 1.1 lb.
        </li>
        <li>
          <strong>US cups and millilitres.</strong> 1 US cup = 236.6 ml. Baking recipes from
          American sources use cups as a primary volume measure. A rough rule of thumb: a cup is
          just under 240 ml, so two and a half cups is about 600 ml.
        </li>
        <li>
          <strong>Gallons and litres.</strong> 1 US gallon = 3.785 L. Fuel economy figures and
          large liquid containers in the US use gallons. Knowing that a gallon is roughly 3.8 litres
          makes fuel prices and tank capacities easy to compare internationally.
        </li>
      </UL>

      <H2>Why temperature is different</H2>
      <p>
        Every conversion above works by multiplying or dividing by a fixed factor. Temperature does
        not behave the same way, and that trips people up. The reason is that Fahrenheit and Celsius
        do not share the same zero point. Zero degrees Celsius is the freezing point of water; zero
        degrees Fahrenheit is a different temperature entirely — roughly &minus;17.8 &deg;C, based on
        an older reference mixture. Because the scales are offset from each other, you cannot simply
        multiply. You have to shift and then scale.
      </p>
      <p>
        The two formulas are:
      </p>
      <Callout>
        <strong>&deg;F to &deg;C:</strong> subtract 32, then multiply by 5/9.<br />
        <code>&deg;C = (&deg;F &minus; 32) &times; 5/9</code>
        <br /><br />
        <strong>&deg;C to &deg;F:</strong> multiply by 9/5, then add 32.<br />
        <code>&deg;F = &deg;C &times; 9/5 + 32</code>
        <br /><br />
        <strong>Quick anchors to remember:</strong> 0 &deg;C = 32 &deg;F (freezing), 100 &deg;C =
        212 &deg;F (boiling), 37 &deg;C = 98.6 &deg;F (body temperature), and &minus;40 is the one
        temperature where both scales agree.
      </Callout>
      <p>
        A useful mental shortcut for everyday weather: double the Celsius temperature and add 30 to
        get a rough Fahrenheit equivalent. It is slightly off at the extremes but close enough to
        know whether to pack a jacket.
      </p>

      <H2>The gallon and cup trap</H2>
      <p>
        One of the most common sources of error when working with volume is assuming that an imperial
        gallon and a US gallon are the same thing. They are not. A US gallon is approximately 3.785
        litres. An imperial gallon — still used in the United Kingdom for some contexts — is
        approximately 4.546 litres, about 20 percent larger. If you are comparing fuel economy
        figures between a US car review and a British one, you are not comparing like with like.
        Miles per gallon figures will look better in the UK source simply because the gallon being
        counted is bigger.
      </p>
      <p>
        The same split exists for cups. A US cup is 236.6 ml. An imperial cup — rarely used in
        modern British recipes, but occasionally encountered in older cookbooks — is 284 ml. Most
        contemporary UK recipes have moved to weighing ingredients in grams rather than measuring
        in cups, which sidesteps the confusion entirely. When you see &ldquo;cup&rdquo; in a recipe
        without a country of origin, assume US customary unless otherwise noted, since that is where
        the cup as a recipe unit remains most common.
      </p>

      <H2>Getting conversions right</H2>
      <p>
        For casual everyday use, rounding to three significant figures is almost always sufficient.
        Saying a 10 km race is 6.21 miles is more useful than saying it is 6.21371192 miles. The
        precision implied by a long decimal string is rarely matched by the precision of the
        original measurement.
      </p>
      <p>
        There are situations, however, where rounding too aggressively creates real problems.
        Medicine is the clearest example: a drug dose in milligrams per kilogram of body weight
        needs an accurate weight conversion, not a rounded one. Engineering and manufacturing are
        similar — tolerances are specified to fractions of a millimetre or thousandths of an inch,
        and rounding to the nearest whole unit can make a part unusable. In those contexts, use the
        exact conversion factors and carry enough decimal places to match the precision required by
        the task.
      </p>
      <p>
        It is also worth noting which direction you are converting before you calculate. Dividing
        when you should multiply — or vice versa — produces a result that is off by the square of
        the conversion factor, which is a large and sometimes dangerous error. A brief sanity check
        helps: kilometres are shorter than miles, so converting kilometres to miles should give a
        smaller number. Celsius readings for comfortable room temperature are in the low-to-mid
        twenties; if your calculation produces a number in the hundreds, something has gone wrong.
      </p>

      <H2>Living between two systems</H2>
      <p>
        Fluency with both systems is a practical skill, not just a trivia exercise. The most useful
        approach is to build a small set of reference points you genuinely understand rather than
        relying on pure calculation every time. Knowing that 100 km/h is roughly highway speed, that
        20 &deg;C is a pleasant spring day, and that a kilogram of chicken is about 2.2 lb gives you
        anchors to check calculated results against intuition. From there, keeping the handful of
        key factors above in memory — or within easy reach — handles the vast majority of conversion
        needs in everyday life.
      </p>
    </GuideLayout>
  );
}
