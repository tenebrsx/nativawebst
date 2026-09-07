# SEO Phase 0 — Ops checklist (human)

On-site SEO has a hard ceiling until these exist. Do this week; outside the repo where noted.

## 1. Google Business Profile

- [ ] Create/claim GBP for **Nativa Web Studio**
- [ ] Primary category: **Web designer** (secondary: Internet marketing service)
- [ ] NAP exact match to citation packet: see `/llms/cita.md`
- [ ] Hours: Mon–Fri 09:00–18:00
- [ ] Photos: studio/work, not stock spam
- [ ] Services listed; WhatsApp enabled
- [ ] When live, set `NEXT_PUBLIC_GBP_URL` so JSON-LD `sameAs` picks it up

## 2. Google Search Console

- [ ] Property for `https://nativa.studio`
- [ ] Verify (meta tag already used if present)
- [ ] Submit sitemap: `https://nativa.studio/sitemap.xml`
- [ ] Inspect `/santo-domingo`, `/servicios/diseno-web`, `/por-que-nosotros`

## 3. Reviews

- [ ] Ask 3–5 real people who can vouch (soft-launch clients, partners)
- [ ] Prefer reviews that mention **diseño**, **Santo Domingo**, **WhatsApp**
- [ ] Never buy or fabricate reviews

## 4. Citation packet everywhere

Paste the same line on site footer (done), GBP, IG bio, WhatsApp Business profile:

`Nativa Web Studio · Av. Winston Churchill, Santo Domingo · +1 (809) 358-8113 · https://nativa.studio`

Optional env for schema `sameAs`:

```
NEXT_PUBLIC_GBP_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_LINKEDIN_URL=
```

## 5. After deploy

- [ ] `npm run deploy` so Hosting serves new routes
- [ ] Spot-check `/punta-cana`, `/industrias/legal`, `/industrias/villas`, `/guias`, `/casos`
