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
const LINA = "/demo/lina";
const LINA_P = `${LINA}/preview`;
const COFFEE = "/demo/terrenas-coffee";
const BRISA = "/demo/brisa";
const BRISA_P = `${BRISA}/preview`;
const AURA = "/demo/aura-atelier";
const NODO = "/demo/nodo";
const HOME_P = `${VILLAS}/preview`;

export const TEMPLATES: Template[] = [
  {
    id: "clinica",
    kind: "landing",
    cat: { es: "Clínica", en: "Clinic" },
    brand: "SDQ Dental Care",
    domain: "sdqdental.do",
    nav: [
      { es: "Inicio", en: "Home" },
      { es: "Tratamientos", en: "Treatments" },
      { es: "Equipo", en: "Team" },
      { es: "La clínica", en: "Clinic" },
      { es: "Casos", en: "Cases" },
      { es: "Citas", en: "Book" },
    ],
    hero: {
      img: `${DENTAL}/hero-operatory.jpg`,
      kicker: { es: "Clínica odontológica · Ensanche Naco", en: "Dental clinic · Ensanche Naco" },
      title: { es: "Tu mejor sonrisa, hoy.", en: "Your best smile, today." },
      sub: {
        es: "Odontología en Ensanche Naco. Elige limpieza, carillas o implante — pide cupo por WhatsApp y te confirmamos en el día.",
        en: "Dentistry in Ensanche Naco. Pick cleaning, veneers, or an implant — request a slot on WhatsApp and we confirm the same day.",
      },
      cta: { es: "Agendar evaluación", en: "Book consult" },
    },
    toast: {
      label: { es: "Paciente", en: "Patient" },
      text: {
        es: "Hola, vi limpieza + carillas en la web. ¿Tienen cupo esta semana?",
        en: "Hi — saw cleaning + veneers on the site. Slot this week?",
      },
    },
    stats: [
      { n: "4.9 ★", l: { es: "350+ reseñas en Google", en: "350+ Google reviews" } },
      { n: "Naco", l: { es: "18 min desde Piantini", en: "18 min from Piantini" } },
      { n: "24 h", l: { es: "Confirmación por WhatsApp", en: "WhatsApp confirmation" } },
    ],
    cards: [
      {
        img: `${DENTAL}/instruments.jpg`,
        tag: { es: "Preventivo", en: "Preventive" },
        title: { es: "Limpieza ultrasónica", en: "Ultrasonic cleaning" },
        meta: "RD$ 2,500",
      },
      {
        img: `${DENTAL}/imaging.jpg`,
        tag: { es: "Clínica", en: "Clinic" },
        title: { es: "Endodoncia", en: "Root canal" },
        meta: "RD$ 12,000",
      },
      {
        img: `${DENTAL}/smile.jpg`,
        tag: { es: "Estética", en: "Aesthetic" },
        title: { es: "Carillas de porcelana", en: "Porcelain veneers" },
        meta: "RD$ 18,000",
      },
      {
        img: `${DENTAL}/case-whitening-after.jpg`,
        tag: { es: "Estética", en: "Aesthetic" },
        title: { es: "Blanqueamiento LED", en: "LED whitening" },
        meta: "RD$ 7,500",
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
        es: "Cap Cana. Elige villa y noches en USD o DOP. Te confirmamos la reserva por WhatsApp.",
        en: "Cap Cana. Pick a villa and nights in USD or DOP. We confirm your hold on WhatsApp.",
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
        tag: { es: "Campo de golf", en: "Fairway" },
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
      { img: `${VILLAS}/living.jpg`, name: "Sala", role: { es: "Abierta al campo", en: "Open to the fairway" } },
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
        es: "Societario, laboral e inmobiliario en Naco. Agenda con el área y la fecha que necesitas.",
        en: "Corporate, labor, and real estate in Naco. Book with the practice area and date you need.",
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
        title: { es: "Revisión legal", en: "Due diligence" },
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
        es: "Torres, plazas y villas en Santo Domingo. Cuéntanos el metraje y la zona — coordinamos la visita a obra.",
        en: "Towers, plazas, and villas in Santo Domingo. Tell us square meters and zone — we coordinate the site visit.",
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
    brand: "Casa Norte",
    domain: "casanorte.do",
    nav: [
      { es: "Estudio", en: "Studio" },
      { es: "Servicios", en: "Services" },
      { es: "Contacto", en: "Contact" },
    ],
    hero: {
      img: `${VILLAS}/living.jpg`,
      kicker: { es: "Piantini · Santo Domingo", en: "Piantini · Santo Domingo" },
      title: { es: "Proyectos que se sienten en casa.", en: "Projects that feel like home." },
      sub: {
        es: "Diseño residencial en Piantini. Cuéntanos el proyecto — respondemos el mismo día.",
        en: "Residential design in Piantini. Share the brief — we reply the same day.",
      },
      cta: { es: "Agendar llamada", en: "Book a call" },
    },
    toast: {
      label: { es: "Nueva consulta", en: "New inquiry" },
      text: { es: "Proyecto residencial · hoy 16:30", en: "Residential project · today 4:30" },
    },
    stats: [
      { n: "48", l: { es: "proyectos", en: "projects" } },
      { n: "4.9", l: { es: "reseñas", en: "reviews" } },
      { n: "24h", l: { es: "respuesta", en: "reply" } },
    ],
    cards: [
      {
        img: `${BUILD}/office.jpg`,
        tag: { es: "Brief", en: "Brief" },
        title: { es: "Consulta inicial", en: "Discovery call" },
        meta: "RD$ 3,500",
      },
      {
        img: `${COFFEE}/terrace.jpg`,
        tag: { es: "Obra", en: "Site" },
        title: { es: "Visita al proyecto", en: "Project visit" },
        meta: "RD$ 1,800",
      },
      {
        img: `${LEGAL}/library.jpg`,
        tag: { es: "Plan", en: "Plan" },
        title: { es: "Propuesta completa", en: "Full proposal" },
        meta: "RD$ 12,000",
      },
    ],
    strip: [
      { img: `${BUILD}/plaza.jpg`, name: "Ana Cruz", role: { es: "Dirección", en: "Direction" } },
      { img: `${VILLAS}/pool.jpg`, name: "Luis Peña", role: { es: "Obra", en: "Build" } },
      { img: `${COFFEE}/barista.jpg`, name: "María Sol", role: { es: "Interiores", en: "Interiors" } },
    ],
    info: {
      title: { es: "Horario", en: "Hours" },
      lines: ["Lun–Vie 9:00–18:00", "Av. Abraham Lincoln", "Citas por WhatsApp"],
    },
    map: { name: "Casa Norte", meta: { es: "4.9 · Piantini · Abierto", en: "4.9 · Piantini · Open" } },
  },

  {
    id: "moda",
    kind: "shop",
    cat: { es: "Moda / Ropa", en: "Fashion / Apparel" },
    brand: "Lina",
    domain: "lina.do",
    logo: "LINA",
    pills: [
      { es: "Look", en: "Look" },
      { es: "Prendas", en: "Pieces" },
      { es: "Talla", en: "Size" },
      { es: "Bolsa", en: "Bag" },
    ],
    drop: {
      img: `${LINA_P}/blazer.webp`,
      name: "Blazer Sastre",
      price: "RD$ 8,900",
      stock: 6,
      tag: { es: "LOOK", en: "LOOK" },
    },
    picks: [
      { img: `${LINA_P}/pantalon.webp`, name: "Pantalón Pinza", price: "RD$ 5,400", stock: 8 },
      { img: `${LINA_P}/denim.webp`, name: "Denim Recto", price: "RD$ 4,200", stock: 3, low: true },
    ],
    geo: "Naco · BlueMall",
    pdp: {
      img: `${LINA_P}/vestido.webp`,
      tag: { es: "Día", en: "Day" },
      name: "Vestido Lino",
      price: "RD$ 7,400",
      body: {
        es: "Corte recto, lino lavado. Elige talla y pide recogida en Naco o BlueMall.",
        en: "Straight cut, washed linen. Pick a size and request Naco or BlueMall pickup.",
      },
      specs: ["XS", "S", "M", "L"],
      stock: 9,
    },
    bag: {
      rows: [
        {
          img: `${LINA_P}/blazer.webp`,
          name: "Blazer Sastre",
          variant: { es: "M · Arena", en: "M · Sand" },
          price: "RD$ 8,900",
          stock: 6,
        },
        {
          img: `${LINA_P}/zapato.webp`,
          name: "Zapato Naco",
          variant: { es: "38 · Cuero", en: "38 · Leather" },
          price: "RD$ 6,200",
          stock: 5,
        },
      ],
      subtotal: "RD$ 15,100",
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
      img: `${BRISA_P}/aji.webp`,
      name: "Ají bravo en conserva",
      price: "RD$ 780",
      stock: 18,
      tag: { es: "TEMPORADA", en: "SEASON" },
    },
    picks: [
      { img: `${BRISA_P}/cacao.webp`, name: "Cacao El Limón 250g", price: "RD$ 1,140", stock: 11 },
      { img: `${BRISA_P}/miel.webp`, name: "Miel de abeja 320g", price: "RD$ 640", stock: 4, low: true },
    ],
    geo: "Mercado de Samaná",
    pdp: {
      img: `${BRISA_P}/aceite.webp`,
      tag: { es: "Mesa", en: "Table" },
      name: "Aceite de coco virgen",
      price: "RD$ 890",
      body: {
        es: "Prensado en frío. Pide por jarra con envío a tu zona.",
        en: "Cold-pressed. Order by jar with delivery to your area.",
      },
      specs: ["500 ml", "Cibao", "Vidrio"],
      stock: 9,
    },
    bag: {
      rows: [
        {
          img: `${BRISA_P}/cacao.webp`,
          name: "Cacao El Limón",
          variant: { es: "250 g · grano", en: "250 g · nibs" },
          price: "RD$ 1,140",
          stock: 11,
        },
        {
          img: `${BRISA_P}/sal.webp`,
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
      img: `${AURA}/lip-cereza.webp`,
      name: "Labial Cereza",
      price: "RD$ 1,890",
      stock: 14,
      tag: { es: "NUEVO", en: "NEW" },
    },
    picks: [
      { img: `${AURA}/paleta-atardecer.webp`, name: "Paleta Atardecer", price: "RD$ 3,240", stock: 6 },
      { img: `${AURA}/gloss-nube.webp`, name: "Gloss Nube", price: "RD$ 1,120", stock: 3, low: true },
    ],
    geo: "Ágora Mall · Santo Domingo",
    pdp: {
      img: `${AURA}/lip-pdp.webp`,
      tag: { es: "Labios", en: "Lips" },
      name: "Labial Cereza",
      price: "RD$ 1,890",
      body: {
        es: "Mate satinado. Elige el tono en la ficha y pídelo por WhatsApp.",
        en: "Satin matte. Pick the shade on the page and order it on WhatsApp.",
      },
      specs: ["3.4 g", "Mate", "Vegano"],
      stock: 14,
    },
    bag: {
      rows: [
        {
          img: `${AURA}/lip-cereza.webp`,
          name: "Labial Cereza",
          variant: { es: "Tono 04 · Cereza", en: "Shade 04 · Cherry" },
          price: "RD$ 1,890",
          stock: 14,
        },
        {
          img: `${AURA}/paleta-atardecer.webp`,
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
      { es: "PCs armados", en: "Prebuilds" },
    ],
    drop: {
      img: `${NODO}/gpu-hero.webp`,
      name: "RTX 4070 Super",
      price: "RD$ 42,900",
      stock: 4,
      tag: { es: "EN STOCK", en: "IN STOCK" },
    },
    picks: [
      { img: `${NODO}/cpu-box.webp`, name: "Ryzen 7 7800X3D", price: "RD$ 18,500", stock: 9 },
      { img: `${NODO}/ram-kit.webp`, name: "DDR5 32GB Kit", price: "RD$ 6,800", stock: 2, low: true },
    ],
    geo: "Piantini · Santo Domingo",
    pdp: {
      img: `${NODO}/prebuild-tower.webp`,
      tag: { es: "Prebuild", en: "Prebuild" },
      name: "Forge RTX · Prebuild",
      price: "RD$ 89,900",
      body: {
        es: "4070 Super + 7800X3D + 32GB DDR5. Disponible en Piantini — consulta stock por WhatsApp.",
        en: "4070 Super + 7800X3D + 32GB DDR5. Available in Piantini — check stock on WhatsApp.",
      },
      specs: ["RTX 4070S", "7800X3D", "32GB DDR5"],
      stock: 3,
    },
    bag: {
      rows: [
        {
          img: `${NODO}/gpu-hero.webp`,
          name: "RTX 4070 Super",
          variant: { es: "ASUS · 12GB", en: "ASUS · 12GB" },
          price: "RD$ 42,900",
          stock: 4,
        },
        {
          img: `${NODO}/ram-kit.webp`,
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
    id: "home",
    kind: "shop",
    cat: { es: "Hogar y muebles", en: "Home & Furniture" },
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
      img: `${HOME_P}/living.webp`,
      name: "Sofá Arena",
      price: "RD$ 48,000",
      stock: 2,
      tag: { es: "PIEZA", en: "PIECE" },
    },
    picks: [
      { img: `${HOME_P}/kitchen.webp`, name: "Mesa Noguera", price: "RD$ 32,500", stock: 3 },
      { img: `${HOME_P}/bedroom.webp`, name: "Ropa de cama Lino", price: "RD$ 6,800", stock: 6, low: true },
    ],
    geo: "Showroom Piantini",
    pdp: {
      img: `${HOME_P}/dining.webp`,
      tag: { es: "Iluminación", en: "Lighting" },
      name: "Lámpara Nogal",
      price: "RD$ 9,400",
      body: {
        es: "Nogal y lino. Elige medida y acabado; coordinamos entrega desde el showroom.",
        en: "Walnut and linen. Pick size and finish; we coordinate delivery from the showroom.",
      },
      specs: ["Nogal", "E27", "1.2 m"],
      stock: 4,
    },
    bag: {
      rows: [
        {
          img: `${HOME_P}/bedroom.webp`,
          name: "Ropa de cama Lino",
          variant: { es: "Queen · arena", en: "Queen · sand" },
          price: "RD$ 6,800",
          stock: 6,
        },
        {
          img: `${HOME_P}/pool.webp`,
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
      img: "",
      name: "—",
      price: "RD$ —",
      stock: 0,
      tag: { es: "PORTADA", en: "COVER" },
    },
    picks: [
      { img: "", name: "—", price: "SKU · 01", stock: 0 },
      { img: "", name: "—", price: "SKU · 02", stock: 0 },
    ],
    geo: "Tu ciudad · RD",
    pdp: {
      img: "",
      tag: { es: "Ficha", en: "Sheet" },
      name: "—",
      price: "SKU · 03",
      body: {
        es: "Tu producto aquí: nombre, precio y stock. Listo para pedir por WhatsApp.",
        en: "Your product here: name, price, and stock. Ready to order on WhatsApp.",
      },
      specs: ["SKU", "Stock", "Checkout"],
      stock: 0,
    },
    bag: {
      rows: [
        {
          img: "",
          name: "—",
          variant: { es: "Variante A", en: "Variant A" },
          price: "SKU · 01",
          stock: 0,
        },
        {
          img: "",
          name: "—",
          variant: { es: "Variante B", en: "Variant B" },
          price: "SKU · 02",
          stock: 0,
        },
      ],
      subtotal: "—",
    },
  },
];

export type PlanId = "landing" | "site" | "shop";

export function templatesFor(kind: "landing" | "shop" | PlanId) {
  const visual = kind === "shop" ? "shop" : "landing";
  const list = TEMPLATES.filter((t) => t.kind === visual);
  if (visual !== "landing") return list;
  const preferred = list.find((t) => t.id === "constructora");
  if (!preferred) return list;
  return [preferred, ...list.filter((t) => t.id !== "constructora")];
}

export function findTemplate(id: string) {
  return TEMPLATES.find((t) => t.id === id);
}
