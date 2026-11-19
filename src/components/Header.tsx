"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LangProvider";

/**
 * Thin and transparent over the hero, solid night with a hairline teal rule
 * after 24px of scroll.
 */
export default function Header() {
  const { copy, join, toggle } = useLang();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 transition-colors duration-200"
      style={{
        background: solid ? "var(--night)" : "transparent",
        borderBlockEnd: `1px solid ${solid ? "var(--rule)" : "transparent"}`,
      }}
    >
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-4 px-5 py-[14px] md:px-10">
        <a
          href="#top"
          aria-label={copy.header.home}
          className="display text-[1.375rem] leading-none"
        >
          chuzz<span style={{ color: "var(--teal)" }}>.</span>
        </a>

        <div className="flex items-center gap-[10px]">
          <button
            type="button"
            onClick={toggle}
            aria-label={copy.meta.toggleAria}
            className="rounded-full border px-3 py-[6px] text-[0.8125rem] font-semibold tracking-[0.04em]"
            style={{
              borderColor: "var(--card-border)",
              color: "var(--teal)",
              fontFamily: "var(--font-en)",
            }}
          >
            {copy.meta.toggleLabel}
          </button>

          <a className="btn-ghost hidden md:inline-block" href={join}>
            {copy.header.ghost}
          </a>
        </div>
      </div>
    </header>
  );
}
