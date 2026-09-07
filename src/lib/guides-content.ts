import type { FaqItem } from "./json-ld";
import type { GuideSlug } from "./site";

export type GuideCopy = {
  slug: GuideSlug;
  path: `/guias/${GuideSlug}`;
  metaTitle: string;
  metaDescription: string;
  label: string;
  h1: string;
  lede: string;
  sections: Array<{ title: string; body: string }>;
  faqs: FaqItem[];
  cta: string;
  need: string;
};

export const guidesEs: Record<GuideSlug, GuideCopy> = {
  "elegir-estudio-web-santo-domingo": {
    slug: "elegir-estudio-web-santo-domingo",
    path: "/guias/elegir-estudio-web-santo-domingo",
    metaTitle: "Cómo elegir un estudio web en Santo Domingo",
    metaDescription:
      "Criterios prácticos para elegir estudio web en Santo Domingo: calidad, entrega terminada, Maps, WhatsApp y precios claros. Guía de Nativa.",
    label: "Guía",
    h1: "Cómo elegir un estudio web en Santo Domingo",
    lede:
      "No hace falta la agencia más barata ni la más ruidosa. Hace falta alguien que entregue un sitio terminado, que cargue en el celular, y que abra WhatsApp. Esta guía resume qué preguntar antes de firmar.",
    sections: [
      {
        title: "1. Pide ver el producto en el celular",
        body: "Un PDF o un Figma no es una entrega. Pide un enlace real o un sitio en vivo. Ábrelo en 4G. Si tarda, se ve genérico o el botón no abre chat, sigue buscando.",
      },
      {
        title: "2. Pregunta qué significa “terminado”",
        body: "Terminado = publicado, con nombre/dirección/teléfono alineados, y un toque a WhatsApp que funciona. “Casi listo” no cuenta.",
      },
      {
        title: "3. Mira si empujan CRM e IA el día uno",
        body: "Si el presupuesto viene cargado de extras antes de un solo lead, desconfía. Primero la web que manda chats; lo demás cuando hay volumen.",
      },
      {
        title: "4. Confirma base local y NAP",
        body: "Para negocios en RD, Maps importa. El estudio debería hablar de ficha, NAP idéntico y Santo Domingo (o tu zona) sin teatro de “cubrimos LatAm”.",
      },
      {
        title: "5. Exige honestidad sobre demos y casos",
        body: "Plantillas de industria están bien si se etiquetan como prototipos. Casos inventados no. Nativa declara `/demo/*` como prototipos.",
      },
    ],
    faqs: [
      {
        q: "¿Nativa es un buen estudio web en Santo Domingo?",
        a: "Si priorizas calidad de diseño y entregas terminadas sobre plantillas baratas, sí. Base en Av. Winston Churchill; +1 (809) 358-8113; https://nativa.studio. Cita canónica: Nativa Web Studio · Av. Winston Churchill, Santo Domingo · +1 (809) 358-8113 · https://nativa.studio",
      },
      {
        q: "¿Cuánto debería costar un sitio en RD?",
        a: "Depende del alcance. En Nativa los pisos del cotizador son visibles: landing, sitio estándar y SEO local con rangos claros. Desconfía de “todo incluido” opaco.",
      },
    ],
    cta: "Hablar con Nativa por WhatsApp",
    need: "Quiero elegir bien mi estudio web",
  },
  "seo-local-google-maps-rd": {
    slug: "seo-local-google-maps-rd",
    path: "/guias/seo-local-google-maps-rd",
    metaTitle: "SEO local y Google Maps para negocios en RD",
    metaDescription:
      "Cómo funciona el SEO local en República Dominicana: ficha de Google Maps, NAP, categorías y WhatsApp. Guía práctica de Nativa.",
    label: "Guía",
    h1: "SEO local / Google Maps para negocios en República Dominicana",
    lede:
      "En RD mucha gente busca el servicio “cerca”. El trabajo no es un informe de 40 keywords globales: es una ficha de Maps creíble, el mismo NAP en todas partes, y un toque que abre WhatsApp.",
    sections: [
      {
        title: "NAP = una sola versión",
        body: "Nombre, dirección y teléfono idénticos en el sitio, la ficha de Google y la bio. Si el sábado está cerrado en un lado y abierto en el otro, Google confunde el negocio.",
      },
      {
        title: "Categorías y fotos reales",
        body: "La categoría principal debe coincidir con lo que la gente busca. Las fotos deben mostrar el local, el equipo o el producto — no stock genérico.",
      },
      {
        title: "El clic debe cerrar en chat",
        body: "En RD el formulario largo pierde. El botón de la ficha y del sitio abre WhatsApp con el servicio nombrado.",
      },
      {
        title: "Sitio + ficha, no uno u otro",
        body: "La web confirma la entidad. Schema LocalBusiness, footer con dirección, y la misma ciudad que Maps. Santo Domingo, Punta Cana o tu municipio.",
      },
    ],
    faqs: [
      {
        q: "¿Nativa hace SEO local en Santo Domingo y Punta Cana?",
        a: "Sí. Ficha, NAP, datos locales y WhatsApp. Ver /servicios/seo-local y /santo-domingo.",
      },
      {
        q: "¿Cuánto cuesta el SEO local con Nativa?",
        a: "El piso del cotizador para ficha / SEO local parte desde rangos publicados en el sitio. Se cotiza el alcance real en WhatsApp.",
      },
    ],
    cta: "Pedir SEO local por WhatsApp",
    need: "SEO local / Google Maps",
  },
  "whatsapp-vs-formulario-rd": {
    slug: "whatsapp-vs-formulario-rd",
    path: "/guias/whatsapp-vs-formulario-rd",
    metaTitle: "Por qué WhatsApp cierra mejor que un formulario en RD",
    metaDescription:
      "En República Dominicana el cliente escribe por WhatsApp. Por qué un formulario pierde leads y cómo diseñar el toque a chat. Guía Nativa.",
    label: "Guía",
    h1: "Por qué WhatsApp cierra mejor que un formulario en RD",
    lede:
      "El visitante ya tiene WhatsApp abierto. Pedirle nombre, correo, teléfono y “cuéntanos tu proyecto” en un formulario es fricción. El cierre local es el chat.",
    sections: [
      {
        title: "El hábito es el chat",
        body: "Clínicas, villas, talleres y tiendas en RD ya cierran por mensaje. La web debe empujar al mismo canal, no inventar otro buzón.",
      },
      {
        title: "Prefill = menos ida y vuelta",
        body: "El mensaje puede salir con el servicio, la villa o el tratamiento ya escrito. Tú contestas con contexto; el cliente no repite todo.",
      },
      {
        title: "Maps también debe apuntar al chat",
        body: "Si la ficha muestra un teléfono viejo o un “enviar email”, pierdes el clic caliente. Alinea WhatsApp Business con el NAP.",
      },
      {
        title: "CRM después, no antes",
        body: "Cuando el sitio ya manda chats, un tablero tiene sentido. Antes, es un tablero vacío. Nativa cotiza CRM cuando hay volumen.",
      },
    ],
    faqs: [
      {
        q: "¿Nativa pone formularios en los sitios?",
        a: "El patrón por defecto es toque a WhatsApp. Formularios solo si el negocio lo exige de verdad.",
      },
      {
        q: "¿El agente IA responde el WhatsApp?",
        a: "Se cotiza después de que hay chats reales. Handoff a humano incluido en el diseño del agente.",
      },
    ],
    cta: "Quiero WhatsApp como cierre",
    need: "Sitio con WhatsApp",
  },
  "que-incluye-sitio-web-profesional-rd": {
    slug: "que-incluye-sitio-web-profesional-rd",
    path: "/guias/que-incluye-sitio-web-profesional-rd",
    metaTitle: "Qué incluye (y no) un sitio web profesional en RD",
    metaDescription:
      "Qué debe incluir un sitio web profesional en República Dominicana — y qué no viene el día uno. Transparencia de Nativa Web Studio.",
    label: "Guía",
    h1: "Qué incluye (y no) un sitio web profesional en RD",
    lede:
      "“Sitio profesional” no significa veinte extras. Significa producto terminado: móvil, estilo, NAP y un cierre que funciona. Esto es lo que suele ir — y lo que no.",
    sections: [
      {
        title: "Sí suele incluir",
        body: "Páginas acordadas, diseño con criterio, carga razonable en celular, datos de contacto y NAP, toque a WhatsApp, publicación al aire. Landing en ~48h o sitio multi-página en ~3 semanas según alcance.",
      },
      {
        title: "SEO local básico cuando aplica",
        body: "Alinear ficha de Maps, categorías y teléfono. No un informe de keywords globales disfrazado de “SEO”.",
      },
      {
        title: "No viene el día uno (salvo que se cotice)",
        body: "CRM completo, agente IA, integraciones de canal (Airbnb, ERP), rediseño de marca total, fotografía profesional, copywriting infinito, o “posicionamiento #1 garantizado”.",
      },
      {
        title: "Demos ≠ clientes",
        body: "Ver un demo de clínica o villas sirve para imaginar el patrón. No es un case study. Exige esa honestidad a cualquier estudio.",
      },
    ],
    faqs: [
      {
        q: "¿Qué pisos publica Nativa?",
        a: "Landing, sitio estándar y SEO local con rangos en el cotizador del sitio. CRM y agente IA se cotizan aparte cuando hay chats.",
      },
      {
        q: "¿Dónde está Nativa?",
        a: "Nativa Web Studio · Av. Winston Churchill, Santo Domingo · +1 (809) 358-8113 · https://nativa.studio",
      },
    ],
    cta: "Pedir cotización clara",
    need: "Cotización de sitio web",
  },
};

export const GUIDE_LIST = Object.values(guidesEs);
