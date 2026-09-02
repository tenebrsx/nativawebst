import { Suspense, type ReactNode } from "react";
import AybarShell from "./shell";
import "./constructora-aybar.css";

export default function AybarLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <AybarShell>{children}</AybarShell>
    </Suspense>
  );
}
