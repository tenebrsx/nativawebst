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
type SID = "industry" | "goal" | "domain" | "brand" | "ai" | "crm" | "support" | "extras" | "contact";
type Txt = Record<SID, string>;
const Q = {
  es: {
    kicker: "Cotizador · borrador",
    steps: { industry: "Rubro", goal: "Objetivo", domain: "Dominio", brand: "Marca", ai: "IA", crm: "CRM", support: "Soporte", extras: "Extras", contact: "Contacto" } as Txt,
    q: {
      industry: "¿A qué se dedica tu negocio?",
      goal: "¿Qué quieres que haga tu sitio?",
      domain: "¿Ya tienes un dominio?",
      brand: "¿Ya tienes tu marca lista?",
      ai: "¿Quieres un asistente de IA en tu WhatsApp?",
      crm: "¿Necesitas un CRM para tus clientes?",
      support: "¿Qué soporte quieres después de publicar?",
      extras: "¿Le sumamos algo más?",
      contact: "¿A quién le enviamos el demo?",
    } as Txt,
    sub: {
      industry: "Elige el más cercano. La ilustración cambia al instante.",
      goal: "Puedes cambiarlo después.",
      domain: "Tu dirección web, por ejemplo tunegocio.com.",
      brand: "Logo, colores y tipografía.",
      ai: "Responde las preguntas de siempre y agenda citas por ti.",
      crm: "Tus contactos, etapas y notas en un tablero, alimentado por tus chats de WhatsApp.",
      support: "Puedes cambiarlo cuando quieras.",
      extras: "Opcional.",
      contact: "Te escribimos por WhatsApp con tu demo gratis en 48 h.",
    } as Txt,
    purpose: {
      landing: ["Que me encuentren y me escriban", "Una página que presenta tu negocio y lleva a WhatsApp."],
      shop: ["Vender en línea", "Catálogo, ficha de producto y bolsa."],
    },
    domHave: ["Sí, ya tengo uno", "Lo conectamos a tu sitio."],
    domWant: ["No, quiero uno", "Te ayudamos a escogerlo y registrarlo. El costo del dominio se confirma en la llamada."],
    domLabel: "Tu dominio",
    brandYes: ["Sí, ya la tengo", "Usamos tu logo y colores."],
    brandNo: ["No, ayúdenme con eso", "Diseño de marca e identidad."],
    yes: "Sí, lo quiero",
    no: "No por ahora",
    supStd: ["Estándar", "Correcciones de errores y respuesta por WhatsApp."],
    supAct: ["Activo", "Cambios cada mes, actualizaciones y monitoreo."],
    included: "Incluido",
    name: "Tu nombre",
    biz: "Nombre del negocio",
    wa: "Tu WhatsApp",
    next: "Siguiente",
    back: "Atrás",
    send: "Pedir mi demo por WhatsApp",
    total: "Inversión única",
    monthly: "Mensual",
    per: "/mes",
    of: (a: number, b: number) => `Paso ${a} de ${b}`,
  },
  en: {
    kicker: "Quote · draft",
    steps: { industry: "Industry", goal: "Goal", domain: "Domain", brand: "Brand", ai: "AI", crm: "CRM", support: "Support", extras: "Extras", contact: "Contact" } as Txt,
    q: {
      industry: "What does your business do?",
      goal: "What should your site do?",
      domain: "Do you already have a domain?",
      brand: "Is your brand ready?",
      ai: "Want an AI assistant on your WhatsApp?",
      crm: "Do you need a CRM for your clients?",
      support: "What support do you want after launch?",
      extras: "Add anything else?",
      contact: "Who do we send the demo to?",
    } as Txt,
    sub: {
      industry: "Pick the closest. The illustration updates instantly.",
      goal: "You can change it later.",
      domain: "Your web address, e.g. yourbusiness.com.",
      brand: "Logo, colours and type.",
      ai: "Answers routine questions and books appointments for you.",
      crm: "Contacts, stages and notes on one board, fed by your WhatsApp chats.",
      support: "Change it any time.",
      extras: "Optional.",
      contact: "We'll WhatsApp you a free demo in 48 h.",
    } as Txt,
    purpose: {
      landing: ["Get found and get messages", "One page that presents you and leads to WhatsApp."],
      shop: ["Sell online", "Catalog, product page and bag."],
    },
    domHave: ["Yes, I have one", "We connect it to your site."],
    domWant: ["No, I want one", "We help you pick and register it. Domain cost is confirmed on the call."],
    domLabel: "Your domain",
    brandYes: ["Yes, it's ready", "We use your logo and colours."],
    brandNo: ["No, help me with it", "Brand design and identity."],
    yes: "Yes, I want it",
    no: "Not for now",
    supStd: ["Standard", "Bug fixes and WhatsApp replies."],
    supAct: ["Active", "Monthly changes, updates and monitoring."],
    included: "Included",
    name: "Your name",
    biz: "Business name",
    wa: "Your WhatsApp",
    next: "Next",
    back: "Back",
    send: "Request my demo on WhatsApp",
    total: "One-time",
    monthly: "Monthly",
    per: "/mo",
    of: (a: number, b: number) => `Step ${a} of ${b}`,
  },
};


