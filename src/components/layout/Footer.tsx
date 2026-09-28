import Link from "next/link";
import Container from "@/components/shared/Container";
import Logo from "./Logo";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const COLUMNS: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Digital Marketing", href: "/services" },
      { label: "Content Creation", href: "/services" },
      { label: "Software Development", href: "/services" },
      { label: "Pricing", href: "/services" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

/** Navy footer: brand blurb + Company / Services / Legal columns. */
export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo inverted />
            <p className="mt-4 max-w-xs text-sm text-white/60">
              A creative technology company in Kathmandu, Nepal, building digital
              marketing, content, and health-tech software that connects ideas to
              real-world impact.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="mb-4 font-heading text-sm font-bold text-gold">{col.title}</h2>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-navy-border pt-6 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} Digital Chautari. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
