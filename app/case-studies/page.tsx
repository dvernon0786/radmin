import type { Metadata } from "next";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import { TESTIMONIALS } from "@/lib/testimonials-data";

export const metadata: Metadata = {
  title: "Case Studies — Open-Source Migration Stories | Radmin",
  description:
    "Real outcomes from municipalities, NGOs, and civil society organisations that migrated to open-source infrastructure with Radmin.",
  openGraph: {
    title: "Case Studies — Radmin",
    description: "Real outcomes from institutions that made the switch to open-source infrastructure.",
    url: "https://radmin.live/case-studies",
  },
};

const TYPE_COLORS: Record<string, string> = {
  "Municipal government": "var(--navy)",
  "NGO": "#1D4ED8",
  "Civil society foundation": "#059669",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section style={{ background: "var(--surface)", padding: "120px 0 64px", borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }} aria-label="Page header">
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.5, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label">Case studies</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.04em", margin: "12px 0 16px", color: "var(--foreground)", lineHeight: 1.05 }}>
            Real outcomes from<br />the organisations we serve.
          </h1>
          <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.7, fontFamily: "var(--font-sans)", maxWidth: 560, margin: 0 }}>
            Each migration is different. Here&apos;s how we&apos;ve helped municipalities, NGOs, and civil society foundations take back control of their data.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--surface)", padding: "32px 0", borderBottom: "1px solid var(--border)" }} aria-label="Key metrics">
        <div className="container">
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }} role="list" aria-label="Aggregate statistics">
            {[
              { stat: "3", label: "organisations migrated" },
              { stat: "0", label: "data incidents across all projects" },
              { stat: "100%", label: "client retention after year one" },
              { stat: "40%", label: "average cost reduction" },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                role="listitem"
                style={{ display: "flex", alignItems: "baseline", gap: 12, paddingRight: 48, paddingBottom: 8, borderRight: i < arr.length - 1 ? "1px solid var(--border)" : "none", marginRight: i < arr.length - 1 ? 48 : 0 }}
              >
                <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "var(--red)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                  {item.stat}
                </span>
                <span style={{ fontSize: 13, color: "var(--muted)", fontFamily: "var(--font-sans)", maxWidth: 130, lineHeight: 1.4 }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--background)", padding: "96px 0", borderTop: "1px solid var(--border)" }} aria-label="Case study details">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {TESTIMONIALS.map((t) => (
              <article key={t.name} style={{ background: "#fff", border: "1.5px solid var(--border)", borderRadius: "var(--radius-xl)", overflow: "hidden" }}>
                <div style={{ borderLeft: `4px solid ${TYPE_COLORS[t.orgType] ?? "var(--red)"}`, padding: "40px 40px 40px 36px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="case-study-grid">
                  <div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 100, padding: "4px 12px", marginBottom: 20 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: TYPE_COLORS[t.orgType] ?? "var(--red)" }} aria-hidden="true" />
                      <span style={{ fontSize: 11, fontWeight: 600, color: "var(--muted)", fontFamily: "var(--font-sans)", letterSpacing: "0.05em", textTransform: "uppercase" as const }}>{t.orgType}</span>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, margin: "0 0 4px", color: "var(--foreground)", letterSpacing: "-0.03em" }}>{t.org}</h2>
                    <p style={{ fontSize: 13, color: "var(--muted)", fontFamily: "var(--font-sans)", margin: "0 0 24px" }}>Timeline: {t.timeline}</p>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
                      {t.metrics.map((m) => (
                        <div key={m.label} style={{ padding: "16px", background: "var(--surface)", borderRadius: "var(--radius-md)", border: "1px solid var(--border)" }}>
                          <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "var(--red)", letterSpacing: "-0.04em", lineHeight: 1 }}>{m.value}</div>
                          <div style={{ fontSize: 12, color: "var(--muted)", fontFamily: "var(--font-sans)", marginTop: 4, lineHeight: 1.3 }}>{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <blockquote style={{ margin: 0, padding: "20px 20px", background: "var(--surface)", borderRadius: "var(--radius-md)", borderLeft: "3px solid var(--red)" }}>
                      <p style={{ fontSize: 14, color: "var(--foreground)", lineHeight: 1.7, fontFamily: "var(--font-sans)", margin: "0 0 12px", fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
                      <footer style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 32, height: 32, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11, flexShrink: 0 }}>{t.initials}</div>
                        <div style={{ fontSize: 12, color: "var(--muted)", fontFamily: "var(--font-sans)" }}><strong style={{ color: "var(--foreground)", fontWeight: 600 }}>{t.name}</strong>, {t.title}</div>
                      </footer>
                    </blockquote>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" as const, fontFamily: "var(--font-display)", marginBottom: 12 }}>The challenge</p>
                      <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, fontFamily: "var(--font-sans)", margin: 0 }}>{t.challenge}</p>
                    </div>
                    <div style={{ borderTop: "1px solid var(--border)", paddingTop: 28 }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: "var(--red)", letterSpacing: "0.1em", textTransform: "uppercase" as const, fontFamily: "var(--font-display)", marginBottom: 12 }}>What Radmin did</p>
                      <p style={{ fontSize: 15, color: "var(--foreground)", lineHeight: 1.75, fontFamily: "var(--font-sans)", margin: 0 }}>{t.solution}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .case-study-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
        `}</style>
      </section>

      <Testimonials />

      <section style={{ background: "var(--navy)", padding: "80px 0", position: "relative", overflow: "hidden" }} aria-label="Call to action">
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
          <div>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#fff", fontFamily: "var(--font-display)", margin: "0 0 8px", letterSpacing: "-0.02em" }}>Want results like these for your organisation?</p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-sans)", margin: 0 }}>We can provide verified references from existing clients on request.</p>
          </div>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: "13px 28px", flexShrink: 0 }}>Get in touch →</Link>
        </div>
      </section>
    </>
  );
}
