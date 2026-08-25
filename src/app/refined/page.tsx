"use client";

import Link from "next/link";
import SiteNav from "@/components/site-nav";
import { PointerGlow } from "@/components/home-visuals";
import RefinedHero from "@/components/refined/refined-hero";
import { useGeo } from "@/lib/geo-context";

const NEXT = {
  es: {
    lab: "Lab · Hero v1",
    notLive: "No es la homepage en vivo",
    back: "Volver al sitio",
    nextLabel: "Siguientes experimentos",
    nextTitle: "El hero ya empuja a WhatsApp. Lo que sigue es el resto del funnel.",
    items: [
      "Un solo CTA en nav, hero y cierre — misma frase de WhatsApp.",
      "Chips que cambian el Maps card y el chat (clínica vs villas vs legal).",
      "Tira Maps → tap → chat debajo del hero, en tres frames CSS.",
      "Promover este H1 a la homepage cuando convierta.",
    ],
  },
  en: {
    lab: "Lab · Hero v1",
    notLive: "Not the live homepage",
    back: "Back to the site",
    nextLabel: "Next experiments",
    nextTitle: "The hero already pushes WhatsApp. Next is the rest of the funnel.",
    items: [
      "One CTA in nav, hero, and close — the same WhatsApp sentence.",
      "Chips that swap the Maps card and chat (clinic vs villas vs legal).",
      "Maps → tap → chat strip under the hero, three CSS frames.",
      "Promote this H1 to the homepage when it converts.",
    ],
  },
};

export default function RefinedPage() {
  const { lang } = useGeo();
  const t = NEXT[lang === "en" ? "en" : "es"];

  return (
    <div className="rf-page">
      <PointerGlow />
      <div className="rf-labbar">
        <div className="container rf-labbar-inner">
          <div className="rf-labbar-mark">
            <span className="rf-lab-pill">{t.lab}</span>
            <span className="rf-lab-note">{t.notLive}</span>
          </div>
          <Link href="/" className="rf-lab-back">
            {t.back}
          </Link>
        </div>
      </div>
      <SiteNav />
      <RefinedHero />

      <section className="rf-next">
        <div className="container">
          <div className="section-label">{t.nextLabel}</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>{t.nextTitle}</h2>
          <ol className="rf-next-list">
            {t.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
