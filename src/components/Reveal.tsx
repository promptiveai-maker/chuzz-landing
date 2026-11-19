"use client";

import { useEffect, useRef } from "react";

/**
 * Quiet scroll reveal: 16px up over 500ms, once only, never again on the way
 * back. Turned off entirely under prefers-reduced-motion, in CSS.
 */
export default function Reveal({
  children,
  delayStep = 0,
  className = "",
  as: Tag = "section",
  ...rest
}: {
  children: React.ReactNode;
  delayStep?: number;
  className?: string;
  as?: "section" | "div";
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          window.setTimeout(
            () => entry.target.classList.add("is-in"),
            delayStep * 60,
          );
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayStep]);

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement & HTMLDivElement>}
      className={`reveal ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
