"use client";

import Cta from "./Cta";

/**
 * From the moment the hero scrolls out of view, on screens narrower than
 * 768px, a fixed bar holding the primary button and nothing else.
 * Safe area insets respected on both the sides and the bottom.
 */
export default function StickyCta({ live }: { live: boolean }) {
  if (!live) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 block md:hidden"
      style={{
        background: "var(--night)",
        borderBlockStart: "1px solid var(--rule)",
        paddingTop: "12px",
        paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
        paddingInlineStart: "max(20px, env(safe-area-inset-left, 0px))",
        paddingInlineEnd: "max(20px, env(safe-area-inset-right, 0px))",
      }}
    >
      <div className="block text-center [&>a]:block">
        <Cta small />
      </div>
    </div>
  );
}
