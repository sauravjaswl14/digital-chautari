# Digital Chautari — Next.js + TypeScript

Full site from the frontend assignment brief: **Home, Services, Products, About, Contact** (plus a small **FAQ** page, because the Contact page links to it).

| | |
|---|---|
| Framework | Next.js 16.3.6 (App Router, Turbopack) |
| UI | React 19.3.0, Tailwind CSS 4.3.3 (CSS-first `@theme`) |
| Language | TypeScript 7.0.2 (`strict`) |
| Fonts | Sora (headings 600/700/800), Inter (body 400/500/600) via `next/font/google` |

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build && npm start
```

Needs Node 20.9+ and an internet connection the first time (Google Fonts).

## Motion & interaction (spec section 6)

| Requirement | How it's done | Where |
|---|---|---|
| Page switches fade + slide in (~0.45s ease) | `template.tsx` re-mounts on every navigation, replaying the animation | `src/app/template.tsx` |
| Section switches fade + slide in | Product tab panel is keyed by the active tab, so each switch replays the animation | `components/products/ProductSwitcher.tsx` |
| Cards / grid items reveal on scroll, staggered ~70ms | `<Reveal>` (IntersectionObserver) + `stagger(index)`; `<Card index={i}>` wraps both | `components/shared/Reveal.tsx`, `Card.tsx`, `lib/motion.ts` |
| Cards lift 4px + shadow on hover; icon chips scale 1.08x | `.card-flat` / `.card-dark` / `.card-lift` | `app/globals.css` |
| Respects `prefers-reduced-motion` | Reveal shows content immediately; CSS zeroes animation/transition durations and disables the hover lift/scale | `Reveal.tsx`, `globals.css` |

### Using `Reveal`

```tsx
// A staggered grid of cards (Card = Reveal + card styling + 70ms * index delay)
{items.map((item, i) => (
  <Card key={item.id} index={i}>…</Card>
))}

// Any other element: pick the tag and set the delay yourself
<Reveal as="li" delay={stagger(i)} className="flex gap-3">…</Reveal>

// Card with edge-to-edge media
<Card as="article" index={i} padded={false} className="overflow-hidden">…</Card>
```

Two details worth knowing:

- **The entrance animation uses `backwards` fill, not `both`.** With `both`, the finished animation keeps holding `transform: translateY(0)` and would silently override the hover lift on every card. (`--animate-fade-slide-in` in `globals.css`.)
- **Don't put a permanent `transform` on the same element as `<Reveal>`.** The featured pricing card is lifted with `md:-translate-y-3` on a plain wrapper *around* the animated card for exactly this reason.

## Structure

```
src/
  app/
    layout.tsx  template.tsx  globals.css  page.tsx (Home)
    services/ products/ about/ contact/ faq/  → page.tsx
    api/contact/route.ts                        → validated POST endpoint
  components/
    layout/   Header (active nav state, hamburger < 761px), Footer, Logo
    shared/   Reveal, Card, Section, Container, SectionHeader, IconChip,
              PageHero, StatBar, ClosingCTA, GradientText
    home/ services/ products/ about/ contact/   one file per page section
  lib/        cn.ts, motion.ts
```

## Design tokens

All in `src/app/globals.css` (`@theme`): brand colors, pastel chip colors, radius scale (chip 9px / card 12px / pill 18px), `max-w-content` = 1120px, and `md:` = **761px** so "mobile" is ≤ 760px as the spec says. Rotate the pastel chips with `toneAt(index)` from `IconChip`.

## Things to replace before shipping

- Testimonials, blog posts, team-role copy, department emails, phone number and FAQ answers are **placeholder content** written to match the brief's structure.
- `/api/contact` validates and `console.log`s the submission. Wire it to an email provider or CRM.
- Footer "Legal" links point to `#` (no legal pages in the brief).
