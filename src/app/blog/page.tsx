import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { BLOG_POSTS } from "@/content/blog";
import { GUIDE_LIST } from "@/lib/guides-content";
import { orgId } from "@/lib/json-ld";
import { absoluteUrl, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Blog: ideas claras para que tu negocio consiga más clientes en RD",
  description:
    "Artículos y guías prácticas para tu negocio en República Dominicana: Google Maps, WhatsApp, tu página web, reseñas y cuánto cuesta mantenerla.",
  path: "/blog",
});

type Entry = { href: string; title: string; lede: string; kind: string; date?: string };

const fmt = (d: string) =>
  new Date(`${d}T12:00:00`).toLocaleDateString("es-DO", { day: "numeric", month: "short", year: "numeric" });

export default function BlogIndexPage() {
  const entries: Entry[] = [
    ...BLOG_POSTS.map((p) => ({ href: `/blog/${p.slug}`, title: p.title, lede: p.lede, kind: "Artículo", date: p.date })),
    ...GUIDE_LIST.map((g) => ({ href: g.path, title: g.h1, lede: g.lede, kind: "Guía" })),
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${absoluteUrl("/blog")}#blog`,
          name: "Blog de Nativa",
          url: absoluteUrl("/blog"),
          inLanguage: "es-DO",
          publisher: { "@id": orgId() },
          blogPost: entries.map((e) => ({
            "@type": e.kind === "Guía" ? "Article" : "BlogPosting",
            headline: e.title,
            url: absoluteUrl(e.href),
            ...(e.date ? { datePublished: e.date } : {}),
          })),
        }}
      />
      <SiteNav />
      <main id="main">
        <section style={{ padding: "72px 0 80px" }}>
          <div className="container" style={{ maxWidth: "760px" }}>
            <div className="section-label">Blog</div>
            <h1 className="section-title" style={{ marginBottom: "16px" }}>
              Lo que te ayuda a conseguir más clientes
            </h1>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--muted)", marginBottom: "36px" }}>
              Respuestas directas para tu negocio en RD: cómo salir en Google Maps, que te escriban por WhatsApp y qué
              necesita tu página web de verdad. Léelo en cinco minutos y aplícalo hoy.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {entries.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} className="card card-hover" style={{ display: "block", padding: "22px", textDecoration: "none" }}>
                    <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--coral-blue)", marginBottom: "8px" }}>
                      {e.kind}
                      {e.date ? ` · ${fmt(e.date)}` : ""}
                    </div>
                    <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, marginBottom: "6px" }}>{e.title}</div>
                    <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{e.lede}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
