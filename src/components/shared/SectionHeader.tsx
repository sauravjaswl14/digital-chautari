import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import Reveal from "./Reveal";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
}: SectionHeaderProps) {
  const dark = tone === "dark";

  return (
    <Reveal
      className={cn(
        "mb-10 max-w-180",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block text-xs font-semibold uppercase tracking-wider",
            dark ? "rounded-pill bg-gold/15 px-3 py-1 text-gold" : "text-teal",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-2xl font-extrabold md:text-3xl",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-3", dark ? "text-white/70" : "text-muted")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
