import Reveal from "@/components/shared/Reveal";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/cn";
import { stagger } from "@/lib/motion";

interface Milestone {
  year: string;
  title: string;
  body: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "2025",
    title: "The Idea",
    body: "A small group of freelancers decide to stop pitching separately and start pitching together.",
  },
  {
    year: "2025",
    title: "First Products",
    body: "Eco Creative Marketing Agency and One Content Creation Studio launch within months of each other.",
  },
  {
    year: "2026",
    title: "Health-Tech Entry",
    body: "Physio@Home goes into development, bringing our first software product into the mix.",
  },
  {
    year: "2026",
    title: "Company Registration",
    body: "Digital Chautari formally registers, turning the studio into a company built to last.",
  },
];

export default function Roadmap() {
  return (
    <Section tone="dark">
      <SectionHeader tone="dark" eyebrow="Our roadmap" title="How we got here" />

      {/* Centered vertical line on desktop, left-aligned on mobile */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-4 top-0 w-px bg-navy-border md:left-1/2"
        />

        <ol className="flex flex-col gap-8">
          {MILESTONES.map((m, i) => {
            const onRight = i % 2 === 1;
            return (
              /* The <li> reveals (with its dot); the inner card keeps its own
                 hover transform, so entrance and hover never fight. */
              <Reveal
                as="li"
                key={m.title}
                delay={stagger(i)}
                className="relative pl-12 md:grid md:grid-cols-2 md:gap-x-16 md:pl-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-7 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-leaf ring-4 ring-navy md:left-1/2"
                />

                <div
                  className={cn(
                    "card-dark p-[22px]",
                    onRight ? "md:col-start-2" : "md:col-start-1 md:text-right",
                  )}
                >
                  <span className="inline-block rounded-pill bg-gold px-3 py-1 text-xs font-semibold text-ink">
                    {m.year}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold">{m.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{m.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
