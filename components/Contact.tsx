"use client";
import { useState } from "react";

type FormState = { name: string; org: string; email: string; message: string; type: string };
type Status = "idle" | "submitting" | "sent" | "error";

const BASE_INPUT: React.CSSProperties = {
  width: "100%", padding: "12px 14px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-sm)",
  fontSize: 15, fontFamily: "var(--font-sans)", color: "var(--foreground)", background: "#fff",
  outline: "none", transition: "border-color var(--transition-fast), box-shadow var(--transition-fast)", lineHeight: 1.5,
};
const LABEL: React.CSSProperties = { fontSize: 13, fontWeight: 600, color: "var(--foreground)", fontFamily: "var(--font-sans)", display: "block", marginBottom: 7 };

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", org: "", email: "", message: "", type: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    const subject = encodeURIComponent(`Enquiry from ${form.name} — ${form.org}`);
    const body = encodeURIComponent(`Name: ${form.name}\nOrganisation: ${form.org}\nEmail: ${form.email}\nService interest: ${form.type}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:ammar@radmin.live?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 500);
  };

  const fieldStyle = (name: string): React.CSSProperties => ({
    ...BASE_INPUT,
    borderColor: focused === name ? "var(--red)" : "var(--border)",
    boxShadow: focused === name ? "0 0 0 3px var(--red-light)" : "none",
  });

  return (
    <section id="contact" style={{ background: "var(--background)", padding: "112px 0", borderTop: "1px solid var(--border)" }} aria-labelledby="contact-heading">
      <div className="container contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
        {/* Left */}
        <div>
          <span className="section-label">Get in touch</span>
          <h2 id="contact-heading" className="section-title" style={{ marginTop: 12 }}>
            Not sure what<br />you need? That&apos;s<br />exactly why we&apos;re here.
          </h2>
          <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.75, fontFamily: "var(--font-sans)", maxWidth: 380, marginTop: 20, marginBottom: 44 }}>
            Tell us about your organisation and what you&apos;re trying to solve. We&apos;ll get back to you with honest advice — whether that means working with us or not.
          </p>

          {[
            { label: "Email", value: "ammar@radmin.live", href: "mailto:ammar@radmin.live", icon: (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><rect x="1.5" y="3.5" width="15" height="11" rx="2" stroke="var(--red)" strokeWidth="1.5" fill="var(--red-light)" /><path d="M1.5 6l7.5 5 7.5-5" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" /></svg>) },
            { label: "Website", value: "radmin.live", href: "https://radmin.live", icon: (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><circle cx="9" cy="9" r="7.5" stroke="var(--red)" strokeWidth="1.5" fill="var(--red-light)" /><path d="M9 1.5C9 1.5 6 5 6 9s3 7.5 3 7.5M9 1.5C9 1.5 12 5 12 9s-3 7.5-3 7.5M1.5 9h15" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" /></svg>) },
          ].map((item) => (
            <a key={item.label} href={item.href} style={{ display: "flex", alignItems: "center", gap: 16, textDecoration: "none", padding: "16px 20px", borderRadius: "var(--radius-md)", border: "1.5px solid var(--border)", background: "#fff", transition: "border-color var(--transition-fast), box-shadow var(--transition-fast)", marginBottom: 14 }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ width: 44, height: 44, background: "var(--red-light)", border: "1px solid rgba(232,0,29,0.15)", borderRadius: "var(--radius-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "var(--font-sans)", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 2 }}>{item.label}</div>
                <div style={{ fontSize: 15, color: "var(--foreground)", fontFamily: "var(--font-sans)", fontWeight: 600 }}>{item.value}</div>
              </div>
            </a>
          ))}

          <div style={{ marginTop: 8, padding: "18px 20px", background: "var(--surface)", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", display: "flex", gap: 12, alignItems: "flex-start" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 1 }}>
              <circle cx="9" cy="9" r="7.5" stroke="#0369A1" strokeWidth="1.5" fill="#EFF6FF" />
              <path d="M9 5v5M9 13v.5" stroke="#0369A1" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p style={{ fontSize: 13, color: "var(--muted)", fontFamily: "var(--font-sans)", lineHeight: 1.6, margin: 0 }}>
              We typically respond within one business day. All enquiries are handled by the same team that will manage your infrastructure.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div style={{ background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "40px 36px" }}>
          {status === "sent" ? (
            <div style={{ textAlign: "center" as const, padding: "48px 0" }} role="status" aria-live="polite">
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(22,163,74,0.1)", border: "2px solid #16A34A", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 14l6 6 10-12" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--foreground)", marginBottom: 10 }}>Message sent!</h3>
              <p style={{ fontSize: 15, color: "var(--muted)", fontFamily: "var(--font-sans)", lineHeight: 1.6 }}>We&apos;ll be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }} noValidate>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.02em", marginBottom: 4 }}>Send us a message</h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="form-cols">
                <div>
                  <label htmlFor="c-name" style={LABEL}>Your name <span style={{ color: "var(--red)" }} aria-hidden="true">*</span></label>
                  <input id="c-name" required type="text" placeholder="Jane Doe" autoComplete="name" style={fieldStyle("name")}
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
                </div>
                <div>
                  <label htmlFor="c-org" style={LABEL}>Organisation <span style={{ color: "var(--red)" }} aria-hidden="true">*</span></label>
                  <input id="c-org" required type="text" placeholder="City of Example" autoComplete="organization" style={fieldStyle("org")}
                    value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })}
                    onFocus={() => setFocused("org")} onBlur={() => setFocused(null)} />
                </div>
              </div>

              <div>
                <label htmlFor="c-email" style={LABEL}>Email address <span style={{ color: "var(--red)" }} aria-hidden="true">*</span></label>
                <input id="c-email" required type="email" placeholder="you@yourorg.org" autoComplete="email" style={fieldStyle("email")}
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
              </div>

              <div>
                <label htmlFor="c-type" style={LABEL}>What are you interested in?</label>
                <select id="c-type" style={{ ...fieldStyle("type"), cursor: "pointer" }}
                  value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                  onFocus={() => setFocused("type")} onBlur={() => setFocused(null)}>
                  <option value="">Select an option</option>
                  <option value="hosted">Hosted subscription (we manage everything)</option>
                  <option value="self-hosted">Self-hosted contract (your hardware)</option>
                  <option value="consulting">Consultation &amp; needs assessment</option>
                  <option value="training">Team training</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="c-msg" style={LABEL}>Tell us about your situation</label>
                <textarea id="c-msg" placeholder="What tools are you using now? What problem are you trying to solve? How many people in your team?" rows={4}
                  style={{ ...fieldStyle("message"), resize: "vertical", lineHeight: 1.6 }}
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} />
              </div>

              <button type="submit" disabled={status === "submitting"} className="btn-primary"
                style={{ justifyContent: "center", opacity: status === "submitting" ? 0.7 : 1, cursor: status === "submitting" ? "not-allowed" : "pointer" }}
                aria-busy={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Send message →"}
              </button>

              {status === "error" && <p role="alert" style={{ fontSize: 13, color: "#DC2626", fontFamily: "var(--font-sans)", textAlign: "center" as const }}>Something went wrong. Please email us directly at ammar@radmin.live</p>}
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        @media (max-width: 480px) { .form-cols { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
