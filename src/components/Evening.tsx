"use client";

import Image from "next/image";
import tablePhoto from "../../public/images/table.webp";
import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/**
 * A short list on one side, the photograph on the other.
 * Asset slot 1: table of five people talking, warm light.
 */
export default function Evening() {
  const { copy } = useLang();

  return (
    <Reveal className="rule-top py-[44px] md:py-[68px]">
      <div className="mx-auto w-full max-w-[1120px] px-5 md:px-10">
        <h2 className="display h-section mb-7">{copy.evening.title}</h2>

        <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-12">
          <ul className="dash-list grid list-none gap-[18px] p-0">
            {copy.evening.list.map((line) => (
              <li key={line} className="max-w-[38ch] text-[1.0625rem]">
                {line}
              </li>
            ))}
          </ul>

          <div className="min-w-0">
            <Image
              src={tablePhoto}
              alt={copy.evening.photoAlt}
              sizes="(min-width: 1024px) 520px, 100vw"
              placeholder="empty"
              className="h-auto w-full max-w-full rounded-2xl"
              style={{ border: "1px solid var(--card-border)" }}
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
