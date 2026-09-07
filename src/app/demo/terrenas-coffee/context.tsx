"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type Ctx = {
  currency: "USD" | "DOP";
  setCurrency: (c: "USD" | "DOP") => void;
  kg: number;
  setKg: (n: number) => void;
  dest: string;
  setDest: (s: string) => void;
};

const OrderContext = createContext<Ctx | null>(null);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<"USD" | "DOP">("DOP");
  const [kg, setKg] = useState(2);
  const [dest, setDest] = useState("Piantini");
  const value = useMemo(
    () => ({ currency, setCurrency, kg, setKg, dest, setDest }),
    [currency, kg, dest],
  );
  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder needs OrderProvider");
  return ctx;
}
