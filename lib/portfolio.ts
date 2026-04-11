import portfolioItems from "@/content/portfolio-items.json";
import { getGitHubReposByNames } from "@/lib/github";

export type PortfolioType = "work" | "personal" | "experiment";

type PortfolioItemMeta = {
  id: string;
  title: string;
  summary: string;
  type: PortfolioType;
  featured: boolean;
  repoName?: string;
  stack?: string[];
  role?: string;
  liveUrl?: string;
};

export type PortfolioItem = PortfolioItemMeta & {
  repoUrl?: string;
  stars?: number;
  language?: string | null;
  lastUpdated?: string;
};

const metaItems = portfolioItems as PortfolioItemMeta[];

function normalizeRepoName(value: string): string {
  return value.trim().toLowerCase();
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const repoNames = metaItems
    .map((item) => item.repoName)
    .filter((repoName): repoName is string => typeof repoName === "string");

  const repos = await getGitHubReposByNames(repoNames);
  const repoMap = new Map(repos.map((repo) => [normalizeRepoName(repo.name), repo]));

  return metaItems.map((item) => {
    const repo = item.repoName ? repoMap.get(normalizeRepoName(item.repoName)) : undefined;

    return {
      ...item,
      repoUrl: repo?.htmlUrl,
      stars: repo?.stargazersCount,
      language: repo?.language,
      lastUpdated: repo?.updatedAt,
      summary: repo?.description || item.summary,
    };
  });
}
