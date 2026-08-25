import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./refined.css";

export const metadata: Metadata = {
  title: {
    absolute: "Nativa · Refined lab",
  },
  description: "Internal UI experiment. Not the live homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RefinedLayout({ children }: { children: ReactNode }) {
  return children;
}
