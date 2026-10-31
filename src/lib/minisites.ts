/**
 * Art-directed demo mini sites shown inside the /pricing-builder preview.
 * Every brand, person and price here is fictional (demo concept). There are
 * no customer reviews: the "testimonios" section renders an explicit
 * placeholder for the client's real reviews.
 * Photos: /public/ms/* (see public/ms/CREDITS.md).
 */

export type MsItem = {
  img?: string;
  name: string;
  desc?: string;
  price?: string;
  was?: string;
  tag?: string;
  meta?: string;
  low?: boolean;
};

export type MsPerson = { img: string; name: string; role: string };

export type MsMark =
  | "tooth"
  | "sun"
  | "column"
  | "beam"
  | "leaf"
  | "wave"
  | "drop"
  | "cone"
  | "chip"
  | "chair"
  | "jar";

export type MiniSite = {
  id: string;
  kind: "landing" | "shop";
  brand: string;
  tagline: string;
  domain: string;
  mark: MsMark;
  fonts: { head: string; body: string; headCase?: "upper" | "none"; headWeight?: number; headItalicEm?: boolean };
  colors: { bg: string; ink: string; accent: string; soft: string; dark?: boolean };
  heroStyle: "split" | "full" | "overlay" | "editorial" | "poster";
  promo?: string;
  nav: string[];
  phone: string;
  hero: {
    img: string;
    img2?: string;
    kicker: string;
    title: string;
    em?: string;
    sub: string;
    cta: string;
    cta2?: string;
    badges: string[];
  };
  booking?: { title: string; fields: { label: string; value: string }[]; slots?: string[]; cta: string; note?: string };
  stats?: { n: string; l: string }[];
  services: { kicker: string; title: string; sub?: string; items: MsItem[] };
  process?: { kicker: string; title: string; steps: { n: string; t: string; d: string }[] };
  about: { kicker: string; title: string; body: string; img: string; img2?: string; points: string[]; people?: MsPerson[] };
  gallery: { kicker: string; title: string; imgs: { src: string; cap?: string }[] };
  faq: { q: string; a: string }[];
  location: { address: string; area: string; hours: [string, string][]; note: string };
  cta: { title: string; sub: string; button: string };
  footer: { blurb: string; cols: { t: string; l: string[] }[] };
  shop?: {
    cats: string[];
    products: MsItem[];
    pdp: {
      imgs: string[];
      name: string;
      price: string;
      tag: string;
      desc: string;
      option: { label: string; values: string[]; on: number };
      option2?: { label: string; values: string[]; on: number };
      details: string[];
    };
    bag: { name: string; variant: string; price: string; img: string; qty: number }[];
    subtotal: string;
    shipping: string;
    total: string;
    collections: { name: string; img: string; count: string }[];
    ship: { zone: string; time: string; price: string }[];
    perks: string[];
  };
};

const C = "/ms/clinica";
const V = "/ms/villas";
const LG = "/ms/legal";
const O = "/ms/obra";
const N = "/ms/norte";
const LI = "/ms/lina";
const NI = "/ms/nieve";
const A = "/ms/aura";
const ND = "/ms/nodo";
const LN = "/ms/lino";
const B = "/ms/brisa";

const HOURS_WEEK: [string, string][] = [
  ["Lunes a viernes", "8:00 – 18:00"],
  ["Sábado", "9:00 – 14:00"],
  ["Domingo", "Cerrado"],
];

