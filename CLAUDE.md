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
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Home page — assembles all sections
│   └── globals.css      # Design system: CSS vars, utility classes, reset
├── components/
│   ├── Navbar.tsx       # Fixed nav, active-section highlight, mobile drawer
│   ├── Hero.tsx         # Full-height hero with stats bar
│   ├── Services.tsx     # Nextcloud, Vaultwarden, Custom deployment cards
│   ├── HowItWorks.tsx   # 3 service tiers (hosted / self-hosted / consulting)
│   ├── WhoWeServe.tsx   # Client segments: govts, NGOs, orgs in transition
│   ├── WhyRadmin.tsx    # Dark section, sticky left panel, differentiators
│   ├── Testimonials.tsx # 3 testimonial cards with star ratings
│   ├── Contact.tsx      # Contact form (mailto fallback) + contact info
│   └── Footer.tsx       # Nav links, legal links, brand
└── public/
```

## Design System (globals.css)
- **Primary colour:** `--red: #E8001D`
- **Dark bg:** `--navy: #0F172A`
- **Surface:** `--surface: #F8FAFC`
- **Fonts:** `var(--font-display)` = Space Grotesk, `var(--font-sans)` = Plus Jakarta Sans
- **Utility classes:** `.container`, `.btn-primary`, `.btn-secondary`, `.section-label`, `.section-title`

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
