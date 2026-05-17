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
          className="h-auto w-auto brightness-0 invert"
        />
        <div className="flex items-center gap-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-light/45">
          <Link href="#services" className="transition-colors hover:text-secondary-soft">
            Services
          </Link>
          <Link href="#work" className="transition-colors hover:text-secondary-soft">
            Work
          </Link>
          <Link
            href="#contact"
            className="rounded-lg border border-secondary/25 bg-secondary/8 px-4 py-2 text-secondary-soft transition hover:border-secondary/50 hover:bg-secondary/15"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
