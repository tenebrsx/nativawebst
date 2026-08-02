"use client";
import { useState, useMemo } from "react";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";

type Tier = "starter" | "standard" | "growth";

const ADDON_IDS = ["seo", "brand", "whatsapp", "bilingual"] as const;

export default function PricingBuilder() {
  const [tier, setTier]     = useState<Tier>("standard");
  const [addons, setAddons] = useState<Set<string>>(new Set());
  const [support, setSupport] = useState(false);

  const { lang, fmt } = useGeo();
  const dict = translations[lang].pricing;

  // Base pricing metadata aligned to local Dominican SMB budgets
  const tierPrices: Record<Tier, { price: number }> = {
    starter:  { price: 349 },  // RD$ 20,940 (Accessible landing page operations)
    standard: { price: 599 },  // RD$ 35,940 (Grow local business websites)
    growth:   { price: 1199 }, // RD$ 71,940 (Premium database integration/e-commerce)
  };

  const addonPrices = {
    seo: 149,       // RD$ 8,940
    brand: 199,     // RD$ 11,940
    whatsapp: 49,   // RD$ 2,940
    bilingual: 249, // RD$ 14,940
  };

  const supportPrice = 49; // RD$ 2,940/month (Stress-free managed hosting & edits)

  const toggleAddon = (id: string) => {
    setAddons(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const { totalOneTime, totalMonthly } = useMemo(() => {
    let oneTime = tierPrices[tier].price;
    ADDON_IDS.forEach(id => {
      if (addons.has(id)) oneTime += addonPrices[id];
    });
    return {
      totalOneTime: oneTime,
      totalMonthly: support ? supportPrice : 0
    };
  }, [tier, addons, support]);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 380px",
      gap: "32px",
      alignItems: "start",
    }} className="pricing-grid">
      
      {/* Left Column: Configurator */}
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        
        {/* Tier Selector */}
        <div>
          <h3 style={{
            fontFamily: "var(--font-head)",
            fontSize: "18px",
            fontWeight: 800,
            color: "var(--navy-trench)",
            marginBottom: "6px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <span style={{ color: "var(--coral-blue)" }}>{dict.step_1.substring(0, 2)}</span> {dict.step_1.substring(3)}
          </h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "20px" }}>
            {dict.step_1_sub}
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px"
          }} className="tiers-grid">
            {(Object.keys(dict.tiers) as Tier[]).map((key) => {
              const active = tier === key;
              const val = dict.tiers[key];
              const priceMeta = tierPrices[key];
              return (
                <div
                  key={key}
                  onClick={() => setTier(key)}
                  style={{
                    border: `2px solid ${active ? "var(--coral-blue)" : "var(--border)"}`,
                    borderRadius: "var(--radius)",
                    padding: "24px 20px",
                    background: active ? "var(--coral-light)" : "var(--white)",
                    cursor: "pointer",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%"
                  }}
                  className="card-hover"
                >
                  {active && (
                    <div style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--coral-blue)"
                    }} />
                  )}
                  <div>
                    <h4 style={{ fontFamily: "var(--font-head)", fontSize: "15px", fontWeight: 800, color: "var(--navy-trench)", marginBottom: "4px" }}>
                      {val.name}
                    </h4>
                    <p style={{ fontSize: "11px", color: "var(--gray-400)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
                      {val.pages}
                    </p>
                    <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.5" }}>
                      {val.desc}
                    </p>
                  </div>
                  <div style={{
                    marginTop: "24px",
                    fontFamily: "var(--font-head)",
                    fontWeight: 900,
                    fontSize: "20px",
                    color: "var(--navy-trench)"
                  }}>
                    {fmt(priceMeta.price)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Addons Selector */}
        <div>
          <h3 style={{
            fontFamily: "var(--font-head)",
            fontSize: "18px",
            fontWeight: 800,
            color: "var(--navy-trench)",
            marginBottom: "6px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <span style={{ color: "var(--coral-blue)" }}>{dict.step_2.substring(0, 2)}</span> {dict.step_2.substring(3)}
          </h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "20px" }}>
            {dict.step_2_sub}
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px"
          }} className="addons-grid">
            {ADDON_IDS.map(id => {
              const active = addons.has(id);
              const val = dict.addons[id];
              const price = addonPrices[id];
              return (
                <div
                  key={id}
                  onClick={() => toggleAddon(id)}
                  style={{
                    border: `1.5px solid ${active ? "var(--coral-blue)" : "var(--border)"}`,
                    borderRadius: "var(--radius)",
                    padding: "20px",
                    background: active ? "var(--coral-light)" : "var(--white)",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                  className="card-hover"
                >
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      marginBottom: "4px"
                    }}>
                      <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "14px", color: "var(--navy-trench)" }}>
                        {val.label}
                      </span>
                    </div>
                    <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: "1.5", marginBottom: "12px" }}>
                      {val.desc}
                    </p>
                  </div>
                  <span style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "13px", color: "var(--coral-blue)" }}>
                    +{fmt(price)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Support Plan */}
        <div>
          <h3 style={{
            fontFamily: "var(--font-head)",
            fontSize: "18px",
            fontWeight: 800,
            color: "var(--navy-trench)",
            marginBottom: "6px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <span style={{ color: "var(--coral-blue)" }}>{dict.step_3.substring(0, 2)}</span> {dict.step_3.substring(3)}
          </h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "20px" }}>
            {dict.step_3_sub}
          </p>

          <div
            onClick={() => setSupport(!support)}
            style={{
              border: `1.5px solid ${support ? "var(--coral-blue)" : "var(--border)"}`,
              borderRadius: "var(--radius)",
              padding: "24px",
              background: support ? "var(--coral-light)" : "var(--white)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className="card-hover"
          >
            <div style={{
              width: "20px",
              height: "20px",
              borderRadius: "4px",
              border: support ? "1.5px solid var(--coral-blue)" : "1.5px solid var(--border)",
              background: support ? "var(--coral-blue)" : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
              {support && <span style={{ color: "var(--white)", fontSize: "11px", fontWeight: 900 }}>✓</span>}
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontFamily: "var(--font-head)", fontSize: "14px", fontWeight: 700, color: "var(--navy-trench)", marginBottom: "4px" }}>
                {dict.support_label}
              </h4>
              <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
                {dict.support_desc}
              </p>
            </div>
            <span style={{
              fontFamily: "var(--font-head)",
              fontWeight: 800,
              fontSize: "15px",
              color: "var(--navy-trench)",
              marginLeft: "12px",
              flexShrink: 0
            }}>
              {fmt(supportPrice)}{dict.monthly_suffix}
            </span>
          </div>
        </div>

      </div>

      {/* Right Column: Invoice Summary */}
      <div style={{
        background: "var(--navy-trench)",
        borderRadius: "var(--radius)",
        padding: "36px 32px",
        color: "var(--white)",
        position: "sticky",
        top: "100px",
        boxShadow: "var(--shadow-lg)"
      }} className="pricing-summary">
        <h4 style={{
          fontFamily: "var(--font-head)",
          fontSize: "13px",
          fontWeight: 800,
          color: "var(--coral-blue)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "24px"
        }}>
          {dict.summary_title}
        </h4>

        {/* Pricing Rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
              {dict.tiers[tier].name} {dict.platform}
            </span>
            <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "15px", color: "#fff" }}>
              {fmt(tierPrices[tier].price)}
            </span>
          </div>

          {addons.size > 0 && <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "12px" }} />}

          {ADDON_IDS.filter(id => addons.has(id)).map(id => {
            const val = dict.addons[id];
            const price = addonPrices[id];
            return (
              <div key={id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "200px" }}>
                  + {val.label}
                </span>
                <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "14px", color: "var(--coral-blue)" }}>
                  {fmt(price)}
                </span>
              </div>
            );
          })}

          {support && (
            <>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "12px" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                  + {dict.managed_support}
                </span>
                <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "14px", color: "var(--coral-blue)" }}>
                  {fmt(supportPrice)}{dict.monthly_suffix}
                </span>
              </div>
            </>
          )}

        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", margin: "32px 0 24px" }} />

        {/* Totals */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
          <div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2px" }}>
              {dict.one_time}
            </div>
            <div style={{
              fontFamily: "var(--font-head)",
              fontSize: "32px",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1
            }}>
              {fmt(totalOneTime)}
            </div>
          </div>

          {support && (
            <div style={{ marginTop: "12px" }}>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2px" }}>
                {dict.monthly}
              </div>
              <div style={{
                fontFamily: "var(--font-head)",
                fontSize: "24px",
                fontWeight: 800,
                color: "var(--coral-blue)"
              }}>
                {fmt(totalMonthly)}
              </div>
            </div>
          )}
        </div>

        {/* Main CTA button: Sun Yellow */}
        <a href="#consultation" className="btn btn-launch" style={{
          width: "100%",
          padding: "16px",
          borderRadius: "var(--radius-sm)",
          fontSize: "14px",
          textAlign: "center"
        }}>
          {dict.cta}
        </a>
        <p style={{
          fontSize: "11px",
          color: "rgba(255,255,255,0.4)",
          textAlign: "center",
          marginTop: "12px",
          lineHeight: "1.4"
        }}>
          {dict.disclaimer}
        </p>

      </div>

    </div>
  );
}
