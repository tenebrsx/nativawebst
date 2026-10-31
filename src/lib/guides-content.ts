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
  "instagram-vs-pagina-web": {
    slug: "instagram-vs-pagina-web",
    path: "/guias/instagram-vs-pagina-web",
    metaTitle: "Instagram vs página web: ¿qué necesita tu negocio?",
    metaDescription:
      "Instagram te ayuda a que te vean, pero no es tuyo. Qué hace una página web que Instagram no hace, y por qué tu negocio en RD necesita los dos.",
    label: "Guía",
    h1: "Instagram vs página web: por qué tu negocio necesita un lugar propio",
    lede:
      "Instagram es buenísimo para que te vean, y nadie te va a decir que lo dejes. Pero ese espacio no es tuyo: las reglas las pone otro. Esta guía explica qué hace cada uno y por qué funcionan mejor juntos.",
    sections: [
      {
        title: "Tu perfil es una vitrina alquilada",
        body: "Si mañana te suspenden la cuenta o el algoritmo cambia, pierdes tus fotos, tus mensajes y la forma de avisarle a tus seguidores dónde encontrarte. Tus seguidores no son tus contactos.",
      },
      {
        title: "No todo el que te busca está en Instagram",
        body: "Quien necesita un taller, una clínica o un restaurante saca el celular y escribe en Google “cerca de mí”. Ahí salen las fichas de Google Maps y las páginas web. Si solo vives en Instagram, en ese momento no existes.",
      },
      {
        title: "En Instagram, tu cliente tiene que trabajar",
        body: "Para saber cuánto cobras, a qué hora abres o dónde estás, tiene que bajar entre posts o escribirte y esperar. Una página web responde eso de una vez, con un botón para escribirte por WhatsApp.",
      },
      {
        title: "“Pero ya tengo el horario en la bio y WhatsApp Business”",
        body: "Sirve. Pero la bio vive dentro de Instagram, y WhatsApp solo le sirve a quien ya sabe que existes. Una página web la encuentra cualquiera, desde cualquier celular, sin app ni cuenta. Basta con cuatro cosas: qué haces, desde cuánto cuesta, dónde estás y a qué hora abres, y un botón de WhatsApp.",
      },
      {
        title: "No es una cosa o la otra",
        body: "Instagram atrae. Tu página web cierra. Instagram es donde te descubren; tu página es donde confirman que eres serio y te escriben. Por eso el enlace de tu perfil debería llevar a ella.",
      },
    ],
    faqs: [
      { q: "¿Necesito página web si ya tengo Instagram?", a: "Sí, si quieres que te encuentren en Google y tener un lugar que sea tuyo. Instagram sigue siendo útil para que te descubran." },
      { q: "¿Qué debe tener una página web sencilla?", a: "Qué haces, desde cuánto cuesta, dónde estás, tu horario y un botón de WhatsApp." },
      { q: "¿Cuánto cuesta una página web con Nativa?", a: "Desde RD$20,940, pago único. Una tienda online empieza en RD$35,000." },
    ],
    cta: "Quiero mi página web",
    need: "Página web (vengo de Instagram)",
    links: [
      { href: "/pagina-web-para-mi-negocio", label: "Página web para tu negocio", sub: "Desde RD$20,940, pago único." },
      { href: "/precio-pagina-web", label: "Precios", sub: "Página web y tienda online." },
      { href: "/guias/seo-local-google-maps-rd", label: "Google Maps desde el celular", sub: "Guía paso a paso." },
      { href: "/", label: "Inicio", sub: "Nativa Studio." },
    ],
  },
  "como-responder-resena-una-estrella": {
    slug: "como-responder-resena-una-estrella",
    path: "/guias/como-responder-resena-una-estrella",
    metaTitle: "Cómo responder una reseña de una estrella en Google",
    metaDescription:
      "Te dejaron una estrella en Google. Cómo responder sin pelear, cuándo denunciar una reseña y cómo conseguir más reseñas reales sin romper las reglas.",
    label: "Guía",
    h1: "Cómo responder una reseña de una estrella (sin pelear)",
    lede:
      "Lo primero que dan ganas es contestar caliente. Respira: tu respuesta no es para esa persona, es para todos los clientes que vienen detrás y la van a leer.",
    sections: [
      {
        title: "Tu respuesta la lee todo el mundo",
        body: "Cuando respondes una reseña en Google, tu respuesta sale publicada debajo, a nombre de tu negocio, y a quien la escribió le llega una notificación. Hasta puede cambiar su reseña después de leerte.",
      },
      {
        title: "Lo que Google recomienda",
        body: "• Sé amable y breve.\n• Nada de ataques ni datos privados del cliente.\n• Reconoce lo que fue tu culpa y explica sin pelear lo que no estaba en tus manos.\n• Pide disculpas si toca y ofrece seguir la conversación por teléfono o WhatsApp.\n• Firma con tu nombre o iniciales.\n• Responde pronto.",
      },
      {
        title: "Un ejemplo de respuesta",
        body: "“Hola, María. Lamentamos que la espera del sábado no fuera lo que esperabas; tienes razón en que debimos avisarte. Escríbenos al WhatsApp del negocio y lo resolvemos. — Carlos, gerente.” Corta, sin excusas largas y con una salida concreta.",
      },
      {
        title: "“Pero esa persona ni vino al negocio”",
        body: "Si una reseña rompe las reglas de Google (es falsa, spam, tiene insultos o datos personales), denúnciala desde tu Perfil de Negocio. Google la revisa y la quita solo si incumple sus políticas. No se denuncia una reseña solo porque no te gusta.",
      },
      {
        title: "La mejor defensa: muchas reseñas reales",
        body: "Una estrella entre tres reseñas se ve fatal; entre cuarenta, se ve como un mal día. Desde tu Perfil de Negocio puedes sacar un enlace o código QR para pedir reseñas: ponlo en el mostrador o mándalo por WhatsApp después de atender.\nLíneas que no se cruzan: nada de descuentos o regalos a cambio de reseñas, no le pidas reseña solo al que salió contento, y no le dictes a nadie lo que tiene que escribir.",
      },
    ],
    faqs: [
      { q: "¿Debo responder una reseña negativa?", a: "Sí. Con calma, breve y con una salida concreta. Tu respuesta la leen todos tus clientes futuros." },
      { q: "¿Puedo borrar una reseña mala de Google?", a: "No puedes borrarla tú. Puedes denunciarla si rompe las políticas de Google; si solo es injusta, se queda." },
      { q: "¿Puedo ofrecer un descuento a cambio de reseñas?", a: "No. Google prohíbe ofrecer descuentos, regalos o servicios a cambio de reseñas." },
    ],
    cta: "Pide ayuda con tu ficha de Google",
    need: "Reseñas y Google Maps",
    links: [
      { href: "/servicios/seo-local", label: "SEO local", sub: "Tu ficha de Google Maps, completa." },
      { href: "/guias/seo-local-google-maps-rd", label: "Google Maps desde el celular", sub: "Guía paso a paso." },
      { href: "/pagina-web-para-mi-negocio", label: "Página web para tu negocio", sub: "Desde RD$20,940, pago único." },
      { href: "/precio-pagina-web", label: "Precios", sub: "Página web y tienda online." },
      { href: "/", label: "Inicio", sub: "Nativa Studio." },
    ],
  },
  "cuanto-cuesta-mantener-pagina-web": {
    slug: "cuanto-cuesta-mantener-pagina-web",
    path: "/guias/cuanto-cuesta-mantener-pagina-web",
    metaTitle: "Cuánto cuesta mantener una página web en RD",
    metaDescription:
      "Qué pagas cada año o cada mes después de tener tu página web: dominio, hosting, cambios y soporte. Sin mensualidad obligatoria con Nativa.",
    label: "Guía",
    h1: "Cuánto cuesta mantener una página web en República Dominicana",
    lede:
      "Después de pagar tu página web, ¿qué más hay que pagar? Depende de quién te la haga. Esta guía separa lo que es obligatorio de lo que es opcional, para que preguntes antes de firmar.",
    sections: [
      {
        title: "Lo que se renueva cada año: el dominio",
        body: "El nombre de tu página (tunegocio.com o .com.do) se renueva cada año con el proveedor del dominio. Debe quedar a nombre de tu negocio, no de quien te hizo la página.",
      },
      {
        title: "Dónde vive tu página: el hosting",
        body: "Tu página web tiene que estar alojada en algún servidor. Pregunta si está incluido y por cuánto tiempo, o si es un pago aparte.",
      },
      {
        title: "Correcciones vs. cambios",
        body: "Corregir algo que no funciona no debería costarte. Cambiar precios, fotos o agregar secciones sí es trabajo nuevo. Pide que te lo separen por escrito.",
      },
      {
        title: "Cómo lo hacemos en Nativa",
        body: "No hay mensualidad obligatoria. El soporte Estándar va incluido: corregimos errores y te respondemos por WhatsApp. Si quieres cambios cada mes, el plan Activo suma cambios, actualizaciones y monitoreo por RD$3,000 al mes. Ese plan todavía es un borrador y puede cambiar.",
      },
      {
        title: "Qué preguntar antes de pagar",
        body: "• ¿Hay pagos mensuales obligatorios?\n• ¿El dominio queda a mi nombre?\n• ¿Qué cuenta como corrección y qué como cambio?\n• ¿Qué pasa con mi página si dejo de pagar el plan mensual?",
      },
    ],
    faqs: [
      { q: "¿Cuánto cuesta mantener una página web al mes?", a: "Con Nativa, nada obligatorio. El plan Activo opcional cuesta RD$3,000 al mes (precio en borrador, por confirmar)." },
      { q: "¿Tengo que pagar el dominio cada año?", a: "Sí, el dominio se renueva cada año con el proveedor. Te ayudamos a que quede a nombre de tu negocio." },
      { q: "¿Qué pasa si no tomo un plan mensual?", a: "Tu página sigue funcionando y las correcciones de errores siguen incluidas. Los cambios grandes se cotizan aparte." },
    ],
    cta: "Pregunta por el soporte",
    need: "Mantenimiento web",
    links: [
      { href: "/servicios/mantenimiento-web", label: "Mantenimiento web", sub: "Estándar incluido y Activo opcional." },
      { href: "/pagina-web-para-mi-negocio", label: "Página web para tu negocio", sub: "Desde RD$20,940, pago único." },
      { href: "/precio-pagina-web", label: "Precios", sub: "Página web y tienda online." },
      { href: "/", label: "Inicio", sub: "Nativa Studio." },
    ],
  },
  "como-atraer-clientes-a-tu-negocio": {
    slug: "como-atraer-clientes-a-tu-negocio",
    path: "/guias/como-atraer-clientes-a-tu-negocio",
    metaTitle: "Cómo atraer clientes a tu negocio en RD",
    metaDescription:
      "Ideas prácticas para atraer clientes a tu negocio en República Dominicana: Google Maps, reseñas, WhatsApp, Instagram y una página web propia.",
    label: "Guía",
    h1: "Cómo atraer clientes a tu negocio en República Dominicana",
    lede:
      "No hace falta un presupuesto grande. Hace falta que te encuentren cuando te buscan, que confíen cuando te ven y que escribirte sea fácil. Estas son las bases, en orden.",
    sections: [
      {
        title: "1. Aparece donde te buscan: Google Maps",
        body: "Mucha gente busca “cerca de mí”. Una ficha de Google Maps verificada y completa (horario, fotos reales, teléfono) es gratis y es lo primero que ven.",
      },
      {
        title: "2. Gánate la confianza: reseñas reales",
        body: "Pide reseñas a todos tus clientes por igual, con el enlace o QR de tu perfil. Responde todas, también las malas, con calma.",
      },
      {
        title: "3. Que escribirte sea un toque: WhatsApp",
        body: "En RD el cliente cierra por chat. Cada botón de tu ficha, tus redes y tu página web debería abrir WhatsApp con el servicio ya nombrado.",
      },
      {
        title: "4. Muestra tu trabajo: Instagram",
        body: "Instagram sirve para que te descubran y vean lo que haces. Pon en la bio el enlace a tu página web, no solo tu número.",
      },
      {
        title: "5. Ten un lugar propio: tu página web",
        body: "Tu página web junta todo: qué haces, desde cuánto cuesta, dónde estás, tus fotos y tu WhatsApp. Es lo que revisa el cliente antes de decidir, y es tuya.",
      },
      {
        title: "6. Cuando llegan muchos mensajes",
        body: "Si ya no das abasto con el chat, un agente de WhatsApp puede responder lo repetido y agendar citas, y un CRM guarda a cada cliente. Primero lo básico; esto viene después.",
      },
    ],
    faqs: [
      { q: "¿Cuál es la forma más barata de atraer clientes?", a: "Una ficha de Google Maps completa y reseñas reales. Las dos son gratis." },
      { q: "¿Necesito pagar anuncios?", a: "No para empezar. Primero que te encuentren y que escribirte sea fácil; los anuncios funcionan mejor cuando eso ya está." },
      { q: "¿Una página web me trae clientes sola?", a: "Nadie puede prometerte clientes. Una página web hace que quien te busca te encuentre, confíe y te escriba." },
    ],
    cta: "Hablemos por WhatsApp",
    need: "Atraer clientes",
    links: [
      { href: "/pagina-web-para-mi-negocio", label: "Página web para tu negocio", sub: "Desde RD$20,940, pago único." },
      { href: "/precio-pagina-web", label: "Precios", sub: "Página web y tienda online." },
      { href: "/guias/instagram-vs-pagina-web", label: "Instagram vs página web", sub: "Por qué necesitas los dos." },
      { href: "/servicios/agentes-ia", label: "Agendar citas por WhatsApp", sub: "Agente de WhatsApp." },
      { href: "/santiago", label: "Santiago", sub: "Negocios del Cibao." },
      { href: "/punta-cana", label: "Punta Cana", sub: "Negocios del este." },
      { href: "/", label: "Inicio", sub: "Nativa Studio." },
    ],
  },
};

export const GUIDE_LIST = Object.values(guidesEs);
