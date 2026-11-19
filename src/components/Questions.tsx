"use client";

import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/**
 * Native details and summary, so the accordion works with no JavaScript.
 * The first question is open by default.
 */
export default function Questions() {
  const { copy, lang } = useLang();

  return (
    <Reveal className="py-[44px] md:py-[68px]">
      <div className="mx-auto w-full max-w-[1120px] px-5 md:px-10">
        <h2 className="display h-section mb-7">{copy.faq.title}</h2>

        <div className="max-w-[720px]">
          {copy.faq.items.map((item, i) => (
            // The key carries the language so the open state resets cleanly
            // when the whole page swaps.
            <details key={`${lang}-${item.q}`} open={i === 0}>
              <summary>
                <span className="plus" aria-hidden="true" />
                <span>{item.q}</span>
              </summary>
              <p
                className="m-0 max-w-[48ch] pb-[22px]"
                style={{ color: "var(--cream-60)", paddingInline: "28px 0" }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
