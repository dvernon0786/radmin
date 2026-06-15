"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Case studies", href: "/case-studies" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
          transition: "border-color 200ms ease, background 200ms ease, box-shadow 200ms ease",
          boxShadow: scrolled ? "0 1px 12px rgba(15,23,42,0.06)" : "none",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className="container"
          style={{ height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }} aria-label="Radmin home">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect width="28" height="28" rx="7" fill="var(--red)" />
              <rect x="8" y="7" width="4" height="14" rx="2" fill="white" />
              <rect x="14" y="7" width="6" height="6" rx="2" fill="white" />
              <rect x="14" y="15" width="6" height="6" rx="2" fill="white" opacity="0.6" />
            </svg>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--foreground)", letterSpacing: "-0.5px" }}>
              Radmin
            </span>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="nav-desktop">
            {NAV_LINKS.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  style={{
                    padding: "8px 14px",
                    fontSize: 14,
                    fontWeight: 500,
                    color: isActive ? "var(--foreground)" : "var(--muted)",
                    textDecoration: "none",
                    borderRadius: "var(--radius-sm)",
                    background: isActive ? "var(--surface-2)" : "transparent",
                    transition: "color var(--transition-fast), background var(--transition-fast)",
                    fontFamily: "var(--font-sans)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--foreground)";
                      e.currentTarget.style.background = "var(--surface)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--muted)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-primary" style={{ marginLeft: 8, padding: "9px 20px", fontSize: 14 }}>
              Get in touch
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8, borderRadius: "var(--radius-sm)" }}
            className="nav-mobile-btn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="6" y1="6" x2="18" y2="18" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4" y1="12" x2="20" y2="12" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4" y1="17" x2="20" y2="17" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        <div
          style={{
            overflow: "hidden",
            maxHeight: open ? 500 : 0,
            transition: "max-height 280ms cubic-bezier(0.4,0,0.2,1)",
            borderTop: open ? "1px solid var(--border)" : "1px solid transparent",
            background: "#fff",
          }}
          aria-hidden={!open}
        >
          <div style={{ padding: "12px 16px 20px" }}>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={closeMenu}
                style={{
                  display: "block",
                  padding: "13px 12px",
                  fontSize: 16,
                  fontWeight: 500,
                  color: pathname === l.href ? "var(--red)" : "var(--foreground)",
                  textDecoration: "none",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={closeMenu} className="btn-primary" style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
              Get in touch
            </Link>
          </div>
        </div>
      </nav>

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
