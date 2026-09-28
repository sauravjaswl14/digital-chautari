import type { Metadata } from "next";
import MissionVision from "@/components/about/MissionVision";
import QualityTrust from "@/components/about/QualityTrust";
import Roadmap from "@/components/about/Roadmap";
import StoryBlock from "@/components/about/StoryBlock";
import TeamRoles from "@/components/about/TeamRoles";
import Values from "@/components/about/Values";
import ClosingCTA from "@/components/shared/ClosingCTA";
import GradientText from "@/components/shared/GradientText";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, mission, values, and team behind Digital Chautari, a creative technology company in Kathmandu, Nepal.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="👋 Who we are"
        title={
          <>
            The people behind <GradientText>Digital Chautari</GradientText>
          </>
        }
        lede="A small team of marketers, creators, and engineers building for Nepal from Kathmandu."
      />
      <StoryBlock />
      <MissionVision />
      <Values />
      <QualityTrust />
      <TeamRoles />
      <Roadmap />
      <ClosingCTA
        title="Want to join our journey?"
        lede="We're always glad to hear from people who want to build something that matters."
        primary={{ label: "Get in Touch →", href: "/contact" }}
      />
    </>
  );
}
