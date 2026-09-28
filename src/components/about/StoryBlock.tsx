import Reveal from "@/components/shared/Reveal";
import Section from "@/components/shared/Section";
import { cn } from "@/lib/cn";
import { stagger } from "@/lib/motion";

type TileTone = "teal" | "navy" | "white" | "gold";

interface Tile {
  value: string;
  label: string;
  tone: TileTone;
}

const TILE_CLASS: Record<TileTone, string> = {
  teal: "bg-teal text-white",
  navy: "bg-navy text-white",
  white: "border border-line bg-white text-ink",
  gold: "bg-gold text-ink",
};

/* Alternating teal / navy / white / gold */
const TILES: Tile[] = [
  { value: "2025", label: "Founded", tone: "teal" },
  { value: "3", label: "Products", tone: "navy" },
  { value: "Kathmandu", label: "HQ", tone: "white" },
  { value: "7+", label: "Team Members", tone: "gold" },
];

export default function StoryBlock() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <h2 className="font-heading text-2xl font-extrabold text-ink md:text-3xl">
            From a chautari to a digital powerhouse
          </h2>
          <p className="mt-4 text-muted">
            Digital Chautari started as a handful of freelancers meeting under the same informal
            arrangement a chautari has always offered travelers: a place to rest, talk, and trade
            ideas. What began as one-off marketing gigs grew into a studio that plans campaigns,
            produces content, and ships software for clients across Nepal.
          </p>
          <p className="mt-4 text-muted">
            Today that same instinct — put the right people at the same table — is why a healthcare
            client can brief us on a campaign and a patient app in the same meeting, and leave with
            both moving.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-5">
          {TILES.map((tile, i) => (
            <Reveal
              key={tile.label}
              delay={stagger(i)}
              className={cn("card-lift rounded-card p-[22px]", TILE_CLASS[tile.tone])}
            >
              <div className="font-heading text-2xl font-extrabold">{tile.value}</div>
              <div className="mt-1 text-sm opacity-80">{tile.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
