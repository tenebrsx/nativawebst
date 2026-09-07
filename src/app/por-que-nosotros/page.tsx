import type { Metadata } from "next";
import { LocalPageView } from "@/components/local-page-view";
import { localCopy } from "@/lib/local-content";
import { pageMetadata } from "@/lib/site";

const copy = localCopy.es["por-que-nosotros"];

export const metadata: Metadata = pageMetadata({
  title: copy.metaTitle,
  description: copy.metaDescription,
  path: copy.path,
});

export default function PorQueNosotrosPage() {
  return <LocalPageView id="por-que-nosotros" />;
}
