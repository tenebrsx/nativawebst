import type { Metadata } from "next";
import PortfolioPage from "@/components/portfolio-page";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Plantillas y demos web para negocios en RD",
  description:
    "Plantillas Nativa para clínicas, villas, legal, auto y retail en República Dominicana. Sitios rápidos con WhatsApp, listas para SEO local.",
  path: "/portfolio",
});

export default function Page() {
  return <PortfolioPage />;
}
