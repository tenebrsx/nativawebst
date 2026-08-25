import type { TranslationKey } from "./translations";
import type { FaqItem } from "./json-ld";
import type { ServiceSlug } from "./site";

export interface ServiceCopy {
  slug: ServiceSlug;
  path: `/${string}`;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  label: string;
  h1: string;
  answer: string;
  sub: string;
  problemsTitle: string;
  problems: Array<{ title: string; body: string }>;
  stepsTitle: string;
  steps: Array<{ num: string; title: string; body: string }>;
  faqs: FaqItem[];
  related: ServiceSlug[];
  cta: string;
  need: string;
}

export interface HubCopy {
  metaTitle: string;
  metaDescription: string;
  label: string;
  h1: string;
  answer: string;
  cta: string;
  portfolio: string;
}

export const hubCopy: Record<TranslationKey, HubCopy> = {
  es: {
    metaTitle: "Servicios web, SEO local, CRM y agentes IA en RD",
    metaDescription:
      "Nativa en Santo Domingo: sitios web rápidos, SEO en Google Maps, CRM personal y agentes IA por WhatsApp para negocios en República Dominicana.",
    label: "Servicios",
    h1: "Sitios web, SEO local, CRM y agentes IA en República Dominicana",
    answer:
      "Nativa es un estudio web en Santo Domingo. Primero ponemos el negocio en una web rápida que abre WhatsApp. Luego lo hacemos visible en Google Maps. Cuando ya llegan chats, armamos un CRM a la medida y un agente IA de marca que responde y agenda. Un solo equipo, en español, para pymes de RD.",
    cta: "Pedir brief por WhatsApp",
    portfolio: "Ver plantillas y demos",
  },
  en: {
    metaTitle: "Web, local SEO, CRM and AI agents in the DR",
    metaDescription:
      "Nativa in Santo Domingo: fast websites, Google Maps SEO, a personal CRM, and WhatsApp AI agents for businesses in the Dominican Republic.",
    label: "Services",
    h1: "Websites, local SEO, CRM and AI agents in the Dominican Republic",
    answer:
      "Nativa is a web studio in Santo Domingo. First we put the business on a fast site that opens WhatsApp. Then we make it findable on Google Maps. Once chats arrive, we build a personal CRM and a brand AI agent that answers and books. One team, in Spanish or English, for Dominican SMBs.",
    cta: "Send a WhatsApp brief",
    portfolio: "See templates and demos",
  },
};

