import Link from "next/link";
import Card from "@/components/shared/Card";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/cn";

interface Tier {
  name: string;
  price: string;
  period?: string;
  featured?: boolean;
  features: string[];
  cta: string;
}

const TIERS: Tier[] = [
  {
    name: "Starter",
    price: "Rs 15,000",
    period: "/mo",
    features: [
      "1 marketing channel",
      "Monthly content calendar",
      "Basic analytics reporting",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "Rs 45,000",
    period: "/mo",
    featured: true,
    features: [
      "3+ marketing channels",
      "Weekly content production",
      "Advanced analytics & reporting",
      "Dedicated project manager",
      "Priority support",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited channels",
      "Custom software development",
      "Dedicated engineering team",
      "SLA-backed support",
    ],
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <Section>
      <SectionHeader
        title="Plans that scale with you"
        description="Straightforward pricing, no surprise line items."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:items-start">
        {TIERS.map((tier, i) => (
          <div key={tier.name} className={cn("relative", tier.featured && "md:-translate-y-3")}>
            {tier.featured && (
              <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-pill bg-gold px-4 py-1 text-xs font-semibold text-ink">
                Most Popular
              </span>
            )}

            <Card index={i} variant={tier.featured ? "dark" : "light"} className="flex flex-col">
              <h3 className="font-heading text-lg font-bold">{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-heading text-3xl font-extrabold">{tier.price}</span>
                {tier.period && (
                  <span className={cn("text-sm", tier.featured ? "text-white/60" : "text-muted")}>
                    {tier.period}
                  </span>
                )}
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm">
                    <span aria-hidden="true" className={cn("mt-0.5", tier.featured ? "text-gold" : "text-teal")}>
                      ✓
                    </span>
                    <span className={tier.featured ? "text-white/80" : "text-ink"}>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={cn(
                  "mt-8",
                  tier.featured
                    ? "inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.25 text-[15px] font-semibold text-ink transition-colors hover:bg-white/90"
                    : "btn-ghost",
                )}
              >
                {tier.cta}
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
