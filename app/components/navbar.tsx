import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-secondary/10 bg-primary/85 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Image
          src="/images/ad_logo.png"
          alt="AVEC Design Logo"
          width={180}
          height={40}
          className="h-auto w-24 brightness-0 invert md:w-36"
        />
        <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-light md:gap-7 md:text-[13px] md:tracking-[0.12em]">
          <Link href="#services" className="transition-colors hover:text-secondary-soft">
            Services
          </Link>
          <Link href="#work" className="transition-colors hover:text-secondary-soft">
            Work
          </Link>
          <Link
            href="#contact"
            className="rounded-lg border border-secondary/25 bg-secondary/8 px-3 py-1.5 text-secondary-soft transition hover:border-secondary/50 hover:bg-secondary/15 md:px-4 md:py-2"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
