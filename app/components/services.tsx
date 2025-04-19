export default function Services() {
  return (
    <section id="services" className="container mx-auto px-6 py-20 bg-light">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2 text-secondary">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
