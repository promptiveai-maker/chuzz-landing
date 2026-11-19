"use client";

import { useLang } from "./LangProvider";

/**
 * The signup button. It is the only forest green element on the page, so it
 * reads as the one thing to click. Opens in the same tab, and carries the
 * ?m= slug through when the page URL has one.
 */
export default function Cta({ small = false }: { small?: boolean }) {
  const { copy, join } = useLang();
  return (
    <a className={small ? "btn-cta btn-cta--sm" : "btn-cta"} href={join}>
      {copy.cta.label}
    </a>
  );
}
