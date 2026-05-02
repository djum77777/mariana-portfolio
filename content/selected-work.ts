export type SelectedWorkItem = {
  title: string;
  platform: "linkedin" | "x" | "medium";
  views?: number;
  eyebrow?: string;
  role: string;
  summary: string;
  link: string;
  featured?: boolean;
};

export const selectedWork: SelectedWorkItem[] = [
  {
    title: "I Tried to Hack My Own AI. It Paused to Audit Itself First.",
    platform: "linkedin",
    eyebrow: "Latest Article",
    role: "AI safety storytelling and agentic workflow reflection",
    summary:
      "A sharp, personal article about testing an AI system, watching it interrupt the attack path, and turning that moment into a clearer audit mindset.",
    link: "https://www.linkedin.com/pulse/i-tried-hack-my-own-ai-paused-audit-itself-first-mariana-djum-flhec",
    featured: true,
  },
  {
    title: "From Chaos to System: Fixing My AI Team",
    platform: "linkedin",
    views: 1700,
    eyebrow: "AI Workflow Post",
    role: "Content strategy and AI workflow design",
    summary:
      "A practical breakdown of turning a messy AI content setup into a clearer operating system for ideation, creation, and iteration.",
    link: "https://www.linkedin.com/posts/marianadjum_two-weeks-ago-i-built-my-first-team-of-ai-ugcPost-7443966088343805952-NTnU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADytylQBzVRKxK5SyqmsUyTfyRmJEKU36Yg",
  },
  {
    title: "Laguna x TOWER partnership",
    platform: "x",
    views: 2500,
    eyebrow: "Web3 Gaming",
    role: "Partnership and community building",
    summary:
      "Channel-native coverage connecting TOWER's gaming community with a partnership moment designed for reach, clarity, and momentum.",
    link: "https://x.com/Djum_0707/status/1959919317761531923?s=20",
  },
];
