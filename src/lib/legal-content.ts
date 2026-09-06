export type L = { es: string; en: string };

export function tx(v: L, lang: "es" | "en") {
  return lang === "es" ? v.es : v.en;
}

export type LegalSlug = "privacidad" | "terminos" | "cookies";

export type LegalSection = {
  title: L;
  paragraphs: L[];
  bullets?: L[];
};

export type LegalDoc = {
  slug: LegalSlug;
  path: `/legal/${LegalSlug}`;
  metaTitle: string;
  metaDescription: string;
  label: L;
  h1: L;
  lede: L;
  sections: LegalSection[];
};

export const LEGAL_UPDATED: L = {
  es: "Última actualización: 5 de septiembre de 2026.",
  en: "Last updated: 5 September 2026.",
};

export const LEGAL_DOCS: Record<LegalSlug, LegalDoc> = {
  privacidad: {
    slug: "privacidad",
    path: "/legal/privacidad",
    metaTitle: "Política de privacidad",
    metaDescription:
      "Cómo Nativa Web Studio trata datos personales en nativa.studio: cotizaciones, WhatsApp, Analytics y tus derechos bajo la Ley 172-13 en República Dominicana.",
    label: { es: "Privacidad", en: "Privacy" },
    h1: { es: "Política de privacidad", en: "Privacy policy" },
    lede: {
      es: "Nativa Web Studio (“Nativa”, “nosotros”) opera nativa.studio desde Santo Domingo. Esta política explica qué datos pedimos, para qué y cómo puedes ejercer tus derechos bajo la Ley 172-13 de Protección de Datos Personales de la República Dominicana.",
      en: "Nativa Web Studio (“Nativa”, “we”) runs nativa.studio from Santo Domingo. This policy explains what data we ask for, why, and how you can exercise your rights under Dominican Republic Law 172-13 on Personal Data Protection.",
    },
    sections: [
      {
        title: { es: "Quién es el responsable", en: "Who is responsible" },
        paragraphs: [
          {
            es: "El responsable del tratamiento es Nativa Web Studio, estudio con domicilio en Av. Winston Churchill, Santo Domingo, Distrito Nacional, República Dominicana. Correo: info@nativa.studio. Teléfono y WhatsApp: +1 (809) 358-8113.",
            en: "The controller is Nativa Web Studio, based at Av. Winston Churchill, Santo Domingo, Distrito Nacional, Dominican Republic. Email: info@nativa.studio. Phone and WhatsApp: +1 (809) 358-8113.",
          },
          {
            es: "Esta política cubre el sitio público nativa.studio, el cotizador, el chat de WhatsApp de Nativa y los formularios de contacto. No cubre sitios de clientes, ni los prototipos en /demo/*, que son ficción de industria.",
            en: "This policy covers the public site nativa.studio, the quote builder, Nativa’s WhatsApp chat, and contact forms. It does not cover client websites, or the /demo/* prototypes, which are fictional industry samples.",
          },
        ],
      },
      {
        title: { es: "Qué datos recabamos", en: "What we collect" },
        paragraphs: [
          {
            es: "Solo pedimos lo necesario para responderte y operar el sitio:",
            en: "We only ask for what we need to reply and to run the site:",
          },
        ],
        bullets: [
          {
            es: "Formulario de contacto: nombre, correo, teléfono, servicio, presupuesto aproximado y mensaje.",
            en: "Contact form: name, email, phone, service, rough budget, and message.",
          },
          {
            es: "Embudo de WhatsApp: qué necesitas, rubro, plazo, rango de presupuesto y, si lo escribes, tu nombre o marca. Ese resumen se abre en WhatsApp hacia +1 (809) 358-8113.",
            en: "WhatsApp funnel: what you need, industry, timing, budget range, and, if you type it, your name or brand. That brief opens in WhatsApp to +1 (809) 358-8113.",
          },
          {
            es: "Preferencias en tu navegador: idioma (es/en) y moneda (DOP/USD), guardadas en almacenamiento local.",
            en: "Browser preferences: language (es/en) and currency (DOP/USD), stored in local storage.",
          },
          {
            es: "Uso del sitio: páginas vistas, dispositivo aproximado y origen de la visita, a través de Google Analytics.",
            en: "Site use: pages viewed, approximate device, and traffic source, via Google Analytics.",
          },
          {
            es: "Si contratas un proyecto, los datos del brief (marca, textos, fotos, accesos) se tratan para entregar el trabajo, bajo la propuesta que firmemos — no bajo este aviso genérico solo.",
            en: "If you hire us, brief materials (brand, copy, photos, access) are processed to deliver the work, under the proposal we sign — not under this public notice alone.",
          },
        ],
      },
      {
        title: { es: "Para qué los usamos", en: "Why we use them" },
        paragraphs: [
          {
            es: "Respondemos cotizaciones, damos seguimiento al chat, mejoramos el sitio y cumplimos obligaciones legales. No vendemos listas. No usamos tus datos para publicidad de terceros. El cotizador en la web es un simulador: no es un pedido ni un cobro.",
            en: "We reply to quotes, follow up on chat, improve the site, and meet legal duties. We do not sell lists. We do not use your data for third-party ads. The on-site quote builder is a simulator: it is not an order or a charge.",
          },
          {
            es: "La base es tu interés en contratar (medidas precontractuales) y, cuando aplica, tu consentimiento al escribirnos o al enviar el formulario.",
            en: "The basis is your interest in hiring us (pre-contractual steps) and, where it applies, your consent when you write to us or submit the form.",
          },
        ],
      },
      {
        title: { es: "Con quién se comparte", en: "Who we share with" },
        paragraphs: [
          {
            es: "Para operar el sitio usamos encargados. No es una cesión comercial:",
            en: "We use processors to run the site. This is not a commercial sale:",
          },
        ],
        bullets: [
          {
            es: "Google LLC (Google Analytics y Firebase / Cloud Firestore): medición del sitio y almacenamiento de leads del formulario y del embudo.",
            en: "Google LLC (Google Analytics and Firebase / Cloud Firestore): site measurement and storage of form and funnel leads.",
          },
          {
            es: "Meta Platforms (WhatsApp): el mensaje que armamos se envía por la app o web de WhatsApp. A partir de ahí rige la política de Meta / WhatsApp.",
            en: "Meta Platforms (WhatsApp): the message we assemble is sent through the WhatsApp app or web. From that point, Meta / WhatsApp’s policy applies.",
          },
          {
            es: "Autoridades, si una ley dominicana vigente nos lo exige.",
            en: "Authorities, if a current Dominican law requires it.",
          },
        ],
      },
      {
        title: { es: "Transferencias y conservación", en: "Transfers and retention" },
        paragraphs: [
          {
            es: "Firebase y Analytics pueden tratar datos en servidores fuera de República Dominicana (en particular, infraestructura de Google). Los usamos porque el sitio y el registro de leads corren sobre esos servicios.",
            en: "Firebase and Analytics may process data on servers outside the Dominican Republic (in particular, Google infrastructure). We use them because the site and lead log run on those services.",
          },
          {
            es: "Los leads de cotización se conservan mientras el asunto esté activo y un tiempo razonable después (como referencia, hasta 24 meses), salvo que pidas su supresión antes o una norma nos obligue a guardarlos más. Las preferencias de idioma y moneda viven en tu dispositivo hasta que las borres.",
            en: "Quote leads are kept while the matter is active and for a reasonable time after (as a reference, up to 24 months), unless you ask us to delete them sooner or a rule requires us to keep them longer. Language and currency preferences live on your device until you clear them.",
          },
        ],
      },
      {
        title: { es: "Tus derechos (Ley 172-13)", en: "Your rights (Law 172-13)" },
        paragraphs: [
          {
            es: "Puedes pedir acceso, rectificación, cancelación u oposición al tratamiento de tus datos, y revocar el consentimiento cuando el tratamiento se base en él. Escríbenos a info@nativa.studio o por WhatsApp al +1 (809) 358-8113, con asunto “Datos personales”. Responderemos en un plazo razonable.",
            en: "You may request access, correction, deletion, or objection to processing, and withdraw consent where processing is based on it. Write to info@nativa.studio or WhatsApp +1 (809) 358-8113, subject “Personal data”. We will reply within a reasonable time.",
          },
          {
            es: "No hay un perfil automatizado que decida si te contratamos. Un humano lee el chat y la cotización.",
            en: "There is no automated profile that decides whether we hire you. A human reads the chat and the quote.",
          },
        ],
      },
      {
        title: { es: "Menores y seguridad", en: "Minors and security" },
        paragraphs: [
          {
            es: "El sitio no está dirigido a menores de 18 años. Si crees que un menor nos envió datos, avísanos para borrarlos.",
            en: "This site is not aimed at anyone under 18. If you believe a minor sent us data, tell us so we can delete it.",
          },
          {
            es: "Aplicamos medidas razonables (HTTPS, acceso restringido a la consola de Firebase). Ningún envío por internet es riesgo cero; el canal habitual de cierre es WhatsApp.",
            en: "We apply reasonable measures (HTTPS, restricted Firebase console access). No internet send is zero-risk; the usual close channel is WhatsApp.",
          },
        ],
      },
      {
        title: { es: "Cambios", en: "Changes" },
        paragraphs: [
          {
            es: "Si cambia el tratamiento de forma relevante, actualizamos esta página y la fecha de arriba. El uso continuado del sitio después de esa fecha implica que conoces la versión vigente.",
            en: "If processing changes in a material way, we update this page and the date above. Continued use of the site after that date means you have seen the current version.",
          },
        ],
      },
    ],
  },

  terminos: {
    slug: "terminos",
    path: "/legal/terminos",
    metaTitle: "Términos de uso",
    metaDescription:
      "Términos de uso de nativa.studio: el cotizador no es un contrato, los demos son prototipos, y el trabajo de cliente se rige por la propuesta firmada.",
    label: { es: "Términos", en: "Terms" },
    h1: { es: "Términos de uso", en: "Terms of use" },
    lede: {
      es: "Estos términos rigen el uso de nativa.studio. No sustituyen una propuesta firmada. Si hay conflicto entre esta página y un contrato de proyecto, manda el contrato.",
      en: "These terms govern use of nativa.studio. They do not replace a signed proposal. If this page and a project contract conflict, the contract wins.",
    },
    sections: [
      {
        title: { es: "El sitio", en: "The site" },
        paragraphs: [
          {
            es: "nativa.studio es la vitrina y el canal de contacto de Nativa Web Studio en República Dominicana. Informa servicios, precios de piso, proceso y prototipos. Al usarlo aceptas estos términos.",
            en: "nativa.studio is Nativa Web Studio’s showcase and contact channel in the Dominican Republic. It explains services, floor prices, process, and prototypes. By using it you accept these terms.",
          },
          {
            es: "El cotizador y las cifras en pantalla son orientativos (pisos en USD mostrados en DOP u otra moneda). No constituyen oferta irrevocable ni pedido. El alcance, plazo y precio de un trabajo salen de una propuesta escrita o de lo que confirmemos por WhatsApp o correo.",
            en: "The quote builder and on-screen figures are guidance (USD floors shown in DOP or another currency). They are not an irrevocable offer or an order. Scope, timeline, and price for a job come from a written proposal or from what we confirm on WhatsApp or email.",
          },
        ],
      },
      {
        title: { es: "Prototipos y casos", en: "Prototypes and case studies" },
        paragraphs: [
          {
            es: "Las URLs /demo/* y las plantillas de /portfolio son prototipos de industria. No son sitios de clientes en vivo ni casos reales. /casos solo publicará trabajo entregado con resultados que se puedan defender.",
            en: "/demo/* URLs and /portfolio templates are industry prototypes. They are not live client sites or real case studies. /casos will only publish delivered work with results we can stand behind.",
          },
          {
            es: "No copies esos prototipos para presentarlos como tu marca, ni extraigas el código o las fotos para un proyecto comercial sin permiso escrito.",
            en: "Do not copy those prototypes and present them as your brand, and do not extract the code or photos for a commercial project without written permission.",
          },
        ],
      },
      {
        title: { es: "Propiedad intelectual", en: "Intellectual property" },
        paragraphs: [
          {
            es: "El diseño, textos, marcas “Nativa” / “Nativa Web Studio” y el código de este sitio son de Nativa o de sus licenciantes. Puedes compartir un enlace a una página pública. No puedes revender el sitio, sus componentes ni los demos.",
            en: "The design, copy, “Nativa” / “Nativa Web Studio” marks, and the code of this site belong to Nativa or its licensors. You may share a link to a public page. You may not resell the site, its parts, or the demos.",
          },
          {
            es: "El trabajo que entregamos a un cliente (su dominio, su marca, su contenido) se rige por la propuesta de ese proyecto: normalmente el cliente queda con lo contratado una vez pagado; Nativa puede mostrar el trabajo como muestra salvo que se pacte lo contrario.",
            en: "Work we deliver to a client (their domain, brand, content) is governed by that project’s proposal: typically the client keeps what was hired once paid; Nativa may show the work as a sample unless we agree otherwise.",
          },
        ],
      },
      {
        title: { es: "Lo que no prometemos en la web", en: "What the site does not promise" },
        paragraphs: [
          {
            es: "No garantizamos posiciones concretas en Google ni un volumen de chats. El SEO local y WhatsApp dependen del negocio, la ficha, la competencia y del uso que le des al canal. “Hecho en unas 3 semanas” es el ritmo habitual de un sitio de varias páginas, no una cláusula penal.",
            en: "We do not guarantee specific Google rankings or a volume of chats. Local SEO and WhatsApp depend on the business, the listing, competition, and how you use the channel. “About three weeks” is the usual pace for a multi-page site, not a penalty clause.",
          },
          {
            es: "CRM y agente IA se cotizan cuando ya hay conversación real. No forman parte automática del piso de un sitio.",
            en: "CRM and the AI agent are quoted once there is a real conversation. They are not automatically part of a site floor price.",
          },
        ],
      },
      {
        title: { es: "Uso aceptable", en: "Acceptable use" },
        paragraphs: [
          {
            es: "No uses el sitio para enviar spam, intentar entrar a sistemas ajenos, sobrecargar el servicio o hacerse pasar por Nativa. Nos reservamos el derecho de ignorar o bloquear abusos.",
            en: "Do not use the site to spam, attempt access to other systems, overload the service, or impersonate Nativa. We may ignore or block abuse.",
          },
        ],
      },
      {
        title: { es: "Responsabilidad", en: "Liability" },
        paragraphs: [
          {
            es: "El sitio se ofrece “tal cual”. En la medida que permita la ley dominicana, Nativa no responde por daños indirectos derivados de confiar solo en textos o precios de esta web sin una propuesta. WhatsApp, Google y Firebase son servicios de terceros; sus caídas o reglas no son un incumplimiento nuestro.",
            en: "The site is offered “as is”. To the extent Dominican law allows, Nativa is not liable for indirect damage from relying only on this site’s copy or prices without a proposal. WhatsApp, Google, and Firebase are third-party services; their outages or rules are not our breach.",
          },
        ],
      },
      {
        title: { es: "Ley aplicable", en: "Governing law" },
        paragraphs: [
          {
            es: "Estos términos se rigen por las leyes de la República Dominicana. Cualquier controversia sobre el uso de este sitio se somete a los tribunales de Santo Domingo, Distrito Nacional, salvo norma imperativa en contrario.",
            en: "These terms are governed by the laws of the Dominican Republic. Disputes about use of this site are submitted to the courts of Santo Domingo, Distrito Nacional, unless a mandatory rule says otherwise.",
          },
        ],
      },
    ],
  },

  cookies: {
    slug: "cookies",
    path: "/legal/cookies",
    metaTitle: "Cookies y medición",
    metaDescription:
      "Qué cookies y almacenamiento usa nativa.studio: preferencias de idioma y moneda, y Google Analytics. Cómo limitarlas desde el navegador.",
    label: { es: "Cookies", en: "Cookies" },
    h1: { es: "Cookies y medición", en: "Cookies and measurement" },
    lede: {
      es: "Usamos poco. Preferencias en tu dispositivo y una herramienta de medición de Google. No hay muros de anuncios ni píxeles de retargeting de redes en este sitio.",
      en: "We use little. Preferences on your device and a Google measurement tool. There is no ad wall or social retargeting pixel on this site.",
    },
    sections: [
      {
        title: { es: "Qué queda en tu dispositivo", en: "What stays on your device" },
        paragraphs: [
          {
            es: "Idioma y moneda: si cambias ES/EN o DOP/USD, el sitio guarda esa elección en el almacenamiento local del navegador (claves de preferencia). No es una cookie de publicidad; sirve para no preguntarte otra vez.",
            en: "Language and currency: if you switch ES/EN or DOP/USD, the site stores that choice in the browser’s local storage (preference keys). It is not an advertising cookie; it stops us asking again.",
          },
          {
            es: "Google Analytics (identificador de medición de Firebase / GA4): registra de forma agregada qué páginas se ven y desde qué tipo de dispositivo, para saber si el sitio sirve. Lo opera Google LLC según su propia política.",
            en: "Google Analytics (Firebase / GA4 measurement ID): records in aggregate which pages are viewed and from what kind of device, so we can tell if the site works. Google LLC runs it under its own policy.",
          },
          {
            es: "WhatsApp: al tocar el botón y abrir la conversación, sales a un servicio de Meta. Ahí pueden aplicarse cookies o datos de WhatsApp / Meta, fuera de nativa.studio.",
            en: "WhatsApp: when you tap through and open the thread, you leave to a Meta service. WhatsApp / Meta cookies or data may apply there, off nativa.studio.",
          },
        ],
      },
      {
        title: { es: "Cómo limitarlas", en: "How to limit them" },
        paragraphs: [
          {
            es: "Puedes borrar cookies y datos de sitio desde la configuración del navegador, o usar un bloqueador. Si bloqueas Analytics, el sitio sigue funcionando; solo perdemos la medición. Las preferencias de idioma/moneda se pueden resetear con “restablecer” en el selector de región, o borrando los datos del sitio.",
            en: "You can clear cookies and site data in the browser settings, or use a blocker. If you block Analytics, the site still works; we only lose measurement. Language/currency preferences can be reset with “reset” in the region picker, or by clearing site data.",
          },
          {
            es: "No hay un panel de consentimiento de marketing porque no vendemos anuncios en esta web. Si en el futuro añadiéramos herramientas de publicidad, actualizaremos esta página.",
            en: "There is no marketing-consent panel because we do not sell ads on this site. If we add advertising tools later, we will update this page.",
          },
        ],
      },
      {
        title: { es: "Más detalle", en: "More detail" },
        paragraphs: [
          {
            es: "El tratamiento de datos personales (leads, chat, derechos) está en la Política de privacidad. Esta página solo describe cookies y almacenamiento del navegador.",
            en: "Personal data (leads, chat, rights) is covered in the Privacy policy. This page only describes cookies and browser storage.",
          },
        ],
      },
    ],
  },
};

export const LEGAL_LIST: LegalDoc[] = [
  LEGAL_DOCS.privacidad,
  LEGAL_DOCS.terminos,
  LEGAL_DOCS.cookies,
];

export function legalTx(v: L, lang: "es" | "en") {
  return tx(v, lang);
}
