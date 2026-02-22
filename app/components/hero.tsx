// components/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary via-surface to-surface-soft py-24 text-light">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-secondary-soft">
          Digital Systems, Designed to Perform
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          AVEC Design
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-light/85 md:text-xl">
          Bespoke web management, custom apps, digital marketing & AI
          automations, crafted with precision, clarity, and measurable impact.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-lg bg-gradient-to-r from-secondary-deep to-secondary px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-light shadow-[0_10px_24px_-14px_rgba(227,190,132,0.7)] transition hover:from-secondary hover:to-secondary-soft hover:text-primary"
        >
          Let’s Talk
        </a>
      </div>
    </section>
  );
}
