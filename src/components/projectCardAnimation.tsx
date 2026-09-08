"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MIN_SCALE = 0.85;
const MAX_SCALE = 1.1;
const MIN_OPACITY = 0.5;

export default function ProjectAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      if (!cards.length) return;

      const updateScales = () => {
        const viewportCenter = window.innerHeight / 2;

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const distance = Math.abs(viewportCenter - cardCenter);

          // Normalize distance against half the viewport height,
          // so a card exactly centered = 0, a card off-screen ~ 1+
          const normalized = Math.min(distance / viewportCenter, 1);

          const scale = gsap.utils.mapRange(
            0,
            1,
            MAX_SCALE,
            MIN_SCALE,
            normalized,
          );
          const opacity = gsap.utils.mapRange(0, 1, 1, MIN_OPACITY, normalized);

          gsap.to(card, {
            scale,
            opacity,
            duration: 0.3,
            ease: "power1.out",
            overwrite: "auto",
          });
        });
      };

      updateScales();

      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: updateScales,
        onRefresh: updateScales,
      });

      // Keep it in sync on resize too
      window.addEventListener("resize", updateScales);

      return () => {
        st.kill();
        window.removeEventListener("resize", updateScales);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto flex max-w-2xl flex-col gap-8 lg:gap-12 py-12 lg:py-4"
    >
      {children}
    </div>
  );
}
