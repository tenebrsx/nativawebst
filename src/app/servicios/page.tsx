import type { Metadata } from "next";
import { ServiciosHubView } from "@/components/service-page-view";
import { hubCopy } from "@/lib/service-content";
import { pageMetadata } from "@/lib/site";

const copy = hubCopy.es;

export const metadata: Metadata = pageMetadata({
  title: copy.metaTitle,
  description: copy.metaDescription,
  path: "/servicios",
});

export default function ServiciosPage() {
  return <ServiciosHubView />;
}
