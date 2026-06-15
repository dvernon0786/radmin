import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhoWeServe from "@/components/WhoWeServe";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Radmin — Managed Open-Source Tools for Institutions",
  description:
    "Radmin gives NGOs, non-profits, and municipal governments managed Nextcloud, Vaultwarden, and open-source infrastructure — with full data sovereignty and human support.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <WhoWeServe />
      <Testimonials />
      <section style={{ background: "var(--navy)", padding: "80px 0", position: "relative", overflow: "hidden" }} aria-label="Call to action">
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" as const }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "var(--red)", letterSpacing: "0.12em", textTransform: "uppercase" as const, fontFamily: "var(--font-display)" }}>Ready to get started?</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.04em", margin: "12px 0 20px", color: "#fff", lineHeight: 1.1 }}>
            Your data deserves better infrastructure.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontFamily: "var(--font-sans)", maxWidth: 480, margin: "0 auto 40px" }}>
            Talk to us about your organisation. No commitment — just honest advice on whether Radmin is the right fit.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: "15px 32px" }}>Get in touch →</Link>
            <Link href="/about" className="btn-ghost-white">About us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
