import type { Metadata } from "next";
import { noindexMetadata } from "@/lib/site";

export const metadata: Metadata = {
  ...noindexMetadata,
  title: "Logo lab",
  description: "Nine logo types for Nativa Web Studio.",
};

export default function LogosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
