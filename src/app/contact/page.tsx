import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactSidebar from "@/components/contact/ContactSidebar";
import DirectLines from "@/components/contact/DirectLines";
import GradientText from "@/components/shared/GradientText";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import Section from "@/components/shared/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Digital Chautari for marketing, content, or software development work.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="💬 Get in touch"
        title={
          <>
            Let&apos;s start a <GradientText>conversation</GradientText>
          </>
        }
        lede="Whether you know exactly what you need or just have a rough idea, we're happy to talk it through."
      />
      <ContactInfoCards />
      <DirectLines />

      <Section>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="card-flat p-5.5 md:p-8">
            <h2 className="mb-6 font-heading text-xl font-bold text-ink">Send us a message</h2>
            <ContactForm />
          </Reveal>
          <ContactSidebar />
        </div>
      </Section>
    </>
  );
}
