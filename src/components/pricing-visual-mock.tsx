"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import { useGeo } from "@/lib/geo-context";
import { LandingPreview, ShopPreview } from "@/components/pricing-previews";
import { templatesFor, tx, type PlanId, type Template } from "@/lib/pricing-templates";
import { openWhatsAppFunnel } from "@/lib/whatsapp";

const PLANS = ["landing", "shop", "site"] as const;
type Plan = PlanId;
type Variant = "bridge" | "doors" | "workbench" | "well";

const DOP = 60;
const dop = (n: number) => n / DOP;
const PLAN_PRICE: Record<Plan, number> = {
  landing: 349,
  shop: dop(35_000),
  site: dop(100_000),
};
const SITE_MONTHLY = dop(2_000) + dop(4_000) + dop(3_000);

const COPY = {
  es: {
    lab: "Lab · Precios",
    notLive: "No es la homepage en vivo",
    back: "Volver al sitio",
    live: "Ver el actual",
    introTitle: "El presupuesto no puede parecer otra página",
    intro:
      "Hoy servicios termina en papel, y precios arranca en tinta a pantalla completa. Hay que hacer clic otra vez para entrar al estudio. Cada layout de abajo empieza en el cierre de servicios, para que veas el empalme — no un bloque suelto.",
    problem:
      "Salto actual: papel → #05060a full-bleed → teaser → modal. El configurador se esconde dos veces.",
    tabs: {
      bridge: "Puente",
      doors: "Tres puertas",
      workbench: "Estudio abierto",
      well: "Pozo de tinta",
    },
    why: {
      bridge:
        "Misma superficie que servicios. Una frase de mano, y el estudio vive en un pozo — no en una página negra.",
      doors:
        "El destino es un precio, no una herramienta. Eliges tamaño y el configurador se abre debajo: difícil de ignorar.",
      workbench:
        "La vista previa es el ancla. Sin teaser ni modal. Armas el plan a la vista, como un producto.",
      well:
        "El cambio más chico: se queda el estudio oscuro, sentado sobre papel. Desaparece el golpe de full-bleed.",
    },
    servicesLabel: "Qué construimos",
    servicesTitle: "Optimizamos tu presencia online.",
    servicesSub:
      "Web, Maps y WhatsApp abren el camino. El CRM y Nativa entran cuando el chat ya está vivo.",
    cards: [
      { t: "Diseño y desarrollo web", d: "Una página que explica el oficio y manda la visita a WhatsApp." },
      { t: "Google Maps y SEO local", d: "Cuando buscan cerca, apareces primero — con un toque a WhatsApp." },
      { t: "Soporte 24/7", d: "Cambias horarios o fotos por mensaje. Lo publicamos el mismo día." },
    ],
    stackLabel: "Cuando ya llega el chat",
    stackSub: "El mismo WhatsApp. Números que se ven. Un agente al que le escribes.",
    bridgeKicker: "Siguiente paso",
    bridgeTitle: "Ya viste qué construimos. Ahora arma el tuyo.",
    bridgeSub: "Elige el tamaño. La vista previa cambia. El precio queda a la vista — no detrás de un clic.",
    doorsKicker: "Presupuesto",
    doorsTitle: "Empieza por el tamaño",
    doorsSub: "Tres puertas. El estudio se abre debajo de la que elijas.",
    doorsCta: "Armar este plan",
    workKicker: "Presupuesto",
    workTitle: "Arma tu sitio. El precio se mueve contigo.",
    workSub: "La vista previa es real. Cada opción cambia el estimado.",
    wellKicker: "Presupuesto",
    wellTitle: "Arma tu propio sitio",
    wellSub: "El estudio está aquí, no en otra pantalla.",
    from: "Desde",
    pick: "Industria",
    send: "Enviar este presupuesto por WhatsApp",
    oneTime: "Inversión única",
    monthly: "/mes",
    disclaimer: "Estimado, no un cobro. Confirmamos el alcance en 15 minutos.",
  },
  en: {
    lab: "Lab · Pricing",
    notLive: "Not the live homepage",
    back: "Back to the site",
    live: "See live version",
    introTitle: "The estimator cannot feel like another site",
    intro:
      "Today services ends on paper, and pricing opens as full-bleed ink. Then another click to enter the studio. Each layout below starts at the services closer, so you can feel the joint — not an isolated block.",
    problem:
      "Live jump: paper → full-bleed #05060a → teaser → modal. The configurator is hidden twice.",
    tabs: {
      bridge: "Bridge",
      doors: "Three doors",
      workbench: "Open studio",
      well: "Ink well",
    },
    why: {
      bridge:
        "Same surface as services. One hand-off sentence, and the studio lives in a well — not a black page.",
      doors:
        "The destination is a price, not a tool. Pick a size and the builder opens under it: hard to skip.",
      workbench:
        "The preview is the anchor. No teaser, no modal. You build the plan in place, like a product.",
      well:
        "Smallest change: keep the dark studio, sit it on paper. The full-bleed slam goes away.",
    },
    servicesLabel: "What we build",
    servicesTitle: "They find you. Then they write you.",
    servicesSub: "Web, Maps, and WhatsApp open the pipe. CRM and Nativa come in once chat is already alive.",
    cards: [
      { t: "Website design & build", d: "A fast site that explains the work and sends the visit to WhatsApp." },
      { t: "Google Maps & local SEO", d: "When someone nearby searches, you show up first — with a tap to WhatsApp." },
      { t: "24/7 support", d: "Change hours or photos by message. We publish the same day." },
    ],
    stackLabel: "Once the chat is live",
    stackSub: "Same WhatsApp. Numbers you can see. An agent you can text.",
    bridgeKicker: "Next step",
    bridgeTitle: "You saw what we build. Now build yours.",
    bridgeSub: "Pick a size. The preview moves. The price stays in view — not behind a click.",
    doorsKicker: "Estimate",
    doorsTitle: "Start with the size",
    doorsSub: "Three doors. The studio opens under the one you pick.",
    doorsCta: "Build this plan",
    workKicker: "Estimate",
    workTitle: "Build your site. The price moves with you.",
    workSub: "The preview is live. Every option updates the estimate.",
    wellKicker: "Estimate",
    wellTitle: "Build your own website",
    wellSub: "The studio is here, not on another screen.",
    from: "From",
    pick: "Industry",
    send: "Send this quote on WhatsApp",
    oneTime: "One-time",
    monthly: "/mo",
    disclaimer: "A range, not a charge. We confirm scope in 15 minutes.",
  },
} as const;

