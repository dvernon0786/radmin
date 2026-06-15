"use client";

const TIERS = [
  {
    number: "01", title: "Hosted subscription", subtitle: "Fastest to start",
    description: "Sign up online, fill out a short form, and you're live. We handle the servers, updates, backups, and security. You manage your users and data. No IT team required.",
    details: ["Self-service onboarding", "Automated backups included", "Security patches handled", "Human support always"],
    cta: "Best for small teams", featured: false,
  },
  {
    number: "02", title: "Self-hosted contract", subtitle: "For compliance-sensitive organisations",
    description: "Your data never leaves your hardware. We negotiate with suppliers, install and configure everything, and provide ongoing support. You get full control with none of the operational burden.",
    details: ["We handle all logistics", "Your hardware, your data", "Compliance-ready setup", "Dedicated support line"],
    cta: "Best for governments & regulated orgs", featured: true,
  },
  {
    number: "03", title: "Consultation & training", subtitle: "Not sure where to start?",
    description: "We assess your organisation's needs, recommend the right tools, and build an implementation plan with projected costs. We also train your team so you can eventually manage it yourselves.",
    details: ["Full needs assessment", "Implementation plan + cost projection", "Hands-on team training", "Ongoing advisory available"],
    cta: "Best for orgs in transition", featured: false,
  },
];

const INCLUDED = ["Backups", "Monitoring", "Security patches", "Human support", "SSL/TLS management"];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: "var(--background)", padding: "112px 0", borderTop: "1px solid var(--border)" }} aria-labelledby="how-it-works-heading">
      <div className="container">
        <div style={{ marginBottom: 64, maxWidth: 600 }}>
          <span className="section-label">How it works</span>
          <h2 id="how-it-works-heading" className="section-title" style={{ marginTop: 12 }}>
            Three ways to work with us.<br />One level of service.
          </h2>
          <p style={{ marginTop: 18, fontSize: 17, color: "var(--muted)", lineHeight: 1.7, fontFamily: "var(--font-sans)" }}>
            Whether you want fully managed hosting or just guidance to get started, we&apos;re here to support the whole journey.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }} role="list">
          {TIERS.map((tier) => (
            <article key={tier.number} role="listitem" style={{ borderRadius: "var(--radius-lg)", padding: "40px 32px", background: tier.featured ? "var(--navy)" : "#fff", border: tier.featured ? "none" : "1.5px solid var(--border)", display: "flex", flexDirection: "column", gap: 0, position: "relative", overflow: "hidden", boxShadow: tier.featured ? "var(--shadow-lg)" : "var(--shadow-sm)" }}>
              {tier.featured && <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--red)" }} />}
              <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, color: "var(--red)", letterSpacing: "0.08em", marginBottom: 20 }}>{tier.number}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, margin: "0 0 5px", color: tier.featured ? "#fff" : "var(--foreground)", letterSpacing: "-0.02em" }}>{tier.title}</h3>
              <p style={{ fontSize: 11, fontWeight: 600, color: tier.featured ? "rgba(255,255,255,0.45)" : "var(--muted)", margin: "0 0 20px", fontFamily: "var(--font-sans)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>{tier.subtitle}</p>
              <p style={{ fontSize: 14, color: tier.featured ? "rgba(255,255,255,0.7)" : "var(--muted)", lineHeight: 1.75, margin: "0 0 28px", fontFamily: "var(--font-sans)", flex: 1 }}>{tier.description}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                {tier.details.map((d) => (
                  <li key={d} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: tier.featured ? "rgba(255,255,255,0.85)" : "var(--foreground)", fontFamily: "var(--font-sans)", lineHeight: 1.5 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                      <circle cx="8" cy="8" r="7" fill={tier.featured ? "rgba(232,0,29,0.2)" : "var(--red-light)"} />
                      <path d="M5 8l2 2 4-4" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
              <div style={{ padding: "10px 14px", background: tier.featured ? "rgba(255,255,255,0.07)" : "var(--surface-2)", borderRadius: "var(--radius-sm)", fontSize: 12, color: tier.featured ? "rgba(255,255,255,0.5)" : "var(--muted)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>{tier.cta}</div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 32, padding: "24px 32px", background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }} role="note">
          <span style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", fontFamily: "var(--font-display)", textTransform: "uppercase" as const, letterSpacing: "0.1em", flexShrink: 0, whiteSpace: "nowrap" }}>Every plan includes</span>
          <div style={{ width: 1, height: 20, background: "var(--border)", flexShrink: 0 }} aria-hidden="true" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {INCLUDED.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "var(--foreground)", fontFamily: "var(--font-sans)" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6.5" stroke="var(--red)" strokeWidth="1" fill="var(--red-light)" />
                  <path d="M4.5 7l2 2 3-4" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
