const capabilities = [
  { label: "Current Role", value: "Animoca Brands", detail: "Hellominds.ai and TOWER social channels" },
  { label: "Ownership", value: "End-to-End", detail: "Ideas, planning, scheduling, publishing, reporting" },
  { label: "Content Systems", value: "AI-Native", detail: "Agentic workflows and feedback loops" },
  { label: "Audience", value: "Web3 + Gaming", detail: "Channel-native stories for technical communities" },
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
