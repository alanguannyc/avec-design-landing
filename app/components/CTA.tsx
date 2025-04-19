// components/CTA.tsx
export default function CTA() {
  return (
    <section className="bg-secondary text-primary py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold">
          Ready to elevate your digital presence?
        </h2>
        <a
          href="#contact"
          className="mt-6 inline-block px-10 py-4 bg-primary text-light rounded-full
                       hover:bg-accent transition uppercase tracking-wide"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
