// app/page.tsx
import Hero from "@/components/Hero";
import WorkflowSection from "@/components/WorkflowSection";
import WorkList from "@/components/WorkList";
import GitHubProjects from "@/components/GitHubProjects";
import Capabilities from "@/components/Capabilities";
import SignalDock from "@/components/SignalDock";
import AmbientFX from "@/components/AmbientFX";

export default function HomePage() {
  return (
    <main id="main-content" className="page-shell pb-12">
      <AmbientFX />
      <Hero />
      <SignalDock />
      <Capabilities />
      <section id="selected-work" className="section-hud mx-auto max-w-6xl px-6 py-12 md:px-8">
        <div className="section-hud-head">
          <p className="section-hud-kicker">Live Signals</p>
          <h2 className="section-title text-3xl font-bold text-foreground md:text-4xl">Selected Work</h2>
          <p className="section-hud-subtitle">
            Short interface now, deeper context appears while exploring each card.
          </p>
        </div>
        <WorkList />
      </section>
      <WorkflowSection />
      <GitHubProjects />
    </main>
  );
}
