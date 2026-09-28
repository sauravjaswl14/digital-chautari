import Link from "next/link";
import Card from "@/components/shared/Card";
import IconChip, { type Tone } from "@/components/shared/IconChip";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

interface ProductTeaser {
  icon: string;
  tone: Tone;
  category: string;
  title: string;
  body: string;
}

const PRODUCTS: ProductTeaser[] = [
  {
    icon: "🌱",
    tone: "mint",
    category: "Marketing Agency",
    title: "Eco Creative Marketing Agency",
    body: "Sustainability-minded brand and growth campaigns for businesses across Nepal.",
  },
  {
    icon: "🎥",
    tone: "gold",
    category: "Content Studio",
    title: "One Content Creation Studio",
    body: "In-house video, photo, and social content production for fast-moving brands.",
  },
  {
    icon: "🩺",
    tone: "teal",
    category: "Health-Tech",
    title: "Physio@Home",
    body: "A booking and care platform connecting patients with physiotherapists at home.",
  },
];

export default function ProductsTeaser() {
  return (
    <Section>
      <SectionHeader
        title="Three ventures, one vision"
        description="Alongside client work, we build and run our own products."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {PRODUCTS.map((p, i) => (
          <Card key={p.title} index={i}>
            <IconChip tone={p.tone} className="mb-4">
              {p.icon}
            </IconChip>
            <span className="text-xs font-semibold text-teal">{p.category}</span>
            <h3 className="mt-1 font-heading text-lg font-bold text-ink">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">{p.body}</p>
            <Link href="/products" className="mt-4 inline-block text-sm font-semibold text-teal hover:text-teal-dark">
              Learn more →
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
