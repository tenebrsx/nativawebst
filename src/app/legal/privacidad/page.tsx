import type { Metadata } from "next";
import { LegalDocView } from "@/components/legal-page-view";
import { LEGAL_DOCS } from "@/lib/legal-content";
import { pageMetadata } from "@/lib/site";

const doc = LEGAL_DOCS.privacidad;

export const metadata: Metadata = pageMetadata({
  title: doc.metaTitle,
  description: doc.metaDescription,
  path: doc.path,
});

export default function PrivacidadPage() {
  return <LegalDocView slug="privacidad" />;
}
