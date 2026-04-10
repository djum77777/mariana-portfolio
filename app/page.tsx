// app/page.tsx
import Hero from "@/components/Hero";
import WorkflowSection from "@/components/WorkflowSection";
import WorkList from "@/components/WorkList";
import GitHubProjects from "@/components/GitHubProjects";
import Capabilities from "@/components/Capabilities";

export default function HomePage() {
  return (
    <main id="main-content" className="page-shell pb-12">
      <Hero />
      <Capabilities />
      <section id="selected-work" className="mx-auto max-w-6xl px-6 py-12 md:px-8">
        <h2 className="section-title mb-6 text-3xl font-bold text-foreground md:text-4xl">
          Selected Work
        </h2>
        <WorkList />
      </section>
      <WorkflowSection />
      <GitHubProjects />
    </main>
  );
}
