import Card from "@/components/shared/Card";
import IconChip, { toneAt } from "@/components/shared/IconChip";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

interface Department {
  icon: string;
  name: string;
  email: string;
}

const DEPARTMENTS: Department[] = [
  { icon: "📣", name: "Marketing", email: "marketing@digitalchautari.com" },
  { icon: "🎬", name: "Content Studio", email: "studio@digitalchautari.com" },
  { icon: "💻", name: "Software Dev", email: "dev@digitalchautari.com" },
  { icon: "📈", name: "Business Dev", email: "partnerships@digitalchautari.com" },
];

export default function DirectLines() {
  return (
    <Section>
      <SectionHeader title="Reach the right team" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {DEPARTMENTS.map((dept, i) => (
          <Card key={dept.name} index={i}>
            <IconChip tone={toneAt(i + 1)} className="mb-4">
              {dept.icon}
            </IconChip>
            <h3 className="font-heading text-base font-bold text-ink">{dept.name}</h3>
            <a
              href={`mailto:${dept.email}`}
              className="mt-1 block break-words text-sm font-medium text-teal hover:text-teal-dark"
            >
              {dept.email}
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}
