export type L = { es: string; en: string };

export function tx(v: L, lang: "es" | "en") {
  return lang === "es" ? v.es : v.en;
}

export type LandingTemplate = {
  id: string;
  kind: "landing";
  cat: L;
  brand: string;
  domain: string;
  nav: L[];
  hero: { img: string; kicker: L; title: L; sub: L; cta: L };
  toast: { label: L; text: L };
  stats: { n: string; l: L }[];
  cards: { img: string; tag: L; title: L; meta: string }[];
  strip: { img: string; name: string; role: L }[];
  info: { title: L; lines: string[] };
  map: { name: string; meta: L };
};

export type ShopTemplate = {
  id: string;
  kind: "shop";
  cat: L;
  brand: string;
  domain: string;
  logo: string;
  pills: L[];
  drop: { img: string; name: string; price: string; stock: number; tag: L };
  picks: { img: string; name: string; price: string; stock: number; low?: boolean }[];
  geo: string;
  pdp: {
    img: string;
    tag: L;
    name: string;
    price: string;
    body: L;
    specs: string[];
    stock: number;
  };
  bag: {
    rows: { img: string; name: string; variant: L; price: string; stock: number }[];
    subtotal: string;
  };
};

export type Template = LandingTemplate | ShopTemplate;

const DENTAL = "/demo/sdq-dental";
const VILLAS = "/demo/punta-cana-villas";
const LEGAL = "/demo/naco-legal";
const BUILD = "/demo/constructora-aybar";
const SWIM = "/demo/bavaro-swim";
const COFFEE = "/demo/terrenas-coffee";
const AURA = "/demo/aura-atelier";
const NODO = "/demo/nodo";

