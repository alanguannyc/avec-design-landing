// components/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-primary text-light py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">AVEC Design</h1>
        <p className="mt-4 text-lg md:text-xl text-accent max-w-2xl mx-auto">
          Bespoke web management, custom apps, digital marketing & AI
          automations— all crafted with precision and style.
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 px-8 py-3 text-sm font-medium uppercase
                       bg-secondary text-primary rounded-lg hover:bg-accent transition"
        >
          Let’s Talk
        </a>
      </div>
    </section>
  );
}
