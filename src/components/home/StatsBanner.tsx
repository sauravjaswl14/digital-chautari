import Reveal from "@/components/shared/Reveal";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import { stagger } from "@/lib/motion";

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "250+", label: "Projects Delivered" },
  { value: "40+", label: "Happy Clients" },
  { value: "1M+", label: "Content Views" },
  { value: "98%", label: "Client Retention" },
];

export default function StatsBanner() {
  return (
    <Section tone="dark">
      <SectionHeader
        tone="dark"
        eyebrow="Our impact"
        title="Numbers that back up the work"
      />

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={stagger(i)}>
            <div className="font-heading text-3xl font-extrabold md:text-4xl">{s.value}</div>
            <div className="mt-1 text-sm text-white/60">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
