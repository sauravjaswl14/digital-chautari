"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;


export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string): boolean =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-[22px] py-3 md:grid md:grid-cols-[1fr_auto_1fr] md:px-10">
        <Logo showTagline className="md:justify-self-start" />

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "border-b-2 py-1 text-sm font-medium transition-colors hover:text-teal",
                isActive(link.href)
                  ? "border-teal text-teal"
                  : "border-transparent text-ink",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-primary hidden md:inline-flex md:justify-self-end">
          Contact Us
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <path d="M3 3l12 12M15 3L3 15" />
            ) : (
              <path d="M2 4.5h14M2 9h14M2 13.5h14" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="animate-fade-slide-in border-t border-line bg-white px-[22px] py-4 md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium",
                  isActive(link.href) ? "bg-chip-teal text-teal-dark" : "text-ink",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
