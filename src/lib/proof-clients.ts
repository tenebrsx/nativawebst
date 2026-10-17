/**
 * Homepage demo-concept gallery.
 *
 * IMPORTANT: every entry below is a DEMO CONCEPT for a fictional business,
 * not a client. Copy must describe what the demo shows, never claim results
 * (no "live in X days", lead counts, etc.). When real client work exists,
 * add it with `isClient: true` and verifiable facts only.
 *
 * To add a client:
 * 1. Copy an object below (set `featured: true` on at most one).
 * 2. Drop a screenshot at `public/clients/{id}.jpg` (or .png / .webp)
 *    and set `screenshot: "/clients/{id}.jpg"`.
 * 3. Optional mark: `logo: "/clients/{id}-mark.svg"`.
 * 4. `href` can be the live domain or a `/demo/...` path.
 *
 * Until a screenshot exists, the `scene` CSS mock is shown.
 */

export type ProofScene = "clinic" | "villas" | "shop" | "legal" | "build" | "cafe" | "auto";

export type ProofClient = {
  id: string;
  featured?: boolean;
  scene: ProofScene;
  screenshot?: string;
  logo?: string;
  href?: string;
  urlLabel?: string;
  mark: string;
  nameEs: string;
  nameEn: string;
  placeEs: string;
  placeEn: string;
  industryEs: string;
  industryEn: string;
  resultEs: string;
  resultEn: string;
  bodyEs: string;
  bodyEn: string;
  metricEs: string;
  metricEn: string;
  beforeEs: string;
  beforeEn: string;
  afterEs: string;
  afterEn: string;
};

