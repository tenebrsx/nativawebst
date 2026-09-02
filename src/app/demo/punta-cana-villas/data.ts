import { waUrl } from "@/lib/whatsapp";

export const IMG = "/demo/punta-cana-villas";
export const BASE = "/demo/punta-cana-villas";
export const DOP_RATE = 60;

export const BRAND = {
  name: "Punta Cana Villas",
  kicker: "Colección privada · Cap Cana",
  place: "Cap Cana, República Dominicana",
  phoneDisplay: "(809) 555-0148",
  phoneTel: "+18095550148",
  email: "hold@puntacanavillas.do",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cap+Cana+Marina+Punta+Cana",
} as const;

export type Area = "marina" | "golf" | "juanillo" | "caleton";

export type Villa = {
  slug: string;
  name: string;
  area: Area;
  areaLabel: string;
  tag: string;
  guests: number;
  beds: number;
  baths: number;
  nightUsd: number;
  hero: string;
  gallery: string[];
  lede: string;
  body: string;
  amenities: string[];
  featured?: boolean;
};

export const VILLAS: Villa[] = [
  {
    slug: "marina",
    name: "Villa Marina",
    area: "marina",
    areaLabel: "Marina Cap Cana",
    tag: "Frente al muelle",
    guests: 8,
    beds: 4,
    baths: 4.5,
    nightUsd: 1450,
    featured: true,
    hero: `${IMG}/hero.jpg`,
    gallery: [`${IMG}/hero.jpg`, `${IMG}/pool.jpg`, `${IMG}/living.jpg`, `${IMG}/bedroom.jpg`, `${IMG}/dining.jpg`],
    lede: "Ocho personas. El muelle abajo. El chat ya trae las fechas.",
    body: "Cuatro suites, infinity al canal, y un muelle privado para el yate del día. No es un hotel: es la casa. El precio de la noche está en la página. WhatsApp es solo para el recorrido y el hold.",
    amenities: ["Infinity al canal", "Muelle privado", "Chef a petición", "Casa de playa del club", "Wi-Fi 500 Mb", "Staff diurno"],
  },
  {
    slug: "palmera",
    name: "Villa Palmera",
    area: "golf",
    areaLabel: "Punta Espada",
    tag: "Fairway",
    guests: 10,
    beds: 5,
    baths: 5,
    nightUsd: 1200,
    hero: `${IMG}/palmera.jpg`,
    gallery: [`${IMG}/palmera.jpg`, `${IMG}/living.jpg`, `${IMG}/kitchen.jpg`, `${IMG}/bedroom.jpg`],
    lede: "Palmeras, green, y diez personas sin pasillo de hotel.",
    body: "Cinco recámaras abiertas al fairway. Desayuno en la terraza. El golf está a un cart. La cotización es por noche, USD o DOP, antes de escribir.",
    amenities: ["Vista al green", "Piscina 18 m", "Cart de golf", "Cocina profesional", "Cine", "Generador"],
  },
  {
    slug: "coral",
    name: "Villa Coral",
    area: "juanillo",
    areaLabel: "Juanillo",
    tag: "Camino a la playa",
    guests: 6,
    beds: 3,
    baths: 3,
    nightUsd: 890,
    hero: `${IMG}/coral.jpg`,
    gallery: [`${IMG}/coral.jpg`, `${IMG}/beach.jpg`, `${IMG}/luna.jpg`, `${IMG}/bedroom.jpg`],
    lede: "Tres minutos a pie hasta Juanillo. Seis huéspedes.",
    body: "Piedra coralina, patio con bougainvillea, y un sendero de uvas de playa. Para una familia que quiere la casa, no el resort.",
    amenities: ["Sendero a Juanillo", "Patio con pileta", "Bicicletas", "Barbacoa", "Aire en suites", "Cuna a petición"],
  },
  {
    slug: "brisa",
    name: "Casa Brisa",
    area: "marina",
    areaLabel: "Cap Cana",
    tag: "Estate",
    guests: 12,
    beds: 6,
    baths: 7,
    nightUsd: 2100,
    hero: `${IMG}/brisa.jpg`,
    gallery: [`${IMG}/brisa.jpg`, `${IMG}/night.jpg`, `${IMG}/dining.jpg`, `${IMG}/kitchen.jpg`, `${IMG}/pool.jpg`],
    lede: "Doce personas. Dos aguas. Una mesa.",
    body: "La casa grande. Doble piscina, cocina de chef, y luz interior a las seis. Grupos que ya saben lo que quieren: fechas y villa en el primer mensaje.",
    amenities: ["Doble piscina", "Chef incluido 4h", "Gimnasio", "Casa de huéspedes", "Cine", "Security 24h"],
  },
  {
    slug: "luna",
    name: "Villa Luna",
    area: "caleton",
    areaLabel: "Caletón",
    tag: "Dos suites",
    guests: 4,
    beds: 2,
    baths: 2,
    nightUsd: 720,
    hero: `${IMG}/luna.jpg`,
    gallery: [`${IMG}/luna.jpg`, `${IMG}/bedroom.jpg`, `${IMG}/pool.jpg`, `${IMG}/dining.jpg`],
    lede: "Una sola planta. Un patio. Cuatro personas.",
    body: "Para una luna de miel o un trabajo en silencio. El patio refleja el cielo. El hold se hace en el chat, no en un motor de reservas.",
    amenities: ["Patio espejo", "Daybed de lino", "Desayuno", "Bicicletas", "Playa a 8 min", "Late checkout a hold"],
  },
  {
    slug: "caleton",
    name: "Casa Caletón",
    area: "caleton",
    areaLabel: "Acantilado",
    tag: "Infinity al mar",
    guests: 8,
    beds: 4,
    baths: 4,
    nightUsd: 1650,
    hero: `${IMG}/caleton.jpg`,
    gallery: [`${IMG}/caleton.jpg`, `${IMG}/hero.jpg`, `${IMG}/night.jpg`, `${IMG}/living.jpg`],
    lede: "El mar abajo. Ocho huéspedes. Sin vecinos a la vista.",
    body: "Piedra oscura sobre una caleta. El infinity se cae al Caribe. No hay muelle: hay horizonte. Las noches se cotizan en la ficha.",
    amenities: ["Infinity al mar", "Jacuzzi", "Chef a petición", "Sound system", "Cala privada a pie", "Staff diurno"],
  },
];

