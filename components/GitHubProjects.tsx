// components/GitHubProjects.tsx
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default async function GitHubProjects() {
  const projects = await getAllProjects();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-12 md:px-8">
      <h2 className="section-title mb-6 text-3xl font-bold text-foreground md:text-4xl">
        Builds and Experiments
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj) => (
          <div key={proj.slug} className="glass-card rounded-xl p-5">
            <h3 className="text-xl font-semibold text-foreground">{proj.name}</h3>
            <p className="mb-2 mt-2 text-sm text-foreground/80">{proj.description}</p>
            {proj.repo && (
              <Link href={proj.repo} target="_blank" className="text-sm text-cyan-300 underline">
                View Repo
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}