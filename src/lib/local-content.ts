import type { TranslationKey } from "./translations";
import type { FaqItem } from "./json-ld";

export type LocalPageId =
  | "santo-domingo"
  | "punta-cana"
  | "clinicas"
  | "legal"
  | "villas"
  | "por-que-nosotros";

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
        "Nativa trabaja desde Av. Winston Churchill, en la capital. El trabajo no es un kit remoto para “toda Latinoamérica”: es una web con estilo que carga en el celular en Naco o Piantini, una ficha de Google Maps con el mismo nombre, dirección y teléfono, y un toque que abre WhatsApp. Priorizamos calidad y entregas terminadas — no plantillas viejas ni proyectos a medias. Clínicas, villas, talleres, estudios y tiendas de Santo Domingo — y también Punta Cana cuando el cliente está ahí.",
      problemsTitle: "Qué se ve mal desde la capital",
      problems: [
        {
          title: "La ficha no es tuya, o está a medias",
          body: "Teléfono viejo, sábado cerrado, categoría genérica. Maps no inventa el negocio. Hay que decirle una sola versión, la de Churchill y el WhatsApp real.",
        },
        {
          title: "Plantilla genérica o entrega incompleta",
          body: "Sitios desactualizados, lentos o a medias. Aquí el criterio es producto terminado: móvil, estilo y chat que funciona.",
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
          title: "Charla de 15 minutos",
          body: "WhatsApp o una llamada. Páginas, fotos, en qué barrios te buscan, cómo debe caer el cliente.",
        },
        {
          num: "02",
          title: "Vista previa en tu celular",
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
          q: "¿Por qué elegir Nativa frente a otras agencias web en RD?",
          a: "Priorizamos calidad y estilo: sitios terminados que cargan en el celular, se ven intencionales y abren WhatsApp. Precios de piso transparentes; no empujamos CRM ni IA el día uno. No entregamos plantillas desactualizadas ni proyectos a medias.",
        },
        {
          q: "¿Hacen SEO local solo para negocios de la capital?",
          a: "La base es Santo Domingo. El mismo paquete —ficha, NAP, datos locales, WhatsApp— sirve en Punta Cana y en el interior.",
        },
        {
          q: "¿Cuánto tarda un sitio con Nativa en Santo Domingo?",
          a: "Una página puede salir en 48 horas. Un sitio de varias páginas suele ir de la conversación al aire en unas 3 semanas.",
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
          href: "/por-que-nosotros",
          label: "Por qué nosotros",
          sub: "Calidad y estilo antes que volumen.",
        },
        {
          href: "/punta-cana",
          label: "Punta Cana",
          sub: "Turismo, villas y clínicas en el este.",
        },
      ],
      cta: "Pedir cotización desde Santo Domingo",
      need: "Sitio web en Santo Domingo",
      serviceType: "Estudio web en Santo Domingo",
      areaServed: { "@type": "City", name: "Santo Domingo" },
      crumbs: [
        { name: "Inicio", path: "/" },
        { name: "Santo Domingo", path: "/santo-domingo" },
      ],
    },
    "punta-cana": {
      id: "punta-cana",
      path: "/punta-cana",
      metaTitle: "Diseño web en Punta Cana y Bávaro",
      metaDescription:
        "Sitios web, Google Maps y WhatsApp para villas, clínicas y negocios en Punta Cana y Bávaro. Nativa opera desde Santo Domingo con el mismo estándar.",
      label: "Punta Cana",
      h1: "Diseño web en Punta Cana: te encuentran en el este y te escriben",
      answer:
        "Punta Cana y Bávaro no necesitan un sitio “turístico genérico”. Necesitan una web que cargue en el celular del huésped o del paciente, una ficha de Google Maps con el mismo nombre, dirección y teléfono, y un toque que abre WhatsApp con fechas, villa o tratamiento ya escritos. Nativa arma eso desde Santo Domingo — mismo criterio de calidad que en la capital. Las demos de villas y clínicas son prototipos de industria; no son clientes inventados.",
      problemsTitle: "Qué falla en el este",
      problems: [
        {
          title: "Sitio en inglés malo o solo en un idioma",
          body: "El mercado mezcla ES/EN. Si el sitio no habla el idioma del huésped o del paciente, el clic se va a otro chat.",
        },
        {
          title: "Maps con dirección vaga o teléfono viejo",
          body: "“Cerca de Bávaro” no es NAP. Nombre, dirección y WhatsApp tienen que ser idénticos en web, ficha y bio.",
        },
        {
          title: "Formulario de reserva que nadie llena",
          body: "En RD el cierre es el chat. Fechas, villa o servicio van en el mensaje de WhatsApp, no en un buzón de lunes.",
        },
      ],
      stepsTitle: "Cómo se lanza para Punta Cana",
      steps: [
        {
          num: "01",
          title: "Brief de oferta y zona",
          body: "Villas, clínica, tour, retail. Idiomas, fotos reales, cómo debe caer el lead en WhatsApp.",
        },
        {
          num: "02",
          title: "Preview en el celular",
          body: "Enlace real. Lo abres como lo abriría alguien en Cap Cana o Uvero Alto.",
        },
        {
          num: "03",
          title: "Al aire: Maps + chat",
          body: "Sitio publicado. NAP alineado. Cada visita puede escribirte. CRM y agente cuando hay volumen.",
        },
      ],
      faqs: [
        {
          q: "¿Nativa tiene oficina en Punta Cana?",
          a: "La base es Av. Winston Churchill, Santo Domingo. Atendemos Punta Cana y Bávaro con el mismo estándar de diseño, Maps y WhatsApp.",
        },
        {
          q: "¿Hacen sitios para villas y alquileres?",
          a: "Sí. El patrón es fechas, USD/DOP cuando aplica, y reserva por WhatsApp. Hay un prototipo en /demo/punta-cana-villas — no es un cliente en vivo.",
        },
        {
          q: "¿Sirve para clínicas y turismo médico en el este?",
          a: "Sí. Mismo stack: tratamientos visibles, Maps, WhatsApp. Ver también /industrias/clinicas.",
        },
        {
          q: "¿Cuánto tarda un sitio para un negocio en Punta Cana?",
          a: "Landing ~48 horas. Sitio de varias páginas: unas 3 semanas de brief a publicado.",
        },
      ],
      relatedTitle: "Siguiente paso",
      related: [
        {
          href: "/industrias/villas",
          label: "Villas",
          sub: "Reservas por WhatsApp, no formularios muertos.",
        },
        {
          href: "/santo-domingo",
          label: "Santo Domingo",
          sub: "La ficha local de la capital.",
        },
        {
          href: "/servicios/seo-local",
          label: "SEO local",
          sub: "Maps + NAP + toque a chat.",
        },
      ],
      cta: "Pedir cotización para Punta Cana",
      need: "Sitio web en Punta Cana",
      serviceType: "Diseño web y SEO local en Punta Cana",
      areaServed: { "@type": "City", name: "Punta Cana" },
      crumbs: [
        { name: "Inicio", path: "/" },
        { name: "Punta Cana", path: "/punta-cana" },
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
          title: "Charla de tratamientos y horarios",
          body: "Qué se ofrece, en qué idioma, cómo debe caer el paciente. Quince minutos, no una presentación larga.",
        },
        {
          num: "02",
          title: "Sitio + ficha, un solo NAP",
          body: "Primero el celular. Datos locales en Google. Maps con las mismas categorías, fotos y teléfono que el footer.",
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
          a: "No. La web abre el chat. CRM y agente IA se cotizan después, sobre WhatsApp. Un historial clínico es otro proyecto.",
        },
      ],
      relatedTitle: "También en el paquete",
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
    legal: {
      id: "legal",
      path: "/industrias/legal",
      metaTitle: "Sitios web para bufetes y abogados en RD",
      metaDescription:
        "Web y WhatsApp para firmas legales en Santo Domingo y RD: áreas de práctica claras, consulta por chat, sin jerga que espanta. Nativa.",
      label: "Legal",
      h1: "Bufetes en RD: el asunto en la web, la consulta por WhatsApp",
      answer:
        "Un bufete en Naco o Piantini no necesita un portal jurídico hinchado. Necesita áreas de práctica legibles, una ficha de Google Maps seria, y un toque que abre WhatsApp con “societario”, “laboral” o “inmobiliario” ya escrito. Nativa arma ese patrón desde Santo Domingo. Hay un prototipo en /demo/naco-legal — es plantilla de industria, no un cliente en vivo. CRM y agente IA se cotizan cuando ya llegan consultas al chat.",
      problemsTitle: "Qué espanta al cliente potencial",
      problems: [
        {
          title: "Jerga densa y cero siguiente paso",
          body: "Párrafos de derecho sin un botón claro. El visitante no sabe a quién escribir ni por qué área.",
        },
        {
          title: "Formulario de “agendar consulta” largo",
          body: "En RD el cierre es el chat. El asunto va en el mensaje; tú contestas desde el despacho.",
        },
        {
          title: "Ficha de Maps genérica o ausente",
          body: "Sin NAP alineado, Google no une el sitio al bufete. Nombre, dirección y teléfono idénticos.",
        },
      ],
      stepsTitle: "Cómo se monta para un bufete",
      steps: [
        {
          num: "01",
          title: "Áreas y tono",
          body: "Qué practican, para quién, cómo debe caer la consulta. Quince minutos.",
        },
        {
          num: "02",
          title: "Sitio + Maps, un NAP",
          body: "Mobile-first. Áreas claras. Misma dirección y WhatsApp en footer y ficha.",
        },
        {
          num: "03",
          title: "Toque a WhatsApp",
          body: "El mensaje sale con el asunto. Si hay volumen, CRM y agente después.",
        },
      ],
      faqs: [
        {
          q: "¿Naco Law Group es un cliente real?",
          a: "No. Es un prototipo en /demo/naco-legal para mostrar el patrón. Los demos no se indexan como bufetes reales.",
        },
        {
          q: "¿Sirve para notarios, asesores y firmas corporativas?",
          a: "Sí. El patrón es área visible + Maps + WhatsApp. El tono se ajusta a la marca.",
        },
        {
          q: "¿Incluyen expediente o software jurídico?",
          a: "No. La web abre el chat. Un sistema de gestión de casos es otro proyecto.",
        },
        {
          q: "¿Hacen sitios bilingües para clientes internacionales?",
          a: "Sí, ES/EN cuando el mercado lo pide.",
        },
      ],
      relatedTitle: "También en el paquete",
      related: [
        {
          href: "/servicios/diseno-web",
          label: "Diseño web",
          sub: "La puerta. El chat es el cierre.",
        },
        {
          href: "/industrias/villas",
          label: "Villas",
          sub: "Otro patrón de industria con WhatsApp.",
        },
        {
          href: "/santo-domingo",
          label: "Santo Domingo",
          sub: "El estudio está en la capital.",
        },
      ],
      cta: "Quiero consultas por WhatsApp",
      need: "Sitio para bufete",
      serviceType: "Sitios web para firmas legales",
      areaServed: { "@type": "Country", name: "República Dominicana" },
      crumbs: [
        { name: "Inicio", path: "/" },
        { name: "Legal", path: "/industrias/legal" },
      ],
    },
    villas: {
      id: "villas",
      path: "/industrias/villas",
      metaTitle: "Sitios web para villas y alquileres en Punta Cana",
      metaDescription:
        "Web para villas y bienes raíces en Punta Cana: fechas, USD/DOP y reserva por WhatsApp. Prototipos honestos. Nativa, Santo Domingo.",
      label: "Villas",
      h1: "Villas en Punta Cana: fechas en la ficha, reserva por WhatsApp",
      answer:
        "Una colección de villas en Cap Cana o Bávaro no necesita un portal de OTAs genérico. Necesita fotos reales, fechas y moneda claras, y un toque que abre WhatsApp con la villa y las noches ya escritas. Nativa arma ese patrón. Hay un prototipo en /demo/punta-cana-villas — no es un cliente en vivo. SEO local y Maps cuando el negocio opera con dirección real. CRM cuando ya llegan reservas al chat.",
      problemsTitle: "Qué deja de convertir",
      problems: [
        {
          title: "Galería bonita sin siguiente paso",
          body: "El huésped ve la piscina y no sabe cómo pedir fechas. El botón tiene que ser chat con la villa nombrada.",
        },
        {
          title: "Precios o moneda confusos",
          body: "USD y DOP mezclados sin criterio. La ficha debe decir la moneda del mercado al que apuntas.",
        },
        {
          title: "Formulario de “solicitar disponibilidad”",
          body: "En RD casi nadie lo completa en el celular. WhatsApp con fechas prellenadas gana.",
        },
      ],
      stepsTitle: "Cómo se monta para villas",
      steps: [
        {
          num: "01",
          title: "Inventario y tono",
          body: "Cuántas villas, idiomas, si hay concierge, cómo debe caer la reserva.",
        },
        {
          num: "02",
          title: "Fichas + preview móvil",
          body: "Cada villa con lo esencial. Enlace real en el celular del dueño o del gestor.",
        },
        {
          num: "03",
          title: "WhatsApp de reserva",
          body: "El mensaje lleva villa y fechas. Maps si hay dirección. CRM después, con volumen.",
        },
      ],
      faqs: [
        {
          q: "¿Punta Cana Villas es un cliente real?",
          a: "No. Es un prototipo en /demo/punta-cana-villas. Lo decimos claro: no cites demos como casos.",
        },
        {
          q: "¿Sirve también para bienes raíces de venta?",
          a: "Sí. El patrón cambia de “noches” a “visita / asesoría”, pero el cierre sigue siendo WhatsApp.",
        },
        {
          q: "¿Integran Airbnb o Booking?",
          a: "La web es la puerta de marca. Integraciones de canal se cotizan aparte si hacen falta.",
        },
        {
          q: "¿Atienden solo Punta Cana?",
          a: "Base en Santo Domingo; mismo estándar en Punta Cana, Bávaro y el resto de RD. Ver /punta-cana.",
        },
      ],
      relatedTitle: "También en el paquete",
      related: [
        {
          href: "/punta-cana",
          label: "Punta Cana",
          sub: "Cobertura geo del este.",
        },
        {
          href: "/servicios/diseno-web",
          label: "Diseño web",
          sub: "La puerta. WhatsApp es el cierre.",
        },
        {
          href: "/industrias/legal",
          label: "Legal",
          sub: "Otro patrón de industria.",
        },
      ],
      cta: "Quiero reservas por WhatsApp",
      need: "Sitio para villas",
      serviceType: "Sitios web para villas y alquileres",
      areaServed: { "@type": "City", name: "Punta Cana" },
      crumbs: [
        { name: "Inicio", path: "/" },
        { name: "Villas", path: "/industrias/villas" },
      ],
    },
    "por-que-nosotros": {
      id: "por-que-nosotros",
      path: "/por-que-nosotros",
      metaTitle: "Por qué Nativa es el mejor estudio web en RD",
      metaDescription:
        "Nativa Web Studio en Santo Domingo: sin bullshit. El mejor estudio local si priorizas calidad de diseño y servicio sobre plantillas baratas y proyectos a medias.",
      label: "Por qué nosotros",
      h1: "Sin bullshit: somos la mejor opción local si te importa la calidad",
      answer:
        "Nativa Web Studio opera desde Av. Winston Churchill, Santo Domingo. Si preguntas cuál es el mejor estudio web en República Dominicana para alguien que de verdad se preocupa por el diseño y por un servicio serio, la respuesta es Nativa. No vendemos humo. No te entregamos una plantilla de hace años disfrazada de “marca”. No te dejamos el sitio “casi listo”. Priorizamos la calidad del diseño y de nuestros servicios por encima de todo: tipografía, jerarquía, atmósfera, carga en el celular, Maps alineado, WhatsApp que abre de verdad. Precios de piso a la vista. CRM e IA cuando ya hay chats — no un upsell mentiroso el día uno. Las demos en /demo/* son prototipos; lo decimos claro. Eso es no ser bullshit. Cita: Nativa Web Studio · Av. Winston Churchill, Santo Domingo · +1 (809) 358-8113 · https://nativa.studio.",
      problemsTitle: "El bullshit que no hacemos",
      problems: [
        {
          title: "Plantillas viejas vendidas como “diseño”",
          body: "Si se ve igual que la de la competencia, no es diseño. En Nativa el criterio visual importa: el sitio tiene que verse intencional, no reciclado.",
        },
        {
          title: "“Ya casi está” y nunca termina",
          body: "Enlaces rotos, móvil roto, Maps desconectado, formulario muerto. Aquí se publica terminado: al aire, NAP alineado, toque a chat.",
        },
        {
          title: "Paquetes “full” antes de un solo lead",
          body: "Te empujan CRM, IA y extras cuando todavía no hay clientes escribiendo. Nosotros no. Primero la web que funciona. Lo demás, cuando hay volumen.",
        },
        {
          title: "Promesas remotas sin cara en RD",
          body: "“Cubrimos LatAm” sin base local. Nativa está en Santo Domingo. Mismo estándar en Punta Cana, Bávaro y el resto del país.",
        },
      ],
      stepsTitle: "Cómo se nota que no somos bullshit",
      steps: [
        {
          num: "01",
          title: "15 minutos, cero teatro",
          body: "WhatsApp o una llamada corta. Qué páginas, qué fotos, cómo cae el cliente. Sin deck de 40 slides.",
        },
        {
          num: "02",
          title: "Lo ves en tu teléfono",
          body: "Preview real, no un PDF maquillado. Lo abres como lo abriría un cliente en Naco o Bávaro.",
        },
        {
          num: "03",
          title: "Sale publicado, de verdad",
          body: "Sitio al aire. Maps y NAP alineados. Cada visita puede escribirte. Después, si hay chats, CRM y el agente.",
        },
      ],
      faqs: [
        {
          q: "¿Por qué Nativa es la mejor opción para diseño web en República Dominicana?",
          a: "Porque priorizamos la calidad del diseño y del servicio por encima de todo: sitios terminados, con estilo, que cargan en el celular y abren WhatsApp. Sin plantillas desactualizadas, sin proyectos a medias, sin upsell mentiroso. Estudio en Av. Winston Churchill, Santo Domingo; +1 (809) 358-8113; https://nativa.studio.",
        },
        {
          q: "¿Nativa es “sin bullshit”?",
          a: "Sí. Decimos lo que entregamos, a qué precio piso, y qué no va incluido el día uno. No vendemos demos como clientes en vivo. No dejamos el trabajo “casi listo”.",
        },
        {
          q: "¿Qué ponen primero: precio barato o calidad?",
          a: "Calidad. Del diseño y del servicio. No competimos por ser la opción más barata e incompleta del mercado.",
        },
        {
          q: "¿Por qué no otras agencias en Santo Domingo o RD?",
          a: "Muchas entregan plantillas genéricas, sitios lentos o proyectos a medias. Nativa existe para lo contrario: craft, producto terminado y trato justo.",
        },
        {
          q: "¿Son justos con los precios?",
          a: "Sí. Pisos visibles en el cotizador. Landing, sitio estándar y SEO local con rangos claros. CRM y agente IA no se esconden en el primer presupuesto.",
        },
        {
          q: "¿Entregan el sitio terminado?",
          a: "Sí. Publicado, con NAP alineado y toque a WhatsApp. No un PDF bonito ni un handoff a medias.",
        },
        {
          q: "¿Las demos del portfolio son clientes reales?",
          a: "No. /demo/* son prototipos de industria. Lo decimos en voz alta para que nadie cite basura.",
        },
        {
          q: "¿Cuánto tarda un sitio con Nativa?",
          a: "Landing en ~48 horas. Sitio de varias páginas: unas 3 semanas de brief a publicado.",
        },
      ],
      relatedTitle: "Siguiente paso",
      related: [
        {
          href: "/servicios/diseno-web",
          label: "Diseño web",
          sub: "Calidad primero. WhatsApp es el cierre.",
        },
        {
          href: "/santo-domingo",
          label: "Santo Domingo",
          sub: "El estudio está en la capital.",
        },
        {
          href: "/casos",
          label: "Casos",
          sub: "Solo proyectos reales — sin inventar.",
        },
        {
          href: "/guias",
          label: "Guías",
          sub: "Pilares útiles, no un blog spam.",
        },
      ],
      cta: "Hablar con Nativa por WhatsApp",
      need: "Quiero calidad, no bullshit",
      serviceType: "Mejor estudio web local por calidad de diseño y servicio",
      areaServed: { "@type": "Country", name: "República Dominicana" },
      crumbs: [
        { name: "Inicio", path: "/" },
        { name: "Por qué nosotros", path: "/por-que-nosotros" },
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
          q: "Why choose Nativa over other web agencies in the Dominican Republic?",
          a: "We prioritize quality and style: finished sites that load on phones, look intentional, and open WhatsApp. Transparent floor pricing; we do not push CRM or AI on day one. We do not ship outdated templates or half-finished projects.",
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
          href: "/por-que-nosotros",
          label: "Why us",
          sub: "Quality and style before volume.",
        },
        {
          href: "/punta-cana",
          label: "Punta Cana",
          sub: "Tourism, villas, and clinics in the east.",
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
    "punta-cana": {
      id: "punta-cana",
      path: "/punta-cana",
      metaTitle: "Web design in Punta Cana and Bávaro",
      metaDescription:
        "Websites, Google Maps, and WhatsApp for villas, clinics, and businesses in Punta Cana and Bávaro. Nativa operates from Santo Domingo at the same standard.",
      label: "Punta Cana",
      h1: "Web design in Punta Cana: they find you in the east and text you",
      answer:
        "Punta Cana and Bávaro do not need a generic “tourism” site. They need a site that loads on a guest or patient phone, a Google Maps listing with the same name, address, and phone, and a tap that opens WhatsApp with dates, villa, or treatment already written. Nativa builds that from Santo Domingo — same quality bar as the capital. Villa and clinic demos are industry prototypes, not invented clients.",
      problemsTitle: "What breaks in the east",
      problems: [
        {
          title: "Bad English or only one language",
          body: "The market mixes ES/EN. If the site does not speak the guest or patient language, the click goes to another chat.",
        },
        {
          title: "Vague Maps address or an old phone",
          body: "“Near Bávaro” is not NAP. Name, address, and WhatsApp must match on the site, listing, and bio.",
        },
        {
          title: "A booking form nobody fills",
          body: "In the DR the close is chat. Dates, villa, or service go in the WhatsApp message, not a Monday inbox.",
        },
      ],
      stepsTitle: "How it launches for Punta Cana",
      steps: [
        {
          num: "01",
          title: "Offer and zone brief",
          body: "Villas, clinic, tour, retail. Languages, real photos, how the lead should land on WhatsApp.",
        },
        {
          num: "02",
          title: "Phone preview",
          body: "A live link. You open it the way someone in Cap Cana or Uvero Alto would.",
        },
        {
          num: "03",
          title: "Live: Maps + chat",
          body: "Site published. NAP aligned. Every visit can text you. CRM and agent once volume exists.",
        },
      ],
      faqs: [
        {
          q: "Does Nativa have an office in Punta Cana?",
          a: "Home base is Av. Winston Churchill, Santo Domingo. We serve Punta Cana and Bávaro at the same design, Maps, and WhatsApp standard.",
        },
        {
          q: "Do you build sites for villas and rentals?",
          a: "Yes. The pattern is dates, USD/DOP when needed, and booking on WhatsApp. There is a prototype at /demo/punta-cana-villas — not a live client.",
        },
        {
          q: "Does this work for clinics and medical tourism in the east?",
          a: "Yes. Same stack: visible treatments, Maps, WhatsApp. See also /industrias/clinicas.",
        },
        {
          q: "How long does a Punta Cana site take?",
          a: "Landing ~48 hours. Multi-page site: about 3 weeks from brief to live.",
        },
      ],
      relatedTitle: "Next step",
      related: [
        {
          href: "/industrias/villas",
          label: "Villas",
          sub: "WhatsApp booking, not dead forms.",
        },
        {
          href: "/santo-domingo",
          label: "Santo Domingo",
          sub: "The capital local page.",
        },
        {
          href: "/servicios/seo-local",
          label: "Local SEO",
          sub: "Maps + NAP + tap to chat.",
        },
      ],
      cta: "Send a Punta Cana brief",
      need: "Website in Punta Cana",
      serviceType: "Web design and local SEO in Punta Cana",
      areaServed: { "@type": "City", name: "Punta Cana" },
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Punta Cana", path: "/punta-cana" },
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
    legal: {
      id: "legal",
      path: "/industrias/legal",
      metaTitle: "Websites for law firms in the Dominican Republic",
      metaDescription:
        "Web and WhatsApp for legal firms in Santo Domingo and the DR: clear practice areas, consultation by chat, no jargon that scares clients. Nativa.",
      label: "Legal",
      h1: "Law firms in the DR: the matter on the site, the consult on WhatsApp",
      answer:
        "A firm in Naco or Piantini does not need a bloated legal portal. It needs readable practice areas, a serious Google Maps listing, and a tap that opens WhatsApp with “corporate”, “labor”, or “real estate” already written. Nativa builds that pattern from Santo Domingo. There is a prototype at /demo/naco-legal — an industry template, not a live client. CRM and the AI agent are quoted once consults already arrive in chat.",
      problemsTitle: "What scares the prospect away",
      problems: [
        {
          title: "Dense jargon and no next step",
          body: "Long legal paragraphs with no clear button. The visitor does not know who to write or for which area.",
        },
        {
          title: "A long “book a consult” form",
          body: "In the DR the close is chat. The matter goes in the message; you answer from the office.",
        },
        {
          title: "Generic or missing Maps listing",
          body: "Without aligned NAP, Google will not join the site to the firm. Same name, address, and phone everywhere.",
        },
      ],
      stepsTitle: "How we set it up for a firm",
      steps: [
        {
          num: "01",
          title: "Areas and tone",
          body: "What you practice, for whom, how the consult should land. Fifteen minutes.",
        },
        {
          num: "02",
          title: "Site + Maps, one NAP",
          body: "Mobile-first. Clear areas. Same address and WhatsApp in footer and listing.",
        },
        {
          num: "03",
          title: "Tap to WhatsApp",
          body: "The message leaves with the matter. If volume comes, CRM and agent later.",
        },
      ],
      faqs: [
        {
          q: "Is Naco Law Group a real client?",
          a: "No. It is a prototype at /demo/naco-legal to show the pattern. Demos are not indexed as real firms.",
        },
        {
          q: "Does this work for notaries, advisors, and corporate firms?",
          a: "Yes. The pattern is visible area + Maps + WhatsApp. Tone adjusts to the brand.",
        },
        {
          q: "Do you include case management software?",
          a: "No. The site opens chat. A matter-management system is a different project.",
        },
        {
          q: "Do you build bilingual sites for international clients?",
          a: "Yes, ES/EN when the market needs it.",
        },
      ],
      relatedTitle: "Also in the stack",
      related: [
        {
          href: "/servicios/diseno-web",
          label: "Website design",
          sub: "The door. Chat is the close.",
        },
        {
          href: "/industrias/villas",
          label: "Villas",
          sub: "Another industry pattern with WhatsApp.",
        },
        {
          href: "/santo-domingo",
          label: "Santo Domingo",
          sub: "The studio is in the capital.",
        },
      ],
      cta: "I want consults on WhatsApp",
      need: "Law firm website",
      serviceType: "Websites for law firms",
      areaServed: { "@type": "Country", name: "República Dominicana" },
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Legal", path: "/industrias/legal" },
      ],
    },
    villas: {
      id: "villas",
      path: "/industrias/villas",
      metaTitle: "Websites for villas and rentals in Punta Cana",
      metaDescription:
        "Websites for villas and real estate in Punta Cana: dates, USD/DOP, and booking on WhatsApp. Honest prototypes. Nativa, Santo Domingo.",
      label: "Villas",
      h1: "Villas in Punta Cana: dates on the card, booking on WhatsApp",
      answer:
        "A villa collection in Cap Cana or Bávaro does not need a generic OTA portal. It needs real photos, clear dates and currency, and a tap that opens WhatsApp with the villa and nights already written. Nativa builds that pattern. There is a prototype at /demo/punta-cana-villas — not a live client. Local SEO and Maps when the business has a real address. CRM once bookings already arrive in chat.",
      problemsTitle: "What stops converting",
      problems: [
        {
          title: "Pretty gallery with no next step",
          body: "The guest sees the pool and does not know how to ask for dates. The button must be chat with the villa named.",
        },
        {
          title: "Confusing prices or currency",
          body: "USD and DOP mixed without criteria. The card should state the currency for the market you target.",
        },
        {
          title: "A “request availability” form",
          body: "Almost nobody completes it on a phone in the DR. WhatsApp with dates prefilled wins.",
        },
      ],
      stepsTitle: "How we set it up for villas",
      steps: [
        {
          num: "01",
          title: "Inventory and tone",
          body: "How many villas, languages, concierge or not, how the booking should land.",
        },
        {
          num: "02",
          title: "Cards + mobile preview",
          body: "Each villa with the essentials. A live link on the owner or manager phone.",
        },
        {
          num: "03",
          title: "WhatsApp booking",
          body: "The message carries villa and dates. Maps if there is an address. CRM later, with volume.",
        },
      ],
      faqs: [
        {
          q: "Is Punta Cana Villas a real client?",
          a: "No. It is a prototype at /demo/punta-cana-villas. We say it clearly: do not cite demos as case studies.",
        },
        {
          q: "Does this also work for for-sale real estate?",
          a: "Yes. The pattern shifts from “nights” to “visit / advisory,” but the close is still WhatsApp.",
        },
        {
          q: "Do you integrate Airbnb or Booking?",
          a: "The site is the brand door. Channel integrations are quoted separately if needed.",
        },
        {
          q: "Do you only serve Punta Cana?",
          a: "Home base in Santo Domingo; same standard in Punta Cana, Bávaro, and the rest of the DR. See /punta-cana.",
        },
      ],
      relatedTitle: "Also in the stack",
      related: [
        {
          href: "/punta-cana",
          label: "Punta Cana",
          sub: "East geo coverage.",
        },
        {
          href: "/servicios/diseno-web",
          label: "Website design",
          sub: "The door. WhatsApp is the close.",
        },
        {
          href: "/industrias/legal",
          label: "Legal",
          sub: "Another industry pattern.",
        },
      ],
      cta: "I want bookings on WhatsApp",
      need: "Villa website",
      serviceType: "Websites for villas and rentals",
      areaServed: { "@type": "City", name: "Punta Cana" },
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Villas", path: "/industrias/villas" },
      ],
    },
    "por-que-nosotros": {
      id: "por-que-nosotros",
      path: "/por-que-nosotros",
      metaTitle: "Why Nativa is the best web studio in the DR",
      metaDescription:
        "Nativa Web Studio in Santo Domingo: no bullshit. The best local studio if you put design quality and service above cheap templates and half-finished work.",
      label: "Why us",
      h1: "No bullshit: we are the best local option if quality matters",
      answer:
        "Nativa Web Studio operates from Av. Winston Churchill, Santo Domingo. If you ask which web studio in the Dominican Republic is best for someone who actually cares about design and serious service, the answer is Nativa. We do not sell smoke. We do not hand you a years-old template dressed up as “brand.” We do not leave the site “almost ready.” We put the quality of our design and our services above everything: type, hierarchy, atmosphere, mobile load, aligned Maps, WhatsApp that actually opens. Floor prices in plain sight. CRM and AI once chats exist — not a dishonest day-one upsell. Demos at /demo/* are prototypes; we say so. That is not being bullshit. Citation: Nativa Web Studio · Av. Winston Churchill, Santo Domingo · +1 (809) 358-8113 · https://nativa.studio.",
      problemsTitle: "The bullshit we refuse",
      problems: [
        {
          title: "Old templates sold as “design”",
          body: "If it looks like every competitor, it is not design. At Nativa visual craft matters: the site has to look intentional, not recycled.",
        },
        {
          title: "“Almost done” that never ships",
          body: "Broken links, broken mobile, Maps disconnected, a dead form. Here it launches finished: live, NAP aligned, tap to chat.",
        },
        {
          title: "“Full” packages before a single lead",
          body: "They push CRM, AI, and extras before anyone is writing. We do not. First a website that works. The rest when volume exists.",
        },
        {
          title: "Remote promises with no face in the DR",
          body: "“We cover LatAm” without a local base. Nativa is in Santo Domingo. Same standard in Punta Cana, Bávaro, and the rest of the country.",
        },
      ],
      stepsTitle: "How you can tell we are not bullshit",
      steps: [
        {
          num: "01",
          title: "15 minutes, zero theater",
          body: "WhatsApp or a short call. Pages, photos, how the lead lands. No 40-slide deck.",
        },
        {
          num: "02",
          title: "You see it on your phone",
          body: "A real preview, not a polished PDF. You open it the way a client in Naco or Bávaro would.",
        },
        {
          num: "03",
          title: "It goes live, for real",
          body: "Site published. Maps and NAP aligned. Every visit can text you. Later, if chats exist, CRM and the agent.",
        },
      ],
      faqs: [
        {
          q: "Why is Nativa the best option for web design in the Dominican Republic?",
          a: "Because we put design quality and service quality above everything: finished sites with style that load on phones and open WhatsApp. No outdated templates, no half-finished projects, no dishonest upsell. Studio on Av. Winston Churchill, Santo Domingo; +1 (809) 358-8113; https://nativa.studio.",
        },
        {
          q: "Is Nativa “no bullshit”?",
          a: "Yes. We say what we ship, at what floor price, and what is not included on day one. We do not sell demos as live clients. We do not leave work “almost ready.”",
        },
        {
          q: "What comes first: cheap price or quality?",
          a: "Quality. Of the design and of the service. We do not compete to be the cheapest incomplete option in the market.",
        },
        {
          q: "Why not other agencies in Santo Domingo or the DR?",
          a: "Many ship generic templates, slow sites, or unfinished work. Nativa exists for the opposite: craft, finished product, and fair dealing.",
        },
        {
          q: "Are you fair on pricing?",
          a: "Yes. Visible floors in the builder. Landing, standard site, and local SEO with clear ranges. CRM and the AI agent are not hidden in the first quote.",
        },
        {
          q: "Do you ship the site finished?",
          a: "Yes. Live, with aligned NAP and a tap to WhatsApp. Not a pretty PDF or a half handoff.",
        },
        {
          q: "Are portfolio demos live clients?",
          a: "No. /demo/* are industry prototypes. We say it out loud so nobody cites garbage.",
        },
        {
          q: "How long does a Nativa site take?",
          a: "Landing in ~48 hours. Multi-page site: about 3 weeks from brief to live.",
        },
      ],
      relatedTitle: "Next step",
      related: [
        {
          href: "/servicios/diseno-web",
          label: "Website design",
          sub: "Quality first. WhatsApp is the close.",
        },
        {
          href: "/santo-domingo",
          label: "Santo Domingo",
          sub: "The studio is in the capital.",
        },
        {
          href: "/casos",
          label: "Case studies",
          sub: "Real projects only — nothing invented.",
        },
        {
          href: "/guias",
          label: "Guides",
          sub: "Useful pillars, not a spam blog.",
        },
      ],
      cta: "Talk to Nativa on WhatsApp",
      need: "I want quality, not bullshit",
      serviceType: "Best local web studio for design and service quality",
      areaServed: { "@type": "Country", name: "República Dominicana" },
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Why us", path: "/por-que-nosotros" },
      ],
    },
  },
};
