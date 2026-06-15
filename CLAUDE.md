@AGENTS.md

# Radmin — Project Notes for Claude

## Project
Marketing website for Radmin (radmin.live) — a managed open-source IT services company
serving NGOs, non-profits, and municipal governments.

## Stack
- **Framework:** Next.js 16.2.9 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + CSS custom properties (inline styles)
- **UI libs:** Radix UI, Lucide React, class-variance-authority
- **Fonts:** Plus Jakarta Sans, Space Grotesk (Google Fonts)

## Structure
```
/home/dghost/radmin/
├── app/
│   ├── layout.tsx            # Root layout — renders Navbar + Footer around all pages
│   ├── page.tsx              # Home page (/)
│   ├── globals.css           # Design system: CSS vars, utility classes, reset
│   ├── about/page.tsx        # /about — Mission, WhyRadmin, Values, Team
│   ├── case-studies/page.tsx # /case-studies — Full case studies + Testimonials
│   ├── contact/page.tsx      # /contact — Standalone contact form
│   ├── pricing/page.tsx      # /pricing — Tier cards, feature bar, FAQ accordion
│   └── services/page.tsx     # /services — Service overview + expandable deep-dives
├── components/
│   ├── Navbar.tsx       # Fixed nav, pathname-based active highlight, mobile drawer
│   ├── Hero.tsx         # Full-height hero with stats bar
│   ├── Services.tsx     # Nextcloud, Vaultwarden, Custom deployment cards
│   ├── HowItWorks.tsx   # 3 service tiers (hosted / self-hosted / consulting)
│   ├── WhoWeServe.tsx   # Client segments: govts, NGOs, orgs in transition
│   ├── WhyRadmin.tsx    # Dark section, sticky left panel, differentiators
│   ├── Testimonials.tsx # 3 testimonial cards with star ratings
│   ├── Contact.tsx      # Contact form (mailto fallback) + contact info
│   └── Footer.tsx       # Nav links, legal links, brand
├── lib/
│   ├── services-data.ts      # SERVICES array (name, features, useCases, longDescription)
│   ├── tiers-data.ts         # TIERS, INCLUDED, PRICING_FAQ arrays
│   └── testimonials-data.ts  # TESTIMONIALS array (with challenge, solution, metrics)
└── public/
```

## Routing
- All pages share Navbar + Footer via `app/layout.tsx` — do NOT add them inside page files
- Navbar uses `usePathname()` from `next/navigation` for active link detection (not scroll position)
- All internal links use `next/link` `<Link>` — no plain `<a href="#...">` hash anchors
- Nav links: `/services`, `/pricing`, `/about`, `/case-studies` — CTA links to `/contact`

## Design System (globals.css)
- **Primary colour:** `--red: #E8001D`
- **Dark bg:** `--navy: #0F172A`
- **Surface:** `--surface: #F8FAFC`
- **Fonts:** `var(--font-display)` = Space Grotesk, `var(--font-sans)` = Plus Jakarta Sans
- **Utility classes:** `.container`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-ghost-white`, `.section-label`, `.section-title`
- All components use **inline styles with CSS vars** — no Tailwind utility classes in JSX

## Page Hero Pattern
Each inner page uses a narrow hero section (not full-height like the homepage):
```tsx
<section style={{ background: "var(--surface)", padding: "120px 0 64px", borderBottom: "1px solid var(--border)" }}>
  <div className="container">
    <span className="section-label">Label</span>
    <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.04em", margin: "12px 0 16px", color: "var(--foreground)", lineHeight: 1.05 }}>Heading</h1>
    <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.7, fontFamily: "var(--font-sans)", maxWidth: 560, margin: 0 }}>Subheading</p>
  </div>
</section>
```

## Dev Commands
```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Contact
- Email: ammar@radmin.live
- Domain: radmin.live
- GitHub: https://github.com/dvernon0786/radmin
