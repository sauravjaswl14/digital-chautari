import Card from "@/components/shared/Card";
import IconChip, { toneAt } from "@/components/shared/IconChip";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import { Briefcase, GraduationCap, Home, Hospital, Newspaper, ShoppingCart } from "lucide-react";

interface Sector {
  icon: React.ReactNode;
  label: string;
}

const SECTORS: Sector[] = [
  { icon: <Hospital />, label: "Healthcare" },
  { icon: <ShoppingCart />, label: "E-Commerce" },
  { icon: <Home />, label: "Real Estate" },
  { icon: <GraduationCap />, label: "Education" },
  { icon: <Briefcase />, label: "Tourism & Hospitality" },
  { icon: <Newspaper />, label: "Media & Publishing" },
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
