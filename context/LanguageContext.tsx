"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  dir: "rtl" | "ltr";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    const root = document.documentElement;
    if (language === "ar") {
      root.dir = "rtl";
      root.lang = "ar";
      root.classList.remove("font-kanit");
      root.classList.add("font-alexandria");
    } else {
      root.dir = "ltr";
      root.lang = "en";
      root.classList.remove("font-alexandria");
      root.classList.add("font-kanit");
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
