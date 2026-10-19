"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import { buildConfiguratorMessage, openWhatsApp } from "@/lib/whatsapp";
import { MiniSite, MiniViewer, type MsFocus } from "@/components/minisite";
import { miniSiteFor } from "@/lib/minisites";
import { findTemplate, templatesFor, tx, type Template } from "@/lib/pricing-templates";
import { loadPreviewFonts } from "@/lib/preview-fonts";
import {
  CRM_USERS_MAX,
  CRM_USERS_MIN,
  PLAN_IDS,
  addonMonthlyUnit,
  addonOneTime,
  addonsFor,
  formatMoney,
  planPrice,
  quote,
  sanitizeAddons,
  supportMonthly,
  type AddonId,
  type Currency,
  type PlanId,
  type QuoteLine,
} from "@/lib/pricing";
import {
  DEFAULT_SECTIONS,
  PALETTES,
  SECTIONS,
  STORAGE_KEY,
  buildFromQuery,
  buildToQuery,
  defaultBuild,
  defaultTemplate,
  normalizeBuild,
  type Build,
  type Tone,
} from "@/lib/configurator";
import "./pricing-builder.css";
import "./pricing-configurator.css";

type Lang = "es" | "en";

const COPY = {
  es: {
    kicker: "Configurador",
    title: "Arma tu sitio web",
    lede: "Elige cada pieza y mira tu sitio cambiar en vivo. Sin cobros: es tu estimado.",
    steps: ["Tipo de sitio", "Estilo", "Secciones", "Funciones", "Soporte", "Resumen"],
    stepsNav: "Pasos del configurador",
    s1: "¿Qué vamos a construir?",
    s1sub: "Tu plan base. Puedes cambiarlo cuando quieras.",
    s2: "Estilo y plantilla",
    s2sub: "Escoge el rubro más cercano a tu negocio. El estilo es gratis: lo ajustamos en el diseño real.",
    tpl: "Plantilla",
    tone: "Tono",
    tones: { original: "Como la plantilla", dark: "Oscuro" } as Record<Tone, string>,
    palette: "Paleta",
    free: "Incluido",
    s3: "Secciones",
    s3subLanding: "Esencial es una sola página. Estas son las secciones dentro de ella — todas incluidas.",
    s3subShop: "Las páginas de tienda vienen incluidas. Suma secciones extra sin costo.",
    always: "Siempre incluida",
    s4: "Funciones y extras",
    s4sub: "Solo ves lo que está disponible para tu plan.",
    oneTime: "pago único",
    setup: "de instalación",
    perMonth: "/mes",
    perUser: "/usuario/mes",
    from: "desde",
    users: "Usuarios del CRM",
    user: "usuario",
    usersWord: "usuarios",
    usersLess: "Quitar un usuario",
    usersMore: "Sumar un usuario",
    removed: (names: string, plan: string, many: boolean) =>
      `Quitamos ${names} porque ${many ? "no están disponibles" : "no está disponible"} en ${plan}.`,
    s5: "Soporte mensual",
    s5sub: "Opcional. Se cobra aparte del sitio, mes a mes.",
    supportYes: "Sí, quiero soporte",
    supportNo: "Sin soporte por ahora",
    s6: "Tu resumen",
    s6sub: "Revisa tu configuración y pide tu demo. Primero ves tu sitio, luego decides.",
    plan: "Plan",
    item: "Concepto",
    style: "Estilo",
    sections: "Secciones",
    addons: "Extras",
    support: "Soporte mensual",
    none: "Ninguno",
    oneTimeTotal: "Inversión única",
    monthlyTotal: "Mensual",
    noMonthly: "Sin pagos mensuales",
    details: "Ver detalle",
    hideDetails: "Ocultar detalle",
    breakdown: "Detalle del precio",
    demo: "Demo gratis en 48 h",
    confirm: "El precio final se confirma en la llamada.",
    cta: "Pide tu demo gratis por WhatsApp",
    ctaShort: "Pide tu demo gratis",
    share: "Copiar enlace",
    copied: "Enlace copiado",
    reset: "Empezar de nuevo",
    currency: "Moneda",
    preview: "Vista previa en vivo",
    previewOf: (p: string, t: string) => `Vista previa: ${p}, plantilla ${t}`,
    sitemap: "Mapa del sitio",
    waBtn: "WhatsApp",
    aiMsg: "¡Hola! ¿Te agendo una cita para mañana?",
    aiName: "IA de marca",
    crmTitle: "CRM",
    crmCols: ["Nuevo", "Cotizado", "Cerrado"],
    maps: "Google Maps",
    mapsMeta: "Perfil optimizado",
    care: "Soporte activo",
    shopify: "Checkout Shopify",
    brandKit: "Identidad",
    live: (one: string, mo: string | null) =>
      `Total actualizado: inversión única ${one}${mo ? `, mensual ${mo}` : ""}.`,
    back: "Volver al inicio",
    quickNote: "Precios en",
  },
  en: {
    kicker: "Configurator",
    title: "Build your website",
    lede: "Pick each piece and watch your site change live. No charge: this is your estimate.",
    steps: ["Site type", "Style", "Sections", "Features", "Support", "Summary"],
    stepsNav: "Configurator steps",
    s1: "What are we building?",
    s1sub: "Your base plan. You can switch any time.",
    s2: "Style & template",
    s2sub: "Pick the industry closest to yours. Style is free: we tune it in the real design.",
    tpl: "Template",
    tone: "Tone",
    tones: { original: "Template's own", dark: "Dark" } as Record<Tone, string>,
    palette: "Palette",
    free: "Included",
    s3: "Sections",
    s3subLanding: "Essential is a single page. These are the sections inside it — all included.",
    s3subShop: "Store pages come included. Add extra sections at no cost.",
    always: "Always included",
    s4: "Features & add-ons",
    s4sub: "You only see what is available for your plan.",
    oneTime: "one-time",
    setup: "setup",
    perMonth: "/month",
    perUser: "/user/month",
    from: "from",
    users: "CRM users",
    user: "user",
    usersWord: "users",
    usersLess: "Remove a user",
    usersMore: "Add a user",
    removed: (names: string, plan: string, many: boolean) =>
      `We removed ${names} because ${many ? "they are" : "it is"} not available with ${plan}.`,
    s5: "Monthly support",
    s5sub: "Optional. Billed separately from the site, month to month.",
    supportYes: "Yes, add support",
    supportNo: "No support for now",
    s6: "Your summary",
    s6sub: "Review your build and ask for your demo. See your site first, then decide.",
    plan: "Plan",
    item: "Item",
    style: "Style",
    sections: "Sections",
    addons: "Add-ons",
    support: "Monthly support",
    none: "None",
    oneTimeTotal: "One-time",
    monthlyTotal: "Monthly",
    noMonthly: "No monthly payments",
    details: "See breakdown",
    hideDetails: "Hide breakdown",
    breakdown: "Price breakdown",
    demo: "Free 48h demo",
    confirm: "Final price is confirmed on the call.",
    cta: "Get your free demo on WhatsApp",
    ctaShort: "Get your free demo",
    share: "Copy link",
    copied: "Link copied",
    reset: "Start over",
    currency: "Currency",
    preview: "Live preview",
    previewOf: (p: string, t: string) => `Preview: ${p}, ${t} template`,
    sitemap: "Sitemap",
    waBtn: "WhatsApp",
    aiMsg: "Hi! Want me to book you for tomorrow?",
    aiName: "Brand AI",
    crmTitle: "CRM",
    crmCols: ["New", "Quoted", "Won"],
    maps: "Google Maps",
    mapsMeta: "Optimized profile",
    care: "Support on",
    shopify: "Shopify checkout",
    brandKit: "Identity",
    live: (one: string, mo: string | null) =>
      `Total updated: one-time ${one}${mo ? `, monthly ${mo}` : ""}.`,
    back: "Back to home",
    quickNote: "Prices in",
  },
};

