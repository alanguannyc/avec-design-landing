export default function Services() {
  return (
    <section id="services" className="container mx-auto px-6 py-20">
      <div className="section-shell bg-light/70 p-8 md:p-12">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary">
          Our Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Website Management",
            desc: "Keep your site secure, updated, and optimized with proactive monitoring and performance tuning.",
          },
          {
            title: "Custom Design",
            desc: "Stand out with pixel-perfect branding, intuitive layouts, and engaging user experiences.",
          },
          {
            title: "Custom Applications",
            desc: "Build scalable web and mobile apps tailored to your unique business needs.",
          },
          {
            title: "Digital Marketing",
            desc: "Drive traffic, engagement, and revenue with targeted ads, SEO, and social campaigns.",
          },
          {
            title: "AI Automations",
            desc: "Automate repetitive tasks and unlock data-driven insights with custom AI workflows.",
          },
        ].map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-muted/25 bg-white/80 p-6 transition hover:-translate-y-0.5 hover:border-secondary-soft/80"
          >
            <h3 className="mb-2 text-xl font-semibold text-surface">
              {service.title}
            </h3>
            <p className="text-primary/75">{service.desc}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
