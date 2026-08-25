import type { Metadata } from "next";
import { noindexMetadata } from "@/lib/site";

export const metadata: Metadata = noindexMetadata;

export default function AdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