/* ── Animated money ──────────────────────────────────────────── */
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

function AnimatedMoney({ value, currency, suffix = "" }: { value: number; currency: Currency; suffix?: string }) {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(value);
  const from = useRef(value);
  const lastCurrency = useRef(currency);
  useEffect(() => {
    // A currency switch is not a "price change": jump straight to it.
    if (reduced || lastCurrency.current !== currency) {
      lastCurrency.current = currency;
      from.current = value;
      const r = requestAnimationFrame(() => setShown(value));
      return () => cancelAnimationFrame(r);
    }
    const start = performance.now();
    const a = from.current;
    const dur = 520;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - t, 3);
      const v = Math.round(a + (value - a) * e);
      from.current = v;
      setShown(v);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, currency, reduced]);
  return (
    <span className="pc-num">
      {formatMoney(shown, currency)}
      {suffix}
    </span>
  );
}

/* ── Live preview ────────────────────────────────────────────── */
type PreviewProps = {
  template: Template;
  build: Build;
  lang: Lang;
  copy: (typeof COPY)["es"];
  planName: string;
  focus?: MsFocus;
};

function PreviewArtboard({
  template,
  build,
  focus,
  auto = true,
  interactive = true,
}: {
  template: Template;
  build: Build;
  focus?: MsFocus;
  auto?: boolean;
  interactive?: boolean;
}) {
  const site = miniSiteFor(template.id);
  if (!site) return null;
  const has = (id: AddonId) => build.addons.includes(id);
  const palette = PALETTES.find((p) => p.id === build.palette);
  const flags = {
    seo: has("seo"),
    brand: has("brand"),
    bilingual: has("bilingual"),
    shopify: has("shopify"),
    support: build.support,
    ai: has("ai"),
  };
  return (
    <MiniViewer domain={site.domain} bilingual={flags.bilingual} focus={focus} auto={auto} interactive={interactive}>
      <MiniSite
        site={site}
        sections={build.sections}
        flags={flags}
        tone={build.tone}
        swatch={palette?.swatch.length ? palette.swatch : undefined}
      />
    </MiniViewer>
  );
}

function useIsPhone() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 980px)");
    const on = () => setM(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return m;
}

