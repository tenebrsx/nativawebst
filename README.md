# Nativa Web Studio — nativastudio.com.do

Marketing site for **Nativa Web Studio**, a web design studio in Santo Domingo, República Dominicana.
Spanish is the default language; visitors can switch to English (and RD$/US$) from the region selector.

- **Live:** https://nativastudio.com.do (Firebase Hosting, project `nativa-studio`)
- **Stack:** Next.js 16 (App Router, static export), React 19, Tailwind CSS 4, Firebase (Firestore for leads)

## Local development

```bash
npm install
npm run dev        # http://localhost:3003
npm run build      # static export to ./out
npm run lint
```

## Deploy

There is no CI deploy. Deploys are manual from a machine logged in to Firebase:

```bash
npm run deploy     # rm -rf out && next build && firebase deploy --only hosting
```

Merging to `main` does **not** deploy by itself.

## Project map

| Path | What it is |
| --- | --- |
| `src/app/` | Routes (home, `/servicios/*`, `/santo-domingo`, `/guias/*`, `/legal/*`, `/casos`, `/portfolio`) |
| `src/app/demo/*` | Demo concepts for fictional businesses (not clients) |
| `src/components/pricing-builder.tsx` | “Arma tu propio sitio web” quote builder → sends the summary to WhatsApp |
| `src/lib/translations.ts` | ES / EN copy for the home page |
| `src/lib/local-content.ts`, `guides-content.ts`, `service-content.ts` | Copy for SEO landing pages and guides |
| `src/lib/proof-clients.ts` | Demo-concept gallery on the home page |
| `src/lib/site.ts` | Site URL, contact data (NAP), metadata helpers |
| `public/pv/` | Resized WebP copies of demo images used in the builder previews |
| `public/llms.txt`, `public/llms/` | Plain-text summaries for AI assistants |

## Content rules

- The sites under `/demo/*` are **demo concepts**. Never present them as clients or attach invented results.
- Only publish client work in `/casos` with the client’s permission and verifiable facts.

## Environment

Optional `NEXT_PUBLIC_*` variables (Firebase config, `NEXT_PUBLIC_SITE_URL`, GA measurement id, Google Business Profile / social URLs) override the defaults in `src/lib/site.ts` and `src/lib/firebase.ts`.
