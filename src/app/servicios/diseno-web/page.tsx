import type { Metadata } from "next";
import { ServiceDetailView } from "@/components/service-page-view";
import { serviceCopy } from "@/lib/service-content";
import { pageMetadata } from "@/lib/site";

const copy = serviceCopy.es["diseno-web"];

export const metadata: Metadata = pageMetadata({
  title: copy.metaTitle,
  description: copy.metaDescription,
  path: copy.path,
});

export default function DisenoWebPage() {
  return <ServiceDetailView slug="diseno-web" />;
}
