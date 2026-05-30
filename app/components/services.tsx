import FadeUp from "./fadeUp";

const aiCapabilities = [
  "Custom agent development",
  "Multi-agent orchestration",
  "RAG & knowledge bases",
  "LLM fine-tuning & evaluation",
  "API & CRM integrations",
  "Monitoring & observability",
];

const services = [
  {
    title: "Website Management",
    desc: "Proactive monitoring, performance tuning, and security updates so your site stays fast and reliable.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Custom Design",
    desc: "Pixel-perfect branding, intuitive layouts, and interfaces that convert — from identity to production.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Custom Applications",
    desc: "Scalable web and mobile apps tailored to your workflows — built to grow with your business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven ads, SEO, and social campaigns that drive qualified traffic and measurable revenue.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 bg-[#080f1a] py-32 text-light">
      <div className="container mx-auto px-6">
        <FadeUp className="mb-14">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">
            What We Do
          </p>
          <h2 className="font-display font-light text-[2.5rem] text-light md:text-[4rem]">
            Full-Stack Digital Services
          </h2>
        </FadeUp>

        {/* Featured: Managed AI Services */}
        <FadeUp delay={0.1}>
          <div className="service-card relative mb-8 overflow-hidden rounded-2xl border border-secondary/12 bg-surface/30 p-10 md:p-14">
            <div className="flex flex-col gap-10 md:flex-row md:items-start">
              <div className="flex-1">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-secondary/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary-soft">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
                  Featured Service
                </span>
                <h3 className="mb-3 text-2xl font-bold text-light md:text-3xl">
                  Managed AI Services
                </h3>
                <p className="max-w-lg text-[15px] leading-relaxed text-light/55">
                  From scoping to deployment and ongoing operations, we build and
                  manage AI agents that automate your most time-consuming
                  workflows. No ML team required.
                </p>
                <a
                  href="#agents"
                  className="mt-7 inline-block rounded border border-secondary/30 px-6 py-2.5 text-[13px] font-semibold text-secondary-soft transition hover:border-secondary hover:bg-secondary/8"
                >
                  See Agent Examples
                </a>
              </div>
              <div className="flex-1">
                <ul className="grid grid-cols-2 gap-2">
                  {aiCapabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-center gap-2.5 rounded-lg border border-secondary/10 bg-surface/60 px-3 py-2.5 text-[13px] text-light/60"
                    >
                      <span className="text-secondary/70">◈</span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Other services */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <FadeUp key={service.title} delay={0.1 + i * 0.08}>
              <div className="service-card rounded-xl border border-secondary/8 bg-transparent p-8 hover:border-secondary/25">
                <div className="mb-4 text-secondary/80">{service.icon}</div>
                <h3 className="mb-2 text-[15px] font-semibold text-light/90">
                  {service.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-light/45">{service.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
