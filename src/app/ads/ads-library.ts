export type AdLang = "es" | "en";
export type AdKind =
  | "quality"
  | "quality-light"
  | "inbox-reel"
  | "speed"
  | "maps"
  | "whatsapp";

type Copy = { es: string; en: string };

export type AdEntry = {
  id: AdKind;
  n: string;
  theme: "dark" | "light";
  format: "still" | "reel";
  label: Copy;
  blurb: Copy;
  caption: Copy;
  frame: {
    es: AdFrame;
    en: AdFrame;
  };
};

type AdFrame = {
  studio: string;
  eyebrow: string;
  lead: string;
  payoff: string;
  body: string;
  proof: string[];
  cta: string;
  url: string;
  mockBrand: string;
  mockNav: string[];
  mockHero: string;
  mockCta: string;
  mockCards: { k: string; v: string }[];
  speedOld?: string;
  speedNew?: string;
  mapsName?: string;
  mapsMeta?: string;
  waFrom?: string;
  waMsg?: string;
};

export const ADS: AdEntry[] = [
  {
    id: "quality",
    n: "01",
    theme: "dark",
    format: "still",
    label: { es: "Calidad · Oscuro", en: "Quality · Dark" },
    blurb: {
      es: "Sitio premium → más clientela.",
      en: "Premium site → more clients.",
    },
    caption: {
      es: `Tu negocio merece una web de la más alta calidad.

En Nativa diseñamos sitios que se ven premium, cargan rápido y convierten visitas en clientes reales.

Más claridad. Más confianza. Más clientes.

👉 nativa.studio
Escríbenos por WhatsApp y arma tu plan.

#NativaWebStudio #DiseñoWebRD #SantoDomingo #MarketingDigitalRD #PymesRD #PaginasWeb`,
      en: `Your business deserves a website of the highest quality.

At Nativa we build sites that look premium, load fast, and turn visits into real clients.

More clarity. More trust. More clients.

👉 nativa.studio
Message us on WhatsApp and build your plan.

#NativaWebStudio #WebDesign #SantoDomingo #DigitalMarketing #SmallBusiness`,
    },
    frame: {
      es: {
        studio: "Web Studio · RD",
        eyebrow: "Sitios que venden",
        lead: "Tu negocio merece",
        payoff: "más clientes.",
        body: "Sitios de la más alta calidad. Claros, rápidos, hechos para que te escriban.",
        proof: ["Más visitas", "Más confianza", "Más WhatsApp"],
        cta: "Elige Nativa",
        url: "nativa.studio",
        mockBrand: "Casa Norte",
        mockNav: ["Obras", "Visita", "Contacto"],
        mockHero: "12.400 m² en obra.",
        mockCta: "Cotizar visita",
        mockCards: [
          { k: "Naco", v: "Torre Lincoln" },
          { k: "Piantini", v: "Plaza Sol" },
        ],
      },
      en: {
        studio: "Web Studio · DR",
        eyebrow: "Sites that sell",
        lead: "Your business deserves",
        payoff: "more clients.",
        body: "Highest-quality sites. Clear, fast, built so people actually write you.",
        proof: ["More visits", "More trust", "More WhatsApp"],
        cta: "Choose Nativa",
        url: "nativa.studio",
        mockBrand: "Casa Norte",
        mockNav: ["Work", "Visit", "Contact"],
        mockHero: "12,400 m² underway.",
        mockCta: "Book a visit",
        mockCards: [
          { k: "Naco", v: "Lincoln Tower" },
          { k: "Piantini", v: "Plaza Sol" },
        ],
      },
    },
  },
  {
    id: "quality-light",
    n: "01",
    theme: "light",
    format: "still",
    label: { es: "Calidad · Claro", en: "Quality · Light" },
    blurb: {
      es: "Misma pieza, modo claro para Stories.",
      en: "Same piece, light mode for Stories.",
    },
    caption: {
      es: `Tu negocio merece una web de la más alta calidad.

En Nativa diseñamos sitios que se ven premium, cargan rápido y convierten visitas en clientes reales.

Más claridad. Más confianza. Más clientes.

👉 nativa.studio
Escríbenos por WhatsApp y arma tu plan.

#NativaWebStudio #DiseñoWebRD #SantoDomingo #MarketingDigitalRD #PymesRD #PaginasWeb`,
      en: `Your business deserves a website of the highest quality.

At Nativa we build sites that look premium, load fast, and turn visits into real clients.

More clarity. More trust. More clients.

👉 nativa.studio
Message us on WhatsApp and build your plan.

#NativaWebStudio #WebDesign #SantoDomingo #DigitalMarketing #SmallBusiness`,
    },
    frame: {
      es: {
        studio: "Web Studio · RD",
        eyebrow: "Sitios que venden",
        lead: "Tu negocio merece",
        payoff: "más clientes.",
        body: "Sitios de la más alta calidad. Claros, rápidos, hechos para que te escriban.",
        proof: ["Más visitas", "Más confianza", "Más WhatsApp"],
        cta: "Elige Nativa",
        url: "nativa.studio",
        mockBrand: "Casa Norte",
        mockNav: ["Obras", "Visita", "Contacto"],
        mockHero: "12.400 m² en obra.",
        mockCta: "Cotizar visita",
        mockCards: [
          { k: "Naco", v: "Torre Lincoln" },
          { k: "Piantini", v: "Plaza Sol" },
        ],
      },
      en: {
        studio: "Web Studio · DR",
        eyebrow: "Sites that sell",
        lead: "Your business deserves",
        payoff: "more clients.",
        body: "Highest-quality sites. Clear, fast, built so people actually write you.",
        proof: ["More visits", "More trust", "More WhatsApp"],
        cta: "Choose Nativa",
        url: "nativa.studio",
        mockBrand: "Casa Norte",
        mockNav: ["Work", "Visit", "Contact"],
        mockHero: "12,400 m² underway.",
        mockCta: "Book a visit",
        mockCards: [
          { k: "Naco", v: "Lincoln Tower" },
          { k: "Piantini", v: "Plaza Sol" },
        ],
      },
    },
  },
  {
    id: "inbox-reel",
    n: "02",
    theme: "light",
    format: "reel",
    label: { es: "Reel · Inbox", en: "Reel · Inbox" },
    blurb: {
      es: "DMs muertos → WhatsApp lleno.",
      en: "Dead DMs → WhatsApp filling.",
    },
    caption: {
      es: `Antes: “precio?” en Instagram. Nadie cierra.

Después de Nativa: el cliente llega a WhatsApp con la talla, las noches o la cita.

Tu negocio merece más clientes.

👉 nativa.studio

#NativaWebStudio #DiseñoWebRD #WhatsAppBusiness #SantoDomingo`,
      en: `Before: “price?” on Instagram. Nobody closes.

After Nativa: the client hits WhatsApp with the size, the nights, or the appointment.

Your business deserves more clients.

👉 nativa.studio

#NativaWebStudio #WhatsAppBusiness #SantoDomingo`,
    },
    frame: {
      es: {
        studio: "Web Studio · RD",
        eyebrow: "Antes / después",
        lead: "Tu negocio merece",
        payoff: "más clientes.",
        body: "De DMs vacíos a un WhatsApp que cierra.",
        proof: ["Pedido en el chat", "Cita en el chat", "Talla en el chat"],
        cta: "Elige Nativa",
        url: "nativa.studio",
        mockBrand: "Casa Norte",
        mockNav: ["Obras", "Visita", "Contacto"],
        mockHero: "12.400 m² en obra.",
        mockCta: "Cotizar visita",
        mockCards: [
          { k: "Naco", v: "Torre Lincoln" },
          { k: "Piantini", v: "Plaza Sol" },
        ],
      },
      en: {
        studio: "Web Studio · DR",
        eyebrow: "Before / after",
        lead: "Your business deserves",
        payoff: "more clients.",
        body: "From empty DMs to a WhatsApp that closes.",
        proof: ["Order in chat", "Appointment in chat", "Size in chat"],
        cta: "Choose Nativa",
        url: "nativa.studio",
        mockBrand: "Casa Norte",
        mockNav: ["Work", "Visit", "Contact"],
        mockHero: "12,400 m² underway.",
        mockCta: "Book a visit",
        mockCards: [
          { k: "Naco", v: "Lincoln Tower" },
          { k: "Piantini", v: "Plaza Sol" },
        ],
      },
    },
  },
  {
    id: "speed",
    n: "03",
    theme: "dark",
    format: "still",
    label: { es: "Velocidad", en: "Speed" },
    blurb: {
      es: "Web lenta = clientes perdidos.",
      en: "Slow site = lost clients.",
    },
    caption: {
      es: `¿Tu web tarda 5 segundos en el celular? Esa espera es un cliente que se fue.

En Nativa armamos sitios que cargan en décimas. WhatsApp al primer toque.

👉 nativa.studio

#NativaWebStudio #DiseñoWebRD #PaginasWeb #SantoDomingo`,
      en: `Does your site take 5 seconds on mobile? That wait is a client who left.

Nativa builds sites that load in fractions of a second. WhatsApp on the first tap.

👉 nativa.studio

#NativaWebStudio #WebDesign #SantoDomingo`,
    },
    frame: {
      es: {
        studio: "Web Studio · RD",
        eyebrow: "Carga que convierte",
        lead: "Si tarda,",
        payoff: "se van.",
        body: "De 5 segundos a décimas. El cliente se queda y te escribe.",
        proof: ["Celular primero", "0.3s de carga", "Clic a WhatsApp"],
        cta: "Elige Nativa",
        url: "nativa.studio",
        mockBrand: "",
        mockNav: [],
        mockHero: "",
        mockCta: "",
        mockCards: [],
        speedOld: "5.2s",
        speedNew: "0.3s",
      },
      en: {
        studio: "Web Studio · DR",
        eyebrow: "Speed that converts",
        lead: "If it lags,",
        payoff: "they leave.",
        body: "From 5 seconds to fractions. They stay and they write you.",
        proof: ["Mobile first", "0.3s load", "Tap to WhatsApp"],
        cta: "Choose Nativa",
        url: "nativa.studio",
        mockBrand: "",
        mockNav: [],
        mockHero: "",
        mockCta: "",
        mockCards: [],
        speedOld: "5.2s",
        speedNew: "0.3s",
      },
    },
  },
  {
    id: "maps",
    n: "04",
    theme: "dark",
    format: "still",
    label: { es: "Google Maps", en: "Google Maps" },
    blurb: {
      es: "Cuando buscan tu servicio, apareces tú.",
      en: "When they search your service, you show up.",
    },
    caption: {
      es: `Cuando buscan tu servicio en Santo Domingo… ¿sales tú o tu competencia?

Nativa conecta tu web con Maps y WhatsApp. La agenda se llena desde la búsqueda.

👉 nativa.studio

#GoogleMapsRD #SEOlocal #NativaWebStudio #SantoDomingo`,
      en: `When they search your service… do you show up, or does your competitor?

Nativa connects your site to Maps and WhatsApp. The calendar fills from search.

👉 nativa.studio

#GoogleMaps #LocalSEO #NativaWebStudio #SantoDomingo`,
    },
    frame: {
      es: {
        studio: "Web Studio · RD",
        eyebrow: "SEO local",
        lead: "Que te encuentren",
        payoff: "primero.",
        body: "Maps, ficha y WhatsApp en un toque. Tú, no la competencia.",
        proof: ["Primero en Maps", "Toque a WhatsApp", "Sin comisión oculta"],
        cta: "Elige Nativa",
        url: "nativa.studio",
        mockBrand: "",
        mockNav: [],
        mockHero: "",
        mockCta: "",
        mockCards: [],
        mapsName: "Tu negocio · Naco",
        mapsMeta: "5.0 · 48 reseñas · Abierto",
      },
      en: {
        studio: "Web Studio · DR",
        eyebrow: "Local SEO",
        lead: "Get found",
        payoff: "first.",
        body: "Maps, listing, WhatsApp in one tap. You — not the competitor.",
        proof: ["First on Maps", "Tap to WhatsApp", "No hidden fee"],
        cta: "Choose Nativa",
        url: "nativa.studio",
        mockBrand: "",
        mockNav: [],
        mockHero: "",
        mockCta: "",
        mockCards: [],
        mapsName: "Your business · Naco",
        mapsMeta: "5.0 · 48 reviews · Open",
      },
    },
  },
  {
    id: "whatsapp",
    n: "05",
    theme: "dark",
    format: "still",
    label: { es: "WhatsApp", en: "WhatsApp" },
    blurb: {
      es: "De la web al chat, listo para cerrar.",
      en: "From the site to chat, ready to close.",
    },
    caption: {
      es: `Deja de perder horas en “precio por DM”.

Tu web pregunta lo que importa y manda el lead a WhatsApp con talla, fecha o tratamiento.

👉 nativa.studio

#WhatsAppBusiness #VentasRD #NativaWebStudio #SantoDomingo`,
      en: `Stop wasting hours on “price via DM.”

Your site asks what matters and sends the lead to WhatsApp with size, date, or treatment.

👉 nativa.studio

#WhatsAppBusiness #NativaWebStudio #SantoDomingo`,
    },
    frame: {
      es: {
        studio: "Web Studio · RD",
        eyebrow: "Leads que cierran",
        lead: "No más",
        payoff: "precio por DM.",
        body: "El cliente llega al chat con el pedido listo. Tú cierras.",
        proof: ["Lead caliente", "Datos en el chat", "Cierre en WhatsApp"],
        cta: "Elige Nativa",
        url: "nativa.studio",
        mockBrand: "",
        mockNav: [],
        mockHero: "",
        mockCta: "",
        mockCards: [],
        waFrom: "Cliente · ahora",
        waMsg: "Villa Luna, 4 noches. ¿Hay?",
      },
      en: {
        studio: "Web Studio · DR",
        eyebrow: "Leads that close",
        lead: "No more",
        payoff: "price via DM.",
        body: "The client lands in chat with the order ready. You close.",
        proof: ["Warm lead", "Data in chat", "Close on WhatsApp"],
        cta: "Choose Nativa",
        url: "nativa.studio",
        mockBrand: "",
        mockNav: [],
        mockHero: "",
        mockCta: "",
        mockCards: [],
        waFrom: "Client · now",
        waMsg: "Villa Luna, 4 nights. Available?",
      },
    },
  },
];

export function findAd(id: string | null) {
  return ADS.find((a) => a.id === id) ?? ADS[0];
}
