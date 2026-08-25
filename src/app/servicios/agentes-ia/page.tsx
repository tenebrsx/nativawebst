import type { Metadata } from "next";
import { ServiceDetailView } from "@/components/service-page-view";
import { serviceCopy } from "@/lib/service-content";
import { pageMetadata } from "@/lib/site";

const copy = serviceCopy.es["agentes-ia"];

export const metadata: Metadata = pageMetadata({
  title: copy.metaTitle,
  description: copy.metaDescription,
  path: copy.path,
});

export default function AgentesIaPage() {
  return <ServiceDetailView slug="agentes-ia" />;
}
