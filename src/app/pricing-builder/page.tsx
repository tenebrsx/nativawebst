import type { Metadata } from "next";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import PricingQuestionnaire from "@/components/pricing-questionnaire";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Arma tu sitio web y mira el precio en vivo",
  description:
    "Configura tu sitio web paso a paso: plan, plantilla, secciones, Google Maps, CRM e IA. Ves la vista previa y el precio al instante, en RD$ o US$, y pides tu demo gratis en 48 horas por WhatsApp.",
  path: "/pricing-builder",
});

export default function PricingBuilderPage() {
  return (
    <div className="pb-page" style={{ minHeight: "100dvh", background: "var(--bg)" }}>
      <SiteNav solid />
      <main id="main">
        <PricingQuestionnaire />
      </main>
      <SiteFooter />
    </div>
  );
}
