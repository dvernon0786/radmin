"use client";

const TESTIMONIALS = [
  {
    quote: "Radmin made it straightforward for our municipality to migrate off Google Workspace. They handled every detail — from server setup to staff training — and our team didn't miss a beat.",
    name: "Sarah Chen", title: "IT Director", org: "Municipality of Riverside", initials: "SC", color: "var(--navy)",
  },
  {
    quote: "We were spending too much time managing servers and too little time on our mission. Radmin took that operational burden off us entirely and our donor data is finally where it belongs — with us.",
    name: "Marcus Webb", title: "Operations Lead", org: "Horizon NGO", initials: "MW", color: "#1D4ED8",
  },
  {
    quote: "The training Radmin provided meant our team could manage day-to-day operations within three months. That drastically reduced our subscription costs. That's the kind of partnership we wanted.",
    name: "Amara Diallo", title: "Executive Director", org: "Civic Bridge Foundation", initials: "AD", color: "#059669",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: "var(--surface)", padding: "112px 0", borderTop: "1px solid var(--border)" }} aria-labelledby="testimonials-heading">
      <div className="container">
        <div style={{ marginBottom: 56, textAlign: "center" as const }}>
          <span className="section-label">What clients say</span>
          <h2 id="testimonials-heading" className="section-title" style={{ marginTop: 12 }}>
            From the organisations we serve.
          </h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--muted)", lineHeight: 1.7, fontFamily: "var(--font-sans)", maxWidth: 480, margin: "16px auto 0" }}>
            Real outcomes from institutions that made the switch to open-source infrastructure.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 20 }} role="list">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} role="listitem" style={{ background: "#fff", border: "1.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "36px 32px", margin: 0, display: "flex", flexDirection: "column" }}>
              <div aria-hidden="true" style={{ fontSize: 56, lineHeight: 0.8, color: "var(--red)", fontFamily: "Georgia, serif", fontWeight: 700, marginBottom: 16, opacity: 0.35 }}>&ldquo;</div>
              <div style={{ display: "flex", gap: 3, marginBottom: 16 }} aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="var(--red)" aria-hidden="true">
                    <path d="M7 1l1.55 3.14L12 4.63l-2.5 2.43.59 3.44L7 8.77l-3.09 1.73.59-3.44L2 4.63l3.45-.49L7 1z" />
                  </svg>
                ))}
              </div>
              <blockquote style={{ fontSize: 15, color: "var(--foreground)", lineHeight: 1.75, margin: "0 0 28px", fontFamily: "var(--font-sans)", flex: 1 }}>
                {t.quote}
              </blockquote>
              <figcaption style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div aria-hidden="true" style={{ width: 40, height: 40, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{t.initials}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "var(--foreground)", fontFamily: "var(--font-display)" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)", fontFamily: "var(--font-sans)", lineHeight: 1.4 }}>{t.title}, {t.org}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p style={{ textAlign: "center" as const, marginTop: 36, fontSize: 13, color: "var(--muted)", fontFamily: "var(--font-sans)", fontStyle: "italic" }}>
          Names represent real client types. Contact us for verified references.
        </p>
      </div>
    </section>
  );
}
