import type { FaqItem, OfferItem } from "./json-ld";
import type { RelatedLink } from "./local-content";

/**
 * SEO Wave 1 sales pages (Spanish only — indexed in Spanish; the EN toggle shows this same copy).
 * Prices: página web estándar desde RD$20,940 · tienda online desde RD$35,000 · pago único.
 * BORRADOR: support tiers (Estándar incluido / Activo +RD$3,000/mes) come from the pricing questionnaire
 * that is not live yet. Pages with `draft` show a visible note until Tenebris confirms.
 */
export type SalesPageId = "pagina-web-para-mi-negocio" | "precio-pagina-web" | "tienda-online" | "mantenimiento-web";

export type PriceCard = { name: string; price: string; unit: string; points: string[]; note?: string };

export type SalesPageCopy = {
  id: SalesPageId;
  path: `/${string}`;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  label: string;
  h1: string;
  answer: string;
  cta: string;
  need: string;
  secondary?: { href: string; label: string };
  pricesTitle?: string;
  prices?: PriceCard[];
  draft?: string;
  blocksTitle: string;
  blocks: Array<{ title: string; body: string }>;
  stepsTitle?: string;
  steps?: Array<{ num: string; title: string; body: string }>;
  faqs: FaqItem[];
  relatedTitle: string;
  related: RelatedLink[];
  serviceType: string;
  offers: OfferItem[];
  crumbs: Array<{ name: string; path: string }>;
};

const SOPORTE_DRAFT =
  "Borrador: los planes de soporte (Estándar incluido / Activo +RD$3,000 al mes) están por confirmar y pueden cambiar.";

const WEB: PriceCard = {
  name: "Página web",
  price: "RD$20,940",
  unit: "desde · pago único",
  points: [
    "Diseño a medida, hecho para verse bien en el celular",
    "Botón directo a tu WhatsApp",
    "Conectada a tu ficha de Google Maps",
    "Lista para que Google la lea (títulos, datos y estructura)",
  ],
};
const TIENDA: PriceCard = {
  name: "Tienda online",
  price: "RD$35,000",
  unit: "desde · pago único",
  points: [
    "Todo lo de la página web",
    "Catálogo con fotos, precios y categorías",
    "Pedidos y pagos en línea, o pedido directo por WhatsApp",
    "Tú puedes subir y cambiar productos",
  ],
};

