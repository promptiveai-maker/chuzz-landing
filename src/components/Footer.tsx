"use client";

import { WHATSAPP_GROUP_URL } from "@/lib/links";
import { useLang } from "./LangProvider";

/**
 * Quiet and small. No social icons, no newsletter, no address.
 * The bottom padding clears the sticky bar while that bar is live.
 */
export default function Footer({ stickyLive }: { stickyLive: boolean }) {
  const { copy } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderBlockStart: "1px solid var(--rule)" }}>
      <div
        className="mx-auto grid w-full max-w-[1120px] gap-[10px] px-5 pt-10 text-[0.9375rem] md:px-10"
        style={{
          color: "var(--cream-60)",
          paddingBottom: stickyLive
            ? "calc(96px + env(safe-area-inset-bottom, 0px))"
            : "40px",
        }}
      >
        <span className="display text-[1.125rem]" style={{ color: "var(--cream-60)" }}>
          chuzz<span style={{ color: "var(--teal)" }}>.</span>
        </span>

        <span>{copy.footer.line}</span>

        <span>
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--cream-60)" }}
          >
            {copy.footer.wa}
          </a>
        </span>

        <span>
          {year} {copy.footer.rights}
        </span>
      </div>
    </footer>
  );
}
