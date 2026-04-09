const workflow = [
  {
    name: "ChatGPT",
    stage: "Ideation and Writing",
    description: "Brainstorm hooks, build outlines, and draft content quickly.",
  },
  {
    name: "Gemini",
    stage: "Refinement",
    description: "Polish tone and structure for audience-specific messaging.",
  },
  {
    name: "Canva",
    stage: "Design and Production",
    description: "Create supporting visuals and final publishing assets.",
  },
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="bg-background px-8 py-12">
      <h2 className="mb-6 text-3xl font-bold text-foreground">My AI Workflow</h2>
      <ul className="grid gap-6 md:grid-cols-3">
        {workflow.map((step) => (
          <li key={step.name} className="rounded-lg border border-foreground/10 p-4">
            <p className="text-xs uppercase text-foreground/60">{step.stage}</p>
            <h3 className="mt-1 text-lg font-semibold text-foreground">{step.name}</h3>
            <p className="mt-2 text-sm text-foreground/80">{step.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}