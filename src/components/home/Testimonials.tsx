import Card from "@/components/shared/Card";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Digital Chautari rebuilt our booking flow and ran our launch campaign at the same time. Nobody else in Kathmandu offered both.",
    name: "Anisha Rai",
    title: "Operations Lead, CityCare Clinic",
  },
  {
    quote:
      "Our content views tripled within two months of handing our social channels to their studio team.",
    name: "Suman Basnet",
    title: "Founder, Basnet Furnishings",
  },
  {
    quote:
      "They understood our patients as well as our tech stack, which is rare for an agency-engineering hybrid.",
    name: "Dr. Prakash Shrestha",
    title: "Medical Director, Partner Clinic",
  },
];

export default function Testimonials() {
  return (
    <Section>
      <SectionHeader title="What our clients say" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Card as="figure" key={t.name} index={i} className="flex flex-col">
            <div role="img" aria-label="5 out of 5 stars" className="text-gold">
              ★★★★★
            </div>
            <blockquote className="mt-4 flex-1 text-sm text-ink">“{t.quote}”</blockquote>
            <figcaption className="mt-5">
              <div className="text-sm font-semibold text-ink">{t.name}</div>
              <div className="text-xs text-muted">{t.title}</div>
            </figcaption>
          </Card>
        ))}
      </div>
    </Section>
  );
}
