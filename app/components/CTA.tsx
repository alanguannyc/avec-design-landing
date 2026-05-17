export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-surface/40 py-24 text-light">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="section-rule mx-auto mb-0 max-w-4xl" />

      <div className="container relative mx-auto px-6 pt-0 text-center">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">
          Ready to Automate?
        </p>
        <h2 className="text-3xl font-bold text-light md:text-5xl">
          Deploy your first AI agent
          <br />
          <span className="text-secondary-soft">this month.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-light/45">
          We scope, build, and manage the entire system. You see results in
          weeks, not quarters.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-lg bg-secondary px-10 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-primary shadow-[0_8px_24px_-10px_rgba(192,138,66,0.5)] transition hover:bg-secondary-soft"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
