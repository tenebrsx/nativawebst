"use client";

import React, { createContext, useContext, useState } from "react";

export interface SwimProduct {
  id: string;
  title: string;
  category: "bikinis" | "lino" | "vestidos" | "accesorios";
  desc: string;
  priceDOP: number;
  priceUSD: number;
  sizes: string[];
  colors: string[];
  badge: string;
  rating: string;
  img: string;
}

export interface CartItem {
  id: string;
  title: string;
  priceDOP: number;
  priceUSD: number;
  size: string;
  color: string;
  qty: number;
  img: string;
}

interface BavaroCartContextType {
  cart: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (product: SwimProduct, size: string, color: string) => void;
  updateQty: (id: string, size: string, color: string, delta: number) => void;
  totalDOP: number;
  totalUSD: number;
}

const BavaroCartContext = createContext<BavaroCartContextType | undefined>(undefined);

export function BavaroCartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product: SwimProduct, size: string, color: string) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id && i.size === size && i.color === color);
      if (existing) {
        return prev.map(i => i.id === product.id && i.size === size && i.color === color ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, {
        id: product.id,
        title: product.title,
        priceDOP: product.priceDOP,
        priceUSD: product.priceUSD,
        size,
        color,
        qty: 1,
        img: product.img
      }];
    });
    setCartOpen(true);
  };

  const updateQty = (id: string, size: string, color: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.size === size && item.color === color) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const totalDOP = cart.reduce((sum, item) => sum + item.priceDOP * item.qty, 0);
  const totalUSD = cart.reduce((sum, item) => sum + item.priceUSD * item.qty, 0);

  return (
    <BavaroCartContext.Provider value={{ cart, cartOpen, setCartOpen, addToCart, updateQty, totalDOP, totalUSD }}>
      {children}
    </BavaroCartContext.Provider>
  );
}

export function useBavaroCart() {
  const context = useContext(BavaroCartContext);
  if (!context) throw new Error("useBavaroCart must be used within a BavaroCartProvider");
  return context;
}
