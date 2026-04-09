// app/page.tsx
import Hero from "@/components/Hero";
import WorkflowSection from "@/components/WorkflowSection";
import WorkList from "@/components/WorkList"; // a wrapper that maps posts to WorkCard components
import GitHubProjects from "@/components/GitHubProjects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="selected-work" className="py-12 px-8 bg-background">
        <h2 className="text-3xl font-bold text-primary mb-6">Selected Work</h2>
        <WorkList /> {/* This component would map over your posts and render WorkCard for each */}
      </section>
      <WorkflowSection />
      <GitHubProjects />
    </>
  );
}