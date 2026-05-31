"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { WebsiteDemo } from "../siteData";

gsap.registerPlugin(ScrollTrigger);

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173e4d] focus-visible:ring-offset-2";

const statement =
  "Children learn deeply when a school gives them room to notice, question, make, and begin again.";

const learningMoments = [
  {
    title: "Build the question",
    body: "Students begin with observation, then turn curiosity into a problem worth exploring.",
    image: "/images/websites/harbor-garden-inquiry.png",
    alt: "Students examining leaves and soil samples together in the school garden",
    position: "object-center",
  },
  {
    title: "Make the idea visible",
    body: "Models, writing, experiments, and critique help a thought become something others can understand.",
    image: "/images/websites/harbor-model-making.png",
    alt: "Students building and discussing a model together in the design studio",
    position: "object-center",
  },
  {
    title: "Share what changed",
    body: "Reflection is part of the work. Students learn to name what shifted and where they want to go next.",
    image: "/images/websites/harbor-student-presentation.png",
    alt: "A student presenting a handmade project to classmates in a classroom circle",
    position: "object-center",
  },
];

const programs = [
  {
    title: "Science studio",
    body: "Ask a precise question, test it carefully, and explain what the evidence changed.",
    image: "/images/websites/harbor-science-studio.png",
    alt: "Hands using magnifying lenses and notebooks during a classroom science investigation",
  },
  {
    title: "Garden classroom",
    body: "Watch seasons move, work with living systems, and connect care with responsibility.",
    image: "/images/websites/harbor-garden-classroom.png",
    alt: "Students tending seedlings and herbs in raised wooden garden beds",
  },
  {
    title: "Writing workshop",
    body: "Draft, listen, revise, and find the clearest way to say what you mean.",
    image: "/images/websites/harbor-writing-workshop.png",
    alt: "Student revising a notebook with a peer during writing workshop",
  },
];

