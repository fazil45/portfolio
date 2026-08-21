"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const projectDivRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: projectDivRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, projectDivRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={projectDivRef}
      className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2"
    >
      {children}
    </div>
  );
}
