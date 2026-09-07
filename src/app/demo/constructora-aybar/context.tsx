"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type Ctx = {
  tipo: string;
  setTipo: (s: string) => void;
  niveles: number;
  setNiveles: (n: number) => void;
  m2: number;
  setM2: (n: number) => void;
  zona: string;
  setZona: (s: string) => void;
};

const VisitContext = createContext<Ctx | null>(null);

export function VisitProvider({ children }: { children: ReactNode }) {
  const [tipo, setTipo] = useState("Torre");
  const [niveles, setNiveles] = useState(18);
  const [m2, setM2] = useState(12400);
  const [zona, setZona] = useState("Naco");
  const value = useMemo(
    () => ({ tipo, setTipo, niveles, setNiveles, m2, setM2, zona, setZona }),
    [tipo, niveles, m2, zona],
  );
  return <VisitContext.Provider value={value}>{children}</VisitContext.Provider>;
}

export function useVisit() {
  const ctx = useContext(VisitContext);
  if (!ctx) throw new Error("useVisit needs VisitProvider");
  return ctx;
}
