"use client";
import { useState } from "react";
import Link from "next/link";
import Services from "@/components/Services";
import { SERVICES } from "@/lib/services-data";

const ICONS = [
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" key="nextcloud">
      <path d="M14 4C8.48 4 4 8.48 4 14s4.48 10 10 10 10-4.48 10-10S19.52 4 14 4z" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
      <path d="M10 14a4 4 0 108 0 4 4 0 00-8 0z" fill="var(--red)" />
      <path d="M14 10v-3M14 21v-3M10 14H7M21 14h-3" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" key="vaultwarden">
      <rect x="6" y="12" width="16" height="12" rx="3" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
      <path d="M10 12V9a4 4 0 018 0v3" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="18" r="2" fill="var(--red)" />
      <path d="M14 20v2" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" key="opendesk">
      <rect x="4" y="4" width="9" height="9" rx="2" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="15" y="4" width="9" height="9" rx="2" fill="var(--red)" />
      <rect x="4" y="15" width="9" height="9" rx="2" fill="var(--red)" />
      <rect x="15" y="15" width="9" height="9" rx="2" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
    </svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" key="custom">
      <circle cx="14" cy="14" r="3" fill="var(--red)" />
      <circle cx="14" cy="14" r="8" stroke="var(--red)" strokeWidth="1.5" strokeDasharray="3 2" />
      <path d="M14 6V4M14 24v-2M6 14H4M24 14h-2M8.34 8.34L6.93 6.93M21.07 21.07l-1.41-1.41M8.34 19.66l-1.41 1.41M21.07 6.93l-1.41 1.41" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <>
      <section style={{ background: "var(--surface)", padding: "120px 0 64px", borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }} aria-label="Page header">
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.5, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label">Services</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.04em", margin: "12px 0 16px", color: "var(--foreground)", lineHeight: 1.05 }}>
            Open-source tools,<br />fully managed.
          </h1>
          <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.7, fontFamily: "var(--font-sans)", maxWidth: 560, margin: 0 }}>
            We deploy and maintain the tools your institution needs — Nextcloud, Vaultwarden, and more — without the vendor lock-in or the surveillance.
          </p>
        </div>
      </section>

      <Services />

      <section style={{ background: "var(--background)", padding: "96px 0", borderTop: "1px solid var(--border)" }} aria-labelledby="services-detail-heading">
        <div className="container">
          <div style={{ marginBottom: 56, maxWidth: 560 }}>
            <span className="section-label">Deep dive</span>
            <h2 id="services-detail-heading" className="section-title" style={{ marginTop: 12 }}>
              What&apos;s included in each service.
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {SERVICES.map((service, i) => (
              <div key={service.name} style={{ border: "1.5px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "#fff" }}>
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  style={{ width: "100%", padding: "28px 32px", display: "flex", alignItems: "center", gap: 20, background: "none", border: "none", cursor: "pointer", textAlign: "left" as const }}
                  aria-expanded={expanded === i}
                >
                  <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--red-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(232,0,29,0.12)" }}>
                    {ICONS[i]}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.02em" }}>{service.name}</div>
                    <div style={{ fontSize: 13, color: "var(--red)", fontWeight: 600, fontFamily: "var(--font-sans)", marginTop: 2 }}>{service.tagline}</div>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, transform: expanded === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 250ms ease" }}>
                    <path d="M5 7.5l5 5 5-5" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {expanded === i && (
                  <div style={{ padding: "0 32px 32px", borderTop: "1px solid var(--border)" }}>
                    <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, fontFamily: "var(--font-sans)", marginTop: 24, marginBottom: 28 }}>
                      {service.longDescription}
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="service-detail-grid">
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" as const, fontFamily: "var(--font-display)", marginBottom: 16 }}>What&apos;s included</div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
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
                      </div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" as const, fontFamily: "var(--font-display)", marginBottom: 16 }}>Common use cases</div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                          {service.useCases.map((u) => (
                            <li key={u} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--muted)", fontFamily: "var(--font-sans)", lineHeight: 1.5 }}>
                              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--red)", flexShrink: 0, marginTop: 6 }} aria-hidden="true" />
                              {u}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) { .service-detail-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <section style={{ background: "var(--navy)", padding: "80px 0", position: "relative", overflow: "hidden" }} aria-label="Call to action">
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
          <div>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#fff", fontFamily: "var(--font-display)", margin: "0 0 8px", letterSpacing: "-0.02em" }}>Not sure which service is right for your organisation?</p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-sans)", margin: 0 }}>We offer a free consultation to help you figure it out — no commitment required.</p>
          </div>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: "13px 28px", flexShrink: 0 }}>Talk to us →</Link>
        </div>
      </section>
    </>
  );
}
