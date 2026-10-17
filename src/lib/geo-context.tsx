"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

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

    // 1. Stored manual preferences win.
    let savedLang: LanguageType | null = null;
    let savedCurrency: CurrencyType | null = null;
    try {
      const l = localStorage.getItem("altamar_user_lang");
      if (l === "es" || l === "en") savedLang = l;
      const c = localStorage.getItem("altamar_user_currency");
      if (c === "DOP" || c === "USD") savedCurrency = c;
    } catch {}

    // Language: Spanish for everyone unless the visitor explicitly picked
    // English in the region selector. We never auto-switch on browser
    // language — the server-rendered page is Spanish and must stay that way.
    setLangState(savedLang ?? "es");

    // 2. Fast local guess for currency (timezone / locale).
    let detectedCountry = "DO";
    let detectedCountryName = "República Dominicana";
    let detectedIsDR = true;

    try {
      const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "";
      const navLang = typeof navigator !== "undefined" ? (navigator.language || "").toLowerCase() : "";
      const isSantoDomingoTz = tz.includes("Santo_Domingo");
      const isDRLocale = navLang.includes("es-do") || navLang.includes("es_do");
      if (!isSantoDomingoTz && !isDRLocale) {
        detectedCountry = "US";
        detectedCountryName = "International";
        detectedIsDR = false;
      }
    } catch {}

    // 3. IP lookup only when we still need it (no saved currency), and only
    //    after the page is idle so it never competes with first paint.
    if (!savedCurrency) {
      await new Promise<void>((resolve) => {
        const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
        if (w.requestIdleCallback) w.requestIdleCallback(() => resolve(), { timeout: 3000 });
        else window.setTimeout(resolve, 1500);
      });
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
      } catch {
        // Quietly fall back to timezone / locale detection.
      }
    }

    setCountry(detectedCountry);
    setCountryName(detectedCountryName);
    setIsDR(detectedIsDR);

    // Currency: DOP in the DR, USD elsewhere — unless the visitor chose one.
    setCurrencyState(savedCurrency ?? (detectedIsDR ? "DOP" : "USD"));

    setLoading(false);
  };

  useEffect(() => {
    detectRegion();
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const fmt = (usdAmount: number) => {
    if (currency === "DOP") {
      const dopAmount = Math.round(usdAmount * rate);
      return `RD$ ${dopAmount.toLocaleString("es-DO")}`;
    }
    // "US$" — a bare "$" reads as pesos to many Dominican visitors.
    return `US$ ${Math.round(usdAmount).toLocaleString("en-US")}`;
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
