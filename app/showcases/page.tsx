import type { Metadata } from "next";
import Link from "next/link";
import { showcaseCards } from "./siteData";
import ShowcaseGallery from "./ShowcaseGallery";

export const metadata: Metadata = {
  title: "Selected Work | AVEC Design",
  description:
    "Explore selected work from AVEC Design and filter the collection by service type.",
};

export default function ShowcasesPage() {
  return (
    <main className="min-h-[100dvh] bg-[#07101b] text-light">
      <header className="border-b border-secondary/12 bg-[#07101b]/90 backdrop-blur-md">
        <nav className="container mx-auto flex items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="font-display text-2xl font-light text-light transition-colors hover:text-secondary-soft"
          >
            AVEC Design
          </Link>
          <Link
            href="/#contact"
            className="touch-manipulation rounded border border-secondary/30 px-4 py-2 text-sm font-semibold text-secondary-soft transition-colors hover:bg-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            Contact
          </Link>
        </nav>
      </header>

      <section className="container mx-auto px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <h1 className="max-w-4xl font-display text-[3.8rem] font-light leading-[0.92] text-light md:text-[7rem]">
          Work with a clear
          <br />
          <em className="inline-block pb-1 leading-[1.1] text-secondary-soft">
            point of view.
          </em>
        </h1>
        <p className="mt-7 max-w-xl text-[15px] leading-7 text-light/55">
          Selected concepts shaped around the audience, the operation, and the
          next useful action.
        </p>
      </section>

      <ShowcaseGallery showcases={showcaseCards} />
    </main>
  );
}
