// Gjuha e faqes (EN / SQ) — pa paketa shtesë.
// Përdorimi në një komponent:
//   const { t, tr, lang, setLang, locale } = useLang();
//   t("nav.cars")              → tekst nga lib/translations.js
//   t("bw.days", { n: 3 })     → tekst me vlera
//   tr({ en: "...", sq: "..." }) → zgjedh gjuhën për të dhëna (makina, artikuj…)
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import STRINGS from "./translations";

// Shqipja është gjuha kryesore dhe del e para
export const LANGS = [
  { code: "sq", label: "SQ", name: "Shqip" },
  { code: "en", label: "EN", name: "English" },
];

export const DEFAULT_LANG = "sq";

const STORAGE_KEY = "pojana-lang-v2";

// Faqja hapet gjithmonë në shqip. Nëse vizitori zgjedh EN, zgjedhja ruhet për herën tjetër.
const initialLang = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "sq") return saved;
  } catch (e) {
    /* localStorage mund të jetë i bllokuar */
  }
  return DEFAULT_LANG;
};

const fill = (text, vars) =>
  vars ? text.replace(/\{(\w+)\}/g, (m, k) => (vars[k] !== undefined ? vars[k] : m)) : text;

const LangContext = createContext(null);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* s'ka problem */
    }
  }, [lang]);

  const t = useCallback(
    (key, vars) => {
      const value = (STRINGS[lang] && STRINGS[lang][key]) ?? STRINGS.en[key];
      if (value === undefined) return key;
      if (typeof value === "function") return value(vars || {});
      return fill(value, vars);
    },
    [lang]
  );

  const tr = useCallback(
    (value) =>
      value && typeof value === "object" && !Array.isArray(value) && "en" in value
        ? value[lang] ?? value.en
        : value,
    [lang]
  );

  const ctx = useMemo(
    () => ({ lang, setLang, t, tr, locale: lang === "sq" ? "sq-AL" : "en-GB" }),
    [lang, t, tr]
  );

  return <LangContext.Provider value={ctx}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);

/** Ndërruesi EN | SQ */
export const LangSwitch = ({ className = "" }) => {
  const { lang, setLang, t } = useLang();
  return (
    <div className={`lang-switch ${className}`} role="group" aria-label={t("lang.label")}>
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          className={lang === l.code ? "is-active" : ""}
          aria-pressed={lang === l.code}
          title={l.name}
          lang={l.code}
          onClick={() => setLang(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};
