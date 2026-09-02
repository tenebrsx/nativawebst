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
    title: "Punta Cana Villas",
    clientName: "Punta Cana Villas",
    industry: "Bienes Raíces & Alquiler de Lujo",
    category: "realestate",
    description: "Colección privada en Cap Cana: fechas y moneda en la ficha, hold por WhatsApp con la villa ya escrita.",
    highlights: ["Hold por WhatsApp", "USD y DOP en la ficha", "Seis villas en Cap Cana", "Fechas en el chat"],
    demoUrl: "/demo/punta-cana-villas",
    tags: ["Real Estate", "Vacation Rental", "Cap Cana", "High Conversion"],
    dateCreated: "2026-07-28",
    accentColor: "#C4A36A",
    whatsappMessage: "Hola Nativa, vi Punta Cana Villas (#punta-cana-villas) y quiero una colección así: fechas, USD/DOP y hold por WhatsApp.",
    badge: "Populares"
  },
  {
    id: "naco-legal",
    slug: "naco-legal",
    title: "Naco Law Group",
    clientName: "Naco Law Group",
    industry: "Firma de Abogados & Asesoría Corporativa",
    category: "legal",
    description: "Bufete en Naco: el área en la página, la consulta por WhatsApp con el asunto ya escrito.",
    highlights: ["Consulta por WhatsApp", "Societario en la ficha", "Equipo visible", "Sin conmutador"],
    demoUrl: "/demo/naco-legal",
    tags: ["Firma Legal", "Derecho Corporativo", "Naco", "WhatsApp"],
    dateCreated: "2026-07-30",
    accentColor: "#9A7340",
    whatsappMessage: "Hola Nativa, vi Naco Law Group (#naco-legal) y quiero un bufete así: el asunto en la web, la consulta por WhatsApp.",
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
    whatsappMessage: "Hola Nativa, vi el demo de SDQ Auto Import (#sdq-auto) y me interesa una plataforma digital para inventario de vehículos.",
    badge: "Alto Tráfico"
  },
  {
    id: "sdq-dental",
    slug: "sdq-dental",
    title: "SDQ Dental Care",
    clientName: "SDQ Dental Care",
    industry: "Salud, Odontología & Estética",
    category: "health",
    description: "Clínica en Naco: Maps, tratamientos con precio en DOP y WhatsApp con el servicio ya escrito.",
    highlights: ["WhatsApp con el tratamiento", "Precios en DOP", "Casos antes / después", "Citas desde Maps"],
    demoUrl: "/demo/sdq-dental",
    tags: ["Odontología", "Salud", "Naco", "Citas WhatsApp"],
    dateCreated: "2026-08-01",
    accentColor: "#0F6E6C",
    whatsappMessage: "Hola Nativa, vi la web de SDQ Dental Care (#sdq-dental) y quiero una clínica así: Maps, WhatsApp y tratamientos con precio.",
    badge: "Turismo Médico"
  },
  {
    id: "terrenas-coffee",
    slug: "terrenas-coffee",
    title: "Café Terrenas",
    clientName: "Café Terrenas",
    industry: "Café de Especialidad & Envío",
    category: "ecom",
    description: "Tueste en Las Terrenas: el kilo y el destino en la ficha, el pedido por WhatsApp en DOP.",
    highlights: ["Pedido por WhatsApp", "Geisha 2 kg a Piantini", "USD y DOP en la ficha", "Origen El Limón"],
    demoUrl: "/demo/terrenas-coffee",
    tags: ["E-Commerce", "Café de Especialidad", "Las Terrenas", "WhatsApp"],
    dateCreated: "2026-08-02",
    accentColor: "#B5673A",
    whatsappMessage: "Hola Nativa, vi Café Terrenas (#terrenas-coffee) y quiero una tienda así: tueste, kilos y destino en el chat.",
    badge: "E-Commerce"
  },
  {
    id: "constructora-aybar",
    slug: "constructora-aybar",
    title: "Constructora Aybar",
    clientName: "Constructora Aybar",
    industry: "Construcción & Dirección de Obra",
    category: "other",
    description: "Obra en Santo Domingo: m² y zona en la ficha, la visita por WhatsApp con el proyecto ya escrito.",
    highlights: ["Visita por WhatsApp", "Torre 18 niveles en Naco", "m² en el chat", "Obras con metraje"],
    demoUrl: "/demo/constructora-aybar",
    tags: ["Construcción", "Santo Domingo", "Naco", "WhatsApp"],
    dateCreated: "2026-08-04",
    accentColor: "#C65D2E",
    whatsappMessage: "Hola Nativa, vi Constructora Aybar (#constructora-aybar) y quiero una web así: m² y zona en el chat, visita por WhatsApp.",
    badge: "Obra"
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
