import { waUrl } from "@/lib/whatsapp";

export const IMG = "/demo/terrenas-coffee";
export const BASE = "/demo/terrenas-coffee";

export const BRAND = {
  name: "Café Terrenas",
  kicker: "Tueste · Las Terrenas",
  street: "Calle Principal 42",
  town: "Las Terrenas, Samaná",
  phoneDisplay: "(809) 555-0133",
  phoneTel: "+18095550133",
  email: "pedido@cafeterrenas.do",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Las+Terrenas+Samaná+café",
} as const;

export type Coffee = {
  slug: string;
  name: string;
  process: string;
  notes: string;
  origin: string;
  usd250: number;
  dop250: number;
  hero: string;
  featured?: boolean;
  lede: string;
  body: string;
};

export const COFFEES: Coffee[] = [
  {
    slug: "geisha",
    name: "Geisha El Limón",
    process: "Lavado",
    notes: "Jazmín, panela, lima",
    origin: "Finca El Limón · 1.280 m",
    usd250: 38,
    dop250: 2280,
    featured: true,
    hero: `${IMG}/geisha.jpg`,
    lede: "Dos kilos. Destino Piantini. El precio, en DOP, en el chat.",
    body: "Micro-lote geisha de El Limón. El kilo está en la ficha. WhatsApp cierra el envío: tueste, kilos, destino. No un formulario vacío.",
  },
  {
    slug: "caturra",
    name: "Caturra Samaná",
    process: "Honey",
    notes: "Cacao, naranja, miel",
    origin: "Cordillera Septentrional · 1.100 m",
    usd250: 16,
    dop250: 960,
    hero: `${IMG}/beans.jpg`,
    lede: "El día a día de la casa. Honey, no amargo.",
    body: "Caturra honey de la misma loma. Se pide en 250 g o por kilo. El chat trae el tueste.",
  },
  {
    slug: "natural",
    name: "Natural Playa",
    process: "Natural",
    notes: "Maracuyá, mora, caña",
    origin: "Finca El Limón · 980 m",
    usd250: 18,
    dop250: 1080,
    hero: `${IMG}/cup.jpg`,
    lede: "Fruta de Samaná. Secado en cama africana.",
    body: "Natural, no un blend anónimo. El destino se escribe junto a los kilos.",
  },
  {
    slug: "espresso",
    name: "Espresso de la casa",
    process: "Blend",
    notes: "Cacao, nuez, caramelo",
    origin: "Tueste medio · barra",
    usd250: 14,
    dop250: 840,
    hero: `${IMG}/roaster.jpg`,
    lede: "El shot de la terraza. También en grano.",
    body: "Blend de la casa. Barra o envío. El pedido nombra el kilo y la ciudad.",
  },
  {
    slug: "coldbrew",
    name: "Cold brew 18 h",
    process: "Inmersión",
    notes: "Chocolate, canela",
    origin: "Macerado en Las Terrenas",
    usd250: 12,
    dop250: 720,
    hero: `${IMG}/terrace.jpg`,
    lede: "Botella, no un vaso de tourist menu.",
    body: "Concentrate para la nevera de Piantini. Se pide en litros, en el mismo hilo del geisha.",
  },
];

export const REVIEWS = [
  {
    name: "Sofía Mena",
    stay: "Geisha · 2 kg · Piantini",
    img: `${IMG}/review-w.jpg`,
    text: "Escribí: 2 kg de geisha, envío a Piantini, ¿cuánto en DOP? Contestaron el precio. No un DM pidiendo lista.",
  },
  {
    name: "Pedro Alcántara",
    stay: "Caturra · kilo · Naco",
    img: `${IMG}/review-m.jpg`,
    text: "El tueste y los kilos iban en el primer mensaje. El café llegó en dos días.",
  },
];

export const NAV = [
  { href: BASE, label: "Inicio" },
  { href: `${BASE}/tienda`, label: "Tienda" },
  { href: `${BASE}/origen`, label: "Origen" },
  { href: `${BASE}/el-local`, label: "El local" },
  { href: `${BASE}/pedido`, label: "Pedido" },
];

export const DESTINOS = ["Piantini", "Naco", "Punta Cana", "Las Terrenas"];
export const KILOS = [0.25, 0.5, 1, 2];

export function money(usd: number, dop: number, c: "USD" | "DOP") {
  if (c === "USD") return `US$ ${usd}`;
  return `RD$ ${dop.toLocaleString("es-DO")}`;
}

export function kgLabel(kg: number) {
  return kg >= 1 ? `${kg} kg` : `${Math.round(kg * 1000)} g`;
}

export function bagUsd(c: Coffee, kg: number) {
  return Math.round(c.usd250 * (kg / 0.25));
}

export function bagDop(c: Coffee, kg: number) {
  return Math.round(c.dop250 * (kg / 0.25));
}

export const FEATURED = COFFEES.find((c) => c.featured) ?? COFFEES[0];

export function orderLine(coffee = "geisha", kg = 2, dest = "Piantini") {
  const label = kg >= 1 ? `${kg}kg` : `${kg * 1000}g`;
  return `Quiero ${label} de ${coffee}, envío a ${dest}. ¿Cuánto en DOP?`;
}

export function orderUrl(coffee = "geisha", kg = 2, dest = "Piantini") {
  return waUrl(orderLine(coffee, kg, dest));
}

export function coffeeBySlug(slug: string) {
  return COFFEES.find((c) => c.slug === slug);
}
