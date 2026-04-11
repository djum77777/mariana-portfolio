// components/GitHubProjects.tsx
import Link from "next/link";
import { getLatestGitHubRepos } from "@/lib/github";

const updatedFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export default async function GitHubProjects() {
  const projects = await getLatestGitHubRepos(5);

  return (
    <section id="projects" className="section-hud mx-auto max-w-6xl px-6 py-12 md:px-8">
      <div className="section-hud-head">
        <p className="section-hud-kicker">GitHub Feed</p>
        <h2 className="section-title text-3xl font-bold text-foreground md:text-4xl">
          Latest 5 Updated Repositories
        </h2>
        <p className="section-hud-subtitle">
          Automatically synced from your GitHub profile.
        </p>
      </div>
      {projects.length === 0 ? (
        <p className="mt-8 rounded-xl border border-cyan-300/20 bg-black/20 p-5 text-sm text-foreground/75">
          No repositories available yet. Confirm `GITHUB_USERNAME` and `GITHUB_TOKEN` in `.env.local`.
        </p>
      ) : (
        <ul className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((proj) => (
            <li key={proj.id} className="project-card glass-card h-full rounded-xl p-5">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-foreground">{proj.name}</h3>
                <span className="rounded-full border border-cyan-300/30 px-2 py-1 text-xs text-cyan-200">
                  {proj.stargazersCount} stars
                </span>
              </div>

              <p className="mb-4 line-clamp-3 min-h-[3.75rem] text-sm text-foreground/80">
                {proj.description || "No description yet."}
              </p>

              <div className="mb-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-cyan-300/30 px-2 py-1 text-cyan-200">
                  {proj.language ?? "Unknown language"}
                </span>
                <span className="rounded-full border border-cyan-300/20 px-2 py-1 text-foreground/70">
                  Updated {updatedFormatter.format(new Date(proj.updatedAt))}
                </span>
              </div>

              <Link
                href={proj.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-cyan-300 underline"
              >
                Open Repository
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
