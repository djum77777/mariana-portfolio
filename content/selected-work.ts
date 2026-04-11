export type SelectedWorkItem = {
  title: string;
  platform: "linkedin" | "x" | "medium";
  views?: number;
  role: string;
  link: string;
};

export const selectedWork: SelectedWorkItem[] = [
  {
    title: "From Chaos to System: Fixing My AI Team",
    platform: "linkedin",
    views: 1700,
    role: "Content strategy and AI workflow design",
    link: "https://www.linkedin.com/posts/marianadjum_two-weeks-ago-i-built-my-first-team-of-ai-ugcPost-7443966088343805952-NTnU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADytylQBzVRKxK5SyqmsUyTfyRmJEKU36Yg",
  },
  {
    title: "Laguna x TOWER partnership",
    platform: "x",
    views: 2500,
    role: "Partnership and community building",
    link: "https://x.com/Djum_0707/status/1959919317761531923?s=20",
  },
];
