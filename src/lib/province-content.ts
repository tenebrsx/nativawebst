import type { LocalPageCopy } from "./local-content";

/**
 * SEO Wave 2 — province pages (Spanish only; the EN toggle shows this same copy).
 * Real local detail per city, not a name swap. No delivery-time, speed or ranking promises.
 * Nativa works from Santo Domingo and serves these cities remotely by WhatsApp/llamada — never claim a local office.
 */
export type ProvinceId = "santiago" | "la-romana" | "san-pedro-de-macoris" | "puerto-plata" | "la-vega";

const PRECIO = {
  q: "¿Cuánto cuesta una página web?",
  a: "Desde RD$20,940, pago único. Una tienda online empieza en RD$35,000. Los detalles están en la página de precios.",
};

const baseRelated = [
  { href: "/pagina-web-para-mi-negocio", label: "Página web para tu negocio", sub: "Desde RD$20,940." },
  { href: "/precio-pagina-web", label: "Precios", sub: "Qué incluye y qué no." },
  { href: "/guias/seo-local-google-maps-rd", label: "Google Maps desde el celular", sub: "Guía paso a paso." },
] as const;

function province(
  id: ProvinceId,
  name: string,
  rest: Omit<LocalPageCopy, "id" | "path" | "serviceType" | "areaServed" | "crumbs" | "relatedTitle" | "need" | "stepsTitle" | "steps"> & {
    steps?: LocalPageCopy["steps"];
  },
): LocalPageCopy {
  return {
    id,
    path: `/${id}`,
    serviceType: `Páginas web para negocios en ${name}`,
    areaServed: { "@type": "City", name },
    crumbs: [
      { name: "Inicio", path: "/" },
      { name, path: `/${id}` },
    ],
    relatedTitle: "Sigue leyendo",
    need: `Página web en ${name}`,
    stepsTitle: "Cómo trabajamos contigo a distancia",
    steps: rest.steps ?? [
      { num: "01", title: "Una charla por WhatsApp", body: "Qué vendes, a quién y cómo te escriben hoy. Sin que tengas que viajar a la capital." },
      { num: "02", title: "Vista previa en tu celular", body: "Un enlace real para revisarla como la vería un cliente tuyo." },
      { num: "03", title: "Publicada y conectada", body: "La publicamos con tu WhatsApp y tu ficha de Google Maps con el mismo nombre, dirección y teléfono." },
    ],
    ...rest,
  };
}

