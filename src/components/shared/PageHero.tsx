import type { ReactNode } from "react";
import Container from "./Container";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  /** Extra content under the lede (buttons, stat bar...). */
  children?: ReactNode;
}


export default function PageHero({ eyebrow, title, lede, children }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden pb-12 pt-21"
      style={{ background: "linear-gradient(180deg, #E7F5EA 0%, #FBFBF9 75%)" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-105 w-105 rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(15,148,136,0.35), rgba(224,169,48,0.25) 60%, transparent 75%)",
        }}
      />

      <Container className="relative">
        {eyebrow && (
          <span className="inline-flex items-center rounded-pill border border-line bg-white/80 px-4 py-1.5 text-sm font-medium text-ink">
            {eyebrow}
          </span>
        )}

        <h1 className="mt-6 max-w-180 font-heading text-4xl font-extrabold leading-tight text-ink md:text-5xl">
          {title}
        </h1>

        {lede && <p className="mt-5 max-w-165 text-lg text-muted">{lede}</p>}

        {children}
      </Container>
    </section>
  );
}
