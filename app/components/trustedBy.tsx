import Image from "next/image";

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
    <div className="flex min-w-[250px] items-center justify-center rounded-xl border border-secondary-soft/35 bg-white/70 px-6 py-2 backdrop-blur-sm">
      <img src={logo} alt={name} className="object-contain w-40" />
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="py-10 md:py-12" aria-label="Trusted by">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary">
          Trusted By
        </h2>
        <div className="section-shell overflow-hidden bg-light/75 p-4 md:p-5">
          <div className="logo-marquee-track flex w-max gap-4">
            {[...brands, ...brands].map((brand, i) => (
              <LogoChip
                key={`${brand.name}-${i}`}
                name={brand.name}
                logo={brand.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
