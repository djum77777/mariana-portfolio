import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default async function GitHubProjects() {
  const projects = await getAllProjects();

  return (
    <section id="projects" className="px-8 py-12 bg-background">
      <h2 className="mb-6 text-3xl font-bold text-foreground">Builds and Experiments</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="rounded-lg border border-foreground/10 p-4">
            <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
            <p className="mt-2 text-sm text-foreground/80">{project.description}</p>
            {project.repo && (
              <Link
                href={project.repo}
                target="_blank"
                className="mt-3 inline-block text-sm underline"
              >
                View repo
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