export const salesCopy: Record<SalesPageId, SalesPageCopy> = {
  "pagina-web-para-mi-negocio": {
    id: "pagina-web-para-mi-negocio",
    path: "/pagina-web-para-mi-negocio",
    keyword: "necesito una página web para mi negocio",
    metaTitle: "¿Necesitas una página web para tu negocio? | Nativa",
    metaDescription:
      "Una página web para tu negocio en República Dominicana: con estilo, terminada, conectada a WhatsApp y Google Maps. Desde RD$20,940, pago único.",
    label: "Página web para tu negocio",
    h1: "Una página web para tu negocio, hecha para que te encuentren y te escriban",
    answer:
      "Si estás pensando “necesito una página web para mi negocio”, esto es lo que hacemos en Nativa: una web con estilo, terminada y funcional, que se ve bien en el celular, te pone en Google y Google Maps y manda a tus clientes directo a tu WhatsApp. Desde RD$20,940, pago único. Para tiendas con catálogo y pagos, desde RD$35,000.",
    cta: "Escríbenos por WhatsApp",
    need: "Página web para mi negocio",
    secondary: { href: "/#pricing", label: "Arma tu propio sitio" },
    pricesTitle: "Cuánto cuesta",
    prices: [WEB, TIENDA],
    blocksTitle: "Lo que resuelve una página web bien hecha",
    blocks: [
      {
        title: "Que te encuentren cuando te buscan",
        body: "Quien busca “cerca de mí” en Google o Maps encuentra tu nombre, tu horario y tu ubicación, no la de otro.",
      },
      {
        title: "Que te escriban en un toque",
        body: "Cada botón abre WhatsApp con el servicio ya nombrado. Nada de formularios que nadie revisa.",
      },
      {
        title: "Que se vea como lo que eres",
        body: "Diseño a medida, no una plantilla vieja. Tu negocio se ve serio en el celular, que es donde te miran.",
      },
      {
        title: "Que sea tuya y esté terminada",
        body: "Entregamos la web completa y funcionando. Con el dominio te ayudamos para que quede a nombre de tu negocio.",
      },
    ],
    stepsTitle: "Cómo trabajamos",
    steps: [
      { num: "01", title: "Una charla corta", body: "Por WhatsApp o llamada: qué vendes, a quién y cómo te escriben hoy." },
      { num: "02", title: "Vista previa en tu celular", body: "Un enlace real para revisarla como la vería un cliente, no un PDF." },
      { num: "03", title: "Ajustes y publicación", body: "La ajustamos contigo y la publicamos conectada a WhatsApp y Google Maps." },
    ],
    faqs: [
      {
        q: "¿Quién hace páginas web para negocios en República Dominicana?",
        a: "Nativa es un estudio web en Santo Domingo que hace páginas web a medida para negocios de todo el país, conectadas a WhatsApp y Google Maps.",
      },
      {
        q: "¿Cuánto cuesta una página web para mi negocio?",
        a: "Desde RD$20,940, pago único. Una tienda online con catálogo y pagos empieza en RD$35,000. Puedes ver los detalles en la página de precios.",
      },
      {
        q: "¿Tengo que pagar una mensualidad?",
        a: "No hay mensualidad obligatoria. El soporte básico va incluido y hay un plan mensual opcional si quieres cambios cada mes.",
      },
      {
        q: "¿Necesito tener dominio?",
        a: "No. Si no tienes uno, te ayudamos a conseguirlo para que quede a nombre de tu negocio.",
      },
      {
        q: "¿Puedo pedir cambios después?",
        a: "Sí. Las correcciones van incluidas y, si quieres cambios frecuentes, existe el plan de mantenimiento mensual.",
      },
    ],
    relatedTitle: "Sigue leyendo",
    related: [
      { href: "/precio-pagina-web", label: "Precio de una página web", sub: "Qué incluye y qué cambia el precio." },
      { href: "/tienda-online", label: "Tienda online", sub: "Catálogo, pedidos y pagos." },
      { href: "/servicios/diseno-web", label: "Diseño y desarrollo web", sub: "Cómo diseñamos y construimos." },
      { href: "/santo-domingo", label: "Santo Domingo", sub: "Páginas web en la capital." },
    ],
    serviceType: "Diseño de páginas web para negocios",
    offers: [
      { name: "Página web (desde)", price: 20940 },
      { name: "Tienda online (desde)", price: 35000 },
    ],
    crumbs: [
      { name: "Inicio", path: "/" },
      { name: "Página web para tu negocio", path: "/pagina-web-para-mi-negocio" },
    ],
  },

  "precio-pagina-web": {
    id: "precio-pagina-web",
    path: "/precio-pagina-web",
    keyword: "cuánto cuesta una página web en RD",
    metaTitle: "Cuánto cuesta una página web en RD | Nativa",
    metaDescription:
      "Precio de una página web en República Dominicana: desde RD$20,940 una web y desde RD$35,000 una tienda online, pago único. Qué incluye y qué preguntar antes de pagar.",
    label: "Precios",
    h1: "Cuánto cuesta una página web en República Dominicana",
    answer:
      "En Nativa, una página web para tu negocio cuesta desde RD$20,940 y una tienda online desde RD$35,000, en un solo pago. El precio final depende de cuántas páginas necesitas, si vendes en línea y qué extras quieres (agente de WhatsApp, CRM, otro idioma). No hay mensualidad obligatoria.",
    cta: "Cotiza por WhatsApp",
    need: "Precio de página web",
    secondary: { href: "/#pricing", label: "Calcula la tuya" },
    pricesTitle: "Precios desde",
    prices: [
      WEB,
      TIENDA,
      {
        name: "Soporte",
        price: "Incluido",
        unit: "Estándar · Activo +RD$3,000/mes",
        points: [
          "Estándar (incluido): correcciones y ayuda por WhatsApp",
          "Activo (opcional): cambios cada mes, actualizaciones y monitoreo",
        ],
        note: "Borrador: por confirmar",
      },
    ],
    draft: SOPORTE_DRAFT,
    blocksTitle: "Qué sube o baja el precio",
    blocks: [
      { title: "Cuántas páginas", body: "Una web de una página no cuesta lo mismo que una con servicios, equipo y ubicaciones." },
      { title: "Si vendes en línea", body: "Catálogo, carrito y pagos convierten la web en tienda online: desde RD$35,000." },
      { title: "Extras", body: "Agente de WhatsApp con IA, CRM para tus clientes, versión en inglés: se suman solo si los necesitas." },
      { title: "Lo que pagas una vez y lo que no", body: "La web es pago único. El dominio se renueva cada año y el plan de soporte mensual es opcional." },
    ],
    stepsTitle: "Qué preguntar antes de pagarle a cualquiera",
    steps: [
      { num: "01", title: "¿La web queda a mi nombre?", body: "La web, el dominio y el contenido deberían ser tuyos." },
      { num: "02", title: "¿Hay pagos mensuales escondidos?", body: "Pregunta qué es obligatorio y qué es opcional, por escrito." },
      { num: "03", title: "¿Se conecta a WhatsApp y Google Maps?", body: "Si no te escriben ni te encuentran, la web no está trabajando." },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta una página web en República Dominicana?",
        a: "En Nativa, desde RD$20,940 en un solo pago. Una tienda online empieza en RD$35,000.",
      },
      {
        q: "¿Es pago único o mensual?",
        a: "La página web es pago único. No hay mensualidad obligatoria; el plan de soporte con cambios cada mes es opcional.",
      },
      {
        q: "¿Por qué hay páginas web mucho más baratas?",
        a: "Muchas usan plantillas genéricas o se entregan a medias. Pregunta qué incluye, de quién es la web y si queda conectada a WhatsApp y Google Maps.",
      },
      {
        q: "¿Cuánto cuesta mantener una página web al mes?",
        a: "El soporte Estándar va incluido. Si quieres cambios cada mes, el plan Activo cuesta RD$3,000 al mes (precio por confirmar).",
      },
    ],
    relatedTitle: "Sigue leyendo",
    related: [
      { href: "/pagina-web-para-mi-negocio", label: "Página web para tu negocio", sub: "Lo que incluye y cómo trabajamos." },
      { href: "/tienda-online", label: "Tienda online", sub: "Desde RD$35,000." },
      { href: "/servicios/mantenimiento-web", label: "Mantenimiento web", sub: "Soporte Estándar y Activo." },
      { href: "/guias/que-incluye-sitio-web-profesional-rd", label: "Qué incluye una web profesional", sub: "Guía antes de contratar." },
    ],
    serviceType: "Diseño de páginas web",
    offers: [
      { name: "Página web (desde)", price: 20940 },
      { name: "Tienda online (desde)", price: 35000 },
    ],
    crumbs: [
      { name: "Inicio", path: "/" },
      { name: "Precios", path: "/precio-pagina-web" },
    ],
  },

  "tienda-online": {
    id: "tienda-online",
    path: "/tienda-online",
    keyword: "tienda online República Dominicana",
    metaTitle: "Tienda online en República Dominicana | Nativa",
    metaDescription:
      "Tu tienda online en RD: catálogo, pedidos y pagos en línea o por WhatsApp. Diseño a medida desde RD$35,000, pago único.",
    label: "Tienda online",
    h1: "Tu tienda online en República Dominicana, lista para vender",
    answer:
      "Una tienda online de Nativa es una página web con catálogo: tus productos con fotos y precio, un carrito, pagos en línea o pedido directo por WhatsApp, y un panel para que subas y cambies productos tú mismo. Desde RD$35,000, pago único.",
    cta: "Quiero mi tienda online",
    need: "Tienda online",
    secondary: { href: "/#pricing", label: "Arma tu propio sitio" },
    pricesTitle: "Precio",
    prices: [TIENDA],
    blocksTitle: "Lo que incluye",
    blocks: [
      { title: "Catálogo claro", body: "Categorías, fotos, precios y variantes (talla, color) que se entienden en el celular." },
      { title: "Pedidos como te compran en RD", body: "Pago en línea o pedido por WhatsApp con el producto y la cantidad ya escritos." },
      { title: "Tú la manejas", body: "Subes productos, cambias precios y marcas lo agotado sin depender de nadie." },
      { title: "Para que te encuentren", body: "Cada producto y categoría con su página, lista para Google, y conectada a tu ficha de Google Maps." },
    ],
    faqs: [
      { q: "¿Cuánto cuesta una tienda online?", a: "Desde RD$35,000, pago único. El precio final depende de cuántos productos y qué funciones necesitas." },
      { q: "¿Puedo cobrar en línea?", a: "Sí. También puedes recibir los pedidos por WhatsApp si así te compran tus clientes." },
      { q: "¿Puedo subir mis productos yo?", a: "Sí. Te dejamos un panel para que agregues, cambies o quites productos." },
      { q: "¿Qué tipo de negocios la usan?", a: "Tiendas de ropa, belleza, comida, artesanía y cualquier negocio que venda productos con precio fijo." },
    ],
    relatedTitle: "Sigue leyendo",
    related: [
      { href: "/precio-pagina-web", label: "Precios", sub: "Página web y tienda online." },
      { href: "/servicios/crm", label: "CRM para tus clientes", sub: "Cada pedido y cliente guardado." },
      { href: "/servicios/agentes-ia", label: "Agente de WhatsApp", sub: "Responde y toma pedidos." },
      { href: "/pagina-web-para-mi-negocio", label: "Página web para tu negocio", sub: "Si no vendes en línea." },
    ],
    serviceType: "Tienda online",
    offers: [{ name: "Tienda online (desde)", price: 35000 }],
    crumbs: [
      { name: "Inicio", path: "/" },
      { name: "Tienda online", path: "/tienda-online" },
    ],
  },

  "mantenimiento-web": {
    id: "mantenimiento-web",
    path: "/servicios/mantenimiento-web",
    keyword: "mantenimiento de páginas web",
    metaTitle: "Mantenimiento de páginas web en RD | Nativa",
    metaDescription:
      "Mantenimiento de tu página web: soporte Estándar incluido y plan Activo opcional con cambios cada mes. Sin mensualidad obligatoria.",
    label: "Mantenimiento web",
    h1: "Mantenimiento de tu página web: lo que va incluido y lo que es opcional",
    answer:
      "Tu página web no te obliga a pagar cada mes. El soporte Estándar va incluido: corregimos errores y te respondemos por WhatsApp. Si quieres que tu web cambie con tu negocio (precios, fotos, promociones), el plan Activo suma cambios cada mes, actualizaciones y monitoreo por RD$3,000 al mes.",
    cta: "Pregunta por el soporte",
    need: "Mantenimiento web",
    pricesTitle: "Planes de soporte",
    prices: [
      {
        name: "Estándar",
        price: "Incluido",
        unit: "con tu página web",
        points: ["Corrección de errores", "Respuesta por WhatsApp"],
      },
      {
        name: "Activo",
        price: "+RD$3,000",
        unit: "al mes · opcional",
        points: ["Cambios cada mes", "Actualizaciones", "Monitoreo"],
        note: "Borrador: por confirmar",
      },
    ],
    draft: SOPORTE_DRAFT,
    blocksTitle: "Cuándo te conviene el plan Activo",
    blocks: [
      { title: "Tus precios cambian seguido", body: "Menú, servicios o promociones que se mueven cada mes." },
      { title: "Publicas novedades", body: "Productos nuevos, temporadas, eventos." },
      { title: "No quieres pensar en la web", body: "Nos escribes por WhatsApp y el cambio se hace." },
    ],
    faqs: [
      { q: "¿Cuánto cuesta mantener una página web al mes?", a: "Nada obligatorio: el soporte Estándar va incluido. El plan Activo, con cambios cada mes, cuesta RD$3,000 al mes (precio por confirmar)." },
      { q: "¿Qué pasa si no tomo el plan Activo?", a: "Tu web sigue funcionando y las correcciones de errores siguen incluidas. Los cambios grandes se cotizan aparte." },
      { q: "¿El dominio va incluido?", a: "El dominio se renueva cada año con el proveedor. Te ayudamos a que quede a nombre de tu negocio." },
    ],
    relatedTitle: "Sigue leyendo",
    related: [
      { href: "/precio-pagina-web", label: "Precios", sub: "Lo que pagas una vez y lo que no." },
      { href: "/servicios", label: "Servicios", sub: "Web, Google Maps, CRM y agente de WhatsApp." },
      { href: "/pagina-web-para-mi-negocio", label: "Página web para tu negocio", sub: "Desde RD$20,940." },
    ],
    serviceType: "Mantenimiento de páginas web",
    offers: [{ name: "Soporte Activo (borrador)", price: 3000, unit: "MONTH" }],
    crumbs: [
      { name: "Inicio", path: "/" },
      { name: "Servicios", path: "/servicios" },
      { name: "Mantenimiento web", path: "/servicios/mantenimiento-web" },
    ],
  },
};
