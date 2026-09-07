"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./data";

export type Currency = "USD" | "DOP";

export type CartItem = {
  slug: string;
  name: string;
  usd: number;
  dop: number;
  size: string;
  color: string;
  qty: number;
  img: string;
};

type Ctx = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  cart: CartItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (p: Product, size: string, color: string) => void;
  delta: (slug: string, size: string, color: string, n: number) => void;
  totalUsd: number;
  totalDop: number;
};

const CartContext = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = (p: Product, size: string, color: string) => {
    setCart((prev) => {
      const hit = prev.find((i) => i.slug === p.slug && i.size === size && i.color === color);
      if (hit) return prev.map((i) => (i === hit ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { slug: p.slug, name: p.name, usd: p.usd, dop: p.dop, size, color, qty: 1, img: p.hero }];
    });
    setOpen(true);
  };

  const delta = (slug: string, size: string, color: string, n: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.slug === slug && i.size === size && i.color === color ? { ...i, qty: i.qty + n } : i))
        .filter((i) => i.qty > 0),
    );
  };

  const value = useMemo<Ctx>(() => {
    const totalUsd = cart.reduce((s, i) => s + i.usd * i.qty, 0);
    const totalDop = cart.reduce((s, i) => s + i.dop * i.qty, 0);
    return { currency, setCurrency, cart, open, setOpen, add, delta, totalUsd, totalDop };
  }, [currency, cart, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart needs CartProvider");
  return ctx;
}