/** Full-screen, natively scrollable preview with a close button. */
function FullPreview({
  template,
  build,
  lang,
  onClose,
}: {
  template: Template;
  build: Build;
  lang: Lang;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prevOverflow;
      prev?.focus?.();
    };
  }, [onClose]);
  const site = miniSiteFor(template.id);
  const es = lang === "es";
  return createPortal(
    <div className="ms-full" role="dialog" aria-modal="true" aria-label={es ? "Vista previa ampliada" : "Expanded preview"}>
      <div className="ms-full-bar">
        <span>
          {site?.brand}
          <small>{es ? "Demo ficticia · desliza para recorrer el sitio" : "Fictional demo · scroll to explore"}</small>
        </span>
        <button type="button" className="ms-full-close" ref={closeRef} onClick={onClose}>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {es ? "Cerrar" : "Close"}
        </button>
      </div>
      <div className="ms-full-body">
        <PreviewArtboard template={template} build={build} auto={false} />
      </div>
    </div>,
    document.body,
  );
}

/** Keeps the outgoing artboard for one crossfade when the template changes. */
function useCrossfade(key: string) {
  const [layers, setLayers] = useState<{ key: string; out: boolean }[]>([{ key, out: false }]);
  // Derive the new layer stack during render when the key changes.
  if (layers[layers.length - 1]?.key !== key) {
    setLayers([...layers.filter((l) => !l.out && l.key !== key).map((l) => ({ ...l, out: true })), { key, out: false }]);
  }
  const hasOut = layers.some((l) => l.out);
  useEffect(() => {
    if (!hasOut) return;
    const t = window.setTimeout(() => setLayers((prev) => prev.filter((l) => !l.out)), 420);
    return () => window.clearTimeout(t);
  }, [hasOut, key]);
  return layers;
}

