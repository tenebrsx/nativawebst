"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import { buildQuoteMessage, openWhatsApp } from "@/lib/whatsapp";
import { LandingPreview, ShopPreview } from "@/components/pricing-previews";
import { templatesFor, tx, type Template } from "@/lib/pricing-templates";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  PLAN_IDS,
  addonsFor,
  addonMonthlyUnit,
  addonOneTime,
  formatMoney,
  isMonthlyOnly,
  planPrice,
  quote,
  supportMonthly,
  type AddonId,
  type Currency,
  type PlanId,
} from "@/lib/pricing";
import { loadPreviewFonts } from "@/lib/preview-fonts";
import "./pricing-builder.css";

const PLANS = PLAN_IDS;
type Plan = PlanId;

function formatCrmAddonPrice(
  money: (n: number) => string,
  currency: Currency,
  rate: number,
  dict: typeof translations.es.pricing,
) {
  return `+${dict.starting_at} ${money(addonOneTime("crm", currency, rate))} ${dict.setup_suffix} · ${dict.about} ${money(addonMonthlyUnit("crm", currency, rate))}${dict.per_user_suffix}`;
}

function formatMonthlyAddonPrice(
  id: AddonId,
  money: (n: number) => string,
  currency: Currency,
  rate: number,
  dict: typeof translations.es.pricing,
) {
  if (id === "crm") return formatCrmAddonPrice(money, currency, rate, dict);
  return `+${dict.starting_at} ${money(addonMonthlyUnit(id, currency, rate))}${dict.monthly_suffix}`;
}

function askStepsFor(plan: Plan) {
  const extras = addonsFor(plan);
  return ["plan", "template", ...extras, "support", "send"] as const;
}

