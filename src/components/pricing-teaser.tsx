"use client";
/* Homepage pricing teaser → leads into the /pricing-builder questionnaire.
   Uses the homepage's own section primitives (.container, .section-label/-title/-sub) and the
   same black band + padding as the proof section below, so it reads as part of the page rhythm. */
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
  const es = lang === "es";
  const dict = translations[lang].pricing;
  const plans: PlanId[] = ["landing", "shop"];
  const labels = Object.fromEntries(Object.entries(dict.addons).map(([k, v]) => [k, v.label]));
  return (
    <section id="pricing" className="qzt" aria-labelledby="qzt-h">
      <div className="container qzt-wrap">
        <div className="qzt-copy">
          <span className="section-label">{dict.label}</span>
          <h2 id="qzt-h" className="section-title">{dict.title}</h2>
          <p className="section-sub">{es ? "Responde unas preguntas cortas y mira tu precio al instante. Sin compromiso." : "Answer a few short questions and see your price instantly. No commitment."}</p>
          <ul className="qzt-plans" aria-label={es ? "Planes" : "Plans"}>
            {plans.map((p) => (
              <li key={p}>
                <Link href={`/pricing-builder?plan=${p}`} className="qzt-plan">
                  <span className="qzt-plan-n">{dict.tiers[p].name}</span>
                  <span className="qzt-plan-p">{es ? "desde " : "from "}{formatMoney(quote({ plan: p, addons: [], support: false }, currency, rate).oneTime, currency)}</span>
                  <span className="qzt-plan-go" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="qzt-cta">
            <Link href="/pricing-builder" className="qz-cta">{es ? "Empezar cotizador" : "Start the quote"}</Link>
            <span className="qzt-meta">{es ? "Toma menos de 2 minutos" : "Takes under 2 minutes"}</span>
          </div>
        </div>
        <Link href="/pricing-builder" className="qzt-art" aria-label={es ? "Abrir cotizador" : "Open quote builder"} tabIndex={-1}>
          <PricingIllustration compact build={{ ...defaultBuild("landing"), addons: ["seo", "crm", "ai"] }} lang={lang} label={dict.title} addonLabels={labels} />
        </Link>
      </div>
    </section>
  );
}
