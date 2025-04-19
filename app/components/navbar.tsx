import Link from "next/link";
export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          AVEC Design
        </Link>
        <div className="space-x-6">
          <Link href="#services" className="hover:text-indigo-600">
            Services
          </Link>
          <Link href="#work" className="hover:text-indigo-600">
            Work
          </Link>
          <Link href="#contact" className="hover:text-indigo-600">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
