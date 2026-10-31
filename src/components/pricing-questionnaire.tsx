"use client";
/* Pricing questionnaire — one question per screen, live preview reacts to every answer.
   Motion: GSAP (+Flip). transform / opacity / clip-path only. Reduced motion = static swaps. */
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import { buildConfiguratorMessage, openWhatsApp } from "@/lib/whatsapp";
import { TEMPLATES, findTemplate, templatesFor, tx } from "@/lib/pricing-templates";
import { addonsFor, formatMoney, quote, sanitizeAddons, type AddonId, type PlanId } from "@/lib/pricing";
import { PALETTES, SECTIONS, STORAGE_KEY, defaultBuild, normalizeBuild, type Build, type Tone } from "@/lib/configurator";
import { AnimatedMoney, COPY } from "@/components/pricing-configurator";
import PricingIllustration from "@/components/pricing-illustration";
import "./pricing-builder.css";
import "./pricing-configurator.css";
import "./pricing-configurator-mobile.css";
import "./pricing-questionnaire.css";

if (typeof window !== "undefined") gsap.registerPlugin(Flip, useGSAP);

type Lang = "es" | "en";
const CONTACT_KEY = "nativa_pricing_contact_v1";
/* DRAFT copy — marked for review */
const Q = {
  es: {
    kicker: "Cotizador · borrador",
    steps: ["Rubro", "Objetivo", "Secciones", "Extras", "Estilo", "Contacto"],
    q: [
      "¿A qué se dedica tu negocio?",
      "¿Qué quieres que haga tu sitio?",
      "¿Qué secciones quieres mostrar?",
      "¿Le sumamos algo más?",
      "¿Cómo lo quieres ver?",
      "¿A quién le enviamos el demo?",
    ],
    sub: [
      "Elige el más cercano. La vista previa cambia al instante.",
      "Puedes cambiarlo después.",
      "Las fijas vienen siempre. El resto, sin costo.",
      "Opcional. Solo ves lo disponible para tu plan.",
      "El estilo es gratis: lo afinamos en el diseño real.",
      "Te escribimos por WhatsApp con tu demo gratis en 48 h.",
    ],
    purpose: {
      landing: ["Que me encuentren y me escriban", "Una página que presenta tu negocio y lleva a WhatsApp."],
      shop: ["Vender en línea", "Catálogo, ficha de producto y bolsa."],
    },
    fixed: "Fija",
    name: "Tu nombre",
    biz: "Nombre del negocio",
    wa: "Tu WhatsApp",
    next: "Siguiente",
    back: "Atrás",
    send: "Pedir mi demo por WhatsApp",
    total: "Inversión única",
    monthly: "Mensual",
    of: (a: number, b: number) => `Paso ${a} de ${b}`,
    tones: { original: "Como la plantilla", dark: "Oscuro" } as Record<Tone, string>,
  },
  en: {
    kicker: "Quote · draft",
    steps: ["Industry", "Goal", "Sections", "Extras", "Style", "Contact"],
    q: [
      "What does your business do?",
      "What should your site do?",
      "Which sections do you want?",
      "Add anything else?",
      "How should it look?",
      "Who do we send the demo to?",
    ],
    sub: [
      "Pick the closest. The preview updates instantly.",
      "You can change it later.",
      "Fixed ones are always in. The rest are free.",
      "Optional. Only what your plan offers.",
      "Style is free: we fine-tune it in the real design.",
      "We'll WhatsApp you a free demo in 48 h.",
    ],
    purpose: {
      landing: ["Get found and get messages", "One page that presents you and leads to WhatsApp."],
      shop: ["Sell online", "Catalog, product page and bag."],
    },
    fixed: "Fixed",
    name: "Your name",
    biz: "Business name",
    wa: "Your WhatsApp",
    next: "Next",
    back: "Back",
    send: "Request my demo on WhatsApp",
    total: "One-time",
    monthly: "Monthly",
    of: (a: number, b: number) => `Step ${a} of ${b}`,
    tones: { original: "Template's own", dark: "Dark" } as Record<Tone, string>,
  },
};
const N = 6;

