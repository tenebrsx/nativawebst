"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import { RegionSelector } from "@/components/region-selector";
import { openWhatsAppFunnel } from "@/lib/whatsapp";

export default function SiteNav() {
  const { lang } = useGeo();
  const dict = translations[lang];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const links = [
    { href: "/servicios", label: dict.nav.services },
    { href: "/#proof", label: dict.nav.proof },
    { href: "/#how-it-works", label: dict.nav.process },
    { href: "/#pricing", label: dict.nav.pricing },
    { href: "/portfolio", label: dict.nav.portfolio },
  ];

  return (
    <nav
      className={scrolled ? "site-nav-scrolled" : undefined}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        boxShadow: scrolled ? "0 8px 28px rgba(10,17,40,0.06)" : "0 1px 8px rgba(10,17,40,0.02)",
        transition: "background 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      <div
        className="container site-nav-inner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          paddingBlock: "14px",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", minWidth: 0, flexShrink: 1 }}>
          <div
            style={{
              fontFamily: "var(--font-head)",
              fontWeight: 900,
              fontSize: "20px",
              color: "var(--navy-trench)",
              letterSpacing: "-0.04em",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <span className="site-logo">Nativa</span>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "var(--coral-blue)", marginTop: "2px", flexShrink: 0 }}>
              <path d="M1 8.5C3.5 8.5 4.5 6 7 6C9.5 6 10.5 8.5 13 8.5C15.5 8.5 16.5 6 18 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M3 3C5.5 3 6.5 0.5 9 0.5C11.5 0.5 12.5 3 15 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
            </svg>
          </div>
          <div className="brand-tagline" style={{ fontSize: "9px", color: "var(--gray-400)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700 }}>
            {lang === "es" ? "Estudio Web · Santo Domingo, RD" : "Web Studio · Santo Domingo, DR"}
          </div>
        </Link>

        <div className="site-nav-desktop" style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", justifyContent: "flex-end" }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--muted)",
                fontFamily: "var(--font-head)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}

          <div style={{ display: "flex", gap: "10px", alignItems: "center", borderLeft: "1px solid var(--border)", paddingLeft: "16px" }}>
            <RegionSelector />
          </div>

          <button
            type="button"
            className="btn btn-navy"
            style={{ padding: "10px 20px", fontSize: "13px" }}
            onClick={() => openWhatsAppFunnel("nav")}
          >
            {dict.nav.cta}
          </button>
        </div>

        <div className="site-nav-mobile">
          <RegionSelector />
          <button
            type="button"
            className="nav-hamburger"
            aria-label={open ? (lang === "es" ? "Cerrar menú" : "Close menu") : (lang === "es" ? "Abrir menú" : "Open menu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span style={{ transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav-drawer">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-head)",
                fontWeight: 800,
                fontSize: "18px",
                color: "var(--navy-trench)",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            className="btn btn-navy"
            style={{ marginTop: "16px", width: "100%", padding: "14px 20px", fontSize: "15px" }}
            onClick={() => {
              setOpen(false);
              openWhatsAppFunnel("nav-mobile");
            }}
          >
            {dict.nav.cta}
          </button>
        </div>
      )}
    </nav>
  );
}
