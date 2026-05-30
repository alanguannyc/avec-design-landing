"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Project = {
  title: string;
  img?: string;
  href?: string;
  url?: string;
  logo?: string;
  desc: string;
  tag: string;
  services: string[];
};

const projects: Project[] = [
  {
    title: "Student Information System",
    img: "/images/student-information-system.png",
    desc: "A purpose-built portal that makes student records, grades, and attendance clear and manageable in one place.",
    tag: "Web Application",
    services: ["Product Design", "Custom Development", "Data Systems"],
  },
  {
    title: "AI SEO Brand Monitor",
    img: "/images/ai-seo-brand-monitoring-agent.png",
    desc: "A Gemini-powered SEO agent that monitors brand visibility, surfaces competitor content gaps, and prioritizes the next actions for organic growth.",
    tag: "SEO Agent",
    services: ["Gemini AI", "Brand Monitoring", "SEO Intelligence"],
  },
  {
    title: "Hotel Association of New York City",
    href: "https://hanyc.org",
    url: "hanyc.org",
    logo: "https://hanyc.org/wp-content/uploads/2018/09/01_PMS_Logo_HANYC.png",
    desc: "Website management, performance optimization, and content operations for New York City's premier hotel industry association.",
    tag: "Managed Website",
    services: ["Website Management", "Performance", "Content Operations"],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

function ProjectNumber({ number }: { number: string }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary/60">
      Project / {number}
    </span>
  );
}

function ServiceList({ services }: { services: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-light/35">
      {services.map((service, index) => (
        <li key={service} className="flex items-center gap-3">
          {index > 0 && <span className="h-1 w-1 rounded-full bg-secondary/60" />}
          <span>{service}</span>
        </li>
      ))}
    </ul>
  );
}

function ScreenshotCard({
  project,
  number,
  className,
}: {
  project: Project;
  number: string;
  className: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease }}
      className={`group relative isolate overflow-hidden rounded-[1.4rem] border border-secondary/15 bg-[#0b1725] ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={project.img!}
          alt={`${project.title} interface preview`}
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050b13] via-[#06101b]/78 to-[#06101b]/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06101b]/50 via-transparent to-transparent" />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 md:p-7">
        <ProjectNumber number={number} />
        <span className="rounded-full border border-secondary/25 bg-[#06101b]/65 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-secondary-soft backdrop-blur-md">
          {project.tag}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 lg:p-8">
        <ServiceList services={project.services} />
        <h3 className="mt-4 max-w-xl font-display text-[2.05rem] font-light leading-[0.96] text-light md:text-[3rem]">
          {project.title}
        </h3>
        <p className="mt-4 max-w-lg text-[13px] leading-6 text-light/60 md:text-sm">
          {project.desc}
        </p>
      </div>
    </motion.article>
  );
}

function ManagedWebsiteCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.title} website`}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: 0.08, ease }}
      className="group relative grid min-h-[320px] cursor-pointer overflow-hidden rounded-[1.4rem] border border-secondary/15 bg-[#0b1725] transition-colors duration-300 hover:border-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary lg:grid-cols-[1.25fr_0.75fr]"
    >
      <div className="hero-grid relative flex min-h-[230px] items-center justify-center overflow-hidden border-b border-secondary/10 bg-[#091522] lg:min-h-full lg:border-b-0 lg:border-r">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,138,66,0.14),transparent_60%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
        <Image
          src={project.logo!}
          alt={`${project.title} logo`}
          width={320}
          height={64}
          unoptimized
          className="relative max-h-16 w-auto max-w-[240px] object-contain opacity-60 brightness-0 invert filter transition-all duration-500 group-hover:opacity-90 md:max-w-[320px]"
        />
        <span className="absolute left-5 top-5 md:left-7 md:top-7">
          <ProjectNumber number="03" />
        </span>
      </div>

      <div className="relative flex flex-col justify-between p-5 md:p-7 lg:p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-secondary-soft">
            {project.tag}
          </span>
          <span className="flex items-center gap-2 font-mono text-[10px] text-secondary/70 transition-colors group-hover:text-secondary-soft">
            {project.url}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4} className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M4 12 12 4M6.5 4H12v5.5" />
            </svg>
          </span>
        </div>

        <div className="mt-14">
          <h3 className="max-w-md font-display text-[2rem] font-light leading-[0.98] text-light md:text-[2.7rem]">
            {project.title}
          </h3>
          <p className="mt-4 max-w-lg text-[13px] leading-6 text-light/60 md:text-sm">
            {project.desc}
          </p>
          <div className="mt-5">
            <ServiceList services={project.services} />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative z-10 overflow-hidden bg-[#080f1a] py-24 text-light md:py-32">
      <div className="pointer-events-none absolute left-[-10%] top-[5%] h-[420px] w-[420px] rounded-full bg-secondary/5 blur-[120px]" />
      <div className="container relative mx-auto px-6">
        <div className="mb-12 grid gap-7 border-t border-secondary/20 pt-6 md:mb-16 md:grid-cols-[1fr_320px] md:items-end">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-secondary">
              Selected Work / 03
            </p>
            <h2 className="max-w-2xl font-display text-[3.25rem] font-light leading-[0.9] text-light md:text-[5.5rem]">
              What we&apos;ve
              <br />
              <em className="text-secondary-soft">built.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-light/50">
            Systems designed around real operations. From product strategy to ongoing management, each engagement is built to keep working.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          <ScreenshotCard project={projects[0]} number="01" className="min-h-[520px] lg:col-span-2 lg:min-h-[650px]" />
          <ScreenshotCard project={projects[1]} number="02" className="min-h-[520px] lg:col-span-1 lg:min-h-[650px]" />
          <div className="lg:col-span-3">
            <ManagedWebsiteCard project={projects[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
