import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoProps {
  showTagline?: boolean;
  /** Light text for use on the navy footer. */
  inverted?: boolean;
  className?: string;
}

export default function Logo({ showTagline = false, inverted = false, className }: LogoProps) {
  return (
    <Link href="/" aria-label="Digital Chautari home" className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-teal to-teal-dark font-heading text-sm font-extrabold text-white"
      >
        DC
      </span>
      <span className="flex flex-col leading-tight">
        <span className={cn("font-heading text-base font-bold", inverted ? "text-white" : "text-ink")}>
          Digital Chautari
        </span>
        {showTagline && <span className="text-xs text-muted">Ideas into impact</span>}
      </span>
    </Link>
  );
}
