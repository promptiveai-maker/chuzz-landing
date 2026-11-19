"use client";

import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/** Four short chips, wrapped, then one quiet line. */
export default function WhoFor() {
  const { copy } = useLang();

  return (
    <Reveal className="py-[44px] md:py-[68px]" delayStep={1}>
      <div className="mx-auto w-full max-w-[1120px] px-5 md:px-10">
        <h2 className="display h-section mb-7">{copy.who.title}</h2>

        <ul className="flex list-none flex-wrap gap-[10px] p-0">
          {copy.who.chips.map((chip) => (
            <li className="chip" key={chip}>
              {chip}
            </li>
          ))}
        </ul>

        <p
          className="mt-6 max-w-[44ch] text-[0.9375rem]"
          style={{ color: "var(--cream-60)" }}
        >
          {copy.who.note}
        </p>
      </div>
    </Reveal>
  );
}
