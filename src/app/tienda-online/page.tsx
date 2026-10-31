import { SalesPageView } from "@/components/sales-page-view";
import { salesCopy } from "@/lib/sales-content";
import { pageMetadata } from "@/lib/site";

const copy = salesCopy["tienda-online"];

export const metadata = pageMetadata({
  title: copy.metaTitle,
  description: copy.metaDescription,
  path: copy.path,
  absoluteTitle: true,
});

export default function Page() {
  return <SalesPageView id="tienda-online" />;
}