export const PROOF_CLIENTS: ProofClient[] = [
  {
    id: "sdq-dental",
    featured: true,
    scene: "clinic",
    href: "/demo/sdq-dental",
    urlLabel: "nativastudio.com.do/demo/sdq-dental",
    screenshot: "/pv/clients/sdq-dental.webp",
    logo: "/clients/sdq-dental-mark.svg",
    mark: "SD",
    nameEs: "SDQ Dental Care",
    nameEn: "SDQ Dental Care",
    placeEs: "Naco",
    placeEn: "Naco",
    industryEs: "Clínica",
    industryEn: "Clinic",
    resultEs: "Clínica dental: citas que llegan por WhatsApp",
    resultEn: "Dental clinic: appointments that arrive on WhatsApp",
    bodyEs: "En este demo, un toque abre WhatsApp con el tratamiento ya escrito. La clínica responde en un solo canal, no entre DMs de Instagram.",
    bodyEn: "In this demo, one tap opens WhatsApp with the treatment already written. The clinic answers in one channel, not across Instagram DMs.",
    metricEs: "Concepto de demo",
    metricEn: "Demo concept",
    beforeEs: "DMs de Instagram de madrugada",
    beforeEn: "Overnight Instagram DMs",
    afterEs: "Lead de WhatsApp con el servicio",
    afterEn: "WhatsApp lead with the service named",
  },
  {
    id: "punta-cana-villas",
    scene: "villas",
    href: "/demo/punta-cana-villas",
    urlLabel: "nativastudio.com.do/demo/punta-cana-villas",
    screenshot: "/pv/clients/punta-cana-villas.webp",
    logo: "/clients/punta-cana-villas-mark.svg",
    mark: "PC",
    nameEs: "Punta Cana Villas",
    nameEn: "Punta Cana Villas",
    placeEs: "Cap Cana",
    placeEn: "Cap Cana",
    industryEs: "Villas",
    industryEn: "Villas",
    resultEs: "Villas: fechas y tarifas claras antes del chat",
    resultEn: "Villas: dates and rates clear before the chat",
    bodyEs: "USD/DOP en la página. WhatsApp solo para el recorrido.",
    bodyEn: "USD/DOP on the page. WhatsApp only for the walkthrough.",
    metricEs: "Demo",
    metricEn: "Demo",
    beforeEs: "Mails de “¿cuánto la noche?”",
    beforeEn: "“How much per night?” emails",
    afterEs: "Chat con fechas y villa",
    afterEn: "Chat already has dates + villa",
  },
  {
    id: "bavaro-swim",
    scene: "shop",
    href: "/demo/bavaro-swim",
    urlLabel: "nativastudio.com.do/demo/bavaro-swim",
    screenshot: "/pv/clients/bavaro-swim.webp",
    logo: "/clients/bavaro-swim-mark.svg",
    mark: "BS",
    nameEs: "Bávaro Swim",
    nameEn: "Bávaro Swim",
    placeEs: "Santo Domingo",
    placeEn: "Santo Domingo",
    industryEs: "Tienda",
    industryEn: "Shop",
    resultEs: "Tienda: producto y talla ya escritos en el chat",
    resultEn: "Shop: product and size already in the chat",
    bodyEs: "Eligen en el celular. El mensaje llega con la pregunta.",
    bodyEn: "They pick it on mobile. The message arrives with the question.",
    metricEs: "Demo",
    metricEn: "Demo",
    beforeEs: "Carrito abandonado, sin nombre",
    beforeEn: "Abandoned cart, no name",
    afterEs: "WhatsApp con producto y talla",
    afterEn: "WhatsApp with product + size",
  },
  {
    id: "naco-legal",
    scene: "legal",
    href: "/demo/naco-legal",
    urlLabel: "nativastudio.com.do/demo/naco-legal",
    screenshot: "/pv/clients/naco-legal.webp",
    logo: "/clients/naco-legal-mark.svg",
    mark: "NL",
    nameEs: "Naco Law Group",
    nameEn: "Naco Law Group",
    placeEs: "Naco",
    placeEn: "Naco",
    industryEs: "Legal",
    industryEn: "Legal",
    resultEs: "Bufete: consultas desde la web, no desde la recepción",
    resultEn: "Law firm: consults from the site, not the front desk",
    bodyEs: "Áreas de práctica claras. WhatsApp para agendar, no para explicar el bufete.",
    bodyEn: "Practice areas on the page. WhatsApp to book, not to explain the firm.",
    metricEs: "Demo",
    metricEn: "Demo",
    beforeEs: "Llamadas perdidas al conmutador",
    beforeEn: "Missed calls at the switchboard",
    afterEs: "WhatsApp con el asunto ya escrito",
    afterEn: "WhatsApp with the matter already named",
  },
  {
    id: "terrenas-coffee",
    scene: "cafe",
    href: "/demo/terrenas-coffee",
    urlLabel: "nativastudio.com.do/demo/terrenas-coffee",
    screenshot: "/pv/clients/terrenas-coffee.webp",
    logo: "/clients/terrenas-coffee-mark.svg",
    mark: "LT",
    nameEs: "Café Terrenas",
    nameEn: "Café Terrenas",
    placeEs: "Las Terrenas",
    placeEn: "Las Terrenas",
    industryEs: "Marca",
    industryEn: "Brand",
    resultEs: "Café: pedidos con tueste y destino",
    resultEn: "Coffee: orders with roast and destination",
    bodyEs: "La tienda muestra el café. WhatsApp cierra el envío.",
    bodyEn: "The shop shows the coffee. WhatsApp closes the shipment.",
    metricEs: "Demo",
    metricEn: "Demo",
    beforeEs: "DM pidiendo lista de precios",
    beforeEn: "DMs asking for a price list",
    afterEs: "Chat con tueste y kilos",
    afterEn: "Chat with roast and kilos",
  },
  {
    id: "constructora-aybar",
    scene: "build",
    href: "/demo/constructora-aybar",
    urlLabel: "nativastudio.com.do/demo/constructora-aybar",
    screenshot: "/pv/clients/constructora-aybar.webp",
    logo: "/clients/constructora-aybar-mark.svg",
    mark: "CA",
    nameEs: "Constructora Aybar",
    nameEn: "Constructora Aybar",
    placeEs: "Santo Domingo",
    placeEn: "Santo Domingo",
    industryEs: "Obra",
    industryEn: "Build",
    resultEs: "Constructora: metraje y zona antes de la visita",
    resultEn: "Builder: square meters and zone before the visit",
    bodyEs: "El visitante llega con el proyecto. WhatsApp no es un “info pls”.",
    bodyEn: "They arrive with the project. WhatsApp is not “info pls”.",
    metricEs: "Demo",
    metricEn: "Demo",
    beforeEs: "PDF genérico por correo",
    beforeEn: "Generic PDF over email",
    afterEs: "Chat con m² y zona",
    afterEn: "Chat with m² and zone",
  },
];
