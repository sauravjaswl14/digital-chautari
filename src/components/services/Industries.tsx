import Card from "@/components/shared/Card";
import IconChip, { toneAt } from "@/components/shared/IconChip";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import { ChartLine, ShoppingCart, Home, GraduationCap, Briefcase, Newspaper } from 'lucide-react';


interface Industry {
  icon: React.ReactNode;
  label: string;
}

const INDUSTRIES: Industry[] = [
  { icon: <ChartLine />, label: "Healthcare" },
  { icon: <ShoppingCart />, label: "E-Commerce" },
  { icon: <Home />, label: "Real Estate" },
  { icon: <GraduationCap />, label: "Education" },
  { icon: <Briefcase />, label: "Tourism" },
  { icon: <Newspaper />, label: "Media" },
];

export default function Industries() {
  return (
    <Section>
      <SectionHeader title="Who we work with" />

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
        {INDUSTRIES.map((ind, i) => (
          <Card key={ind.label} index={i} className="flex flex-col items-center gap-3 text-center">
            <IconChip tone={toneAt(i)}>{ind.icon}</IconChip>
            <span className="text-sm font-semibold text-ink">{ind.label}</span>
          </Card>
        ))}
      </div>
    </Section>
  );
}
