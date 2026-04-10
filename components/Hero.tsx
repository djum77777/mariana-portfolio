import { profile } from "@/content/profile";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-grid mx-auto flex max-w-6xl flex-col gap-8 overflow-hidden rounded-2xl px-6 pb-10 pt-16 md:px-8 md:pt-24"
    >
      <div aria-hidden="true" className="neon-orb neon-orb--one" />
      <div aria-hidden="true" className="neon-orb neon-orb--two" />
      <p className="relative z-10 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{profile.location}</p>
      <h1
        id="hero-heading"
        className="section-title relative z-10 max-w-4xl text-4xl font-semibold leading-tight text-foreground md:text-6xl"
      >
        {profile.tagline}
      </h1>
      <p className="relative z-10 max-w-3xl text-sm font-medium uppercase tracking-[0.15em] text-cyan-300/90">
        {profile.title}
      </p>
      <p className="relative z-10 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
        {profile.biography}
      </p>

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
          AI Strategy
        </span>
        <span className="rounded-full border border-foreground/25 px-3 py-1 text-xs text-foreground/80">
          Agentic AI Workflows
        </span>
        <span className="rounded-full border border-foreground/25 px-3 py-1 text-xs text-foreground/80">
          Automation and Analytics
        </span>
      </div>
    </section>
  );
}
