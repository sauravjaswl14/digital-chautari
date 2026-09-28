import type { Metadata } from "next";
import ProductSwitcher from "@/components/products/ProductSwitcher";
import SpotlightBanner from "@/components/products/SpotlightBanner";
import GradientText from "@/components/shared/GradientText";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Eco Creative Marketing Agency, One Content Creation Studio, and Physio@Home — the three ventures built by Digital Chautari.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="🚀 Our ventures"
        title={
          <>
            Three ventures, <GradientText>one vision</GradientText>
          </>
        }
        lede="Alongside client work, we build and run our own products — proof that the same team can market, create, and engineer at once."
      />
      <ProductSwitcher />
      <SpotlightBanner />
    </>
  );
}
