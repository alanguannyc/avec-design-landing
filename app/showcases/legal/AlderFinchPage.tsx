"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { WebsiteDemo } from "../siteData";

gsap.registerPlugin(ScrollTrigger);

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3D2F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F6F3]";

const manifesto =
  "When the decision carries weight, the work should bring clarity before it brings noise.";

const practices = [
  {
    num: "01",
    title: "Corporate",
    body: "Governance, agreements, transactions, and the decisions that shape a business over time.",
    image: "/images/websites/alder-finch-counsel-meeting.png",
    alt: "Attorneys in a focused discussion inside a quiet law office",
  },
  {
    num: "02",
    title: "Disputes",
    body: "Measured strategy with a clear view of leverage, cost, timing, and the strongest available outcome.",
    image: "/images/websites/alder-finch-colonnade.png",
    alt: "A professional walking through a quiet stone civic colonnade",
  },
  {
    num: "03",
    title: "Private client",
    body: "Thoughtful stewardship for families, estates, and assets intended to last across generations.",
    image: "/images/websites/alder-finch-private-library.png",
    alt: "A private library with a walnut desk and morning light",
  },
];

export default function AlderFinchPage({ site }: { site: WebsiteDemo }) {
  const rootRef = useRef<HTMLElement>(null);
  const manifestoRef = useRef<HTMLParagraphElement>(null);
  const counselRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      gsap.from("[data-hero-line]", {
        opacity: 0,
        y: 22,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.from("[data-hero-image]", {
        opacity: 0,
        scale: 1.06,
        duration: 1.6,
        ease: "power3.out",
      });

      gsap.to("[data-manifesto-word]", {
        opacity: 1,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: manifestoRef.current,
          start: "top 75%",
          end: "bottom 40%",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 18,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      media.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: counselRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: "[data-counsel-heading]",
          pinSpacing: false,
        });

        gsap.utils
          .toArray<HTMLElement>("[data-counsel-card]")
          .forEach((card) => {
            gsap.fromTo(
              card,
              { opacity: 0.2, y: 28 },
              {
                opacity: 1,
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top 86%",
                  end: "top 50%",
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
    <main
      ref={rootRef}
      className="w-full max-w-full overflow-x-hidden bg-[#F7F6F3] text-[#1A1917]"
      style={{ fontFamily: "var(--font-geist-sans, system-ui, sans-serif)" }}
    >
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-[#E5E3DE] bg-[#F7F6F3]/92 backdrop-blur-sm">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link
            href="/showcases/legal"
            className={`${focusRing} text-lg tracking-[-0.03em] text-[#1A1917]`}
            style={{
              fontFamily: "var(--font-display, Georgia, serif)",
              fontWeight: 600,
            }}
          >
            Alder Finch
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#practices"
              className="text-sm text-[#787774] transition-colors duration-200 hover:text-[#1A1917]"
            >
              Practices
            </a>
            <a
              href="#approach"
              className="text-sm text-[#787774] transition-colors duration-200 hover:text-[#1A1917]"
            >
              Approach
            </a>
            <a
              href="#perspective"
              className="text-sm text-[#787774] transition-colors duration-200 hover:text-[#1A1917]"
            >
              Perspective
            </a>
          </div>
          <a
            href="#contact"
            className={`${focusRing} rounded-[4px] bg-[#1A1917] px-4 py-2 text-sm text-[#F7F6F3] transition-colors duration-200 hover:bg-[#333] active:scale-[0.98]`}
          >
            Speak with counsel
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-[100dvh] pt-16">
        <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-7xl md:grid-cols-2">
          <div className="flex flex-col justify-between px-5 py-16 md:px-10 md:py-20">
            <p
              data-hero-line
              className="text-xs font-medium uppercase tracking-[0.18em] text-[#1F3D2F]"
            >
              Independent counsel
            </p>
            <div>
              <h1
                data-hero-line
                className="text-[clamp(3.6rem,5.2vw,6.2rem)] font-light leading-[0.9] tracking-[-0.04em]"
                style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
              >
                Clear counsel
                <br />
                for consequential
                <br />
                decisions.
              </h1>
              <p
                data-hero-line
                className="mt-8 max-w-sm text-base leading-7 text-[#787774]"
              >
                A focused legal team for businesses, families, and institutions
                navigating matters that deserve careful judgment.
              </p>
              <div data-hero-line className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className={`${focusRing} inline-block rounded-[4px] bg-[#1A1917] px-6 py-3 text-sm text-[#F7F6F3] transition-colors duration-200 hover:bg-[#333] active:scale-[0.98]`}
                >
                  Speak with counsel
                </a>
                <a
                  href="#practices"
                  className={`${focusRing} inline-block rounded-[4px] border border-[#C8C6C1] px-6 py-3 text-sm text-[#1A1917] transition-colors duration-200 hover:border-[#1A1917] hover:bg-[#1A1917] hover:text-[#F7F6F3] active:scale-[0.98]`}
                >
                  View practices
                </a>
              </div>
            </div>
            <p
              data-hero-line
              className="max-w-xs text-xs leading-5 text-[#A8A5A0]"
            >
              Consequential decisions require direct advice tied to the real
              choice at hand.
            </p>
          </div>
          <div
            data-hero-image
            className="relative min-h-[500px] overflow-hidden md:min-h-0"
          >
            <Image
              src="/images/websites/alder-finch-library-hero.png"
              alt="A quiet contemporary legal library at dusk with a conference table and city view"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#F7F6F3]/8" />
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section
        id="approach"
        className="border-t border-[#E5E3DE] px-5 py-32 md:px-8 md:py-48"
      >
        <div className="mx-auto max-w-7xl">
          <p
            ref={manifestoRef}
            className="max-w-5xl leading-[0.92] tracking-[-0.04em]"
            style={{
              fontFamily: "var(--font-display, Georgia, serif)",
              fontWeight: 300,
              fontSize: "clamp(2.6rem, 5.5vw, 6.4rem)",
            }}
          >
            {manifesto.split(" ").map((word, index) => (
              <span
                key={`${word}-${index}`}
                data-manifesto-word
                className="mr-[0.2em] inline-block opacity-[0.12]"
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* APPROACH - BENTO */}
      <section className="border-t border-[#E5E3DE] bg-[#EFEDE8] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-3 md:grid-cols-12 md:grid-rows-[300px_260px]">
            <article
              data-reveal
              className="relative overflow-hidden md:col-span-7 md:row-span-2"
              style={{ borderRadius: "8px" }}
            >
              <Image
                src="/images/websites/alder-finch-counsel-meeting.png"
                alt="Attorneys considering documents together in a private meeting room"
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </article>
            <article
              data-reveal
              className="flex flex-col justify-end bg-[#1F3D2F] p-7 text-[#F7F6F3] md:col-span-5"
              style={{ borderRadius: "8px" }}
            >
              <p
                className="font-light leading-[1.04] tracking-[-0.03em]"
                style={{
                  fontFamily: "var(--font-display, Georgia, serif)",
                  fontSize: "clamp(1.8rem, 2.6vw, 3rem)",
                }}
              >
                Direct advice should make the next decision clearer.
              </p>
            </article>
            <article
              data-reveal
              className="border border-[#E5E3DE] bg-[#F7F6F3] p-7 md:col-span-5"
              style={{ borderRadius: "8px" }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#1F3D2F]">
                A focused firm
              </p>
              <p className="mt-5 text-base leading-7 text-[#1A1917]">
                {site.about.detail}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PRACTICES */}
      <section
        id="practices"
        className="border-t border-[#E5E3DE] px-5 py-24 md:px-8 md:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <h2
              data-reveal
              className="font-light leading-[0.9] tracking-[-0.04em]"
              style={{
                fontFamily: "var(--font-display, Georgia, serif)",
                fontSize: "clamp(3rem, 5.5vw, 6rem)",
              }}
            >
              Practices shaped
              <br />
              around the decision.
            </h2>
            <p data-reveal className="mt-6 text-base leading-7 text-[#787774]">
              Three focused disciplines. One standard of preparation and
              practical judgment.
            </p>
          </div>
          <div className="border-t border-[#E5E3DE]">
            {practices.map((practice) => (
              <article
                key={practice.title}
                data-reveal
                className="group border-b border-[#E5E3DE] py-8 transition-colors duration-300 hover:bg-[#EFEDE8] md:grid md:grid-cols-[80px_1fr_1fr_180px] md:items-center md:gap-8 md:px-4 md:py-10"
              >
                <p
                  className="mb-4 text-xs text-[#A8A5A0] md:mb-0"
                  style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
                >
                  {practice.num}
                </p>
                <h3
                  className="font-light leading-tight tracking-[-0.04em] text-[#1A1917]"
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontSize: "clamp(2rem, 2.8vw, 3.2rem)",
                  }}
                >
                  {practice.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#787774] md:mt-0">
                  {practice.body}
                </p>
                <div
                  className="relative mt-5 h-28 overflow-hidden md:mt-0 md:h-full"
                  style={{ borderRadius: "4px" }}
                >
                  <Image
                    src={practice.image}
                    alt={practice.alt}
                    fill
                    sizes="200px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PERSPECTIVE - STICKY COUNSEL */}
      <section
        ref={counselRef}
        id="perspective"
        className="border-t border-[#E5E3DE] bg-[#EFEDE8] px-5 py-24 md:px-8 md:py-40"
      >
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.75fr_1.25fr]">
          <div data-counsel-heading className="h-fit md:pr-8">
            <h2
              className="font-light leading-[0.9] tracking-[-0.04em]"
              style={{
                fontFamily: "var(--font-display, Georgia, serif)",
                fontSize: "clamp(3rem, 5vw, 5.6rem)",
              }}
            >
              Counsel with a wider view.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-7 text-[#787774]">
              The legal question matters. So do the people, time, leverage, and
              practical consequences around it.
            </p>
          </div>
          <div className="space-y-8 md:space-y-14">
            {[
              [
                "Understand the terrain.",
                "We begin by identifying the real decision, the relevant risk, and the context that will shape the answer.",
                "/images/websites/alder-finch-colonnade.png",
                "A quiet civic colonnade with morning light",
              ],
              [
                "Keep strategy connected.",
                "Preparation stays tied to the outcome that matters, with direct communication at each important turn.",
                "/images/websites/alder-finch-private-library.png",
                "A warm private library with a desk and courtyard view",
              ],
              [
                "Make the next move clear.",
                "The goal is useful judgment: a path forward that can be understood, tested, and acted on.",
                "/images/websites/alder-finch-consultation.png",
                "A notebook and portfolio on a quiet law office reading table",
              ],
            ].map(([title, body, image, alt]) => (
              <article
                key={title}
                data-counsel-card
                className="overflow-hidden border border-[#E5E3DE] bg-[#F7F6F3]"
                style={{ borderRadius: "8px" }}
              >
                <div className="relative min-h-[300px] overflow-hidden md:min-h-[460px]">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3
                    className="font-light tracking-[-0.03em]"
                    style={{
                      fontFamily: "var(--font-display, Georgia, serif)",
                      fontSize: "clamp(1.8rem, 2.4vw, 2.8rem)",
                    }}
                  >
                    {title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-[#787774]">
                    {body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-[#E5E3DE] px-5 py-24 md:px-8 md:py-40">
        <div className="mx-auto max-w-7xl">
          <h2
            data-reveal
            className="max-w-4xl font-light leading-[0.9] tracking-[-0.04em]"
            style={{
              fontFamily: "var(--font-display, Georgia, serif)",
              fontSize: "clamp(3rem, 5.5vw, 6rem)",
            }}
          >
            The work should leave less room for uncertainty.
          </h2>
          <div className="mt-14 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
            {[{ quote: site.quote, by: site.quoteBy }, ...site.testimonials]
              .slice(0, 2)
              .map((item, index) => (
                <blockquote
                  key={item.by}
                  data-reveal
                  className={`p-8 md:p-10 ${
                    index === 0
                      ? "bg-[#1F3D2F] text-[#F7F6F3]"
                      : "border border-[#E5E3DE] bg-[#F7F6F3] text-[#1A1917]"
                  }`}
                  style={{ borderRadius: "8px" }}
                >
                  <p
                    className="font-light leading-[1.15] tracking-[-0.025em]"
                    style={{
                      fontFamily: "var(--font-display, Georgia, serif)",
                      fontSize: "clamp(1.5rem, 2vw, 2.2rem)",
                    }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer
                    className={`mt-7 text-xs font-medium uppercase tracking-[0.12em] ${
                      index === 0 ? "text-[#F7F6F3]/55" : "text-[#A8A5A0]"
                    }`}
                  >
                    {item.by}
                  </footer>
                </blockquote>
              ))}
          </div>
        </div>
      </section>

      {/* CONTACT - structural dark close */}
      <section
        id="contact"
        className="border-t border-[#E5E3DE] bg-[#1A1917] px-5 py-24 text-[#F7F6F3] md:px-8 md:py-40"
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div data-reveal>
            <h2
              className="max-w-5xl font-light leading-[0.88] tracking-[-0.04em]"
              style={{
                fontFamily: "var(--font-display, Georgia, serif)",
                fontSize: "clamp(3.4rem, 6.5vw, 7.4rem)",
              }}
            >
              Bring the matter into focus.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#F7F6F3]/55">
              Tell us where the decision stands. We will begin with the context
              that matters.
            </p>
          </div>
          <div
            className="relative min-h-[260px] overflow-hidden md:min-h-[340px]"
            style={{ borderRadius: "8px" }}
          >
            <Image
              src="/images/websites/alder-finch-consultation.png"
              alt="A notebook and portfolio prepared for a legal consultation"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1A1917]/20" />
            <a
              href="mailto:hello@example.com"
              className={`${focusRing.replace("ring-offset-[#F7F6F3]", "ring-offset-[#1A1917]")} absolute bottom-5 left-5 rounded-[4px] bg-[#F7F6F3] px-6 py-3 text-sm text-[#1A1917] transition-colors duration-200 hover:bg-white active:scale-[0.98]`}
            >
              Speak with counsel
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E5E3DE] bg-[#F7F6F3] px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-[#A8A5A0] sm:flex-row sm:items-center sm:justify-between">
          <p style={{ fontFamily: "var(--font-display, Georgia, serif)" }}>
            Alder Finch
          </p>
          <Link
            href="/showcases"
            className="transition-colors duration-200 hover:text-[#1A1917]"
          >
            Back to AVEC showcases
          </Link>
        </div>
      </footer>
    </main>
  );
}
