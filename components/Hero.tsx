"use client";
import Link from "next/link";

const STATS = [
  { stat: "100%", label: "Open-source stack" },
  { stat: "0", label: "Third-party data access" },
  { stat: "3", label: "Flexible service tiers" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 68, background: "var(--background)", position: "relative", overflow: "hidden" }}
      aria-label="Hero section"
    >
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.6, pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: -120, right: -120, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,0,29,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1, padding: "80px 24px 100px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 100, padding: "6px 14px 6px 10px", marginBottom: 36 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--red)", boxShadow: "0 0 0 3px var(--red-light)" }} />
          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--muted)", fontFamily: "var(--font-sans)", letterSpacing: "0.01em" }}>
            Managed open-source tools for institutions
          </span>
        </div>

        <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
          <div aria-hidden="true" style={{ width: 4, minHeight: 180, background: "linear-gradient(to bottom, var(--red), rgba(232,0,29,0.2))", borderRadius: 4, flexShrink: 0, marginTop: 4 }} />
          <div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6.5vw, 84px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.04em", color: "var(--foreground)", margin: 0 }}>
              Your data stays{" "}
              <span style={{ color: "var(--red)" }}>yours.</span>
            </h1>

            <p style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "var(--muted)", lineHeight: 1.7, maxWidth: 560, marginTop: 28, fontFamily: "var(--font-sans)", fontWeight: 400 }}>
              Radmin gives NGOs, non-profits, and municipal governments the collaboration tools they need — file sharing, password management, calendars — without handing their data to anyone else. Fully managed. Human support. Your infrastructure.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: "15px 30px" }}>
                Talk to us
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/services" className="btn-secondary" style={{ fontSize: 16, padding: "15px 30px" }}>
                See what we offer
              </Link>
            </div>

            <p style={{ marginTop: 24, fontSize: 13, color: "var(--muted)", fontFamily: "var(--font-sans)" }}>
              Trusted by municipalities, NGOs, and civil society organisations
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: 0, marginTop: 72, paddingTop: 40, borderTop: "1px solid var(--border)", flexWrap: "wrap" }} role="list" aria-label="Key statistics">
          {STATS.map((item, i) => (
            <div
              key={item.label}
              role="listitem"
              style={{ display: "flex", alignItems: "baseline", gap: 12, paddingRight: 48, marginBottom: 16, borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none", marginRight: i < STATS.length - 1 ? 48 : 0 }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "var(--red)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                {item.stat}
              </span>
              <span style={{ fontSize: 13, color: "var(--muted)", fontFamily: "var(--font-sans)", maxWidth: 130, lineHeight: 1.4 }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to bottom, transparent, var(--surface))", pointerEvents: "none" }} />
    </section>
  );
}