export const TEMPLATES: Template[] = [
  {
    id: "clinica",
    kind: "landing",
    cat: { es: "Clínica", en: "Clinic" },
    brand: "SDQ Dental",
    domain: "sdqdental.do",
    nav: [
      { es: "Clínica", en: "Clinic" },
      { es: "Equipo", en: "Team" },
      { es: "Citas", en: "Book" },
    ],
    hero: {
      img: `${DENTAL}/consult.jpg`,
      kicker: { es: "Naco · Santo Domingo", en: "Naco · Santo Domingo" },
      title: { es: "Citas hoy.", en: "Book today." },
      sub: {
        es: "El tratamiento ya va en el chat. Carillas, limpieza, implante.",
        en: "The treatment is already in the chat. Veneers, cleaning, implant.",
      },
      cta: { es: "Pedir cita", en: "Book now" },
    },
    toast: {
      label: { es: "Nueva cita", en: "New booking" },
      text: { es: "Limpieza + carillas · hoy 16:30", en: "Cleaning + veneers · today 4:30" },
    },
    stats: [
      { n: "18", l: { es: "días a live", en: "days to live" } },
      { n: "4.9", l: { es: "en Maps", en: "on Maps" } },
      { n: "350+", l: { es: "reseñas", en: "reviews" } },
    ],
    cards: [
      {
        img: `${DENTAL}/instruments.jpg`,
        tag: { es: "Preventivo", en: "Preventive" },
        title: { es: "Limpieza ultrasónica", en: "Ultrasonic cleaning" },
        meta: "RD$ 2,500",
      },
      {
        img: `${DENTAL}/case-veneers-after.jpg`,
        tag: { es: "Estética", en: "Aesthetic" },
        title: { es: "Carillas", en: "Veneers" },
        meta: "RD$ 18,000",
      },
      {
        img: `${DENTAL}/imaging.jpg`,
        tag: { es: "Diagnóstico", en: "Imaging" },
        title: { es: "Examen + RX", en: "Exam + X-ray" },
        meta: "RD$ 1,800",
      },
    ],
    strip: [
      { img: `${DENTAL}/doctor-reyes.jpg`, name: "Dra. Reyes", role: { es: "Estética", en: "Aesthetic" } },
      { img: `${DENTAL}/doctor-valdez.jpg`, name: "Dr. Valdez", role: { es: "Implantes", en: "Implants" } },
      { img: `${DENTAL}/doctor-mendoza.jpg`, name: "Dra. Mendoza", role: { es: "Familia", en: "Family" } },
    ],
    info: {
      title: { es: "Horario", en: "Hours" },
      lines: ["Lun–Vie 8:00–18:00", "Sáb 9:00–14:00", "Troncoso #14, Naco"],
    },
    map: { name: "SDQ Dental Care", meta: { es: "4.9 · Naco · Abierto", en: "4.9 · Naco · Open" } },
  },

  {
    id: "inmobiliaria",
    kind: "landing",
    cat: { es: "Bienes raíces", en: "Real estate" },
    brand: "Punta Cana Villas",
    domain: "puntacanavillas.do",
    nav: [
      { es: "Villas", en: "Villas" },
      { es: "Cap Cana", en: "Cap Cana" },
      { es: "Reservar", en: "Book" },
    ],
    hero: {
      img: `${VILLAS}/hero.jpg`,
      kicker: { es: "Cap Cana · Punta Cana", en: "Cap Cana · Punta Cana" },
      title: { es: "Seis villas. Fechas reales.", en: "Six villas. Real dates." },
      sub: {
        es: "USD o DOP en la ficha. El hold llega por WhatsApp con la villa y las noches ya escritas.",
        en: "USD or DOP on the page. The hold lands on WhatsApp with villa and nights already written.",
      },
      cta: { es: "Ver disponibilidad", en: "Check dates" },
    },
    toast: {
      label: { es: "Nueva consulta", en: "New inquiry" },
      text: { es: "Villa Marina · 12–18 dic · 8 personas", en: "Villa Marina · Dec 12–18 · 8 guests" },
    },
    stats: [
      { n: "6", l: { es: "villas", en: "villas" } },
      { n: "4.9", l: { es: "huéspedes", en: "guests" } },
      { n: "24h", l: { es: "respuesta", en: "reply" } },
    ],
    cards: [
      {
        img: `${VILLAS}/luna.jpg`,
        tag: { es: "Frente al mar", en: "Oceanfront" },
        title: { es: "Villa Luna", en: "Villa Luna" },
        meta: "US$ 1,450",
      },
      {
        img: `${VILLAS}/palmera.jpg`,
        tag: { es: "Fairway", en: "Fairway" },
        title: { es: "Villa Palmera", en: "Villa Palmera" },
        meta: "US$ 1,180",
      },
      {
        img: `${VILLAS}/coral.jpg`,
        tag: { es: "Caleta", en: "Cove" },
        title: { es: "Villa Coral", en: "Villa Coral" },
        meta: "US$ 980",
      },
    ],
    strip: [
      { img: `${VILLAS}/living.jpg`, name: "Sala", role: { es: "Abierta al fairway", en: "Open to the fairway" } },
      { img: `${VILLAS}/bedroom.jpg`, name: "Recámaras", role: { es: "Cinco suites", en: "Five suites" } },
      { img: `${VILLAS}/pool.jpg`, name: "Piscina", role: { es: "Borde infinito", en: "Infinity edge" } },
    ],
    info: {
      title: { es: "Estadía", en: "Stay" },
      lines: ["Check-in 15:00", "Mínimo 3 noches", "Cap Cana, Punta Cana"],
    },
    map: { name: "Punta Cana Villas", meta: { es: "4.9 · Cap Cana", en: "4.9 · Cap Cana" } },
  },

  {
    id: "legal",
    kind: "landing",
    cat: { es: "Legal", en: "Legal" },
    brand: "Naco Law Group",
    domain: "nacolaw.do",
    nav: [
      { es: "Práctica", en: "Practice" },
      { es: "Equipo", en: "Team" },
      { es: "Consulta", en: "Consult" },
    ],
    hero: {
      img: `${LEGAL}/facade.jpg`,
      kicker: { es: "Ensanche Naco · Santo Domingo", en: "Ensanche Naco · Santo Domingo" },
      title: { es: "Consulta esta semana.", en: "Consult this week." },
      sub: {
        es: "Societario, laboral, inmobiliario. El caso entra al chat con nombre y fecha, no por la recepción.",
        en: "Corporate, labor, real estate. The case lands in the chat with a name and a date, not via reception.",
      },
      cta: { es: "Agendar consulta", en: "Book a consult" },
    },
    toast: {
      label: { es: "Nueva consulta", en: "New consult" },
      text: { es: "Societario · jueves 10:00", en: "Corporate · Thursday 10:00" },
    },
    stats: [
      { n: "22", l: { es: "años", en: "years" } },
      { n: "4", l: { es: "áreas", en: "practices" } },
      { n: "48h", l: { es: "respuesta", en: "reply" } },
    ],
    cards: [
      {
        img: `${LEGAL}/library.jpg`,
        tag: { es: "Societario", en: "Corporate" },
        title: { es: "Constitución y compliance", en: "Incorporation & compliance" },
        meta: "RD$ 35,000",
      },
      {
        img: `${LEGAL}/conference.jpg`,
        tag: { es: "Laboral", en: "Labor" },
        title: { es: "Contratos y salidas", en: "Contracts & exits" },
        meta: "RD$ 18,000",
      },
      {
        img: `${LEGAL}/reception.jpg`,
        tag: { es: "Inmobiliario", en: "Real estate" },
        title: { es: "Due diligence", en: "Due diligence" },
        meta: "RD$ 45,000",
      },
    ],
    strip: [
      { img: `${LEGAL}/almonte.jpg`, name: "Lic. Almonte", role: { es: "Societario", en: "Corporate" } },
      { img: `${LEGAL}/nolasco.jpg`, name: "Lic. Nolasco", role: { es: "Laboral", en: "Labor" } },
      { img: `${LEGAL}/reyes.jpg`, name: "Lic. Reyes", role: { es: "Inmobiliario", en: "Real estate" } },
    ],
    info: {
      title: { es: "Oficina", en: "Office" },
      lines: ["Lun–Vie 9:00–18:00", "Av. Tiradentes, Naco", "Consultas con cita"],
    },
    map: { name: "Naco Law Group", meta: { es: "4.8 · Naco · Abierto", en: "4.8 · Naco · Open" } },
  },

  {
    id: "constructora",
    kind: "landing",
    cat: { es: "Constructora", en: "Construction" },
    brand: "Constructora Aybar",
    domain: "aybar.do",
    nav: [
      { es: "Obras", en: "Projects" },
      { es: "Ingeniería", en: "Engineering" },
      { es: "Visita", en: "Site visit" },
    ],
    hero: {
      img: `${BUILD}/hero.jpg`,
      kicker: { es: "Santo Domingo · RD", en: "Santo Domingo · DR" },
      title: { es: "12.400 m² en obra.", en: "12,400 m² under way." },
      sub: {
        es: "Torres, plazas y villas. El metraje y el presupuesto entran antes de la visita.",
        en: "Towers, plazas, villas. Square meters and budget arrive before the site visit.",
      },
      cta: { es: "Agendar visita", en: "Book a visit" },
    },
    toast: {
      label: { es: "Nuevo proyecto", en: "New project" },
      text: { es: "Torre 18 niveles · Naco", en: "18-floor tower · Naco" },
    },
    stats: [
      { n: "34", l: { es: "obras", en: "projects" } },
      { n: "18", l: { es: "niveles", en: "floors" } },
      { n: "12.400", l: { es: "m² activos", en: "active m²" } },
    ],
    cards: [
      {
        img: `${BUILD}/torre.jpg`,
        tag: { es: "Vertical", en: "Vertical" },
        title: { es: "Torre Piantini", en: "Torre Piantini" },
        meta: "18 niveles",
      },
      {
        img: `${BUILD}/plaza.jpg`,
        tag: { es: "Comercial", en: "Commercial" },
        title: { es: "Plaza Naco", en: "Plaza Naco" },
        meta: "6.200 m²",
      },
      {
        img: `${BUILD}/villas.jpg`,
        tag: { es: "Residencial", en: "Residential" },
        title: { es: "Villas Arroyo", en: "Villas Arroyo" },
        meta: "12 unidades",
      },
    ],
    strip: [
      { img: `${BUILD}/engineer-m.jpg`, name: "Ing. Aybar", role: { es: "Dirección", en: "Principal" } },
      { img: `${BUILD}/engineer-w.jpg`, name: "Ing. Batista", role: { es: "Estructural", en: "Structural" } },
      { img: `${BUILD}/site.jpg`, name: "Obra", role: { es: "Supervisión", en: "Supervision" } },
    ],
    info: {
      title: { es: "Oficina", en: "Office" },
      lines: ["Lun–Vie 8:00–17:00", "Av. Winston Churchill", "Visitas coordinadas"],
    },
    map: { name: "Constructora Aybar", meta: { es: "4.9 · Santo Domingo", en: "4.9 · Santo Domingo" } },
  },

  {
    id: "otro",
    kind: "landing",
    cat: { es: "Otro", en: "Other" },
    brand: "Tu empresa aquí",
    domain: "tuempresa.do",
    nav: [
      { es: "Estudio", en: "Studio" },
      { es: "Oferta", en: "Offer" },
      { es: "Hablar", en: "Talk" },
    ],
    hero: {
      img: "",
      kicker: { es: "Tu ciudad · RD", en: "Your city · DR" },
      title: { es: "Tu servicio aquí.", en: "Your service here." },
      sub: {
        es: "Una página que ya se ve como el negocio. El cliente llega, entiende, y escribe por WhatsApp.",
        en: "A page that already looks like the business. They arrive, understand, and write on WhatsApp.",
      },
      cta: { es: "Escribir ahora", en: "Message now" },
    },
    toast: {
      label: { es: "Nuevo lead", en: "New lead" },
      text: { es: "Tu servicio 01 · hoy 16:30", en: "Your service 01 · today 4:30" },
    },
    stats: [
      { n: "15m", l: { es: "brief", en: "brief" } },
      { n: "3 sem", l: { es: "al aire", en: "to live" } },
      { n: "Maps", l: { es: "y chat", en: "and chat" } },
    ],
    cards: [
      {
        img: "",
        tag: { es: "01", en: "01" },
        title: { es: "Tu servicio 01", en: "Your service 01" },
        meta: "RD$ —",
      },
      {
        img: "",
        tag: { es: "02", en: "02" },
        title: { es: "Tu servicio 02", en: "Your service 02" },
        meta: "RD$ —",
      },
      {
        img: "",
        tag: { es: "03", en: "03" },
        title: { es: "Tu servicio 03", en: "Your service 03" },
        meta: "RD$ —",
      },
    ],
    strip: [
      { img: "", name: "Paso 1", role: { es: "Te encuentran", en: "They find you" } },
      { img: "", name: "Paso 2", role: { es: "Entienden", en: "They get it" } },
      { img: "", name: "Paso 3", role: { es: "Te escriben", en: "They write" } },
    ],
    info: {
      title: { es: "Horario", en: "Hours" },
      lines: ["Lun–Vie 9:00–18:00", "Tu dirección aquí", "WhatsApp directo"],
    },
    map: { name: "Tu empresa aquí", meta: { es: "Tu zona · Abierto", en: "Your area · Open" } },
  },

  {
    id: "moda",
    kind: "shop",
    cat: { es: "Moda / Ropa", en: "Fashion / Apparel" },
    brand: "Bávaro Swim",
    domain: "bavaroswim.do",
    logo: "BÁVARO",
    pills: [
      { es: "Todo", en: "All" },
      { es: "Enterizos", en: "One-piece" },
      { es: "Bikinis", en: "Bikinis" },
      { es: "Lino", en: "Linen" },
    ],
    drop: {
      img: `${SWIM}/enterizo-arena.jpg`,
      name: "Enterizo Arena",
      price: "RD$ 5,800",
      stock: 12,
      tag: { es: "NUEVO", en: "NEW" },
    },
    picks: [
      { img: `${SWIM}/bikini-sal.jpg`, name: "Bikini Sal", price: "RD$ 5,200", stock: 8 },
      { img: `${SWIM}/camisa-lino.jpg`, name: "Camisa Lino", price: "RD$ 6,500", stock: 3, low: true },
    ],
    geo: "BlueMall · Santo Domingo",
    pdp: {
      img: `${SWIM}/vestido-cala.jpg`,
      tag: { es: "Atardecer", en: "Sunset" },
      name: "Vestido Cala",
      price: "RD$ 8,900",
      body: {
        es: "Caída de lino. Se pide con talla. El chat cierra con el nombre de la pieza.",
        en: "Linen drape. Ordered with a size. The chat closes with the piece name.",
      },
      specs: ["Lino", "XS–L", "Cap Cana"],
      stock: 7,
    },
    bag: {
      rows: [
        {
          img: `${SWIM}/enterizo-arena.jpg`,
          name: "Enterizo Arena",
          variant: { es: "M · Arena", en: "M · Sand" },
          price: "RD$ 5,800",
          stock: 12,
        },
        {
          img: `${SWIM}/pareo.jpg`,
          name: "Pareo Arena",
          variant: { es: "Talla única", en: "One size" },
          price: "RD$ 3,700",
          stock: 9,
        },
      ],
      subtotal: "RD$ 9,500",
    },
  },

  {
    id: "gastronomia",
    kind: "shop",
    cat: { es: "Gastronomía", en: "Gastronomy" },
    brand: "Despensa Brisa",
    domain: "despensabrisa.do",
    logo: "BRISA",
    pills: [
      { es: "Despensa", en: "Pantry" },
      { es: "Picante", en: "Heat" },
      { es: "Mesa", en: "Table" },
      { es: "Origen", en: "Origin" },
    ],
    drop: {
      img: `${COFFEE}/farm.jpg`,
      name: "Ají bravo en conserva",
      price: "RD$ 780",
      stock: 18,
      tag: { es: "TEMPORADA", en: "SEASON" },
    },
    picks: [
      { img: `${COFFEE}/beans.jpg`, name: "Cacao El Limón 250g", price: "RD$ 1,140", stock: 11 },
      { img: `${COFFEE}/cup.jpg`, name: "Miel de abeja 320g", price: "RD$ 640", stock: 4, low: true },
    ],
    geo: "Mercado de Samaná",
    pdp: {
      img: `${VILLAS}/dining.jpg`,
      tag: { es: "Mesa", en: "Table" },
      name: "Aceite de coco virgen",
      price: "RD$ 890",
      body: {
        es: "Prensado en frío. Se pide por jarra. El chat cierra con el lote y el destino.",
        en: "Cold-pressed. Ordered by jar. The chat closes with the lot and the destination.",
      },
      specs: ["500 ml", "Cibao", "Vidrio"],
      stock: 9,
    },
    bag: {
      rows: [
        {
          img: `${COFFEE}/beans.jpg`,
          name: "Cacao El Limón",
          variant: { es: "250 g · grano", en: "250 g · nibs" },
          price: "RD$ 1,140",
          stock: 11,
        },
        {
          img: `${VILLAS}/chef.jpg`,
          name: "Sal marina Brisa",
          variant: { es: "200 g · escamas", en: "200 g · flakes" },
          price: "RD$ 420",
          stock: 26,
        },
      ],
      subtotal: "RD$ 1,560",
    },
  },

  {
    id: "beauty",
    kind: "shop",
    cat: { es: "Belleza / Cosmética", en: "Beauty / Cosmetics" },
    brand: "Aura Atelier",
    domain: "auraatelier.do",
    logo: "AURA",
    pills: [
      { es: "Labios", en: "Lips" },
      { es: "Ojos", en: "Eyes" },
      { es: "Rostro", en: "Face" },
      { es: "Sets", en: "Sets" },
    ],
    drop: {
      img: `${AURA}/lip-cereza.png`,
      name: "Labial Cereza",
      price: "RD$ 1,890",
      stock: 14,
      tag: { es: "NUEVO", en: "NEW" },
    },
    picks: [
      { img: `${AURA}/paleta-atardecer.png`, name: "Paleta Atardecer", price: "RD$ 3,240", stock: 6 },
      { img: `${AURA}/gloss-nube.png`, name: "Gloss Nube", price: "RD$ 1,120", stock: 3, low: true },
    ],
    geo: "Ágora Mall · Santo Domingo",
    pdp: {
      img: `${AURA}/lip-pdp.png`,
      tag: { es: "Labios", en: "Lips" },
      name: "Labial Cereza",
      price: "RD$ 1,890",
      body: {
        es: "Mate satinado. Eliges el tono en la ficha. WhatsApp llega con el nombre del labial, no un “info?”.",
        en: "Satin matte. You pick the shade on the page. WhatsApp lands with the lipstick name, not “info?”.",
      },
      specs: ["3.4 g", "Mate", "Vegano"],
      stock: 14,
    },
    bag: {
      rows: [
        {
          img: `${AURA}/lip-cereza.png`,
          name: "Labial Cereza",
          variant: { es: "Tono 04 · Cereza", en: "Shade 04 · Cherry" },
          price: "RD$ 1,890",
          stock: 14,
        },
        {
          img: `${AURA}/paleta-atardecer.png`,
          name: "Paleta Atardecer",
          variant: { es: "6 tonos", en: "6 shades" },
          price: "RD$ 3,240",
          stock: 6,
        },
      ],
      subtotal: "RD$ 5,130",
    },
  },

  {
    id: "tech",
    kind: "shop",
    cat: { es: "Tech", en: "Tech" },
    brand: "Nodo",
    domain: "nodo.do",
    logo: "NODO",
    pills: [
      { es: "GPU", en: "GPU" },
      { es: "CPU", en: "CPU" },
      { es: "RAM", en: "RAM" },
      { es: "Prebuilds", en: "Prebuilds" },
    ],
    drop: {
      img: `${NODO}/gpu-hero.png`,
      name: "RTX 4070 Super",
      price: "RD$ 42,900",
      stock: 4,
      tag: { es: "EN STOCK", en: "IN STOCK" },
    },
    picks: [
      { img: `${NODO}/cpu-box.png`, name: "Ryzen 7 7800X3D", price: "RD$ 18,500", stock: 9 },
      { img: `${NODO}/ram-kit.png`, name: "DDR5 32GB Kit", price: "RD$ 6,800", stock: 2, low: true },
    ],
    geo: "Piantini · Santo Domingo",
    pdp: {
      img: `${NODO}/prebuild-tower.png`,
      tag: { es: "Prebuild", en: "Prebuild" },
      name: "Forge RTX · Prebuild",
      price: "RD$ 89,900",
      body: {
        es: "4070 Super + 7800X3D + 32GB DDR5. El SKU ya va en el chat. No un “info?” genérico.",
        en: "4070 Super + 7800X3D + 32GB DDR5. The SKU is already in the chat. Not a generic “info?”.",
      },
      specs: ["RTX 4070S", "7800X3D", "32GB DDR5"],
      stock: 3,
    },
    bag: {
      rows: [
        {
          img: `${NODO}/gpu-hero.png`,
          name: "RTX 4070 Super",
          variant: { es: "ASUS · 12GB", en: "ASUS · 12GB" },
          price: "RD$ 42,900",
          stock: 4,
        },
        {
          img: `${NODO}/ram-kit.png`,
          name: "DDR5 32GB Kit",
          variant: { es: "6000 MHz · CL30", en: "6000 MHz · CL30" },
          price: "RD$ 6,800",
          stock: 2,
        },
      ],
      subtotal: "RD$ 49,700",
    },
  },

  {
    id: "electronics",
    kind: "shop",
    cat: { es: "Electrónica", en: "Consumer Electronics" },
    brand: "Volt",
    domain: "volt.do",
    logo: "VOLT",
    pills: [
      { es: "Audio", en: "Audio" },
      { es: "Wear", en: "Wear" },
      { es: "Casa", en: "Home" },
      { es: "Todo", en: "All" },
    ],
    drop: {
      img: `${SWIM}/enterizo-detail.jpg`,
      name: "Volt Air 2",
      price: "RD$ 12,900",
      stock: 5,
      tag: { es: "SHOWROOM", en: "SHOWROOM" },
    },
    picks: [
      { img: `${COFFEE}/roaster.jpg`, name: "Volt Stage Mini", price: "RD$ 7,200", stock: 8 },
      { img: `${SWIM}/tienda.jpg`, name: "Volt Band", price: "RD$ 4,100", stock: 3, low: true },
    ],
    geo: "Ágora Mall · Santo Domingo",
    pdp: {
      img: `${SWIM}/enterizo-detail.jpg`,
      tag: { es: "Audio", en: "Audio" },
      name: "Volt Air 2",
      price: "RD$ 12,900",
      body: {
        es: "ANC. 40 h. Se pide con el color. El chat cierra con el modelo en vitrina.",
        en: "ANC. 40 h. Ordered with a color. The chat closes with the floor model.",
      },
      specs: ["ANC", "40h", "USB-C"],
      stock: 5,
    },
    bag: {
      rows: [
        {
          img: `${SWIM}/enterizo-detail.jpg`,
          name: "Volt Air 2",
          variant: { es: "Negro hielo", en: "Ice black" },
          price: "RD$ 12,900",
          stock: 5,
        },
        {
          img: `${COFFEE}/roaster.jpg`,
          name: "Volt Stage Mini",
          variant: { es: "Plata", en: "Silver" },
          price: "RD$ 7,200",
          stock: 8,
        },
      ],
      subtotal: "RD$ 20,100",
    },
  },

  {
    id: "home",
    kind: "shop",
    cat: { es: "Hogar y living", en: "Home & Living" },
    brand: "Casa Lino",
    domain: "casalino.do",
    logo: "LINO",
    pills: [
      { es: "Sala", en: "Living" },
      { es: "Mesa", en: "Dining" },
      { es: "Textil", en: "Textile" },
      { es: "Luz", en: "Light" },
    ],
    drop: {
      img: `${VILLAS}/living.jpg`,
      name: "Sofá Arena",
      price: "RD$ 48,000",
      stock: 2,
      tag: { es: "PIEZA", en: "PIECE" },
    },
    picks: [
      { img: `${VILLAS}/kitchen.jpg`, name: "Mesa Noguera", price: "RD$ 32,500", stock: 3 },
      { img: `${VILLAS}/bedroom.jpg`, name: "Ropa de cama Lino", price: "RD$ 6,800", stock: 6, low: true },
    ],
    geo: "Showroom Piantini",
    pdp: {
      img: `${VILLAS}/dining.jpg`,
      tag: { es: "Iluminación", en: "Lighting" },
      name: "Lámpara Nogal",
      price: "RD$ 9,400",
      body: {
        es: "Nogal y lino. Se pide con medida. El chat cierra con la pieza y el acabado.",
        en: "Walnut and linen. Ordered with a size. The chat closes with the piece and finish.",
      },
      specs: ["Nogal", "E27", "1.2 m"],
      stock: 4,
    },
    bag: {
      rows: [
        {
          img: `${VILLAS}/bedroom.jpg`,
          name: "Ropa de cama Lino",
          variant: { es: "Queen · arena", en: "Queen · sand" },
          price: "RD$ 6,800",
          stock: 6,
        },
        {
          img: `${VILLAS}/pool.jpg`,
          name: "Jarrón Piedra",
          variant: { es: "Alto 42 cm", en: "42 cm tall" },
          price: "RD$ 3,200",
          stock: 9,
        },
      ],
      subtotal: "RD$ 10,000",
    },
  },

  {
    id: "other",
    kind: "shop",
    cat: { es: "Otro", en: "Other" },
    brand: "Tu tienda",
    domain: "tutienda.do",
    logo: "STORE",
    pills: [
      { es: "Catálogo", en: "Catalog" },
      { es: "Nuevos", en: "New" },
      { es: "Archivo", en: "Archive" },
      { es: "Todo", en: "All" },
    ],
    drop: {
      img: `${SWIM}/tienda.jpg`,
      name: "Producto destacado",
      price: "RD$ 0",
      stock: 12,
      tag: { es: "TU MARCA", en: "YOUR BRAND" },
    },
    picks: [
      { img: `${SWIM}/enterizo-arena.jpg`, name: "Producto 01", price: "SKU · 01", stock: 12 },
      { img: `${SWIM}/camisa-lino.jpg`, name: "Producto 02", price: "SKU · 02", stock: 8 },
    ],
    geo: "Tu ciudad · RD",
    pdp: {
      img: `${SWIM}/bikini-sal.jpg`,
      tag: { es: "Placeholder", en: "Placeholder" },
      name: "Producto 03",
      price: "SKU · 03",
      body: {
        es: "Tu catálogo. Tu marca. El visitante pide por WhatsApp con el SKU ya escrito — lo que vendas, aquí.",
        en: "Your catalog. Your brand. The visitor orders on WhatsApp with the SKU already written — whatever you sell, here.",
      },
      specs: ["SKU", "Stock", "Checkout"],
      stock: 20,
    },
    bag: {
      rows: [
        {
          img: `${SWIM}/enterizo-arena.jpg`,
          name: "Producto 01",
          variant: { es: "Variante A", en: "Variant A" },
          price: "SKU · 01",
          stock: 12,
        },
        {
          img: `${SWIM}/camisa-lino.jpg`,
          name: "Producto 02",
          variant: { es: "Variante B", en: "Variant B" },
          price: "SKU · 02",
          stock: 8,
        },
      ],
      subtotal: "—",
    },
  },
];

export type PlanId = "landing" | "site" | "shop";

export function templatesFor(kind: "landing" | "shop" | PlanId) {
  const visual = kind === "shop" ? "shop" : "landing";
  return TEMPLATES.filter((t) => t.kind === visual);
}

export function findTemplate(id: string) {
  return TEMPLATES.find((t) => t.id === id);
}
