"use client";
import { useState } from "react";
import Link from "next/link";
import { TIERS, INCLUDED, PRICING_FAQ } from "@/lib/tiers-data";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section style={{ background: "var(--surface)", padding: "120px 0 64px", borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }} aria-label="Page header">
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.5, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label">Pricing</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.04em", margin: "12px 0 16px", color: "var(--foreground)", lineHeight: 1.05 }}>
            Simple, transparent<br />engagement models.
          </h1>
          <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.7, fontFamily: "var(--font-sans)", maxWidth: 560, margin: 0 }}>
            No hidden fees, no per-seat surprises. Choose the model that fits your organisation and we&apos;ll quote based on your actual needs.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--background)", padding: "96px 0", borderTop: "1px solid var(--border)" }} aria-labelledby="tiers-heading">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }} role="list">
            {TIERS.map((tier) => (
              <article key={tier.number} role="listitem" style={{ borderRadius: "var(--radius-lg)", padding: "40px 32px", background: tier.featured ? "var(--navy)" : "#fff", border: tier.featured ? "none" : "1.5px solid var(--border)", display: "flex", flexDirection: "column", gap: 0, position: "relative", overflow: "hidden", boxShadow: tier.featured ? "var(--shadow-lg)" : "var(--shadow-sm)" }}>
                {tier.featured && <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--red)" }} />}
                <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, color: "var(--red)", letterSpacing: "0.08em", marginBottom: 20 }}>{tier.number}</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, margin: "0 0 5px", color: tier.featured ? "#fff" : "var(--foreground)", letterSpacing: "-0.02em" }}>{tier.title}</h2>
                <p style={{ fontSize: 11, fontWeight: 600, color: tier.featured ? "rgba(255,255,255,0.45)" : "var(--muted)", margin: "0 0 20px", fontFamily: "var(--font-sans)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>{tier.subtitle}</p>
                <p style={{ fontSize: 15, color: tier.featured ? "rgba(255,255,255,0.7)" : "var(--muted)", lineHeight: 1.75, margin: "0 0 28px", fontFamily: "var(--font-sans)", flex: 1 }}>{tier.description}</p>
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
                <div style={{ marginBottom: 24, padding: "10px 14px", background: tier.featured ? "rgba(255,255,255,0.07)" : "var(--surface-2)", borderRadius: "var(--radius-sm)", fontSize: 12, color: tier.featured ? "rgba(255,255,255,0.5)" : "var(--muted)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>{tier.cta}</div>
                <Link href="/contact" className="btn-primary" style={{ textAlign: "center" as const, justifyContent: "center" }}>Get a quote →</Link>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 48, padding: "24px 32px", background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }} role="note">
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

      <section style={{ background: "var(--surface)", padding: "80px 0", borderTop: "1px solid var(--border)" }} aria-labelledby="faq-heading">
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ marginBottom: 48 }}>
            <span className="section-label">FAQ</span>
            <h2 id="faq-heading" className="section-title" style={{ marginTop: 12 }}>
              Common questions about pricing.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {PRICING_FAQ.map((item, i) => (
              <div key={i} style={{ border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)", overflow: "hidden", background: "#fff" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, background: "none", border: "none", cursor: "pointer", textAlign: "left" as const }}
                  aria-expanded={openFaq === i}
                >
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.01em" }}>{item.q}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 250ms ease" }}>
                    <path d="M5 7.5l5 5 5-5" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", borderTop: "1px solid var(--border)" }}>
                    <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, fontFamily: "var(--font-sans)", marginTop: 16, marginBottom: 0 }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--navy)", padding: "80px 0", position: "relative", overflow: "hidden" }} aria-label="Call to action">
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" as const }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.04em", margin: "0 0 16px", color: "#fff", lineHeight: 1.1 }}>
            Ready to get a quote?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontFamily: "var(--font-sans)", maxWidth: 400, margin: "0 auto 36px" }}>
            Tell us about your organisation and we&apos;ll come back with a tailored proposal.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: "15px 32px" }}>Get in touch →</Link>
        </div>
      </section>
    </>
  );
}
