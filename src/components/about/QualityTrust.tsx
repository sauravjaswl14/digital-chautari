import Card from "@/components/shared/Card";
import IconChip, { toneAt } from "@/components/shared/IconChip";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

interface Commitment {
  icon: string;
  title: string;
  body: string;
}

const COMMITMENTS: Commitment[] = [
  { icon: "📋", title: "ISO 9001 Ready", body: "Documented, repeatable processes built around quality." },
  { icon: "🔒", title: "Data Protection", body: "Client and patient data handled with care and least access." },
  { icon: "🌍", title: "Global Delivery", body: "Remote-friendly workflows for clients beyond Nepal." },
  { icon: "🇳🇵", title: "Pan-Nepal Network", body: "Partners and creators across the country's regions." },
];

export default function QualityTrust() {
  return (
    <Section tone="dark">
      <SectionHeader tone="dark" eyebrow="Trust" title="Committed to quality & trust" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {COMMITMENTS.map((c, i) => (
          <Card key={c.title} index={i} variant="dark">
            <IconChip tone={toneAt(i)} className="mb-4">
              {c.icon}
            </IconChip>
            <h3 className="font-heading text-base font-bold">{c.title}</h3>
            <p className="mt-2 text-sm text-white/60">{c.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
