"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import IconChip, { type Tone } from "@/components/shared/IconChip";
import Reveal from "@/components/shared/Reveal";
import Section from "@/components/shared/Section";
import { cn } from "@/lib/cn";
import { FileVideoCamera, Sprout, Stethoscope } from "lucide-react";

interface Product {
  tab: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  cta: string;
  preview: {
    icon: ReactNode;
    tone: Tone;
    label: string;
    lines: string[];
  };
}

const PRODUCTS: Product[] = [
  {
    tab: "Eco Creative Marketing Agency",
    category: "Marketing Agency",
    title: "Eco Creative Marketing Agency",
    description:
      "A sustainability-minded marketing agency helping businesses across Nepal grow with campaigns that respect their budget and their values.",
    tags: ["Brand Strategy", "Paid Media", "Social Content"],
    cta: "Work with Eco Creative →",
    preview: {
      icon: <Sprout />,
      tone: "mint",
      label: "Campaign Dashboard",
      lines: ["Reach: 240,000", "Engagement rate: 6.8%", "Active campaigns: 5"],
    },
  },
  {
    tab: "One Content Creation Studio",
    category: "Content Studio",
    title: "One Content Creation Studio",
    description:
      "An in-house production studio delivering video, photo, and social content on tight timelines for fast-moving brands.",
    tags: ["Video Production", "Photography", "Social Editing"],
    cta: "Book the Studio →",
    preview: {
      icon: <FileVideoCamera />,
      tone: "gold",
      label: "Shoot Schedule",
      lines: ["This week: 4 shoots", "Turnaround: 48 hrs", "Formats: Reels, YouTube, Print"],
    },
  },
  {
    tab: "Physio@Home",
    category: "Health-Tech",
    title: "Physio@Home",
    description:
      "A booking and care platform connecting patients with physiotherapists for home visits, built for clinics across Kathmandu.",
    tags: ["Patient Booking", "Clinic Dashboard", "Home Visits"],
    cta: "Explore Physio@Home →",
    preview: {
      icon: <Stethoscope />,
      tone: "teal",
      label: "Booking Overview",
      lines: ["Today's visits: 12", "Avg. response time: 9 min", "Partner clinics: 6"],
    },
  },
];

export default function ProductSwitcher() {
  const [active, setActive] = useState(0);
  const product = PRODUCTS[active];

  return (
    <Section>
      <Reveal role="group" aria-label="Choose a product" className="flex flex-wrap gap-3">
        {PRODUCTS.map((p, i) => (
          <button
            key={p.tab}
            type="button"
            aria-pressed={i === active}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-pill border px-5 py-2 text-sm transition-colors",
              i === active
                ? "border-teal bg-teal font-semibold text-white"
                : "border-line bg-white font-medium text-ink hover:border-teal",
            )}
          >
            {p.tab}
          </button>
        ))}
      </Reveal>


      <div
        key={active}
        aria-live="polite"
        className="animate-fade-slide-in card-flat mt-8 grid grid-cols-1 gap-10 p-5.5 md:grid-cols-2 md:items-center md:p-10"
      >
        <div>
          <span className="text-xs font-semibold text-teal">{product.category}</span>
          <h2 className="mt-1 font-heading text-2xl font-bold text-ink md:text-3xl">{product.title}</h2>
          <p className="mt-3 text-muted">{product.description}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-pill bg-chip-mint px-3 py-1 text-xs font-semibold text-teal-dark"
              >
                {tag}
              </li>
            ))}
          </ul>

          <Link href="/contact" className="btn-primary mt-8">
            {product.cta}
          </Link>
        </div>

        {/* Mock UI preview */}
        <div className="rounded-card border border-line bg-paper p-6">
          <div className="flex items-center gap-3">
            <IconChip tone={product.preview.tone}>{product.preview.icon}</IconChip>
            <span className="font-heading text-sm font-bold text-ink">{product.preview.label}</span>
          </div>

          <ul className="mt-5 flex flex-col gap-3">
            {product.preview.lines.map((line) => (
              <li key={line} className="rounded-card border border-line bg-white px-4 py-3 text-sm text-ink">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
