import Link from "next/link";
import Card from "@/components/shared/Card";
import type { Tone } from "@/components/shared/IconChip";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/cn";

interface Post {
  emoji: string;
  tone: Tone;
  tag: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
}

const BLOCK_CLASS: Record<Tone, string> = {
  mint: "bg-chip-mint",
  teal: "bg-chip-teal",
  gold: "bg-chip-gold",
  lilac: "bg-chip-lilac",
  pink: "bg-chip-pink",
};

const POSTS: Post[] = [
  {
    emoji: "🔎",
    tone: "teal",
    tag: "Marketing",
    date: "Sep 12, 2026",
    readTime: "5 min read",
    title: "Why local SEO matters more than ever for Nepali clinics",
    excerpt: "How healthcare providers in Kathmandu are winning patients through search.",
  },
  {
    emoji: "🎬",
    tone: "gold",
    tag: "Content",
    date: "Sep 2, 2026",
    readTime: "4 min read",
    title: "Behind the scenes of a one-day content shoot",
    excerpt: "A look at how our studio plans and shoots a month of social content in a day.",
  },
  {
    emoji: "🩺",
    tone: "lilac",
    tag: "Health-Tech",
    date: "Aug 24, 2026",
    readTime: "6 min read",
    title: "What building Physio@Home taught us about patient trust",
    excerpt: "Lessons from designing a home-visit booking flow for physiotherapy patients.",
  },
];

export default function BlogTeaser() {
  return (
    <Section>
      <SectionHeader title="Latest from our blog" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {POSTS.map((post, i) => (
          <Card as="article" key={post.title} index={i} padded={false} className="overflow-hidden">
            <div
              aria-hidden="true"
              className={cn("flex h-36 w-full items-center justify-center text-4xl", BLOCK_CLASS[post.tone])}
            >
              {post.emoji}
            </div>
            <div className="p-[22px]">
              <span className="text-xs font-semibold text-teal">{post.tag}</span>
              <h3 className="mt-2 font-heading text-base font-bold text-ink">{post.title}</h3>
              <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted">
                <span>
                  {post.date} · {post.readTime}
                </span>
                <Link href="#" className="font-semibold text-teal hover:text-teal-dark">
                  Read more →
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
