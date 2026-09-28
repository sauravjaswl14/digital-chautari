import type { Metadata } from "next";
import ClosingCTA from "@/components/shared/ClosingCTA";
import GradientText from "@/components/shared/GradientText";
import PageHero from "@/components/shared/PageHero";
import Industries from "@/components/services/Industries";
import Pricing from "@/components/services/Pricing";
import ServiceCategories from "@/components/services/ServiceCategories";
import WhyWorkWithUs from "@/components/services/WhyWorkWithUs";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital marketing, content creation, and software development services from Digital Chautari.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="💼 What we do"
        title={
          <>
            Services that drive <GradientText>growth</GradientText>
          </>
        }
        lede="Marketing, content, and engineering under one roof, so every part of your growth plan moves together instead of in silos."
      />
      <ServiceCategories />
      <Pricing />
      <Industries />
      <WhyWorkWithUs />
      <ClosingCTA
        title="Let's find the right service for you"
        lede="Tell us what you're trying to solve and we'll recommend the right mix of services."
        primary={{ label: "Book a Consultation →", href: "/contact" }}
      />
    </>
  );
}
