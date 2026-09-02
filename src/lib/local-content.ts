import type { TranslationKey } from "./translations";
import type { FaqItem } from "./json-ld";

export type LocalPageId = "santo-domingo" | "clinicas";

export type RelatedLink = {
  href: `/${string}`;
  label: string;
  sub: string;
};

export type LocalPageCopy = {
  id: LocalPageId;
  path: `/${string}`;
  metaTitle: string;
  metaDescription: string;
  label: string;
  h1: string;
  answer: string;
  problemsTitle: string;
  problems: Array<{ title: string; body: string }>;
  stepsTitle: string;
  steps: Array<{ num: string; title: string; body: string }>;
  faqs: FaqItem[];
  relatedTitle: string;
  related: RelatedLink[];
  cta: string;
  need: string;
  serviceType: string;
  areaServed: { "@type": "City" | "Country"; name: string };
  crumbs: Array<{ name: string; path: string }>;
};

export const localCopy: Record<TranslationKey, Record<LocalPageId, LocalPageCopy>> = {
  es: {
    "santo-domingo": {
      id: "santo-domingo",
      path: "/santo-domingo",
      metaTitle: "Estudio web en Santo Domingo",
      metaDescription:
        "Nativa es un estudio web en Av. Winston Churchill, Santo Domingo. Sitios rápidos, SEO en Google Maps y WhatsApp para negocios de la capital.",
      label: "Santo Domingo",
      h1: "Estudio web en Santo Domingo: te encuentran cerca y te escriben",
      answer:
        "Nativa trabaja desde Av. Winston Churchill, en la capital. El trabajo no es un kit remoto para “toda Latinoamérica”: es una web que carga en el celular en Naco o Piantini, una ficha de Google Maps con el mismo nombre, dirección y teléfono, y un toque que abre WhatsApp. Clínicas, villas, talleres, estudios y tiendas de Santo Domingo — y también Punta Cana cuando el cliente está ahí.",
      problemsTitle: "Qué se ve mal desde la capital",
      problems: [
        {
          title: "La ficha no es tuya, o está a medias",
          body: "Teléfono viejo, sábado cerrado, categoría genérica. Maps no inventa el negocio. Hay que decirle una sola versión, la de Churchill y el WhatsApp real.",
        },
        {
          title: "El sitio no confirma Santo Domingo",
          body: "Sin NAP en el footer y en el schema, Google no une la web con la ficha. Dirección, teléfono y nombre iguales en los tres sitios.",
        },
        {
          title: "El clic se muere en un formulario",
          body: "En RD el cierre es el chat. El tap de Maps y de la web va a WhatsApp con el servicio nombrado, no a un buzón que se abre el lunes.",
        },
      ],
      stepsTitle: "Cómo se lanza desde aquí",
      steps: [
        {
          num: "01",
          title: "Brief de 15 minutos",
          body: "WhatsApp o una llamada. Páginas, fotos, en qué barrios te buscan, cómo debe caer el lead.",
        },
        {
          num: "02",
          title: "Preview en tu celular",
          body: "Un enlace real, no un PDF. Lo abres como lo abriría un cliente en Naco, Gazcue o la Churchill.",
        },
        {
          num: "03",
          title: "Al aire, con Maps y chat",
          body: "El sitio sale. NAP alineado. Cada visita puede escribirte. Después, si hay volumen, CRM y el agente.",
        },
      ],
      faqs: [
        {
          q: "¿Nativa está realmente en Santo Domingo?",
          a: "Sí. El estudio opera desde Av. Winston Churchill, Distrito Nacional. Atendemos la capital y el resto del país, incluyendo Punta Cana y Bávaro.",
        },
        {
          q: "¿Hacen SEO local solo para negocios de la capital?",
          a: "La base es Santo Domingo. El mismo stack —ficha, NAP, schema, WhatsApp— sirve en Punta Cana y en el interior.",
        },
        {
          q: "¿Cuánto tarda un sitio con Nativa en Santo Domingo?",
          a: "Una landing puede salir en 48 horas. Un sitio de varias páginas suele ir del brief al aire en unas 3 semanas.",
        },
        {
          q: "¿El CRM o el agente IA vienen con la web?",
          a: "No. Se cotizan cuando el sitio ya está mandando chats. La web es el primer módulo.",
        },
      ],
      relatedTitle: "Siguiente paso",
      related: [
        {
          href: "/servicios/diseno-web",
          label: "Diseño web",
          sub: "La puerta. WhatsApp es el cierre.",
        },
        {
          href: "/servicios/seo-local",
          label: "SEO local",
          sub: "Maps + NAP + un toque a chat.",
        },
        {
          href: "/industrias/clinicas",
          label: "Clínicas",
          sub: "Citas desde Maps, no desde Instagram a las 11 pm.",
        },
      ],
      cta: "Pedir brief desde Santo Domingo",
      need: "Sitio web en Santo Domingo",
      serviceType: "Estudio web en Santo Domingo",
      areaServed: { "@type": "City", name: "Santo Domingo" },
      crumbs: [
        { name: "Inicio", path: "/" },
        { name: "Santo Domingo", path: "/santo-domingo" },
      ],
    },
    clinicas: {
      id: "clinicas",
      path: "/industrias/clinicas",
      metaTitle: "Sitios web para clínicas en República Dominicana",
      metaDescription:
        "Web y Google Maps para clínicas en RD: el paciente busca cerca, toca, y la cita llega por WhatsApp. Nativa, Santo Domingo.",
      label: "Clínicas",
      h1: "Clínicas en RD: el paciente te busca cerca y te escribe",
      answer:
        "Una clínica en Naco, Piantini o Bella Vista no necesita un portal de pacientes genérico. Necesita una web que carga en el celular, una ficha de Google Maps con el tratamiento correcto, y un toque que abre WhatsApp con “limpieza”, “carillas” o “brackets” ya en el mensaje. Nativa arma eso desde Santo Domingo. CRM y un agente de marca se cotizan cuando las citas ya están llegando al chat — no antes.",
      problemsTitle: "Qué deja de pasar en recepción",
      problems: [
        {
          title: "Citas por Instagram a las 11 pm",
          body: "El DM no trae el tratamiento ni el horario. Maps + WhatsApp sí: el paciente nombra lo que vio y pide cupo.",
        },
        {
          title: "Formulario de “solicitar cita” en el celular",
          body: "En RD casi nadie lo llena. El botón es chat, con el servicio prellenado, para que contestes desde el sillón.",
        },
        {
          title: "Ficha de Maps desconectada del sitio",
          body: "Horario distinto, teléfono de otra época, categoría “médico” genérica. Google no une las dos si el NAP no es el mismo.",
        },
      ],
      stepsTitle: "Cómo se monta para una clínica",
      steps: [
        {
          num: "01",
          title: "Brief de tratamientos y horarios",
          body: "Qué se ofrece, en qué idioma, cómo debe caer el lead. Quince minutos, no un deck.",
        },
        {
          num: "02",
          title: "Sitio + ficha, un solo NAP",
          body: "Mobile-first. Schema de negocio local. Maps con las mismas categorías, fotos y teléfono que el footer.",
        },
        {
          num: "03",
          title: "Toque a WhatsApp",
          body: "El mensaje sale con el tratamiento. Si más adelante hay volumen, se suma CRM y el agente que agenda.",
        },
      ],
      faqs: [
        {
          q: "¿Sirve para odontologías, o también otras clínicas?",
          a: "El patrón es el mismo: tratamiento visible, Maps, WhatsApp. Odontología, estética, oftalmología y consultorios que cierran por chat en RD.",
        },
        {
          q: "¿Hacen sitios bilingües para turismo médico?",
          a: "Sí. ES/EN cuando el mercado lo pide — capital o Punta Cana. No es un extra escondido al final del proyecto.",
        },
        {
          q: "¿SDQ Dental Care es un cliente en vivo?",
          a: "No. Es una plantilla de industria en /demo/sdq-dental, para ver el patrón. Los demos no se indexan como negocios reales.",
        },
        {
          q: "¿El sitio incluye agenda o expediente clínico?",
          a: "No. La web abre el chat. CRM y agente IA se cotizan después, sobre WhatsApp. Un HIS o expediente es otro proyecto.",
        },
      ],
      relatedTitle: "También en el stack",
      related: [
        {
          href: "/servicios/seo-local",
          label: "SEO local",
          sub: "Salir en Maps cuando buscan cerca.",
        },
        {
          href: "/servicios/diseno-web",
          label: "Diseño web",
          sub: "La puerta. El chat es el cierre.",
        },
        {
          href: "/santo-domingo",
          label: "Santo Domingo",
          sub: "El estudio está en la capital.",
        },
      ],
      cta: "Quiero citas por WhatsApp",
      need: "Sitio para clínica",
      serviceType: "Sitios web y SEO local para clínicas",
      areaServed: { "@type": "Country", name: "República Dominicana" },
      crumbs: [
        { name: "Inicio", path: "/" },
        { name: "Clínicas", path: "/industrias/clinicas" },
      ],
    },
  },
  en: {
    "santo-domingo": {
      id: "santo-domingo",
      path: "/santo-domingo",
      metaTitle: "Web studio in Santo Domingo",
      metaDescription:
        "Nativa is a web studio on Av. Winston Churchill, Santo Domingo. Fast sites, Google Maps SEO, and WhatsApp for businesses in the capital.",
      label: "Santo Domingo",
      h1: "A web studio in Santo Domingo: they find you nearby and text you",
      answer:
        "Nativa works from Av. Winston Churchill in the capital. This is not a remote kit for “all of Latin America”: it is a site that loads on a phone in Naco or Piantini, a Google Maps listing with the same name, address, and phone, and a tap that opens WhatsApp. Clinics, villas, workshops, firms, and shops in Santo Domingo — and Punta Cana when the client is there.",
      problemsTitle: "What looks wrong from the capital",
      problems: [
        {
          title: "The listing is incomplete, or not yours",
          body: "Old phone, Saturday marked closed, generic category. Maps does not invent the business. One version: Churchill and the real WhatsApp.",
        },
        {
          title: "The site does not confirm Santo Domingo",
          body: "Without NAP in the footer and in schema, Google will not join the site to the listing. Name, address, and phone stay identical in all three.",
        },
        {
          title: "The click dies in a form",
          body: "In the DR, the close is chat. Maps and the site tap open WhatsApp with the service named, not a mailbox you check on Monday.",
        },
      ],
      stepsTitle: "How it launches from here",
      steps: [
        {
          num: "01",
          title: "15-minute brief",
          body: "WhatsApp or a short call. Pages, photos, which neighborhoods search you, how the lead should land.",
        },
        {
          num: "02",
          title: "Preview on your phone",
          body: "A live link, not a PDF. You open it the way a client in Naco, Gazcue, or Churchill would.",
        },
        {
          num: "03",
          title: "Live, with Maps and chat",
          body: "The site ships. NAP matches. Every visit can text you. CRM and the agent come later, if volume exists.",
        },
      ],
      faqs: [
        {
          q: "Is Nativa actually in Santo Domingo?",
          a: "Yes. The studio operates from Av. Winston Churchill, Distrito Nacional. We serve the capital and the rest of the country, including Punta Cana and Bávaro.",
        },
        {
          q: "Is local SEO only for businesses in the capital?",
          a: "Santo Domingo is home base. The same stack — listing, NAP, schema, WhatsApp — works in Punta Cana and inland.",
        },
        {
          q: "How long does a Nativa site take in Santo Domingo?",
          a: "A landing page can ship in 48 hours. A multi-page site usually goes from brief to live in about 3 weeks.",
        },
        {
          q: "Do CRM or the AI agent come with the website?",
          a: "No. They are quoted once the site is sending chats. The website is the first module.",
        },
      ],
      relatedTitle: "Next step",
      related: [
        {
          href: "/servicios/diseno-web",
          label: "Website design",
          sub: "The door. WhatsApp is the close.",
        },
        {
          href: "/servicios/seo-local",
          label: "Local SEO",
          sub: "Maps + NAP + a tap to chat.",
        },
        {
          href: "/industrias/clinicas",
          label: "Clinics",
          sub: "Appointments from Maps, not Instagram at 11pm.",
        },
      ],
      cta: "Send a brief from Santo Domingo",
      need: "Website in Santo Domingo",
      serviceType: "Web studio in Santo Domingo",
      areaServed: { "@type": "City", name: "Santo Domingo" },
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Santo Domingo", path: "/santo-domingo" },
      ],
    },
    clinicas: {
      id: "clinicas",
      path: "/industrias/clinicas",
      metaTitle: "Websites for clinics in the Dominican Republic",
      metaDescription:
        "Websites and Google Maps for clinics in the DR: the patient searches nearby, taps, and the appointment lands on WhatsApp. Nativa, Santo Domingo.",
      label: "Clinics",
      h1: "Clinics in the DR: patients search nearby and text you",
      answer:
        "A clinic in Naco, Piantini, or Bella Vista does not need a generic patient portal. It needs a site that loads on a phone, a Google Maps listing with the right treatment, and a tap that opens WhatsApp with “cleaning”, “veneers”, or “braces” already in the message. Nativa builds that from Santo Domingo. CRM and a brand agent are quoted once appointments are already arriving in chat — not before.",
      problemsTitle: "What stops happening at reception",
      problems: [
        {
          title: "Appointments via Instagram at 11pm",
          body: "The DM does not name the treatment or the slot. Maps + WhatsApp does: the patient names what they saw and asks for a seat.",
        },
        {
          title: "A “request appointment” form on mobile",
          body: "Almost nobody fills it in the DR. The button is chat, with the service prefilled, so you answer from the chair.",
        },
        {
          title: "Maps listing disconnected from the site",
          body: "Different hours, an old phone, a generic “doctor” category. Google will not join the two if NAP does not match.",
        },
      ],
      stepsTitle: "How we set it up for a clinic",
      steps: [
        {
          num: "01",
          title: "Treatments and hours brief",
          body: "What you offer, which language, how the lead should land. Fifteen minutes, not a deck.",
        },
        {
          num: "02",
          title: "Site + listing, one NAP",
          body: "Mobile-first. Local-business schema. Maps with the same categories, photos, and phone as the footer.",
        },
        {
          num: "03",
          title: "Tap to WhatsApp",
          body: "The message leaves with the treatment. If volume comes later, we add CRM and the agent that books.",
        },
      ],
      faqs: [
        {
          q: "Is this only for dental, or other clinics too?",
          a: "Same pattern: visible treatment, Maps, WhatsApp. Dental, aesthetics, ophthalmology, and any practice that closes by chat in the DR.",
        },
        {
          q: "Do you build bilingual sites for medical tourism?",
          a: "Yes. ES/EN when the market needs it — capital or Punta Cana. It is not a hidden extra at the end.",
        },
        {
          q: "Is SDQ Dental Care a live client?",
          a: "No. It is an industry template at /demo/sdq-dental, to show the pattern. Demos are not indexed as real businesses.",
        },
        {
          q: "Does the site include scheduling or a clinical record?",
          a: "No. The site opens chat. CRM and the AI agent are quoted later, on WhatsApp. An HIS or charting system is a different project.",
        },
      ],
      relatedTitle: "Also in the stack",
      related: [
        {
          href: "/servicios/seo-local",
          label: "Local SEO",
          sub: "Show up on Maps when they search nearby.",
        },
        {
          href: "/servicios/diseno-web",
          label: "Website design",
          sub: "The door. Chat is the close.",
        },
        {
          href: "/santo-domingo",
          label: "Santo Domingo",
          sub: "The studio is in the capital.",
        },
      ],
      cta: "I want appointments on WhatsApp",
      need: "Clinic website",
      serviceType: "Websites and local SEO for clinics",
      areaServed: { "@type": "Country", name: "República Dominicana" },
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Clinics", path: "/industrias/clinicas" },
      ],
    },
  },
};
