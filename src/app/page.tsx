import BlogTeaser from "@/components/home/BlogTeaser";
import FeatureStrip from "@/components/home/FeatureStrip";
import Hero from "@/components/home/Hero";
import ProcessSteps from "@/components/home/ProcessSteps";
import ProductsTeaser from "@/components/home/ProductsTeaser";
import Sectors from "@/components/home/Sectors";
import StatsBanner from "@/components/home/StatsBanner";
import Testimonials from "@/components/home/Testimonials";
import WhoWeAre from "@/components/home/WhoWeAre";
import ClosingCTA from "@/components/shared/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <WhoWeAre />
      <StatsBanner />
      <ProductsTeaser />
      <Sectors />
      <ProcessSteps />
      <Testimonials />
      <BlogTeaser />
      <ClosingCTA
        title="Ready to build something extraordinary together?"
        lede="Tell us what you're working on and we'll bring the right mix of marketing, content, and engineering to it."
        primary={{ label: "Start a Project →", href: "/contact" }}
        secondary={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
