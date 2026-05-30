export default function CTA() {
  return (
    <section className="relative z-10 bg-[#060c16] py-32 text-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display font-light leading-tight text-[3rem] text-light md:text-[5.5rem]">
          Ready to build<br />your first AI agent?
        </h2>
        <p className="mx-auto mt-5 max-w-sm text-[15px] leading-relaxed text-light/40">
          We scope, build, and manage the entire system. Results in weeks, not quarters.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded bg-secondary px-10 py-3.5 text-sm font-semibold text-primary transition hover:bg-secondary-soft active:scale-[0.98]"
        >
          Start a Project
        </a>
      </div>
    </section>
  );
}
