export const WHATSAPP_NUMBER = "18093588113";

export function waUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function openWhatsApp(text: string) {
  const url = waUrl(text);
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) window.location.href = url;
}

export function openWhatsAppFunnel(source = "manual", need?: string) {
  window.dispatchEvent(new CustomEvent("nativa:open-funnel", { detail: { source, need } }));
}

export type FunnelAnswers = {
  need: string;
  industry: string;
  timing: string;
  budget: string;
  name: string;
  page: string;
  source: string;
};

export function buildFunnelMessage(lang: "es" | "en", a: FunnelAnswers) {
  if (lang === "es") {
    return [
      "Hola Nativa 👋",
      "Vengo de nativa.studio y ya armé mi brief:",
      "",
      `• Necesito: ${a.need}`,
      `• Rubro: ${a.industry}`,
      `• Plazo: ${a.timing}`,
      a.budget ? `• Presupuesto: ${a.budget}` : null,
      a.name ? `• Nombre: ${a.name}` : null,
      `• Origen: ${a.source}`,
      `• Página: ${a.page}`,
      "",
      "¿Me pueden armar una propuesta y la llamada de 15 min?",
    ]
      .filter(Boolean)
      .join("\n");
  }

  return [
    "Hi Nativa 👋",
    "I came from nativa.studio with a short brief:",
    "",
    `• Need: ${a.need}`,
    `• Industry: ${a.industry}`,
    `• Timing: ${a.timing}`,
    a.budget ? `• Budget: ${a.budget}` : null,
    a.name ? `• Name: ${a.name}` : null,
    `• Source: ${a.source}`,
    `• Page: ${a.page}`,
    "",
    "Can you send a proposal and book the 15-min alignment call?",
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildQuoteMessage(opts: {
  lang: "es" | "en";
  tierName: string;
  addonLabels: string[];
  stackLabels: string[];
  support: boolean;
  oneTime: string;
  monthly: string;
}) {
  const extras = opts.addonLabels.length
    ? opts.addonLabels.map((l) => `  – ${l}`).join("\n")
    : opts.lang === "es"
      ? "  – Ninguno"
      : "  – None";
  const stack = opts.stackLabels.length
    ? opts.stackLabels.map((l) => `  – ${l}`).join("\n")
    : opts.lang === "es"
      ? "  – Después, si encaja"
      : "  – Later, if it fits";

  if (opts.lang === "es") {
    return [
      "Hola Nativa 👋",
      "Quiero esta configuración del cotizador:",
      "",
      `• Plan: ${opts.tierName}`,
      `• Extras:\n${extras}`,
      `• Stack (CRM / AI):\n${stack}`,
      `• Soporte mensual: ${opts.support ? "Sí — " + opts.monthly : "No"}`,
      `• Inversión única (web): ${opts.oneTime}`,
      "",
      "Esto no es un cobro. ¿Agendamos los 15 min para confirmar el spec?",
    ].join("\n");
  }

  return [
    "Hi Nativa 👋",
    "I want this quote from the configurator:",
    "",
    `• Plan: ${opts.tierName}`,
    `• Add-ons:\n${extras}`,
    `• Stack (CRM / AI):\n${stack}`,
    `• Monthly support: ${opts.support ? "Yes — " + opts.monthly : "No"}`,
    `• One-time (web): ${opts.oneTime}`,
    "",
    "This is a brief, not a charge. Can we book 15 min to lock the spec?",
  ].join("\n");
}

export function buildContactMessage(opts: {
  lang: "es" | "en";
  name: string;
  message: string;
  budget: string;
}) {
  if (opts.lang === "es") {
    return [
      `Hola Nativa 👋 Soy ${opts.name || "un prospecto"}`,
      opts.message ? `Negocio: ${opts.message}` : null,
      opts.budget ? `Presupuesto: ${opts.budget}` : null,
      "",
      "Envié el formulario del sitio y prefiero seguir por WhatsApp.",
    ]
      .filter(Boolean)
      .join("\n");
  }

  return [
    `Hi Nativa 👋 I'm ${opts.name || "a prospect"}`,
    opts.message ? `Business: ${opts.message}` : null,
    opts.budget ? `Budget: ${opts.budget}` : null,
    "",
    "I submitted the site form and would rather continue on WhatsApp.",
  ]
    .filter(Boolean)
    .join("\n");
}
