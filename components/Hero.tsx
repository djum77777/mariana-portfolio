import { profile } from "@/content/profile";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-10 pt-16 md:px-8 md:pt-24">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{profile.location}</p>
      <h1 className="section-title max-w-4xl text-4xl font-semibold leading-tight text-foreground md:text-6xl">
        {profile.tagline}
      </h1>
      <p className="max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
        {profile.biography}
      </p>

      <div className="grid gap-3 sm:grid-cols-3">
        {profile.highlights.map((item) => (
          <div key={item} className="glass-card rounded-xl p-4 text-sm text-foreground/90">
            {item}
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap gap-3">
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noreferrer"
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
    </section>
  );
}