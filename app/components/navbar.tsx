import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-secondary/10 bg-primary/90 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Image
          src="/images/ad_logo.png"
          alt="AVEC Design Logo"
          width={180}
          height={40}
          className="h-auto w-24 brightness-0 invert md:w-32"
        />
        <div className="flex items-center gap-8 text-sm text-light/50">
          <Link href="#services" className="transition-colors hover:text-light">
            Services
          </Link>
          <Link href="#work" className="transition-colors hover:text-light">
            Work
          </Link>
          <Link
            href="#contact"
            className="rounded border border-secondary/30 px-4 py-1.5 text-sm text-secondary-soft transition hover:bg-secondary/10"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
