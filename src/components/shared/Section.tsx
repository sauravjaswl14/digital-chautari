import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import Container from "./Container";

interface SectionProps {
  tone?: "light" | "dark";
  /** standard = 64px vertical padding, tight = 48px. */
  spacing?: "standard" | "tight";
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({
  tone = "light",
  spacing = "standard",
  id,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        spacing === "tight" ? "py-12" : "py-16",
        tone === "dark" && "bg-navy text-white",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