export const MINI_SITES: Record<string, MiniSite> = {
  /* ───────────────────────── LANDING ───────────────────────── */
  clinica: {
    id: "clinica",
    kind: "landing",
    brand: "Marea Dental",
    tagline: "Odontología · Naco",
    domain: "mareadental.do",
    mark: "tooth",
    fonts: { head: "'Newsreader', Georgia, serif", body: "'DM Sans', system-ui, sans-serif", headItalicEm: true },
    colors: { bg: "#F3F7F6", ink: "#0E2A2A", accent: "#0F7C74", soft: "#DCEDE9" },
    heroStyle: "split",
    nav: ["Tratamientos", "Equipo", "La clínica", "Precios", "Contacto"],
    phone: "(809) 555-0142",
    hero: {
      img: `${C}/hero-operatory.webp`,
      img2: `${C}/smile.webp`,
      kicker: "Clínica dental en Ensanche Naco",
      title: "Sonríe sin",
      em: "pensarlo dos veces.",
      sub: "Limpiezas, ortodoncia invisible, implantes y estética dental con agenda puntual y precios claros desde la primera cita.",
      cta: "Agendar evaluación",
      cta2: "Ver tratamientos",
      badges: ["Evaluación RD$ 1,200", "Parqueo propio", "Aceptamos ARS"],
    },
    booking: {
      title: "Reserva tu cita",
      fields: [
        { label: "Tratamiento", value: "Limpieza + evaluación" },
        { label: "Día", value: "Jueves 22" },
      ],
      slots: ["9:00", "10:30", "15:00", "16:30"],
      cta: "Confirmar por WhatsApp",
      note: "Te confirmamos en menos de 1 hora",
    },
    stats: [
      { n: "6", l: "sillones equipados" },
      { n: "Lun–Sáb", l: "horario extendido" },
      { n: "1 h", l: "confirmación" },
    ],
    services: {
      kicker: "Tratamientos",
      title: "Lo que hacemos, con precio a la vista",
      sub: "Precios de referencia. Tu plan final se confirma en la evaluación.",
      items: [
        { img: `${C}/instruments.webp`, tag: "Preventivo", name: "Limpieza profunda", desc: "Ultrasonido, pulido y flúor. 45 min.", price: "RD$ 2,500" },
        { img: `${C}/smile.webp`, tag: "Estética", name: "Blanqueamiento LED", desc: "Una sesión en clínica + kit para casa.", price: "RD$ 7,500" },
        { img: `${C}/imaging.webp`, tag: "Diagnóstico", name: "Radiografía 3D", desc: "Tomografía para implantes y cordales.", price: "RD$ 3,800" },
        { img: `${C}/consult.webp`, tag: "Ortodoncia", name: "Alineadores invisibles", desc: "Plan digital y seguimiento mensual.", price: "desde RD$ 85,000" },
        { img: `${C}/hygienist.webp`, tag: "Rehabilitación", name: "Implante unitario", desc: "Implante, pilar y corona de zirconio.", price: "desde RD$ 65,000" },
        { img: `${C}/kids-nook.webp`, tag: "Familia", name: "Odontopediatría", desc: "Primeras visitas sin miedo, con juegos.", price: "RD$ 1,800" },
      ],
    },
    process: {
      kicker: "Tu primera visita",
      title: "Tres pasos, cero sorpresas",
      steps: [
        { n: "01", t: "Escríbenos", d: "Eliges día y hora por WhatsApp." },
        { n: "02", t: "Evaluación", d: "Fotos, radiografía y plan por escrito." },
        { n: "03", t: "Tratamiento", d: "Empiezas con precio cerrado." },
      ],
    },
    about: {
      kicker: "Equipo",
      title: "Especialistas que te explican todo antes de empezar",
      body: "Tres consultorios, un laboratorio digital y un equipo que trabaja con horario puntual. Si hay espera, te avisamos por WhatsApp.",
      img: `${C}/reception.webp`,
      points: ["Esterilización certificada", "Escáner intraoral", "Financiamiento hasta 12 meses"],
      people: [
        { img: `${C}/doctor-reyes.webp`, name: "Dra. Paola Ferreiras", role: "Estética dental" },
        { img: `${C}/doctor-valdez.webp`, name: "Dr. Iván Tejeda", role: "Implantes" },
        { img: `${C}/doctor-mendoza.webp`, name: "Dra. Lía Santana", role: "Ortodoncia" },
      ],
    },
    gallery: {
      kicker: "La clínica",
      title: "Luz natural, sillones nuevos, cero olor a clínica",
      imgs: [
        { src: `${C}/exterior.webp`, cap: "Fachada" },
        { src: `${C}/reception.webp`, cap: "Recepción" },
        { src: `${C}/hero-operatory.webp`, cap: "Consultorio 2" },
        { src: `${C}/kids-nook.webp`, cap: "Rincón infantil" },
        { src: `${C}/imaging.webp`, cap: "Imagen 3D" },
      ],
    },
    faq: [
      { q: "¿Aceptan seguro?", a: "Trabajamos con las principales ARS. Te decimos tu cobertura antes de empezar." },
      { q: "¿Cuánto dura la evaluación?", a: "Unos 40 minutos, con fotos y plan por escrito." },
      { q: "¿Puedo pagar en cuotas?", a: "Sí, con tarjeta hasta 12 meses en tratamientos largos." },
    ],
    location: {
      address: "Local 14 · Ensanche Naco",
      area: "Santo Domingo",
      hours: HOURS_WEEK,
      note: "Parqueo propio · A 5 min de la Av. Tiradentes",
    },
    cta: { title: "¿Te duele algo hoy?", sub: "Escríbenos y te buscamos espacio el mismo día si es urgencia.", button: "Escribir por WhatsApp" },
    footer: {
      blurb: "Clínica dental ficticia creada como demo por Nativa.",
      cols: [
        { t: "Clínica", l: ["Tratamientos", "Equipo", "Precios"] },
        { t: "Pacientes", l: ["Primera visita", "Seguros", "Financiamiento"] },
      ],
    },
  },

  inmobiliaria: {
    id: "inmobiliaria",
    kind: "landing",
    brand: "Cayena Villas",
    tagline: "Cap Cana · Punta Cana",
    domain: "cayenavillas.do",
    mark: "sun",
    fonts: { head: "'Cormorant Garamond', Georgia, serif", body: "'Manrope', system-ui, sans-serif", headWeight: 500, headItalicEm: true },
    colors: { bg: "#FBF7F1", ink: "#211A13", accent: "#B4643A", soft: "#F1E5D6" },
    heroStyle: "full",
    nav: ["Villas", "Experiencias", "Cap Cana", "Reservar"],
    phone: "(809) 555-0177",
    hero: {
      img: `${V}/hero.webp`,
      kicker: "Seis villas privadas frente al Caribe",
      title: "Despierta con el mar",
      em: "a tus pies.",
      sub: "Villas con chef, piscina infinita y concierge local. Eliges fechas, te confirmamos disponibilidad real por WhatsApp.",
      cta: "Ver disponibilidad",
      badges: ["Chef privado", "Traslado aeropuerto", "Check-in 15:00"],
    },
    booking: {
      title: "¿Cuándo vienes?",
      fields: [
        { label: "Llegada", value: "12 dic" },
        { label: "Salida", value: "18 dic" },
        { label: "Huéspedes", value: "8 adultos" },
      ],
      cta: "Buscar villas",
    },
    stats: [
      { n: "6", l: "villas privadas" },
      { n: "3–7", l: "habitaciones" },
      { n: "24/7", l: "concierge" },
    ],
    services: {
      kicker: "Las villas",
      title: "Elige tu casa en Cap Cana",
      items: [
        { img: `${V}/luna.webp`, tag: "Frente al mar", name: "Villa Luna", desc: "5 hab · 6 baños · piscina infinita", price: "US$ 1,450", meta: "/ noche" },
        { img: `${V}/palmera.webp`, tag: "Campo de golf", name: "Villa Palmera", desc: "4 hab · 5 baños · jacuzzi", price: "US$ 1,180", meta: "/ noche" },
        { img: `${V}/coral.webp`, tag: "Caleta privada", name: "Villa Coral", desc: "3 hab · 3 baños · muelle", price: "US$ 980", meta: "/ noche" },
        { img: `${V}/night.webp`, tag: "Para grupos", name: "Villa Cayena", desc: "7 hab · 8 baños · cine", price: "US$ 2,300", meta: "/ noche" },
      ],
    },
    process: {
      kicker: "Incluido",
      title: "Todo resuelto antes de aterrizar",
      steps: [
        { n: "01", t: "Traslado", d: "Te recogemos en el aeropuerto PUJ." },
        { n: "02", t: "Despensa", d: "Llegas con la nevera llena a tu gusto." },
        { n: "03", t: "Chef", d: "Desayuno criollo y cenas a la carta." },
      ],
    },
    about: {
      kicker: "Experiencias",
      title: "Un concierge que conoce la isla de verdad",
      body: "Catamarán a Isla Saona, golf al atardecer, cena en la playa o un día sin moverte de la piscina. Lo coordinamos todo por WhatsApp.",
      img: `${V}/chef.webp`,
      img2: `${V}/caleton.webp`,
      points: ["Chef y ama de llaves", "Catamarán privado", "Carritos de golf incluidos"],
    },
    gallery: {
      kicker: "Galería",
      title: "Así se ve una semana en Cayena",
      imgs: [
        { src: `${V}/marina-aerial.webp`, cap: "Marina Cap Cana" },
        { src: `${V}/living.webp`, cap: "Sala abierta" },
        { src: `${V}/pool.webp`, cap: "Piscina infinita" },
        { src: `${V}/bedroom.webp`, cap: "Suite principal" },
        { src: `${V}/dining.webp`, cap: "Comedor" },
        { src: `${V}/beach.webp`, cap: "Playa Juanillo" },
      ],
    },
    faq: [
      { q: "¿Cuál es la estadía mínima?", a: "3 noches; 5 en Navidad y Semana Santa." },
      { q: "¿Piden depósito?", a: "30 % para bloquear fechas y el resto 15 días antes." },
      { q: "¿Se admiten mascotas?", a: "En Villa Palmera y Villa Coral, con aviso previo." },
    ],
    location: {
      address: "Cap Cana, La Altagracia",
      area: "Punta Cana",
      hours: [
        ["Concierge", "24 horas"],
        ["Check-in", "15:00"],
        ["Check-out", "11:00"],
      ],
      note: "20 min del Aeropuerto Internacional de Punta Cana",
    },
    cta: { title: "Tus fechas, nuestra villa.", sub: "Escríbenos y te mandamos disponibilidad y precio final en minutos.", button: "Consultar por WhatsApp" },
    footer: {
      blurb: "Marca de villas ficticia creada como demo por Nativa.",
      cols: [
        { t: "Villas", l: ["Luna", "Palmera", "Coral", "Cayena"] },
        { t: "Info", l: ["Experiencias", "Políticas", "Contacto"] },
      ],
    },
  },

  legal: {
    id: "legal",
    kind: "landing",
    brand: "Ceiba & Asociados",
    tagline: "Abogados · Santo Domingo",
    domain: "ceibalegal.do",
    mark: "column",
    fonts: { head: "'Playfair Display', Georgia, serif", body: "'IBM Plex Sans', system-ui, sans-serif", headWeight: 500, headItalicEm: true },
    colors: { bg: "#F6F3EE", ink: "#121722", accent: "#9A7443", soft: "#EAE2D5" },
    heroStyle: "overlay",
    nav: ["Áreas", "Equipo", "Proceso", "Consultas"],
    phone: "(809) 555-0118",
    hero: {
      img: `${LG}/library.webp`,
      kicker: "Derecho corporativo, inmobiliario y familiar",
      title: "Decisiones legales",
      em: "con la cabeza fría.",
      sub: "Te explicamos tus opciones en lenguaje claro, con honorarios por escrito antes de empezar.",
      cta: "Agendar consulta",
      cta2: "Áreas de práctica",
      badges: ["Primera consulta 30 min", "Honorarios por escrito", "Atención en inglés"],
    },
    booking: {
      title: "Consulta inicial",
      fields: [
        { label: "Tema", value: "Compra de inmueble" },
        { label: "Modalidad", value: "Presencial · Piantini" },
      ],
      slots: ["Mar 10:00", "Mar 15:30", "Mié 9:00"],
      cta: "Solicitar cita",
    },
    stats: [
      { n: "5", l: "áreas de práctica" },
      { n: "ES · EN", l: "atención" },
      { n: "48 h", l: "propuesta escrita" },
    ],
    services: {
      kicker: "Áreas de práctica",
      title: "En qué te podemos ayudar",
      items: [
        { name: "Inmobiliario", desc: "Due diligence, contratos, títulos y deslindes.", meta: "Compra · Venta · Alquiler" },
        { name: "Corporativo", desc: "Constitución de empresas, actas y contratos comerciales.", meta: "SRL · SAS · Startups" },
        { name: "Familia", desc: "Divorcios, pensiones y acuerdos de custodia.", meta: "Mediación primero" },
        { name: "Laboral", desc: "Contratos, desahucios y auditoría de nómina.", meta: "Para empresas" },
        { name: "Migratorio", desc: "Residencias, visas de inversión y naturalización.", meta: "Para extranjeros" },
      ],
    },
    process: {
      kicker: "Cómo trabajamos",
      title: "Sin letra pequeña",
      steps: [
        { n: "I", t: "Consulta", d: "Escuchamos el caso y te decimos si podemos ayudarte." },
        { n: "II", t: "Propuesta", d: "Estrategia, plazos y honorarios por escrito en 48 h." },
        { n: "III", t: "Seguimiento", d: "Un abogado asignado y reporte quincenal." },
      ],
    },
    about: {
      kicker: "Socios",
      title: "Un equipo pequeño, a propósito",
      body: "Atendemos pocos casos a la vez para que siempre hables con quien lleva tu expediente.",
      img: `${LG}/conference.webp`,
      points: ["Oficina en Piantini", "Reuniones virtuales", "Notario asociado"],
      people: [
        { img: `${LG}/almonte.webp`, name: "Lcda. Inés Valerio", role: "Socia · Inmobiliario" },
        { img: `${LG}/nolasco.webp`, name: "Lcdo. Mateo Cabral", role: "Socio · Corporativo" },
        { img: `${LG}/reyes.webp`, name: "Lcdo. Andrés Pujols", role: "Familia y laboral" },
      ],
    },
    gallery: {
      kicker: "La oficina",
      title: "Discreción desde la recepción",
      imgs: [
        { src: `${LG}/facade.webp`, cap: "Piso 7" },
        { src: `${LG}/reception.webp`, cap: "Recepción" },
        { src: `${LG}/conference.webp`, cap: "Sala de juntas" },
        { src: `${LG}/library.webp`, cap: "Biblioteca" },
      ],
    },
    faq: [
      { q: "¿Cuánto cuesta la primera consulta?", a: "RD$ 3,500, que se descuentan si contratas el servicio." },
      { q: "¿Atienden fuera de Santo Domingo?", a: "Sí, en Punta Cana y Santiago con cita previa." },
      { q: "¿Firman confidencialidad?", a: "Siempre, desde la primera reunión." },
    ],
    location: { address: "Local 55 · piso 7, Piantini", area: "Santo Domingo", hours: HOURS_WEEK, note: "Parqueo de visitantes en el sótano" },
    cta: { title: "Cuéntanos tu caso.", sub: "Te respondemos hoy con los próximos pasos.", button: "Escribir por WhatsApp" },
    footer: {
      blurb: "Bufete ficticio creado como demo por Nativa.",
      cols: [
        { t: "Áreas", l: ["Inmobiliario", "Corporativo", "Familia"] },
        { t: "Firma", l: ["Socios", "Proceso", "Contacto"] },
      ],
    },
  },

  constructora: {
    id: "constructora",
    kind: "landing",
    brand: "BASALTO",
    tagline: "Construcción · Desarrollo",
    domain: "basalto.do",
    mark: "beam",
    fonts: { head: "'Barlow Condensed', 'Arial Narrow', sans-serif", body: "'Barlow', system-ui, sans-serif", headCase: "upper", headWeight: 600 },
    colors: { bg: "#F1F0EC", ink: "#111315", accent: "#BD4219", soft: "#E3E0D8" },
    heroStyle: "poster",
    promo: "3 obras en curso · Visitas guiadas los sábados",
    nav: ["Proyectos", "Servicios", "Empresa", "Cotizar"],
    phone: "(809) 555-0163",
    hero: {
      img: `${O}/hero.webp`,
      kicker: "Torres, villas y naves industriales",
      title: "Obra entregada",
      em: "en la fecha prometida.",
      sub: "Diseño, permisos y construcción llave en mano. Reporte semanal con fotos de tu obra en WhatsApp.",
      cta: "Cotizar proyecto",
      cta2: "Ver proyectos",
      badges: ["Llave en mano", "Reporte semanal", "Seguro de obra"],
    },
    stats: [
      { n: "38 000 m²", l: "construidos (demo)" },
      { n: "3", l: "obras en curso" },
      { n: "100 %", l: "permisos gestionados" },
    ],
    services: {
      kicker: "Proyectos",
      title: "Lo que estamos levantando",
      items: [
        { img: `${O}/torre.webp`, tag: "En obra · 72 %", name: "Torre Ámbar", desc: "Residencial · 14 niveles · Piantini", meta: "Entrega jun 2027" },
        { img: `${O}/villas.webp`, tag: "En obra · 40 %", name: "Villas Arrecife", desc: "12 villas · Punta Cana", meta: "Entrega dic 2027" },
        { img: `${O}/plaza.webp`, tag: "Entregado", name: "Plaza Los Ríos", desc: "Comercial · 3 niveles", meta: "Entregado 2025" },
        { img: `${O}/industrial.webp`, tag: "En diseño", name: "Nave Haina", desc: "Industrial · 4,500 m²", meta: "Inicio 2027" },
      ],
    },
    process: {
      kicker: "Método",
      title: "Del plano a las llaves",
      steps: [
        { n: "01", t: "Diseño", d: "Arquitectura e ingeniería en un solo equipo." },
        { n: "02", t: "Permisos", d: "MIVHED, ayuntamiento y medio ambiente." },
        { n: "03", t: "Obra", d: "Cronograma público y reporte semanal." },
        { n: "04", t: "Entrega", d: "Garantía estructural por escrito." },
      ],
    },
    about: {
      kicker: "Empresa",
      title: "Ingenieros en obra, no solo en la oficina",
      body: "Cada proyecto tiene un ingeniero residente y un cronograma que compartimos contigo desde el primer día.",
      img: `${O}/site.webp`,
      points: ["Ingeniero residente", "Control de calidad de hormigón", "Seguridad certificada"],
      people: [
        { img: `${O}/engineer-w.webp`, name: "Ing. Carla Mejía", role: "Dirección de obra" },
        { img: `${O}/engineer-m.webp`, name: "Ing. Rafael Duarte", role: "Estructuras" },
      ],
    },
    gallery: {
      kicker: "En obra",
      title: "Avance real, fotos de esta semana",
      imgs: [
        { src: `${O}/site.webp`, cap: "Torre Ámbar · nivel 10" },
        { src: `${O}/piantini.webp`, cap: "Fachada" },
        { src: `${O}/office.webp`, cap: "Oficina técnica" },
        { src: `${O}/villas.webp`, cap: "Villas Arrecife" },
      ],
    },
    faq: [
      { q: "¿Construyen en todo el país?", a: "Sí, con base en Santo Domingo y equipos en Punta Cana y Santiago." },
      { q: "¿Gestionan los permisos?", a: "Todos: planos, MIVHED, ayuntamiento y medio ambiente." },
      { q: "¿Cómo veo el avance?", a: "Recibes fotos y un reporte por WhatsApp cada viernes." },
    ],
    location: { address: "Local 210 · Los Prados", area: "Santo Domingo", hours: HOURS_WEEK, note: "Visitas a obra con cita · EPP incluido" },
    cta: { title: "¿Tienes el solar?", sub: "Te enviamos una estimación inicial en 72 horas.", button: "Cotizar por WhatsApp" },
    footer: {
      blurb: "Constructora ficticia creada como demo por Nativa.",
      cols: [
        { t: "Proyectos", l: ["Residencial", "Comercial", "Industrial"] },
        { t: "Empresa", l: ["Método", "Equipo", "Cotizar"] },
      ],
    },
  },

  otro: {
    id: "otro",
    kind: "landing",
    brand: "Casa Norte",
    tagline: "Café & cocina · Las Terrenas",
    domain: "casanorte.do",
    mark: "leaf",
    fonts: { head: "'Fraunces', Georgia, serif", body: "'Outfit', system-ui, sans-serif", headWeight: 600, headItalicEm: true },
    colors: { bg: "#FAF3E8", ink: "#2A1C12", accent: "#C2552F", soft: "#F0E1CB" },
    heroStyle: "editorial",
    nav: ["Menú", "Nuestro café", "Galería", "Reservar"],
    phone: "(809) 555-0129",
    hero: {
      img: `${N}/terrace.webp`,
      img2: `${N}/cup.webp`,
      kicker: "Desayunos todo el día frente al mar",
      title: "Café de Samaná,",
      em: "pan de la casa.",
      sub: "Tostamos nuestro propio café dominicano y horneamos cada mañana. Reserva tu mesa en la terraza.",
      cta: "Reservar mesa",
      cta2: "Ver menú",
      badges: ["Abierto desde 7:00", "Pet friendly", "Wifi"],
    },
    booking: {
      title: "Reserva en la terraza",
      fields: [
        { label: "Fecha", value: "Sábado 24" },
        { label: "Personas", value: "4" },
      ],
      slots: ["8:30", "10:00", "11:30", "13:00"],
      cta: "Reservar por WhatsApp",
    },
    stats: [
      { n: "7:00", l: "abrimos" },
      { n: "100 %", l: "café dominicano" },
      { n: "40", l: "mesas en terraza" },
    ],
    services: {
      kicker: "Menú",
      title: "Lo que sale de la cocina",
      items: [
        { img: `${N}/cup.webp`, tag: "Café", name: "Flat white de la casa", desc: "Doble espresso de Samaná, leche texturizada.", price: "RD$ 220" },
        { img: `${N}/geisha.webp`, tag: "Filtrado", name: "V60 Geisha de Barahona", desc: "Notas de jazmín y melocotón.", price: "RD$ 380" },
        { img: `${N}/beans.webp`, tag: "Para llevar", name: "Café en grano · 340 g", desc: "Tostado medio, molido a tu gusto.", price: "RD$ 750" },
        { img: `${N}/roaster.webp`, tag: "Experiencia", name: "Cata en la tostadora", desc: "Sábados 10:00, cupos limitados.", price: "RD$ 1,200" },
      ],
    },
    process: {
      kicker: "Del día",
      title: "Desayunos que se repiten",
      steps: [
        { n: "☀", t: "Mangú tres golpes", d: "Salami, queso frito, cebolla roja. RD$ 420" },
        { n: "☀", t: "Pancakes de coco", d: "Mango, miel de la finca. RD$ 390" },
        { n: "☀", t: "Tostada de aguacate", d: "Pan de masa madre, queso de hoja. RD$ 360" },
      ],
    },
    about: {
      kicker: "Nuestro café",
      title: "De la finca a tu taza en 48 horas",
      body: "Compramos directo a productores de la loma y tostamos en pequeñas tandas aquí mismo, a la vista de todos.",
      img: `${N}/farm.webp`,
      img2: `${N}/barista.webp`,
      points: ["Compra directa", "Tostado semanal", "Leches vegetales"],
    },
    gallery: {
      kicker: "Galería",
      title: "Una mañana en Casa Norte",
      imgs: [
        { src: `${N}/terrace.webp`, cap: "La terraza" },
        { src: `${N}/barista.webp`, cap: "Barra" },
        { src: `${N}/roaster.webp`, cap: "Tostadora" },
        { src: `${N}/farm.webp`, cap: "La finca" },
      ],
    },
    faq: [
      { q: "¿Aceptan reservas grupales?", a: "Sí, hasta 20 personas con 24 h de aviso." },
      { q: "¿Tienen opciones veganas?", a: "Varias, y leches vegetales sin costo extra." },
      { q: "¿Hacen delivery?", a: "En Las Terrenas, de 8:00 a 14:00." },
    ],
    location: {
      address: "Local 3 · frente a Playa Popy",
      area: "Las Terrenas, Samaná",
      hours: [
        ["Martes a domingo", "7:00 – 16:00"],
        ["Lunes", "Cerrado"],
        ["Cocina", "hasta 15:30"],
      ],
      note: "Parqueo en la calle · Bicicletas bienvenidas",
    },
    cta: { title: "Te guardamos la mejor mesa.", sub: "Reserva en 30 segundos por WhatsApp.", button: "Reservar por WhatsApp" },
    footer: {
      blurb: "Café ficticio creado como demo por Nativa.",
      cols: [
        { t: "Casa", l: ["Menú", "Café en grano", "Catas"] },
        { t: "Visítanos", l: ["Horario", "Cómo llegar", "Eventos"] },
      ],
    },
  },

  /* ───────────────────────── SHOP ───────────────────────── */
  moda: {
    id: "moda",
    kind: "shop",
    brand: "Lina",
    tagline: "Resort & lino · Hecho en RD",
    domain: "lina.do",
    mark: "wave",
    fonts: { head: "'Cormorant Garamond', Georgia, serif", body: "'Manrope', system-ui, sans-serif", headWeight: 500, headItalicEm: true },
    colors: { bg: "#F7F1EA", ink: "#1E1A17", accent: "#A65A3A", soft: "#EEDFD0" },
    heroStyle: "full",
    promo: "Envío gratis en Santo Domingo desde RD$ 4,500",
    nav: ["Nuevo", "Playa", "Lino", "Colecciones", "Nosotras"],
    phone: "(809) 555-0151",
    hero: {
      img: `${LI}/beach.webp`,
      kicker: "Colección Marea · Verano 2026",
      title: "Lino para",
      em: "días largos.",
      sub: "Trajes de baño y piezas de lino cortadas y cosidas en Santo Domingo, en tandas pequeñas.",
      cta: "Comprar la colección",
      cta2: "Ver lookbook",
      badges: ["Hecho en RD", "Cambios en 15 días", "Pago contra entrega"],
    },
    services: { kicker: "", title: "", items: [] },
    about: {
      kicker: "Sobre la marca",
      title: "Un taller de seis costureras en Gazcue",
      body: "Diseñamos para el calor de verdad: telas que respiran, cortes que se mueven contigo y piezas que duran más de un verano.",
      img: `${LI}/tienda.webp`,
      img2: `${LI}/enterizo-detail.webp`,
      points: ["Lino europeo certificado", "Tandas de 40 piezas", "Empaque sin plástico"],
    },
    gallery: {
      kicker: "Lookbook",
      title: "Marea, en la costa este",
      imgs: [
        { src: `${LI}/bikini-marea.webp` },
        { src: `${LI}/pareo.webp` },
        { src: `${LI}/vestido-cala.webp` },
        { src: `${LI}/camisa-lino.webp` },
      ],
    },
    faq: [
      { q: "¿Cómo sé mi talla?", a: "Cada pieza trae medidas en cm. Si dudas, te asesoramos por WhatsApp." },
      { q: "¿Hacen cambios?", a: "Sí, 15 días con etiqueta. El primer cambio es gratis." },
      { q: "¿Envían fuera del país?", a: "A EE. UU. y Puerto Rico vía courier." },
    ],
    location: { address: "Local 21 · Gazcue", area: "Santo Domingo", hours: HOURS_WEEK, note: "Showroom con cita · Retiro en tienda gratis" },
    cta: { title: "¿Dudas con la talla?", sub: "Te ayudamos a elegir por WhatsApp, con fotos reales de la pieza.", button: "Escribir por WhatsApp" },
    footer: {
      blurb: "Marca de ropa ficticia creada como demo por Nativa.",
      cols: [
        { t: "Tienda", l: ["Nuevo", "Playa", "Lino", "Accesorios"] },
        { t: "Ayuda", l: ["Tallas", "Envíos", "Cambios"] },
      ],
    },
    shop: {
      cats: ["Todo", "Trajes de baño", "Vestidos", "Camisas", "Pareos"],
      products: [
        { img: `${LI}/bikini-sal.webp`, name: "Bikini Sal", desc: "Arena · S–L", price: "RD$ 3,200", tag: "Nuevo" },
        { img: `${LI}/enterizo-arena.webp`, name: "Enterizo Arena", desc: "Crudo · S–XL", price: "RD$ 3,900" },
        { img: `${LI}/vestido-cala.webp`, name: "Vestido Cala", desc: "Lino · XS–L", price: "RD$ 5,600", low: true, tag: "Quedan 3" },
        { img: `${LI}/camisa-lino.webp`, name: "Camisa Brisa", desc: "Lino · unisex", price: "RD$ 4,100" },
        { img: `${LI}/bikini-marea.webp`, name: "Bikini Marea", desc: "Terracota · S–L", price: "RD$ 3,200", was: "RD$ 3,800", tag: "-15 %" },
        { img: `${LI}/vestido.webp`, name: "Vestido Gazcue", desc: "Lino lavado", price: "RD$ 5,200" },
        { img: `${LI}/blazer.webp`, name: "Blazer Malecón", desc: "Lino · crudo", price: "RD$ 6,900" },
        { img: `${LI}/denim.webp`, name: "Pantalón Recto", desc: "Algodón", price: "RD$ 4,200" },
      ],
      pdp: {
        imgs: [`${LI}/vestido-cala.webp`, `${LI}/enterizo-detail.webp`, `${LI}/pareo.webp`],
        name: "Vestido Cala",
        price: "RD$ 5,600",
        tag: "Lino 100 % · Hecho en RD",
        desc: "Vestido midi de lino lavado con tirantes ajustables y bolsillos laterales. Fresco para el día, elegante para la cena.",
        option: { label: "Talla", values: ["XS", "S", "M", "L"], on: 2 },
        option2: { label: "Color", values: ["Crudo", "Arena", "Terracota"], on: 0 },
        details: ["Medidas y guía de tallas", "Cuidado: lavar a mano en frío", "Envío y cambios"],
      },
      bag: [
        { name: "Vestido Cala", variant: "M · Crudo", price: "RD$ 5,600", img: `${LI}/vestido-cala.webp`, qty: 1 },
        { name: "Bikini Sal", variant: "S · Arena", price: "RD$ 3,200", img: `${LI}/bikini-sal.webp`, qty: 1 },
      ],
      subtotal: "RD$ 8,800",
      shipping: "Gratis",
      total: "RD$ 8,800",
      collections: [
        { name: "Marea", img: `${LI}/bikini-marea.webp`, count: "18 piezas" },
        { name: "Lino de ciudad", img: `${LI}/blazer.webp`, count: "12 piezas" },
        { name: "Pareos", img: `${LI}/pareo.webp`, count: "6 piezas" },
      ],
      ship: [
        { zone: "Santo Domingo", time: "24 h", price: "RD$ 250 · gratis +4,500" },
        { zone: "Santiago y Punta Cana", time: "24–48 h", price: "RD$ 350" },
        { zone: "Resto del país", time: "48–72 h", price: "RD$ 450" },
      ],
      perks: ["Pago contra entrega", "Cambios en 15 días", "Empaque para regalo"],
    },
  },

  gastronomia: {
    id: "gastronomia",
    kind: "shop",
    brand: "Nieve",
    tagline: "Heladería artesanal · Piantini",
    domain: "nieve.do",
    mark: "cone",
    fonts: { head: "'Fraunces', Georgia, serif", body: "'DM Sans', system-ui, sans-serif", headWeight: 600, headItalicEm: true },
    colors: { bg: "#FFF6F2", ink: "#3A1D2A", accent: "#E0507A", soft: "#FFE1D8" },
    heroStyle: "split",
    promo: "Delivery en 45 min en el Polígono Central · Pide antes de las 9 p. m.",
    nav: ["Sabores", "Pintas", "Paletas", "Eventos", "Nosotros"],
    phone: "(809) 555-0135",
    hero: {
      img: `${NI}/fresa.webp`,
      img2: `${NI}/vitrina.webp`,
      kicker: "Helado artesanal con fruta dominicana",
      title: "Frío de verdad,",
      em: "fruta de aquí.",
      sub: "Chinola de Baní, mango de Azua y cacao de San Francisco. Hecho cada mañana, sin colorantes.",
      cta: "Pedir ahora",
      cta2: "Ver sabores",
      badges: ["Sin colorantes", "Opciones veganas", "Delivery 45 min"],
    },
    services: { kicker: "", title: "", items: [] },
    about: {
      kicker: "Sobre la marca",
      title: "Una vitrina, doce sabores, cero atajos",
      body: "Empezamos con una máquina y un carrito en el Mirador Sur. Hoy hacemos 12 sabores al día con fruta de productores locales.",
      img: `${NI}/vitrina.webp`,
      img2: `${NI}/bandejas.webp`,
      points: ["Fruta de temporada", "Leche de vaca de Monte Plata", "Bases veganas de coco"],
    },
    gallery: {
      kicker: "La vitrina",
      title: "Lo que hay hoy",
      imgs: [{ src: `${NI}/bandejas.webp` }, { src: `${NI}/paletas.webp` }, { src: `${NI}/brownie.webp` }, { src: `${NI}/mango.webp` }],
    },
    faq: [
      { q: "¿Llega derretido?", a: "No: viaja en caja térmica con gel y llega en menos de 45 minutos." },
      { q: "¿Hacen eventos?", a: "Carrito con 6 sabores para bodas, cumpleaños y oficinas." },
      { q: "¿Tienen sin azúcar?", a: "Dos sabores al día endulzados con fruta." },
    ],
    location: {
      address: "Local 8 · Piantini",
      area: "Santo Domingo",
      hours: [
        ["Lunes a jueves", "12:00 – 22:00"],
        ["Viernes y sábado", "12:00 – 23:30"],
        ["Domingo", "13:00 – 22:00"],
      ],
      note: "Retiro en tienda en 10 minutos",
    },
    cta: { title: "¿Antojo ahora?", sub: "Pide por WhatsApp y llega en 45 minutos.", button: "Pedir por WhatsApp" },
    footer: {
      blurb: "Heladería ficticia creada como demo por Nativa.",
      cols: [
        { t: "Pedir", l: ["Sabores", "Pintas", "Paletas", "Eventos"] },
        { t: "Nieve", l: ["Historia", "Ubicación", "Trabaja aquí"] },
      ],
    },
    shop: {
      cats: ["Todo", "Conos", "Pintas", "Paletas", "Veganos"],
      products: [
        { img: `${NI}/fresa.webp`, name: "Cono fresa y crema", desc: "2 bolas · waffle", price: "RD$ 280", tag: "Favorito" },
        { img: `${NI}/mango.webp`, name: "Copa mango de Azua", desc: "Sorbete · vegano", price: "RD$ 240" },
        { img: `${NI}/paletas.webp`, name: "Paletas de fruta · 4", desc: "Chinola, piña, limón", price: "RD$ 520", tag: "Nuevo" },
        { img: `${NI}/chocolate.webp`, name: "Cacao 70 %", desc: "Cacao de San Francisco", price: "RD$ 260" },
        { img: `${NI}/brownie.webp`, name: "Copa brownie", desc: "Brownie tibio + vainilla", price: "RD$ 340", low: true, tag: "Quedan 4" },
        { img: `${NI}/vainilla.webp`, name: "Cono vainilla", desc: "Vainilla de Madagascar", price: "RD$ 190" },
      ],
      pdp: {
        imgs: [`${NI}/fresa.webp`, `${NI}/bandejas.webp`, `${NI}/paletas.webp`],
        name: "Pinta para compartir",
        price: "RD$ 690",
        tag: "500 ml · 3–4 personas",
        desc: "Elige hasta dos sabores. Viaja en caja térmica y aguanta 40 minutos fuera del congelador.",
        option: { label: "Sabor 1", values: ["Fresa", "Mango", "Cacao", "Coco"], on: 0 },
        option2: { label: "Tamaño", values: ["500 ml", "1 litro"], on: 0 },
        details: ["Ingredientes y alérgenos", "Cómo conservarlo", "Zonas de delivery"],
      },
      bag: [
        { name: "Pinta para compartir", variant: "Fresa + Cacao · 500 ml", price: "RD$ 690", img: `${NI}/fresa.webp`, qty: 1 },
        { name: "Paletas de fruta · 4", variant: "Surtidas", price: "RD$ 520", img: `${NI}/paletas.webp`, qty: 1 },
      ],
      subtotal: "RD$ 1,210",
      shipping: "RD$ 150",
      total: "RD$ 1,360",
      collections: [
        { name: "Sabores de fruta", img: `${NI}/mango.webp`, count: "6 sabores" },
        { name: "Cremosos", img: `${NI}/chocolate.webp`, count: "6 sabores" },
        { name: "Para eventos", img: `${NI}/vitrina.webp`, count: "Carrito" },
      ],
      ship: [
        { zone: "Piantini, Naco, Serrallés", time: "30–45 min", price: "RD$ 150" },
        { zone: "Resto del Distrito", time: "45–60 min", price: "RD$ 250" },
        { zone: "Retiro en tienda", time: "10 min", price: "Gratis" },
      ],
      perks: ["Caja térmica", "Pago con tarjeta o efectivo", "Propina opcional"],
    },
  },

  beauty: {
    id: "beauty",
    kind: "shop",
    brand: "Aura Atelier",
    tagline: "Maquillaje & cuidado · Santo Domingo",
    domain: "auraatelier.do",
    mark: "drop",
    fonts: { head: "'Playfair Display', Georgia, serif", body: "'Outfit', system-ui, sans-serif", headWeight: 500, headItalicEm: true },
    colors: { bg: "#FBF3F0", ink: "#2B191D", accent: "#B23A48", soft: "#F4D9D3" },
    heroStyle: "editorial",
    promo: "Muestra gratis en pedidos desde RD$ 2,500",
    nav: ["Labios", "Rostro", "Cuidado", "Rituales", "Atelier"],
    phone: "(809) 555-0188",
    hero: {
      img: `${A}/lip-pdp.webp`,
      img2: `${A}/textura.webp`,
      kicker: "Fórmulas para piel caribeña",
      title: "Color que aguanta",
      em: "el calor.",
      sub: "Labiales de larga duración, paletas cálidas y cuidado ligero pensado para humedad y sol.",
      cta: "Comprar labiales",
      cta2: "Encontrar mi tono",
      badges: ["Cruelty free", "Resistente a humedad", "Asesoría por WhatsApp"],
    },
    services: { kicker: "", title: "", items: [] },
    about: {
      kicker: "El atelier",
      title: "Tonos probados en pieles dominicanas",
      body: "Cada tono se prueba en seis subtonos de piel antes de salir. Si no te queda, te lo cambiamos.",
      img: `${A}/ritual.webp`,
      img2: `${A}/textura.webp`,
      points: ["Sin parabenos", "Envases recargables", "Cambio de tono gratis"],
    },
    gallery: {
      kicker: "Texturas",
      title: "De cerca",
      imgs: [{ src: `${A}/textura.webp` }, { src: `${A}/paleta-atardecer.webp` }, { src: `${A}/gloss-nube.webp` }, { src: `${A}/lip-cereza.webp` }],
    },
    faq: [
      { q: "¿Cómo elijo mi tono?", a: "Mándanos una foto con luz natural y te recomendamos tres." },
      { q: "¿Son veganos?", a: "Toda la línea de labios, sí." },
      { q: "¿Tienen tienda física?", a: "Atelier en Bella Vista con cita." },
    ],
    location: { address: "Local 40 · Bella Vista", area: "Santo Domingo", hours: HOURS_WEEK, note: "Prueba de tonos con cita" },
    cta: { title: "¿No sabes tu tono?", sub: "Mándanos una foto y te recomendamos tres.", button: "Asesoría por WhatsApp" },
    footer: {
      blurb: "Marca de cosmética ficticia creada como demo por Nativa.",
      cols: [
        { t: "Tienda", l: ["Labios", "Rostro", "Cuidado"] },
        { t: "Ayuda", l: ["Encuentra tu tono", "Envíos", "Cambios"] },
      ],
    },
    shop: {
      cats: ["Todo", "Labios", "Ojos", "Rostro", "Cuidado"],
      products: [
        { img: `${A}/lip-cereza.webp`, name: "Labial Cereza", desc: "Mate · 12 h", price: "RD$ 1,250", tag: "Más vendido" },
        { img: `${A}/paleta-atardecer.webp`, name: "Paleta Atardecer", desc: "9 tonos cálidos", price: "RD$ 3,240" },
        { img: `${A}/gloss-nube.webp`, name: "Gloss Nube", desc: "Brillo con ácido hialurónico", price: "RD$ 1,120", low: true, tag: "Quedan 3" },
        { img: `${A}/textura.webp`, name: "Crema Bruma", desc: "Hidratante ligera FPS 30", price: "RD$ 1,890", tag: "Nuevo" },
        { img: `${A}/ritual.webp`, name: "Loción Coco", desc: "Cuerpo · 250 ml", price: "RD$ 980" },
        { img: `${A}/lip-pdp.webp`, name: "Set Labios Duo", desc: "Labial + perfilador", price: "RD$ 1,990", was: "RD$ 2,370", tag: "-16 %" },
      ],
      pdp: {
        imgs: [`${A}/lip-pdp.webp`, `${A}/lip-cereza.webp`, `${A}/textura.webp`],
        name: "Labial Cereza",
        price: "RD$ 1,250",
        tag: "Mate · larga duración",
        desc: "Mate cremoso que no reseca, con manteca de cacao dominicano. Aguanta 12 horas y la mascarilla.",
        option: { label: "Tono", values: ["Cereza", "Canela", "Guayaba", "Café"], on: 0 },
        details: ["Ingredientes", "Cómo aplicarlo", "Envíos y cambios de tono"],
      },
      bag: [
        { name: "Labial Cereza", variant: "Tono Cereza", price: "RD$ 1,250", img: `${A}/lip-cereza.webp`, qty: 2 },
        { name: "Paleta Atardecer", variant: "9 tonos", price: "RD$ 3,240", img: `${A}/paleta-atardecer.webp`, qty: 1 },
      ],
      subtotal: "RD$ 5,740",
      shipping: "Gratis",
      total: "RD$ 5,740",
      collections: [
        { name: "Labios", img: `${A}/lip-cereza.webp`, count: "14 tonos" },
        { name: "Ojos", img: `${A}/paleta-atardecer.webp`, count: "3 paletas" },
        { name: "Cuidado", img: `${A}/textura.webp`, count: "6 productos" },
      ],
      ship: [
        { zone: "Santo Domingo", time: "24 h", price: "RD$ 200 · gratis +2,500" },
        { zone: "Interior", time: "48 h", price: "RD$ 300" },
        { zone: "Retiro en atelier", time: "Mismo día", price: "Gratis" },
      ],
      perks: ["Muestra gratis", "Cambio de tono", "Envoltura de regalo"],
    },
  },

  tech: {
    id: "tech",
    kind: "shop",
    brand: "nodo",
    tagline: "Hardware & setups · Santiago",
    domain: "nodo.do",
    mark: "chip",
    fonts: { head: "'Space Grotesk', system-ui, sans-serif", body: "'IBM Plex Sans', system-ui, sans-serif", headWeight: 600 },
    colors: { bg: "#F2F4F7", ink: "#0C1016", accent: "#2E6BFF", soft: "#E1E8F5" },
    heroStyle: "poster",
    promo: "Arma tu PC con nosotros · Ensamblaje y prueba de 24 h incluidos",
    nav: ["Componentes", "PCs armadas", "Periféricos", "Ofertas", "Soporte"],
    phone: "(809) 555-0170",
    hero: {
      img: `${ND}/rgb.webp`,
      img2: `${ND}/gpu-hero.webp`,
      kicker: "Componentes originales con garantía local",
      title: "Arma la PC",
      em: "que sí rinde.",
      sub: "Tarjetas gráficas, procesadores y setups completos con garantía en RD. Te ayudamos a elegir por WhatsApp.",
      cta: "Comprar componentes",
      cta2: "Armar mi PC",
      badges: ["Garantía local 1 año", "Cuotas sin interés", "Envío a todo el país"],
    },
    services: { kicker: "", title: "", items: [] },
    about: {
      kicker: "Sobre nodo",
      title: "Técnicos que juegan lo que venden",
      body: "Probamos cada PC 24 horas antes de entregarla y te mandamos el video del benchmark.",
      img: `${ND}/setup.webp`,
      img2: `${ND}/prebuild-tower.webp`,
      points: ["Prueba de estrés 24 h", "Gestión de cables", "Soporte remoto"],
    },
    gallery: {
      kicker: "Setups",
      title: "Armados esta semana",
      imgs: [{ src: `${ND}/prebuild-tower.webp` }, { src: `${ND}/setup.webp` }, { src: `${ND}/teclado.webp` }, { src: `${ND}/rgb.webp` }],
    },
    faq: [
      { q: "¿La garantía es local?", a: "Sí, 1 año en nuestro taller de Santiago o por courier." },
      { q: "¿Puedo pagar en cuotas?", a: "Hasta 12 cuotas sin interés con tarjetas participantes." },
      { q: "¿Arman la PC?", a: "Gratis al comprar 3 componentes o más." },
    ],
    location: { address: "Local 77 · Los Jardines", area: "Santiago", hours: HOURS_WEEK, note: "Retiro en tienda · Taller a la vista" },
    cta: { title: "¿No sabes qué tarjeta elegir?", sub: "Dinos tu presupuesto y tus juegos. Te armamos la lista.", button: "Asesoría por WhatsApp" },
    footer: {
      blurb: "Tienda de tecnología ficticia creada como demo por Nativa.",
      cols: [
        { t: "Tienda", l: ["Componentes", "PCs armadas", "Periféricos"] },
        { t: "Soporte", l: ["Garantía", "Envíos", "Cuotas"] },
      ],
    },
    shop: {
      cats: ["Todo", "GPU", "CPU", "Memoria", "Periféricos", "PCs armadas"],
      products: [
        { img: `${ND}/gpu-hero.webp`, name: "GPU Serie 70 · 12 GB", desc: "Ray tracing · 1440p", price: "RD$ 42,900", tag: "En stock" },
        { img: `${ND}/cpu-box.webp`, name: "CPU 8 núcleos X3D", desc: "AM5 · 120 W", price: "RD$ 18,500" },
        { img: `${ND}/ram-kit.webp`, name: "Kit DDR5 32 GB", desc: "6000 MT/s · CL30", price: "RD$ 6,800", low: true, tag: "Quedan 2" },
        { img: `${ND}/teclado.webp`, name: "Teclado 75 % Hot-swap", desc: "Switches lineales", price: "RD$ 5,900", tag: "Nuevo" },
        { img: `${ND}/prebuild-tower.webp`, name: "PC Forja 1440p", desc: "Lista para jugar", price: "RD$ 118,000", was: "RD$ 126,000", tag: "Oferta" },
        { img: `${ND}/setup.webp`, name: "Kit setup oficina", desc: "Teclado + mouse + pad", price: "RD$ 4,300" },
      ],
      pdp: {
        imgs: [`${ND}/prebuild-tower.webp`, `${ND}/gpu-hero.webp`, `${ND}/rgb.webp`],
        name: "PC Forja 1440p",
        price: "RD$ 118,000",
        tag: "Armada y probada 24 h",
        desc: "GPU de 12 GB, CPU de 8 núcleos, 32 GB DDR5 y SSD de 2 TB. 120+ FPS en 1440p en la mayoría de títulos.",
        option: { label: "Almacenamiento", values: ["1 TB", "2 TB", "4 TB"], on: 1 },
        option2: { label: "Cuotas", values: ["Contado", "6 meses", "12 meses"], on: 2 },
        details: ["Especificaciones completas", "Benchmarks", "Garantía y soporte"],
      },
      bag: [
        { name: "PC Forja 1440p", variant: "2 TB · 12 cuotas", price: "RD$ 118,000", img: `${ND}/prebuild-tower.webp`, qty: 1 },
        { name: "Teclado 75 % Hot-swap", variant: "Lineal", price: "RD$ 5,900", img: `${ND}/teclado.webp`, qty: 1 },
      ],
      subtotal: "RD$ 123,900",
      shipping: "Gratis",
      total: "RD$ 123,900",
      collections: [
        { name: "Tarjetas gráficas", img: `${ND}/gpu-hero.webp`, count: "24 modelos" },
        { name: "PCs armadas", img: `${ND}/prebuild-tower.webp`, count: "6 configuraciones" },
        { name: "Periféricos", img: `${ND}/teclado.webp`, count: "40+ productos" },
      ],
      ship: [
        { zone: "Santiago", time: "Mismo día", price: "Gratis +RD$ 10,000" },
        { zone: "Santo Domingo", time: "24 h", price: "RD$ 350" },
        { zone: "Resto del país", time: "24–48 h", price: "RD$ 450" },
      ],
      perks: ["Garantía local", "12 cuotas", "Ensamblaje gratis"],
    },
  },

  home: {
    id: "home",
    kind: "shop",
    brand: "Casa Lino",
    tagline: "Muebles & hogar · Santo Domingo",
    domain: "casalino.do",
    mark: "chair",
    fonts: { head: "'Newsreader', Georgia, serif", body: "'Manrope', system-ui, sans-serif", headWeight: 500, headItalicEm: true },
    colors: { bg: "#F5EFE6", ink: "#2C261F", accent: "#6B7A45", soft: "#E7DECF" },
    heroStyle: "full",
    promo: "Entrega e instalación gratis en Santo Domingo en muebles grandes",
    nav: ["Sala", "Comedor", "Dormitorio", "Exterior", "Decoración"],
    phone: "(809) 555-0124",
    hero: {
      img: `${LN}/living.webp`,
      kicker: "Muebles de madera y fibras naturales",
      title: "Una casa que",
      em: "se siente fresca.",
      sub: "Muebles de caoba, ratán y lino hechos para el clima del Caribe. Visita el showroom o compra en línea.",
      cta: "Comprar la sala",
      cta2: "Visitar showroom",
      badges: ["Madera certificada", "Entrega e instalación", "Hasta 18 cuotas"],
    },
    services: { kicker: "", title: "", items: [] },
    about: {
      kicker: "El taller",
      title: "Ebanistas en Villa Mella desde hace dos generaciones",
      body: "Cada mesa sale de nuestro taller con la firma de quien la hizo. Ratán tejido a mano y telas que aguantan sol y salitre.",
      img: `${LN}/rattan.webp`,
      img2: `${LN}/cestas.webp`,
      points: ["Caoba y roble certificados", "Telas para exterior", "Garantía de 5 años"],
    },
    gallery: {
      kicker: "Ambientes",
      title: "Inspiración del showroom",
      imgs: [{ src: `${LN}/living.webp` }, { src: `${LN}/dining.webp` }, { src: `${LN}/bedroom.webp` }, { src: `${LN}/pool.webp` }],
    },
    faq: [
      { q: "¿Incluye instalación?", a: "Sí, en Santo Domingo y Santiago para muebles grandes." },
      { q: "¿Hacen a medida?", a: "Mesas y sofás a medida en 4–6 semanas." },
      { q: "¿Cuánto tarda la entrega?", a: "Stock: 3 días. A pedido: 4–6 semanas." },
    ],
    location: { address: "Local 300 · Arroyo Hondo", area: "Santo Domingo", hours: HOURS_WEEK, note: "Showroom de 800 m² · Parqueo amplio" },
    cta: { title: "¿Amueblando desde cero?", sub: "Mándanos las medidas y te armamos una propuesta.", button: "Asesoría por WhatsApp" },
    footer: {
      blurb: "Tienda de muebles ficticia creada como demo por Nativa.",
      cols: [
        { t: "Tienda", l: ["Sala", "Comedor", "Dormitorio", "Exterior"] },
        { t: "Ayuda", l: ["Entregas", "A medida", "Garantía"] },
      ],
    },
    shop: {
      cats: ["Todo", "Sala", "Comedor", "Dormitorio", "Exterior", "Deco"],
      products: [
        { img: `${LN}/living.webp`, name: "Sofá Arena · 3 puestos", desc: "Lino lavado · roble", price: "RD$ 68,500", tag: "Más vendido" },
        { img: `${LN}/dining.webp`, name: "Mesa Noguera · 6", desc: "Caoba maciza", price: "RD$ 54,000" },
        { img: `${LN}/rattan.webp`, name: "Butaca Ratán", desc: "Tejido a mano", price: "RD$ 18,900", tag: "Nuevo" },
        { img: `${LN}/bedroom.webp`, name: "Cama Brisa Queen", desc: "Roble + lino", price: "RD$ 46,000", low: true, tag: "Quedan 2" },
        { img: `${LN}/cestas.webp`, name: "Cestas Jarabacoa · 3", desc: "Fibra natural", price: "RD$ 3,600" },
        { img: `${LN}/pool.webp`, name: "Tumbona Playa", desc: "Teca · exterior", price: "RD$ 24,500", was: "RD$ 28,000", tag: "-12 %" },
      ],
      pdp: {
        imgs: [`${LN}/living.webp`, `${LN}/rattan.webp`, `${LN}/cestas.webp`],
        name: "Sofá Arena · 3 puestos",
        price: "RD$ 68,500",
        tag: "Hecho en RD · 5 años de garantía",
        desc: "Estructura de roble, cojines de espuma de alta densidad y funda de lino lavado desmontable. 220 × 95 cm.",
        option: { label: "Tela", values: ["Arena", "Oliva", "Terracota"], on: 0 },
        option2: { label: "Medida", values: ["190 cm", "220 cm", "260 cm"], on: 1 },
        details: ["Medidas y materiales", "Cuidado de la tela", "Entrega e instalación"],
      },
      bag: [
        { name: "Sofá Arena · 3 puestos", variant: "Arena · 220 cm", price: "RD$ 68,500", img: `${LN}/living.webp`, qty: 1 },
        { name: "Cestas Jarabacoa · 3", variant: "Natural", price: "RD$ 3,600", img: `${LN}/cestas.webp`, qty: 1 },
      ],
      subtotal: "RD$ 72,100",
      shipping: "Gratis + instalación",
      total: "RD$ 72,100",
      collections: [
        { name: "Sala", img: `${LN}/living.webp`, count: "32 piezas" },
        { name: "Comedor", img: `${LN}/dining.webp`, count: "18 piezas" },
        { name: "Exterior", img: `${LN}/pool.webp`, count: "14 piezas" },
      ],
      ship: [
        { zone: "Santo Domingo", time: "3 días", price: "Gratis + instalación" },
        { zone: "Santiago y Punta Cana", time: "5 días", price: "RD$ 2,500" },
        { zone: "Resto del país", time: "7 días", price: "Cotizar" },
      ],
      perks: ["Instalación incluida", "18 cuotas", "Garantía 5 años"],
    },
  },

  other: {
    id: "other",
    kind: "shop",
    brand: "Despensa Brisa",
    tagline: "Productos de la tierra dominicana",
    domain: "despensabrisa.do",
    mark: "jar",
    fonts: { head: "'Fraunces', Georgia, serif", body: "'DM Sans', system-ui, sans-serif", headWeight: 600, headItalicEm: true },
    colors: { bg: "#F7F4EC", ink: "#1D2A1F", accent: "#2F7D4F", soft: "#E0ECDC" },
    heroStyle: "split",
    promo: "Caja regalo armada a tu gusto · Envío a todo el país",
    nav: ["Despensa", "Cajas regalo", "Productores", "Recetas"],
    phone: "(809) 555-0193",
    hero: {
      img: `${B}/cacao.webp`,
      img2: `${B}/farm.webp`,
      kicker: "Directo de productores dominicanos",
      title: "Sabe a",
      em: "campo dominicano.",
      sub: "Cacao de San Francisco, miel de Jarabacoa, sal de Montecristi y ají de Baní. Pequeños lotes, precio justo.",
      cta: "Comprar la despensa",
      cta2: "Armar caja regalo",
      badges: ["Comercio directo", "Lotes pequeños", "Envío nacional"],
    },
    services: { kicker: "", title: "", items: [] },
    about: {
      kicker: "Productores",
      title: "Conocemos a cada persona detrás de cada frasco",
      body: "Trabajamos con 14 familias productoras. Pagamos por adelantado y contamos su historia en cada etiqueta.",
      img: `${B}/farm.webp`,
      img2: `${B}/beans.webp`,
      points: ["14 familias productoras", "Pago justo por adelantado", "Frascos de vidrio retornables"],
    },
    gallery: {
      kicker: "De la tierra",
      title: "Lo que llegó esta semana",
      imgs: [{ src: `${B}/miel.webp` }, { src: `${B}/aji.webp` }, { src: `${B}/sal.webp` }, { src: `${B}/beans.webp` }],
    },
    faq: [
      { q: "¿Hacen cajas para empresas?", a: "Sí, con tarjeta personalizada desde 10 cajas." },
      { q: "¿Los productos son orgánicos?", a: "Varios tienen certificación; todos son de lotes pequeños." },
      { q: "¿Envían al exterior?", a: "Cajas regalo a EE. UU. vía courier." },
    ],
    location: { address: "Mercado de Gazcue · puesto 12", area: "Santo Domingo", hours: HOURS_WEEK, note: "Retiro en el mercado · Degustación los sábados" },
    cta: { title: "¿Regalo corporativo?", sub: "Armamos cajas con tu logo desde 10 unidades.", button: "Cotizar por WhatsApp" },
    footer: {
      blurb: "Tienda ficticia creada como demo por Nativa.",
      cols: [
        { t: "Despensa", l: ["Cacao", "Miel", "Sal", "Picantes"] },
        { t: "Ayuda", l: ["Envíos", "Cajas regalo", "Productores"] },
      ],
    },
    shop: {
      cats: ["Todo", "Cacao", "Miel", "Sal", "Picantes", "Cajas regalo"],
      products: [
        { img: `${B}/cacao.webp`, name: "Cacao en nibs · 250 g", desc: "San Francisco de Macorís", price: "RD$ 540", tag: "Favorito" },
        { img: `${B}/miel.webp`, name: "Miel de flor de café", desc: "Jarabacoa · 500 g", price: "RD$ 690" },
        { img: `${B}/sal.webp`, name: "Sal marina de Montecristi", desc: "Escamas · 200 g", price: "RD$ 380" },
        { img: `${B}/aji.webp`, name: "Salsa de ají gustoso", desc: "Baní · picor medio", price: "RD$ 420", tag: "Nuevo" },
        { img: `${B}/aceite.webp`, name: "Aceite de coco virgen", desc: "Samaná · 350 ml", price: "RD$ 610", low: true, tag: "Quedan 5" },
        { img: `${B}/beans.webp`, name: "Café de altura · 340 g", desc: "Constanza · grano", price: "RD$ 750" },
      ],
      pdp: {
        imgs: [`${B}/miel.webp`, `${B}/farm.webp`, `${B}/cacao.webp`],
        name: "Caja Despensa Brisa",
        price: "RD$ 2,450",
        tag: "5 productos · lista para regalar",
        desc: "Cacao, miel, sal, ají y café en una caja de madera reutilizable con tarjeta escrita a mano.",
        option: { label: "Tamaño", values: ["3 productos", "5 productos", "8 productos"], on: 1 },
        option2: { label: "Tarjeta", values: ["Sin tarjeta", "Con mensaje"], on: 1 },
        details: ["Qué incluye", "Productores", "Envíos y regalos"],
      },
      bag: [
        { name: "Caja Despensa Brisa", variant: "5 productos · con mensaje", price: "RD$ 2,450", img: `${B}/miel.webp`, qty: 1 },
        { name: "Cacao en nibs · 250 g", variant: "San Francisco", price: "RD$ 540", img: `${B}/cacao.webp`, qty: 2 },
      ],
      subtotal: "RD$ 3,530",
      shipping: "RD$ 250",
      total: "RD$ 3,780",
      collections: [
        { name: "Cacao y café", img: `${B}/beans.webp`, count: "8 productos" },
        { name: "Mieles", img: `${B}/miel.webp`, count: "4 productos" },
        { name: "Cajas regalo", img: `${B}/aceite.webp`, count: "3 tamaños" },
      ],
      ship: [
        { zone: "Santo Domingo", time: "24 h", price: "RD$ 250" },
        { zone: "Interior", time: "48 h", price: "RD$ 350" },
        { zone: "Retiro en el mercado", time: "Mismo día", price: "Gratis" },
      ],
      perks: ["Frascos retornables", "Tarjeta escrita a mano", "Comercio justo"],
    },
  },
};

export function miniSiteFor(id: string): MiniSite | undefined {
  return MINI_SITES[id];
}