function LivePreview({ template, build, lang, copy, planName, focus }: PreviewProps) {
  const [full, setFull] = useState(false);
  const phone = useIsPhone();
  const closeFull = useCallback(() => setFull(false), []);
  const has = (id: AddonId) => build.addons.includes(id);
  const layers = useCrossfade(`${template.id}`);
  const palette = PALETTES.find((p) => p.id === build.palette);
  const accent = palette?.swatch[1];
  const sectionDefs = SECTIONS[build.plan].filter((s) => s.locked || build.sections.includes(s.id));
  const deviceRef = useRef<HTMLDivElement>(null);
  const ovsRef = useRef<HTMLDivElement>(null);

  // Pin the hotspot layer to the visible artboard (it is letterboxed inside
  // the device box), so badges sit on the site, not on empty stage.
  useEffect(() => {
    const dev = deviceRef.current;
    const ovs = ovsRef.current;
    if (!dev || !ovs) return;
    let raf = 0;
    const fit = () => {
      raf = 0;
      const art = dev.querySelector<HTMLElement>(".pc-layer:not(.is-out) .ms-view");
      if (!art) return;
      const d = dev.getBoundingClientRect();
      const a = art.getBoundingClientRect();
      const top = Math.max(0, a.top - d.top);
      const left = Math.max(0, a.left - d.left);
      ovs.style.top = `${top}px`;
      ovs.style.left = `${left}px`;
      ovs.style.width = `${Math.min(d.width - left, a.width)}px`;
      ovs.style.height = `${Math.min(d.height - top, a.height)}px`;
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(fit);
    };
    const ro = new ResizeObserver(on);
    ro.observe(dev);
    const t = window.setTimeout(on, 450);
    on();
    return () => {
      ro.disconnect();
      window.clearTimeout(t);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [template.id]);

  return (
    <div
      className="pc-stage"
      data-plan={build.plan}
      data-tone={build.tone}
      style={accent ? ({ "--pc-accent": accent } as React.CSSProperties) : undefined}
    >
      <div className="pc-stage-head" aria-hidden="true">
        <span className="pc-live-dot" />
        <span>{copy.preview}</span>
        <b>
          {planName} · {tx(template.cat, lang)}
        </b>
      </div>
      <button type="button" className="pc-expand" data-short={lang === "es" ? "Ampliar" : "Expand"} onClick={() => setFull(true)}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{lang === "es" ? "Ampliar vista previa" : "Expand preview"}</span>
      </button>

      <div
        className="pc-device"
        ref={deviceRef}
        role="img"
        aria-label={copy.previewOf(planName, tx(template.cat, lang))}
        onClick={phone ? () => setFull(true) : undefined}
      >
        <div className="pc-layers" aria-hidden="true">
          {layers.map((l) => {
            const t = findTemplate(l.key) ?? template;
            return (
              <div key={l.key} className={`pc-layer${l.out ? " is-out" : ""}`}>
                <PreviewArtboard template={t} build={build} focus={l.out ? undefined : focus} interactive={!phone} />
              </div>
            );
          })}
        </div>

        <div className="pc-ovs" ref={ovsRef} aria-hidden="true">
          <div className={`pc-ov pc-ov-lang${has("bilingual") ? " is-on" : ""}`}>
            <b>ES</b>
            <span>EN</span>
          </div>
          <div className={`pc-ov pc-ov-care${build.support ? " is-on" : ""}`}>
            <i />
            {copy.care}
          </div>
          <div className={`pc-ov pc-ov-maps${has("seo") ? " is-on" : ""}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
            </svg>
            <span>
              <b>{copy.maps}</b>
              <small>{copy.mapsMeta} · 4.9 ★</small>
            </span>
          </div>
          <div className={`pc-ov pc-ov-brand${has("brand") || palette?.swatch.length ? " is-on" : ""}`}>
            <small>{copy.brandKit}</small>
            <span className="pc-swatches">
              {(palette?.swatch.length ? palette.swatch : ["#0B0D12", "#1E4FD7", "#F7F8FA"]).map((c) => (
                <i key={c} style={{ background: c }} />
              ))}
            </span>
          </div>
          <div className={`pc-ov pc-ov-crm${has("crm") ? " is-on" : ""}`}>
            <small>
              {copy.crmTitle} · {build.crmUsers} {build.crmUsers === 1 ? copy.user : copy.usersWord}
            </small>
            <div className="pc-crm-cols">
              {copy.crmCols.map((c, i) => (
                <div key={c}>
                  <em>{c}</em>
                  {Array.from({ length: 3 - i }).map((_, j) => (
                    <i key={j} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className={`pc-ov pc-ov-shopify${has("shopify") ? " is-on" : ""}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 8h12l-1 12H7L6 8Zm3 0V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            {copy.shopify}
          </div>
          <div className={`pc-ov pc-ov-ai${has("ai") ? " is-on" : ""}`}>
            <small>{copy.aiName}</small>
            <span>{copy.aiMsg}</span>
          </div>
          <div className="pc-ov pc-ov-wa is-on">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Zm4.6 12.6c-.2.6-1.1 1.1-1.6 1.1-.4.1-1 .1-1.6-.1-.4-.1-.8-.3-1.4-.5-2.5-1.1-4.1-3.6-4.2-3.8-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.1.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.1.1.6-.1 1.2Z" />
            </svg>
            {copy.waBtn}
          </div>
        </div>
      </div>

      <div className="pc-sitemap" aria-hidden="true">
        <small>{copy.sitemap}</small>
        <ul>
          {sectionDefs.map((s) => (
            <li key={`${build.plan}-${s.id}`} className={s.locked ? "is-locked" : undefined}>
              {tx(s.label, lang)}
            </li>
          ))}
        </ul>
      </div>
      {full ? <FullPreview template={template} build={build} lang={lang} onClose={closeFull} /> : null}
    </div>
  );
}

/* ── Price breakdown ─────────────────────────────────────────── */
function lineLabel(line: QuoteLine, dict: typeof translations.es.pricing, planName: string, copy: (typeof COPY)["es"]) {
  if (line.kind === "plan") return planName;
  if (line.kind === "support") return copy.support;
  const base = dict.addons[line.id].label;
  if (line.units) return `${base} (${line.units} ${line.units === 1 ? copy.user : copy.usersWord})`;
  return base;
}

function Breakdown({
  lines,
  currency,
  dict,
  planName,
  copy,
  oneTime,
  monthly,
}: {
  lines: QuoteLine[];
  currency: Currency;
  dict: typeof translations.es.pricing;
  planName: string;
  copy: (typeof COPY)["es"];
  oneTime: number;
  monthly: number;
}) {
  const m = (n: number) => formatMoney(n, currency);
  return (
    <table className="pc-break">
      <caption className="pc-sr">{copy.breakdown}</caption>
      <thead>
        <tr>
          <th scope="col">{copy.item}</th>
          <th scope="col">{copy.oneTimeTotal}</th>
          <th scope="col">{copy.monthlyTotal}</th>
        </tr>
      </thead>
      <tbody>
        {lines.map((l) => (
          <tr key={l.id} className={l.kind === "support" ? "is-support" : undefined}>
            <th scope="row">
              {lineLabel(l, dict, planName, copy)}
              {l.from ? <small> · {copy.from}</small> : null}
            </th>
            <td>{l.oneTime ? m(l.oneTime) : "—"}</td>
            <td>{l.monthly ? `${m(l.monthly)}${copy.perMonth}` : "—"}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">Total</th>
          <td>{m(oneTime)}</td>
          <td>{monthly ? `${m(monthly)}${copy.perMonth}` : "—"}</td>
        </tr>
      </tfoot>
    </table>
  );
}

/* ── Page ────────────────────────────────────────────────────── */
export default function PricingConfigurator() {
  const { lang: rawLang, currency, setCurrency, rate } = useGeo();
  const lang: Lang = rawLang === "en" ? "en" : "es";
  const es = lang === "es";
  const copy = COPY[lang];
  const dict = translations[lang].pricing;
  const uid = useId();

  const [build, setBuild] = useState<Build>(() => defaultBuild());
  const [ready, setReady] = useState(false);
  const [removedNote, setRemovedNote] = useState<string | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [live, setLive] = useState("");
  const [focus, setFocus] = useState<MsFocus>(null);
  const focusN = useRef(0);
  const show = (id: string) => setFocus({ id, n: ++focusN.current });

  const panelRef = useRef<HTMLDivElement>(null);
  const stepEls = () => Array.from(panelRef.current?.querySelectorAll<HTMLElement>(".pc-step") ?? []);
  const stageWrapRef = useRef<HTMLDivElement>(null);

  // The page has its own WhatsApp CTA; hide the site-wide chat launcher so it
  // never sits on top of the price bar.
  useEffect(() => {
    document.body.dataset.pbOpen = "1";
    return () => {
      delete document.body.dataset.pbOpen;
    };
  }, []);

  // Restore: a shared link wins over this browser's saved build.
  useEffect(() => {
    let next: Build | null = buildFromQuery(window.location.search);
    if (!next) {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) next = normalizeBuild(JSON.parse(saved));
      } catch {}
    }
    // Restoring after mount keeps the static HTML and hydration identical.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (next) setBuild(next);
    setReady(true);
  }, []);

  // Template fonts are cosmetic for the preview: fetch them on the first
  // interaction (or after a few seconds) so they never delay the first view.
  useEffect(() => {
    const events = ["pointerdown", "keydown", "touchstart", "scroll", "wheel"] as const;
    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      loadPreviewFonts();
      cleanup();
    };
    const t = window.setTimeout(go, 6000);
    const cleanup = () => {
      window.clearTimeout(t);
      events.forEach((e) => window.removeEventListener(e, go));
    };
    events.forEach((e) => window.addEventListener(e, go, { passive: true, once: true }));
    return cleanup;
  }, []);

  // Persist + keep the URL shareable.
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(build));
    } catch {}
    const qs = buildToQuery(build);
    const url = `${window.location.pathname}?${qs}${window.location.hash}`;
    window.history.replaceState(window.history.state, "", url);
  }, [build, ready]);

  const q = useMemo(
    () => quote({ plan: build.plan, addons: build.addons, support: build.support, crmUsers: build.crmUsers }, currency, rate),
    [build, currency, rate],
  );
  const money = useCallback((n: number) => formatMoney(n, currency), [currency]);

  // Announce the final figure once it settles (not every tween frame).
  useEffect(() => {
    if (!ready) return;
    const t = window.setTimeout(
      () => setLive(copy.live(money(q.oneTime), q.monthly ? `${money(q.monthly)}${copy.perMonth}` : null)),
      700,
    );
    return () => window.clearTimeout(t);
  }, [q.oneTime, q.monthly, money, copy, ready]);

  const template: Template = useMemo(() => {
    const list = templatesFor(build.plan);
    return list.find((t) => t.id === build.tpl) ?? list[0];
  }, [build.plan, build.tpl]);

  const planName = dict.tiers[build.plan].name;

  /* actions */
  const pickPlan = (plan: PlanId) => {
    if (plan === build.plan) return;
    const { kept, removed } = sanitizeAddons(plan, build.addons);
    setBuild((b) => ({
      ...b,
      plan,
      tpl: defaultTemplate(plan),
      sections: [...DEFAULT_SECTIONS[plan]],
      addons: kept,
    }));
    show("inicio");
    if (removed.length) {
      const names = removed.map((id) => dict.addons[id].label).join(es ? " y " : " and ");
      setRemovedNote(copy.removed(names, dict.tiers[plan].name, removed.length > 1));
    } else setRemovedNote(null);
  };
  const ADDON_FOCUS: Partial<Record<AddonId, string>> = {
    seo: build.plan === "landing" ? "ubicacion" : "footer",
    shopify: "bolsa",
    bilingual: "inicio",
    brand: "inicio",
    ai: "footer",
  };
  const toggleAddon = (id: AddonId, on: boolean) => {
    setBuild((b) => ({
      ...b,
      addons: sanitizeAddons(b.plan, on ? [...b.addons, id] : b.addons.filter((a) => a !== id)).kept,
    }));
    const target = id === "seo" && !build.sections.includes("ubicacion") && build.plan === "landing" ? "footer" : ADDON_FOCUS[id];
    if (target) show(target);
  };
  const toggleSection = (id: string, on: boolean) => {
    const order = SECTIONS[build.plan].map((x) => x.id);
    if (on) show(id);
    else {
      // Show where it was: the next section that stays on.
      const after = order.slice(order.indexOf(id) + 1).find((x) => SECTIONS[build.plan].find((d) => d.id === x)?.locked || (build.sections.includes(x) && x !== id));
      show(after ?? "contacto");
    }
    setBuild((b) => ({
      ...b,
      sections: SECTIONS[b.plan]
        .filter((s) => !s.locked)
        .map((s) => s.id)
        .filter((x) => (x === id ? on : b.sections.includes(x))),
    }));
  };
  const setUsers = (n: number) =>
    setBuild((b) => ({ ...b, crmUsers: Math.min(CRM_USERS_MAX, Math.max(CRM_USERS_MIN, n)) }));

  /* step tracking for the progress rail: the last step whose top has
     passed ~40% of the viewport is the current one. */
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.4;
      const els = stepEls();
      let current = 0;
      els.forEach((el, i) => {
        if (el.getBoundingClientRect().top <= line) current = i;
      });
      const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      setActiveStep(atEnd ? els.length - 1 : current);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on, { passive: true });
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const goStep = (i: number) => {
    const el = stepEls()[i];
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    const h = el.querySelector<HTMLElement>("h2");
    h?.focus({ preventScroll: true });
  };

  /* mobile: preview shrinks as you scroll into the options */
  useEffect(() => {
    const el = stageWrapRef.current;
    if (!el) return;
    const mq = window.matchMedia("(max-width: 980px)");
    let raf = 0;
    const root = el.closest<HTMLElement>(".pc");
    const update = () => {
      raf = 0;
      const nav = document.querySelector("nav");
      if (root && nav instanceof HTMLElement) {
        root.style.setProperty("--pc-nav", `${Math.round(nav.getBoundingClientRect().height)}px`);
      }
      if (!mq.matches) {
        root?.style.removeProperty("--pc-shrink");
        return;
      }
      const p = Math.min(1, Math.max(0, window.scrollY / 360));
      root?.style.setProperty("--pc-shrink", p.toFixed(3));
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on, { passive: true });
    mq.addEventListener("change", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      mq.removeEventListener("change", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* send + share */
  const shareUrl = () => `${window.location.origin}/pricing-builder?${buildToQuery(build)}`;

  const send = () => {
    const sections = SECTIONS[build.plan]
      .filter((s) => s.locked || build.sections.includes(s.id))
      .map((s) => tx(s.label, lang));
    const addonLines = q.lines
      .filter((l) => l.kind === "addon")
      .map((l) => {
        const label = lineLabel(l, dict, planName, copy);
        const parts: string[] = [];
        if (l.oneTime) parts.push(`${money(l.oneTime)}${l.id === "crm" ? ` ${copy.setup}` : ""}`);
        if (l.monthly) parts.push(`${money(l.monthly)}${copy.perMonth}`);
        return `${label}: ${l.from ? `${copy.from} ` : ""}${parts.join(" + ")}`;
      });
    const palette = PALETTES.find((p) => p.id === build.palette)!;
    openWhatsApp(
      buildConfiguratorMessage({
        lang,
        plan: planName,
        planPrice: money(q.lines[0].oneTime),
        template: tx(template.cat, lang),
        style: `${copy.tones[build.tone]} · ${copy.palette}: ${tx(palette.label, lang)}`,
        sections,
        addons: addonLines,
        support: build.support ? `${es ? "Sí" : "Yes"} (${money(q.supportMonthly)}${copy.perMonth})` : null,
        oneTime: money(q.oneTime),
        monthly: q.monthly ? `${money(q.monthly)}${copy.perMonth}` : null,
        currency: currency === "DOP" ? "RD$ (DOP)" : "US$ (USD)",
        link: shareUrl(),
      }),
    );
  };

  const share = async () => {
    const url = shareUrl();
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      window.prompt(copy.share, url);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  const reset = () => {
    setBuild(defaultBuild());
    setRemovedNote(null);
    goStep(0);
  };

  const head = (i: number, title: string, sub: string) => (
    <header className="pc-step-head">
      <span className="pc-step-n">{String(i + 1).padStart(2, "0")}</span>
      <h2 tabIndex={-1} id={`${uid}-s${i}`}>
        {title}
      </h2>
      <p>{sub}</p>
    </header>
  );

  const offered = addonsFor(build.plan);
  const palette = PALETTES.find((p) => p.id === build.palette)!;

  const addonPrice = (id: AddonId) => {
    if (id === "crm") {
      return (
        <>
          {copy.from} {money(addonOneTime("crm", currency, rate))} {copy.setup}
          <br />+ {money(addonMonthlyUnit("crm", currency, rate))}
          {copy.perUser}
        </>
      );
    }
    if (id === "ai") {
      return (
        <>
          {copy.from} {money(addonMonthlyUnit("ai", currency, rate))}
          {copy.perMonth}
        </>
      );
    }
    return (
      <>
        +{money(addonOneTime(id, currency, rate))} <small>{copy.oneTime}</small>
      </>
    );
  };

  const currencyToggle = (
    <div className="pc-cur" role="group" aria-label={copy.currency}>
      {(["DOP", "USD"] as Currency[]).map((c) => (
        <button key={c} type="button" aria-pressed={currency === c} onClick={() => setCurrency(c)}>
          {c === "DOP" ? "RD$" : "US$"}
        </button>
      ))}
    </div>
  );

  return (
    <div className="pc">
      <div className="pc-grid">
        <div className="pc-spacer" aria-hidden="true" />
        <div className="pc-stage-wrap" ref={stageWrapRef}>
          <div className="pc-stage-sticky">
            <LivePreview template={template} build={build} lang={lang} copy={copy} planName={planName} focus={focus} />
          </div>
        </div>

        <div className="pc-panel" ref={panelRef}>
          <div className="pc-intro">
            <span className="section-label">{copy.kicker}</span>
            <h1>{copy.title}</h1>
            <p>{copy.lede}</p>
          </div>

          <nav className="pc-rail" aria-label={copy.stepsNav}>
            <ol>
              {copy.steps.map((s, i) => (
                <li key={s}>
                  <button
                    type="button"
                    aria-current={activeStep === i ? "step" : undefined}
                    onClick={() => goStep(i)}
                  >
                    <span aria-hidden="true">{i + 1}</span>
                    <em>{s}</em>
                  </button>
                </li>
              ))}
            </ol>
          </nav>

          {/* 1 — plan */}
          <section className="pc-step" data-step={0} aria-labelledby={`${uid}-s0`}>
            {head(0, copy.s1, copy.s1sub)}
            <div className="pc-plans" role="radiogroup" aria-labelledby={`${uid}-s0`}>
              {PLAN_IDS.map((id) => {
                const t = dict.tiers[id];
                return (
                  <label key={id} className={`pc-plan${build.plan === id ? " is-on" : ""}`}>
                    <input
                      type="radio"
                      name={`${uid}-plan`}
                      className="pc-sr"
                      checked={build.plan === id}
                      onChange={() => pickPlan(id)}
                    />
                    <span className="pc-plan-top">
                      <b>{t.name}</b>
                      <em>{money(planPrice(id, currency, rate))}</em>
                    </span>
                    <small>{t.pages}</small>
                    <span className="pc-plan-desc">{t.desc}</span>
                  </label>
                );
              })}
            </div>
            <p className="pc-note" role="status">
              {removedNote}
            </p>
          </section>

          {/* 2 — style */}
          <section className="pc-step" data-step={1} aria-labelledby={`${uid}-s1`}>
            {head(1, copy.s2, copy.s2sub)}
            <fieldset className="pc-field">
              <legend>{copy.tpl}</legend>
              <div className="pc-tpls">
                {templatesFor(build.plan).map((t) => (
                  <label key={t.id} className={`pc-tpl${build.tpl === t.id ? " is-on" : ""}`}>
                    <input
                      type="radio"
                      name={`${uid}-tpl`}
                      className="pc-sr"
                      checked={build.tpl === t.id}
                      onChange={() => {
                        setBuild((b) => ({ ...b, tpl: t.id }));
                        show("inicio");
                      }}
                    />
                    <span className="pc-tpl-name">{tx(t.cat, lang)}</span>
                    <small>{miniSiteFor(t.id)?.brand ?? t.brand}</small>
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className="pc-field">
              <legend>
                {copy.tone} <span className="pc-free">{copy.free}</span>
              </legend>
              <div className="pc-seg">
                {(["original", "dark"] as Tone[]).map((tone) => (
                  <label key={tone} className={build.tone === tone ? "is-on" : undefined}>
                    <input
                      type="radio"
                      name={`${uid}-tone`}
                      className="pc-sr"
                      checked={build.tone === tone}
                      onChange={() => {
                        setBuild((b) => ({ ...b, tone }));
                        show("inicio");
                      }}
                    />
                    <i data-tone={tone} aria-hidden="true" />
                    {copy.tones[tone]}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className="pc-field">
              <legend>
                {copy.palette} <span className="pc-free">{copy.free}</span>
                <span className="pc-legend-val">{tx(palette.label, lang)}</span>
              </legend>
              <div className="pc-pals">
                {PALETTES.map((p) => (
                  <label key={p.id} className={`pc-pal${build.palette === p.id ? " is-on" : ""}`} title={tx(p.label, lang)}>
                    <input
                      type="radio"
                      name={`${uid}-pal`}
                      className="pc-sr"
                      checked={build.palette === p.id}
                      onChange={() => {
                        setBuild((b) => ({ ...b, palette: p.id }));
                        show("inicio");
                      }}
                    />
                    <span className="pc-pal-dot" aria-hidden="true">
                      {p.swatch.length ? (
                        p.swatch.map((c) => <i key={c} style={{ background: c }} />)
                      ) : (
                        <i className="is-auto" />
                      )}
                    </span>
                    <span className="pc-sr">{tx(p.label, lang)}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </section>

          {/* 3 — sections */}
          <section className="pc-step" data-step={2} aria-labelledby={`${uid}-s2`}>
            {head(2, copy.s3, build.plan === "landing" ? copy.s3subLanding : copy.s3subShop)}
            <ul className="pc-checks">
              {SECTIONS[build.plan].map((s) => {
                const on = !!s.locked || build.sections.includes(s.id);
                return (
                  <li key={`${build.plan}-${s.id}`}>
                    <label className={`pc-check${on ? " is-on" : ""}${s.locked ? " is-locked" : ""}`}>
                      <input
                        type="checkbox"
                        className="pc-sr"
                        checked={on}
                        disabled={s.locked}
                        onChange={(e) => toggleSection(s.id, e.target.checked)}
                      />
                      <i className="pc-box" aria-hidden="true" />
                      <span>{tx(s.label, lang)}</span>
                      <small>{s.locked ? copy.always : copy.free}</small>
                    </label>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* 4 — add-ons */}
          <section className="pc-step" data-step={3} aria-labelledby={`${uid}-s3`}>
            {head(3, copy.s4, copy.s4sub)}
            <ul className="pc-addons">
              {offered.map((id) => {
                const on = build.addons.includes(id);
                return (
                  <li key={id}>
                    <label className={`pc-addon${on ? " is-on" : ""}`}>
                      <input
                        type="checkbox"
                        className="pc-sr"
                        checked={on}
                        onChange={(e) => toggleAddon(id, e.target.checked)}
                      />
                      <i className="pc-box" aria-hidden="true" />
                      <span className="pc-addon-copy">
                        <b>{dict.addons[id].label}</b>
                        <small>{dict.addons[id].desc}</small>
                      </span>
                      <span className="pc-addon-price">{addonPrice(id)}</span>
                    </label>
                    {id === "crm" && on ? (
                      <div className="pc-users">
                        <span id={`${uid}-users`}>{copy.users}</span>
                        <div className="pc-stepper" role="group" aria-labelledby={`${uid}-users`}>
                          <button
                            type="button"
                            aria-label={copy.usersLess}
                            disabled={build.crmUsers <= CRM_USERS_MIN}
                            onClick={() => setUsers(build.crmUsers - 1)}
                          >
                            −
                          </button>
                          <output aria-live="polite">{build.crmUsers}</output>
                          <button
                            type="button"
                            aria-label={copy.usersMore}
                            disabled={build.crmUsers >= CRM_USERS_MAX}
                            onClick={() => setUsers(build.crmUsers + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* 5 — support */}
          <section className="pc-step" data-step={4} aria-labelledby={`${uid}-s4`}>
            {head(4, copy.s5, copy.s5sub)}
            <div className="pc-support" role="radiogroup" aria-labelledby={`${uid}-s4`}>
              {[true, false].map((v) => (
                <label key={String(v)} className={`pc-sup${build.support === v ? " is-on" : ""}`}>
                  <input
                    type="radio"
                    name={`${uid}-sup`}
                    className="pc-sr"
                    checked={build.support === v}
                    onChange={() => {
                      setBuild((b) => ({ ...b, support: v }));
                      show("footer");
                    }}
                  />
                  <span className="pc-plan-top">
                    <b>{v ? copy.supportYes : copy.supportNo}</b>
                    <em>{v ? `${money(supportMonthly(currency, rate))}${copy.perMonth}` : money(0)}</em>
                  </span>
                  {v ? <span className="pc-plan-desc">{dict.support_desc}</span> : null}
                </label>
              ))}
            </div>
          </section>

          {/* 6 — summary */}
          <section className="pc-step pc-step-sum" data-step={5} aria-labelledby={`${uid}-s5`}>
            {head(5, copy.s6, copy.s6sub)}
            <div className="pc-sum">
              <dl>
                <div>
                  <dt>{copy.plan}</dt>
                  <dd>
                    {planName} · {tx(template.cat, lang)}
                  </dd>
                </div>
                <div>
                  <dt>{copy.style}</dt>
                  <dd>
                    {copy.tones[build.tone]} · {copy.palette}: {tx(palette.label, lang)}
                  </dd>
                </div>
                <div>
                  <dt>{copy.sections}</dt>
                  <dd>
                    {SECTIONS[build.plan]
                      .filter((s) => s.locked || build.sections.includes(s.id))
                      .map((s) => tx(s.label, lang))
                      .join(", ")}
                  </dd>
                </div>
              </dl>
              <Breakdown
                lines={q.lines}
                currency={currency}
                dict={dict}
                planName={planName}
                copy={copy}
                oneTime={q.oneTime}
                monthly={q.monthly}
              />
              <p className="pc-fine">
                <b>{copy.demo}.</b> {copy.confirm}
              </p>
              <button type="button" className="btn btn-launch btn-launch-static pc-cta-big" onClick={send}>
                {copy.cta}
              </button>
              <div className="pc-sum-tools">
                <button type="button" className="pc-link" onClick={share}>
                  {copied ? copy.copied : copy.share}
                </button>
                <button type="button" className="pc-link" onClick={reset}>
                  {copy.reset}
                </button>
                <Link href="/" className="pc-link">
                  {copy.back}
                </Link>
              </div>
              <span className="pc-sr" role="status">
                {copied ? copy.copied : ""}
              </span>
            </div>
          </section>

          {/* price bar */}
          <div className={`pc-bar${detailsOpen ? " is-open" : ""}`}>
            <div className="pc-bar-detail" id={`${uid}-detail`} hidden={!detailsOpen}>
              <Breakdown
                lines={q.lines}
                currency={currency}
                dict={dict}
                planName={planName}
                copy={copy}
                oneTime={q.oneTime}
                monthly={q.monthly}
              />
            </div>
            <div className="pc-bar-main">
              <div className="pc-bar-price">
                <small>{copy.oneTimeTotal}</small>
                <b>
                  <AnimatedMoney value={q.oneTime} currency={currency} />
                </b>
                <span className="pc-bar-mo">
                  {q.monthly ? (
                    <>
                      + <AnimatedMoney value={q.monthly} currency={currency} suffix={copy.perMonth} />
                    </>
                  ) : (
                    copy.noMonthly
                  )}
                </span>
              </div>
              <div className="pc-bar-side">
                {currencyToggle}
                <button
                  type="button"
                  className="pc-link pc-bar-toggle"
                  aria-expanded={detailsOpen}
                  aria-controls={`${uid}-detail`}
                  onClick={() => setDetailsOpen((v) => !v)}
                >
                  {detailsOpen ? copy.hideDetails : copy.details}
                </button>
              </div>
              <button type="button" className="btn btn-launch btn-launch-static pc-bar-cta" onClick={send}>
                {copy.ctaShort}
              </button>
            </div>
            <p className="pc-bar-fine">
              {copy.demo} · {copy.confirm}
            </p>
            <span className="pc-sr" aria-live="polite">
              {live}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
