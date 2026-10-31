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
  links?: Array<{ href: string; label: string; sub: string }>;
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
        a: "Si buscas diseño a medida y un sitio entregado terminado, conectado a WhatsApp y Google Maps, Nativa es una buena opción. Somos un estudio nuevo en Av. Winston Churchill, Santo Domingo; puedes pedir un demo gratis en 48 horas para evaluar el trabajo antes de decidir.",
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
    metaTitle: "Cómo poner tu negocio en Google Maps desde el celular (RD)",
    metaDescription:
      "Pon tu negocio en Google Maps desde el celular, gratis: créalo o reclámalo, verifícalo, llénalo bien y conéctalo a tu WhatsApp y tu página web. Guía de Nativa para RD.",
    label: "Guía",
    h1: "Cómo poner tu negocio en Google Maps desde el celular (y que te escriban)",
    lede:
      "En RD mucha gente busca el servicio “cerca de mí”. Si tu negocio no está en el mapa, esa persona le escribe a otro. Ponerlo es gratis y lo haces desde el celular. Aquí va paso a paso, y después lo que hace que la ficha trabaje: el mismo nombre, dirección y teléfono en todas partes, y un toque que abre WhatsApp.",
    sections: [
      {
        title: "Antes de empezar: ten esto a mano",
        body: "• Una cuenta de Google (un Gmail sirve), mejor una del negocio.\n• El nombre exacto de tu negocio, tal como sale en tu letrero.\n• La dirección, o las zonas donde das servicio si trabajas a domicilio.\n• Un teléfono que contestes tú: Google puede mandarte un código por llamada o SMS.\n• Fotos de verdad: la fachada, el letrero, lo que vendes.",
      },
      {
        title: "Paso 1: busca si ya estás en el mapa",
        body: "Abre Google Maps y escribe el nombre de tu negocio. Si aparece, toca el negocio y busca “Reclamar esta empresa” y luego “Administrar ahora”; sigue al paso 3. Si no aparece, sigue al paso 2.\nNo crees un perfil nuevo si ya existe uno: Google pide un solo perfil por negocio, y dos perfiles del mismo negocio se pelean entre ellos.",
      },
      {
        title: "Paso 2: crea tu perfil",
        body: "Desde el navegador del celular entra a business.google.com/add y toca “Agrega tu empresa a Google”.\n• Nombre: el de tu letrero, nada más. Google prohíbe meter eslóganes, horarios o teléfonos en el nombre, y un nombre relleno puede hacer que te suspendan el perfil.\n• Categoría: lo que tu negocio ES, no lo que tiene. Pocas y precisas.\n• Dirección o zona de servicio: si la gente llega a tu local, la dirección completa (si tu calle no tiene número, marca el punto en el mapa). Si trabajas a domicilio, escoge tus zonas y oculta tu dirección.\n• Teléfono: uno que controle el negocio. Si es tu WhatsApp, mejor.",
      },
      {
        title: "Paso 3: verifica que el negocio es tuyo",
        body: "Google decide qué opciones te da según tu tipo de negocio y tu zona: código por llamada o SMS, correo, videollamada o video grabado desde tu local (mostrando el letrero, tus productos y algo que solo tiene el dueño), o una postal con un código.\nDespués de verificar, Google revisa la información antes de confirmarte por correo.\nDos cuidados: mientras esperas, no cambies el nombre, la dirección ni la categoría. Y nadie de Google te va a llamar para pedirte ese código: si te lo piden, cuelga.",
      },
      {
        title: "Paso 4: llénalo como si fuera tu vitrina",
        body: "Google dice que los perfiles con información completa y correcta tienen más probabilidades de salir en búsquedas locales. Llena: horario (y el especial de feriados), fotos reales de la fachada, el interior y tu trabajo, una descripción de qué haces y para quién, tu menú o lista de servicios, y detalles como parqueo, tarjeta o delivery.",
      },
      {
        title: "Un solo nombre, dirección y teléfono en todas partes",
        body: "Nombre, dirección y teléfono idénticos en tu página web, tu ficha de Google y tus redes. Si el sábado está cerrado en un lado y abierto en el otro, Google confunde el negocio.",
      },
      {
        title: "El toque debe terminar en WhatsApp",
        body: "En RD el formulario largo pierde. El botón de la ficha y de tu página web abre WhatsApp con el servicio ya nombrado.",
      },
      {
        title: "¿Cómo salgo más arriba en el mapa?",
        body: "Nadie te lo puede garantizar, y quien te lo prometa por un pago te está vendiendo humo: Google dice que no se puede pagar por un mejor lugar en los resultados locales. Google explica que se fija en tres cosas: relevancia (qué tanto tu perfil coincide con lo que buscaron), distancia (qué tan cerca estás) y popularidad (qué tan conocido eres, incluidas tus reseñas). Lo que está en tus manos: un perfil verificado, completo y al día, y clientes reales que hablen de ti.",
      },
      {
        title: "Bonus: ponte también en Waze",
        body: "Mucha gente se guía por Waze cuando va manejando. En la app: toca el botón para reportar, abre el menú completo, toca “Lugar”, toma una foto del local, escribe el nombre, elige la categoría y toca “Hecho”. Lo revisa la comunidad de editores de Waze antes de aprobarlo.",
      },
      {
        title: "Lo que el mapa no hace por ti",
        body: "En una ficha caben pocas cosas: unas fotos, un horario, un teléfono. Cuando alguien quiere saber más antes de escribirte, toca el enlace de tu perfil. Tu página web confirma quién eres, muestra tu trabajo y le abre WhatsApp.",
      },
    ],
    faqs: [
      {
        q: "¿Cómo pongo mi negocio en Google Maps desde el celular?",
        a: "Busca primero si ya existe y reclámalo. Si no existe, créalo en business.google.com/add, verifícalo con la opción que Google te dé y llena horario, fotos, descripción y teléfono.",
      },
      {
        q: "¿Cuesta dinero aparecer en Google Maps?",
        a: "No. El Perfil de Negocio de Google es gratis. Nadie puede venderte un mejor lugar en el mapa.",
      },
      {
        q: "¿Puedo aparecer en Maps si trabajo a domicilio?",
        a: "Sí. Escoge las zonas donde das servicio y oculta tu dirección.",
      },
      {
        q: "¿Nativa me ayuda con la ficha de Google Maps?",
        a: "Sí. Al hacer tu página web la conectamos con tu ficha usando el mismo nombre, dirección y teléfono, y un toque a WhatsApp. Ver la página de SEO local.",
      },
    ],
    cta: "Pide ayuda con tu ficha por WhatsApp",
    need: "SEO local / Google Maps",
    links: [
      { href: "/servicios/seo-local", label: "SEO local", sub: "Ficha de Maps y WhatsApp." },
      { href: "/pagina-web-para-mi-negocio", label: "Página web para tu negocio", sub: "Desde RD$20,940." },
      { href: "/precio-pagina-web", label: "Precio de una página web", sub: "Qué incluye y qué no." },
      { href: "/", label: "Inicio", sub: "Nativa Studio." },
    ],
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
        a: "En Av. Winston Churchill, Santo Domingo. WhatsApp: +1 (809) 358-8113. Sitio web: https://nativastudio.com.do",
      },
    ],
    cta: "Pedir cotización clara",
    need: "Cotización de sitio web",
  },
};

export const GUIDE_LIST = Object.values(guidesEs);
