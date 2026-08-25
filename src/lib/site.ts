import type { Metadata } from "next";

export const SITE_URL = "https://nativa.studio";
export const SITE_NAME = "Nativa Web Studio";
export const SITE_BRAND = "Nativa";
export const SITE_EMAIL = "info@nativa.studio";
export const SITE_PHONE = "+18093588113";
export const SITE_PHONE_DISPLAY = "+1 (809) 358-8113";
export const SITE_STREET = "Av. Winston Churchill";
export const SITE_CITY = "Santo Domingo";
export const SITE_REGION = "Distrito Nacional";
export const SITE_COUNTRY = "DO";
export const SITE_COUNTRY_NAME = "República Dominicana";
export const SITE_LAT = 18.479;
export const SITE_LNG = -69.939;
export const SITE_PRICE_RANGE = "$$";
export const SITE_DEFAULT_TITLE =
  "Diseño Web, CRM y Agentes IA en Santo Domingo | Nativa";
export const SITE_DEFAULT_DESCRIPTION =
  "Nativa es un estudio web en Santo Domingo. Construimos sitios rápidos, SEO local en Google Maps, CRM personal y agentes IA por WhatsApp para negocios en República Dominicana.";

export const SITE_KEYWORDS = [
  "diseño web santo domingo",
  "páginas web república dominicana",
  "agencia web RD",
  "SEO local santo domingo",
  "google maps SEO dominicana",
  "CRM WhatsApp República Dominicana",
  "agentes IA Santo Domingo",
  "chatbot WhatsApp RD",
  "nativa web studio",
];

export const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
] as const;

export type ServiceSlug = "diseno-web" | "seo-local" | "crm" | "agentes-ia";

export const SERVICES: Array<{
  slug: ServiceSlug;
  path: `/${string}`;
  nameEs: string;
  nameEn: string;
}> = [
  {
    slug: "diseno-web",
    path: "/servicios/diseno-web",
    nameEs: "Diseño y desarrollo web",
    nameEn: "Website design & build",
  },
  {
    slug: "seo-local",
    path: "/servicios/seo-local",
    nameEs: "SEO local y Google Maps",
    nameEn: "Local SEO & Google Maps",
  },
  {
    slug: "crm",
    path: "/servicios/crm",
    nameEs: "CRM personal a la medida",
    nameEn: "Personal CRM",
  },
  {
    slug: "agentes-ia",
    path: "/servicios/agentes-ia",
    nameEs: "Agente IA de marca",
    nameEn: "Brand AI agent",
  },
];

export const INDEXABLE_PATHS = [
  "/",
  "/servicios",
  ...SERVICES.map((s) => s.path),
  "/portfolio",
] as const;

export const NOINDEX_PREFIXES = ["/ads", "/logos", "/demo", "/demos"] as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  absoluteTitle?: boolean;
}): Metadata {
  const url = path;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "es_DO",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE_DEFAULT_TITLE }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const noindexMetadata: Metadata = {
  robots: { index: false, follow: false },
};
