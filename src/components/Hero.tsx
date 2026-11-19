"use client";

import Cta from "./Cta";
import { useLang } from "./LangProvider";

/**
 * One round table with five seats around it, teal strokes on night, one seat
 * in amber. No faces, no photograph.
 */
function TableIllustration({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      role="img"
      aria-label={label}
      fill="none"
      className="mx-auto block h-auto w-full max-w-[380px]"
    >
      <circle cx="160" cy="160" r="74" stroke="#00a4a3" strokeWidth="2" />
      <circle cx="160" cy="160" r="60" stroke="rgba(0,164,163,.35)" strokeWidth="1" />
      <circle cx="160" cy="54" r="22" stroke="#f0a84a" strokeWidth="2" />
      <circle cx="261" cy="123" r="22" stroke="#00a4a3" strokeWidth="2" />
      <circle cx="222" cy="252" r="22" stroke="#00a4a3" strokeWidth="2" />
      <circle cx="98" cy="252" r="22" stroke="#00a4a3" strokeWidth="2" />
      <circle cx="59" cy="123" r="22" stroke="#00a4a3" strokeWidth="2" />
      <path
        d="M160 76v10M243 136l-9 6M209 231l-6-9M111 231l6-9M77 136l9 6"
        stroke="rgba(0,164,163,.5)"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Hero() {
  const { copy } = useLang();

  return (
    <section id="hero" className="relative pb-[44px] pt-[46px] md:pb-[68px]">
      <div className="hero-glow" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1120px] gap-11 px-5 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
        <div className="min-w-0">
          <p className="kicker mb-5">{copy.hero.kicker}</p>

          <h1
            className="display h-hero"
            dangerouslySetInnerHTML={{ __html: copy.hero.headline }}
          />

          <p className="mt-6 max-w-[34ch]">{copy.hero.sub}</p>

          <p className="mt-[34px]">
            <Cta />
          </p>

          <p
            className="mt-[14px] max-w-[36ch] text-[0.9375rem]"
            style={{ color: "var(--cream-60)" }}
          >
            {copy.hero.fine}
          </p>
        </div>

        <div className="min-w-0">
          <TableIllustration label={copy.hero.tableAlt} />
        </div>
      </div>
    </section>
  );
}
