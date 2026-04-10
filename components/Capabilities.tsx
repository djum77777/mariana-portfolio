const capabilities = [
  { label: "AI and Agentic AI", value: "Advanced" },
  { label: "Workflow Automation", value: "End-to-End" },
  { label: "Social Content Ops", value: "Multi-Platform" },
  { label: "Execution Model", value: "Strategy + Delivery" },
];

export default function Capabilities() {
  return (
    <section aria-labelledby="capabilities-heading" className="mx-auto max-w-6xl px-6 py-4 md:px-8">
      <h2 id="capabilities-heading" className="sr-only">
        Core capabilities
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item) => (
          <li key={item.label} className="glass-card rounded-xl p-4">
            <p className="text-xs uppercase text-[var(--muted)]">{item.label}</p>
            <p className="mt-1 text-lg font-semibold text-foreground">{item.value}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
