export type GitHubRepo = {
  id: number;
  name: string;
  htmlUrl: string;
  description: string;
  stargazersCount: number;
  language: string | null;
  updatedAt: string;
};

type GitHubApiRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  fork?: boolean;
};

function toGitHubRepo(repo: GitHubApiRepo): GitHubRepo {
  return {
    id: repo.id,
    name: repo.name,
    htmlUrl: repo.html_url,
    description: repo.description ?? "",
    stargazersCount: repo.stargazers_count,
    language: repo.language,
    updatedAt: repo.updated_at,
  };
}

function getGitHubHeaders(token?: string): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };

  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

export async function getLatestGitHubRepos(limit: number = 5): Promise<GitHubRepo[]> {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username) return [];

  const headers = getGitHubHeaders(token);
  const cappedLimit = Math.min(Math.max(limit, 1), 20);

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=${cappedLimit}&type=owner`,
    {
      headers,
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) return [];

  const repos = (await response.json()) as GitHubApiRepo[];
  return repos.filter((repo) => !repo.fork).slice(0, cappedLimit).map(toGitHubRepo);
}

export async function getGitHubReposByNames(repoNames: string[]): Promise<GitHubRepo[]> {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const uniqueNames = Array.from(
    new Set(repoNames.map((name) => name.trim()).filter((name) => name.length > 0)),
  );

  if (!username || uniqueNames.length === 0) return [];

  const headers = getGitHubHeaders(token);

  const responses = await Promise.all(
    uniqueNames.map(async (repoName) => {
      const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
        headers,
        next: { revalidate: 604800 },
      });

      if (!response.ok) return null;

      const repo = (await response.json()) as GitHubApiRepo;
      return toGitHubRepo(repo);
    }),
  );

  return responses.filter((repo): repo is GitHubRepo => repo !== null);
}