export const serviceCopy: Record<TranslationKey, Record<ServiceSlug, ServiceCopy>> = {
  es: {
    "diseno-web": {
      slug: "diseno-web",
      path: "/servicios/diseno-web",
      icon: "🌐",
      metaTitle: "Diseño web en Santo Domingo",
      metaDescription:
        "Páginas web rápidas para negocios en República Dominicana. En vivo en unas 3 semanas, con flujo a WhatsApp. Estudio Nativa en Santo Domingo.",
      label: "Diseño web",
      h1: "Páginas web rápidas para negocios en Santo Domingo",
      answer:
        "Diseñamos y publicamos sitios que cargan en el celular, muestran el servicio en español (y inglés si hace falta) y mandan al visitante a WhatsApp. El brief es de 15 minutos. Una landing puede salir en 48 horas; un sitio de varias páginas, en unas 3 semanas. No cobramos plataforma mensual por el hosting de plantilla. Los cambios de texto, fotos y horarios se piden por mensaje.",
      sub: "La web es la puerta. WhatsApp es el cierre. Hecho para clínicas, villas, talleres, estudios y tiendas en RD.",
      problemsTitle: "Para qué sirve, de verdad",
      problems: [
        {
          title: "Carga en el celular, no en una laptop de agencia",
          body: "La mayoría de tus clientes te buscan desde el teléfono. El sitio se construye mobile-first, con un toque a chat — no un formulario que nadie llena.",
        },
        {
          title: "Bilingüe cuando el mercado lo pide",
          body: "Turismo, villas y clínicas en Punta Cana o la capital suelen necesitar ES/EN. Lo dejamos listo, no como un extra escondido al final.",
        },
        {
          title: "Lista para Maps y el stack siguiente",
          body: "Marcamos el negocio para Google y dejamos el tubo de WhatsApp. Después se suma CRM y el agente IA, cuando ya hay chats.",
        },
      ],
      stepsTitle: "Cómo se lanza",
      steps: [
        {
          num: "01",
          title: "Brief de 15 minutos",
          body: "WhatsApp o una llamada corta. Páginas, fotos, cómo debe caer el lead. Sin deck de 40 slides.",
        },
        {
          num: "02",
          title: "Preview en tu teléfono",
          body: "Recibes un enlace real en días, no un PDF. Lo abres como lo abriría un cliente en Naco o Bávaro.",
        },
        {
          num: "03",
          title: "Al aire, con chat",
          body: "El sitio sale. Maps se conecta. Cada visita puede escribirte. Ahí hablamos de CRM y del agente.",
        },
      ],
      faqs: [
        {
          q: "¿Cuánto tarda una página web con Nativa?",
          a: "Una landing puede lanzarse en 48 horas. Un sitio de varias páginas suele ir del brief al aire en unas 3 semanas.",
        },
        {
          q: "¿Hacen páginas web en Santo Domingo y el interior?",
          a: "Sí. El estudio está en Santo Domingo y trabajamos con negocios en toda la República Dominicana, incluyendo Punta Cana.",
        },
        {
          q: "¿El sitio incluye tienda o solo informativo?",
          a: "Hacemos informativos, landings y catálogos que cotizan por WhatsApp. E-commerce completo se cotiza aparte según el inventario.",
        },
        {
          q: "¿Incluye CRM o agente de inteligencia artificial?",
          a: "No en el precio de la web. CRM y agente IA se cotizan cuando el sitio ya está mandando chats. La web es el primer módulo.",
        },
      ],
      related: ["seo-local", "crm", "agentes-ia"],
      cta: "Quiero cotizar mi web",
      need: "Diseño web",
    },
    "seo-local": {
      slug: "seo-local",
      path: "/servicios/seo-local",
      icon: "📍",
      metaTitle: "SEO local y Google Maps en Santo Domingo",
      metaDescription:
        "SEO local en República Dominicana: ficha de Google Maps, esquema de negocio local y un toque a WhatsApp cuando te buscan cerca. Nativa, Santo Domingo.",
      label: "SEO local",
      h1: "Cuando buscan tu servicio cerca, apareces en Google Maps",
      answer:
        "El SEO local de Nativa no es un informe de 40 palabras clave globales. Es hacer que un negocio en Santo Domingo, Punta Cana o el Cibao salga en Maps cuando alguien busca el servicio a su alrededor, y que el toque abra WhatsApp con el contexto. Trabajamos la ficha, las categorías, las fotos, el NAP (nombre, dirección, teléfono) y el marcado del sitio para que Google y los buscadores de IA entiendan qué haces y dónde estás.",
      sub: "Te encuentran. Te escriben. No dejan un formulario en un buzón que revisas el lunes.",
      problemsTitle: "Qué arreglamos",
      problems: [
        {
          title: "Ficha incompleta o a nombre de otro",
          body: "Categorías incorrectas, teléfono viejo, horario cerrado los sábados que sí abres. Maps no inventa: hay que decirle la verdad, una sola vez, en todos lados.",
        },
        {
          title: "La web no confirma el negocio local",
          body: "Sin dirección, teléfono y esquema consistentes, Google no une la ficha con el sitio. Dejamos NAP idéntico en footer, schema y Maps.",
        },
        {
          title: "El clic no convierte",
          body: "Salir primero y mandar a un formulario es perder la cita. El tap va a WhatsApp con el servicio ya nombrado.",
        },
      ],
      stepsTitle: "Cómo lo montamos",
      steps: [
        {
          num: "01",
          title: "Auditoría de ficha y NAP",
          body: "Revisamos Maps, el sitio y cómo aparece el nombre en el chat. Una sola versión de la verdad.",
        },
        {
          num: "02",
          title: "Sitio + schema local",
          body: "El sitio declara el negocio, el área (Santo Domingo, Punta Cana, RD) y el servicio. Google deja de adivinar.",
        },
        {
          num: "03",
          title: "Toque a WhatsApp",
          body: "Botón, horarios y mensaje prellenado. El lead llega con el servicio, no con un “info pls”.",
        },
      ],
      faqs: [
        {
          q: "¿El SEO local de Nativa es solo Google Maps?",
          a: "Maps es el canal principal para un negocio local en RD. También alineamos el sitio, el NAP y el schema para que Google y buscadores de IA citen el mismo negocio.",
        },
        {
          q: "¿Trabajan Punta Cana o solo la capital?",
          a: "Santo Domingo es la base. Cubrimos Punta Cana, Bávaro y negocios que atienden turismo o clientes nacionales.",
        },
        {
          q: "¿Garantizan el puesto 1?",
          a: "Nadie serio lo garantiza. Lo que sí hacemos es que la ficha, el sitio y el chat coincidan, que es lo que Maps usa para decidir.",
        },
        {
          q: "¿Necesito una web nueva para el SEO local?",
          a: "Si el sitio actual no carga en celular o no declara el negocio, sí. Si ya es sólido, a veces basta conectar Maps y el flujo de WhatsApp.",
        },
      ],
      related: ["diseno-web", "crm", "agentes-ia"],
      cta: "Quiero aparecer en Maps",
      need: "SEO local",
    },
    crm: {
      slug: "crm",
      path: "/servicios/crm",
      icon: "📊",
      metaTitle: "CRM para negocios en República Dominicana",
      metaDescription:
        "CRM personal sobre tus chats de WhatsApp: pipeline, seguimientos y notas a la medida de tu marca. Nativa lo arma cuando el sitio ya manda leads en RD.",
      label: "CRM personal",
      h1: "Un CRM a la medida de tus chats de WhatsApp",
      answer:
        "El CRM de Nativa no es una licencia genérica de HubSpot. Es un pipeline construido alrededor de cómo ya cierras: WhatsApp. Los chats dejan de morir en la galería. Cada lead tiene etapa, nota y seguimiento. Lo cotizamos cuando el sitio ya está mandando conversaciones, para no inventar un tablero vacío. Sirve a clínicas, villas, talleres y tiendas que venden por mensaje en República Dominicana.",
      sub: "Mismo WhatsApp. Más control. Sin que el cierre viva en la memoria de una sola persona.",
      problemsTitle: "Qué deja de pasar",
      problems: [
        {
          title: "El lead quedó en el rollo de cámara",
          body: "Capturas de chat no son un pipeline. El CRM guarda de quién es, qué pidió y cuándo hay que escribirle otra vez.",
        },
        {
          title: "Solo una persona sabe el estado",
          body: "Si el vendedor no está, el lead se enfría. Etapas visibles: nuevo, cotizado, agendado, cerrado.",
        },
        {
          title: "Seguimientos que nunca salen",
          body: "Notas y recordatorios en el mismo hilo de trabajo. No un Excel que se abre los viernes.",
        },
      ],
      stepsTitle: "Cuándo entra",
      steps: [
        {
          num: "01",
          title: "Primero la web y el chat",
          body: "Sin leads, un CRM es un cascarón. Lanzamos el sitio y el toque a WhatsApp.",
        },
        {
          num: "02",
          title: "Mapeamos cómo cierras hoy",
          body: "Etapas reales de tu rubro — cita, villa, cotización de gomas — no un funnel copiado de SaaS.",
        },
        {
          num: "03",
          title: "Pipeline a tu marca",
          body: "Se arma a la medida. Luego, si quieres, el agente IA escribe en las mismas etapas.",
        },
      ],
      faqs: [
        {
          q: "¿Nativa revende HubSpot o Salesforce?",
          a: "No. Armamos un CRM personal alineado a tus chats de WhatsApp y a cómo vende tu negocio en RD.",
        },
        {
          q: "¿Puedo comprar solo el CRM sin web?",
          a: "Se cotiza después de que el sitio (nuestro o el que ya tengas) está mandando chats. Sin conversaciones, no hay pipeline que valga.",
        },
        {
          q: "¿El CRM incluye el agente de inteligencia artificial?",
          a: "Son módulos distintos. El CRM organiza. El agente responde y agenda. Se pueden conectar; se cotizan aparte.",
        },
        {
          q: "¿Mis datos se quedan en WhatsApp?",
          a: "WhatsApp sigue siendo el canal con el cliente. El CRM es la capa de seguimiento y notas para que el equipo no dependa de un solo teléfono.",
        },
      ],
      related: ["diseno-web", "agentes-ia", "seo-local"],
      cta: "Quiero el CRM cuando haya chats",
      need: "CRM personal",
    },
    "agentes-ia": {
      slug: "agentes-ia",
      path: "/servicios/agentes-ia",
      icon: "⚡",
      metaTitle: "Agentes IA y WhatsApp para empresas en RD",
      metaDescription:
        "Agente IA de marca que responde, agenda y opera por WhatsApp. Nativa lo cotiza en Santo Domingo cuando tu web ya está mandando chats.",
      label: "Agente IA",
      h1: "Un agente de marca que responde y agenda por WhatsApp",
      answer:
        "El agente IA de Nativa no es un widget genérico de chat en la esquina de la web. Vive donde ya cierras: WhatsApp. Responde horarios, servicios y disponibilidad, puede agendar, y pasa a un humano cuando el caso no es rutinario. Lo cotizamos cuando el sitio ya manda conversaciones, para entrenarlo con preguntas reales — no con un guion inventado. Hecho para negocios en República Dominicana que no pueden estar 18 horas pegados al teléfono.",
      sub: "Tú no eres el cuello de botella. El agente cubre lo repetido; el humano cierra lo que importa.",
      problemsTitle: "Qué cubre el agente",
      problems: [
        {
          title: "Las mismas 20 preguntas a las 11 pm",
          body: "Precio de limpieza, noches de villa, si hay cupo el sábado. El agente contesta con la voz de tu marca.",
        },
        {
          title: "Citas que se pierden porque nadie vio el chat",
          body: "Puede tomar datos y proponer horario. Lo que no puede resolver, lo escala con contexto, no con un “espere”.",
        },
        {
          title: "Operación interna, no solo marketing",
          body: "Avisos al equipo, resúmenes de leads, recordatorios. El agente trabaja el tubo, no un demo de feria.",
        },
      ],
      stepsTitle: "Cómo se entrena",
      steps: [
        {
          num: "01",
          title: "Sitio vivo, chats reales",
          body: "Sin volumen, el agente alucina. Primero la web y el flujo de WhatsApp.",
        },
        {
          num: "02",
          title: "Guion de tu marca",
          body: "Servicios, excepciones, tono, cuándo pasar a humano. Nada de respuestas genéricas de otro país.",
        },
        {
          num: "03",
          title: "Handoff y CRM",
          body: "Lo rutinario lo lleva el agente. Lo demás cae a tu equipo, con notas si ya tienes el CRM.",
        },
      ],
      faqs: [
        {
          q: "¿El agente IA reemplaza a mi recepcionista?",
          a: "No. Cubre lo repetido fuera de horario y escala a un humano cuando el caso es nuevo, caro o conflictivo.",
        },
        {
          q: "¿Funciona en español dominicano?",
          a: "Sí. Se entrena con tu menú de servicios y la forma en que ya te escriben — no con un corpus genérico de España o México.",
        },
        {
          q: "¿Va en la web o en WhatsApp?",
          a: "El canal principal es WhatsApp, que es donde cierran los negocios locales en RD. La web es la puerta que abre ese chat.",
        },
        {
          q: "¿Cuánto cuesta un agente IA con Nativa?",
          a: "Se cotiza después del sitio, según volumen de chats, idioma y si debe agendar o solo responder. No hay tarifa de feria en la landing.",
        },
      ],
      related: ["crm", "diseno-web", "seo-local"],
      cta: "Quiero el agente cuando haya chats",
      need: "Agente IA de marca",
    },
  },
  en: {
    "diseno-web": {
      slug: "diseno-web",
      path: "/servicios/diseno-web",
      icon: "🌐",
      metaTitle: "Web design in Santo Domingo",
      metaDescription:
        "Fast websites for businesses in the Dominican Republic. Live in about 3 weeks, with WhatsApp lead flow. Nativa, Santo Domingo.",
      label: "Web design",
      h1: "Fast websites for businesses in Santo Domingo",
      answer:
        "We design and ship sites that load on a phone, explain the service in Spanish (and English when needed), and send the visitor to WhatsApp. The brief is 15 minutes. A landing page can go live in 48 hours; a multi-page site in about 3 weeks. No monthly page-builder fee. Copy, photos, and hours change by message.",
      sub: "The site is the door. WhatsApp is the close. Built for clinics, villas, workshops, studios, and shops in the DR.",
      problemsTitle: "What it actually does",
      problems: [
        {
          title: "Built for the phone, not an agency laptop",
          body: "Most customers search on mobile. The site is mobile-first, with a tap to chat — not a form nobody submits.",
        },
        {
          title: "Bilingual when the market needs it",
          body: "Tourism, villas, and clinics in Punta Cana or the capital often need ES/EN. We ship it, not as a buried add-on.",
        },
        {
          title: "Ready for Maps and the next stack",
          body: "We mark the business for Google and leave the WhatsApp pipe in place. CRM and the AI agent come once chats exist.",
        },
      ],
      stepsTitle: "How it launches",
      steps: [
        {
          num: "01",
          title: "15-minute brief",
          body: "WhatsApp or a short call. Pages, photos, how the lead should land. No 40-slide deck.",
        },
        {
          num: "02",
          title: "Preview on your phone",
          body: "You get a live link in days, not a PDF. You tap it the way a customer in Naco or Bávaro would.",
        },
        {
          num: "03",
          title: "Live, with chat",
          body: "The site ships. Maps is connected. Every visit can text you. Then we talk CRM and the agent.",
        },
      ],
      faqs: [
        {
          q: "How long does a Nativa website take?",
          a: "A landing page can launch in 48 hours. A multi-page site usually goes from brief to live in about 3 weeks.",
        },
        {
          q: "Do you build sites only in Santo Domingo?",
          a: "The studio is in Santo Domingo. We work with businesses across the Dominican Republic, including Punta Cana.",
        },
        {
          q: "Is this a store or an info site?",
          a: "We ship info sites, landings, and catalogs that quote on WhatsApp. Full e-commerce is quoted separately.",
        },
        {
          q: "Does the website include CRM or an AI agent?",
          a: "Not in the website price. CRM and the AI agent are quoted once the site is sending chats. The site is the first module.",
        },
      ],
      related: ["seo-local", "crm", "agentes-ia"],
      cta: "I want a website quote",
      need: "Website design",
    },
    "seo-local": {
      slug: "seo-local",
      path: "/servicios/seo-local",
      icon: "📍",
      metaTitle: "Local SEO and Google Maps in Santo Domingo",
      metaDescription:
        "Local SEO in the Dominican Republic: Google Maps listing, local business schema, and a tap to WhatsApp when people nearby search. Nativa, Santo Domingo.",
      label: "Local SEO",
      h1: "When they search nearby, you show up on Google Maps",
      answer:
        "Nativa local SEO is not a 40-keyword global report. It is making a business in Santo Domingo, Punta Cana, or the Cibao appear on Maps when someone nearby searches the service, with a tap that opens WhatsApp. We work the listing, categories, photos, NAP (name, address, phone), and on-site markup so Google and AI search engines know what you do and where you are.",
      sub: "They find you. They text you. They do not leave a form in a mailbox you check on Monday.",
      problemsTitle: "What we fix",
      problems: [
        {
          title: "Incomplete listing, or listed as someone else",
          body: "Wrong categories, old phone, Saturday marked closed. Maps does not invent: tell it the truth once, everywhere.",
        },
        {
          title: "The website does not confirm the local business",
          body: "Without matching address, phone, and schema, Google will not join the listing to the site. NAP stays identical in footer, schema, and Maps.",
        },
        {
          title: "The click does not convert",
          body: "Ranking first and sending people to a form loses the appointment. The tap goes to WhatsApp with the service already named.",
        },
      ],
      stepsTitle: "How we set it up",
      steps: [
        {
          num: "01",
          title: "Listing and NAP audit",
          body: "We review Maps, the site, and how the name appears in chat. One version of the truth.",
        },
        {
          num: "02",
          title: "Site + local schema",
          body: "The site states the business, the area (Santo Domingo, Punta Cana, DR), and the service. Google stops guessing.",
        },
        {
          num: "03",
          title: "Tap to WhatsApp",
          body: "Button, hours, and a prefilled message. The lead arrives with the service, not “info pls”.",
        },
      ],
      faqs: [
        {
          q: "Is Nativa local SEO only Google Maps?",
          a: "Maps is the main channel for a local DR business. We also align the site, NAP, and schema so Google and AI search cite the same business.",
        },
        {
          q: "Do you work Punta Cana or only the capital?",
          a: "Santo Domingo is home base. We cover Punta Cana, Bávaro, and businesses that serve tourism or national clients.",
        },
        {
          q: "Do you guarantee #1?",
          a: "No serious studio does. We make the listing, the site, and the chat match — which is what Maps uses to decide.",
        },
        {
          q: "Do I need a new website for local SEO?",
          a: "If the current site does not load on a phone or does not declare the business, yes. If it is solid, connecting Maps and WhatsApp is sometimes enough.",
        },
      ],
      related: ["diseno-web", "crm", "agentes-ia"],
      cta: "I want to show up on Maps",
      need: "Local SEO",
    },
    crm: {
      slug: "crm",
      path: "/servicios/crm",
      icon: "📊",
      metaTitle: "CRM for businesses in the Dominican Republic",
      metaDescription:
        "A personal CRM on top of your WhatsApp chats: pipeline, follow-ups, and notes built around your brand. Nativa quotes it once the site is sending leads in the DR.",
      label: "Personal CRM",
      h1: "A CRM built around your WhatsApp chats",
      answer:
        "Nativa’s CRM is not a generic HubSpot seat. It is a pipeline around how you already close: WhatsApp. Chats stop dying in the camera roll. Each lead has a stage, a note, and a follow-up. We quote it once the site is sending conversations, so we are not inventing an empty board. Built for clinics, villas, workshops, and shops that sell by message in the Dominican Republic.",
      sub: "Same WhatsApp. More control. The close does not live in one person’s memory.",
      problemsTitle: "What stops happening",
      problems: [
        {
          title: "The lead died in the camera roll",
          body: "Screenshots are not a pipeline. The CRM stores who it is, what they asked, and when to write again.",
        },
        {
          title: "Only one person knows the status",
          body: "If the closer is out, the lead goes cold. Visible stages: new, quoted, booked, closed.",
        },
        {
          title: "Follow-ups that never leave",
          body: "Notes and reminders in the same workstream. Not a spreadsheet opened on Fridays.",
        },
      ],
      stepsTitle: "When it comes in",
      steps: [
        {
          num: "01",
          title: "Site and chat first",
          body: "Without leads, a CRM is a shell. We launch the site and the tap to WhatsApp.",
        },
        {
          num: "02",
          title: "Map how you close today",
          body: "Real stages for your vertical — appointment, villa, tire quote — not a copied SaaS funnel.",
        },
        {
          num: "03",
          title: "Pipeline on your brand",
          body: "Built to measure. Later, if you want, the AI agent writes into the same stages.",
        },
      ],
      faqs: [
        {
          q: "Does Nativa resell HubSpot or Salesforce?",
          a: "No. We build a personal CRM aligned to your WhatsApp chats and how your business sells in the DR.",
        },
        {
          q: "Can I buy the CRM without a website?",
          a: "It is quoted after the site (ours or yours) is sending chats. Without conversations, there is no pipeline worth building.",
        },
        {
          q: "Does the CRM include the AI agent?",
          a: "They are separate modules. The CRM organizes. The agent answers and books. They can connect; they are quoted apart.",
        },
        {
          q: "Do my data stay in WhatsApp?",
          a: "WhatsApp remains the customer channel. The CRM is the follow-up and notes layer so the team does not depend on one phone.",
        },
      ],
      related: ["diseno-web", "agentes-ia", "seo-local"],
      cta: "I want the CRM once chats exist",
      need: "Personal CRM",
    },
    "agentes-ia": {
      slug: "agentes-ia",
      path: "/servicios/agentes-ia",
      icon: "⚡",
      metaTitle: "AI agents and WhatsApp for companies in the DR",
      metaDescription:
        "A brand AI agent that answers, books, and operates on WhatsApp. Nativa quotes it in Santo Domingo once your site is sending chats.",
      label: "AI agent",
      h1: "A brand agent that answers and books on WhatsApp",
      answer:
        "Nativa’s AI agent is not a generic chat widget in the corner of the site. It lives where you already close: WhatsApp. It answers hours, services, and availability, can book, and hands off to a human when the case is not routine. We quote it once the site is sending conversations, so we train it on real questions — not an invented script. Built for Dominican businesses that cannot sit on the phone for 18 hours.",
      sub: "You are not the bottleneck. The agent covers the repeats; a human closes what matters.",
      problemsTitle: "What the agent covers",
      problems: [
        {
          title: "The same 20 questions at 11pm",
          body: "Cleaning price, villa nights, Saturday availability. The agent answers in your brand voice.",
        },
        {
          title: "Appointments lost because nobody saw the chat",
          body: "It can take details and propose a slot. What it cannot resolve, it escalates with context, not “please wait”.",
        },
        {
          title: "Internal ops, not just marketing",
          body: "Team pings, lead summaries, reminders. The agent works the pipe, not a trade-show demo.",
        },
      ],
      stepsTitle: "How it is trained",
      steps: [
        {
          num: "01",
          title: "Live site, real chats",
          body: "Without volume, the agent guesses. Website and WhatsApp flow first.",
        },
        {
          num: "02",
          title: "Your brand script",
          body: "Services, exceptions, tone, when to hand off. No generic answers from another country.",
        },
        {
          num: "03",
          title: "Handoff and CRM",
          body: "Routine goes to the agent. The rest hits your team, with notes if the CRM is already in place.",
        },
      ],
      faqs: [
        {
          q: "Does the AI agent replace my receptionist?",
          a: "No. It covers repeats after hours and escalates to a human when the case is new, expensive, or messy.",
        },
        {
          q: "Does it work in Dominican Spanish?",
          a: "Yes. It is trained on your service menu and how people already write you — not a generic Spain or Mexico corpus.",
        },
        {
          q: "Does it live on the website or on WhatsApp?",
          a: "The main channel is WhatsApp, where local DR businesses close. The website is the door that opens that chat.",
        },
        {
          q: "How much is a Nativa AI agent?",
          a: "Quoted after the site, based on chat volume, language, and whether it books or only answers. No trade-show price on the landing page.",
        },
      ],
      related: ["crm", "diseno-web", "seo-local"],
      cta: "I want the agent once chats exist",
      need: "Brand AI Agent",
    },
  },
};
