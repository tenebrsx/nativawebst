import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/components/pricing-builder.css";
import "./visualmockup.css";

export const metadata: Metadata = {
  title: { absolute: "Nativa · Pricing mockups" },
  description: "Internal layout experiments for the homepage pricing section. Not live.",
  robots: { index: false, follow: false },
};

export default function VisualMockupLayout({ children }: { children: ReactNode }) {
  return children;
}
