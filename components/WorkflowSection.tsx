import workflow from "@/content/workflow.json";

export default function WorkflowSection() {
  return (
    <section id="workflow" className="mx-auto max-w-6xl px-6 py-12 md:px-8">
      <h2 className="section-title mb-6 text-3xl font-bold text-foreground md:text-4xl">
        My AI Workflow
      </h2>
      <p className="mb-6 max-w-3xl text-sm text-[var(--muted)] md:text-base">
        I combine AI writing, design, scheduling, project operations, and reporting into one connected
        system so content moves from idea to published result without bottlenecks.
      </p>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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