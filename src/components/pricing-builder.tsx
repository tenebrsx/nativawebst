"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import { buildQuoteMessage, openWhatsApp } from "@/lib/whatsapp";
import { LandingPreview, ShopPreview } from "@/components/pricing-previews";
import { templatesFor, tx, type PlanId, type Template } from "@/lib/pricing-templates";
import "./pricing-builder.css";

const PLANS = ["landing", "shop", "site"] as const;
type Plan = PlanId;
type OneTimeAddon = "seo" | "brand" | "bilingual" | "shopify";
type MonthlyAddon = "crm" | "ai";
type AddonId = OneTimeAddon | MonthlyAddon;
const BASE_ADDONS: OneTimeAddon[] = ["seo", "brand", "bilingual"];

const DOP = 60;
const dop = (n: number) => n / DOP;

const PLAN_PRICE: Record<Plan, number> = {
  landing: 349,
  site: dop(100_000),
  shop: dop(35_000),
};

const ADDON_ONE_TIME: Record<OneTimeAddon, number> = {
  seo: dop(5_000),
  brand: dop(5_000),
  bilingual: dop(3_000),
  shopify: dop(4_000),
};

const SUPPORT_PRICE = dop(3_000);
const SITE_CRM_PRICE = dop(12_000);
const SITE_AI_PRICE = dop(6_000);
const SITE_MONTHLY = SITE_CRM_PRICE + SITE_AI_PRICE + SUPPORT_PRICE;

const ADDON_MONTHLY: Record<MonthlyAddon, number> = {
  crm: SITE_CRM_PRICE,
  ai: SITE_AI_PRICE,
};

function isMonthlyAddon(id: AddonId): id is MonthlyAddon {
  return id === "crm" || id === "ai";
}

function addonAmount(id: AddonId) {
  return isMonthlyAddon(id) ? ADDON_MONTHLY[id] : ADDON_ONE_TIME[id];
}

function addonsFor(plan: Plan): AddonId[] {
  if (plan === "shop") return ["shopify", "brand", "bilingual", "seo"];
  if (plan === "site") return ["brand", "bilingual"];
  return [...BASE_ADDONS, "crm", "ai"];
}

function askStepsFor(plan: Plan) {
  const extras = addonsFor(plan);
  return plan === "site"
    ? (["plan", "template", ...extras, "send"] as const)
    : (["plan", "template", ...extras, "support", "send"] as const);
}

