import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { BLOG_POSTS, getBlogPost } from "@/content/blog";
import { orgId } from "@/lib/json-ld";
import { absoluteUrl, pageMetadata } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  // Static export needs at least one param; the placeholder renders a 404 page.
  const params = BLOG_POSTS.map((p) => ({ slug: p.slug }));
  return params.length ? params : [{ slug: "_vacio" }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { robots: { index: false, follow: false } };
  const meta = pageMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}` });
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
  };
}

const fmt = (d: string) =>
  new Date(`${d}T12:00:00`).toLocaleDateString("es-DO", { day: "numeric", month: "long", year: "numeric" });

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const path = `/blog/${post.slug}`;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${absoluteUrl(path)}#article`,
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          inLanguage: "es-DO",
          url: absoluteUrl(path),
          mainEntityOfPage: absoluteUrl(path),
          author: { "@id": orgId() },
          publisher: { "@id": orgId() },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
            { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(path) },
          ],
        }}
      />
      <SiteNav />
      <main id="main">
        <article style={{ padding: "72px 0 80px" }}>
          <div className="container" style={{ maxWidth: "760px" }}>
            <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "16px" }}>
              <Link href="/" style={{ color: "var(--coral-blue)", textDecoration: "none", fontWeight: 700 }}>Inicio</Link>
              {" / "}
              <Link href="/blog" style={{ color: "var(--coral-blue)", textDecoration: "none", fontWeight: 700 }}>Blog</Link>
            </p>
            <div className="section-label">
              <time dateTime={post.date}>{fmt(post.date)}</time>
            </div>
            <h1 className="section-title" style={{ marginBottom: "20px" }}>{post.title}</h1>
            <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--muted)", marginBottom: "36px" }}>{post.lede}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
              {post.sections.map((s) => (
                <section key={s.title}>
                  <h2 style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 800, marginBottom: "10px" }}>{s.title}</h2>
                  <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--muted)", margin: 0, whiteSpace: "pre-line" }}>{s.body}</p>
                </section>
              ))}
            </div>
            <Link href="/blog" className="card card-hover" style={{ display: "inline-block", padding: "14px 18px", textDecoration: "none", fontWeight: 800 }}>
              ← Más artículos
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
