// components/GitHubProjects.tsx
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default async function GitHubProjects() {
  const projects = await getAllProjects();

  return (
    <section id="projects" className="py-12 px-8 bg-background">
      <h2 className="text-3xl font-bold text-primary mb-6">Builds & Experiments</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div key={proj.slug} className="p-4 bg-[#0F0F0F] rounded-lg">
            <h3 className="text-xl font-semibold text-primary">{proj.name}</h3>
            <p classnane="text-sm text-textPrimary mb-2">{proj.description}</p>
            {proj.repo && (
              <Link href={proj.repo} target="_blank" className="text-primary underline">
                View Repo
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}