const VARIANTS: Variant[] = ["bridge", "doors", "workbench", "well"];

function isVariant(v: string): v is Variant {
  return (VARIANTS as string[]).includes(v);
}

const TIER_META = {
  es: {
    landing: { name: "Básico", pages: "Página de aterrizaje" },
    shop: { name: "Ecommerce", pages: "Tienda online" },
    site: { name: "Completo", pages: "Web + CRM + IA" },
  },
  en: {
    landing: { name: "Basic", pages: "Landing page" },
    shop: { name: "Ecommerce", pages: "Online store" },
    site: { name: "Complete", pages: "Web + CRM + AI" },
  },
} as const;

function thumb(t: Template) {
  return t.kind === "shop" ? t.drop.img : t.hero.img;
}

function MiniPreview({
  template,
  lang,
}: {
  template: Template;
  lang: "es" | "en";
}) {
  const flags = {
    seo: true,
    brand: false,
    bilingual: false,
    support: false,
    lang,
  };
  return (
    <div className="vm-stage" aria-hidden="true">
      <div className="vm-frame">
        {template.kind === "shop" ? (
          <ShopPreview template={template} {...flags} />
        ) : (
          <LandingPreview template={template} {...flags} />
        )}
      </div>
    </div>
  );
}

function ServicesCloser({
  t,
}: {
  t: (typeof COPY)[keyof typeof COPY];
}) {
  return (
    <section className="vm-services">
      <div className="container">
        <div className="vm-services-head">
          <div className="section-label">{t.servicesLabel}</div>
          <h2 className="section-title">{t.servicesTitle}</h2>
          <p className="section-sub">{t.servicesSub}</p>
        </div>
        <div className="vm-svc-grid">
          {t.cards.map((card) => (
            <article key={card.t} className="vm-svc-card">
              <div className="vm-svc-stage" />
              <h3>{card.t}</h3>
              <p>{card.d}</p>
            </article>
          ))}
        </div>
        <div className="vm-stack">
          <div className="section-label">{t.stackLabel}</div>
          <p>{t.stackSub}</p>
        </div>
      </div>
    </section>
  );
}

