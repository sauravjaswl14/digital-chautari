import Card from "@/components/shared/Card";
import IconChip, { toneAt } from "@/components/shared/IconChip";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

interface Role {
  icon: string;
  title: string;
  body: string;
}

const ROLES: Role[] = [
  { icon: "🧭", title: "Founder & CEO", body: "Sets the vision and leads the company's direction." },
  { icon: "⚙️", title: "Co-Founder & COO", body: "Keeps delivery, operations, and client work running smoothly." },
  { icon: "🎨", title: "Front-End Developer", body: "Builds fast, accessible interfaces people enjoy using." },
  { icon: "🗄️", title: "Back-End Developer", body: "Designs the APIs and data systems behind our products." },
  { icon: "📣", title: "Marketing Lead", body: "Plans and runs campaigns across search, social, and paid." },
  { icon: "🤝", title: "Sales Executive", body: "Turns conversations into long-term client relationships." },
  { icon: "📈", title: "Business Development Officer", body: "Finds partnerships and new markets for our ventures." },
];

export default function TeamRoles() {
  return (
    <Section>
      <SectionHeader title="The people behind the work" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {ROLES.map((role, i) => (
          <Card key={role.title} index={i}>
            <IconChip tone={toneAt(i)} className="mb-4">
              {role.icon}
            </IconChip>
            <h3 className="font-heading text-base font-bold text-ink">{role.title}</h3>
            <p className="mt-2 text-sm text-muted">{role.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
