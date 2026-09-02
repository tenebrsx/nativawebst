import { Suspense, type ReactNode } from "react";
import NacoShell from "./shell";
import "./naco-legal.css";

export default function NacoLegalLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <NacoShell>{children}</NacoShell>
    </Suspense>
  );
}
