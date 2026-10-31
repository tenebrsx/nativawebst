# Cómo publicar un post en el blog de Nativa

Las guías de `/guias` ya salen en `/blog` automáticamente (fuente: `src/lib/guides-content.ts`). Para un artículo nuevo:

1. Crea un archivo en `src/content/blog/`, por ejemplo `src/content/blog/mi-post.ts`:

```ts
import type { BlogPost } from "./types";

const post: BlogPost = {
  slug: "mi-post",                 // URL: /blog/mi-post (minúsculas, guiones, sin tildes)
  title: "Título que habla a tu cliente",
  description: "Meta descripción de ~150 caracteres.",
  date: "2026-11-05",              // fecha de publicación (ISO)
  lede: "Intro corta que se ve en /blog.",
  sections: [
    { title: "Primer punto", body: "Texto. Usa \n para saltos y • para viñetas." },
  ],
  // draft: true,                  // ocúltalo hasta que esté listo
};
export default post;
```

2. Regístralo en `src/content/blog/index.ts`: `import miPost from "./mi-post";` y añade `miPost` a `ALL_POSTS`.
3. `npm run build` — el post entra solo en `/blog`, en `sitemap.xml`, con canonical, Open Graph (`type: article`) y JSON-LD `BlogPosting`.
4. Preview: `npx firebase-tools hosting:channel:deploy seo-wave01`. Nunca `npm run deploy` (eso publica en vivo) sin revisión.

Reglas de copy: español que le habla al cliente, sin datos, precios ni reseñas inventadas.
