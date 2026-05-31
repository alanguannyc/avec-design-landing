"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { WebsiteDemo } from "../siteData";

gsap.registerPlugin(ScrollTrigger);

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e57a5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e2938]";

const manifesto =
  "The best journeys leave space for a place to become more than a list of things you saw.";

const destinations = [
  {
    title: "Follow the coast",
    body: "Drive the headlands, stop when the water pulls you in, and let the afternoon stay open.",
    image: "/images/websites/northline-coastal-drive.png",
    alt: "A quiet coastal road curving above a rocky Mediterranean cove",
  },
  {
    title: "Stay for the table",
    body: "A market morning, a vineyard lunch, and a small restaurant chosen because the kitchen matters.",
    image: "/images/websites/northline-table.png",
    alt: "A table prepared for lunch on a shaded terrace overlooking the sea",
  },
  {
    title: "Know the town",
    body: "Walkable days, local guides, and enough time to find a rhythm that belongs to the place.",
    image: "/images/websites/northline-town.png",
    alt: "A quiet limestone lane in an old Mediterranean hill town",
  },
];

export default function NorthlinePage({ site }: { site: WebsiteDemo }) {
  const rootRef = useRef<HTMLElement>(null);
  const manifestoRef = useRef<HTMLParagraphElement>(null);
  const journeyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      gsap.from("[data-hero-line]", {
        opacity: 0,
        y: 32,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from("[data-hero-image]", {
        opacity: 0,
        scale: 1.08,
        duration: 1.6,
        ease: "power3.out",
      });

      gsap.to("[data-manifesto-word]", {
        opacity: 1,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: manifestoRef.current,
          start: "top 78%",
          end: "bottom 44%",
          scrub: true,
        },
      });

      media.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: journeyRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: "[data-journey-heading]",
          pinSpacing: false,
        });

        gsap.utils.toArray<HTMLElement>("[data-destination]").forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0.35, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                end: "top 48%",
                scrub: true,
              },
            },
          );
        });
      });
    }, rootRef);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <main ref={rootRef} className="w-full max-w-full overflow-x-hidden bg-[#0e2938] text-[#f4f1e9]">
      <header className="fixed inset-x-0 top-0 z-30 px-4 pt-4">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between border border-white/15 bg-[#0e2938]/78 px-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_16px_40px_rgba(4,20,30,0.22)] backdrop-blur-xl md:px-7">
          <Link href="/showcases/travel" className={`${focus} font-display text-2xl font-semibold tracking-[-0.04em]`}>
            Northline
          </Link>
          <div className="hidden items-center gap-7 text-sm font-semibold text-[#d3d8d4] md:flex">
            <a href="#journeys" className="transition-colors duration-200 hover:text-[#e57a5f]">Journeys</a>
            <a href="#stays" className="transition-colors duration-200 hover:text-[#e57a5f]">Places</a>
            <a href="#notes" className="transition-colors duration-200 hover:text-[#e57a5f]">Journal</a>
          </div>
          <a href="#contact" className={`${focus} whitespace-nowrap bg-[#e57a5f] px-4 py-2 text-sm font-bold text-[#0e2938] transition-colors duration-200 hover:bg-[#f4f1e9] active:translate-y-px`}>
            Plan a journey
          </a>
        </nav>
      </header>

      <section className="relative isolate min-h-[100dvh] overflow-hidden">
        <Image data-hero-image src="/images/websites/northline-terrace-hero.png" alt="A secluded Mediterranean terrace overlooking the sea at early evening" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,32,45,0.92)_0%,rgba(8,32,45,0.64)_43%,rgba(8,32,45,0.12)_100%)]" />
        <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl items-end px-5 pb-16 pt-24 md:px-8 md:pb-20">
          <div className="max-w-5xl">
            <p data-hero-line className="text-xs font-bold uppercase tracking-[0.2em] text-[#e57a5f]">Private journeys, carefully composed</p>
            <h1 data-hero-line className="mt-6 max-w-5xl font-display text-[clamp(4.6rem,10vw,10rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
              Travel, made personal.
            </h1>
            <p data-hero-line className="mt-7 max-w-lg text-base font-medium leading-7 text-[#e5e6de]">
              Thoughtful journeys that unfold slowly, with every important detail handled.
            </p>
            <div data-hero-line className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className={`${focus} whitespace-nowrap bg-[#e57a5f] px-6 py-3 text-sm font-bold text-[#0e2938] transition-colors duration-200 hover:bg-[#f4f1e9] active:translate-y-px`}>
                Plan a journey
              </a>
              <a href="#journeys" className={`${focus} whitespace-nowrap border border-white/45 bg-[#0e2938]/25 px-6 py-3 text-sm font-bold text-[#f4f1e9] backdrop-blur-sm transition-colors duration-200 hover:bg-[#f4f1e9] hover:text-[#0e2938] active:translate-y-px`}>
                Explore places
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-32 md:px-8 md:py-48">
        <div className="mx-auto max-w-7xl">
          <p ref={manifestoRef} className="max-w-6xl font-display text-[clamp(3.2rem,6.5vw,7.2rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
            {manifesto.split(" ").map((word, index) => (
              <span key={`${word}-${index}`} data-manifesto-word className="mr-[0.2em] inline-block opacity-[0.14]">
                {word}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section ref={journeyRef} id="journeys" className="border-y border-white/12 bg-[#112f3e] px-5 py-32 md:px-8 md:py-48">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.78fr_1.22fr]">
          <div data-journey-heading className="h-fit md:pr-8">
            <h2 className="max-w-lg font-display text-[clamp(4rem,7vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
              Let the route breathe.
            </h2>
            <p className="mt-7 max-w-sm text-base leading-7 text-[#b9c7c7]">
              We choose fewer places, stay longer, and shape the details around the way you want to spend your time.
            </p>
          </div>
          <div className="space-y-10 md:space-y-24">
            {destinations.map((destination) => (
              <article key={destination.title} data-destination className="group overflow-hidden border border-white/12 bg-[#0e2938]">
                <div className="relative min-h-[430px] overflow-hidden md:min-h-[620px]">
                  <Image src={destination.image} alt={destination.alt} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2938] via-transparent to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-5xl font-semibold leading-none tracking-[-0.055em]">{destination.title}</h3>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-[#b9c7c7]">{destination.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stays" className="px-5 py-32 md:px-8 md:py-48">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-4xl font-display text-[clamp(4rem,7vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
            A room with a sense of place.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#b9c7c7]">
            Independent hotels, quiet villas, and small stays chosen for character, warmth, and the view outside the door.
          </p>
          <div className="mt-14 grid gap-4 md:grid-cols-12 md:grid-rows-[310px_310px]">
            <article className="group relative min-h-[420px] overflow-hidden md:col-span-8 md:row-span-2 md:min-h-0">
              <Image src="/images/websites/northline-stay.png" alt="A quiet boutique hotel room opening onto a shaded terrace and distant sea" fill sizes="(min-width: 768px) 66vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            </article>
            <article className="bg-[#e57a5f] p-7 text-[#0e2938] md:col-span-4">
              <p className="font-display text-5xl font-semibold leading-[0.9] tracking-[-0.06em]">Stay somewhere memorable.</p>
            </article>
            <article className="border border-white/12 bg-[#163747] p-7 md:col-span-4">
              <p className="font-display text-4xl font-semibold leading-[0.94] tracking-[-0.055em]">Leave enough room for surprise.</p>
              <p className="mt-6 text-sm leading-6 text-[#b9c7c7]">A clear plan should never make the trip feel over-planned.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="notes" className="border-y border-white/12 bg-[#112f3e] px-5 py-32 md:px-8 md:py-48">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="relative min-h-[480px] overflow-hidden">
            <Image src="/images/websites/northline-market.png" alt="A vendor arranging produce in a quiet Mediterranean morning market" fill sizes="(min-width: 768px) 48vw, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 className="max-w-xl font-display text-[clamp(3.8rem,6vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
              Local knowledge changes the day.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-[#b9c7c7]">
              The right guide, a table worth crossing town for, and a small detour can become the part you remember most.
            </p>
            <a href="#contact" className={`${focus} mt-9 inline-block whitespace-nowrap border border-[#e57a5f] px-6 py-3 text-sm font-bold text-[#e57a5f] transition-colors duration-200 hover:bg-[#e57a5f] hover:text-[#0e2938] active:translate-y-px`}>
              Plan a journey
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-32 md:px-8 md:py-48">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-4xl font-display text-[clamp(3.8rem,6.5vw,7rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
            The trip should feel like yours.
          </h2>
          <div className="mt-14 grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
            {[{ quote: site.quote, by: site.quoteBy }, ...site.testimonials].slice(0, 2).map((item, index) => (
              <blockquote key={item.by} className={`border border-white/12 p-7 md:p-9 ${index === 0 ? "bg-[#163747]" : "bg-[#e57a5f] text-[#0e2938]"}`}>
                <p className="font-display text-3xl font-semibold leading-[1.04] tracking-[-0.045em]">&ldquo;{item.quote}&rdquo;</p>
                <footer className={`mt-8 text-sm font-bold ${index === 0 ? "text-[#b9c7c7]" : "text-[#0e2938]/70"}`}>{item.by}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#e57a5f] px-5 py-28 text-[#0e2938] md:px-8 md:py-40">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="max-w-4xl font-display text-[clamp(4.4rem,8vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.08em]">
              Start with the place you keep thinking about.
            </h2>
            <p className="mt-7 max-w-lg text-base font-semibold leading-7 text-[#0e2938]/75">Tell us what has been drawing you in. We will shape the route from there.</p>
          </div>
          <a href="mailto:hello@example.com" className={`${focus} w-fit whitespace-nowrap bg-[#0e2938] px-7 py-3.5 text-sm font-bold text-[#f4f1e9] transition-colors duration-200 hover:bg-[#f4f1e9] hover:text-[#0e2938] active:translate-y-px`}>
            Plan a journey
          </a>
        </div>
      </section>

      <footer className="border-t border-white/12 bg-[#0e2938] px-5 py-7 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs font-semibold text-[#b9c7c7] sm:flex-row sm:items-center sm:justify-between">
          <p>Northline</p>
          <Link href="/showcases" className="transition-colors duration-200 hover:text-[#e57a5f]">Back to AVEC showcases</Link>
        </div>
      </footer>
    </main>
  );
}
