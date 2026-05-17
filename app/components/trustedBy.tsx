const brands = [
  {
    name: "Hotel Association of New York City",
    logo: "https://hanyc.org/wp-content/uploads/2018/09/01_PMS_Logo_HANYC.png",
  },
  {
    name: "Alliance Computing Solutions",
    logo: "https://www.acs.edu/wp-content/uploads/2024/08/logo.png",
  },
  {
    name: "Cambridge Business Institute",
    logo: "https://cambridge-edu.com/wp-content/uploads/2020/08/header-logo.png",
  },
  {
    name: "Long Island Business Institute",
    logo: "/images/libi-logo.png",
  },
];

function LogoChip({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex min-w-[220px] items-center justify-center rounded-lg border border-secondary/10 bg-surface/60 px-6 py-3">
      <img
        src={logo}
        alt={name}
        className="h-8 w-auto object-contain opacity-50 brightness-0 invert filter"
      />
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="py-16">
      <div className="container mx-auto px-6">
        <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-light/30">
          Trusted By
        </p>
        <div className="overflow-hidden">
          <div className="logo-marquee-track flex w-max gap-3">
            {[...brands, ...brands].map((brand, i) => (
              <LogoChip key={`${brand.name}-${i}`} name={brand.name} logo={brand.logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
