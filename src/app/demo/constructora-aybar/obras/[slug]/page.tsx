import { notFound } from "next/navigation";
import { OBRAS, obraBySlug } from "../../data";
import ObraView from "./obra-view";

export const dynamicParams = false;

export function generateStaticParams() {
  return OBRAS.map((o) => ({ slug: o.slug }));
}

export default async function ObraPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const obra = obraBySlug(slug);
  if (!obra) notFound();
  return <ObraView obra={obra} />;
}
