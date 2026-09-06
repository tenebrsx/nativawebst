import type { Metadata } from "next";
import { LegalHubView } from "@/components/legal-page-view";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Avisos legales",
  description:
    "Privacidad, términos de uso y cookies de Nativa Web Studio en Santo Domingo. Cómo tratamos cotizaciones, WhatsApp y la medición del sitio.",
  path: "/legal",
});

export default function LegalIndexPage() {
  return <LegalHubView />;
}
