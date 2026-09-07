import { Suspense, type ReactNode } from "react";
import TerrenasShell from "./shell";
import "./terrenas-coffee.css";

export default function TerrenasLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <TerrenasShell>{children}</TerrenasShell>
    </Suspense>
  );
}
