import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { JsonLd } from "@/components/json-ld";
import { faqPageGraph } from "@/lib/json-ld";
import { HOME_FAQS } from "@/lib/home-seo";
import { pageMetadata, SITE_DEFAULT_DESCRIPTION, SITE_DEFAULT_TITLE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: SITE_DEFAULT_TITLE,
  description: SITE_DEFAULT_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageGraph(HOME_FAQS, "/")} />
      <HomePage />
    </>
  );
}
