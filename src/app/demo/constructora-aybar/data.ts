import { waUrl } from "@/lib/whatsapp";

export const IMG = "/demo/constructora-aybar";
export const BASE = "/demo/constructora-aybar";

export const BRAND = {
  name: "Constructora Aybar",
  kicker: "Obra · Santo Domingo",
  street: "Av. Máximo Gómez 88",
  town: "Santo Domingo, D.N.",
  phoneDisplay: "(809) 555-0140",
  phoneTel: "+18095550140",
  email: "visita@aybar.do",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Avenida+Maximo+Gomez+Santo+Domingo+constructora",
} as const;

export type Obra = {
  slug: string;
  name: string;
  tipo: string;
  niveles: number;
  m2: number;
  zona: string;
  year: string;
  hero: string;
  featured?: boolean;
  lede: string;
  body: string;
};

export const OBRAS: Obra[] = [
  {
    slug: "torre-naco",
    name: "Torre Naco",
    tipo: "Torre",
    niveles: 18,
    m2: 12400,
    zona: "Naco",
    year: "2026",
    featured: true,
    hero: `${IMG}/torre.jpg`,
    lede: "18 niveles. 12.400 m². Naco. La visita se pide con los m² ya escritos.",
    body: "Residencial en Ensanche Naco. El chat no pide un PDF genérico: llega con los niveles, el metraje y la zona. WhatsApp agenda la visita de obra.",
  },
  {
    slug: "torre-piantini",
    name: "Torre Piantini",
    tipo: "Torre",
    niveles: 24,
    m2: 18500,
    zona: "Piantini",
    year: "2025",
    hero: `${IMG}/piantini.jpg`,
    lede: "24 niveles sobre Churchill. El metraje va en el primer mensaje.",
    body: "Torre de 24 niveles en Piantini. La visita se agenda con los m², no con un “info pls”.",
  },
  {
    slug: "villas-cap-cana",
    name: "Villas Cap Cana",
    tipo: "Villas",
    niveles: 3,
    m2: 4200,
    zona: "Cap Cana",
    year: "2025",
    hero: `${IMG}/villas.jpg`,
    lede: "Tres niveles frente al canal. El chat nombra el metraje.",
    body: "Cuatro villas en estructura. Cap Cana. WhatsApp abre con tipo, niveles y zona.",
  },
  {
    slug: "nave-duarte",
    name: "Nave Duarte",
    tipo: "Nave",
    niveles: 1,
    m2: 28000,
    zona: "Autopista Duarte",
    year: "2024",
    hero: `${IMG}/industrial.jpg`,
    lede: "28.000 m² de nave clase A. El presupuesto espera el metraje.",
    body: "Logística en Duarte. El promotor llega con los m². La visita se pide en el chat.",
  },
  {
    slug: "plaza-churchill",
    name: "Plaza Churchill",
    tipo: "Plaza",
    niveles: 6,
    m2: 9200,
    zona: "Piantini",
    year: "2025",
    hero: `${IMG}/plaza.jpg`,
    lede: "Seis niveles comerciales. La zona ya va en el mensaje.",
    body: "Plaza en Churchill. El chat agenda la visita con el tipo y los m², no con un formulario vacío.",
  },
];

export const ENGINEERS = [
  {
    name: "Ing. Camila Aybar",
    role: "Dirección de obra",
    cred: "INTEC · CODIA · 16 años",
    img: `${IMG}/engineer-w.jpg`,
    bio: "Contesta el chat de la torre. El metraje ya viene escrito.",
  },
  {
    name: "Ing. Héctor Peña",
    role: "Estructura",
    cred: "PUCMM · 19 años",
    img: `${IMG}/engineer-m.jpg`,
    bio: "Niveles, losa, sismo. La visita se pide con el proyecto, no con un PDF.",
  },
];

export const REVIEWS = [
  {
    name: "Marta Guillén",
    stay: "Torre · 18 niveles · Naco",
    img: `${IMG}/review-w.jpg`,
    text: "Escribí: Torre 18 niveles, 12.400 m², Naco. ¿Agendamos visita? Contestaron la hora. No un brochure.",
  },
  {
    name: "Luis Henríquez",
    stay: "Nave · 28.000 m² · Duarte",
    img: `${IMG}/review-m.jpg`,
    text: "El metraje iba en el primer mensaje. La visita al predio fue al día siguiente.",
  },
];

export const NAV = [
  { href: BASE, label: "Inicio" },
  { href: `${BASE}/obras`, label: "Obras" },
  { href: `${BASE}/ingenieria`, label: "Ingeniería" },
  { href: `${BASE}/estudio`, label: "Estudio" },
  { href: `${BASE}/visita`, label: "Visita" },
];

export const TIPOS = ["Torre", "Villas", "Nave", "Plaza"];
export const NIVELES = [3, 6, 12, 18, 24];
export const METRAJES = [4200, 9200, 12400, 18500, 28000];
export const ZONAS = ["Naco", "Piantini", "Cap Cana", "Autopista Duarte"];

export const FEATURED = OBRAS.find((o) => o.featured) ?? OBRAS[0];

export function fmtM2(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function visitLine(tipo = "Torre", niveles = 18, m2 = 12400, zona = "Naco") {
  return `${tipo} ${niveles} niveles, ${fmtM2(m2)} m², ${zona}. ¿Agendamos visita?`;
}

export function visitUrl(tipo = "Torre", niveles = 18, m2 = 12400, zona = "Naco") {
  return waUrl(visitLine(tipo, niveles, m2, zona));
}

export function obraBySlug(slug: string) {
  return OBRAS.find((o) => o.slug === slug);
}
