import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { stagger } from "@/lib/motion";

interface ResponseTime {
  label: string;
  value: string;
}

const RESPONSE_TIMES: ResponseTime[] = [
  { label: "Email", value: "24h" },
  { label: "Proposals", value: "2–3 days" },
  { label: "Urgent", value: "Same day" },
];

/** Right column: map placeholder, dark FAQ callout, response-time list. */
export default function ContactSidebar() {
  return (
    <div className="flex flex-col gap-5">
      <Reveal
        delay={stagger(0)}
        role="img"
        aria-label="Map placeholder showing Kathmandu, Nepal"
        className="card-lift relative flex h-52 items-center justify-center overflow-hidden rounded-card border border-line bg-chip-teal"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,148,136,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(15,148,136,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <span aria-hidden="true" className="text-3xl">
            📍
          </span>
          <span className="text-sm font-semibold text-teal-dark">Kathmandu, Nepal</span>
          <span className="text-xs text-muted">Map placeholder</span>
        </div>
      </Reveal>

      <Reveal delay={stagger(1)} className="card-dark p-[22px]">
        <p className="font-heading text-base font-bold">Need quick answers?</p>
        <Link href="/faq" className="mt-2 inline-block text-sm font-semibold text-gold hover:underline">
          Visit FAQ page →
        </Link>
      </Reveal>

      <Reveal delay={stagger(2)} className="card-flat p-[22px]">
        <h3 className="font-heading text-sm font-bold text-ink">Response Time</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {RESPONSE_TIMES.map((r) => (
            <li key={r.label} className="flex items-center justify-between text-sm">
              <span className="text-muted">{r.label}</span>
              <span className="font-semibold text-ink">{r.value}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
