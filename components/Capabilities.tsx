const capabilities = [
  { label: "AI + Agentic Systems", value: "Advanced", detail: "Prompting, agents, orchestration" },
  { label: "Workflow Automation", value: "End-to-End", detail: "From ideation to reporting loops" },
  { label: "Content Operations", value: "Multi-Platform", detail: "Channel-native publishing systems" },
  { label: "Execution Model", value: "Strategy + Delivery", detail: "Own planning and hands-on shipping" },
];

export default function Capabilities() {
  return (
    <section aria-labelledby="capabilities-heading" className="mx-auto max-w-6xl px-6 py-4 md:px-8">
      <h2 id="capabilities-heading" className="sr-only">
        Core capabilities
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item) => (
          <li key={item.label} className="capability-card glass-card rounded-xl p-4">
            <p className="capability-card-value text-lg font-semibold text-foreground">{item.value}</p>
            <p className="capability-card-label mt-1 text-xs uppercase text-[var(--muted)]">{item.label}</p>
            <p className="capability-card-detail mt-2 text-xs text-cyan-200/90">{item.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
