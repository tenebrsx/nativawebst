import { notFound } from "next/navigation";
import { PRACTICES, practiceBySlug } from "../../data";
import PracticeView from "./practice-view";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRACTICES.map((p) => ({ slug: p.slug }));
}

export default async function PracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const practice = practiceBySlug(slug);
  if (!practice) notFound();
  return <PracticeView practice={practice} />;
}
