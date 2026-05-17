const agents = [
  {
    name: "Customer Support Agent",
    tag: "Support",
    desc: "Resolves tickets, answers FAQs, escalates edge cases, and syncs conversations back to your CRM — all without human intervention.",
    stats: [
      { val: "~3s", label: "Response time" },
      { val: "82%", label: "Auto-resolved" },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    name: "Data Pipeline Agent",
    tag: "Automation",
    desc: "Fetches data from APIs, transforms and validates it, then routes it to your warehouse, dashboards, or downstream services on a schedule.",
    stats: [
      { val: "100k+", label: "Rows/hour" },
      { val: "0", label: "Manual steps" },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    name: "Voice Call Agent",
    tag: "Outreach",
    desc: "Makes and receives calls using natural-language understanding — schedules appointments, qualifies leads, and logs outcomes automatically.",
    stats: [
      { val: "24/7", label: "Availability" },
      { val: "60%", label: "Cost vs. rep" },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.61 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.09 4.18 2 2 0 0 1 5.09 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    name: "Research & Report Agent",
    tag: "Intelligence",
    desc: "Crawls sources, synthesizes findings, and delivers structured reports — competitive analysis, market research, or internal audits on demand.",
    stats: [
      { val: "Hours", label: "Saved per run" },
      { val: "Multi", label: "Source fusion" },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
];

export default function AgentSection() {
  return (
    <section id="agents" className="relative overflow-hidden py-24 text-light">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary/25 to-transparent" />

      <div className="container relative mx-auto px-6">
        <div className="mb-14">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">
            Managed AI Services
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-bold text-light md:text-4xl">
              AI Agents Built for Your Business
            </h2>
            <p className="max-w-sm text-[14px] leading-relaxed text-light/45 md:text-right">
              Custom-built, trained on your data, and operated by our team.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="agent-card rounded-2xl border border-secondary/12 bg-surface/50 p-7"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="rounded-lg border border-secondary/20 bg-secondary/8 p-2.5 text-secondary-soft">
                  {agent.icon}
                </div>
                <span className="rounded-full border border-light/8 bg-primary/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-light/35">
                  {agent.tag}
                </span>
              </div>
              <h3 className="mb-2 text-[18px] font-bold text-light">{agent.name}</h3>
              <p className="text-[13px] leading-relaxed text-light/50">{agent.desc}</p>
              <div className="mt-6 flex gap-8 border-t border-secondary/8 pt-5">
                {agent.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-xl font-bold text-secondary-soft">{s.val}</div>
                    <div className="mt-0.5 text-[11px] uppercase tracking-wider text-light/35">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center">
          <p className="text-[13px] text-light/40">
            Not sure which agent fits your workflow?
          </p>
          <a
            href="#contact"
            className="text-[13px] font-semibold text-secondary-soft underline-offset-4 hover:underline"
          >
            Let's scope it together →
          </a>
        </div>
      </div>
    </section>
  );
}
