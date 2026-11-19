"use client";

import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/** Three numbered steps. The number sits behind the step title. */
export default function HowItWorks() {
  const { copy } = useLang();

  return (
    <Reveal className="py-[44px] md:py-[68px]" delayStep={1}>
      <div className="mx-auto w-full max-w-[1120px] px-5 md:px-10">
        <h2 className="display h-section mb-7">{copy.how.title}</h2>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {copy.how.steps.map((step, i) => (
            <div key={step.a} className="relative min-w-0 pt-[34px]">
              <span
                className="step-number pointer-events-none absolute -top-[14px] z-0 select-none"
                style={{ insetInlineStart: "-6px" }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="relative z-10 mb-2 text-[1.1875rem] font-extrabold tracking-[-0.015em]">
                {step.a}
              </h3>
              <p
                className="relative z-10 max-w-[32ch] text-base"
                style={{ color: "var(--cream-60)" }}
              >
                {step.b}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-9 max-w-[38ch] text-[0.9375rem]"
          style={{ color: "var(--cream-60)" }}
        >
          {copy.how.note}
        </p>
      </div>
    </Reveal>
  );
}
