export default function Hero() {
  return (
    <section className="bg-background px-8 py-16">
      <p className="text-sm uppercase tracking-wide text-foreground/70">Kuala Lumpur, Malaysia</p>
      <h1 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">Mariana Djum</h1>
      <p className="mt-2 text-lg text-foreground/80">
        AI-native Content Strategist and Social Media Creator
      </p>
      <p className="mt-4 max-w-3xl text-foreground/80">
        I design practical AI workflows that turn ideas into consistent, publish-ready content.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://www.linkedin.com/in/marianadjum"
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-foreground/20 px-4 py-2 text-sm hover:bg-foreground/10"
        >
          LinkedIn
        </a>
        <a
          href="mailto:mariana.djum@gmail.com"
          className="rounded-md border border-foreground/20 px-4 py-2 text-sm hover:bg-foreground/10"
        >
          Email
        </a>
      </div>
    </section>
  );
}