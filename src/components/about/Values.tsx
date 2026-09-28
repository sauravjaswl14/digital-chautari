import Card from "@/components/shared/Card";
import IconChip, { toneAt } from "@/components/shared/IconChip";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import { Handshake, Heart, Lightbulb, Star } from "lucide-react";

interface Value {
  icon: React.ReactNode;
  title: string;
  body: string;
}

const VALUES: Value[] = [
  { icon: <Heart />, title: "Passion", body: "We only take on work we'd be proud to put our name on." },
  { icon: <Lightbulb />, title: "Creativity", body: "The best solution is rarely the obvious one — we look for it anyway." },
  { icon: <Star />, title: "Excellence", body: "Good enough isn't a standard we work to." },
  { icon: <Handshake />, title: "Collaboration", body: "Clients are partners in the process, not recipients of it." },
];

export default function Values() {
  return (
    <Section>
      <SectionHeader title="What we value" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((v, i) => (
          <Card key={v.title} index={i}>
            <IconChip tone={toneAt(i)} className="mb-4">
              {v.icon}
            </IconChip>
            <h3 className="font-heading text-lg font-bold text-ink">{v.title}</h3>
            <p className="mt-2 text-sm text-muted">{v.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
