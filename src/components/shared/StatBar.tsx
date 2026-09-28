import { cn } from "@/lib/cn";
import { stagger } from "@/lib/motion";
import IconChip, { toneAt } from "./IconChip";
import Reveal from "./Reveal";

export interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface StatBarProps {
  items: StatItem[];
  className?: string;
}

export default function StatBar({ items, className }: StatBarProps) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-card border border-line bg-white md:flex-row",
        className,
      )}
    >
      {items.map((item, i) => (
        <Reveal
          key={item.label}
          delay={stagger(i)}
          className={cn(
            "flex flex-1 items-center gap-4 px-6 py-5",
            i > 0 && "border-t border-line md:border-l md:border-t-0",
          )}
        >
          <IconChip tone={toneAt(i)}>{item.icon}</IconChip>
          <div>
            <div className="font-heading text-2xl font-bold text-ink">{item.value}</div>
            <div className="text-sm text-muted">{item.label}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
