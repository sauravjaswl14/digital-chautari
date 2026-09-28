import Card from "@/components/shared/Card";
import IconChip, { toneAt } from "@/components/shared/IconChip";
import Section from "@/components/shared/Section";

interface InfoItem {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

const INFO: InfoItem[] = [
  { icon: "📍", label: "Address", value: "Kathmandu, Nepal" },
  { icon: "✉️", label: "Email", value: "hello@digitalchautari.com", href: "mailto:hello@digitalchautari.com" },
  { icon: "📞", label: "Phone", value: "+977 1-234-5678", href: "tel:+97712345678" },
  { icon: "🕐", label: "Business Hours", value: "Sun–Fri, 10:00 AM – 6:00 PM" },
];

export default function ContactInfoCards() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {INFO.map((item, i) => (
          <Card key={item.label} index={i}>
            <IconChip tone={toneAt(i)} className="mb-4">
              {item.icon}
            </IconChip>
            <h3 className="font-heading text-sm font-bold text-ink">{item.label}</h3>
            {item.href ? (
              <a href={item.href} className="mt-1 block wrap-break-word text-sm text-muted hover:text-teal">
                {item.value}
              </a>
            ) : (
              <p className="mt-1 text-sm text-muted">{item.value}</p>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
