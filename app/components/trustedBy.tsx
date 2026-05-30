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
    <div className="flex min-w-[220px] items-center justify-center px-8 py-4">
      <img
        src={logo}
        alt={name}
        className="h-8 w-auto object-contain opacity-35 brightness-0 invert filter transition-opacity hover:opacity-60"
      />
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="relative z-10 border-t border-secondary/8 bg-[#060c16] py-14">
      <div className="overflow-hidden">
        <div className="logo-marquee-track flex w-max gap-0">
          {[...brands, ...brands].map((brand, i) => (
            <LogoChip key={`${brand.name}-${i}`} name={brand.name} logo={brand.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
