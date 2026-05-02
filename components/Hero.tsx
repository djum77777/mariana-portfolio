"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { profile } from "@/content/profile";

export default function Hero() {
  const handlePortraitMove = (event: MouseEvent<HTMLDivElement>) => {
    const frame = event.currentTarget;
    const rect = frame.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 18;
    const rotateX = (0.5 - y) * 16;

    frame.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
    frame.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
    frame.style.setProperty("--pointer-x", `${(x * 100).toFixed(2)}%`);
    frame.style.setProperty("--pointer-y", `${(y * 100).toFixed(2)}%`);
    frame.style.setProperty("--glow-alpha", "1");
  };

  const handlePortraitLeave = (event: MouseEvent<HTMLDivElement>) => {
    const frame = event.currentTarget;
    frame.style.setProperty("--rotate-x", "0deg");
    frame.style.setProperty("--rotate-y", "0deg");
    frame.style.setProperty("--pointer-x", "50%");
    frame.style.setProperty("--pointer-y", "50%");
    frame.style.setProperty("--glow-alpha", "0");
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-grid mx-auto flex max-w-6xl flex-col gap-8 overflow-hidden rounded-2xl px-6 pb-10 pt-16 md:px-8 md:pt-24"
    >
      <div aria-hidden="true" className="neon-orb neon-orb--one" />
      <div aria-hidden="true" className="neon-orb neon-orb--two" />
      <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{profile.location}</p>
          <h1
            id="hero-heading"
            className="section-title max-w-4xl text-4xl font-semibold leading-tight text-foreground md:text-6xl"
          >
            {profile.tagline}
          </h1>
          <p className="max-w-3xl text-sm font-medium uppercase tracking-[0.15em] text-cyan-300/90">
            {profile.title}
          </p>
          <div className="hero-bio-panel max-w-3xl">
            <p className="hero-bio-summary text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Social media strategy, AI workflows, and reporting systems for fast-moving Web3 products.
            </p>
            <p className="hero-bio-detail mt-2 text-sm leading-relaxed text-foreground/80 md:text-base">
              {profile.biography}
            </p>
          </div>
        </div>

        <aside className="mx-auto w-full max-w-[320px] lg:mx-0 lg:justify-self-end">
          <div
            className="hero-portrait-frame"
            onMouseMove={handlePortraitMove}
            onMouseEnter={handlePortraitMove}
            onMouseLeave={handlePortraitLeave}
          >
            <div className="hero-portrait-bubble" role="status" aria-live="polite">
              <span className="hero-portrait-bubble-label">Welcome Aboard</span>
              <span className="hero-portrait-bubble-text">Hi, I am Mariana, a social media manager fluent in AI, Web3, and agentic systems.</span>
            </div>
            <div className="hero-portrait-media relative aspect-[4/5] overflow-visible rounded-xl">
              <div aria-hidden="true" className="hero-portrait-depth" />
              <div className="hero-portrait-face">
                <Image
                  src={profile.characterGraphic}
                  alt="Graphic portrait of Mariana"
                  fill
                  className="hero-portrait-image object-cover"
                  priority
                />
              </div>
              <div aria-hidden="true" className="hero-portrait-scanline" />
              <div aria-hidden="true" className="hero-portrait-glow" />
            </div>
          </div>
        </aside>
      </div>

      <div className="relative z-10 grid gap-3 sm:grid-cols-3">
        {profile.highlights.map((item) => (
          <div key={item} className="glass-card rounded-xl p-4 text-sm text-foreground/90">
            {item}
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-2 flex flex-wrap gap-3">
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 py-2 text-sm font-medium text-[#05070f] transition hover:opacity-90"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${profile.social.email}`}
          className="rounded-md border border-foreground/20 px-5 py-2 text-sm text-foreground transition hover:bg-white/5"
        >
          Email
        </a>
      </div>
      <div className="relative z-10 flex flex-wrap gap-2">
        <span className="rounded-full border border-foreground/25 px-3 py-1 text-xs text-foreground/80">
          hellominds.ai
        </span>
        <span className="rounded-full border border-foreground/25 px-3 py-1 text-xs text-foreground/80">
          TOWER
        </span>
        <span className="rounded-full border border-foreground/25 px-3 py-1 text-xs text-foreground/80">
          Social Analytics
        </span>
      </div>
    </section>
  );
}
