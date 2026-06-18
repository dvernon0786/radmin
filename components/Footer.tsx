"use client";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--navy)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "64px 0 32px" }} aria-label="Site footer">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 48, alignItems: "start", marginBottom: 56 }} className="footer-top">
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 16 }} aria-label="Radmin — back to home">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="7" fill="var(--red)" />
                <rect x="8" y="7" width="4" height="14" rx="2" fill="white" />
                <rect x="14" y="7" width="6" height="6" rx="2" fill="white" />
                <rect x="14" y="15" width="6" height="6" rx="2" fill="white" opacity="0.6" />
              </svg>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "#fff", letterSpacing: "-0.5px" }}>Radmin</span>
            </Link>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-sans)", lineHeight: 1.65, maxWidth: 220 }}>
              Managed open-source tools for institutions that take data sovereignty seriously.
            </p>
          </div>

          <nav aria-label="Footer navigation" style={{ display: "flex", flexWrap: "wrap", gap: "8px 32px", paddingTop: 4 }}>
            {NAV_LINKS.map((l) => (
              <Link key={l.label} href={l.href} style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none", fontFamily: "var(--font-sans)", transition: "color var(--transition-fast)", whiteSpace: "nowrap" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
                {l.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="btn-primary" style={{ fontSize: 14, padding: "11px 20px" }}>Get in touch</Link>
        </div>

        <div aria-hidden="true" style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 28 }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-sans)", margin: 0 }}>
            © {year} Radmin · radmin.live · All rights reserved
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {[{ label: "Privacy policy", href: "#" }, { label: "Terms of service", href: "#" }, { label: "Source code", href: "#", external: true as const }].map((l) => (
              <a key={l.label} href={l.href} {...("external" in l ? { target: "_blank", rel: "noopener noreferrer" } : {})} style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", fontFamily: "var(--font-sans)", transition: "color var(--transition-fast)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) { .footer-top { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
    </footer>
  );
}
