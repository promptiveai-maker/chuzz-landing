"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  COPY,
  DEFAULT_LANG,
  LANG_STORAGE_KEY,
  type Copy,
  type Lang,
} from "@/lib/copy";
import { joinUrl } from "@/lib/links";

type LangContextValue = {
  lang: Lang;
  copy: Copy;
  join: string;
  toggle: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function useLang(): LangContextValue {
  const value = useContext(LangContext);
  if (!value) throw new Error("useLang must be used inside LangProvider");
  return value;
}

export default function LangProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Hebrew ships. The browser language is deliberately not consulted.
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);
  const [slug, setSlug] = useState("");

  // Read the stored choice and the ?m= slug once, on mount.
  useEffect(() => {
    document.documentElement.classList.add("js");

    try {
      const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
      if (stored === "he" || stored === "en") setLang(stored);
    } catch {
      // Private mode or blocked storage. Hebrew stays.
    }

    const m = new URLSearchParams(window.location.search).get("m");
    if (m) setSlug(m);
  }, []);

  // Keep the document in step with the chosen language.
  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === "he" ? "rtl" : "ltr";
    // The document title and description follow the active language too.
    document.title = COPY[lang].meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", COPY[lang].meta.description);
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((current) => {
      const next: Lang = current === "he" ? "en" : "he";
      try {
        window.localStorage.setItem(LANG_STORAGE_KEY, next);
      } catch {
        // Nothing to do, the choice simply does not persist.
      }
      return next;
    });
  }, []);

  const value = useMemo<LangContextValue>(
    () => ({ lang, copy: COPY[lang], join: joinUrl(slug), toggle }),
    [lang, slug, toggle],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
