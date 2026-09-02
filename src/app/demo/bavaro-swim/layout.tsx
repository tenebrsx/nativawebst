import { Suspense, type ReactNode } from "react";
import BavaroShell from "./shell";
import "./bavaro-swim.css";

export default function BavaroLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <BavaroShell>{children}</BavaroShell>
    </Suspense>
  );
}
