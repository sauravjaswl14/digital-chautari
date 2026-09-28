import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

export default function SpotlightBanner() {
  return (
    <Section tone="dark">
      <SectionHeader
        tone="dark"
        align="center"
        className="mb-0"
        eyebrow="Spotlight"
        title="Physio@Home — healthcare reimagined"
        description="Patients book a physiotherapist the way they'd book a ride — and clinics get a dashboard built for real caseloads, not just appointments."
      />
    </Section>
  );
}
