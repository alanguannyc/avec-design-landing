"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22685f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f8f5]";

const careAreas = [
  {
    title: "Primary care",
    body: "Everyday visits, preventive care, and a clinician who knows your health over time.",
  },
  {
    title: "Specialty support",
    body: "A clear handoff when your question needs deeper expertise, with follow-up that stays connected.",
  },
  {
    title: "Care navigation",
    body: "A reachable team for scheduling, results, referrals, and the questions that come after a visit.",
  },
];

const visitSteps = [
  {
    title: "Choose the right visit",
    body: "Start with primary care or ask our team to help you find the right clinician.",
  },
  {
    title: "Share what brings you in",
    body: "Tell us the reason for your visit so your care team can prepare before you arrive.",
  },
  {
    title: "Leave with a clear plan",
    body: "Know what happens next, who to contact, and when to expect follow-up.",
  },
];

const specialtyGroups = [
  {
    title: "Everyday care",
    body: "The place to start for preventive care, new symptoms, and ongoing health questions.",
    items: ["Annual visits", "Women’s health", "Chronic care"],
    className: "bg-[#d8e9e4] md:col-span-7",
  },
  {
    title: "Specialty care",
    body: "Deeper support with a coordinated handoff and a shared view of your health history.",
    items: ["Cardiology", "Dermatology", "Behavioral health"],
    className: "bg-[#22685f] text-[#f7fbf9] md:col-span-5",
  },
  {
    title: "Care between visits",
    body: "Practical help for the details that keep a treatment plan moving.",
    items: ["Lab coordination", "Referral support", "Results follow-up"],
    className: "bg-[#e7f1ed] md:col-span-12",
  },
];

const accessPoints = [
  {
    title: "Questions after a visit",
    body: "Send a note to the team that knows your care plan and understands what happened at your appointment.",
  },
  {
    title: "Referrals without guesswork",
    body: "Know who you are seeing, why the visit matters, and what to expect after the specialist appointment.",
  },
  {
    title: "Results with context",
    body: "Get a clear explanation of your results and a next step when there is something to discuss.",
  },
];

const locations = [
  {
    title: "Northside clinic",
    body: "Primary care, annual visits, and coordinated specialty support in a calm neighborhood setting.",
  },
  {
    title: "Riverside clinic",
    body: "Everyday care and specialist appointments with an on-site team for scheduling and follow-up.",
  },
];

const questions = [
  {
    question: "Where should I start if I am a new patient?",
    answer: "Book a primary care visit or contact the care team. We will help you choose the right clinician and visit type.",
  },
  {
    question: "Can Northstar help coordinate specialist care?",
    answer: "Yes. Your care team can guide the referral, share relevant context, and help clarify what happens after the specialist visit.",
  },
  {
    question: "How do I ask a question after my appointment?",
    answer: "Contact the care team through the patient portal or by phone. Your message will reach the people coordinating your care.",
  },
];

