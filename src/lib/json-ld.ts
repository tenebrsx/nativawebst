import {
  SITE_CITY,
  SITE_COUNTRY,
  SITE_COUNTRY_NAME,
  SITE_DEFAULT_DESCRIPTION,
  SITE_EMAIL,
  SITE_LAT,
  SITE_LNG,
  SITE_NAME,
  SITE_PHONE,
  SITE_PRICE_RANGE,
  SITE_STREET,
  SITE_URL,
  SERVICES,
  WEEKDAYS,
  absoluteUrl,
  type ServiceSlug,
} from "./site";

export type FaqItem = { q: string; a: string };

export function orgId() {
  return `${SITE_URL}/#organization`;
}

export function websiteId() {
  return `${SITE_URL}/#website`;
}

export function serviceId(slug: ServiceSlug) {
  return `${SITE_URL}/servicios/${slug}#service`;
}

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": orgId(),
        name: SITE_NAME,
        image: `${SITE_URL}/opengraph-image`,
        url: SITE_URL,
        telephone: SITE_PHONE,
        email: SITE_EMAIL,
        priceRange: SITE_PRICE_RANGE,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_STREET,
          addressLocality: SITE_CITY,
          addressCountry: SITE_COUNTRY,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE_LAT,
          longitude: SITE_LNG,
        },
        areaServed: [
          {
            "@type": "City",
            name: SITE_CITY,
            containedInPlace: { "@type": "Country", name: SITE_COUNTRY_NAME },
          },
          { "@type": "City", name: "Punta Cana" },
          { "@type": "Country", name: SITE_COUNTRY_NAME },
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [...WEEKDAYS],
          opens: "09:00",
          closes: "18:00",
        },
        knowsAbout: [
          "Diseño web",
          "SEO local",
          "Google Maps",
          "CRM",
          "Agentes de inteligencia artificial",
          "WhatsApp Business",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios Nativa",
          itemListElement: SERVICES.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": serviceId(service.slug),
              name: service.nameEs,
              url: absoluteUrl(service.path),
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId(),
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DEFAULT_DESCRIPTION,
        inLanguage: "es-DO",
        publisher: { "@id": orgId() },
      },
    ],
  };
}

export function servicePageGraph({
  slug,
  name,
  description,
  path,
  faqs,
}: {
  slug: ServiceSlug;
  name: string;
  description: string;
  path: string;
  faqs: FaqItem[];
}) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": serviceId(slug),
        name,
        description,
        url,
        provider: { "@id": orgId() },
        areaServed: { "@type": "Country", name: SITE_COUNTRY_NAME },
        serviceType: name,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Servicios",
            item: absoluteUrl("/servicios"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };
}

export function serviciosHubGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${absoluteUrl("/servicios")}#page`,
        name: "Servicios Nativa",
        url: absoluteUrl("/servicios"),
        isPartOf: { "@id": websiteId() },
        about: { "@id": orgId() },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Servicios",
            item: absoluteUrl("/servicios"),
          },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: SERVICES.map((service, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: service.nameEs,
          url: absoluteUrl(service.path),
        })),
      },
    ],
  };
}
