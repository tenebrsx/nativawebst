"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DemoTopBar } from "@/components/demo-top-bar";
import { useGeo } from "@/lib/geo-context";

interface Product {
  id: string;
  title: string;
  category: "honey" | "superfoods" | "infusions";
  desc: string;
  origin: string;
  badge: string;
  priceDOP: number;
  priceUSD: number;
  subPriceDOP: number;
  subPriceUSD: number;
  rating: string;
  img: string;
  benefits: string[];
}

interface CartItem {
  id: string;
  title: string;
  priceDOP: number;
  priceUSD: number;
  isSubscription: boolean;
  qty: number;
  img: string;
}

function ProductMockupImage({ src, alt, type, badge }: { src: string; alt: string; type: string; badge: string }) {
  const [failed, setFailed] = useState(false);

  const getGradient = (t: string) => {
    if (t.includes("miel") || t.includes("honey")) return "linear-gradient(135deg, #F59E0B 0%, #B45309 100%)";
    if (t.includes("aceite") || t.includes("aguacate")) return "linear-gradient(135deg, #10B981 0%, #047857 100%)";
    if (t.includes("moringa") || t.includes("verde")) return "linear-gradient(135deg, #84CC16 0%, #3F6212 100%)";
    if (t.includes("mango") || t.includes("fruta")) return "linear-gradient(135deg, #F97316 0%, #C2410C 100%)";
    if (t.includes("cacao")) return "linear-gradient(135deg, #78350F 0%, #451A03 100%)";
    if (t.includes("jengibre") || t.includes("infusion")) return "linear-gradient(135deg, #EAB308 0%, #854D0E 100%)";
    if (t.includes("mani")) return "linear-gradient(135deg, #D97706 0%, #78350F 100%)";
    return "linear-gradient(135deg, #0B2B1B 0%, #047857 100%)";
  };

  const getProductSVG = (t: string) => {
    if (t.includes("miel")) {
      return (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.8">
          <path d="M12 2v4M8 6h8M6 10h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10z"></path>
          <path d="M12 13v4M10 15h4"></path>
        </svg>
      );
    }
    if (t.includes("aceite") || t.includes("aguacate")) {
      return (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.8">
          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z"></path>
          <circle cx="12" cy="9" r="2.5"></circle>
        </svg>
      );
    }
    if (t.includes("cacao")) {
      return (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="3"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="3" y1="15" x2="21" y2="15"></line>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="15" y1="3" x2="15" y2="21"></line>
        </svg>
      );
    }
    return (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.8">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 4.4-3.6 8-8 8z"></path>
        <path d="M11 20v-9"></path>
      </svg>
    );
  };

  if (failed) {
    return (
      <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: getGradient(type), color: "#FFFFFF", padding: "16px", textAlign: "center" }}>
        {getProductSVG(type)}
        <div style={{ fontSize: "12px", fontWeight: 900, marginTop: "10px", color: "#FFFFFF", lineHeight: "1.3" }}>{alt}</div>
        <div style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.85)", marginTop: "4px", fontWeight: 700 }}>CaribeSuperfoods Orgánico</div>
        {badge && (
          <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(11, 43, 27, 0.9)", color: "#F7F4EB", padding: "4px 10px", borderRadius: "9999px", fontSize: "10px", fontWeight: 800 }}>
            {badge}
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}

export default function CaribeSuperfoodsDemo() {
  const { currency, fmt } = useGeo();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<Record<string, "one-time" | "subscription">>({});
  
  // Subscription Builder State ("El Conuco Box")
  const [subFreq, setSubFreq] = useState<"weekly" | "biweekly" | "monthly">("monthly");
  const [subTier, setSubTier] = useState<"essential" | "gourmet">("essential");

  const products: Product[] = [
    {
      id: "miel-jarabacoa",
      title: "Miel Silvestre de Flores de Montaña",
      category: "honey",
      desc: "100% pura sin filtrar, cosechada a 1,200m de altitud en las montañas de Jarabacoa.",
      origin: "Jarabacoa, La Vega · R.D.",
      badge: "Cosecha Silvestre",
      priceDOP: 650,
      priceUSD: 11,
      subPriceDOP: 550,
      subPriceUSD: 9.35,
      rating: "4.9 ★★★★★ (280+ valoraciones)",
      img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23FCD34D"/><stop offset="50%" stop-color="%23F59E0B"/><stop offset="100%" stop-color="%23B45309"/></linearGradient></defs><rect width="800" height="600" fill="url(%23bg)"/><path d="M400 60 l40 23 v46 l-40 23 l-40 -23 v-46 z M320 106 l40 23 v46 l-40 23 l-40 -23 v-46 z M480 106 l40 23 v46 l-40 23 l-40 -23 v-46 z" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="4"/><rect x="280" y="200" width="240" height="300" rx="30" fill="%23FFF" stroke="%23B45309" stroke-width="6"/><rect x="250" y="160" width="300" height="40" rx="10" fill="%2378350F"/><rect x="310" y="270" width="180" height="160" rx="12" fill="%23FFF" stroke="%23D97706" stroke-width="3"/><text x="400" y="320" font-family="serif" font-size="22" font-weight="900" fill="%2378350F" text-anchor="middle">CARIBE</text><text x="400" y="350" font-family="sans-serif" font-size="16" font-weight="800" fill="%23D97706" text-anchor="middle">MIEL SILVESTRE</text><text x="400" y="380" font-family="sans-serif" font-size="13" font-weight="700" fill="%23451A03" text-anchor="middle">Jarabacoa · 1,200m</text><text x="400" y="410" font-family="sans-serif" font-size="12" font-weight="900" fill="%2310B981" text-anchor="middle">100% PURA 500g</text></svg>`,
      benefits: ["Enzimas Activas", "Sin Azúcar Añadida", "100% Pura"]
    },
    {
      id: "aceite-aguacate",
      title: "Aceite de Aguacate Hass Prensado en Frío",
      category: "honey",
      desc: "Extraído artesanalmente de aguacates Hass cultivados en los valles templados de Constanza.",
      origin: "Constanza, La Vega · R.D.",
      badge: "Prensado en Frío",
      priceDOP: 890,
      priceUSD: 15,
      subPriceDOP: 750,
      subPriceUSD: 12.75,
      rating: "5.0 ★★★★★ (190+ valoraciones)",
      img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%2334D399"/><stop offset="50%" stop-color="%2310B981"/><stop offset="100%" stop-color="%23047857"/></linearGradient></defs><rect width="800" height="600" fill="url(%23bg)"/><ellipse cx="260" cy="340" rx="100" ry="140" fill="%23064E3B"/><ellipse cx="260" cy="340" rx="80" ry="120" fill="%23A7F3D0"/><circle cx="260" cy="360" r="45" fill="%2378350F"/><rect x="460" y="180" width="140" height="320" rx="20" fill="rgba(255,255,255,0.9)" stroke="%23047857" stroke-width="6"/><rect x="490" y="140" width="80" height="40" fill="%23064E3B" rx="6"/><rect x="480" y="260" width="100" height="150" rx="8" fill="%23FFF" stroke="%2310B981" stroke-width="3"/><text x="530" y="300" font-family="serif" font-size="16" font-weight="900" fill="%23064E3B" text-anchor="middle">ACEITE DE</text><text x="530" y="324" font-family="sans-serif" font-size="16" font-weight="900" fill="%2310B981" text-anchor="middle">AGUACATE</text><text x="530" y="350" font-family="sans-serif" font-size="11" font-weight="800" fill="%23047857" text-anchor="middle">Prensado en Frío</text><text x="530" y="380" font-family="sans-serif" font-size="11" font-weight="900" fill="%23064E3B" text-anchor="middle">Constanza 250ml</text></svg>`,
      benefits: ["Omega-9 & Vitamina E", "Alto Punto de Humo", "Cero Químicos"]
    },
    {
      id: "polvo-moringa",
      title: "Polvo de Moringa Orgánica de Montaña",
      category: "superfoods",
      desc: "Hojas seleccionadas a mano y deshidratadas al sol de montaña. Rico en clorofila y hierro.",
      origin: "Constanza · 1,200m Altitud",
      badge: "Superalimento Verde",
      priceDOP: 580,
      priceUSD: 9.5,
      subPriceDOP: 490,
      subPriceUSD: 8.0,
      rating: "4.8 ★★★★★ (140+ valoraciones)",
      img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23A3E635"/><stop offset="50%" stop-color="%2384CC16"/><stop offset="100%" stop-color="%233F6212"/></linearGradient></defs><rect width="800" height="600" fill="url(%23bg)"/><ellipse cx="400" cy="380" rx="200" ry="120" fill="%23FEF08A"/><ellipse cx="400" cy="360" rx="180" ry="100" fill="%2365A30D"/><ellipse cx="400" cy="355" rx="140" ry="75" fill="%234D7C0F"/><rect x="250" y="160" width="300" height="120" rx="16" fill="%23FFF" stroke="%234D7C0F" stroke-width="4"/><text x="400" y="210" font-family="serif" font-size="24" font-weight="900" fill="%233F6212" text-anchor="middle">MORINGA ORGÁNICA</text><text x="400" y="240" font-family="sans-serif" font-size="14" font-weight="800" fill="%2365A30D" text-anchor="middle">Superalimento Verde · Constanza 200g</text></svg>`,
      benefits: ["Desintoxicante Natural", "Hierro & Proteína", "Certificado Orgánico"]
    },
    {
      id: "snack-mango",
      title: "Mango Criollo & Piña Deshidratada",
      category: "superfoods",
      desc: "Lajas de frutas tropicales deshidratadas a baja temperatura sin azúcares ni conservantes.",
      origin: "Valle de Jarabacoa · R.D.",
      badge: "100% Fruta Real",
      priceDOP: 450,
      priceUSD: 7.5,
      subPriceDOP: 380,
      subPriceUSD: 6.35,
      rating: "4.9 ★★★★★ (310+ valoraciones)",
      img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23FB923C"/><stop offset="50%" stop-color="%23F97316"/><stop offset="100%" stop-color="%23C2410C"/></linearGradient></defs><rect width="800" height="600" fill="url(%23bg)"/><path d="M 200,400 Q 300,200 450,350 T 700,300" fill="none" stroke="%23FFEDD5" stroke-width="40" stroke-linecap="round"/><rect x="250" y="180" width="300" height="140" rx="16" fill="%23FFF" stroke="%23C2410C" stroke-width="4"/><text x="400" y="235" font-family="serif" font-size="22" font-weight="900" fill="%237C2D12" text-anchor="middle">MANGO %26 PIÑA</text><text x="400" y="265" font-family="sans-serif" font-size="15" font-weight="800" fill="%23EA580C" text-anchor="middle">Deshidratados Sin Azúcar · 150g</text><text x="400" y="290" font-family="sans-serif" font-size="12" font-weight="900" fill="%2310B981" text-anchor="middle">100% FRUTA REAL</text></svg>`,
      benefits: ["Alto en Fibra", "Sin Azúcar Añadida", "Snack Energético"]
    },
    {
      id: "cacao-ceremonial",
      title: "Cacao Ceremonial Puro de Montaña",
      category: "superfoods",
      desc: "Pasta de cacao 100% orgánico con manteca natural intacta. Tueste artesanal en leña.",
      origin: "El Seibo & Jarabacoa · R.D.",
      badge: "Grado Ceremonial",
      priceDOP: 720,
      priceUSD: 12,
      subPriceDOP: 610,
      subPriceUSD: 10.2,
      rating: "5.0 ★★★★★ (220+ valoraciones)",
      img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%2392400E"/><stop offset="50%" stop-color="%2378350F"/><stop offset="100%" stop-color="%23451A03"/></linearGradient></defs><rect width="800" height="600" fill="url(%23bg)"/><rect x="250" y="280" width="300" height="180" rx="16" fill="%23271004" stroke="%23D97706" stroke-width="4"/><rect x="270" y="300" width="80" height="60" rx="8" fill="%23451A03"/><rect x="360" y="300" width="80" height="60" rx="8" fill="%23451A03"/><rect x="450" y="300" width="80" height="60" rx="8" fill="%23451A03"/><rect x="270" y="375" width="80" height="60" rx="8" fill="%23451A03"/><rect x="360" y="375" width="80" height="60" rx="8" fill="%23451A03"/><rect x="450" y="375" width="80" height="60" rx="8" fill="%23451A03"/><rect x="240" y="130" width="320" height="120" rx="16" fill="%23FFF" stroke="%2378350F" stroke-width="4"/><text x="400" y="175" font-family="serif" font-size="22" font-weight="900" fill="%23451A03" text-anchor="middle">CACAO CEREMONIAL</text><text x="400" y="205" font-family="sans-serif" font-size="14" font-weight="800" fill="%23D97706" text-anchor="middle">100% Puro de Montaña · El Seibo 400g</text><text x="400" y="228" font-family="sans-serif" font-size="11" font-weight="900" fill="%2310B981" text-anchor="middle">GRADO CEREMONIAL</text></svg>`,
      benefits: ["Rico en Teobromina", "Antioxidantes", "Comercio Justo"]
    },
    {
      id: "nibs-cacao-miel",
      title: "Nibs de Cacao Infusionados en Miel",
      category: "superfoods",
      desc: "Trozos de semilla de cacao tostado bañados en miel silvestre de Jarabacoa.",
      origin: "Jarabacoa · R.D.",
      badge: "Crujiente & Natural",
      priceDOP: 520,
      priceUSD: 8.5,
      subPriceDOP: 440,
      subPriceUSD: 7.2,
      rating: "4.9 ★★★★★ (175+ valoraciones)",
      img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23B45309"/><stop offset="50%" stop-color="%2378350F"/><stop offset="100%" stop-color="%23381303"/></linearGradient></defs><rect width="800" height="600" fill="url(%23bg)"/><circle cx="400" cy="380" r="130" fill="%23FEF3C7" stroke="%23F59E0B" stroke-width="6"/><circle cx="370" cy="340" r="16" fill="%23451A03"/><circle cx="430" cy="350" r="14" fill="%23451A03"/><circle cx="390" cy="400" r="18" fill="%23451A03"/><circle cx="440" cy="410" r="15" fill="%23451A03"/><rect x="240" y="130" width="320" height="120" rx="16" fill="%23FFF" stroke="%2378350F" stroke-width="4"/><text x="400" y="175" font-family="serif" font-size="22" font-weight="900" fill="%23451A03" text-anchor="middle">NIBS EN MIEL</text><text x="400" y="205" font-family="sans-serif" font-size="14" font-weight="800" fill="%23D97706" text-anchor="middle">Cacao Tostado con Miel · 300g</text><text x="400" y="228" font-family="sans-serif" font-size="11" font-weight="900" fill="%2310B981" text-anchor="middle">CRUJANTERÍA NATURAL</text></svg>`,
      benefits: ["Textura Crujiente", "Magnesio Natural", "Superalimento"]
    },
    {
      id: "infusion-jengibre",
      title: "Infusión Herbal de Jengibre & Cúrcuma",
      category: "infusions",
      desc: "Mezcla digestiva e inmunológica de raíz de jengibre silvestre, cúrcuma y zacate de limón.",
      origin: "Constanza · R.D.",
      badge: "Inmunidad & Digestión",
      priceDOP: 380,
      priceUSD: 6.5,
      subPriceDOP: 320,
      subPriceUSD: 5.5,
      rating: "4.8 ★★★★★ (95+ valoraciones)",
      img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23FACC15"/><stop offset="50%" stop-color="%23EAB308"/><stop offset="100%" stop-color="%23854D0E"/></linearGradient></defs><rect width="800" height="600" fill="url(%23bg)"/><path d="M 280,320 C 280,450 520,450 520,320 Z" fill="%23FFF" stroke="%23854D0E" stroke-width="6"/><path d="M 520,340 C 580,340 580,400 520,410" fill="none" stroke="%23FFF" stroke-width="10"/><ellipse cx="400" cy="320" rx="120" ry="30" fill="%23FEF08A"/><rect x="240" y="80" width="320" height="100" rx="16" fill="%23FFF" stroke="%23854D0E" stroke-width="4"/><text x="400" y="125" font-family="serif" font-size="20" font-weight="900" fill="%23713F12" text-anchor="middle">INFUSIÓN DE JENGIBRE</text><text x="400" y="152" font-family="sans-serif" font-size="13" font-weight="800" fill="%23CA8A04" text-anchor="middle">Cúrcuma %26 Limón · 20 Filtros</text></svg>`,
      benefits: ["Antiinflamatorio", "Cero Cafeína", "20 Filtros Biodegradables"]
    },
    {
      id: "mantequilla-mani-cacao",
      title: "Mantequilla de Maní & Cacao Orgánico",
      category: "superfoods",
      desc: "Maní tostado artesanalmente mezclado con pasta de cacao y una pizca de sal marina de Montecristi.",
      origin: "Jarabacoa & Montecristi · R.D.",
      badge: "Proteína Natural",
      priceDOP: 490,
      priceUSD: 8,
      subPriceDOP: 410,
      subPriceUSD: 6.8,
      rating: "4.9 ★★★★★ (210+ valoraciones)",
      img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23F59E0B"/><stop offset="50%" stop-color="%23D97706"/><stop offset="100%" stop-color="%2378350F"/></linearGradient></defs><rect width="800" height="600" fill="url(%23bg)"/><rect x="300" y="220" width="200" height="280" rx="20" fill="%23FFF" stroke="%2378350F" stroke-width="6"/><rect x="270" y="180" width="260" height="40" rx="8" fill="%2378350F"/><rect x="320" y="280" width="160" height="140" rx="10" fill="%23FEF3C7" stroke="%23D97706" stroke-width="3"/><text x="400" y="325" font-family="serif" font-size="16" font-weight="900" fill="%2378350F" text-anchor="middle">MANTEQUILLA DE</text><text x="400" y="350" font-family="sans-serif" font-size="18" font-weight="900" fill="%23D97706" text-anchor="middle">MANÍ %26 CACAO</text><text x="400" y="380" font-family="sans-serif" font-size="11" font-weight="800" fill="%2310B981" text-anchor="middle">10g Proteína · 350g</text></svg>`,
      benefits: ["10g Proteína / porción", "Sin Aceite de Palma", "Keto Friendly"]
    }
  ];

  const filteredProducts = activeTab === "all"
    ? products
    : products.filter(p => p.category === activeTab);

  const addToCart = (product: Product, isSub: boolean) => {
    const pDOP = isSub ? product.subPriceDOP : product.priceDOP;
    const pUSD = isSub ? product.subPriceUSD : product.priceUSD;

    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.isSubscription === isSub);
      if (existing) {
        return prev.map(item => item.id === product.id && item.isSubscription === isSub ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, {
        id: product.id,
        title: product.title + (isSub ? " (Suscripción Conuco Box)" : ""),
        priceDOP: pDOP,
        priceUSD: pUSD,
        isSubscription: isSub,
        qty: 1,
        img: product.img
      }];
    });
    setCartOpen(true);
  };

  const updateQty = (id: string, isSub: boolean, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.isSubscription === isSub) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const totalDOP = cart.reduce((sum, item) => sum + item.priceDOP * item.qty, 0);
  const totalUSD = cart.reduce((sum, item) => sum + item.priceUSD * item.qty, 0);

  const freeShippingThresholdDOP = 2500;
  const progressDOP = Math.min(100, (totalDOP / freeShippingThresholdDOP) * 100);

  const handleWhatsAppOrder = () => {
    let msg = `Hola CaribeSuperfoods, deseo realizar el siguiente pedido orgánico:\n\n`;
    cart.forEach(item => {
      msg += `• ${item.qty}x ${item.title} - ${currency === "DOP" ? `RD$ ${item.priceDOP * item.qty}` : `$${item.priceUSD * item.qty}`}\n`;
    });
    msg += `\n*Total*: ${currency === "DOP" ? `RD$ ${totalDOP}` : `$${totalUSD}`}\n`;
    msg += `\nPor favor confirmar disponibilidad y método de envío.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/18093588113?text=${encoded}`, "_blank");
  };

  return (
    <div style={{ background: "#F7F4EB", color: "#0B2B1B", minHeight: "100vh", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      
      {/* Sticky Altamar Demo Banner */}
      <DemoTopBar
        templateName="CaribeSuperfoods & Organics (Inspirado en Beekeeper's Naturals & Sakara)"
        templateCategory="E-Commerce Orgánico & Suscripción Conuco Box"
        whatsappMessage="Hola Altamar, vi la plataforma de CaribeSuperfoods (#caribe-superfoods) y deseo cotizar una tienda e-commerce para mi marca."
        theme="villas"
      />

      {/* ─── ANNOUNCEMENT BAR ────────────────────────────────────── */}
      <div style={{ background: "#0B2B1B", color: "#F7F4EB", padding: "10px 24px", fontSize: "12px", textAlign: "center", fontWeight: 700, letterSpacing: "0.06em" }}>
        🚚 ENVIOS A TODO EL PAÍS EN 24-48H · ENVIOS GRATIS EN PEDIDOS MAYORES DE RD$ 2,500 ($45 USD)
      </div>

      {/* ─── HEADER / NAVIGATION ─────────────────────────────────── */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 99,
        background: "rgba(247, 244, 235, 0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(11, 43, 27, 0.1)",
        padding: "16px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        {/* Brand Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ background: "#10B981", color: "#FFFFFF", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 4.4-3.6 8-8 8z"/>
              <path d="M11 20v-9"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "18px", fontWeight: 900, color: "#0B2B1B", letterSpacing: "0.02em", lineHeight: "1" }}>
              CARIBE SUPERFOODS
            </div>
            <div style={{ fontSize: "9.5px", fontWeight: 800, color: "#10B981", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "3px" }}>
              Constanza & Jarabacoa · 100% Orgánico
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "24px", fontSize: "13px", fontWeight: 700, color: "#0B2B1B" }} className="nav-link-desktop">
          <a href="#tienda" style={{ color: "#0B2B1B", textDecoration: "none" }}>Catálogo</a>
          <a href="#conuco-box" style={{ color: "#0B2B1B", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "5px" }}>
            Cesta Conuco Box
            <span style={{ background: "#10B981", color: "#FFF", fontSize: "9px", padding: "1px 6px", borderRadius: "9999px", fontWeight: 900 }}>-15%</span>
          </a>
          <a href="#fincas" style={{ color: "#0B2B1B", textDecoration: "none" }}>Nuestras Fincas</a>
          <a href="#certificaciones" style={{ color: "#0B2B1B", textDecoration: "none" }}>Certificaciones</a>
        </nav>

        {/* Cart Drawer Trigger */}
        <button
          onClick={() => setCartOpen(true)}
          style={{
            background: "#0B2B1B",
            color: "#F7F4EB",
            border: "none",
            borderRadius: "9999px",
            padding: "8px 18px",
            fontSize: "12px",
            fontWeight: 800,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 4px 14px rgba(11, 43, 27, 0.2)"
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          Cesta ({cart.reduce((sum, i) => sum + i.qty, 0)})
        </button>
      </header>

      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px 60px", maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(16, 185, 129, 0.12)", color: "#065F46", padding: "6px 14px", borderRadius: "9999px", fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Cosechado a 1,200m de Altitud · Libre de Pesticidas
          </div>

          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(34px, 4.5vw, 54px)", fontWeight: 900, lineHeight: "1.1", color: "#0B2B1B", margin: "0 0 20px 0" }}>
            Superalimentos 100% Orgánicos de las Montañas Dominicanas
          </h1>

          <p style={{ fontSize: "16px", color: "#334155", lineHeight: "1.6", margin: "0 0 28px 0" }}>
            Miel silvestre sin filtrar, aceite de aguacate prensado en frío, cacao ceremonial de origen y snacks de frutas deshidratadas directamente desde nuestras fincas en Constanza y Jarabacoa a tu mesa.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="#tienda"
              style={{
                background: "#0B2B1B",
                color: "#F7F4EB",
                textDecoration: "none",
                padding: "14px 28px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 900,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 6px 20px rgba(11, 43, 27, 0.25)"
              }}
            >
              Explorar Catálogo Orgánico →
            </a>
            <a
              href="#conuco-box"
              style={{
                background: "#FFFFFF",
                color: "#0B2B1B",
                border: "1px solid rgba(11, 43, 27, 0.2)",
                textDecoration: "none",
                padding: "14px 24px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 800
              }}
            >
              Armar &quot;El Conuco Box&quot; (-15%)
            </a>
          </div>

          {/* Key Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginTop: "40px", paddingTop: "24px", borderTop: "1px solid rgba(11, 43, 27, 0.12)" }}>
            <div>
              <div style={{ fontSize: "20px", fontWeight: 900, color: "#10B981" }}>1,200m</div>
              <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 700 }}>Altitud en Constanza</div>
            </div>
            <div>
              <div style={{ fontSize: "20px", fontWeight: 900, color: "#10B981" }}>100%</div>
              <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 700 }}>Puro & Sin Filtrar</div>
            </div>
            <div>
              <div style={{ fontSize: "20px", fontWeight: 900, color: "#10B981" }}>24-48h</div>
              <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 700 }}>Envío Nacional R.D.</div>
            </div>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div style={{ position: "relative" }}>
          <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 24px 48px rgba(11, 43, 27, 0.25)", border: "4px solid #FFFFFF" }}>
            <img
              src={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="800" viewBox="0 0 1000 800"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23FCD34D"/><stop offset="50%" stop-color="%23F59E0B"/><stop offset="100%" stop-color="%23B45309"/></linearGradient></defs><rect width="1000" height="800" fill="url(%23bg)"/><path d="M500 80 l60 35 v70 l-60 35 l-60 -35 v-70 z M380 150 l60 35 v70 l-60 35 l-60 -35 v-70 z M620 150 l60 35 v70 l-60 35 l-60 -35 v-70 z" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="6"/><rect x="360" y="280" width="280" height="380" rx="40" fill="%23FFF" stroke="%23B45309" stroke-width="8"/><rect x="320" y="230" width="360" height="50" rx="14" fill="%2378350F"/><rect x="400" y="360" width="200" height="200" rx="16" fill="%23FFF" stroke="%23D97706" stroke-width="4"/><text x="500" y="420" font-family="serif" font-size="28" font-weight="900" fill="%2378350F" text-anchor="middle">CARIBE</text><text x="500" y="460" font-family="sans-serif" font-size="18" font-weight="800" fill="%23D97706" text-anchor="middle">MIEL SILVESTRE</text><text x="500" y="495" font-family="sans-serif" font-size="15" font-weight="700" fill="%23451A03" text-anchor="middle">Jarabacoa · 1,200m</text><text x="500" y="530" font-family="sans-serif" font-size="14" font-weight="900" fill="%2310B981" text-anchor="middle">100% PURA ORGÁNICA</text></svg>`}
              alt="Miel Silvestre de Jarabacoa"
              style={{ width: "100%", height: "460px", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Floating Product Card Overlay */}
          <div style={{
            position: "absolute",
            bottom: "-20px",
            left: "-20px",
            background: "#FFFFFF",
            borderRadius: "16px",
            padding: "16px 20px",
            boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
            border: "1px solid #E2E8F0",
            maxWidth: "260px"
          }}>
            <div style={{ fontSize: "10px", fontWeight: 800, color: "#10B981", textTransform: "uppercase" }}>
              Cosecha Limitada 2026
            </div>
            <div style={{ fontSize: "13px", fontWeight: 900, color: "#0B2B1B", marginTop: "2px" }}>
              Miel Silvestre Jarabacoa
            </div>
            <div style={{ fontSize: "12px", color: "#D96B43", fontWeight: 900, marginTop: "4px" }}>
              {fmt(11)} <span style={{ fontSize: "10px", color: "#64748B", fontWeight: 500 }}>/ 500g</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── E-COMMERCE CATALOG GRID ─────────────────────────────── */}
      <section id="tienda" style={{ padding: "80px 24px", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ fontSize: "12px", fontWeight: 800, color: "#10B981", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Catálogo Orgánico Certificado
          </span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "36px", fontWeight: 900, color: "#0B2B1B", marginTop: "6px" }}>
            Cosechados & Elaborados en Finca
          </h2>
          <p style={{ fontSize: "15px", color: "#475569", maxWidth: "560px", margin: "10px auto 0" }}>
            Selecciona tus productos favoritos para envío único o suscríbete para recibir entregas automatizadas en tu hogar con 15% de descuento permanente.
          </p>

          {/* Filter Tabs */}
          <div style={{ display: "inline-flex", gap: "8px", background: "#FFFFFF", padding: "6px", borderRadius: "9999px", border: "1px solid #E2E8F0", marginTop: "24px" }}>
            {[
              { key: "all", label: "Todos los Productos" },
              { key: "honey", label: "Mieles & Aceites" },
              { key: "superfoods", label: "Superalimentos & Cacao" },
              { key: "infusions", label: "Infusiones Herbales" }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  background: activeTab === tab.key ? "#0B2B1B" : "none",
                  color: activeTab === tab.key ? "#F7F4EB" : "#475569",
                  border: "none",
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  fontSize: "12px",
                  fontWeight: 800,
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "24px" }}>
          {filteredProducts.map(product => {
            const plan = selectedPlan[product.id] || "subscription";
            return (
              <div
                key={product.id}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid #E2E8F0",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                  transition: "transform 0.2s ease, boxShadow 0.2s ease"
                }}
              >
                {/* Image & Badge */}
                <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                  <ProductMockupImage src={product.img} alt={product.title} type={product.id} badge={product.badge} />
                </div>

                {/* Card Body */}
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div style={{ fontSize: "11px", color: "#10B981", fontWeight: 800 }}>
                    📍 {product.origin}
                  </div>
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: "17px", fontWeight: 900, color: "#0B2B1B", margin: "6px 0 4px 0", lineHeight: "1.3" }}>
                    {product.title}
                  </h3>
                  <p style={{ fontSize: "12.5px", color: "#64748B", lineHeight: "1.5", margin: "0 0 14px 0" }}>
                    {product.desc}
                  </p>

                  {/* Benefits Badges */}
                  <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginBottom: "16px" }}>
                    {product.benefits.map(b => (
                      <span key={b} style={{ background: "#F1F5F9", color: "#334155", fontSize: "10px", fontWeight: 700, padding: "3px 7px", borderRadius: "4px" }}>
                        ✓ {b}
                      </span>
                    ))}
                  </div>

                  {/* Purchase Option Toggle (Beekeeper's Naturals Style) */}
                  <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "8px", marginBottom: "16px" }}>
                    {/* Subscription Option */}
                    <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 8px", borderRadius: "6px", cursor: "pointer", background: plan === "subscription" ? "#FFFFFF" : "transparent", boxShadow: plan === "subscription" ? "0 2px 6px rgba(0,0,0,0.06)" : "none" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <input
                          type="radio"
                          name={`plan-${product.id}`}
                          checked={plan === "subscription"}
                          onChange={() => setSelectedPlan(prev => ({ ...prev, [product.id]: "subscription" }))}
                        />
                        <div>
                          <div style={{ fontSize: "11.5px", fontWeight: 800, color: "#0B2B1B" }}>
                            Suscribir & Ahorrar 15%
                          </div>
                          <div style={{ fontSize: "9.5px", color: "#10B981", fontWeight: 700 }}>
                            Entrega Automática Mensual
                          </div>
                        </div>
                      </div>
                      <div style={{ fontSize: "13px", fontWeight: 900, color: "#0B2B1B" }}>
                        {fmt(product.subPriceUSD)}
                      </div>
                    </label>

                    {/* One-time Purchase Option */}
                    <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 8px", borderRadius: "6px", cursor: "pointer", marginTop: "4px", background: plan === "one-time" ? "#FFFFFF" : "transparent", boxShadow: plan === "one-time" ? "0 2px 6px rgba(0,0,0,0.06)" : "none" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <input
                          type="radio"
                          name={`plan-${product.id}`}
                          checked={plan === "one-time"}
                          onChange={() => setSelectedPlan(prev => ({ ...prev, [product.id]: "one-time" }))}
                        />
                        <div style={{ fontSize: "11.5px", fontWeight: 700, color: "#475569" }}>
                          Compra Única
                        </div>
                      </div>
                      <div style={{ fontSize: "12.5px", fontWeight: 800, color: "#475569" }}>
                        {fmt(product.priceUSD)}
                      </div>
                    </label>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(product, plan === "subscription")}
                    style={{
                      marginTop: "auto",
                      width: "100%",
                      background: plan === "subscription" ? "#10B981" : "#0B2B1B",
                      color: "#FFFFFF",
                      border: "none",
                      padding: "12px",
                      borderRadius: "10px",
                      fontSize: "12.5px",
                      fontWeight: 900,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px"
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    {plan === "subscription" ? "Agregar Suscripción (-15%)" : "Agregar a la Cesta"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── "EL CONUCO BOX" SUBSCRIPTION BUILDER ─────────────── */}
      <section id="conuco-box" style={{ background: "#0B2B1B", color: "#F7F4EB", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <span style={{ background: "rgba(16, 185, 129, 0.2)", color: "#34D399", padding: "4px 12px", borderRadius: "9999px", fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Cesta Orgánica Automatizada
            </span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "38px", fontWeight: 900, color: "#F7F4EB", margin: "14px 0 16px 0", lineHeight: "1.15" }}>
              Suscripción &quot;El Conuco Box&quot;
            </h2>
            <p style={{ fontSize: "15px", color: "#A7F3D0", lineHeight: "1.6", margin: "0 0 24px 0" }}>
              Recibe automáticamente en tu puerta una selección fresca de mieles, aceites, superalimentos y cacao de nuestras fincas. Cancela o pausa en 1 clic en cualquier momento.
            </p>

            {/* Step 1: Tier Selector */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontSize: "12px", fontWeight: 800, color: "#34D399", textTransform: "uppercase", marginBottom: "8px", letterSpacing: "0.05em" }}>
                1. Selecciona el Tamaño de Cesta:
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <button
                  onClick={() => setSubTier("essential")}
                  style={{
                    background: subTier === "essential" ? "#10B981" : "rgba(255,255,255,0.08)",
                    color: "#FFFFFF",
                    border: subTier === "essential" ? "2px solid #34D399" : "1px solid rgba(255,255,255,0.15)",
                    padding: "14px",
                    borderRadius: "12px",
                    textAlign: "left",
                    cursor: "pointer"
                  }}
                >
                  <div style={{ fontSize: "13px", fontWeight: 900, color: "#FFFFFF" }}>Cesta Esencial (3 Prod.)</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.8)", marginTop: "2px" }}>Miel + Aceite + Cacao</div>
                  <div style={{ fontSize: "14px", fontWeight: 900, color: "#FFFFFF", marginTop: "6px" }}>{fmt(32.5)} / entrega</div>
                </button>

                <button
                  onClick={() => setSubTier("gourmet")}
                  style={{
                    background: subTier === "gourmet" ? "#10B981" : "rgba(255,255,255,0.08)",
                    color: "#FFFFFF",
                    border: subTier === "gourmet" ? "2px solid #34D399" : "1px solid rgba(255,255,255,0.15)",
                    padding: "14px",
                    borderRadius: "12px",
                    textAlign: "left",
                    cursor: "pointer"
                  }}
                >
                  <div style={{ fontSize: "13px", fontWeight: 900, color: "#FFFFFF" }}>Cesta Gourmet (6 Prod.)</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.8)", marginTop: "2px" }}>Selección Completa Finca</div>
                  <div style={{ fontSize: "14px", fontWeight: 900, color: "#FFFFFF", marginTop: "6px" }}>{fmt(60)} / entrega</div>
                </button>
              </div>
            </div>

            {/* Step 2: Frequency Selector */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{ fontSize: "12px", fontWeight: 800, color: "#34D399", textTransform: "uppercase", marginBottom: "8px", letterSpacing: "0.05em" }}>
                2. Frecuencia de Entrega:
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                {[
                  { key: "weekly", label: "Semanal" },
                  { key: "biweekly", label: "Quincenal" },
                  { key: "monthly", label: "Mensual" }
                ].map(freq => (
                  <button
                    key={freq.key}
                    onClick={() => setSubFreq(freq.key as any)}
                    style={{
                      background: subFreq === freq.key ? "rgba(16, 185, 129, 0.3)" : "rgba(255,255,255,0.05)",
                      color: "#FFFFFF",
                      border: subFreq === freq.key ? "2px solid #34D399" : "1px solid rgba(255,255,255,0.1)",
                      padding: "10px",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: 800,
                      cursor: "pointer"
                    }}
                  >
                    {freq.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Add Subscription to Cart CTA */}
            <button
              onClick={() => {
                const subItem: Product = {
                  id: `conuco-box-${subTier}`,
                  title: `Cesta Conuco Box (${subTier === "essential" ? "3 Productos" : "6 Productos"}) - Entrega ${subFreq === "weekly" ? "Semanal" : subFreq === "biweekly" ? "Quincenal" : "Mensual"}`,
                  category: "superfoods",
                  desc: "Cesta automatizada de productos orgánicos seleccionados.",
                  origin: "Constanza & Jarabacoa",
                  badge: "Suscripción Conuco",
                  priceDOP: subTier === "essential" ? 1950 : 3600,
                  priceUSD: subTier === "essential" ? 32.5 : 60,
                  subPriceDOP: subTier === "essential" ? 1950 : 3600,
                  subPriceUSD: subTier === "essential" ? 32.5 : 60,
                  rating: "5.0 ★★★★★",
                  img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
                  benefits: ["15% Ahorro", "Envío Gratis", "Pausa en 1 Clic"]
                };
                addToCart(subItem, true);
              }}
              style={{
                width: "100%",
                background: "#10B981",
                color: "#FFFFFF",
                border: "none",
                padding: "16px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 900,
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(16, 185, 129, 0.4)"
              }}
            >
              Iniciar Suscripción Conuco Box ({fmt(subTier === "essential" ? 32.5 : 60)}) →
            </button>
          </div>

          {/* Subscription Box Visual Mockup */}
          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "24px", padding: "32px", backdropFilter: "blur(8px)" }}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <div style={{ fontSize: "11px", fontWeight: 800, color: "#34D399", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                ¿Qué incluye tu primera entrega?
              </div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: 900, color: "#FFFFFF", marginTop: "6px" }}>
                Cesta {subTier === "essential" ? "Esencial" : "Gourmet"} {subFreq === "weekly" ? "Semanal" : subFreq === "biweekly" ? "Quincenal" : "Mensual"}
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "1x Miel Silvestre de Jarabacoa (500g)",
                "1x Aceite de Aguacate Hass Constanza (250ml)",
                "1x Cacao Ceremonial de Origen (400g)",
                ...(subTier === "gourmet" ? [
                  "1x Snack de Mango & Piña Deshidratada (150g)",
                  "1x Polvo de Moringa Orgánica (200g)",
                  "1x Infusión Herbal de Jengibre & Cúrcuma"
                ] : [])
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", padding: "10px 14px", borderRadius: "10px", fontSize: "13px", fontWeight: 700, color: "#FFFFFF" }}>
                  <span style={{ color: "#34D399" }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.12)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", color: "#A7F3D0", fontWeight: 700 }}>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
                Envío Gratis Nacional Incluido
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                Cancela o Pausa en 1 Clic
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FARM TRACEABILITY & CERTIFICATIONS ─────────────────── */}
      <section id="fincas" style={{ padding: "80px 24px", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ fontSize: "12px", fontWeight: 800, color: "#10B981", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Trazabilidad Directa de Origen
          </span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "36px", fontWeight: 900, color: "#0B2B1B", marginTop: "6px" }}>
            Nuestras Fincas en la Cordillera Central
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
          {/* Farm 1: Constanza */}
          <div style={{ background: "#FFFFFF", borderRadius: "20px", overflow: "hidden", border: "1px solid #E2E8F0", boxShadow: "0 6px 24px rgba(0,0,0,0.04)" }}>
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" alt="Finca Constanza" style={{ width: "100%", height: "240px", objectFit: "cover" }} />
            <div style={{ padding: "24px" }}>
              <div style={{ fontSize: "11px", fontWeight: 800, color: "#10B981", textTransform: "uppercase" }}>1,200m sobre el nivel del mar</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 900, color: "#0B2B1B", margin: "4px 0 8px 0" }}>Finca Valle de Constanza</h3>
              <p style={{ fontSize: "13.5px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
                Especializada en el cultivo de aguacates Hass de montaña, moringa orgánica e infusiones herbales en suelos volcánicos ricos en minerales.
              </p>
            </div>
          </div>

          {/* Farm 2: Jarabacoa */}
          <div style={{ background: "#FFFFFF", borderRadius: "20px", overflow: "hidden", border: "1px solid #E2E8F0", boxShadow: "0 6px 24px rgba(0,0,0,0.04)" }}>
            <img src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800&q=80" alt="Apiarios Jarabacoa" style={{ width: "100%", height: "240px", objectFit: "cover" }} />
            <div style={{ padding: "24px" }}>
              <div style={{ fontSize: "11px", fontWeight: 800, color: "#10B981", textTransform: "uppercase" }}>Reserva de Biosfera Silvestre</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 900, color: "#0B2B1B", margin: "4px 0 8px 0" }}>Apiarios Jarabacoa</h3>
              <p style={{ fontSize: "13.5px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
                Colmenas ubicadas en zonas silvestres protegidas sin exposición a pesticidas ni químicos sintéticos. Cosecha sustentable de miel cruda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SLIDE-OUT CART DRAWER ────────────────────────────────── */}
      {cartOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99999, display: "flex", justifyContent: "flex-end" }}>
          {/* Backdrop */}
          <div
            onClick={() => setCartOpen(false)}
            style={{ position: "absolute", inset: 0, background: "rgba(11, 43, 27, 0.5)", backdropFilter: "blur(4px)" }}
          />

          {/* Drawer Body */}
          <div style={{
            position: "relative",
            width: "100%",
            maxWidth: "420px",
            background: "#FFFFFF",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            boxShadow: "-10px 0 30px rgba(0,0,0,0.2)",
            zIndex: 1
          }}>
            {/* Header */}
            <div style={{ padding: "20px", borderBottom: "1px solid #E2E8F0", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#F7F4EB" }}>
              <div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", fontWeight: 900, color: "#0B2B1B", margin: 0 }}>
                  Tu Cesta Orgánica
                </h3>
                <div style={{ fontSize: "11px", color: "#64748B", marginTop: "2px" }}>
                  {cart.length} productos seleccionados
                </div>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#0B2B1B", fontWeight: 700 }}
              >
                ✕
              </button>
            </div>

            {/* Free Shipping Progress Bar */}
            <div style={{ padding: "12px 20px", background: "#ECFDF5", borderBottom: "1px solid #A7F3D0" }}>
              <div style={{ fontSize: "11.5px", fontWeight: 800, color: "#065F46", display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span>
                  {progressDOP >= 100 ? "¡Felicidades! Tienes Envío Gratis Nacional 🎉" : `Faltan ${fmt(Math.max(0, (freeShippingThresholdDOP - totalDOP) / 60))} para Envío Gratis`}
                </span>
                <span>{Math.round(progressDOP)}%</span>
              </div>
              <div style={{ background: "#D1FAE5", height: "6px", borderRadius: "3px", overflow: "hidden" }}>
                <div style={{ background: "#10B981", height: "100%", width: `${progressDOP}%`, transition: "width 0.3s ease" }} />
              </div>
            </div>

            {/* Cart Items List */}
            <div style={{ padding: "20px", flexGrow: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "14px" }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: "center", padding: "40px 20px", color: "#94A3B8" }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: "0 auto 12px", opacity: 0.5 }}>
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: "#0B2B1B" }}>Tu cesta está vacía</div>
                  <div style={{ fontSize: "12px", marginTop: "4px" }}>Explora nuestro catálogo para agregar superalimentos.</div>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id + item.isSubscription} style={{ display: "flex", gap: "12px", padding: "12px", background: "#F8FAFC", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
                    <img src={item.img} alt={item.title} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }} />
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ fontSize: "12.5px", fontWeight: 800, color: "#0B2B1B", lineHeight: "1.3" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: "12px", fontWeight: 900, color: "#10B981", marginTop: "4px" }}>
                        {currency === "DOP" ? `RD$ ${item.priceDOP * item.qty}` : `$${item.priceUSD * item.qty}`}
                      </div>

                      {/* Qty Controls */}
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "6px" }}>
                        <button
                          onClick={() => updateQty(item.id, item.isSubscription, -1)}
                          style={{ width: "22px", height: "22px", borderRadius: "4px", border: "1px solid #CBD5E1", background: "#FFF", cursor: "pointer", fontWeight: 800 }}
                        >
                          -
                        </button>
                        <span style={{ fontSize: "12px", fontWeight: 800 }}>{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.isSubscription, 1)}
                          style={{ width: "22px", height: "22px", borderRadius: "4px", border: "1px solid #CBD5E1", background: "#FFF", cursor: "pointer", fontWeight: 800 }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {cart.length > 0 && (
              <div style={{ padding: "20px", borderTop: "1px solid #E2E8F0", background: "#F7F4EB" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px", fontWeight: 900, color: "#0B2B1B", marginBottom: "14px" }}>
                  <span>Total Estimado:</span>
                  <span>{currency === "DOP" ? `RD$ ${totalDOP}` : `$${totalUSD}`}</span>
                </div>

                <button
                  onClick={handleWhatsAppOrder}
                  style={{
                    width: "100%",
                    background: "#25D366",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "14px",
                    borderRadius: "9999px",
                    fontSize: "13.5px",
                    fontWeight: 900,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow: "0 4px 14px rgba(37, 211, 102, 0.3)"
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  Despachar Pedido por WhatsApp →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer style={{ background: "#0B2B1B", color: "#F7F4EB", padding: "60px 24px 30px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", textAlign: "center", fontSize: "12px", color: "#A7F3D0" }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: 900, color: "#FFFFFF", marginBottom: "8px" }}>
            CARIBE SUPERFOODS & ORGANICS SRL
          </div>
          <div>Carretera Constanza - Jarabacoa Km 14, La Vega, República Dominicana · RNC #132-84920-1</div>
          <div style={{ marginTop: "8px", color: "#94A3B8" }}>contacto@caribesuperfoods.do · Instagram: @caribesuperfoods.do</div>
          <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", color: "#10B981", fontWeight: 800 }}>
            Plantilla Prototipo Desarrollada por Altamar Web Studio
          </div>
        </div>
      </footer>

    </div>
  );
}
