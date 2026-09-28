import Card from "@/components/shared/Card";
import IconChip, { toneAt } from "@/components/shared/IconChip";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

interface Sector {
  icon: string;
  label: string;
}

const SECTORS: Sector[] = [
  { icon: "🏥", label: "Healthcare" },
  { icon: "🛒", label: "E-Commerce" },
  { icon: "🏠", label: "Real Estate" },
  { icon: "🎓", label: "Education" },
  { icon: "🧳", label: "Tourism & Hospitality" },
  { icon: "📰", label: "Media & Publishing" },
];

export default function Sectors() {
  return (
    <Section>
      <SectionHeader title="Sectors we serve" />

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {SECTORS.map((s, i) => (
          <Card key={s.label} index={i} className="flex flex-col items-center gap-3 text-center">
            <IconChip tone={toneAt(i)}>{s.icon}</IconChip>
            <span className="text-sm font-semibold text-ink">{s.label}</span>
          </Card>
        ))}
      </div>
    </Section>
  );
}
