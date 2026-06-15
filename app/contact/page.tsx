import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Radmin — Talk to Us About Your Infrastructure",
  description:
    "Tell us about your organisation and what you're trying to solve. We'll respond with honest advice — whether that means working with us or not.",
  openGraph: {
    title: "Contact Radmin",
    description: "Get in touch with the Radmin team about managed open-source infrastructure for your institution.",
    url: "https://radmin.live/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section style={{ background: "var(--surface)", padding: "120px 0 64px", borderBottom: "1px solid var(--border)" }} aria-label="Page header">
        <div className="container">
          <span className="section-label">Get in touch</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.04em", margin: "12px 0 16px", color: "var(--foreground)", lineHeight: 1.05 }}>
            Let&apos;s talk about<br />your infrastructure.
          </h1>
          <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.7, fontFamily: "var(--font-sans)", maxWidth: 520, margin: 0 }}>
            No commitment required. We&apos;ll listen, ask good questions, and give you honest advice — even if the answer isn&apos;t Radmin.
          </p>
        </div>
      </section>
      <Contact />
    </>
  );
}
