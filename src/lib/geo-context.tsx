"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { TranslationKey } from "./translations";

interface GeoContextType {
  lang: TranslationKey;
  setLang: (l: TranslationKey) => void;
  currency: "USD" | "DOP";
  setCurrency: (c: "USD" | "DOP") => void;
  rate: number;
  country: string;
  loading: boolean;
  fmt: (usdPrice: number) => string;
}

const GeoContext = createContext<GeoContextType | undefined>(undefined);

export function GeoProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<TranslationKey>("es");
  const [currency, setCurrency] = useState<"USD" | "DOP">("DOP");
  const [country, setCountry] = useState("DO");
  const [loading, setLoading] = useState(true);

  // Conversion rate: 1 USD = 60 DOP (standard DR exchange rate benchmark)
  const rate = 60;

  useEffect(() => {
    async function detectGeo() {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);

      try {
        // Detect browser language preference
        const userLang = typeof navigator !== "undefined" ? (navigator.language || "") : "";
        if (userLang && !userLang.toLowerCase().startsWith("es")) {
          setLang("en");
          setCurrency("USD");
          setCountry("US");
        }

        // Fetch location details from a free geolocation API with strict timeout
        const res = await fetch("https://ipapi.co/json/", { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (data.country_code === "DO") {
            setCountry("DO");
            setCurrency("DOP");
            setLang("es");
          } else {
            setCountry(data.country_code || "US");
            setCurrency("USD");
            if (!userLang.toLowerCase().startsWith("es")) {
              setLang("en");
            } else {
              setLang("es");
            }
          }
        }
      } catch (err) {
        // Bypassed quietly on network delay or timeout
      } finally {
        clearTimeout(timeoutId);
        setLoading(false);
      }
    }
    detectGeo();
  }, []);

  const fmt = (usdAmount: number) => {
    if (currency === "DOP") {
      const dopAmount = usdAmount * rate;
      return dopAmount.toLocaleString("es-DO", {
        style: "currency",
        currency: "DOP",
        maximumFractionDigits: 0,
      }).replace("DOP", "RD$");
    }
    return usdAmount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
  };

  return (
    <GeoContext.Provider value={{
      lang,
      setLang,
      currency,
      setCurrency,
      rate,
      country,
      loading,
      fmt,
    }}>
      {children}
    </GeoContext.Provider>
  );
}

export function useGeo() {
  const context = useContext(GeoContext);
  if (!context) throw new Error("useGeo must be used within a GeoProvider");
  return context;
}
