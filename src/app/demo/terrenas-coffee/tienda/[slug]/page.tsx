import { notFound } from "next/navigation";
import { COFFEES, coffeeBySlug } from "../../data";
import ProductView from "./product-view";

export const dynamicParams = false;

export function generateStaticParams() {
  return COFFEES.map((c) => ({ slug: c.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const coffee = coffeeBySlug(slug);
  if (!coffee) notFound();
  return <ProductView coffee={coffee} />;
}
