import { notFound } from "next/navigation";
import { PRODUCTS, productBySlug } from "../../data";
import ProductView from "./product-view";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();
  return <ProductView product={product} />;
}
