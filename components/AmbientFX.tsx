"use client";

import { useEffect } from "react";

export default function AmbientFX() {
  useEffect(() => {
    const root = document.documentElement;

    const onMove = (event: MouseEvent) => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
      root.style.setProperty("--cursor-active", "1");
    };

    const onLeave = () => {
      root.style.setProperty("--cursor-active", "0");
    };

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      root.style.setProperty("--scroll-progress", `${progress.toFixed(2)}%`);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="ambient-cursor-glow" />
      <div aria-hidden="true" className="ambient-progress-rail">
        <span className="ambient-progress-fill" />
      </div>
    </>
  );
}