export const provinceCopy: Record<ProvinceId, LocalPageCopy> = {
  santiago: province("santiago", "Santiago", {
    metaTitle: "Páginas web en Santiago de los Caballeros",
    metaDescription:
      "Página web para tu negocio en Santiago de los Caballeros: te encuentran en Google Maps desde todo el Cibao y te escriben por WhatsApp. Desde RD$20,940.",
    label: "Santiago",
    h1: "Páginas web para negocios en Santiago de los Caballeros",
    answer:
      "Santiago es el centro comercial del Cibao. A tu negocio llega gente de Moca, Tamboril, Navarrete o Licey a comprar, a una cita o a resolver, y antes de salir de casa te buscan en el celular. Nativa hace páginas web para negocios de Santiago: con estilo, conectadas a tu ficha de Google Maps y con un toque que abre tu WhatsApp. Trabajamos desde Santo Domingo, por WhatsApp y llamada.",
    problemsTitle: "Lo que pasa en Santiago",
    problems: [
      {
        title: "“Santiago” también es Chile",
        body: "Si tu página web y tu ficha dicen solo “Santiago”, Google puede confundirte. Escribimos “Santiago de los Caballeros, República Dominicana” y tu sector (Los Jardines, Cerros de Gurabo, el centro) para que quede claro.",
      },
      {
        title: "Te visitan desde todo el Cibao",
        body: "Quien viene de Moca o de La Vega no conoce tu calle. Tu página le muestra cómo llegar, tu horario y le abre WhatsApp para confirmar antes del viaje.",
      },
      {
        title: "Si le vendes a otras empresas",
        body: "Zonas francas, tabaco, manufactura y servicios: si tu cliente es otra empresa, tu página web es lo primero que revisa para ver si eres formal.",
      },
    ],
    faqs: [
      { q: "¿Tienen oficina en Santiago?", a: "No. Trabajamos desde Santo Domingo, por WhatsApp y llamada, con negocios de Santiago y de todo el país." },
      {
        q: "Busco “páginas web en Santiago” y salen resultados de Chile. ¿Cómo evito eso?",
        a: "Pon “Santiago de los Caballeros” o “RD” en tu página web y en tu ficha de Google Maps, con tu sector. Así Google sabe de qué Santiago eres.",
      },
      { q: "¿Sirve para negocios de Moca, Tamboril o Navarrete?", a: "Sí. La página funciona igual; lo que cambia es la zona que pones en tu ficha y en tu página." },
      PRECIO,
    ],
    related: [...baseRelated, { href: "/la-vega", label: "La Vega", sub: "Jarabacoa y Constanza." }],
    cta: "Escríbenos desde Santiago",
  }),

  "la-romana": province("la-romana", "La Romana", {
    metaTitle: "Páginas web en La Romana",
    metaDescription:
      "Página web para tu negocio en La Romana: para clientes de aquí y visitantes de Casa de Campo, Altos de Chavón y el puerto de cruceros. Desde RD$20,940.",
    label: "La Romana",
    h1: "Páginas web para negocios en La Romana",
    answer:
      "En La Romana atiendes a dos clientes: la gente de la ciudad y la que llega de visita por el puerto de cruceros, Casa de Campo, Altos de Chavón o camino a Bayahibe. Quien viene de fuera no conoce tu negocio: lo busca en el celular. Nativa hace páginas web para negocios de La Romana, en español y, si te sirve, también en inglés, conectadas a Google Maps y a tu WhatsApp.",
    problemsTitle: "Lo que pasa en La Romana",
    problems: [
      {
        title: "El visitante decide con el celular",
        body: "Quien baja de un crucero o se queda en Casa de Campo tiene pocas horas. Si no ve dónde estás, fotos reales y un botón de WhatsApp, elige a otro.",
      },
      {
        title: "Español e inglés",
        body: "Si atiendes turistas, tu página puede tener versión en inglés con el mismo botón a WhatsApp. Si tu cliente es local, no hace falta.",
      },
      {
        title: "La gente de aquí también compara",
        body: "Tus clientes de todos los días buscan horario, precio y ubicación antes de escribir. Tu página les responde eso sin que tengas que repetirlo.",
      },
    ],
    faqs: [
      { q: "¿Tienen oficina en La Romana?", a: "No. Trabajamos desde Santo Domingo, por WhatsApp y llamada, con negocios de todo el país." },
      { q: "¿Mi página web sirve para turistas?", a: "La ve cualquiera que te busque, de aquí o de fuera. Si atiendes turistas, sumamos la versión en inglés." },
      { q: "¿Sirve para negocios en Bayahibe o Dominicus?", a: "Sí. Ponemos la zona correcta en tu página y en tu ficha de Google Maps." },
      PRECIO,
    ],
    related: [...baseRelated, { href: "/punta-cana", label: "Punta Cana", sub: "Turismo en el este." }],
    cta: "Escríbenos desde La Romana",
  }),

  "san-pedro-de-macoris": province("san-pedro-de-macoris", "San Pedro de Macorís", {
    metaTitle: "Páginas web en San Pedro de Macorís",
    metaDescription:
      "Página web para tu negocio en San Pedro de Macorís y Juan Dolio: te encuentran en Google Maps y te escriben por WhatsApp. Desde RD$20,940.",
    label: "San Pedro de Macorís",
    h1: "Páginas web para negocios en San Pedro de Macorís",
    answer:
      "San Pedro se mueve: universidad, zona franca, ingenios, pelota y, a pocos minutos, Juan Dolio y Guayacanes. Estudiantes, trabajadores, familias y visitantes buscan todos los días dónde comer, a quién llamar o dónde quedarse. Nativa hace páginas web para negocios de San Pedro de Macorís, conectadas a tu ficha de Google Maps y con un toque que abre tu WhatsApp.",
    problemsTitle: "Lo que pasa en San Pedro",
    problems: [
      {
        title: "Gente nueva todos los días",
        body: "Estudiantes de la universidad y trabajadores de la zona franca que acaban de llegar no conocen tu negocio. Te buscan “cerca de mí”.",
      },
      {
        title: "Juan Dolio y la costa",
        body: "Si tu negocio está en Juan Dolio o Guayacanes, mucho cliente viene de la capital el fin de semana. Tu página le muestra dónde estás y le abre WhatsApp para reservar.",
      },
      {
        title: "Tu barrio también usa el celular",
        body: "Aunque tus clientes sean del barrio, el que se mudó ayer o el que no te conoce busca en Google antes de entrar.",
      },
    ],
    faqs: [
      { q: "¿Tienen oficina en San Pedro?", a: "No. Trabajamos desde Santo Domingo, por WhatsApp y llamada, con negocios de todo el país." },
      { q: "Mis clientes son casi todos del barrio. ¿Necesito página web?", a: "Tu barrio también te busca en el celular, sobre todo quien acaba de mudarse o no te conoce todavía." },
      { q: "¿Sirve para negocios en Juan Dolio?", a: "Sí. Ponemos Juan Dolio o Guayacanes en tu página y en tu ficha de Google Maps." },
      PRECIO,
    ],
    related: [...baseRelated, { href: "/la-romana", label: "La Romana", sub: "Turismo y ciudad." }],
    cta: "Escríbenos desde San Pedro",
  }),

  "puerto-plata": province("puerto-plata", "Puerto Plata", {
    metaTitle: "Páginas web en Puerto Plata, Sosúa y Cabarete",
    metaDescription:
      "Página web para tu negocio en Puerto Plata, Sosúa o Cabarete: para visitantes de Amber Cove y Taíno Bay y para la gente de aquí. Desde RD$20,940.",
    label: "Puerto Plata",
    h1: "Páginas web para negocios en Puerto Plata",
    answer:
      "Puerto Plata recibe cruceros en Amber Cove y Taíno Bay, gente que sube al teleférico de Isabel de Torres y visitantes que van a Sosúa y Cabarete. Muchos llegan con pocas horas y deciden con el celular en la mano. Nativa hace páginas web para negocios de la Costa Norte, en español y en inglés si te sirve, conectadas a Google Maps y a tu WhatsApp.",
    problemsTitle: "Lo que pasa en la Costa Norte",
    problems: [
      {
        title: "Pocas horas para decidir",
        body: "El visitante de crucero busca qué hacer y dónde comer en el momento. Si tu ficha y tu página no muestran fotos, horario y WhatsApp, pasa de largo.",
      },
      {
        title: "Sosúa y Cabarete hablan varios idiomas",
        body: "Tours, kitesurf, alquileres y restaurantes atienden a mucha gente de fuera. Una versión en inglés con el mismo botón a WhatsApp ayuda.",
      },
      {
        title: "También para la gente de aquí",
        body: "Tus clientes de todos los días comparan antes de escribir. Tu página les muestra lo que haces y les da tu WhatsApp en un toque.",
      },
    ],
    faqs: [
      { q: "¿Tienen oficina en Puerto Plata?", a: "No. Trabajamos desde Santo Domingo, por WhatsApp y llamada, con negocios de todo el país." },
      { q: "¿Sirve para Sosúa y Cabarete?", a: "Sí. Ponemos tu zona exacta en la página y en tu ficha de Google Maps." },
      { q: "¿Pueden hacerla en inglés?", a: "Sí, si atiendes turistas. Si tu cliente es local, con español basta." },
      PRECIO,
    ],
    related: [...baseRelated, { href: "/santiago", label: "Santiago", sub: "El Cibao." }],
    cta: "Escríbenos desde Puerto Plata",
  }),

  "la-vega": province("la-vega", "La Vega", {
    metaTitle: "Páginas web en La Vega, Jarabacoa y Constanza",
    metaDescription:
      "Página web para tu negocio en La Vega, Jarabacoa o Constanza: te encuentran en Google Maps antes de subir a la montaña y te escriben por WhatsApp. Desde RD$20,940.",
    label: "La Vega",
    h1: "Páginas web para negocios en La Vega",
    answer:
      "El carnaval vegano trae gente de todo el país, pero tu negocio vive todo el año: los clientes de la ciudad, los que pasan por la autopista Duarte y los que suben a Jarabacoa y Constanza. Quien va a la montaña busca dónde quedarse, comer o qué hacer antes de salir de la capital o de Santiago. Nativa hace páginas web para negocios de La Vega, conectadas a Google Maps y a tu WhatsApp.",
    problemsTitle: "Lo que pasa en La Vega",
    problems: [
      {
        title: "Te buscan antes de subir",
        body: "En Jarabacoa y Constanza, el visitante decide dónde dormir o qué tour hacer desde su casa. Si no te encuentra, reserva con otro.",
      },
      {
        title: "Febrero no es todo el año",
        body: "El carnaval llena la ciudad unos domingos. El resto del año te sostienen los clientes que te encuentran en Google y te escriben.",
      },
      {
        title: "Cabañas y fincas fuera del mapa",
        body: "Muchas cabañas no tienen dirección con número. Marcamos el punto exacto en Google Maps para que lleguen sin perderse.",
      },
    ],
    faqs: [
      { q: "¿Tienen oficina en La Vega?", a: "No. Trabajamos desde Santo Domingo, por WhatsApp y llamada, con negocios de todo el país." },
      { q: "¿Sirve para Jarabacoa y Constanza?", a: "Sí. Tu página funciona igual en cualquier lugar de la provincia; ponemos tu zona exacta en Google Maps." },
      { q: "¿Pueden recibir reservas por WhatsApp?", a: "Sí. Cada botón abre tu WhatsApp con la fecha o el servicio ya escrito. Si quieres que alguien responda por ti, existe el agente de WhatsApp." },
      PRECIO,
    ],
    related: [...baseRelated, { href: "/servicios/agentes-ia", label: "Agendar por WhatsApp", sub: "Agente de WhatsApp." }],
    cta: "Escríbenos desde La Vega",
  }),
};
