const navItems = [
  { label: "Work", href: "#selected-work", detail: "Proof and outcomes" },
  { label: "Workflow", href: "#workflow", detail: "System projection" },
  { label: "Builds", href: "#projects", detail: "GitHub + experiments" },
];

export default function SignalDock() {
  return (
    <div className="signal-dock-wrap">
      <nav aria-label="Section navigation" className="signal-dock">
        <p className="signal-dock-title">Explore Mode</p>
        <ul className="signal-dock-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="signal-node">
                <span className="signal-node-dot" aria-hidden="true" />
                <span className="signal-node-label">{item.label}</span>
                <span className="signal-node-detail">{item.detail}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
