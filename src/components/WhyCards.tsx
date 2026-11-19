"use client";

import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/** Three two line statements. No icons, the type carries it. */
export default function WhyCards() {
  const { copy } = useLang();

  return (
    <Reveal className="rule-top py-[44px] md:py-[68px]">
      <div className="mx-auto w-full max-w-[1120px] px-5 md:px-10">
        {/* The brief gives this section no visible title. The heading is kept
            for screen readers so the page has no gap in its outline. */}
        <h2 className="sr-only">{copy.why.title}</h2>

        <div className="grid gap-[14px] md:grid-cols-3 md:gap-[18px]">
          {copy.why.cards.map((card) => (
            <div key={card.a} className="card px-6 py-[26px]">
              <p className="text-[1.125rem] font-extrabold leading-[1.3] tracking-[-0.015em]">
                {card.a}
              </p>
              <p className="mt-2 text-base" style={{ color: "var(--cream-60)" }}>
                {card.b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
