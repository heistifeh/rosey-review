"use client";

import * as React from "react";
import { useInView } from "@/lib/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/lib/hooks/use-reduced-motion";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>();

  const style: React.CSSProperties = reduced
    ? {}
    : {
        transitionProperty: "opacity, transform, filter",
        transitionDuration: "650ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(14px)",
        filter: inView ? "blur(0px)" : "blur(2px)",
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
