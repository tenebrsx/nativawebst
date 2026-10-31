export const WHATSAPP_NUMBER = "18093588113";

export function waUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function openWhatsApp(text: string) {
  const url = waUrl(text);
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) window.location.href = url;
}

/** Short prefilled text for a direct chat. `need` is the page's topic, if any. */
export function directMessage(need?: string) {
  return need
    ? `Hola Nativa, vengo de su página y quiero hablar sobre: ${need}.`
    : "Hola Nativa, vengo de su página y quiero hablar sobre mi negocio.";
}

/**
 * Primary WhatsApp CTA: opens a direct chat with Nativa (wa.me), no questionnaire.
 * The quote questionnaire lives at /pricing-builder ("Cotizar" / "Arma tu precio").
 * `source` is kept for call-site readability / future analytics.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function openWhatsAppFunnel(source = "manual", need?: string) {
  openWhatsApp(directMessage(need));
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
      "Vengo de nativastudio.com.do y ya armé mi mensaje:",
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
    "I came from nativastudio.com.do with a short brief:",
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
  stackLabels?: string[];
  support: boolean;
  supportPrice: string;
  oneTime: string;
  monthly?: string;
}) {
  const es = opts.lang === "es";
  const extras = opts.addonLabels.length
    ? opts.addonLabels.map((l) => `  – ${l}`).join("\n")
    : es
      ? "  – Ninguno"
      : "  – None";
  const stackLines =
    opts.stackLabels && opts.stackLabels.length
      ? es
        ? [`• Módulos (CRM / IA):\n${opts.stackLabels.map((l) => `  – ${l}`).join("\n")}`]
        : [`• Stack (CRM / AI):\n${opts.stackLabels.map((l) => `  – ${l}`).join("\n")}`]
      : [];

  if (es) {
    return [
      "Hola Nativa 👋",
      "Quiero esta configuración del cotizador:",
      "",
      `• Plan: ${opts.tierName}`,
      `• Extras:\n${extras}`,
      ...stackLines,
      `• Soporte mensual: ${opts.support ? `Sí (${opts.supportPrice})` : "No"}`,
      "",
      `Inversión única estimada: ${opts.oneTime}`,
      opts.monthly ? `Total mensual estimado: ${opts.monthly}` : null,
      "",
      "Sé que es un estimado, no un cobro. ¿Me preparan el demo gratis y confirmamos el alcance en 15 minutos?",
    ]
      .filter((l) => l !== null)
      .join("\n");
  }

  return [
    "Hi Nativa 👋",
    "I want this quote from the configurator:",
    "",
    `• Plan: ${opts.tierName}`,
    `• Add-ons:\n${extras}`,
    ...stackLines,
    `• Monthly support: ${opts.support ? `Yes (${opts.supportPrice})` : "No"}`,
    "",
    `Estimated one-time: ${opts.oneTime}`,
    opts.monthly ? `Estimated monthly total: ${opts.monthly}` : null,
    "",
    "I understand this is an estimate, not a charge. Can you prepare the free demo and confirm scope in a 15-minute call?",
  ]
    .filter((l) => l !== null)
    .join("\n");
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

/**
 * Message for the /pricing-builder configurator. Every amount is passed
 * pre-formatted in the visitor's currency; totals equal the listed lines.
 */
export function buildConfiguratorMessage(opts: {
  lang: "es" | "en";
  plan: string;
  planPrice: string;
  template: string;
  style: string;
  sections: string[];
  addons: string[];
  support: string | null;
  oneTime: string;
  monthly: string | null;
  currency: string;
  link?: string;
}) {
  const es = opts.lang === "es";
  const list = (items: string[]) =>
    items.length ? items.map((l) => `  – ${l}`).join("\n") : es ? "  – Ninguno" : "  – None";
  const lines = es
    ? [
        "Hola Nativa 👋",
        "Armé mi sitio en el configurador:",
        "",
        `• Plan: ${opts.plan} — ${opts.planPrice}`,
        `• Plantilla: ${opts.template}`,
        `• Estilo: ${opts.style}`,
        `• Secciones: ${opts.sections.join(", ")}`,
        `• Extras:\n${list(opts.addons)}`,
        `• Soporte mensual: ${opts.support ?? "No"}`,
        "",
        `Inversión única: ${opts.oneTime}`,
        `Mensual: ${opts.monthly ?? "—"}`,
        `Moneda: ${opts.currency}`,
        opts.link ? `\nMi configuración: ${opts.link}` : null,
        "",
        "¿Me preparan el demo gratis en 48 horas? Entiendo que es un estimado y que el precio final se confirma en la llamada.",
      ]
    : [
        "Hi Nativa 👋",
        "I built my site in the configurator:",
        "",
        `• Plan: ${opts.plan} — ${opts.planPrice}`,
        `• Template: ${opts.template}`,
        `• Style: ${opts.style}`,
        `• Sections: ${opts.sections.join(", ")}`,
        `• Add-ons:\n${list(opts.addons)}`,
        `• Monthly support: ${opts.support ?? "No"}`,
        "",
        `One-time: ${opts.oneTime}`,
        `Monthly: ${opts.monthly ?? "—"}`,
        `Currency: ${opts.currency}`,
        opts.link ? `\nMy build: ${opts.link}` : null,
        "",
        "Can you prepare the free 48-hour demo? I understand this is an estimate and the final price is confirmed on the call.",
      ];
  return lines.filter((l) => l !== null).join("\n");
}