export default function PricingQuestionnaire() {
  const { lang: rawLang, currency, rate } = useGeo();
  const lang: Lang = rawLang === "en" ? "en" : "es";
  const t = Q[lang];
  const copy = COPY[lang];
  const dict = translations[lang].pricing;
  const [build, setBuild] = useState<Build>(() => defaultBuild());
  const [step, setStep] = useState(0);
  const [contact, setContact] = useState({ name: "", biz: "", wa: "" });
  const [ready, setReady] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const dir = useRef(1);
  const flipState = useRef<Flip.FlipState | null>(null);

  useEffect(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      if (s) setBuild(normalizeBuild(JSON.parse(s)));
      const c = localStorage.getItem(CONTACT_KEY);
      if (c) setContact((p) => ({ ...p, ...JSON.parse(c) }));
    } catch {}
    
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(build));
      localStorage.setItem(CONTACT_KEY, JSON.stringify(contact));
    } catch {}
  }, [build, contact, ready]);

  const template = findTemplate(build.tpl) ?? templatesFor(build.plan)[0];
  const planName = dict.tiers[build.plan].name;
  const q = useMemo(() => quote(build, currency, rate), [build, currency, rate]);

  /* capture layout before any answer so Flip can animate the selection marker + preview frame */
  const capture = () => {
    if (!root.current) return;
    flipState.current = Flip.getState(root.current.querySelectorAll("[data-flip-id]"));
  };
  const update = (fn: (b: Build) => Build) => {
    capture();
    setBuild((b) => normalizeBuild(fn(b)));
  };

  const { contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // first paint: nothing hidden; only the progress bar settles
        gsap.from(".qz-bar i", { scaleX: 0, duration: 0.6, ease: "power3.out" });
      });
    },
    { scope: root },
  );

  /* Flip after an answer re-renders */
  useEffect(() => {
    const st = flipState.current;
    if (!st || !root.current) return;
    flipState.current = null;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    Flip.from(st, { duration: 0.45, ease: "power3.inOut", absolute: false, targets: root.current.querySelectorAll("[data-flip-id]") });
    gsap.fromTo(
      root.current.querySelector(".qz-prev-frame"),
      { clipPath: "inset(0 0 0 0 round 12px)", scale: 0.985 },
      { scale: 1, duration: 0.5, ease: "power3.out", clearProps: "transform" },
    );
  }, [build]);

  /* clip-path wipe between questions; stagger options in; play once, then settle */
  useEffect(() => {
    const el = panel.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const d = dir.current;
    const tl = gsap.timeline();
    tl.fromTo(
      el,
      { clipPath: d > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)", x: 24 * d },
      { clipPath: "inset(0 0% 0 0%)", x: 0, duration: 0.55, ease: "expo.out", clearProps: "clipPath,transform" },
    ).from(el.querySelectorAll(".qz-opt"), { y: 12, opacity: 0, duration: 0.4, stagger: 0.04, ease: "power2.out", clearProps: "all" }, 0.12);
    return () => {
      tl.kill();
    };
  }, [step]);

  const go = contextSafe((n: number) => {
    const to = Math.max(0, Math.min(N - 1, n));
    if (to === step) return;
    dir.current = to > step ? 1 : -1;
    const el = panel.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return setStep(to);
    gsap.to(el, {
      clipPath: dir.current > 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
      x: -16 * dir.current,
      duration: 0.28,
      ease: "power2.in",
      onComplete: () => setStep(to),
    });
  });

  const money = (n: number) => formatMoney(n, currency);
  const toggle = <T,>(arr: T[], v: T) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
  const canNext = step < N - 1;
  const contactOk = contact.name.trim().length > 1 && contact.wa.replace(/\D/g, "").length >= 7;

  const send = () => {
    const palette = PALETTES.find((p) => p.id === build.palette)!;
    const sections = SECTIONS[build.plan].filter((s) => s.locked || build.sections.includes(s.id)).map((s) => tx(s.label, lang));
    const addons = build.addons.map((a) => dict.addons[a].label);
    const head = lang === "es"
      ? `Nombre: ${contact.name}${contact.biz ? ` · Negocio: ${contact.biz}` : ""} · WhatsApp: ${contact.wa}\n\n`
      : `Name: ${contact.name}${contact.biz ? ` · Business: ${contact.biz}` : ""} · WhatsApp: ${contact.wa}\n\n`;
    openWhatsApp(
      head +
        buildConfiguratorMessage({
          lang,
          plan: planName,
          planPrice: money(q.lines[0].oneTime),
          template: tx(template.cat, lang),
          style: `${t.tones[build.tone]} · ${tx(palette.label, lang)}`,
          sections,
          addons,
          support: null,
          oneTime: money(q.oneTime),
          monthly: q.monthly ? `${money(q.monthly)}/mes` : null,
          currency: currency === "DOP" ? "RD$ (DOP)" : "US$ (USD)",
        }),
    );
  };

  const Opt = ({ on, onClick, title, sub, aside }: { on: boolean; onClick: () => void; title: string; sub?: string; aside?: string }) => (
    <button type="button" className={`qz-opt${on ? " is-on" : ""}`} aria-pressed={on} onClick={onClick}>
      {on && <span className="qz-mark" data-flip-id={`mark-${step}`} aria-hidden="true" />}
      <span className="qz-opt-t">{title}</span>
      {sub && <span className="qz-opt-s">{sub}</span>}
      {aside && <span className="qz-opt-a">{aside}</span>}
    </button>
  );

  const body = () => {
    switch (step) {
      case 0:
        return (
          <div className="qz-grid">
            {TEMPLATES.map((tp) => (
              <Opt
                key={tp.id}
                on={build.tpl === tp.id}
                title={tx(tp.cat, lang)}
                sub={tp.kind === "shop" ? dict.tiers.shop.name : dict.tiers.landing.name}
                onClick={() => update((b) => ({ ...b, plan: tp.kind as PlanId, tpl: tp.id, sections: b.plan === tp.kind ? b.sections : defaultBuild(tp.kind as PlanId).sections }))}
              />
            ))}
          </div>
        );
      case 1:
        return (
          <div className="qz-list">
            {(["landing", "shop"] as PlanId[]).map((p) => (
              <Opt
                key={p}
                on={build.plan === p}
                title={t.purpose[p][0]}
                sub={`${dict.tiers[p].name} · ${t.purpose[p][1]}`}
                aside={money(quote({ plan: p, addons: [], support: false }, currency, rate).oneTime)}
                onClick={() =>
                  update((b) =>
                    b.plan === p ? b : { ...defaultBuild(p), tone: b.tone, palette: b.palette, tpl: templatesFor(p).some((x) => x.id === b.tpl) ? b.tpl : templatesFor(p)[0].id, addons: sanitizeAddons(p, b.addons).kept },
                  )
                }
              />
            ))}
          </div>
        );
      case 2:
        return (
          <div className="qz-grid">
            {SECTIONS[build.plan].map((s) => (
              <Opt
                key={s.id}
                on={!!s.locked || build.sections.includes(s.id)}
                title={tx(s.label, lang)}
                aside={s.locked ? t.fixed : undefined}
                onClick={() => !s.locked && update((b) => ({ ...b, sections: toggle(b.sections, s.id) }))}
              />
            ))}
          </div>
        );
      case 3:
        return (
          <div className="qz-list">
            {addonsFor(build.plan).map((a: AddonId) => {
              const line = quote({ plan: build.plan, addons: [a], support: false }, currency, rate);
              const one = line.oneTime - q.lines[0].oneTime;
              return (
                <Opt
                  key={a}
                  on={build.addons.includes(a)}
                  title={dict.addons[a].label}
                  sub={dict.addons[a].desc}
                  aside={`${one > 0 ? "+" + money(one) : ""}${line.monthly ? ` ${one > 0 ? "· " : "+"}${money(line.monthly)}/mes` : ""}`}
                  onClick={() => update((b) => ({ ...b, addons: toggle(b.addons, a) }))}
                />
              );
            })}
          </div>
        );
      case 4:
        return (
          <>
            <div className="qz-list qz-two">
              {(["original", "dark"] as Tone[]).map((tn) => (
                <Opt key={tn} on={build.tone === tn} title={t.tones[tn]} onClick={() => update((b) => ({ ...b, tone: tn }))} />
              ))}
            </div>
            <div className="qz-grid qz-pal">
              {PALETTES.map((p) => (
                <button key={p.id} type="button" className={`qz-opt qz-sw${build.palette === p.id ? " is-on" : ""}`} aria-pressed={build.palette === p.id} onClick={() => update((b) => ({ ...b, palette: p.id }))}>
                  {build.palette === p.id && <span className="qz-mark" data-flip-id="mark-pal" aria-hidden="true" />}
                  <span className="qz-dots">{(p.swatch.length ? p.swatch : ["#F7F8FA", "#0B0D12", "#1E4FD7"]).map((c) => <i key={c} style={{ background: c }} />)}</span>
                  <span className="qz-opt-t">{tx(p.label, lang)}</span>
                </button>
              ))}
            </div>
          </>
        );
      default:
        return (
          <form className="qz-form" onSubmit={(e) => { e.preventDefault(); if (contactOk) send(); }}>
            <label className="qz-field"><span>{t.name}</span><input autoComplete="name" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} required /></label>
            <label className="qz-field"><span>{t.biz}</span><input autoComplete="organization" value={contact.biz} onChange={(e) => setContact({ ...contact, biz: e.target.value })} /></label>
            <label className="qz-field"><span>{t.wa}</span><input type="tel" inputMode="tel" autoComplete="tel" placeholder="809 000 0000" value={contact.wa} onChange={(e) => setContact({ ...contact, wa: e.target.value })} required /></label>
            <button className="qz-cta" type="submit" disabled={!contactOk}>{t.send}</button>
          </form>
        );
    }
  };

  return (
    <section className="qz" ref={root} aria-labelledby="qz-q">
      <div className="qz-wrap">
        <div className="qz-left">
          <p className="qz-kicker">{t.kicker}</p>
          <div className="qz-bar" aria-hidden="true"><i style={{ transform: `scaleX(${(step + 1) / N})` }} /></div>
          <ol className="qz-steps" aria-label={t.of(step + 1, N)}>
            {t.steps.map((s, i) => (
              <li key={s} className={i === step ? "is-on" : i < step ? "is-done" : ""}>
                <button type="button" onClick={() => go(i)} aria-current={i === step ? "step" : undefined}>{s}</button>
              </li>
            ))}
          </ol>
          <div className="qz-panel" ref={panel} key={step}>
            <p className="qz-count">{t.of(step + 1, N)}</p>
            <h1 className="qz-q" id="qz-q">{t.q[step]}</h1>
            <p className="qz-sub">{t.sub[step]}</p>
            {body()}
          </div>
          <div className="qz-nav">
            <button type="button" className="qz-ghost" onClick={() => go(step - 1)} disabled={step === 0}>{t.back}</button>
            {canNext && <button type="button" className="qz-next" onClick={() => go(step + 1)}>{t.next}</button>}
          </div>
        </div>
        <aside className="qz-right" aria-label={copy.preview}>
          <div className="qz-prev-frame" data-flip-id="preview">
            <PricingIllustration build={build} lang={lang} label={`${tx(template.cat, lang)} · ${planName}`} addonLabels={Object.fromEntries(Object.entries(dict.addons).map(([k, v]) => [k, v.label]))} />
          </div>
          <div className="qz-price" aria-live="polite">
            <div><span>{t.total}</span><strong><AnimatedMoney value={q.oneTime} currency={currency} /></strong></div>
            {q.monthly > 0 && <div><span>{t.monthly}</span><strong><AnimatedMoney value={q.monthly} currency={currency} suffix="/mes" /></strong></div>}
          </div>
        </aside>
      </div>
    </section>
  );
}
