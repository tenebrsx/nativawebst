"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import { RegionSelector } from "@/components/region-selector";
import NatiLogo from "@/components/nati-logo";
import { openWhatsAppFunnel } from "@/lib/whatsapp";

/**
 * `solid`: keep the bar fully opaque when scrolled (no frosted glass). Used on
 * pages whose content scrolls directly beneath the bar, e.g. /pricing-builder,
 * where checkboxes and cards would otherwise show through it.
 */
export default function SiteNav({ solid = false }: { solid?: boolean } = {}) {
  const { lang } = useGeo();
  const dict = translations[lang];
  const [open, setOpen] = useState(false);
  // The drawer links are only rendered once the menu has been opened, so the
  // page doesn't ship a second, hidden copy of every nav link.
  const [drawerReady, setDrawerReady] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
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
    { href: "/santo-domingo", label: dict.nav.local },
    { href: "/por-que-nosotros", label: dict.nav.why },
    { href: "/pricing-builder", label: dict.nav.pricing },
    { href: "/#how-it-works", label: dict.nav.process },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav
      aria-label={lang === "es" ? "Navegación principal" : "Main navigation"}
      className={scrolled && !solid ? "site-nav-scrolled" : undefined}
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
        <Link href="/" aria-label="Nativa Studio — inicio" style={{ textDecoration: "none", minWidth: 0, flexShrink: 1, display: "inline-flex", padding: "8px 0" }}>
          <NatiLogo variant="horizontal" tone="light" size={32} />
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
            className={`nav-hamburger${open ? " is-open" : ""}`}
            aria-label={open ? (lang === "es" ? "Cerrar menú" : "Close menu") : (lang === "es" ? "Abrir menú" : "Open menu")}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            onClick={() => {
              if (!drawerReady) {
                setDrawerReady(true);
                requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
                return;
              }
              setOpen((v) => !v);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav-drawer"
        className={`mobile-nav-drawer${open ? " is-open" : ""}`}
        inert={!open}
      >
        {drawerReady ? (
          <>
            <div className="mobile-nav-brand" aria-hidden="true" style={{ padding: "8px 0 12px" }}>
              <NatiLogo variant="short" tone="light" size={28} />
            </div>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="mobile-nav-link"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="btn btn-navy mobile-nav-cta"
              onClick={() => {
                setOpen(false);
                openWhatsAppFunnel("nav-mobile");
              }}
            >
              {dict.nav.cta}
            </button>
          </>
        ) : null}
      </div>
    </nav>
  );
}
