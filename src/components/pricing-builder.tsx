"use client";
import { useState, useMemo } from "react";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import { buildQuoteMessage, openWhatsApp } from "@/lib/whatsapp";
import "./pricing-builder.css";

type Tier = "starter" | "standard" | "growth";

const ADDON_IDS = ["seo", "brand", "whatsapp", "bilingual"] as const;
const STACK_IDS = ["crm", "agent"] as const;

export default function PricingBuilder() {
  const [tier, setTier] = useState<Tier>("standard");
  const [addons, setAddons] = useState<Set<string>>(new Set(["whatsapp"]));
  const [stack, setStack] = useState<Set<string>>(new Set());
  const [support, setSupport] = useState(false);

  const { lang, fmt } = useGeo();
  const dict = translations[lang].pricing;

  const tierPrices: Record<Tier, { price: number }> = {
    starter: { price: 349 },
    standard: { price: 599 },
    growth: { price: 1199 },
  };

  const addonPrices = {
    seo: 149,
    brand: 199,
    whatsapp: 49,
    bilingual: 249,
  };

  const supportPrice = 49;

  const toggleAddon = (id: string) => {
    setAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleStack = (id: string) => {
    setStack((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const { totalOneTime, totalMonthly } = useMemo(() => {
    let oneTime = tierPrices[tier].price;
    ADDON_IDS.forEach((id) => {
      if (addons.has(id)) oneTime += addonPrices[id];
    });
    return {
      totalOneTime: oneTime,
      totalMonthly: support ? supportPrice : 0,
    };
  }, [tier, addons, support]);

  const clinic = lang === "es" ? "Clínica Naco" : "Naco Clinic";
  const hero = lang === "es" ? "Citas hoy." : "Book today.";

  return (
    <div className="pb pricing-grid">
      <div className="pb-build">
        <div
          className="pv"
          data-tier={tier}
          data-seo={addons.has("seo") ? "" : undefined}
          data-wa={addons.has("whatsapp") ? "" : undefined}
          data-brand={addons.has("brand") ? "" : undefined}
          data-bi={addons.has("bilingual") ? "" : undefined}
          data-crm={stack.has("crm") ? "" : undefined}
          data-agent={stack.has("agent") ? "" : undefined}
          data-care={support ? "" : undefined}
        >
          <div className="pv-chrome">
            <i /><i /><i />
            <div className="pv-url">{lang === "es" ? "clinica-naco.do" : "naco-clinic.do"}</div>
            <div className="pv-lang">ES | EN</div>
            <div className="pv-care">24h</div>
          </div>
          <div className="pv-page">
            <div className="pv-nav">
              <b>{clinic}</b>
              <div className="pv-nav-links">
                {lang === "es" ? "Inicio  Servicios  Contacto" : "Home  Services  Contact"}
              </div>
            </div>
            <div className="pv-hero">
              {hero}
              <span className="pv-pin" />
            </div>
            <div className="pv-cta">WhatsApp</div>
            <div className="pv-tiles"><span /><span /><span /></div>
            <div className="pv-gallery"><i /><i /><i /><i /></div>
            <div className="pv-crm">
              <b>CRM</b>
              <span /><span /><span />
            </div>
            <div className="pv-fab-ia">IA</div>
            <div className="pv-fab">WA</div>
          </div>
        </div>

        <div>
          <div className="pb-kicker">{dict.step_1}</div>
          <div className="pb-tiers tiers-grid">
            {(Object.keys(dict.tiers) as Tier[]).map((key) => {
              const val = dict.tiers[key];
              return (
                <button
                  key={key}
                  type="button"
                  className={`pb-tier${tier === key ? " is-on" : ""}`}
                  onClick={() => setTier(key)}
                >
                  <h4>{val.name}</h4>
                  <small>{val.pages}</small>
                  <em>{fmt(tierPrices[key].price)}</em>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div className="pb-kicker">{dict.step_2}</div>
          <div className="pb-mods addons-grid">
            {ADDON_IDS.map((id) => (
              <button
                key={id}
                type="button"
                className={`pb-chip${addons.has(id) ? " is-on" : ""}`}
                onClick={() => toggleAddon(id)}
              >
                {dict.addons[id].label} +{fmt(addonPrices[id])}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="pb-kicker">
            {lang === "es" ? "04 Stack (después de la web)" : "04 Stack (after the site)"}
          </div>
          <div className="pb-mods">
            {STACK_IDS.map((id) => (
              <button
                key={id}
                type="button"
                className={`pb-chip is-stack${stack.has(id) ? " is-on" : ""}`}
                onClick={() => toggleStack(id)}
              >
                {dict.addons[id].label}
              </button>
            ))}
            <button
              type="button"
              className={`pb-chip${support ? " is-on" : ""}`}
              onClick={() => setSupport(!support)}
            >
              {dict.support_label} {fmt(supportPrice)}{dict.monthly_suffix}
            </button>
          </div>
        </div>
      </div>

      <div
        className="pricing-summary"
        style={{
          background: "var(--navy-trench)",
          borderRadius: "var(--radius)",
          padding: "36px 32px",
          color: "var(--white)",
          position: "sticky",
          top: "100px",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <h4
          style={{
            fontFamily: "var(--font-head)",
            fontSize: "13px",
            fontWeight: 800,
            color: "var(--coral-blue)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          {dict.summary_title}
        </h4>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
              {dict.tiers[tier].name} {dict.platform}
            </span>
            <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "15px", color: "#fff" }}>
              {fmt(tierPrices[tier].price)}
            </span>
          </div>

          {ADDON_IDS.filter((id) => addons.has(id)).map((id) => (
            <div key={id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "200px" }}>
                + {dict.addons[id].label}
              </span>
              <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "14px", color: "var(--coral-blue)" }}>
                {fmt(addonPrices[id])}
              </span>
            </div>
          ))}

          {support && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                + {dict.managed_support}
              </span>
              <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "14px", color: "var(--coral-blue)" }}>
                {fmt(supportPrice)}{dict.monthly_suffix}
              </span>
            </div>
          )}

          {STACK_IDS.filter((id) => stack.has(id)).map((id) => (
            <div key={id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "200px" }}>
                + {dict.addons[id].label}
              </span>
              <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "12px", color: "var(--sun-yellow)" }}>
                {lang === "es" ? "A cotizar" : "To quote"}
              </span>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", margin: "32px 0 24px" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
          <div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2px" }}>
              {dict.one_time}
            </div>
            <div style={{ fontFamily: "var(--font-head)", fontSize: "32px", fontWeight: 900, color: "#fff", lineHeight: 1 }}>
              {fmt(totalOneTime)}
            </div>
          </div>
          {support && (
            <div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2px" }}>
                {dict.monthly}
              </div>
              <div style={{ fontFamily: "var(--font-head)", fontSize: "24px", fontWeight: 800, color: "var(--coral-blue)" }}>
                {fmt(totalMonthly)}
              </div>
            </div>
          )}
        </div>

        <button
          type="button"
          className="btn btn-launch"
          style={{ width: "100%", padding: "16px", borderRadius: "var(--radius-sm)", fontSize: "14px" }}
          onClick={() => {
            openWhatsApp(buildQuoteMessage({
              lang: lang === "en" ? "en" : "es",
              tierName: dict.tiers[tier].name,
              addonLabels: ADDON_IDS.filter((id) => addons.has(id)).map((id) => dict.addons[id].label),
              stackLabels: STACK_IDS.filter((id) => stack.has(id)).map((id) => dict.addons[id].label),
              support,
              oneTime: fmt(totalOneTime),
              monthly: `${fmt(supportPrice)}${dict.monthly_suffix}`,
            }));
          }}
        >
          {lang === "es" ? "Enviar este presupuesto por WhatsApp →" : "Send this quote on WhatsApp →"}
        </button>
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", textAlign: "center", marginTop: "12px", lineHeight: "1.4" }}>
          {dict.disclaimer}
        </p>
      </div>
    </div>
  );
}
