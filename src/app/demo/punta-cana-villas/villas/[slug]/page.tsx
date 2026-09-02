import { notFound } from "next/navigation";
import { VILLAS, villaBySlug } from "../../data";
import VillaView from "./villa-view";

export const dynamicParams = false;

export function generateStaticParams() {
  return VILLAS.map((v) => ({ slug: v.slug }));
}

export default async function VillaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const villa = villaBySlug(slug);
  if (!villa) notFound();
  return <VillaView villa={villa} />;
}
