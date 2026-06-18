"use client";
import { useState } from "react";
import Link from "next/link";

const SERVICES = [
  {
    name: "Nextcloud",
    tagline: "Your own Google Drive — without Google.",
    description: "Shared file storage, real-time document editing, team calendars, and contact management — all on infrastructure you control. No data mining. No usage-based pricing surprises. No sudden policy changes.",
    features: ["File sync & sharing", "Collaborative document editing", "Shared calendars & contacts", "Mobile apps for iOS & Android", "Encrypted storage"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4C8.48 4 4 8.48 4 14s4.48 10 10 10 10-4.48 10-10S19.52 4 14 4z" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
        <path d="M10 14a4 4 0 108 0 4 4 0 00-8 0z" fill="var(--red)" />
        <path d="M14 10v-3M14 21v-3M10 14H7M21 14h-3" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    badge: "Most popular",
    accent: true,
  },
  {
    name: "Vaultwarden",
    tagline: "Passwords and secrets — kept secret.",
    description: "A fully self-hosted password manager compatible with all Bitwarden clients. Share credentials securely across your team. Store MFA codes, credit card info, and sensitive notes — none of it ever leaves your servers.",
    features: ["Team password sharing", "MFA & TOTP storage", "Browser extensions", "Zero-knowledge architecture", "Secure notes & card storage"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="6" y="12" width="16" height="12" rx="3" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
        <path d="M10 12V9a4 4 0 018 0v3" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="18" r="2" fill="var(--red)" />
        <path d="M14 20v2" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    badge: null,
    accent: false,
  },
  {
    name: "OpenDesk",
    tagline: "A complete digital workplace — fully open-source.",
    description: "OpenDesk bundles email, calendar, video conferencing, project management, and document collaboration into a single integrated platform. One deployment replaces half a dozen proprietary tools.",
    features: ["Integrated email & calendar", "Video conferencing", "Real-time document collaboration", "Project & task management", "Unified admin dashboard"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="9" height="9" rx="2" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
        <rect x="15" y="4" width="9" height="9" rx="2" fill="var(--red)" />
        <rect x="4" y="15" width="9" height="9" rx="2" fill="var(--red)" />
        <rect x="15" y="15" width="9" height="9" rx="2" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
      </svg>
    ),
    badge: null,
    accent: false,
  },
  {
    name: "Custom deployment",
    tagline: "If it's open-source, we can run it.",
    description: "Nextcloud and Vaultwarden are our flagship tools, but we can deploy almost any open-source application your organisation needs. Any application maintained by Co-op Cloud can be deployed out of the box.",
    features: ["Co-op Cloud app catalogue", "Custom app deployment", "Tool assessment & selection", "Full data migration support", "Ongoing maintenance", "Staff onboarding"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="3" fill="var(--red)" />
        <circle cx="14" cy="14" r="8" stroke="var(--red)" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M14 6V4M14 24v-2M6 14H4M24 14h-2M8.34 8.34L6.93 6.93M21.07 21.07l-1.41-1.41M8.34 19.66l-1.41 1.41M21.07 6.93l-1.41 1.41" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    badge: null,
    accent: false,
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" style={{ background: "var(--surface)", padding: "112px 0", borderTop: "1px solid var(--border)" }} aria-labelledby="services-heading">
      <div className="container">
        <div style={{ marginBottom: 64, maxWidth: 640 }}>
          <span className="section-label">Services</span>
          <h2 id="services-heading" className="section-title" style={{ marginTop: 12 }}>
            Tools your team will actually use.<br />Infrastructure you actually own.
          </h2>
          <p style={{ marginTop: 18, fontSize: 17, color: "var(--muted)", lineHeight: 1.7, fontFamily: "var(--font-sans)" }}>
            We deploy and manage open-source software that replaces Big Tech tools — with full data sovereignty and no vendor lock-in.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} role="list" className="services-grid">
          {SERVICES.map((service, i) => (
            <article
              key={service.name}
              role="listitem"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#fff",
                border: `1.5px solid ${hovered === i ? "var(--border-hover)" : "var(--border)"}`,
                borderRadius: "var(--radius-lg)",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                transition: "border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base)",
                boxShadow: hovered === i ? "var(--shadow-md)" : "var(--shadow-sm)",
                transform: hovered === i ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              {service.accent && <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--red)" }} />}
              {service.badge && (
                <div style={{ position: "absolute", top: 20, right: 20, background: "var(--red-light)", color: "var(--red)", fontSize: 11, fontWeight: 700, fontFamily: "var(--font-display)", padding: "3px 10px", borderRadius: 100, letterSpacing: "0.05em", textTransform: "uppercase" as const }}>
                  {service.badge}
                </div>
              )}
              <div style={{ width: 52, height: 52, borderRadius: "var(--radius-md)", background: "var(--red-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, border: "1px solid rgba(232,0,29,0.12)" }}>
                {service.icon}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, margin: "0 0 6px", color: "var(--foreground)", letterSpacing: "-0.03em" }}>{service.name}</h3>
              <p style={{ fontSize: 13, color: "var(--red)", fontWeight: 600, margin: "0 0 16px", fontFamily: "var(--font-sans)" }}>{service.tagline}</p>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, margin: "0 0 28px", fontFamily: "var(--font-sans)", flex: 1 }}>{service.description}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {service.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--foreground)", fontFamily: "var(--font-sans)" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                      <circle cx="8" cy="8" r="7" fill="var(--red-light)" />
                      <path d="M5 8l2 2 4-4" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 48, padding: "28px 32px", background: "var(--navy)", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
          <div>
            <p style={{ fontSize: 17, fontWeight: 700, color: "#fff", fontFamily: "var(--font-display)", margin: "0 0 4px" }}>Not sure which service fits?</p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-sans)", margin: 0 }}>We&apos;ll help you figure it out — no commitment required.</p>
          </div>
          <Link href="/contact" className="btn-primary">Talk to us →</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