export const AREAS: { id: Area | "all"; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "marina", label: "Marina" },
  { id: "golf", label: "Golf" },
  { id: "juanillo", label: "Juanillo" },
  { id: "caleton", label: "Caletón" },
];

export const EXPERIENCES = [
  {
    title: "Chef en la casa",
    body: "Menú del día, mercado de pescado, mesa en el patio. Se pide en el mismo hilo del hold.",
    img: `${IMG}/chef.jpg`,
  },
  {
    title: "Día de yate",
    body: "Sale del muelle de Villa Marina. Saona o Catalina. El concierge arma el barco, no un formulario.",
    img: `${IMG}/marina-aerial.jpg`,
  },
  {
    title: "Mesa al atardecer",
    body: "Cena de ocho en la terraza. Lino, cerámica, el mar atrás. Se reserva con las noches.",
    img: `${IMG}/dining.jpg`,
  },
];

export const REVIEWS = [
  {
    name: "Clara Méndez",
    stay: "Villa Marina · dic 2025",
    img: `${IMG}/guest-woman.jpg`,
    text: "Escribí con las fechas y éramos ocho. Contestaron desde Cap Cana, no desde un call center. El hold fue ese chat.",
  },
  {
    name: "James Alden",
    stay: "Casa Caletón · mar 2026",
    img: `${IMG}/guest-man.jpg`,
    text: "USD en la ficha. WhatsApp solo para bajar a ver la caleta. Así tiene que ser una villa, no un OTA.",
  },
  {
    name: "Elena & Martín",
    stay: "Villa Luna · ene 2026",
    img: `${IMG}/guest-couple.jpg`,
    text: "Dos suites, un patio. Pedimos el recorrido por el chat y al día siguiente estábamos adentro. Sin mail de “¿cuánto la noche?”.",
  },
];

export const NAV = [
  { href: BASE, label: "Inicio" },
  { href: `${BASE}/villas`, label: "Colección" },
  { href: `${BASE}/cap-cana`, label: "Cap Cana" },
  { href: `${BASE}/experiencias`, label: "Experiencias" },
  { href: `${BASE}/reservar`, label: "Hold" },
];

export const MONTHS_ES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

export function nightsBetween(a: string, b: string) {
  const ms = new Date(b + "T12:00:00").getTime() - new Date(a + "T12:00:00").getTime();
  return Math.max(1, Math.round(ms / 86400000));
}

export function formatRange(checkIn: string, checkOut: string) {
  const a = new Date(checkIn + "T12:00:00");
  const b = new Date(checkOut + "T12:00:00");
  if (a.getMonth() === b.getMonth()) {
    return `${a.getDate()}–${b.getDate()} ${MONTHS_ES[a.getMonth()]}`;
  }
  return `${a.getDate()} ${MONTHS_ES[a.getMonth()]} – ${b.getDate()} ${MONTHS_ES[b.getMonth()]}`;
}

export function money(usd: number, currency: "USD" | "DOP") {
  if (currency === "USD") return `US$ ${usd.toLocaleString("en-US")}`;
  return `RD$ ${(usd * DOP_RATE).toLocaleString("es-DO")}`;
}

export function holdMessage(opts: {
  villa: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  currency: "USD" | "DOP";
}) {
  return `Hola, ${opts.villa}, ${formatRange(opts.checkIn, opts.checkOut)}, ${opts.guests} personas. ¿Disponible en ${opts.currency}?`;
}

export function holdUrl(opts: {
  villa: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  currency: "USD" | "DOP";
}) {
  return waUrl(holdMessage(opts));
}

export function villaBySlug(slug: string) {
  return VILLAS.find((v) => v.slug === slug);
}
