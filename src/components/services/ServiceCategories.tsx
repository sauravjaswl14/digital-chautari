import Card from "@/components/shared/Card";
import IconChip, { type Tone } from "@/components/shared/IconChip";
import Reveal from "@/components/shared/Reveal";
import Section from "@/components/shared/Section";
import { stagger } from "@/lib/motion";

interface ServiceCategory {
  icon: string;
  tone: Tone;
  title: string;
  description: string;
  subServices: string[];
}

const CATEGORIES: ServiceCategory[] = [
  {
    icon: "📣",
    tone: "teal",
    title: "Digital Marketing",
    description:
      "We plan and run campaigns that turn search, social, and paid channels into a steady pipeline of customers.",
    subServices: ["SEO & SEM", "Social Media Marketing", "Paid Advertising", "Analytics & Reporting"],
  },
  {
    icon: "🎬",
    tone: "gold",
    title: "Content Creation",
    description:
      "From concept to final cut, our studio produces content that's built to be watched, shared, and remembered.",
    subServices: ["Video Production", "Photography", "Copywriting", "Brand Storytelling"],
  },
  {
    icon: "💻",
    tone: "mint",
    title: "Software Development",
    description:
      "Full-stack engineering for products that need to actually work in the real world, not just in a demo.",
    subServices: ["Web Applications", "Mobile Apps", "API & Integrations", "Product Support"],
  },
];

export default function ServiceCategories() {
  return (
    <Section>
      <div className="flex flex-col gap-5">
        {CATEGORIES.map((cat, i) => (
          <Card
            key={cat.title}
            index={i}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:p-10"
          >
            <div>
              <IconChip tone={cat.tone} className="mb-4">
                {cat.icon}
              </IconChip>
              <h3 className="font-heading text-2xl font-bold text-ink">{cat.title}</h3>
              <p className="mt-2 text-muted">{cat.description}</p>
            </div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {cat.subServices.map((sub, j) => (
                <Reveal
                  as="li"
                  key={sub}
                  delay={stagger(j)}
                  className="rounded-card border border-line bg-paper px-4 py-3 text-sm font-medium text-ink"
                >
                  {sub}
                </Reveal>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
