import type { FaqItem } from "./json-ld";

/** Home FAQ (visible + FAQPage JSON-LD). Spanish only. No speed or ranking promises. */
export const HOME_FAQS: FaqItem[] = [
  {
    q: "¿Cuánto cuesta una página web en República Dominicana?",
    a: "En Nativa, una página web para tu negocio cuesta desde RD$20,940 y una tienda online desde RD$35,000, en un solo pago.",
  },
  {
    q: "¿Tengo que pagar una mensualidad?",
    a: "No hay mensualidad obligatoria. El soporte básico va incluido y hay un plan mensual opcional si quieres cambios cada mes.",
  },
  {
    q: "¿La página web se conecta a WhatsApp y Google Maps?",
    a: "Sí. Cada botón abre WhatsApp con el servicio ya nombrado, y la web queda conectada a tu ficha de Google Maps.",
  },
  {
    q: "¿Pueden agendar citas por WhatsApp por mí?",
    a: "Sí, con un agente de WhatsApp que responde, propone horario y toma los datos del cliente. Se cotiza cuando tu web ya recibe chats.",
  },
  {
    q: "¿Necesito tener dominio?",
    a: "No. Si no tienes uno, te ayudamos a conseguirlo a nombre de tu negocio.",
  },
];

export const HOME_SALES_LINKS = [
  { href: "/pagina-web-para-mi-negocio", label: "Página web para tu negocio", sub: "Desde RD$20,940" },
  { href: "/precio-pagina-web", label: "Precios", sub: "Qué incluye y qué no" },
  { href: "/tienda-online", label: "Tienda online", sub: "Desde RD$35,000" },
  { href: "/servicios/agentes-ia", label: "Agendar citas por WhatsApp", sub: "Agente de WhatsApp" },
  { href: "/servicios/mantenimiento-web", label: "Mantenimiento web", sub: "Soporte incluido" },
];