export default function PricingBuilder() {
  "use no memo";
  const [plan, setPlan] = useState<Plan>("landing");
  const [tplId, setTplId] = useState("constructora");
  const [addons, setAddons] = useState<Set<string>>(new Set());
  const [support, setSupport] = useState(false);
  const [open, setOpen] = useState(false);
  const [ask, setAsk] = useState(0);
  const [entered, setEntered] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const secRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const router = useRouter();
  const { lang, currency, rate } = useGeo();
  const fmt = useCallback((n: number) => formatMoney(n, currency), [currency]);
  const dict = translations[lang].pricing;
  const es = lang === "es";
  const addonIds = addonsFor(plan);
  const askSteps = askStepsFor(plan);
  const planAmount = (key: Plan = plan) => planPrice(key, currency, rate);

  const template = useMemo(() => {
    const list = templatesFor(plan);
    return list.find((t) => t.id === tplId)
      ?? list.find((t) => t.id === "constructora")
      ?? list[0];
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
    loadPreviewFonts();
    const opener = document.activeElement as HTMLElement | null;
    const raf = window.requestAnimationFrame(() => {
      scroller.current?.scrollTo({ left: 0 });
      closeRef.current?.focus({ preventScroll: true });
    });
    return () => {
      window.cancelAnimationFrame(raf);
      document.body.style.overflow = prevOverflow;
      delete document.body.dataset.pbOpen;
      window.removeEventListener("keydown", onKey);
      opener?.focus?.({ preventScroll: true });
    };
  }, [open]);

  useEffect(() => {
    setAsk((i) => Math.min(i, askSteps.length - 1));
  }, [askSteps.length]);

  // Load the template-preview fonts only when the builder is about to be seen.
  useEffect(() => {
    const el = secRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadPreviewFonts();
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = secRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setEntered(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
          io.disconnect();
        }
      },
      { threshold: 0.22, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const pin = pinRef.current;
    if (!pin) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const nav = document.querySelector("nav");
      const navH = nav instanceof HTMLElement ? Math.round(nav.getBoundingClientRect().height) : 88;
      pin.style.setProperty("--pb-nav", `${navH}px`);

      const travel = pin.offsetHeight - (window.innerHeight - navH);
      if (travel <= 1) {
        pin.style.setProperty("--pb-hold", "0");
        pin.classList.remove("is-held");
        return;
      }
      const p = Math.min(1, Math.max(0, (navH - pin.getBoundingClientRect().top) / travel));
      pin.style.setProperty("--pb-hold", p.toFixed(4));
      pin.classList.toggle("is-held", p > 0.02 && p < 0.98);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toggleAddon = (id: string, on?: boolean) => {
    setAddons((prev) => {
      const next = new Set(prev);
      const shouldOn = on === undefined ? !next.has(id) : on;
      if (shouldOn) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  // Only add-ons offered for the current plan count. (Switching Landing →
  // Shop used to keep CRM/AI selected and silently add the CRM setup fee.)
  const has = (id: AddonId) => addons.has(id) && addonIds.includes(id);

  // Shared quote (src/lib/pricing.ts): only add-ons the plan offers count,
  // each once, and totals are the sum of the visible whole-number lines.
  const q = useMemo(
    () => quote({ plan, addons: [...addons] as AddonId[], support }, currency, rate),
    [plan, addons, support, currency, rate],
  );
  const totalOneTime = q.oneTime;
  const totalMonthly = q.monthly;

  const flags = {
    seo: has("seo"),
    brand: has("brand"),
    bilingual: has("bilingual"),
    support,
    shopify: has("shopify"),
    crm: has("crm"),
    ai: has("ai"),
    lang: (lang === "en" ? "en" : "es") as "es" | "en",
  };

  const sendLabel = es
    ? "Enviar este presupuesto por WhatsApp →"
    : "Send this quote on WhatsApp →";

  const stackCrm = dict.addons.crm.label;
  const stackAi = dict.addons.ai.label;

  const sendBrief = useCallback(() => {
    openWhatsApp(
      buildQuoteMessage({
        lang: es ? "es" : "en",
        tierName: `${dict.tiers[plan].name} · ${tx(template.cat, es ? "es" : "en")}`,
        addonLabels: addonsFor(plan)
          .filter((id) => has(id) && id !== "crm" && !isMonthlyOnly(id))
          .map((id) => `${dict.addons[id].label} (+${fmt(addonOneTime(id, currency, rate))})`),
        stackLabels: (() => {
          const rows: string[] = [];
          if (has("crm")) {
            rows.push(
              `${stackCrm} — ${dict.starting_at} ${fmt(addonOneTime("crm", currency, rate))} ${dict.setup_suffix}, ${dict.about} ${fmt(addonMonthlyUnit("crm", currency, rate))}${dict.per_user_suffix}`,
            );
          }
          if (has("ai")) {
            rows.push(`${stackAi} — ${dict.starting_at} ${fmt(addonMonthlyUnit("ai", currency, rate))}${dict.monthly_suffix}`);
          }
          return rows.length ? rows : undefined;
        })(),
        support,
        supportPrice: `${fmt(supportMonthly(currency, rate))}${dict.monthly_suffix}`,
        oneTime: fmt(totalOneTime),
        monthly: totalMonthly > 0 ? `${fmt(totalMonthly)}${dict.monthly_suffix}` : undefined,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addons, currency, dict, es, fmt, plan, rate, stackAi, stackCrm, support, template, totalOneTime, totalMonthly]);

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
    if (!list.some((t) => t.id === tplId)) {
      setTplId(list.find((t) => t.id === "constructora")?.id ?? list[0].id);
    }
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
              {fmt(planAmount(key))}
            </em>
          </button>
        );
      })}
    </div>
  );

  const summaryBits = [
    dict.tiers[plan].name,
    tx(template.cat, es ? "es" : "en"),
    ...addonIds.filter((id) => has(id)).map((id) => dict.addons[id].label),
    ...(support ? [dict.support_label] : []),
    `${dict.one_time}: ${fmt(totalOneTime)}`,
    ...(totalMonthly > 0 ? [`${es ? "Total mensual" : "Monthly total"}: ${fmt(totalMonthly)}${dict.monthly_suffix}`] : []),
  ];

  return (
    <>
      <div id="pricing" className="pb-pin" ref={pinRef} data-pb-theme="dark">
        <section className={`pb-sec${entered ? " is-in" : ""}`} ref={secRef}>
          <div className="container pb-sec-inner">
            <div className="pb-sec-main">
              <div className="pb-sec-head">
                <span className="section-label">{dict.label}</span>
                <div className="pb-sec-title">
                  <h2>{dict.title}</h2>
                </div>
                <p>{dict.sub}</p>
              </div>

              {planTabs}

              <div className="pb-sec-cta">
                <Link href="/pricing-builder" className="pb-teaser-go">
                  {es ? "Arma tu sitio →" : "Build your site →"}
                </Link>
                <button type="button" className="pb-teaser-quick" onClick={() => { setAsk(0); setOpen(true); }}>
                  {es ? "Cotización rápida" : "Quick quote"}
                </button>
              </div>
            </div>

            <div
              className={`pb-teaser${entered ? " is-on" : ""}`}
              onClick={() => router.push("/pricing-builder")}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  router.push("/pricing-builder");
                }
              }}
              aria-label={es ? "Abrir el configurador" : "Open the configurator"}
            >
              <div className="pb-teaser-stage" data-plan={plan}>
                <div className="pb-frame is-live" key={`teaser-${template.id}`}>
                  {preview}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {open ? (
        <div
          className="pb-studio"
          role="dialog"
          aria-modal="true"
          aria-label={dict.title}
          data-pb-theme="dark"
        >
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
              ref={closeRef}
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
                <article className="pb-ask-pane is-plans">
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
                            {fmt(planAmount(key))}
                          </em>
                        </button>
                      );
                    })}
                  </div>
                </article>

                <article className="pb-ask-pane is-cats">
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
                  <article className="pb-ask-pane is-choice" key={id}>
                    <p className="pb-ask-kicker">
                      {String(i + 3).padStart(2, "0")} / {String(askSteps.length).padStart(2, "0")}
                    </p>
                    <h3>{dict.addons[id].label}?</h3>
                    <p>
                      <span className="pb-ask-desc">{dict.addons[id].desc} </span>
                      <b>
                        {id === "crm" || isMonthlyOnly(id)
                          ? formatMonthlyAddonPrice(id, fmt, currency, rate, dict)
                          : `+${fmt(addonOneTime(id, currency, rate))}`}
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

                <article className="pb-ask-pane is-choice">
                    <p className="pb-ask-kicker">
                      {String(askSteps.length - 1).padStart(2, "0")} / {String(askSteps.length).padStart(2, "0")}
                    </p>
                    <h3>{dict.support_label}?</h3>
                    <p>
                      <span className="pb-ask-desc">{dict.support_desc} </span>
                      <b>
                        +{fmt(supportMonthly(currency, rate))}
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

                <article className="pb-ask-pane is-sum">
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
                    {es ? "Enviar por WhatsApp" : "Send on WhatsApp"}
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
