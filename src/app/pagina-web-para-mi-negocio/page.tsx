import { SalesPageView } from "@/components/sales-page-view";
import { salesCopy } from "@/lib/sales-content";
import { pageMetadata } from "@/lib/site";

const copy = salesCopy["pagina-web-para-mi-negocio"];

export const metadata = pageMetadata({
  title: copy.metaTitle,
  description: copy.metaDescription,
  path: copy.path,
  absoluteTitle: true,
});

export default function Page() {
  return <SalesPageView id="pagina-web-para-mi-negocio" />;
}
