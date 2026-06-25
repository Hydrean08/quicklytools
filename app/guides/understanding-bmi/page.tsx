import type { Metadata } from "next";
import { getGuide } from "@/lib/guides";
import { GuideLayout, H2, UL, Callout } from "@/components/guide";

const guide = getGuide("understanding-bmi")!;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.description,
};

export default function Page() {
  return (
    <GuideLayout guide={guide}>
      <p>
        Body Mass Index is one of the most quoted numbers in health, and one of the most
        misunderstood. It appears at the doctor&apos;s office, on insurance forms, and in countless
        fitness apps. Used correctly, it is a quick, useful screening tool. Used as a verdict on an
        individual&apos;s health, it can be badly misleading. Here is what BMI actually measures, where
        it came from, and how to read your own number sensibly.
      </p>

      <H2>What BMI actually is</H2>
      <p>
        BMI is simply your weight divided by the square of your height. In metric units that is
        kilograms divided by meters squared; in imperial units it is 703 times pounds divided by
        inches squared. The result is a single number that adjusts weight for height, so a tall
        person and a short person can be compared on the same scale. That is the entire calculation
        — there is no measurement of fat, muscle, or fitness in it.
      </p>
      <Callout>
        BMI = weight (kg) ÷ height² (m²). It was designed to describe <em>populations</em>, not to
        diagnose <em>individuals</em>. Keeping that distinction in mind explains both its strengths
        and its blind spots.
      </Callout>

      <H2>Where the categories come from</H2>
      <p>
        The familiar cut-offs — underweight below 18.5, normal 18.5 to 24.9, overweight 25 to 29.9,
        and obese 30 and above — were set because, across large groups of people, these ranges
        correlate with different statistical risks for conditions like heart disease and type 2
        diabetes. They are not magic thresholds where health flips on or off. A BMI of 24.9 and a
        BMI of 25.1 describe nearly identical bodies; the category boundary is a convenience, not a
        cliff.
      </p>

      <H2>Where BMI breaks down</H2>
      <p>
        Because BMI knows nothing about body composition, it misclassifies several groups:
      </p>
      <UL>
        <li>
          <strong>Muscular people.</strong> Muscle is denser than fat. A fit athlete can land in the
          &ldquo;overweight&rdquo; or even &ldquo;obese&rdquo; range despite very low body fat. Many professional
          athletes are technically &ldquo;overweight&rdquo; by BMI.
        </li>
        <li>
          <strong>Older adults.</strong> We tend to lose muscle and bone density with age. Someone
          can have a &ldquo;normal&rdquo; BMI while carrying an unhealthy amount of fat — sometimes called
          &ldquo;normal-weight obesity.&rdquo;
        </li>
        <li>
          <strong>Different body frames and populations.</strong> Research suggests health risks
          appear at different BMI levels across ethnic groups, which is why some health bodies use
          adjusted thresholds.
        </li>
        <li>
          <strong>Children and teens.</strong> BMI for anyone under 20 is read against age- and
          sex-specific growth charts, not the adult categories.
        </li>
      </UL>

      <H2>What BMI is genuinely good for</H2>
      <p>
        None of this makes BMI useless. For a doctor seeing many patients, or a researcher studying
        thousands, BMI is a cheap, fast, reproducible first screen. A rising BMI over the years is a
        reasonable prompt to look closer. It costs nothing, needs no equipment beyond a scale and a
        tape measure, and points to who might benefit from a more detailed assessment. The mistake
        is treating the screen as the diagnosis.
      </p>

      <H2>Better questions to ask alongside BMI</H2>
      <p>
        If you want a fuller picture of your health, pair BMI with measures it cannot see:
      </p>
      <UL>
        <li><strong>Waist circumference</strong> — fat carried around the abdomen carries more risk than fat elsewhere.</li>
        <li><strong>Body-fat percentage</strong> — distinguishes muscle from fat, which BMI cannot.</li>
        <li><strong>Blood markers and fitness</strong> — blood pressure, cholesterol, blood sugar, and how you feel during everyday activity often say more than weight alone.</li>
      </UL>

      <H2>How to use your number</H2>
      <p>
        Treat your BMI as a single data point, not a grade. Calculate it, note which range it falls
        in, and ask whether the simple model fits your situation — are you unusually muscular, older,
        or do you carry weight around your middle? If your number sits well outside the normal range,
        or if it has shifted noticeably, that is a good reason to talk with a healthcare provider who
        can look at the whole picture. Our BMI calculator gives you the number and your healthy
        weight range instantly; what you do with it is a conversation, not a sentence.
      </p>
    </GuideLayout>
  );
}
