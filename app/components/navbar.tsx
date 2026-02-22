import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-muted/25 bg-light/90 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Image
          src="/images/ad_logo.png"
          alt="AVEC Design Logo"
          width={180}
          height={40}
          className="h-auto w-auto"
        />
        <div className="space-x-6 text-sm font-medium uppercase tracking-[0.12em] text-surface">
          <Link
            href="#services"
            className="transition-colors hover:text-accent"
          >
            Services
          </Link>
          <Link href="#work" className="transition-colors hover:text-accent">
            Work
          </Link>
          <Link href="#contact" className="transition-colors hover:text-accent">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
