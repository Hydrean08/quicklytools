import type { Metadata } from "next";
import { getGuide } from "@/lib/guides";
import { GuideLayout, H2, UL, Callout } from "@/components/guide";

const guide = getGuide("training-for-your-first-race")!;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.description,
};

export default function Page() {
  return (
    <GuideLayout guide={guide}>
      <p>
        Crossing a finish line for the first time is one of the most satisfying things you can do as
        a new runner. The good news is that almost anyone, at any starting fitness level, can get
        there. The single biggest factor is not talent or natural speed — it is showing up
        consistently over several weeks and letting your body adapt at a pace it can handle. This
        guide walks you through exactly how to do that, from choosing your distance to standing
        calm and ready at the start line.
      </p>

      <H2>Pick the right first distance</H2>
      <p>
        The 5K — 3.1 miles — is the near-universal recommendation for first-time racers, and for
        good reason. Eight weeks of structured training is enough to take most beginners from the
        couch to a comfortable finish. The distance is short enough that you can race it without
        elaborate fueling strategies or weeks of long runs, yet long enough to feel genuinely
        meaningful when you cross the line.
      </p>
      <p>
        A 10K (6.2 miles) is a natural next step, but it asks for a bit more base fitness coming
        in. Budget ten to twelve weeks if you are starting from scratch, or six to eight weeks if
        you can already run a 5K without stopping. The jump in weekly mileage is modest but the
        fatigue compounds, so rushing it tends to invite injury.
      </p>
      <p>
        A half marathon (13.1 miles) is an exciting goal but a serious commitment. Runners who have
        never raced before will typically need twelve to sixteen weeks — and they should arrive at
        week one already capable of running twenty to thirty minutes without stopping. If you are
        brand new and drawn to the half, consider targeting a 5K first and giving yourself a
        full training cycle to build the base before stepping up.
      </p>

      <H2>How much to run each week</H2>
      <p>
        New runners often make the same mistake: they do too much too soon, feel great for a week
        or two, then get sidelined by shin splints, knee pain, or sheer burnout. The fix is
        deliberate, gradual progression.
      </p>
      <p>
        Three to four runs per week is plenty for a first race. Running every day without rest
        days removes the time your muscles, tendons, and bones need to rebuild after the stress of
        training. Rest days are not laziness — they are where adaptation actually happens.
      </p>
      <p>
        A widely used guideline is the 10% rule: don&apos;t increase your total weekly mileage by more
        than about 10% from one week to the next. If you ran 10 miles this week, aim for no more
        than 11 next week. The rule is a rough heuristic rather than a law, but it captures the
        right instinct: small, steady steps compound into big fitness gains without the breakdown
        that comes from jumping ahead too quickly.
      </p>
      <p>
        Every three to four weeks, plan a cutback week where you drop your mileage by 20–30%.
        This gives your body time to consolidate the training load before you build again.
      </p>

      <H2>Why most miles should feel easy</H2>
      <p>
        One of the most counterintuitive truths in distance running is that the majority of your
        training should feel surprisingly easy. Many beginners assume that every run should be a
        hard effort — otherwise, are you really working? That instinct leads to running too hard
        too often, which stalls progress and increases injury risk.
      </p>
      <Callout>
        The <strong>easy pace</strong> rule of thumb: you should be able to hold a conversation
        without gasping. If you can&apos;t say a full sentence, slow down. For most beginners, this
        feels almost uncomfortably slow at first — that is normal, and it is exactly where your
        aerobic engine is built.
      </Callout>
      <p>
        Aim to run roughly 80% of your weekly miles at an easy, conversational effort. Reserve
        harder efforts — a tempo run, a faster finish on a long run, or a race itself — for the
        remaining 20% or less. This distribution, sometimes called polarized or 80/20 training,
        consistently produces better results than running moderately hard on every session.
      </p>

      <H2>Building the long run</H2>
      <p>
        Once a week, one of your runs should be longer than the others. This long run is the
        cornerstone of endurance training. It teaches your body to burn fat efficiently, strengthens
        connective tissue, and builds the mental toughness that race day demands.
      </p>
      <p>
        Keep the long run easy — slower than you think necessary. The goal is time on feet, not
        speed. For a 5K plan, your longest training run might reach four or five miles. For a
        half marathon, the peak long run typically lands around ten to twelve miles, two to three
        weeks before race day.
      </p>
      <p>
        Walk breaks are entirely legitimate, especially early in training. A run-walk approach —
        running for several minutes, walking for one — lets beginners complete longer distances
        before their fitness fully arrives. Many runners use this strategy through race day itself,
        often finishing faster than they would have by running the whole way and fading at the end.
        There is no shame in it; there is only the finish line.
      </p>

      <H2>Setting a realistic goal time</H2>
      <p>
        Having a target time gives your training a shape and gives you something concrete to pace
        against on race day. The trick is setting a goal that is motivating without being
        disconnected from reality.
      </p>
      <p>
        One practical method is to run a hard time trial — a flat all-out effort over a known
        distance — and then use that result to predict race performance. Pete Riegel&apos;s race
        prediction formula, developed in the late 1970s and still widely used, states that race
        time scales with distance raised to the power of 1.06. In plain terms: doubling the
        distance slows your pace by about six percent. A pace calculator can do this math
        instantly — plug in a recent timed effort and see estimated finish times across distances.
      </p>
      <p>
        Whatever goal you set, plan to run the first mile at least fifteen to thirty seconds per
        mile <em>slower</em> than your goal pace. Starting conservatively feels wasteful in the
        moment but pays off enormously in the back half. The runners blasting past you in the
        first mile will often be the ones you pass in the last.
      </p>

      <H2>Race week and the start line</H2>
      <p>
        The week before your race, reduce your mileage significantly — this is called tapering.
        You will not lose any fitness in a week of lighter running; your muscles will store more
        glycogen and your legs will arrive fresh. Resist the urge to cram in extra miles because
        you feel anxious. Trust the training.
      </p>
      <UL>
        <li>
          <strong>Sleep and eat normally.</strong> Do not experiment with new foods the night
          before. A familiar dinner works better than pasta if pasta isn&apos;t your usual meal.
        </li>
        <li>
          <strong>Arrive early.</strong> Parking, packet pickup, and bathroom lines at races are
          reliably longer than expected. Budget extra time so you are not rushing to the start.
        </li>
        <li>
          <strong>Warm up lightly.</strong> A ten-minute easy jog or walk before the gun raises
          your heart rate gradually, so the first mile does not feel like a shock.
        </li>
        <li>
          <strong>Start slower than feels right.</strong> Race-day excitement and the crowd energy
          will push you to go out hard. Consciously hold back. Check your watch at the first mile
          marker and adjust from there.
        </li>
      </UL>
      <p>
        Above all, remember why you signed up. On race day, every mile you have trained becomes
        real. The weeks of early mornings, sore legs, and easy-paced jogs that felt too slow — all
        of it is in your legs. Run your plan, enjoy the crowd, and let yourself feel proud when
        you cross that line.
      </p>

      <p>
        The first finish is always the hardest and the most memorable. Once you have it, the next
        distance does not seem so far away.
      </p>
    </GuideLayout>
  );
}
