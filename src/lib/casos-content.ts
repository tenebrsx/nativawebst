/**
 * ⚠️ CASOS — NOT PUBLISHED. Publish ONLY after the client's WRITTEN OK.
 * Until then each page is: robots noindex/nofollow, OUT of sitemap (not in INDEXABLE_PATHS),
 * OUT of llms.txt, and NOT linked from nav, footer, home or the /casos hub.
 * Facts are limited to what is visible on each client's live site (checked 2026-10-31).
 * No results, metrics, testimonials or quotes. To publish: get written OK, flip `approved`,
 * add the path to INDEXABLE_PATHS + llms.txt, and link it from /casos.
 */
export type CasoSlug = "nava-fundacion" | "berenjena-studio" | "yanna-beato";

export type Caso = {
  slug: CasoSlug;
  approved: false;
  name: string;
  url: string;
  kind: string;
  summary: string;
  built: string[];
  related: Array<{ href: string; label: string }>;
};

export const CASOS: Record<CasoSlug, Caso> = {
  "nava-fundacion": {
    slug: "nava-fundacion",
    approved: false,
    name: "Nava Fundación",
    url: "https://nava-fundacion.org",
    kind: "Página web de una fundación de arte contemporáneo",
    summary:
      "Nava (Narrativa Alternativa Foundation) es una fundación de arte contemporáneo, investigación y programas públicos en Santo Domingo, fundada en 2024. Su página web reúne lo que está en exhibición, su programa de eventos y su archivo.",
    built: [
      "Portada con lo que está en exhibición (On View) y los próximos programas",
      "Calendario de programas: proyecciones, charlas y talleres",
      "Journal, proyectos y catálogo",
      "Páginas de equipo y sobre la fundación, con contacto",
      "Página web en inglés",
    ],
    related: [
      { href: "/pagina-web-para-mi-negocio", label: "Página web para tu negocio" },
      { href: "/precio-pagina-web", label: "Precios" },
    ],
  },
  "berenjena-studio": {
    slug: "berenjena-studio",
    approved: false,
    name: "Berenjena Studio",
    url: "https://berenjenastudio.com",
    kind: "Portafolio de un estudio de cine y video",
    summary:
      "Berenjena Studio es el estudio de cine y video de Jonathan Matos, director, director de fotografía y editor, desde Santo Domingo. Su página web muestra comerciales, narrativa y reels.",
    built: [
      "Galería de trabajos: comerciales, narrativa y reels",
      "Búsqueda e índice de proyectos",
      "Página “Sobre mí”",
      "Enlaces a Instagram y YouTube",
      "Título y descripción en español pensados para búsquedas en Santo Domingo",
    ],
    related: [
      { href: "/pagina-web-para-mi-negocio", label: "Página web para tu negocio" },
      { href: "/guias/instagram-vs-pagina-web", label: "Instagram vs página web" },
    ],
  },
  "yanna-beato": {
    slug: "yanna-beato",
    approved: false,
    name: "Yanna Beato",
    url: "https://yannabeato.web.app",
    kind: "Portafolio personal",
    summary:
      "Portafolio personal de Yanna Beato: movimiento, visión y dirección. Una página web sencilla para presentar su trabajo y que la contacten.",
    built: [
      "Portada con su propuesta: Movement · Vision · Direction",
      "Sección “Who I am”",
      "Contacto directo (“Say hi”), Instagram y correo",
    ],
    related: [
      { href: "/pagina-web-para-mi-negocio", label: "Página web para tu negocio" },
      { href: "/guias/instagram-vs-pagina-web", label: "Instagram vs página web" },
    ],
  },
};

export const CASO_SLUGS = Object.keys(CASOS) as CasoSlug[];
