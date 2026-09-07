import { waUrl } from "@/lib/whatsapp";

export const IMG = "/demo/bavaro-swim";
export const BASE = "/demo/bavaro-swim";

export const BRAND = {
  name: "Bávaro Swim",
  kicker: "Resortwear · Santo Domingo",
  pickup: "BlueMall, Santo Domingo",
  pickupPc: "Punta Cana Village",
  phoneDisplay: "(809) 555-0164",
  phoneTel: "+18095550164",
  email: "hola@bavaroswim.do",
} as const;

export type Category = "enterizos" | "bikinis" | "lino" | "playa";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  tag: string;
  usd: number;
  dop: number;
  sizes: string[];
  colors: string[];
  hero: string;
  gallery: string[];
  lede: string;
  body: string;
  fabric: string;
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "enterizo-arena",
    name: "Enterizo Arena",
    category: "enterizos",
    tag: "Pieza firma",
    usd: 98,
    dop: 5800,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Arena", "Negro"],
    featured: true,
    hero: `${IMG}/enterizo-arena.jpg`,
    gallery: [`${IMG}/enterizo-arena.jpg`, `${IMG}/enterizo-detail.jpg`, `${IMG}/beach.jpg`],
    lede: "El enterizo que ya va en el chat. Talla M, recogida en SDQ.",
    body: "Una pieza. Color arena. Herraje dorado. Lo eliges en el celular; el mensaje llega con la talla. Recogida en BlueMall o envío a Punta Cana.",
    fabric: "Lycra UV50+ · secado rápido · forro interior",
  },
  {
    slug: "bikini-sal",
    name: "Bikini Sal",
    category: "bikinis",
    tag: "Dos piezas",
    usd: 88,
    dop: 5200,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Sal", "Arena"],
    hero: `${IMG}/bikini-sal.jpg`,
    gallery: [`${IMG}/bikini-sal.jpg`, `${IMG}/beach.jpg`],
    lede: "Blanco sal. Top bandeau. La talla se escribe en WhatsApp.",
    body: "Corte limpio, tiras trenzadas. Para Juanillo a las seis. Pedido con talla; recogida el mismo día en SDQ si hay stock.",
    fabric: "Lycra mate · UV50+",
  },
  {
    slug: "bikini-marea",
    name: "Bikini Marea",
    category: "bikinis",
    tag: "Laguna",
    usd: 88,
    dop: 5200,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Marea", "Negro"],
    hero: `${IMG}/bikini-marea.jpg`,
    gallery: [`${IMG}/bikini-marea.jpg`, `${IMG}/beach.jpg`],
    lede: "Verde laguna. El mar de Bávaro, en dos piezas.",
    body: "El color de la costa este. Se pide con talla. El chat no es un carrito abandonado.",
    fabric: "Lycra brillante · UV50+",
  },
  {
    slug: "camisa-lino",
    name: "Camisa Lino Cap Cana",
    category: "lino",
    tag: "100% lino",
    usd: 110,
    dop: 6500,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Marfil", "Arena"],
    hero: `${IMG}/camisa-lino.jpg`,
    gallery: [`${IMG}/camisa-lino.jpg`, `${IMG}/tienda.jpg`],
    lede: "Lino italiano. La camisa de la terraza.",
    body: "Corte holgado, manga que se sube. Sobre el enterizo o sola. Recogida en BlueMall.",
    fabric: "Lino 100% · arruga viva",
  },
  {
    slug: "pareo-arena",
    name: "Pareo Arena",
    category: "playa",
    tag: "Talla única",
    usd: 62,
    dop: 3700,
    sizes: ["Única"],
    colors: ["Arena"],
    hero: `${IMG}/pareo.jpg`,
    gallery: [`${IMG}/pareo.jpg`, `${IMG}/beach.jpg`],
    lede: "Se envuelve. Se lleva en la bolsa.",
    body: "Lino arena. Cubre el enterizo al salir del agua. Un solo tamaño.",
    fabric: "Lino · 180 × 90 cm",
  },
  {
    slug: "vestido-cala",
    name: "Vestido Cala",
    category: "playa",
    tag: "Atardecer",
    usd: 150,
    dop: 8900,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Terracota", "Arena"],
    hero: `${IMG}/vestido-cala.jpg`,
    gallery: [`${IMG}/vestido-cala.jpg`, `${IMG}/beach.jpg`],
    lede: "La pieza de las siete. Cena en Cap Cana.",
    body: "Caída de lino y viscosa. Se pide con talla. El mensaje no es un formulario de envío vacío.",
    fabric: "Lino-viscosa · forro corto",
  },
];

export const CATS: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "Todo" },
  { id: "enterizos", label: "Enterizos" },
  { id: "bikinis", label: "Bikinis" },
  { id: "lino", label: "Lino" },
  { id: "playa", label: "Playa" },
];

export const REVIEWS = [
  {
    name: "Camila Rivas",
    piece: "Enterizo Arena · talla M",
    text: "Escribí por WhatsApp: enterizo arena, M, recogida en BlueMall. A las dos horas lo tenía. No hubo carrito muerto.",
    img: `${IMG}/review.jpg`,
  },
  {
    name: "Luis Peña",
    piece: "Camisa lino · L",
    text: "Pedí la camisa con la talla en el chat. Recogí en SDQ al día siguiente. Así tiene que ser una tienda de playa.",
    img: `${IMG}/camisa-lino.jpg`,
  },
];

export const NAV = [
  { href: BASE, label: "Inicio" },
  { href: `${BASE}/tienda`, label: "Tienda" },
  { href: `${BASE}/lookbook`, label: "Lookbook" },
  { href: `${BASE}/la-marca`, label: "La marca" },
  { href: `${BASE}/recoger`, label: "Recoger" },
];

export function money(usd: number, dop: number, currency: "USD" | "DOP") {
  if (currency === "USD") return `US$ ${usd}`;
  return `RD$ ${dop.toLocaleString("es-DO")}`;
}

export function orderLine(name: string, size: string, pickup = "SDQ") {
  return `Quiero el ${name.toLowerCase()}, talla ${size}. ¿Lo tienen para recoger en ${pickup}?`;
}

export function orderUrl(name: string, size: string, pickup = "SDQ") {
  return waUrl(orderLine(name, size, pickup));
}

export function productBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
