import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePageView } from "@/components/guide-page-view";
import { guidesEs } from "@/lib/guides-content";
import { GUIDE_SLUGS, pageMetadata, type GuideSlug } from "@/lib/site";

export function generateStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guidesEs[slug as GuideSlug];
  if (!guide) return {};
  return pageMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: guide.path,
  });
}

export default async function GuiaSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!GUIDE_SLUGS.includes(slug as GuideSlug)) notFound();
  return <GuidePageView slug={slug as GuideSlug} />;
}
