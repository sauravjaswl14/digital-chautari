import Link from "next/link";
import GradientText from "@/components/shared/GradientText";
import PageHero from "@/components/shared/PageHero";
import StatBar, { type StatItem } from "@/components/shared/StatBar";

const STATS: StatItem[] = [
  { icon: "📦", value: "3", label: "Products" },
  { icon: "👥", value: "6+", label: "Team Members" },
  { icon: "💯", value: "100%", label: "Commitment" },
];

export default function Hero() {
  return (
    <PageHero
      eyebrow="🚀 Welcome to Digital Chautari"
      title={
        <>
          We build <GradientText>digital bridges</GradientText> between ideas and impact
        </>
      }
      lede="From Kathmandu, we partner with healthcare providers, businesses, and creators across Nepal — blending marketing, content, and software so good ideas actually reach the people they're for."
    >
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/services" className="btn-primary">
          Explore Services →
        </Link>
        <Link href="/products" className="btn-ghost">
          View Products
        </Link>
      </div>

      <StatBar items={STATS} className="mt-12" />
    </PageHero>
  );
}
