"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Currency = "USD" | "DOP";

export type Stay = {
  checkIn: string;
  checkOut: string;
  guests: number;
  currency: Currency;
};

const DEFAULT: Stay = {
  checkIn: "2026-12-12",
  checkOut: "2026-12-18",
  guests: 8,
  currency: "USD",
};

type Ctx = Stay & {
  setCheckIn: (v: string) => void;
  setCheckOut: (v: string) => void;
  setGuests: (n: number) => void;
  setCurrency: (c: Currency) => void;
};

const StayContext = createContext<Ctx | null>(null);

export function StayProvider({ children }: { children: ReactNode }) {
  const [stay, setStay] = useState<Stay>(DEFAULT);
  const value = useMemo<Ctx>(
    () => ({
      ...stay,
      setCheckIn: (checkIn) => setStay((s) => ({ ...s, checkIn })),
      setCheckOut: (checkOut) => setStay((s) => ({ ...s, checkOut })),
      setGuests: (guests) => setStay((s) => ({ ...s, guests })),
      setCurrency: (currency) => setStay((s) => ({ ...s, currency })),
    }),
    [stay],
  );
  return <StayContext.Provider value={value}>{children}</StayContext.Provider>;
}

export function useStay() {
  const ctx = useContext(StayContext);
  if (!ctx) throw new Error("useStay needs StayProvider");
  return ctx;
}