export default function PricingVisualMock() {
  const { lang, fmt } = useGeo();
  const es = lang !== "en";
  const t = COPY[es ? "es" : "en"];
  const tiers = TIER_META[es ? "es" : "en"];
  const [mounted, setMounted] = useState(false);
  const [variant, setVariant] = useState<Variant>("bridge");
  const [plan, setPlan] = useState<Plan>("landing");
  const [tplId, setTplId] = useState("constructora");
  const [doorOn, setDoorOn] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (isVariant(hash)) setVariant(hash);
    setMounted(true);
    const apply = () => {
      const next = window.location.hash.replace(/^#/, "");
      if (isVariant(next)) {
        setVariant(next);
        if (next === "doors") setDoorOn(false);
      }
    };
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const show = (key: Variant) => {
    setVariant(key);
    if (key === "doors") setDoorOn(false);
    if (window.location.hash !== `#${key}`) {
      window.history.replaceState(null, "", `#${key}`);
    }
  };

  const templates = templatesFor(plan);
  const template = useMemo(() => {
    return templates.find((item) => item.id === tplId) ?? templates[0];
  }, [templates, tplId]);

  const pickPlan = (key: Plan) => {
    setPlan(key);
    const list = templatesFor(key);
    if (!list.some((item) => item.id === tplId)) {
      setTplId(list.find((item) => item.id === "constructora")?.id ?? list[0].id);
    }
  };

  const price = PLAN_PRICE[plan];
  const monthly = plan === "site" ? SITE_MONTHLY : 0;

  const planRow = (
    <div className="vm-plans">
      {PLANS.map((key) => (
        <button
          key={key}
          type="button"
          className={`vm-plan${plan === key ? " is-on" : ""}`}
          onClick={() => pickPlan(key)}
        >
          <b>{tiers[key].name}</b>
          <small>{tiers[key].pages}</small>
          <em>
            {t.from} {fmt(PLAN_PRICE[key])}
            {key === "site" ? (
              <span>
                {fmt(SITE_MONTHLY)}
                {t.monthly}
              </span>
            ) : null}
          </em>
        </button>
      ))}
    </div>
  );

  const cats = (
    <div className="vm-cats">
      <span className="vm-cats-label">{t.pick}</span>
      {templates.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`vm-cat${template.id === item.id ? " is-on" : ""}`}
          onClick={() => setTplId(item.id)}
        >
          {tx(item.cat, es ? "es" : "en")}
        </button>
      ))}
    </div>
  );

  const quote = (
    <div className="vm-quote">
      <div>
        <small>{t.oneTime}</small>
        <strong>{fmt(price)}</strong>
        {monthly > 0 ? (
          <em>
            {fmt(monthly)}
            {t.monthly}
          </em>
        ) : null}
      </div>
      <button type="button" className="btn btn-launch" onClick={() => openWhatsAppFunnel("visualmockup")}>
        {t.send}
      </button>
    </div>
  );

  const builder = (
    <div className="vm-builder">
      {planRow}
      {cats}
      <MiniPreview template={template} lang={es ? "es" : "en"} />
      {quote}
      <p className="vm-note">{t.disclaimer}</p>
    </div>
  );

  return (
    <div className="vm-page">
      <div className="vm-labbar">
        <div className="container vm-labbar-inner">
          <div className="vm-labbar-mark">
            <span className="vm-lab-pill">{t.lab}</span>
            <span className="vm-lab-note">{t.notLive}</span>
          </div>
          <div className="vm-lab-links">
            <Link href="/#pricing" className="vm-lab-live">
              {t.live}
            </Link>
            <Link href="/" className="vm-lab-back">
              {t.back}
            </Link>
          </div>
        </div>
      </div>
      <SiteNav />

      <section className="vm-intro">
        <div className="container">
          <h1>{t.introTitle}</h1>
          <p>{t.intro}</p>
          <p className="vm-problem">{t.problem}</p>
        </div>
      </section>

      <div className="vm-switch" role="tablist" aria-label={t.lab}>
        <div className="container vm-switch-inner">
          {VARIANTS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              role="tab"
              data-variant={key}
              aria-selected={variant === key}
              className={`vm-tab${variant === key ? " is-on" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                show(key);
                window.setTimeout(() => {
                  document.querySelector(".vm-pricing")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 50);
              }}
            >
              {t.tabs[key]}
            </a>
          ))}
        </div>
      </div>

      <p className="vm-why">
        <span className="container">{t.why[variant]}</span>
      </p>

      <div id="mock">
        {!mounted ? (
          <section className="vm-services">
            <div className="container">
              <p className="section-sub">Cargando layouts…</p>
            </div>
          </section>
        ) : (
          <div>
            <ServicesCloser t={t} />

        {variant === "bridge" ? (
          <section className="vm-pricing vm-bridge">
            <div className="vm-horizon" aria-hidden="true" />
            <div className="vm-handoff">
              <div className="container">
                <div className="section-label">{t.bridgeKicker}</div>
                <h2>{t.bridgeTitle}</h2>
                <p>{t.bridgeSub}</p>
              </div>
            </div>
            <div className="container">
              <div className="vm-paper-well">{builder}</div>
            </div>
          </section>
        ) : null}

        {variant === "doors" ? (
          <section className="vm-pricing vm-doors">
            <div className="container">
              <div className="vm-sec-head">
                <div className="section-label">{t.doorsKicker}</div>
                <h2>{t.doorsTitle}</h2>
                <p>{t.doorsSub}</p>
              </div>
              <div className="vm-door-grid">
                {PLANS.map((key) => {
                  const sample = templatesFor(key)[0];
                  const on = doorOn && plan === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      className={`vm-door${on ? " is-on" : ""}`}
                      onClick={() => {
                        pickPlan(key);
                        setDoorOn(true);
                      }}
                    >
                      <div className="vm-door-shot">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={thumb(sample)} alt="" />
                      </div>
                      <div className="vm-door-meta">
                        <b>{tiers[key].name}</b>
                        <small>{tiers[key].pages}</small>
                        <em>
                          {t.from} {fmt(PLAN_PRICE[key])}
                        </em>
                        <span className="vm-door-cta">{t.doorsCta}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
              {doorOn ? <div className="vm-door-open">{builder}</div> : null}
            </div>
          </section>
        ) : null}

        {variant === "workbench" ? (
          <section className="vm-pricing vm-work">
            <div className="container">
              <div className="vm-work-grid">
                <div className="vm-work-copy">
                  <div className="section-label">{t.workKicker}</div>
                  <h2>{t.workTitle}</h2>
                  <p>{t.workSub}</p>
                  {planRow}
                  {cats}
                  {quote}
                  <p className="vm-note">{t.disclaimer}</p>
                </div>
                <div className="vm-work-preview">
                  <MiniPreview template={template} lang={es ? "es" : "en"} />
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {variant === "well" ? (
          <section className="vm-pricing vm-well">
            <div className="container">
              <div className="vm-ink">
                <div className="vm-ink-head">
                  <div className="section-label">{t.wellKicker}</div>
                  <h2>{t.wellTitle}</h2>
                  <p>{t.wellSub}</p>
                </div>
                {builder}
              </div>
            </div>
          </section>
        ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
