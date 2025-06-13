// hooks/useLanguage.js
import { useState } from "react";

export function useLanguage() {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return { language, setLanguage, toggleLanguage };
}
