import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { pageMetadata, SITE_DEFAULT_DESCRIPTION, SITE_DEFAULT_TITLE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: SITE_DEFAULT_TITLE,
  description: SITE_DEFAULT_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

export default function Page() {
  return <HomePage />;
}
