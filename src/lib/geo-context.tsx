"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { TranslationKey } from "./translations";

export type CurrencyType = "DOP" | "USD";
export type LanguageType = "es" | "en";

interface GeoContextType {
  lang: LanguageType;
  setLang: (l: LanguageType) => void;
  currency: CurrencyType;
  setCurrency: (c: CurrencyType) => void;
  rate: number;
  country: string;
  countryName: string;
  isDR: boolean;
  loading: boolean;
  fmt: (usdPrice: number) => string;
  resetToDetected: () => void;
}

const GeoContext = createContext<GeoContextType | undefined>(undefined);

export function GeoProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LanguageType>("es");
  const [currency, setCurrencyState] = useState<CurrencyType>("DOP");
  const [country, setCountry] = useState("DO");
  const [countryName, setCountryName] = useState("República Dominicana");
  const [isDR, setIsDR] = useState(true);
  const [loading, setLoading] = useState(true);

  // Exchange rate: 1 USD = 60 DOP
  const rate = 60;

  // Custom setter that persists language choice
  const setLang = (l: LanguageType) => {
    setLangState(l);
    try {
      localStorage.setItem("altamar_user_lang", l);
    } catch {}
  };

  // Custom setter that persists currency choice
  const setCurrency = (c: CurrencyType) => {
    setCurrencyState(c);
    try {
      localStorage.setItem("altamar_user_currency", c);
    } catch {}
  };

  const resetToDetected = () => {
    try {
      localStorage.removeItem("altamar_user_lang");
      localStorage.removeItem("altamar_user_currency");
    } catch {}
    detectRegion();
  };

  const detectRegion = async () => {
    setLoading(true);

    // 1. Check for stored manual preferences first
    let savedLang: LanguageType | null = null;
    let savedCurrency: CurrencyType | null = null;
    try {
      const l = localStorage.getItem("altamar_user_lang");
      if (l === "es" || l === "en") savedLang = l;
      const c = localStorage.getItem("altamar_user_currency");
      if (c === "DOP" || c === "USD") savedCurrency = c;
    } catch {}

    // 2. Perform fast local fallback detection using Timezone & Browser Navigator
    let detectedCountry = "DO";
    let detectedCountryName = "República Dominicana";
    let detectedIsDR = true;

    try {
      const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "";
      const navLang = typeof navigator !== "undefined" ? (navigator.language || "").toLowerCase() : "";

      const isSantoDomingoTz = tz.includes("Santo_Domingo");
      const isDRLocale = navLang.includes("es-do") || navLang.includes("es_do");

      if (!isSantoDomingoTz && !isDRLocale) {
        // Likely outside DR
        detectedCountry = "US";
        detectedCountryName = "International";
        detectedIsDR = false;
      }
    } catch {}

    // 3. Perform IP-based Geolocation Lookup with 2.2s Abort Controller
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2200);

      const res = await fetch("https://ipapi.co/json/", { signal: controller.signal });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data.country_code) {
          detectedCountry = data.country_code;
          detectedCountryName = data.country_name || data.country_code;
          detectedIsDR = data.country_code === "DO";
        }
      }
    } catch (err) {
      // Quietly fall back to Timezone/Browser detection
    }

    // 4. Apply Rules:
    // - If region == Dominican Republic (DO): default currency = DOP, default lang = es
    // - If region == ANYWHERE outside DR: default currency = ALWAYS USD
    setCountry(detectedCountry);
    setCountryName(detectedCountryName);
    setIsDR(detectedIsDR);

    if (savedLang) {
      setLangState(savedLang);
    } else {
      const navLang = typeof navigator !== "undefined" ? (navigator.language || "").toLowerCase() : "";
      if (detectedIsDR) {
        setLangState("es");
      } else {
        setLangState(navLang.startsWith("es") ? "es" : "en");
      }
    }

    if (savedCurrency) {
      setCurrencyState(savedCurrency);
    } else {
      if (detectedIsDR) {
        setCurrencyState("DOP");
      } else {
        // ANYWHERE outside DR MUST default to USD
        setCurrencyState("USD");
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    detectRegion();
  }, []);

  const fmt = (usdAmount: number) => {
    if (currency === "DOP") {
      const dopAmount = usdAmount * rate;
      return `RD$ ${dopAmount.toLocaleString("es-DO")}`;
    }
    return `$${usdAmount.toLocaleString("en-US")}`;
  };

  return (
    <GeoContext.Provider value={{
      lang,
      setLang,
      currency,
      setCurrency,
      rate,
      country,
      countryName,
      isDR,
      loading,
      fmt,
      resetToDetected,
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
