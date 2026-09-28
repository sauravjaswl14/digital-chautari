import Link from "next/link";
import Reveal from "./Reveal";
import Section from "./Section";

interface CtaLink {
  label: string;
  href: string;
}

interface ClosingCTAProps {
  title: string;
  lede?: string;
  primary: CtaLink;
  secondary?: CtaLink;
}

export default function ClosingCTA({ title, lede, primary, secondary }: ClosingCTAProps) {
  return (
    <Section>
      <Reveal
        className="rounded-card px-8 py-14 text-center text-white md:px-16"
        style={{ background: "linear-gradient(120deg, #0F9488 0%, #1E6FBF 100%)" }}
      >
        <h2 className="font-heading text-2xl font-extrabold md:text-3xl">{title}</h2>
        {lede && <p className="mx-auto mt-3 max-w-xl text-white/90">{lede}</p>}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={primary.href}
            className="inline-flex items-center rounded-lg bg-white px-6 py-3.25 text-[15px] font-semibold text-teal-dark transition-colors hover:bg-white/90"
          >
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex items-center rounded-lg border border-white/50 px-6 py-3.25 text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
