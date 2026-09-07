import { Suspense, type ReactNode } from "react";
import SdqShell from "./shell";
import "./sdq-dental.css";

export default function SdqDentalLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <SdqShell>{children}</SdqShell>
    </Suspense>
  );
}
