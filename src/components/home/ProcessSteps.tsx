import Card from "@/components/shared/Card";
import IconChip, { toneAt } from "@/components/shared/IconChip";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

interface Step {
  icon: string;
  title: string;
  body: string;
}

const STEPS: Step[] = [
  {
    icon: "🔍",
    title: "Discover",
    body: "We learn your business, audience, and goals before proposing anything.",
  },
  {
    icon: "🎯",
    title: "Design",
    body: "Strategy and creative direction come together into a concrete plan.",
  },
  {
    icon: "🛠️",
    title: "Develop",
    body: "Our marketing, content, and engineering teams build in parallel.",
  },
  {
    icon: "🚀",
    title: "Deliver",
    body: "We launch, measure results, and keep iterating with you.",
  },
];

export default function ProcessSteps() {
  return (
    <Section tone="dark">
      <SectionHeader tone="dark" eyebrow="How we work" title="Our 4-step process" />

      <ol className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <Card as="li" key={step.title} index={i} variant="dark">
            <div className="mb-4 flex items-center justify-between">
              <IconChip tone={toneAt(i)}>{step.icon}</IconChip>
              <span className="font-heading text-2xl font-extrabold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-heading text-lg font-bold">{step.title}</h3>
            <p className="mt-2 text-sm text-white/60">{step.body}</p>
          </Card>
        ))}
      </ol>
    </Section>
  );
}
