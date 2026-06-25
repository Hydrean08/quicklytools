import type { Metadata } from "next";
import { getGuide } from "@/lib/guides";
import { GuideLayout, H2, UL, Callout } from "@/components/guide";

const guide = getGuide("good-running-pace-by-age")!;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.description,
};

export default function Page() {
  return (
    <GuideLayout guide={guide}>
      <p>
        &ldquo;What&apos;s a good running pace?&rdquo; is one of the most common questions new runners ask, and
        the honest answer is: it depends. It depends on your age, how long you have been running,
        what distance you are training for, the terrain, the weather, and even how you slept. A pace
        that exhausts one person is an easy warm-up for another. Rather than chase a single magic
        number, it is far more useful to understand the ranges and how to find yours.
      </p>

      <H2>There is no universal &ldquo;good&rdquo; pace</H2>
      <p>
        As a very rough reference, many recreational runners settle somewhere between 9 and 12
        minutes per mile (about 5:30 to 7:30 per kilometer) for an easy run. Beginners often start
        slower, and that is completely normal. Competitive amateurs may cruise at 7 to 8 minutes per
        mile, while elite marathoners hold under 5 minutes per mile for over two hours. The spread is
        enormous, and comparing yourself to the top of it is a recipe for discouragement.
      </p>
      <Callout>
        The best pace for most of your running is &ldquo;conversational&rdquo; — slow enough that you could
        speak a full sentence without gasping. Most runners go too fast on easy days and too slow on
        hard days; flipping that is the single biggest improvement many people can make.
      </Callout>

      <H2>How age factors in</H2>
      <p>
        Running performance tends to peak somewhere in the late twenties to mid-thirties for most
        distances, then declines gradually. The decline is slow at first — often barely noticeable
        through your forties — and steepens later in life. But age is far from destiny: a
        well-trained 50-year-old routinely outruns an untrained 25-year-old. Consistency and years of
        training matter more than the number on your birth certificate. Treat age as one input that
        shifts the realistic range, not a ceiling.
      </p>

      <H2>Pace by goal, not just by speed</H2>
      <p>
        Experienced runners deliberately train at several different paces, because each one builds
        something different:
      </p>
      <UL>
        <li><strong>Easy pace</strong> — the majority of your weekly mileage; builds aerobic base and aids recovery.</li>
        <li><strong>Tempo pace</strong> — &ldquo;comfortably hard,&rdquo; sustainable for around an hour; raises your lactate threshold.</li>
        <li><strong>Interval pace</strong> — short, fast repeats with rest; sharpens speed and running economy.</li>
        <li><strong>Race pace</strong> — the specific pace you aim to hold on race day, rehearsed in training.</li>
      </UL>
      <p>
        Knowing your easy pace also keeps you honest: if every run feels hard, you are probably
        running your easy days too fast and leaving no room to push when it counts.
      </p>

      <H2>Predicting race times with the Riegel formula</H2>
      <p>
        Once you have a recent race or hard effort at one distance, you can estimate your time at
        another using Peter Riegel&apos;s formula, a model that has held up well for decades:
      </p>
      <Callout>
        T₂ = T₁ × (D₂ ÷ D₁)<sup>1.06</sup> — your predicted time at a new distance equals your known
        time multiplied by the ratio of distances raised to the power 1.06.
      </Callout>
      <p>
        The exponent of 1.06 captures a simple truth every runner knows: you cannot hold your 5K pace
        for a marathon. Pace naturally slows as distance grows. The prediction is most accurate when
        the two distances are reasonably close and you have trained specifically for the longer one.
        Our pace calculator runs this for you — enter one result and it forecasts the others.
      </p>

      <H2>Setting a realistic target for yourself</H2>
      <p>
        To find a pace worth aiming for, start from where you are, not where you wish you were. Run a
        recent effort honestly, use it as your baseline, and set the next goal a small, sustainable
        step beyond it. Improvement in running is measured in weeks and months of consistency, not
        single heroic workouts. Track your easy pace over a training block and you will usually see
        it drift faster at the same effort — quiet proof that the work is paying off.
      </p>
    </GuideLayout>
  );
}
