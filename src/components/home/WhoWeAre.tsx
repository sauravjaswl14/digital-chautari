import Link from "next/link";
import Card from "@/components/shared/Card";
import IconChip, { toneAt } from "@/components/shared/IconChip";
import Reveal from "@/components/shared/Reveal";
import Section from "@/components/shared/Section";
import { stagger } from "@/lib/motion";

interface Teaser {
  icon: string;
  title: string;
  body: string;
}

const CHECKLIST: string[] = [
  "Creative Strategy",
  "Brand Storytelling",
  "Full-Stack Engineering",
  "Health-Tech Expertise",
];

const TEASERS: Teaser[] = [
  { icon: "📣", title: "Digital Marketing", body: "SEO, social, and paid campaigns that convert." },
  { icon: "🎬", title: "Content Creation", body: "Video, photo, and copy built to be shared." },
  { icon: "💻", title: "Software Development", body: "Web and mobile products that scale." },
  { icon: "🖌️", title: "Branding & Design", body: "Identities that people remember." },
];

export default function WhoWeAre() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold text-ink md:text-3xl">
              A Chautari where ideas meet execution
            </h2>
            <p className="mt-4 text-muted">
              A chautari is a resting place under a shared tree — somewhere travelers stop, talk,
              and trade ideas before moving on. We built our studio in that spirit: a place where
              marketers, designers, and engineers sit at the same table instead of working in silos.
            </p>
            <p className="mt-4 text-muted">
              That mix is why our clients keep us for the long run. A hospital network can brief us
              on a campaign and a patient app in the same meeting, and leave with both moving.
            </p>
          </Reveal>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CHECKLIST.map((item, i) => (
              <Reveal as="li" key={item} delay={stagger(i)} className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-chip-mint text-sm text-teal"
                >
                  ✓
                </span>
                <span className="text-sm font-medium text-ink">{item}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-8">
            <Link href="/about" className="btn-ghost">
              Meet the Team →
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {TEASERS.map((t, i) => (
            <Card key={t.title} index={i}>
              <IconChip tone={toneAt(i + 1)} className="mb-4">
                {t.icon}
              </IconChip>
              <h3 className="font-heading text-base font-bold text-ink">{t.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{t.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