export default function PricingBuilder() {
  const [plan, setPlan] = useState<Plan>("landing");
  const [tplId, setTplId] = useState("clinica");
  const [addons, setAddons] = useState<Set<string>>(new Set());
  const [support, setSupport] = useState(false);
  const [open, setOpen] = useState(false);
  const [ask, setAsk] = useState(0);
  const scroller = useRef<HTMLDivElement>(null);

  const { lang, fmt } = useGeo();
  const dict = translations[lang].pricing;
  const es = lang === "es";
  const addonIds = addonsFor(plan);
  const askSteps = askStepsFor(plan);
  const sitePlan = plan === "site";

  const template = useMemo(() => {
    const list = templatesFor(plan);
    return list.find((t) => t.id === tplId) ?? list[0];
  }, [plan, tplId]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.dataset.pbOpen = "1";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      delete document.body.dataset.pbOpen;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    setAsk((i) => Math.min(i, askSteps.length - 1));
  }, [askSteps.length]);

  const toggleAddon = (id: string, on?: boolean) => {
    setAddons((prev) => {
      const next = new Set(prev);
      const shouldOn = on === undefined ? !next.has(id) : on;
      if (shouldOn) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  const { totalOneTime, totalMonthly } = useMemo(() => {
    let oneTime = PLAN_PRICE[plan];
    let monthly = 0;
    addonsFor(plan).forEach((id) => {
      if (!addons.has(id)) return;
      if (isMonthlyAddon(id)) monthly += ADDON_MONTHLY[id];
      else oneTime += ADDON_ONE_TIME[id];
    });
    if (plan === "site") monthly = SITE_MONTHLY;
    else if (support) monthly += SUPPORT_PRICE;
    return {
      totalOneTime: oneTime,
      totalMonthly: monthly,
    };
  }, [plan, addons, support]);

  const flags = {
    seo: sitePlan || addons.has("seo"),
    brand: addons.has("brand"),
    bilingual: addons.has("bilingual"),
    support: sitePlan || support,
    shopify: addons.has("shopify"),
    crm: sitePlan || addons.has("crm"),
    ai: sitePlan || addons.has("ai"),
    lang: (lang === "en" ? "en" : "es") as "es" | "en",
  };

  const sendLabel = es
    ? "Enviar este presupuesto por WhatsApp →"
    : "Send this quote on WhatsApp →";

  const stackCrm = es ? "CRM personal" : "Personal CRM";
  const stackAi = es ? "IA personalizada sincronizada con CRM" : "Brand AI synced with CRM";
  const stackCare = es ? "Mantenimiento y cambios" : "Maintenance and changes";

  const sendBrief = useCallback(() => {
    openWhatsApp(
      buildQuoteMessage({
        lang: es ? "es" : "en",
        tierName: `${dict.tiers[plan].name} · ${tx(template.cat, es ? "es" : "en")}`,
        addonLabels: [
          ...addonsFor(plan)
            .filter((id) => addons.has(id) && !isMonthlyAddon(id))
            .map((id) => dict.addons[id].label),
          ...(plan === "site"
            ? [es ? "Google Maps y SEO (incluido)" : "Google Maps and SEO (included)"]
            : []),
        ],
        stackLabels: (() => {
          const rows: string[] = [];
          if (plan === "site" || addons.has("crm")) {
            rows.push(`${stackCrm} — ${fmt(SITE_CRM_PRICE)}${dict.monthly_suffix}`);
          }
          if (plan === "site" || addons.has("ai")) {
            rows.push(`${stackAi} — ${fmt(SITE_AI_PRICE)}${dict.monthly_suffix}`);
          }
          if (plan === "site") {
            rows.push(`${stackCare} — ${fmt(SUPPORT_PRICE)}${dict.monthly_suffix}`);
          }
          return rows.length ? rows : undefined;
        })(),
        support: plan === "site" || support,
        oneTime: fmt(totalOneTime),
        monthly: `${fmt(totalMonthly)}${dict.monthly_suffix}`,
      })
    );
  }, [addons, dict, es, fmt, plan, stackAi, stackCare, stackCrm, support, template, totalOneTime, totalMonthly]);

  const goAsk = (i: number) => {
    const next = Math.max(0, Math.min(askSteps.length - 1, i));
    const el = scroller.current;
    if (el) el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    setAsk(next);
  };

  const onAskScroll = () => {
    const el = scroller.current;
    if (!el || !el.clientWidth) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== ask) setAsk(i);
  };

  const pickPlan = (key: Plan, advance?: number) => {
    setPlan(key);
    if (key !== "shop") {
      setAddons((prev) => {
        if (!prev.has("shopify")) return prev;
        const next = new Set(prev);
        next.delete("shopify");
        return next;
      });
    }
    const list = templatesFor(key);
    if (!list.some((t) => t.id === tplId)) setTplId(list[0].id);
    if (advance !== undefined) goAsk(advance);
  };

  const pickTemplate = (t: Template, advance?: number) => {
    setTplId(t.id);
    if (t.kind === "shop") setPlan("shop");
    else if (plan === "shop") {
      setPlan("landing");
      setAddons((prev) => {
        if (!prev.has("shopify")) return prev;
        const next = new Set(prev);
        next.delete("shopify");
        return next;
      });
    }
    if (advance !== undefined) goAsk(advance);
  };

  const preview =
    template.kind === "shop" ? (
      <ShopPreview key={template.id} template={template} {...flags} />
    ) : (
      <LandingPreview
        template={template}
        seo={flags.seo}
        brand={flags.brand}
        bilingual={flags.bilingual}
        support={flags.support}
        lang={flags.lang}
      />
    );

  const planTabs = (
    <div className="pb-plans">
      {PLANS.map((key) => {
        const val = dict.tiers[key];
        return (
          <button
            key={key}
            type="button"
            className={`pb-plan${plan === key ? " is-on" : ""}`}
            onClick={() => pickPlan(key)}
          >
            <b>{val.name}</b>
            <small>{val.pages}</small>
            <em>
              {fmt(PLAN_PRICE[key])}
              {key === "site" ? (
                <span className="pb-plan-mo">
                  {fmt(SITE_MONTHLY)}
                  {dict.monthly_suffix}
                </span>
              ) : null}
            </em>
          </button>
        );
      })}
    </div>
  );

  const categories = (
    <div className="pb-cats">
      {templatesFor(plan).map((t) => (
        <button
          key={t.id}
          type="button"
          className={`pb-cat${template.id === t.id ? " is-on" : ""}`}
          onClick={() => pickTemplate(t)}
        >
          {tx(t.cat, es ? "es" : "en")}
        </button>
      ))}
    </div>
  );

  const summaryBits = [
    dict.tiers[plan].name,
    tx(template.cat, es ? "es" : "en"),
    ...addonIds.filter((id) => addons.has(id)).map((id) => dict.addons[id].label),
    ...(sitePlan ? [dict.addons.seo.label, stackCrm, stackAi, stackCare] : []),
    ...(!sitePlan && addons.has("crm") ? [stackCrm] : []),
    ...(!sitePlan && addons.has("ai") ? [stackAi] : []),
    ...(!sitePlan && support ? [dict.support_label] : []),
  ];

  return (
    <>
      <section id="pricing" className="pb-sec">
        <div className="container pb-sec-inner">
          <div className="pb-sec-head">
            <span className="section-label">{dict.label}</span>
            <h2>{dict.preview_title}</h2>
            <p>{dict.sub}</p>
            {planTabs}
            {categories}
          </div>

          <div className="pb-teaser" onClick={() => setOpen(true)}>
            <div className="pb-teaser-stage" data-plan={plan}>
              <div className="pb-frame is-live" key={`teaser-${template.id}`}>
                {preview}
              </div>
            </div>
            <div className="pb-teaser-bar">
              <span className="pb-teaser-copy">
                <b>{dict.ask_open}</b>
                <em>
                  {es ? "Desde" : "From"} {fmt(PLAN_PRICE[plan])}
                  {sitePlan ? ` · ${fmt(SITE_MONTHLY)}${dict.monthly_suffix}` : ""}
                </em>
              </span>
              <button type="button" className="pb-teaser-go" onClick={() => setOpen(true)}>
                {es ? "Abrir el estudio →" : "Open the studio →"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {open ? (
        <div className="pb-studio" role="dialog" aria-modal="true" aria-label={dict.title}>
          <header className="pb-top">
            <div className="pb-top-copy">
              <span className="pb-kicker">
                {dict.label} · {es ? "Estudio" : "Studio"}
              </span>
              <h2>{dict.title}</h2>
            </div>
            <div className="pb-top-price">
              <small>{dict.one_time}</small>
              <b>{fmt(totalOneTime)}</b>
              {totalMonthly > 0 ? (
                <em>
                  {fmt(totalMonthly)}
                  {dict.monthly_suffix}
                </em>
              ) : null}
            </div>
            <button
              type="button"
              className="pb-close"
              onClick={() => setOpen(false)}
              aria-label={dict.ask_close}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </header>

          <div className="pb-body">
            <div className="pb-stage" data-plan={plan}>
              <div className="pb-frame is-live" key={template.id}>
                {preview}
              </div>
            </div>

            <aside className="pb-rail">
              <div>
                <div className="pb-kicker">{es ? "Plan" : "Plan"}</div>
                <div className="pb-tiers">
                  {PLANS.map((key) => {
                    const val = dict.tiers[key];
                    return (
                      <button
                        key={key}
                        type="button"
                        className={`pb-tier${plan === key ? " is-on" : ""}`}
                        onClick={() => pickPlan(key)}
                      >
                        <span>
                          <h4>{val.name}</h4>
                          <small>{val.pages}</small>
                        </span>
                        <em>
                          {fmt(PLAN_PRICE[key])}
                          {key === "site" ? (
                            <span className="pb-tier-mo">
                              {fmt(SITE_MONTHLY)}
                              {dict.monthly_suffix}
                            </span>
                          ) : null}
                        </em>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="pb-kicker">{dict.ask_tpl_label}</div>
                {categories}
              </div>

              {plan === "shop" ? (
                <div>
                  <div className="pb-kicker">{es ? "Incluido" : "Included"}</div>
                  <div className="pb-included">
                    <span>{es ? "Catálogo y bolsa" : "Catalog and bag"}</span>
                  </div>
                </div>
              ) : sitePlan ? (
                <div>
                  <div className="pb-kicker">{es ? "Incluido" : "Included"}</div>
                  <div className="pb-included is-stack">
                    <span>
                      {dict.addons.seo.label}
                      <i>{es ? "Incluido" : "Included"}</i>
                    </span>
                    <span>
                      {stackCrm}
                      <i>
                        {fmt(SITE_CRM_PRICE)}
                        {dict.monthly_suffix}
                      </i>
                    </span>
                    <span>
                      {stackAi}
                      <i>
                        {fmt(SITE_AI_PRICE)}
                        {dict.monthly_suffix}
                      </i>
                    </span>
                    <span>
                      {stackCare}
                      <i>
                        {fmt(SUPPORT_PRICE)}
                        {dict.monthly_suffix}
                      </i>
                    </span>
                  </div>
                </div>
              ) : null}

              <div>
                <div className="pb-kicker">{es ? "Módulos" : "Modules"}</div>
                <div className="pb-mods">
                  {addonIds.map((id) => (
                    <button
                      key={id}
                      type="button"
                      className={`pb-chip${addons.has(id) ? " is-on" : ""}`}
                      onClick={() => toggleAddon(id)}
                    >
                      {dict.addons[id].label}
                      <i>
                        +{fmt(addonAmount(id))}
                        {isMonthlyAddon(id) ? dict.monthly_suffix : ""}
                      </i>
                    </button>
                  ))}
                </div>
              </div>

              {sitePlan ? null : (
                <div>
                  <div className="pb-kicker">{es ? "Cuidado" : "Care"}</div>
                  <div className="pb-mods">
                    <button
                      type="button"
                      className={`pb-chip${support ? " is-on" : ""}`}
                      onClick={() => setSupport(!support)}
                    >
                      {dict.support_label}
                      <i>
                        +{fmt(SUPPORT_PRICE)}
                        {dict.monthly_suffix}
                      </i>
                    </button>
                  </div>
                </div>
              )}

              <div className="pb-rail-foot">
                <button type="button" className="btn btn-launch btn-launch-static pb-send" onClick={sendBrief}>
                  {sendLabel}
                </button>
                <p>{dict.disclaimer}</p>
              </div>
            </aside>

            <div className="pb-ask">
              <i className="pb-ask-handle" />
              <div className="pb-ask-dots" aria-hidden="true">
                {askSteps.map((id, i) => (
                  <button
                    key={id}
                    type="button"
                    className={i === ask ? "is-on" : undefined}
                    onClick={() => goAsk(i)}
                    tabIndex={-1}
                  />
                ))}
              </div>

              <div className="pb-ask-scroller" ref={scroller} onScroll={onAskScroll}>
                <article className="pb-ask-pane">
                  <p className="pb-ask-kicker">
                    01 / {String(askSteps.length).padStart(2, "0")}
                  </p>
                  <h3>{dict.ask_plan}</h3>
                  <p>{dict.ask_plan_sub}</p>
                  <div className="pb-tiers">
                    {PLANS.map((key) => {
                      const val = dict.tiers[key];
                      return (
                        <button
                          key={key}
                          type="button"
                          className={`pb-tier${plan === key ? " is-on" : ""}`}
                          onClick={() => pickPlan(key, 1)}
                        >
                          <span>
                            <h4>{val.name}</h4>
                            <small>{val.pages}</small>
                          </span>
                          <em>
                            {fmt(PLAN_PRICE[key])}
                            {key === "site" ? (
                              <span className="pb-tier-mo">
                                {fmt(SITE_MONTHLY)}
                                {dict.monthly_suffix}
                              </span>
                            ) : null}
                          </em>
                        </button>
                      );
                    })}
                  </div>
                </article>

                <article className="pb-ask-pane">
                  <p className="pb-ask-kicker">
                    02 / {String(askSteps.length).padStart(2, "0")}
                  </p>
                  <h3>{dict.ask_tpl}</h3>
                  <p>{dict.ask_tpl_sub}</p>
                  <div className="pb-cats">
                    {templatesFor(plan).map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        className={`pb-cat${template.id === t.id ? " is-on" : ""}`}
                        onClick={() => pickTemplate(t, 2)}
                      >
                        {tx(t.cat, es ? "es" : "en")}
                      </button>
                    ))}
                  </div>
                </article>

                {addonIds.map((id, i) => (
                  <article className="pb-ask-pane" key={id}>
                    <p className="pb-ask-kicker">
                      {String(i + 3).padStart(2, "0")} / {String(askSteps.length).padStart(2, "0")}
                    </p>
                    <h3>{dict.addons[id].label}?</h3>
                    <p>
                      {dict.addons[id].desc}{" "}
                      <b>
                        +{fmt(addonAmount(id))}
                        {isMonthlyAddon(id) ? dict.monthly_suffix : ""}
                      </b>
                    </p>
                    <div className="pb-ask-choice">
                      <button
                        type="button"
                        className={`pb-ask-btn${addons.has(id) ? " is-on" : ""}`}
                        onClick={() => {
                          toggleAddon(id, true);
                          goAsk(i + 3);
                        }}
                      >
                        {dict.ask_yes}
                      </button>
                      <button
                        type="button"
                        className="pb-ask-btn"
                        onClick={() => {
                          toggleAddon(id, false);
                          goAsk(i + 3);
                        }}
                      >
                        {dict.ask_no}
                      </button>
                    </div>
                  </article>
                ))}

                {sitePlan ? null : (
                  <article className="pb-ask-pane">
                    <p className="pb-ask-kicker">
                      {String(askSteps.length - 1).padStart(2, "0")} / {String(askSteps.length).padStart(2, "0")}
                    </p>
                    <h3>{dict.support_label}?</h3>
                    <p>
                      {dict.support_desc}{" "}
                      <b>
                        +{fmt(SUPPORT_PRICE)}
                        {dict.monthly_suffix}
                      </b>
                    </p>
                    <div className="pb-ask-choice">
                      <button
                        type="button"
                        className={`pb-ask-btn${support ? " is-on" : ""}`}
                        onClick={() => {
                          setSupport(true);
                          goAsk(askSteps.length - 1);
                        }}
                      >
                        {dict.ask_yes}
                      </button>
                      <button
                        type="button"
                        className="pb-ask-btn"
                        onClick={() => {
                          setSupport(false);
                          goAsk(askSteps.length - 1);
                        }}
                      >
                        {dict.ask_no}
                      </button>
                    </div>
                  </article>
                )}

                <article className="pb-ask-pane">
                  <p className="pb-ask-kicker">
                    {String(askSteps.length).padStart(2, "0")} / {String(askSteps.length).padStart(2, "0")}
                  </p>
                  <h3>{dict.ask_ready}</h3>
                  <p>{dict.ask_ready_sub}</p>
                  <ul className="pb-ask-sum">
                    {summaryBits.map((bit) => (
                      <li key={bit}>{bit}</li>
                    ))}
                  </ul>
                  <button type="button" className="btn btn-launch btn-launch-static pb-send" onClick={sendBrief}>
                    {sendLabel}
                  </button>
                </article>
              </div>

              <div className="pb-ask-foot">
                <button
                  type="button"
                  className="pb-ask-nav"
                  disabled={ask === 0}
                  onClick={() => goAsk(ask - 1)}
                >
                  {dict.ask_back}
                </button>
                {ask < askSteps.length - 1 ? (
                  <button type="button" className="pb-ask-nav is-next" onClick={() => goAsk(ask + 1)}>
                    {dict.ask_next}
                  </button>
                ) : (
                  <button type="button" className="pb-ask-nav is-next" onClick={sendBrief}>
                    {es ? "Enviar" : "Send"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
