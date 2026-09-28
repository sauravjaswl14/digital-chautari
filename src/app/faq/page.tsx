import type { Metadata } from "next";
import ClosingCTA from "@/components/shared/ClosingCTA";
import GradientText from "@/components/shared/GradientText";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import Section from "@/components/shared/Section";
import { stagger } from "@/lib/motion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about working with Digital Chautari.",
};

interface Faq {
  question: string;
  answer: string;
}

const FAQS: Faq[] = [
  {
    question: "What does Digital Chautari do?",
    answer:
      "We're a creative technology company in Kathmandu offering digital marketing, content creation, and software development — including our own health-tech product, Physio@Home.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Our monthly plans start at Rs 15,000 (Starter) and Rs 45,000 (Professional). Larger or software-heavy engagements are quoted as Enterprise, based on scope.",
  },
  {
    question: "How quickly will you get back to me?",
    answer:
      "Emails get a reply within 24 hours, and proposals follow in 2–3 days. If it's urgent, tell us and we'll respond the same day.",
  },
  {
    question: "Do you work with clients outside Kathmandu?",
    answer:
      "Yes. We work with clients across Nepal and deliver remotely to clients elsewhere.",
  },
  {
    question: "What is Physio@Home?",
    answer:
      "It's our booking and care platform that connects patients with physiotherapists for home visits, with a dashboard for partner clinics.",
  },
  {
    question: "Can you handle marketing, content, and software together?",
    answer:
      "That's the point of the studio — one team, one project manager, and one plan across campaigns, content, and code.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="❓ FAQ"
        title={
          <>
            Quick answers to <GradientText>common questions</GradientText>
          </>
        }
        lede="Can't find what you're looking for? Reach out and we'll help."
      />

      <Section>
        <div className="mx-auto flex max-w-[760px] flex-col gap-4">
          {FAQS.map((faq, i) => (
            <Reveal
              key={faq.question}
              delay={stagger(i)}
              className="card-flat group p-[22px]"
            >
              <details>
                <summary className="cursor-pointer list-none font-heading text-base font-bold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-muted">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCTA
        title="Still have questions?"
        lede="Send us a note and a real person will get back to you."
        primary={{ label: "Get in Touch →", href: "/contact" }}
      />
    </>
  );
}
