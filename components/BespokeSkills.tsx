"use client";
import { useState } from "react";

const SKILLS = [
  {
    title: "Infrastructure architecture",
    body: "Designing resilient, self-hosted infrastructure tailored to your compliance and performance needs — from single-server setups to multi-node clusters.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="6" rx="2" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
        <rect x="3" y="15" width="18" height="6" rx="2" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
        <path d="M12 9v6" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Data migration",
    body: "Moving your organisation off proprietary platforms cleanly — no data loss, no downtime, no surprises. We handle the heavy lifting so your team doesn't skip a beat.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 12h16" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 6l6 6-6 6" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="9" width="6" height="6" rx="1" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Security hardening",
    body: "Locking down your stack with encryption, access controls, audit logging, and compliance-ready configurations. Defence in depth, not security theatre.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L4 6v5c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Training & capacity building",
    body: "Teaching your team to manage day-to-day operations confidently — so you rely on us less over time, not more.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
        <path d="M6 20c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 5l2-2M17 5l-2-2" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Open-source consulting",
    body: "Evaluating open-source alternatives for any proprietary tool in your stack and building a practical adoption roadmap with clear timelines and cost projections.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
        <path d="M12 8v4l3 3" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Integration & automation",
    body: "Connecting your tools with SSO, shared authentication, automated workflows, and API integrations — so everything works together instead of in silos.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="3" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="3" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" />
        <path d="M8.5 8.5l7 7" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="6" r="3" fill="var(--red)" />
        <circle cx="6" cy="18" r="3" fill="var(--red)" />
        <path d="M15.5 8.5l-7 7" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function BespokeSkills() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ background: "var(--background)", padding: "112px 0", borderTop: "1px solid var(--border)" }} aria-labelledby="skills-heading">
      <div className="container">
        <div style={{ marginBottom: 64, maxWidth: 640 }}>
          <span className="section-label">Specialised expertise</span>
          <h2 id="skills-heading" className="section-title" style={{ marginTop: 12 }}>
            Beyond the tools — bespoke skills<br />your team can tap into.
          </h2>
          <p style={{ marginTop: 18, fontSize: 17, color: "var(--muted)", lineHeight: 1.7, fontFamily: "var(--font-sans)" }}>
            Deploying software is only part of the picture. We bring deep infrastructure expertise to every engagement.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="skills-grid">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#fff",
                border: `1.5px solid ${hovered === i ? "var(--border-hover)" : "var(--border)"}`,
                borderRadius: "var(--radius-lg)",
                padding: "32px 28px",
                transition: "border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base)",
                boxShadow: hovered === i ? "var(--shadow-md)" : "var(--shadow-sm)",
                transform: hovered === i ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--red-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, border: "1px solid rgba(232,0,29,0.12)" }}>
                {skill.icon}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, margin: "0 0 12px", color: "var(--foreground)", letterSpacing: "-0.02em" }}>{skill.title}</h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75, margin: 0, fontFamily: "var(--font-sans)" }}>{skill.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) { .skills-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
