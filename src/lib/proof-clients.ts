/**
 * Homepage proof gallery.
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
    urlLabel: "sdqdental.do",
    screenshot: "/clients/sdq-dental.jpg",
    logo: "/clients/sdq-dental-mark.svg",
    mark: "SD",
    nameEs: "SDQ Dental Care",
    nameEn: "SDQ Dental Care",
    placeEs: "Naco",
    placeEn: "Naco",
    industryEs: "Clínica",
    industryEn: "Clinic",
    resultEs: "Citas antes de las 9am",
    resultEn: "Appointments before 9am",
    bodyEs: "Un toque en Maps abre WhatsApp con el tratamiento. Contestas desde el sillón, no en Instagram a las 11pm.",
    bodyEn: "Maps tap opens WhatsApp with the treatment. You answer from the chair, not Instagram at 11pm.",
    metricEs: "18 días a live",
    metricEn: "Live in 18 days",
    beforeEs: "DMs de Instagram de madrugada",
    beforeEn: "Overnight Instagram DMs",
    afterEs: "Lead de WhatsApp con el servicio",
    afterEn: "WhatsApp lead with the service named",
  },
  {
    id: "punta-cana-villas",
    scene: "villas",
    href: "/demo/punta-cana-villas",
    urlLabel: "puntacanavillas.do",
    screenshot: "/clients/punta-cana-villas.jpg",
    logo: "/clients/punta-cana-villas-mark.svg",
    mark: "PC",
    nameEs: "Punta Cana Villas",
    nameEn: "Punta Cana Villas",
    placeEs: "Cap Cana",
    placeEn: "Cap Cana",
    industryEs: "Villas",
    industryEn: "Villas",
    resultEs: "Noches cotizadas, visitas agendadas",
    resultEn: "Nights quoted, visits booked",
    bodyEs: "USD/DOP en la página. WhatsApp solo para el recorrido.",
    bodyEn: "USD/DOP on the page. WhatsApp only for the walkthrough.",
    metricEs: "Fechas en el chat",
    metricEn: "Dates in the chat",
    beforeEs: "Mails de “¿cuánto la noche?”",
    beforeEn: "“How much per night?” emails",
    afterEs: "Chat con fechas y villa",
    afterEn: "Chat already has dates + villa",
  },
  {
    id: "bavaro-swim",
    scene: "shop",
    href: "/demo/bavaro-swim",
    urlLabel: "bavaroswim.do",
    screenshot: "/clients/bavaro-swim.jpg",
    logo: "/clients/bavaro-swim-mark.svg",
    mark: "BS",
    nameEs: "Bávaro Swim",
    nameEn: "Bávaro Swim",
    placeEs: "Santo Domingo",
    placeEn: "Santo Domingo",
    industryEs: "Tienda",
    industryEn: "Shop",
    resultEs: "La talla ya viene en el chat",
    resultEn: "The size is already in the chat",
    bodyEs: "Eligen en el celular. El mensaje llega con la pregunta.",
    bodyEn: "They pick it on mobile. The message arrives with the question.",
    metricEs: "Producto + talla",
    metricEn: "Product + size",
    beforeEs: "Carrito abandonado, sin nombre",
    beforeEn: "Abandoned cart, no name",
    afterEs: "WhatsApp con producto y talla",
    afterEn: "WhatsApp with product + size",
  },
  {
    id: "naco-legal",
    scene: "legal",
    href: "/demo/naco-legal",
    urlLabel: "nacolaw.do",
    screenshot: "/clients/naco-legal.jpg",
    logo: "/clients/naco-legal-mark.svg",
    mark: "NL",
    nameEs: "Naco Law Group",
    nameEn: "Naco Law Group",
    placeEs: "Naco",
    placeEn: "Naco",
    industryEs: "Legal",
    industryEn: "Legal",
    resultEs: "Consultas desde la web, no el teléfono de la recepcion",
    resultEn: "Consults from the site, not the front desk line",
    bodyEs: "Áreas de práctica claras. WhatsApp para agendar, no para explicar el bufete.",
    bodyEn: "Practice areas on the page. WhatsApp to book, not to explain the firm.",
    metricEs: "Agenda en el chat",
    metricEn: "Booking in chat",
    beforeEs: "Llamadas perdidas al conmutador",
    beforeEn: "Missed calls at the switchboard",
    afterEs: "WhatsApp con el asunto ya escrito",
    afterEn: "WhatsApp with the matter already named",
  },
  {
    id: "terrenas-coffee",
    scene: "cafe",
    href: "/demo/terrenas-coffee",
    urlLabel: "cafeterrenas.do",
    screenshot: "/clients/terrenas-coffee.jpg",
    logo: "/clients/terrenas-coffee-mark.svg",
    mark: "LT",
    nameEs: "Café Terrenas",
    nameEn: "Café Terrenas",
    placeEs: "Las Terrenas",
    placeEn: "Las Terrenas",
    industryEs: "Marca",
    industryEn: "Brand",
    resultEs: "Pedidos con tueste y destino, no un formulario vacío",
    resultEn: "Orders with roast and destination, not an empty form",
    bodyEs: "La tienda muestra el café. WhatsApp cierra el envío.",
    bodyEn: "The shop shows the coffee. WhatsApp closes the shipment.",
    metricEs: "Pedido en WA",
    metricEn: "Order in WA",
    beforeEs: "DM pidiendo lista de precios",
    beforeEn: "DMs asking for a price list",
    afterEs: "Chat con tueste y kilos",
    afterEn: "Chat with roast and kilos",
  },
  {
    id: "constructora-aybar",
    scene: "build",
    href: "/demo/constructora-aybar",
    urlLabel: "aybar.do",
    screenshot: "/clients/constructora-aybar.jpg",
    logo: "/clients/constructora-aybar-mark.svg",
    mark: "CA",
    nameEs: "Constructora Aybar",
    nameEn: "Constructora Aybar",
    placeEs: "Santo Domingo",
    placeEn: "Santo Domingo",
    industryEs: "Obra",
    industryEn: "Build",
    resultEs: "Metraje y presupuesto antes de la visita",
    resultEn: "Square meters and budget before the site visit",
    bodyEs: "El visitante llega con el proyecto. WhatsApp no es un “info pls”.",
    bodyEn: "They arrive with the project. WhatsApp is not “info pls”.",
    metricEs: "m² en el mensaje",
    metricEn: "m² in the message",
    beforeEs: "PDF genérico por correo",
    beforeEn: "Generic PDF over email",
    afterEs: "Chat con m² y zona",
    afterEn: "Chat with m² and zone",
  },
];
