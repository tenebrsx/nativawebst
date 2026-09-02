import { Suspense, type ReactNode } from "react";
import PcvShell from "./shell";
import "./punta-cana-villas.css";

export default function PuntaCanaVillasLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <PcvShell>{children}</PcvShell>
    </Suspense>
  );
}