export default function NorthstarHealthPage() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.from("[data-hero-reveal]", {
        opacity: 0,
        y: 18,
        duration: 0.72,
        stagger: 0.08,
        ease: "power2.out",
      });

      gsap.from("[data-hero-image]", {
        opacity: 0,
        scale: 1.04,
        duration: 1.1,
        ease: "power2.out",
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 20,
          duration: 0.66,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <main
      id="main-content"
      ref={rootRef}
      className="min-h-[100dvh] w-full overflow-x-hidden bg-[#f4f8f5] text-[#173d39]"
      style={{ fontFamily: "var(--font-geist-sans, system-ui, sans-serif)" }}
    >
      <a
        href="#main-content"
        className={`${focus} fixed left-4 top-3 z-50 -translate-y-20 bg-[#173d39] px-4 py-3 text-sm font-semibold text-[#f4f8f5] transition-transform focus:translate-y-0`}
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-30 border-b border-[#d6e2dd] bg-[#f4f8f5]/95 backdrop-blur-md">
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-5 px-5 md:px-8" aria-label="Primary navigation">
          <Link href="/showcases/medical" className={`${focus} flex items-center gap-3 whitespace-nowrap text-base font-semibold tracking-[-0.025em]`}>
            <span className="relative block h-8 w-8 bg-[#22685f]" aria-hidden="true">
              <span className="absolute left-1/2 top-[6px] h-5 w-[3px] -translate-x-1/2 bg-[#e7f1ed]" />
              <span className="absolute left-[6px] top-1/2 h-[3px] w-5 -translate-y-1/2 bg-[#e7f1ed]" />
            </span>
            Northstar Health
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            <a href="#care" className="text-sm font-medium text-[#4d6b68] transition-colors duration-200 hover:text-[#173d39]">Care</a>
            <a href="#first-visit" className="text-sm font-medium text-[#4d6b68] transition-colors duration-200 hover:text-[#173d39]">First visit</a>
            <a href="#team" className="text-sm font-medium text-[#4d6b68] transition-colors duration-200 hover:text-[#173d39]">Our team</a>
            <a href="#locations" className="text-sm font-medium text-[#4d6b68] transition-colors duration-200 hover:text-[#173d39]">Locations</a>
          </div>
          <a href="#book" className={`${focus} whitespace-nowrap bg-[#22685f] px-4 py-3 text-sm font-semibold text-[#f7fbf9] transition-colors duration-200 hover:bg-[#173d39] active:translate-y-px`}>
            Book a visit
          </a>
        </nav>
      </header>

      <section className="pt-[72px]">
        <div className="mx-auto grid min-h-[calc(100dvh-72px)] max-w-7xl md:grid-cols-[0.98fr_1.02fr]">
          <div className="flex flex-col justify-center px-5 py-14 md:px-8 md:py-20 lg:pr-16">
            <p data-hero-reveal className="text-xs font-semibold uppercase tracking-[0.18em] text-[#22685f]">
              Connected care, made personal
            </p>
            <h1 data-hero-reveal className="mt-6 max-w-2xl text-[clamp(3.5rem,6vw,6.6rem)] font-semibold leading-[0.94] tracking-[-0.075em] text-[#173d39]">
              Care that sees the whole person.
            </h1>
            <p data-hero-reveal className="mt-7 max-w-lg text-base leading-7 text-[#4d6b68]">
              Primary and specialty care with time to listen, clear next steps, and a team you can reach.
            </p>
            <div data-hero-reveal className="mt-9 flex flex-wrap gap-3">
              <a href="#book" className={`${focus} whitespace-nowrap bg-[#22685f] px-6 py-3 text-sm font-semibold text-[#f7fbf9] transition-colors duration-200 hover:bg-[#173d39] active:translate-y-px`}>
                Book a visit
              </a>
              <a href="#care" className={`${focus} whitespace-nowrap border border-[#a9c3bc] bg-[#f4f8f5] px-6 py-3 text-sm font-semibold text-[#173d39] transition-colors duration-200 hover:border-[#22685f] hover:bg-[#e7f1ed] active:translate-y-px`}>
                Explore care
              </a>
            </div>
          </div>
          <div data-hero-image className="relative min-h-[480px] overflow-hidden md:min-h-0">
            <Image
              src="/images/websites/northstar-consultation-v2.webp"
              alt="A physician listening carefully to a patient during a calm clinic consultation"
              fill
              priority
              sizes="(min-width: 768px) 51vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section aria-label="Care summary" className="border-y border-[#d6e2dd] bg-[#e7f1ed]">
        <div className="mx-auto grid max-w-7xl gap-px bg-[#c8dcd6] sm:grid-cols-3">
          {["Primary care", "Specialty referrals", "Care navigation"].map((item) => (
            <p key={item} className="bg-[#e7f1ed] px-5 py-5 text-sm font-semibold text-[#315c57] md:px-8">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <p data-reveal className="max-w-6xl text-[clamp(3.1rem,6vw,7rem)] font-semibold leading-[0.93] tracking-[-0.075em] text-[#315c57]">
            Healthcare feels different when every conversation leads to a clear next step.
          </p>
        </div>
      </section>

      <section id="care" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div data-reveal>
            <h2 className="max-w-4xl text-[clamp(3.1rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.075em]">
              Good care keeps the thread.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#4d6b68]">
              Your care team shares context, communicates clearly, and makes the next step easier to understand.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-12 md:grid-rows-[260px_260px]">
            <article data-reveal className="bg-[#22685f] p-7 text-[#f7fbf9] md:col-span-7 md:row-span-2 md:p-10">
              <h3 className="max-w-md text-[clamp(2.6rem,5vw,5.5rem)] font-semibold leading-[0.93] tracking-[-0.07em]">
                One team, from question to follow-up.
              </h3>
              <p className="mt-6 max-w-md text-sm leading-6 text-[#d7ebe5]">
                Northstar connects everyday care, specialist support, and the details that happen between visits.
              </p>
            </article>
            <article data-reveal className="relative min-h-[300px] overflow-hidden md:col-span-5 md:min-h-0">
              <Image
                src="/images/websites/northstar-reception.webp"
                alt="A patient checking in at a bright and welcoming neighborhood clinic"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </article>
            <article data-reveal className="bg-[#d8e9e4] p-7 md:col-span-5">
              <p className="max-w-sm text-3xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#173d39]">
                A reachable team for the questions that come next.
              </p>
            </article>
          </div>
          <div className="mt-4 grid gap-px bg-[#c8dcd6] md:grid-cols-3">
            {careAreas.map((area) => (
              <article key={area.title} data-reveal className="bg-[#f4f8f5] px-1 py-7 md:px-6">
                <h3 className="text-xl font-semibold tracking-[-0.035em]">{area.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-[#4d6b68]">{area.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d6e2dd] bg-[#edf4f1] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div data-reveal>
            <h2 className="max-w-4xl text-[clamp(3.1rem,5.8vw,6.3rem)] font-semibold leading-[0.92] tracking-[-0.075em]">
              Start here. We will connect the rest.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#4d6b68]">
              Begin with the care you need today. Your team can guide the next step when another perspective would help.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-12">
            {specialtyGroups.map((group) => (
              <article key={group.title} data-reveal className={`${group.className} p-7 md:p-9`}>
                <h3 className="text-3xl font-semibold tracking-[-0.055em]">{group.title}</h3>
                <p className={`mt-4 max-w-lg text-sm leading-6 ${group.title === "Specialty care" ? "text-[#d7ebe5]" : "text-[#4d6b68]"}`}>
                  {group.body}
                </p>
                <div className={`mt-8 grid gap-px ${group.title === "Care between visits" ? "sm:grid-cols-3" : ""}`}>
                  {group.items.map((item) => (
                    <p key={item} className={`py-3 text-sm font-semibold ${group.title === "Specialty care" ? "border-t border-[#4f877f]" : "border-t border-[#b8d0c9]"}`}>
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="first-visit" className="border-y border-[#d6e2dd] bg-[#edf4f1] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div data-reveal>
            <h2 className="max-w-lg text-[clamp(3.1rem,5vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.075em]">
              Your first visit, made simpler.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#4d6b68]">
              A clear path before, during, and after your appointment.
            </p>
          </div>
          <div className="grid gap-px bg-[#c8dcd6]">
            {visitSteps.map((step) => (
              <article key={step.title} data-reveal className="bg-[#edf4f1] py-7 md:px-6">
                <h3 className="text-2xl font-semibold tracking-[-0.045em]">{step.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-[#4d6b68]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-12">
          <article data-reveal className="bg-[#173d39] p-7 text-[#f7fbf9] md:col-span-5 md:p-10">
            <h2 className="max-w-md text-[clamp(3rem,5vw,5.4rem)] font-semibold leading-[0.92] tracking-[-0.075em]">
              Care does not stop at the exam room.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-6 text-[#c5dbd5]">
              The work between appointments should feel as considered as the visit itself.
            </p>
          </article>
          <div className="grid gap-px bg-[#c8dcd6] md:col-span-7">
            {accessPoints.map((point) => (
              <article key={point.title} data-reveal className="bg-[#f4f8f5] p-6 md:px-8 md:py-7">
                <h3 className="text-2xl font-semibold tracking-[-0.045em]">{point.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[#4d6b68]">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.12fr_0.88fr] md:items-center md:gap-16">
          <div data-reveal className="relative min-h-[420px] overflow-hidden md:min-h-[640px]">
            <Image
              src="/images/websites/northstar-care-team.webp"
              alt="Three clinicians reviewing a care plan together in a clinic workroom"
              fill
              sizes="(min-width: 768px) 56vw, 100vw"
              className="object-cover"
            />
          </div>
          <div data-reveal>
            <h2 className="max-w-lg text-[clamp(3.1rem,5vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.075em]">
              A team that shares context.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#4d6b68]">
              You should not have to retell your story at every appointment. Our clinicians coordinate around one shared picture of your health.
            </p>
            <a href="#book" className={`${focus} mt-8 inline-block whitespace-nowrap border border-[#a9c3bc] px-6 py-3 text-sm font-semibold transition-colors duration-200 hover:border-[#22685f] hover:bg-[#e7f1ed] active:translate-y-px`}>
              Find a clinician
            </a>
          </div>
        </div>
      </section>

      <section aria-label="Patient testimonials" className="border-y border-[#d6e2dd] bg-[#e7f1ed] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-[1.18fr_0.82fr]">
          <blockquote data-reveal className="bg-[#f4f8f5] p-7 md:p-10">
            <p className="max-w-3xl text-[clamp(2rem,3.7vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.06em]">
              “I left with answers, a plan, and the sense that my doctor had actually heard me.”
            </p>
            <footer className="mt-8 text-sm font-semibold text-[#4d6b68]">Northstar Health patient</footer>
          </blockquote>
          <blockquote data-reveal className="bg-[#d8e9e4] p-7 md:p-10">
            <p className="text-2xl font-semibold leading-[1.12] tracking-[-0.045em]">
              “The whole visit felt calm and clear. I knew what to do next before I left.”
            </p>
            <footer className="mt-8 text-sm font-semibold text-[#4d6b68]">Elena Ruiz, patient</footer>
          </blockquote>
        </div>
      </section>

      <section id="locations" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div data-reveal>
            <h2 className="max-w-4xl text-[clamp(3.1rem,5.8vw,6.3rem)] font-semibold leading-[0.92] tracking-[-0.075em]">
              Find care close to home.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#4d6b68]">
              Choose a neighborhood clinic, then let our team help with the details.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
            <div data-reveal className="relative min-h-[420px] overflow-hidden md:min-h-[560px]">
              <Image
                src="/images/websites/northstar-reception.webp"
                alt="A patient speaking with the front desk team inside a welcoming Northstar clinic"
                fill
                sizes="(min-width: 768px) 54vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-4">
              {locations.map((location) => (
                <article key={location.title} data-reveal className="flex flex-col justify-between bg-[#d8e9e4] p-7 md:p-9">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-[-0.055em]">{location.title}</h3>
                    <p className="mt-4 max-w-md text-sm leading-6 text-[#4d6b68]">{location.body}</p>
                  </div>
                  <a href="#book" className={`${focus} mt-8 w-fit whitespace-nowrap border border-[#9fbdb5] px-5 py-3 text-sm font-semibold transition-colors duration-200 hover:border-[#22685f] hover:bg-[#edf4f1] active:translate-y-px`}>
                    Book a visit
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d6e2dd] bg-[#edf4f1] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div data-reveal>
            <h2 className="max-w-3xl text-[clamp(3.1rem,5.5vw,6rem)] font-semibold leading-[0.92] tracking-[-0.075em]">
              Questions before you begin.
            </h2>
          </div>
          <div className="mt-12 max-w-4xl border-t border-[#b8d0c9]">
            {questions.map((item) => (
              <details key={item.question} data-reveal className="group border-b border-[#b8d0c9] py-5">
                <summary className={`${focus} relative cursor-pointer list-none pr-10 text-xl font-semibold tracking-[-0.035em] marker:hidden after:absolute after:right-1 after:top-1/2 after:-translate-y-1/2 after:text-2xl after:font-normal after:content-['+'] group-open:after:content-['-']`}>
                  {item.question}
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#4d6b68]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="bg-[#173d39] px-5 py-20 text-[#f7fbf9] md:px-8 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div data-reveal>
            <h2 className="max-w-3xl text-[clamp(3.3rem,6vw,6.6rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
              Make your first visit simple.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#c5dbd5]">
              Choose a clinician or ask our care team to help you find the right place to start.
            </p>
          </div>
          <a href="mailto:hello@example.com" className={`${focus} w-fit whitespace-nowrap bg-[#d8e9e4] px-6 py-3 text-sm font-semibold text-[#173d39] transition-colors duration-200 hover:bg-[#f7fbf9] active:translate-y-px`}>
            Book a visit
          </a>
        </div>
      </section>

      <footer className="border-t border-[#315c57] bg-[#173d39] px-5 py-6 text-[#c5dbd5] md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>Northstar Health</p>
          <Link href="/showcases" className={`${focus} font-semibold transition-colors duration-200 hover:text-[#f7fbf9]`}>
            Back to AVEC showcases
          </Link>
        </div>
      </footer>
    </main>
  );
}
