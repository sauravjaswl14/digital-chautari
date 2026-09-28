import Card from "@/components/shared/Card";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

const REASONS: string[] = [
  "Dedicated project manager",
  "Agile development cycle",
  "Transparent pricing",
  "Post-launch support",
  "Scalable architecture",
  "Cross-platform expertise",
];

export default function WhyWorkWithUs() {
  return (
    <Section tone="dark">
      <SectionHeader tone="dark" eyebrow="Our promise" title="Why work with us" />

      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((reason, i) => (
          <Card as="li" key={reason} index={i} variant="dark" className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold"
            >
              ✓
            </span>
            <span className="text-sm font-medium">{reason}</span>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
