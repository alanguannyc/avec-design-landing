// components/CTA.tsx
export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-secondary-deep via-secondary to-[#d6a25f] py-16 text-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Ready to elevate your digital presence?
        </h2>
        <a
          href="#contact"
          className="mt-6 inline-block rounded-full bg-light px-10 py-4 uppercase tracking-[0.12em] text-primary transition hover:bg-primary hover:text-light"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