export default function HarborAcademyPage({ site }: { site: WebsiteDemo }) {
  const statementRef = useRef<HTMLParagraphElement>(null);
  const learningRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      gsap.from("[data-hero-copy]", {
        opacity: 0,
        y: 36,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from("[data-hero-image]", {
        opacity: 0,
        scale: 0.92,
        y: 48,
        duration: 1.2,
        ease: "power3.out",
      });

      const words = gsap.utils.toArray<HTMLElement>("[data-statement-word]");
      gsap.to(words, {
        opacity: 1,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: statementRef.current,
          start: "top 78%",
          end: "bottom 48%",
          scrub: true,
        },
      });

      const moments = gsap.utils.toArray<HTMLElement>("[data-learning-moment]");
      moments.forEach((moment) => {
        gsap.fromTo(
          moment,
          { opacity: 0.32, scale: 0.86 },
          {
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: moment,
              start: "top 88%",
              end: "top 48%",
              scrub: true,
            },
          },
        );
      });

      media.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: learningRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: "[data-learning-heading]",
          pinSpacing: false,
        });
      });
    });

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <main className="w-full max-w-full overflow-x-hidden bg-[#f2f0e8] text-[#173e4d]">
      <header className="fixed inset-x-0 top-0 z-30 px-4 pt-4">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-[#173e4d]/15 bg-[#fbfaf4]/88 px-5 shadow-[0_14px_40px_rgba(23,62,77,0.1)] backdrop-blur-xl md:px-7">
          <Link href="/showcases/education" className={`${focus} rounded-full text-lg font-black tracking-[-0.04em]`}>
            Harbor Academy
          </Link>
          <div className="hidden items-center gap-6 text-sm font-bold md:flex">
            <a href="#approach" className="transition-colors duration-200 hover:text-[#d4663f]">Approach</a>
            <a href="#learning" className="transition-colors duration-200 hover:text-[#d4663f]">Learning</a>
            <a href="#community" className="transition-colors duration-200 hover:text-[#d4663f]">Community</a>
          </div>
          <a href="#visit" className={`${focus} whitespace-nowrap rounded-full bg-[#173e4d] px-4 py-2 text-sm font-black text-[#fbfaf4] transition-colors duration-200 hover:bg-[#d4663f]`}>
            Plan a visit
          </a>
        </nav>
      </header>

      <section className="relative mx-auto grid min-h-[100dvh] max-w-[1480px] items-center gap-8 px-5 pb-16 pt-28 md:grid-cols-[1.02fr_0.98fr] md:px-10 md:pt-32">
        <div className="relative z-10">
          <p data-hero-copy className="text-xs font-black uppercase tracking-[0.18em] text-[#d4663f]">
            A small K-8 school
          </p>
          <h1 data-hero-copy className="mt-6 max-w-4xl text-[clamp(3.5rem,7vw,7rem)] font-black leading-[0.87] tracking-[-0.09em]">
            Curiosity has a place to grow.
          </h1>
          <p data-hero-copy className="mt-7 max-w-lg text-base font-medium leading-7 text-[#47656c] md:text-lg">
            A close-knit school where students ask better questions, make real things, and learn to trust their own thinking.
          </p>
          <div data-hero-copy className="mt-9 flex flex-wrap gap-3">
            <a href="#visit" className={`${focus} rounded-full bg-[#173e4d] px-6 py-3 text-sm font-black text-[#fbfaf4] transition-colors duration-200 hover:bg-[#d4663f]`}>
              Plan a visit
            </a>
            <a href="#approach" className={`${focus} rounded-full border border-[#173e4d]/35 px-6 py-3 text-sm font-black transition-colors duration-200 hover:border-[#d4663f] hover:text-[#d4663f]`}>
              See our approach
            </a>
          </div>
        </div>
        <div data-hero-image className="relative mt-5 min-h-[450px] md:mt-0 md:min-h-[720px]">
          <div className="absolute inset-x-0 bottom-0 top-14 overflow-hidden rounded-[2.4rem] bg-[#c8d8c8]">
            <Image src={site.heroImage} alt={site.heroAlt} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-[64%_center]" />
          </div>
          <div className="absolute bottom-7 left-[-1rem] max-w-[260px] rounded-[1.5rem] bg-[#d4663f] p-5 text-[#fffaf3] shadow-[0_18px_36px_rgba(151,72,44,0.22)] md:left-[-3rem]">
            <p className="text-3xl font-black tracking-[-0.06em]">1:7</p>
            <p className="mt-1 text-sm font-bold leading-5">Faculty to student ratio. Every learner is known.</p>
          </div>
        </div>
      </section>

      <section id="approach" className="px-5 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-7xl">
          <p ref={statementRef} className="max-w-6xl text-[clamp(2.8rem,5.7vw,6.2rem)] font-black leading-[0.94] tracking-[-0.075em]">
            {statement.split(" ").map((word, index) => (
              <span key={`${word}-${index}`} data-statement-word className="mr-[0.22em] inline-block opacity-[0.14]">
                {word}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="px-5 pb-32 md:px-10 md:pb-48">
        <div className="mx-auto grid max-w-7xl grid-flow-dense grid-cols-1 overflow-hidden rounded-[2rem] md:grid-cols-12 md:grid-rows-2">
          <article className="group relative min-h-[420px] overflow-hidden bg-[#173e4d] text-[#fbfaf4] md:col-span-7 md:row-span-2">
            <Image src="/images/websites/harbor-classroom-collaboration.png" alt="Harbor Academy students working together around a classroom table" fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover object-center opacity-80 transition-transform duration-700 ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173e4d] via-[#173e4d]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
              <h2 className="max-w-lg text-4xl font-black leading-[0.95] tracking-[-0.06em] md:text-6xl">Learning starts with something worth noticing.</h2>
            </div>
          </article>
          <article className="min-h-[250px] bg-[#f0b849] p-7 md:col-span-5">
            <p className="text-6xl font-black tracking-[-0.08em]">14</p>
            <p className="mt-12 max-w-xs text-xl font-black leading-tight">Students in a typical classroom, with room for every voice.</p>
          </article>
          <article className="min-h-[250px] bg-[#c8d8c8] p-7 md:col-span-5">
            <p className="max-w-sm text-3xl font-black leading-[0.98] tracking-[-0.05em]">One connected journey from kindergarten through eighth grade.</p>
            <a href="#learning" className={`${focus} mt-12 inline-block rounded-full border border-[#173e4d]/40 px-5 py-2.5 text-sm font-black transition-colors duration-200 hover:bg-[#173e4d] hover:text-[#fbfaf4]`}>
              Explore learning
            </a>
          </article>
        </div>
      </section>

      <section ref={learningRef} id="learning" className="bg-[#173e4d] px-5 py-32 text-[#fbfaf4] md:px-10 md:py-48">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.82fr_1.18fr]">
          <div data-learning-heading className="h-fit md:pr-8">
            <h2 className="max-w-md text-[clamp(3.4rem,6vw,6.5rem)] font-black leading-[0.88] tracking-[-0.085em]">
              Follow the question.
            </h2>
            <p className="mt-7 max-w-sm text-base font-medium leading-7 text-[#c8d8c8]">
              The work moves from curiosity to craft, then back into the world with a clearer point of view.
            </p>
          </div>
          <div className="space-y-10 md:space-y-24">
            {learningMoments.map((moment) => (
              <article key={moment.title} data-learning-moment className="group overflow-hidden rounded-[2rem] bg-[#234f5c]">
                <div className="relative min-h-[330px] overflow-hidden md:min-h-[470px]">
                  <Image src={moment.image} alt={moment.alt} fill sizes="(min-width: 768px) 55vw, 100vw" className={`object-cover ${moment.position} transition-transform duration-700 ease-out group-hover:scale-105`} />
                </div>
                <div className="p-7 md:p-9">
                  <h3 className="text-3xl font-black tracking-[-0.05em]">{moment.title}</h3>
                  <p className="mt-3 max-w-lg text-sm font-medium leading-6 text-[#c8d8c8]">{moment.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-4xl text-[clamp(3.2rem,6vw,6rem)] font-black leading-[0.9] tracking-[-0.08em]">A school day with texture.</h2>
          <div className="mt-14 flex min-h-[520px] flex-col overflow-hidden rounded-[2rem] md:flex-row">
            {programs.map((program) => (
              <article key={program.title} className="group relative min-h-[230px] cursor-pointer overflow-hidden bg-[#173e4d] p-7 text-[#fffaf3] transition-[flex] duration-500 ease-out md:flex-1 md:hover:flex-[2.15]">
                <Image src={program.image} alt={program.alt} fill sizes="(min-width: 768px) 34vw, 100vw" className="object-cover opacity-55 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173e4d] via-[#173e4d]/35 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <h3 className="max-w-xs text-3xl font-black leading-none tracking-[-0.055em]">{program.title}</h3>
                  <p className="max-w-sm text-sm font-bold leading-6 text-[#fffaf3]/85 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">{program.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="bg-[#c8d8c8] px-5 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-4xl text-[clamp(3rem,5.8vw,5.8rem)] font-black leading-[0.92] tracking-[-0.08em]">What families notice first.</h2>
          <div className="mt-14 flex snap-x gap-5 overflow-x-auto pb-4">
            {[{ quote: site.quote, by: site.quoteBy }, ...site.testimonials].map((item) => (
              <blockquote key={item.by} className="min-w-[86vw] snap-start rounded-[1.75rem] bg-[#fbfaf4] p-7 sm:min-w-[470px] md:p-9">
                <p className="text-2xl font-black leading-[1.05] tracking-[-0.045em]">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-8 text-sm font-bold text-[#47656c]">{item.by}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="bg-[#d4663f] px-5 py-28 text-[#fffaf3] md:px-10 md:py-40">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="max-w-4xl text-[clamp(3.5rem,7vw,7.2rem)] font-black leading-[0.86] tracking-[-0.09em]">Come spend a morning at Harbor.</h2>
            <p className="mt-7 max-w-lg text-base font-bold leading-7 text-[#fffaf3]/80">Meet the teachers, step into the classrooms, and see how a school day feels.</p>
          </div>
          <a href="mailto:hello@example.com" className={`${focus} w-fit whitespace-nowrap rounded-full bg-[#fffaf3] px-7 py-3.5 text-sm font-black text-[#173e4d] transition-colors duration-200 hover:bg-[#f0b849]`}>
            Plan a visit
          </a>
        </div>
      </section>

      <footer className="bg-[#173e4d] px-5 py-7 text-[#fbfaf4] md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs font-bold opacity-75 sm:flex-row sm:items-center sm:justify-between">
          <p>Harbor Academy</p>
          <Link href="/showcases" className="transition-opacity duration-200 hover:opacity-60">Back to AVEC showcases</Link>
        </div>
      </footer>
    </main>
  );
}
