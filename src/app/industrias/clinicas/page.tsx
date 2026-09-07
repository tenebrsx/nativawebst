import type { Metadata } from "next";
import { LocalPageView } from "@/components/local-page-view";
import { localCopy } from "@/lib/local-content";
import { pageMetadata } from "@/lib/site";

const copy = localCopy.es.clinicas;

export const metadata: Metadata = pageMetadata({
  title: copy.metaTitle,
  description: copy.metaDescription,
  path: copy.path,
});

export default function ClinicasPage() {
  return <LocalPageView id="clinicas" />;
}
