import workflow from "@/content/workflow.json";

export default function WorkflowSection() {
  return (
    <section id="workflow" className="workflow-lab mx-auto max-w-6xl px-6 py-12 md:px-8">
      <div className="workflow-stage">
        <div className="workflow-trigger" tabIndex={0}>
          <div className="workflow-trigger-head">
            <div className="workflow-projector-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3.5 8.5h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Z" />
                <path d="M17.5 11.5h2.8a1.2 1.2 0 0 1 1.1 1.8l-1.1 2a1.2 1.2 0 0 1-1.1.6h-1.7" />
                <circle cx="7.8" cy="13" r="1.6" />
              </svg>
            </div>
            <h2 className="section-title workflow-trigger-title text-3xl font-bold text-foreground md:text-4xl">
              My Workflow
            </h2>
            <p className="workflow-trigger-caption text-xs uppercase tracking-[0.18em] text-cyan-300/85">
              Hover to project pipeline
            </p>
          </div>
          <div className="workflow-trigger-info">
            <p className="workflow-trigger-description text-sm text-[var(--muted)] md:text-base">
              I combine AI writing, design, scheduling, project operations, and reporting into one connected
              system so content moves from idea to published result without bottlenecks.
            </p>
          </div>
        </div>

        <div className="workflow-projection">
          <div className="workflow-projection-placeholder" aria-hidden="true">
            <span className="workflow-placeholder-dot workflow-placeholder-dot--one" />
            <span className="workflow-placeholder-dot workflow-placeholder-dot--two" />
            <span className="workflow-placeholder-dot workflow-placeholder-dot--three" />
            <span className="workflow-placeholder-line workflow-placeholder-line--one" />
            <span className="workflow-placeholder-line workflow-placeholder-line--two" />
            <span className="workflow-placeholder-line workflow-placeholder-line--three" />
          </div>
          <ul className="workflow-projection-grid">
            {workflow.map((step) => (
              <li key={step.name} className="workflow-projection-card">
                <p className="text-xs uppercase text-[var(--muted)]">{step.stage}</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{step.name}</h3>
                <p className="mt-2 text-sm text-foreground/80">{step.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
