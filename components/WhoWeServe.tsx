"use client";
import Link from "next/link";

const CLIENTS = [
  {
    type: "Municipal governments",
    problem: "Public data handled by private companies with unclear data practices and no local accountability.",
    solution: "On-premise or hosted tools with full audit trails, data residency control, and a provider who picks up the phone.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="2" y="14" width="28" height="16" rx="2" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
        <path d="M10 14V10a6 6 0 0112 0v4" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="12" y="18" width="8" height="6" rx="1" fill="var(--red)" opacity="0.6" />
        <path d="M16 4v3M8 7l2 2M24 7l-2 2" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    type: "NGOs & non-profits",
    problem: "Free tiers that disappear, price hikes that blow budgets, and donor data stored in data centres you don't control.",
    solution: "Predictable subscription pricing, data you actually own, and tools that don't require a full IT department.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 28C16 28 5 21 5 12a7 7 0 0111-5.74A7 7 0 0127 12c0 9-11 16-11 16z" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
        <path d="M12 14l2 2 5-5" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    type: "Organisations in transition",
    problem: "Stuck on Google Workspace or Microsoft 365 but unsure how to move, what to move to, or what it will cost.",
    solution: "We assess your needs, build a migration plan, handle the transition, and train your team to take it from there.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="var(--red)" strokeWidth="1.5" fill="var(--red-light)" />
        <path d="M10 16h12M18 12l4 4-4 4" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" style={{ background: "var(--surface)", padding: "112px 0", borderTop: "1px solid var(--border)" }} aria-labelledby="who-we-serve-heading">
      <div className="container">
        <div style={{ marginBottom: 64, maxWidth: 600 }}>
          <span className="section-label">Who we serve</span>
          <h2 id="who-we-serve-heading" className="section-title" style={{ marginTop: 12 }}>
            Built for institutions that<br />can&apos;t afford to get it wrong.
          </h2>
          <p style={{ marginTop: 18, fontSize: 17, color: "var(--muted)", lineHeight: 1.7, fontFamily: "var(--font-sans)" }}>
            We work with organisations where data isn&apos;t just an asset — it&apos;s a trust, a responsibility, and sometimes a legal obligation.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }} role="list">
          {CLIENTS.map((client) => (
            <article
              key={client.type}
              role="listitem"
              style={{ background: "#fff", border: "1.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "36px 40px", display: "grid", gridTemplateColumns: "auto 1fr 1fr", gap: 36, alignItems: "start", transition: "box-shadow var(--transition-base), border-color var(--transition-base)" }}
              className="client-row"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
            >
              <div style={{ width: 60, height: 60, borderRadius: "var(--radius-md)", background: "var(--red-light)", border: "1px solid rgba(232,0,29,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {client.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, margin: "0 0 14px", color: "var(--foreground)", letterSpacing: "-0.02em" }}>{client.type}</h3>
                <p style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" as const, fontFamily: "var(--font-display)", marginBottom: 8 }}>The challenge</p>
                <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-sans)" }}>{client.problem}</p>
              </div>
              <div style={{ borderLeft: "3px solid var(--red)", paddingLeft: 28 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "var(--red)", letterSpacing: "0.1em", textTransform: "uppercase" as const, fontFamily: "var(--font-display)", marginBottom: 8 }}>What Radmin does</p>
                <p style={{ fontSize: 15, color: "var(--foreground)", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-sans)" }}>{client.solution}</p>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: "center" as const }}>
          <p style={{ fontSize: 16, color: "var(--muted)", fontFamily: "var(--font-sans)", marginBottom: 20 }}>Not sure if Radmin is the right fit for your organisation?</p>
          <Link href="/contact" className="btn-primary">Let&apos;s find out together →</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .client-row { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
