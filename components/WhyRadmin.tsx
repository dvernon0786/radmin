"use client";

const DIFFERENTIATORS = [
  {
    title: "Data sovereignty before it was a trend",
    body: "We were working on data sovereignty issues before they became a political priority in Europe. We've seen open-source initiatives succeed at institutional scale, and we've contributed to the codebases that make them possible.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2L3 6v5c0 4.42 3.03 8.57 7 9.93C14.97 19.57 18 15.42 18 11V6l-7-4z" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" strokeLinejoin="round" /><path d="M7 10l2 2 4-4" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>),
  },
  {
    title: "Experience on both sides of the fence",
    body: "We've worked inside large proprietary tech companies and deep in the open-source world. We know what Big Tech actually does with your data — and we know how to build alternatives that work just as well.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="7" cy="10" r="5" stroke="var(--red)" strokeWidth="1.5" fill="var(--red-light)" /><circle cx="13" cy="10" r="5" stroke="var(--red)" strokeWidth="1.5" fill="var(--red-light)" opacity="0.7" /></svg>),
  },
  {
    title: "We teach you to need us less",
    body: "Most vendors want you dependent. We offer training so your team can take over routine tasks and reduce subscription costs. That's not a sales pitch — it's how we think institutions should be served.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 6h14v10a1 1 0 01-1 1H4a1 1 0 01-1-1V6z" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" /><path d="M1 6h18M7 6V4a1 1 0 011-1h4a1 1 0 011 1v2" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" /><path d="M10 10v4M8 12h4" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" /></svg>),
  },
  {
    title: "Human support, always",
    body: "No ticket queues routing to offshore teams. When you have a problem, you talk to the people who built and manage your infrastructure. Backups, monitoring, patches, and support are included in every plan.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 12a8 8 0 1116 0v1a2 2 0 01-2 2h-1" stroke="var(--red)" strokeWidth="1.5" fill="none" /><path d="M4 12a2 2 0 00-2 2v1a2 2 0 002 2h1" stroke="var(--red)" strokeWidth="1.5" fill="none" /><circle cx="12" cy="12" r="2" fill="var(--red)" /></svg>),
  },
];

export default function WhyRadmin() {
  return (
    <section id="why-radmin" style={{ background: "var(--navy)", padding: "112px 0", position: "relative", overflow: "hidden" }} aria-labelledby="why-radmin-heading">
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: -200, left: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,0,29,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="why-grid">
          <div style={{ position: "sticky", top: 100 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "var(--red)", letterSpacing: "0.12em", textTransform: "uppercase" as const, fontFamily: "var(--font-display)" }}>Why Radmin</span>
            <h2 id="why-radmin-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.04em", margin: "12px 0 24px", color: "#fff", lineHeight: 1.05 }}>
              We&apos;ve been on<br />the frontier of<br /><span style={{ color: "var(--red)" }}>this problem</span><br />for years.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, fontFamily: "var(--font-sans)", maxWidth: 360 }}>
              Any vendor can install Nextcloud. We bring years of open-source contribution, institutional knowledge, and a genuine commitment to the mission — not just the margin.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary">Get in touch →</a>
              <a href="#services" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.8)", padding: "13px 24px", borderRadius: "var(--radius-md)", fontSize: 15, fontWeight: 500, fontFamily: "var(--font-sans)", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)", transition: "background var(--transition-fast)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              >Our services</a>
            </div>
            <div style={{ marginTop: 48, paddingTop: 36, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", gap: 36 }}>
              {[{ val: "10+", label: "years open-source experience" }, { val: "100%", label: "of clients retain us after year one" }].map((m) => (
                <div key={m.label}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800, color: "var(--red)", letterSpacing: "-0.04em", lineHeight: 1 }}>{m.val}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-sans)", marginTop: 4, maxWidth: 120, lineHeight: 1.4 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {DIFFERENTIATORS.map((d, i) => (
              <div key={d.title} style={{ padding: "32px 0", borderBottom: i < DIFFERENTIATORS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-sm)", background: "rgba(232,0,29,0.12)", border: "1px solid rgba(232,0,29,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{d.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#fff", margin: "0 0 10px", letterSpacing: "-0.02em" }}>{d.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: 0, fontFamily: "var(--font-sans)" }}>{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .why-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
