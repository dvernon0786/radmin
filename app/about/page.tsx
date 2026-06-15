import type { Metadata } from "next";
import Link from "next/link";
import WhyRadmin from "@/components/WhyRadmin";

export const metadata: Metadata = {
  title: "About Radmin — Our Mission, Values & Team",
  description:
    "We're a small team with deep open-source roots, building managed infrastructure for institutions that take data sovereignty seriously.",
  openGraph: {
    title: "About Radmin",
    description: "Mission, values, and the team behind Radmin's managed open-source infrastructure.",
    url: "https://radmin.live/about",
  },
};

const VALUES = [
  {
    title: "Data sovereignty first",
    body: "Your data belongs to you — not to the platform that hosts it. Every decision we make is filtered through this principle: who has access, where it's stored, and who controls it.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L4 6v7c0 5.25 3.6 10.17 8 11.38C16.4 23.17 20 18.25 20 13V6l-8-4z" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Open source, genuinely",
    body: "We don't use open source as a marketing term. We contribute upstream, we push for open standards, and we don't build proprietary lock-in on top of open-source foundations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="var(--red)" strokeWidth="1.5" fill="var(--red-light)" />
        <path d="M12 7v5l3 3" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="var(--red)" />
      </svg>
    ),
  },
  {
    title: "Radical transparency",
    body: "We tell clients what we can and can't do, what tools are right for their situation, and when we think a different provider would serve them better. That's how trust is built.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="var(--red)" strokeWidth="1.5" fill="var(--red-light)" />
        <circle cx="12" cy="12" r="3" fill="var(--red)" />
      </svg>
    ),
  },
  {
    title: "Institutional mission matters",
    body: "The organisations we serve aren't chasing growth — they're delivering public services, protecting vulnerable people, or holding civil society together. We take that seriously.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill="var(--red-light)" stroke="var(--red)" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const TEAM = [
  {
    name: "Ammar",
    title: "Founder & Infrastructure Lead",
    bio: "10+ years in open-source infrastructure and data sovereignty advocacy. Previously contributed to Nextcloud core and worked inside enterprise tech companies. Now exclusively focused on helping institutions escape Big Tech dependency.",
    initials: "A",
    color: "var(--navy)",
    email: "ammar@radmin.live",
  },
];

export default function AboutPage() {
  return (
    <>
      <section style={{ background: "var(--surface)", padding: "120px 0 64px", borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }} aria-label="Page header">
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.5, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label">About</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.04em", margin: "12px 0 16px", color: "var(--foreground)", lineHeight: 1.05 }}>
            We&apos;ve been fighting<br />for data sovereignty<br />for years.
          </h1>
          <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.7, fontFamily: "var(--font-sans)", maxWidth: 560, margin: 0 }}>
            Radmin exists because institutions deserve infrastructure they actually control — not infrastructure that tolerates them as customers.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--background)", padding: "96px 0", borderTop: "1px solid var(--border)" }} aria-labelledby="mission-heading">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="mission-grid">
            <div>
              <span className="section-label">Mission</span>
              <h2 id="mission-heading" className="section-title" style={{ marginTop: 12 }}>
                Open-source infrastructure as a public good.
              </h2>
            </div>
            <div style={{ borderLeft: "3px solid var(--red)", paddingLeft: 36 }}>
              <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.8, fontFamily: "var(--font-sans)", marginBottom: 24 }}>
                The tools that governments, NGOs, and civil society organisations use to communicate, collaborate, and store data have become critical infrastructure — but most of it is owned by a handful of companies with little accountability to the institutions that depend on them.
              </p>
              <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.8, fontFamily: "var(--font-sans)", marginBottom: 24 }}>
                Open-source alternatives are mature, capable, and often better. The barrier isn&apos;t software quality — it&apos;s operational capacity. Most institutions don&apos;t have the in-house expertise to deploy and maintain their own infrastructure.
              </p>
              <p style={{ fontSize: 17, color: "var(--foreground)", lineHeight: 1.8, fontFamily: "var(--font-sans)", fontWeight: 500, margin: 0 }}>
                That&apos;s the gap Radmin fills: we take on the operational burden so institutions can benefit from open-source software without the overhead of running it themselves.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .mission-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        `}</style>
      </section>

      <WhyRadmin />

      <section style={{ background: "var(--background)", padding: "96px 0", borderTop: "1px solid var(--border)" }} aria-labelledby="values-heading">
        <div className="container">
          <div style={{ marginBottom: 56, maxWidth: 560 }}>
            <span className="section-label">Values</span>
            <h2 id="values-heading" className="section-title" style={{ marginTop: 12 }}>
              Principles that guide every decision.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ background: "#fff", border: "1.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px 28px" }}>
                <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--red-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, border: "1px solid rgba(232,0,29,0.12)" }}>
                  {v.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, margin: "0 0 12px", color: "var(--foreground)", letterSpacing: "-0.02em" }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75, margin: 0, fontFamily: "var(--font-sans)" }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface)", padding: "96px 0", borderTop: "1px solid var(--border)" }} aria-labelledby="team-heading">
        <div className="container">
          <div style={{ marginBottom: 56, maxWidth: 560 }}>
            <span className="section-label">Team</span>
            <h2 id="team-heading" className="section-title" style={{ marginTop: 12 }}>
              Small team. Deep expertise.
            </h2>
            <p style={{ marginTop: 18, fontSize: 17, color: "var(--muted)", lineHeight: 1.7, fontFamily: "var(--font-sans)" }}>
              We deliberately stay small so every client deals with the people who actually manage their infrastructure.
            </p>
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {TEAM.map((person) => (
              <div key={person.name} style={{ background: "#fff", border: "1.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "36px 32px", maxWidth: 420 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: person.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, flexShrink: 0 }}>{person.initials}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.02em" }}>{person.name}</div>
                    <div style={{ fontSize: 13, color: "var(--muted)", fontFamily: "var(--font-sans)", marginTop: 2 }}>{person.title}</div>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75, fontFamily: "var(--font-sans)", margin: "0 0 20px" }}>{person.bio}</p>
                <a href={`mailto:${person.email}`} style={{ fontSize: 13, color: "var(--red)", fontFamily: "var(--font-sans)", fontWeight: 600, textDecoration: "none" }}>{person.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--navy)", padding: "80px 0", position: "relative", overflow: "hidden" }} aria-label="Call to action">
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
          <div>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#fff", fontFamily: "var(--font-display)", margin: "0 0 8px", letterSpacing: "-0.02em" }}>Want to work with us?</p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-sans)", margin: 0 }}>Tell us about your organisation and what you&apos;re trying to solve.</p>
          </div>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: "13px 28px", flexShrink: 0 }}>Get in touch →</Link>
        </div>
      </section>
    </>
  );
}
