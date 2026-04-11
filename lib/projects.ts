export type Project = {
  slug: string;
  name: string;
  description: string;
  repo?: string;
};

const projects: Project[] = [
  {
    slug: "ai-agent-demo",
    name: "AI Agent Demo",
    description: "A practical demo for orchestrating multi-step AI workflows.",
    repo: "https://github.com",
  },
  {
    slug: "content-ops-playbook",
    name: "Content Ops Playbook",
    description: "A repeatable framework for AI-native content production.",
  },
];

export function getAllProjects(): Project[] {
  return projects;
}
