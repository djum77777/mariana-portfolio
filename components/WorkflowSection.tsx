import workflow from "@/content/workflow.json";

export default function WorkflowSection() {
  return (
    <section id="workflow" className="mx-auto max-w-6xl px-6 py-12 md:px-8">
      <h2 className="section-title mb-6 text-3xl font-bold text-foreground md:text-4xl">
        My AI Workflow
      </h2>
      <ul className="grid gap-6 md:grid-cols-3">
        {workflow.map((step) => (
          <li key={step.name} className="glass-card rounded-xl p-5">
            <p className="text-xs uppercase text-[var(--muted)]">{step.stage}</p>
            <h3 className="mt-1 text-lg font-semibold text-foreground">{step.name}</h3>
            <p className="mt-2 text-sm text-foreground/80">{step.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}