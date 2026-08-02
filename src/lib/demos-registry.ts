export interface ClientDemo {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  category: "realestate" | "legal" | "automotive" | "health" | "ecom" | "saas" | "other";
  description: string;
  highlights: string[];
  demoUrl: string;
  tags: string[];
  dateCreated: string;
  accentColor: string;
  whatsappMessage: string;
  badge?: string;
}

export const clientDemos: ClientDemo[] = [
  {
    id: "punta-cana-villas",
    slug: "punta-cana-villas",
    title: "Punta Cana Luxury Villas & Estates",
    clientName: "Punta Cana Properties",
    industry: "Bienes Raíces & Alquiler de Lujo",
    category: "realestate",
    description: "Plataforma de alta gama para alquileres vacacionales y venta de villas en Cap Cana y Punta Cana con reservación rápida y soporte WhatsApp.",
    highlights: ["Galería HD de Propiedades", "Filtro por Ubicación y Capacidad", "Reserva Inmediata vía WhatsApp", "Conversión Multi-Moneda (USD/DOP)"],
    demoUrl: "/demo/punta-cana-villas",
    tags: ["Real Estate", "Vacation Rental", "Cap Cana", "High Conversion"],
    dateCreated: "2026-07-28",
    accentColor: "#0EA5E9",
    whatsappMessage: "Hola Altamar, vi el demo de Punta Cana Villas (#punta-cana-villas) y me interesa cotizar una plataforma vacacional como esta.",
    badge: "Populares"
  },
  {
    id: "naco-legal",
    slug: "naco-legal",
    title: "Nolasco & Almonte — Abogados & Asesores",
    clientName: "Firma Jurídica Naco",
    industry: "Firma de Abogados & Asesoría Corporativa",
    category: "legal",
    description: "Sitio web corporativo e imponente para firmas de abogados de alta jerarquía en Santo Domingo con reserva de consultas y áreas de práctica.",
    highlights: ["Presentación de Socios & Áreas", "Agendamiento de Consultas", "Diseño Sobrio Executive Blue", "Optimizado para Posicionamiento SEO"],
    demoUrl: "/demo/naco-legal",
    tags: ["Firma Legal", "Derecho Corporativo", "Santo Domingo", "Executive UI"],
    dateCreated: "2026-07-30",
    accentColor: "#0A1128",
    whatsappMessage: "Hola Altamar, vi el demo de Naco Law (#naco-legal) y quiero cotizar una plataforma corporativa legal para nuestra firma.",
    badge: "Corporativo"
  },
  {
    id: "sdq-auto",
    slug: "sdq-auto",
    title: "SDQ Auto Import — Live Stock & Showroom",
    clientName: "Importadora SDQ Auto",
    industry: "Venta & Importación de Vehículos",
    category: "automotive",
    description: "Catálogo interactivo de vehículos de lujo y cero kilómetros con calculadora de financiamiento y solicitud de prueba de manejo.",
    highlights: ["Inventario Filtrable", "Calculadora de Cuota Mensual", "Cotización de Comercio en Transito", "Formulario Express de Test Drive"],
    demoUrl: "/demo/sdq-auto",
    tags: ["Automotriz", "Importación", "Showroom", "Financiamiento"],
    dateCreated: "2026-07-31",
    accentColor: "#E11D48",
    whatsappMessage: "Hola Altamar, vi el demo de SDQ Auto Import (#sdq-auto) y me interesa una plataforma digital para inventario de vehículos.",
    badge: "Alto Tráfico"
  },
  {
    id: "sdq-dental",
    slug: "sdq-dental",
    title: "SDQ Dental Studio & Estética Oral",
    clientName: "Clínica Odontológica SDQ",
    industry: "Salud, Odontología & Estética",
    category: "health",
    description: "Experiencia clínica moderna y limpia enfocada en turismo médico dental, agenda de citas y transformación de sonrisas.",
    highlights: ["Galería Antes / Después", "Reserva de Valoración Online", "Sección de Turismo Médico", "Testimonios de Pacientes Internacionales"],
    demoUrl: "/demo/sdq-dental",
    tags: ["Odontología", "Salud", "Turismo Médico", "Citas Online"],
    dateCreated: "2026-08-01",
    accentColor: "#0D9488",
    whatsappMessage: "Hola Altamar, vi el demo de SDQ Dental Studio (#sdq-dental) y deseo cotizar la web para nuestra clínica odontológica.",
    badge: "Turismo Médico"
  },
  {
    id: "terrenas-coffee",
    slug: "terrenas-coffee",
    title: "Las Terrenas Specialty Artisanal Coffee",
    clientName: "Café Orgánico Las Terrenas",
    industry: "E-Commerce & Gastronomía Artesanal",
    category: "ecom",
    description: "Tienda virtual vibrante y sensorial para marcas artesanales de café de especialidad y productos gastronómicos dominicanos.",
    highlights: ["Carrito Checkout Integrado", "Suscripción Mensual de Café", "Historia de Cultivo Orgánico", "Optimizado para Móviles"],
    demoUrl: "/demo/terrenas-coffee",
    tags: ["E-Commerce", "Café de Especialidad", "Las Terrenas", "Suscripción"],
    dateCreated: "2026-08-02",
    accentColor: "#D97706",
    whatsappMessage: "Hola Altamar, vi el demo de Café Las Terrenas (#terrenas-coffee) y quiero una tienda online para nuestra marca gastronómica.",
    badge: "E-Commerce"
  }
];

export const demoCategories = [
  { id: "all", labelEs: "Todos los Demos", labelEn: "All Demos" },
  { id: "realestate", labelEs: "Bienes Raíces & Villas", labelEn: "Real Estate & Villas" },
  { id: "legal", labelEs: "Legal & Corporativo", labelEn: "Legal & Corporate" },
  { id: "automotive", labelEs: "Automotriz & Deallers", labelEn: "Automotive & Dealers" },
  { id: "health", labelEs: "Salud & Clínicas", labelEn: "Health & Medical" },
  { id: "ecom", labelEs: "E-Commerce & Marcas", labelEn: "E-Commerce & Brands" }
];
