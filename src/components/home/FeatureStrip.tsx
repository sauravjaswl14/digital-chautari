import Card from "@/components/shared/Card";
import IconChip, { toneAt } from "@/components/shared/IconChip";
import Section from "@/components/shared/Section";
import { ChartColumnIncreasing, Heart, Palette, Settings } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  body: string;
}

const FEATURES: Feature[] = [
  {
    icon: <ChartColumnIncreasing />,
    title: "Growth-Driven",
    body: "Every campaign and build ties back to a measurable business outcome, not vanity metrics.",
  },
  {
    icon: <Palette />,
    title: "Creative-First",
    body: "Strategy and storytelling lead the work, so the technology serves a clear creative idea.",
  },
  {
    icon: <Settings />,
    title: "Tech-Powered",
    body: "Full-stack engineering means we ship real software, not just decks and mockups.",
  },
  {
    icon: <Heart />,
    title: "Client-Centric",
    body: "We work as an embedded partner, staying close through discovery, delivery, and beyond.",
  },
];

export default function FeatureStrip() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <Card key={f.title} index={i}>
            <IconChip tone={toneAt(i)} className="mb-4">
              {f.icon}
            </IconChip>
            <h3 className="font-heading text-lg font-bold text-ink">{f.title}</h3>
            <p className="mt-2 text-sm text-muted">{f.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