export default function PricingQuestionnaire() {
  const { lang: rawLang, currency, rate } = useGeo();
  const lang: Lang = rawLang === "en" ? "en" : "es";
  const t = Q[lang];
  const copy = COPY[lang];
  void copy;
  const dict = translations[lang].pricing;
  const [build, setBuild] = useState<Build>(() => defaultBuild());
  const [step, setStep] = useState(0);
  const [contact, setContact] = useState<{ name: string; biz: string; wa: string; dom: "" | "have" | "want"; domain: string; brandReady: "" | "yes" | "no" }>({ name: "", biz: "", wa: "", dom: "", domain: "", brandReady: "" });
  const [ready, setReady] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const dir = useRef(1);
  const flipState = useRef<Flip.FlipState | null>(null);

  useEffect(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      if (s) setBuild(normalizeBuild({ ...JSON.parse(s), tone: "original", palette: "plantilla" }));
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

  const ids: SID[] = ["industry", "goal", "domain", "brand", ...(addonsFor(build.plan).includes("ai") ? (["ai"] as SID[]) : []), ...(addonsFor(build.plan).includes("crm") ? (["crm"] as SID[]) : []), "support", "extras", "contact"];
  const N = ids.length;
  const sid = ids[Math.min(step, N - 1)];
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
  const setAddon = (id: AddonId, on: boolean) => update((b) => ({ ...b, addons: on ? (b.addons.includes(id) ? b.addons : [...b.addons, id]) : b.addons.filter((x) => x !== id) }));
  const addonPrice = (id: AddonId) => { const l = quote({ plan: build.plan, addons: [id], support: false }, currency, rate); const one = l.oneTime - q.lines[0].oneTime; return [one > 0 ? "+" + money(one) : "", l.monthly ? `+${money(l.monthly)}${t.per}` : ""].filter(Boolean).join(" · "); };
  const toggle = <T,>(arr: T[], v: T) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
  const canNext = step < N - 1;
  const contactOk = contact.name.trim().length > 1 && contact.wa.replace(/\D/g, "").length >= 7;

  const send = () => {
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
          style: [contact.dom === "have" ? `${t.domLabel}: ${contact.domain || "—"}` : contact.dom === "want" ? t.domWant[0] : "", contact.brandReady === "yes" ? t.brandYes[0] : contact.brandReady === "no" ? t.brandNo[0] : ""].filter(Boolean).join(" · ") || "—",
          sections,
          addons,
          support: build.support ? `${t.supAct[0]} (${money(q.supportMonthly)}${t.per})` : t.supStd[0],
          oneTime: money(q.oneTime),
          monthly: q.monthly ? `${money(q.monthly)}/mes` : null,
          currency: currency === "DOP" ? "RD$ (DOP)" : "US$ (USD)",
        }),
    );
  };

  const Opt = ({ on, onClick, title, sub, aside }: { on: boolean; onClick: () => void; title: string; sub?: string; aside?: string }) => (
    <button type="button" className={`qz-opt${on ? " is-on" : ""}`} aria-pressed={on} onClick={onClick}>
      {on && <span className="qz-mark" data-flip-id={`mark-${sid}`} aria-hidden="true" />}
      <span className="qz-opt-t">{title}</span>
      {sub && <span className="qz-opt-s">{sub}</span>}
      {aside && <span className="qz-opt-a">{aside}</span>}
    </button>
  );

  const body = () => {
    switch (sid) {
      case "industry":
        return (
          <div className="qz-grid">
            {TEMPLATES.map((tp) => (
              <Opt key={tp.id} on={build.tpl === tp.id} title={tx(tp.cat, lang)} sub={tp.kind === "shop" ? dict.tiers.shop.name : dict.tiers.landing.name}
                onClick={() => update((b) => ({ ...b, plan: tp.kind as PlanId, tpl: tp.id, addons: sanitizeAddons(tp.kind as PlanId, b.addons).kept }))} />
            ))}
          </div>
        );
      case "goal":
        return (
          <div className="qz-list">
            {(["landing", "shop"] as PlanId[]).map((p) => (
              <Opt key={p} on={build.plan === p} title={t.purpose[p][0]} sub={`${dict.tiers[p].name} · ${t.purpose[p][1]}`}
                aside={money(quote({ plan: p, addons: [], support: false }, currency, rate).oneTime)}
                onClick={() => update((b) => (b.plan === p ? b : { ...defaultBuild(p), support: b.support, tpl: templatesFor(p).some((x) => x.id === b.tpl) ? b.tpl : templatesFor(p)[0].id, addons: sanitizeAddons(p, b.addons).kept }))} />
            ))}
          </div>
        );
      case "domain":
        return (
          <div className="qz-list">
            <Opt on={contact.dom === "have"} title={t.domHave[0]} sub={t.domHave[1]} onClick={() => { capture(); setContact({ ...contact, dom: "have" }); }} />
            {contact.dom === "have" && (
              <label className="qz-field"><span>{t.domLabel}</span><input inputMode="url" autoComplete="url" placeholder="tunegocio.com" value={contact.domain} onChange={(e) => setContact({ ...contact, domain: e.target.value.trim() })} /></label>
            )}
            <Opt on={contact.dom === "want"} title={t.domWant[0]} sub={t.domWant[1]} onClick={() => { capture(); setContact({ ...contact, dom: "want" }); }} />
          </div>
        );
      case "brand":
        return (
          <div className="qz-list">
            <Opt on={contact.brandReady === "yes"} title={t.brandYes[0]} sub={t.brandYes[1]} onClick={() => { setContact({ ...contact, brandReady: "yes" }); setAddon("brand", false); }} />
            <Opt on={contact.brandReady === "no"} title={t.brandNo[0]} sub={t.brandNo[1]} aside={addonPrice("brand")} onClick={() => { setContact({ ...contact, brandReady: "no" }); setAddon("brand", true); }} />
          </div>
        );
      case "ai":
      case "crm": {
        const id = sid as AddonId;
        return (
          <div className="qz-list">
            <Opt on={build.addons.includes(id)} title={t.yes} sub={dict.addons[id].label} aside={addonPrice(id)} onClick={() => setAddon(id, true)} />
            <Opt on={!build.addons.includes(id)} title={t.no} onClick={() => setAddon(id, false)} />
          </div>
        );
      }
      case "support":
        return (
          <div className="qz-list">
            <Opt on={!build.support} title={t.supStd[0]} sub={t.supStd[1]} aside={t.included} onClick={() => update((b) => ({ ...b, support: false }))} />
            <Opt on={build.support} title={t.supAct[0]} sub={t.supAct[1]} aside={`+${money(q.supportMonthly || quote({ plan: build.plan, addons: [], support: true }, currency, rate).supportMonthly)}${t.per}`} onClick={() => update((b) => ({ ...b, support: true }))} />
          </div>
        );
      case "extras":
        return (
          <div className="qz-list">
            {addonsFor(build.plan).filter((a) => !["brand", "crm", "ai"].includes(a)).map((a: AddonId) => (
              <Opt key={a} on={build.addons.includes(a)} title={dict.addons[a].label} sub={dict.addons[a].desc} aside={addonPrice(a)} onClick={() => setAddon(a, !build.addons.includes(a))} />
            ))}
          </div>
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
            {ids.map((k) => t.steps[k]).map((s, i) => (
              <li key={s} className={i === step ? "is-on" : i < step ? "is-done" : ""}>
                <button type="button" onClick={() => go(i)} aria-current={i === step ? "step" : undefined}>{s}</button>
              </li>
            ))}
          </ol>
          <div className="qz-panel" ref={panel} key={step}>
            <p className="qz-count">{t.of(step + 1, N)}</p>
            <h1 className="qz-q" id="qz-q">{t.q[sid]}</h1>
            <p className="qz-sub">{t.sub[sid]}</p>
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
