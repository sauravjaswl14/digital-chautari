import Card from "@/components/shared/Card";
import IconChip from "@/components/shared/IconChip";
import Section from "@/components/shared/Section";

export default function MissionVision() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Card index={0} className="md:p-10">
          <IconChip tone="teal" className="mb-4">
            🎯
          </IconChip>
          <h3 className="font-heading text-xl font-bold text-ink">Our Mission</h3>
          <p className="mt-3 text-muted">
            To give Nepali businesses and health providers access to the same caliber of marketing,
            content, and software work usually reserved for much larger budgets.
          </p>
        </Card>

        <Card index={1} className="md:p-10">
          <IconChip tone="gold" className="mb-4">
            🔭
          </IconChip>
          <h3 className="font-heading text-xl font-bold text-ink">Our Vision</h3>
          <p className="mt-3 text-muted">
            A Kathmandu-based studio recognized across South Asia for building products and
            campaigns that outlast the trends they launched on.
          </p>
        </Card>
      </div>
    </Section>
  );
}
