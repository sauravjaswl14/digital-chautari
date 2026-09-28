import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type Tone = "mint" | "teal" | "gold" | "lilac" | "pink";

const TONES: readonly Tone[] = ["mint", "teal", "gold", "lilac", "pink"];

const TONE_CLASS: Record<Tone, string> = {
  mint: "bg-chip-mint",
  teal: "bg-chip-teal",
  gold: "bg-chip-gold",
  lilac: "bg-chip-lilac",
  pink: "bg-chip-pink",
};

/** Rotate through the pastel chip colors for repeating cards. */
export const toneAt = (index: number): Tone => TONES[index % TONES.length];

interface IconChipProps {
  tone: Tone;
  children: ReactNode;
  className?: string;
}

/** Small rounded pastel square behind an emoji/icon. Scales on card hover. */
export default function IconChip({ tone, children, className }: IconChipProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "icon-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-chip text-xl",
        TONE_CLASS[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
