"use client";

import Cta from "./Cta";
import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

export default function ClosingCta() {
  const { copy } = useLang();

  return (
    <Reveal className="rule-top">
      <div className="mx-auto w-full max-w-[1120px] px-5 py-[88px] text-center md:px-10 md:py-[136px]">
        <p
          className="display h-closing"
          dangerouslySetInnerHTML={{ __html: copy.closing.headline }}
        />
        <p className="mt-[34px]">
          <Cta />
        </p>
        <p className="mt-[14px] text-[0.9375rem]" style={{ color: "var(--cream-60)" }}>
          {copy.closing.fine}
        </p>
      </div>
    </Reveal>
  );
}
