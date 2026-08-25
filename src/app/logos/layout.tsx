import type { Metadata } from "next";
import { noindexMetadata } from "@/lib/site";

export const metadata: Metadata = noindexMetadata;

export default function LogosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
