"use client";
/* Homepage pricing teaser → leads into the /pricing-builder questionnaire. */
import Link from "next/link";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import { formatMoney, quote, type PlanId } from "@/lib/pricing";
import { defaultBuild } from "@/lib/configurator";
import PricingIllustration from "@/components/pricing-illustration";
import "./pricing-questionnaire.css";

export default function PricingTeaser() {
  const { lang: raw, currency, rate } = useGeo();
  const lang = raw === "en" ? "en" : "es";
  const dict = translations[lang].pricing;
  const plans: PlanId[] = ["landing", "shop"];
  const labels = Object.fromEntries(Object.entries(dict.addons).map(([k, v]) => [k, v.label]));
  return (
    <section id="pricing" className="qzt" aria-labelledby="qzt-h">
      <div className="qzt-wrap">
        <div>
          <span className="section-label">{dict.label}</span>
          <h2 id="qzt-h" className="qzt-h">{dict.title}</h2>
          <p className="qzt-sub">{lang === "es" ? "Responde unas preguntas y mira tu precio al instante." : "Answer a few questions and see your price instantly."}</p>
          <div className="qzt-plans">
            {plans.map((p) => (
              <Link key={p} href={`/pricing-builder?plan=${p}`} className="qzt-plan">
                <b>{dict.tiers[p].name}</b>
                <span>{formatMoney(quote({ plan: p, addons: [], support: false }, currency, rate).oneTime, currency)}</span>
              </Link>
            ))}
          </div>
          <Link href="/pricing-builder" className="qz-cta qzt-go">{lang === "es" ? "Empezar cotizador →" : "Start the quote →"}</Link>
        </div>
        <Link href="/pricing-builder" className="qzt-art" aria-label={lang === "es" ? "Abrir cotizador" : "Open quote builder"}>
          <PricingIllustration build={{ ...defaultBuild("landing"), addons: ["seo", "crm", "ai"] }} lang={lang} label={dict.title} addonLabels={labels} />
        </Link>
      </div>
    </section>
  );
}
