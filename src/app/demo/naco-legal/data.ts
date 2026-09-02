import { waUrl } from "@/lib/whatsapp";

export const IMG = "/demo/naco-legal";
export const BASE = "/demo/naco-legal";

export const FIRM = {
  name: "Naco Law Group",
  kicker: "Bufete · Ensanche Naco",
  street: "Calle Fantino Falco #12",
  neighborhood: "Ensanche Naco",
  city: "Santo Domingo",
  phoneDisplay: "(809) 555-0188",
  phoneTel: "+18095550188",
  email: "consulta@nacolaw.do",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Calle+Fantino+Falco+Naco+Santo+Domingo",
} as const;

export type Practice = {
  slug: string;
  name: string;
  tag: string;
  lede: string;
  body: string;
  matters: string[];
};

export const PRACTICES: Practice[] = [
  {
    slug: "societario",
    name: "Societario",
    tag: "El asunto de esta semana",
    lede: "Constitución, gobierno y contratos. El chat ya trae el asunto.",
    body: "Sociedades, actas, fusiones y el día a día de una compañía en la RD. No explicamos el bufete por teléfono. Eliges societario en la web; WhatsApp agenda la consulta.",
    matters: ["Constitución de SRL y SA", "Pactos de accionistas", "Gobierno corporativo", "Due diligence"],
  },
  {
    slug: "inversion",
    name: "Inversión extranjera",
    tag: "Zonas francas",
    lede: "Entrar al país con el expediente ya armado.",
    body: "CEI-RD, zonas francas, estructuras de holding. El inversionista llega con el asunto escrito, no con “quisiera información”.",
    matters: ["CEI-RD", "Zonas francas", "Contratos de inversión", "Repatriación"],
  },
  {
    slug: "marcas",
    name: "Marcas y ONAPI",
    tag: "Activos",
    lede: "Registro y defensa. El nombre de la marca va en el mensaje.",
    body: "ONAPI, oposiciones, cesiones. WhatsApp no es para explicar qué es una marca. Es para agendar con el expediente a mano.",
    matters: ["Registro ONAPI", "Oposiciones", "Licencias", "Nombres comerciales"],
  },
  {
    slug: "litigios",
    name: "Litigios y arbitraje",
    tag: "Sala",
    lede: "Comercial, civil, arbitral. El expediente entra por el chat.",
    body: "Representación en Santo Domingo y cortes arbitrales. La consulta se pide con el tipo de controversia, no con una llamada al conmutador.",
    matters: ["Comercial", "Civil", "Arbitraje", "Medidas cautelares"],
  },
];

export const LAWYERS = [
  {
    name: "Lic. Rafael Nolasco",
    role: "Socio · Societario",
    cred: "UNIBE · NYU · 18 años",
    bio: "Gobierno de sociedades y fusiones. Contesta el chat de societario, no un recepcionista.",
    img: `${IMG}/nolasco.jpg`,
  },
  {
    name: "Lic. Isabel Almonte",
    role: "Socia · Inversión",
    cred: "PUCMM · 16 años",
    bio: "Zonas francas y capital extranjero. El inversionista llega con el asunto ya nombrado.",
    img: `${IMG}/almonte.jpg`,
  },
  {
    name: "Lic. Daniel Reyes",
    role: "Asociado · Litigios",
    cred: "UASD · 9 años",
    bio: "Sala y arbitraje. El expediente entra por WhatsApp, no por el conmutador de las 8am.",
    img: `${IMG}/reyes.jpg`,
  },
];

export const REVIEWS = [
  {
    name: "Marta Guillén",
    matter: "Societario · Naco",
    img: `${IMG}/review-w.jpg`,
    text: "Pedí societario esta semana desde la web. El Lic. Nolasco contestó el chat. Nadie me explicó el bufete por teléfono.",
  },
  {
    name: "Andrés Keller",
    matter: "Inversión · CEI-RD",
    img: `${IMG}/review-m.jpg`,
    text: "El asunto iba en el primer mensaje. Agenda en el chat, no en la extensión de recepción.",
  },
];

export const NAV = [
  { href: BASE, label: "Inicio" },
  { href: `${BASE}/practica`, label: "Práctica" },
  { href: `${BASE}/equipo`, label: "Equipo" },
  { href: `${BASE}/el-estudio`, label: "El estudio" },
  { href: `${BASE}/consulta`, label: "Consulta" },
];

export function consultMessage(area = "societario", when = "esta semana") {
  return `Necesito consulta de ${area} ${when}. Vi el equipo en la web.`;
}

export function consultUrl(area = "societario", when = "esta semana") {
  return waUrl(consultMessage(area, when));
}

export function practiceBySlug(slug: string) {
  return PRACTICES.find((p) => p.slug === slug);
}
