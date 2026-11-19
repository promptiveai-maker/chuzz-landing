"use client";

import { WHATSAPP_GROUP_URL } from "@/lib/links";
import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/**
 * One wide band, teal at 8 percent over night. The only place in the body of
 * the page where WhatsApp appears, and deliberately quieter than the signup
 * button: outlined, not filled.
 */
export default function Community() {
  const { copy } = useLang();

  return (
    <Reveal
      as="div"
      className="w-full"
      style={{
        background: "rgba(0,164,163,.08)",
        borderBlock: "1px solid var(--rule)",
      }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-5 py-[44px] md:px-10 md:py-[68px]">
        <p className="display max-w-[30ch] text-[clamp(1.5rem,4.5vw,2.25rem)] leading-[1.1]">
          {copy.community.big}
        </p>
        <p className="mb-6 mt-[10px] max-w-[34ch]" style={{ color: "var(--cream-60)" }}>
          {copy.community.sub}
        </p>
        <a
          className="btn-outline"
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {copy.community.btn}
        </a>
      </div>
    </Reveal>
  );
}
