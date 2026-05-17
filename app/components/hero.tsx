"use client";
import { useState, useEffect } from "react";

const terminalLines = [
  "> Initializing agent: CustomerSupport_v2...",
  "> Loading knowledge base [████████████] 100%",
  "> Connecting to CRM integration...",
  "> Agent online — handling 847 conversations/hr",
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 950);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  return (
    <section className="relative overflow-hidden py-28 text-light">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-80" />
      <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[700px] w-[700px] rounded-full bg-secondary/[0.12] blur-[120px]" />
      <div className="pointer-events-none absolute left-[-1%] top-[30%] h-[500px] w-[500px] rounded-full bg-surface-soft/60 blur-[100px]" />

      <div className="container relative mx-auto px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start">
          {/* Left: copy */}
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-secondary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary-soft">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
              Managed AI Services
            </p>

            <h1 className="text-[3.5rem] font-bold leading-[1.05] tracking-tight text-light md:text-[5.5rem]">
              AVEC
              <br />
              <span className="text-secondary-soft">Design</span>
            </h1>

            <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-light/60 md:text-lg">
              We design, build, and operate AI agents and automation systems
              that work for your business — 24/7, at scale, without the
              overhead.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className="inline-block rounded-lg bg-secondary px-8 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-primary shadow-[0_8px_24px_-10px_rgba(192,138,66,0.55)] transition hover:bg-secondary-soft"
              >
                Deploy Your First Agent
              </a>
              <a
                href="#services"
                className="inline-block rounded-lg border border-light/10 px-8 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-light/60 transition hover:border-secondary/40 hover:text-secondary-soft"
              >
                View Services
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 flex justify-center gap-10 border-t border-secondary/10 pt-8 lg:justify-start">
              {[
                { val: "12+", label: "Agents Deployed" },
                { val: "50k+", label: "Automation Runs" },
                { val: "98%", label: "Uptime SLA" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-secondary-soft">
                    {s.val}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-light/35">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: terminal */}
          <div className="w-full max-w-md flex-none lg:mt-2">
            <div className="overflow-hidden rounded-xl border border-secondary/12 bg-surface shadow-[0_0_80px_-24px_rgba(192,138,66,0.2),0_2px_0_0_rgba(192,138,66,0.08)]">
              <div className="flex items-center gap-1.5 border-b border-secondary/10 bg-primary/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary-soft/40" />
                <span className="ml-3 font-mono text-[11px] text-light/30">
                  avec-agent-runtime v2.4.1
                </span>
              </div>
              <div className="min-h-[200px] space-y-3 p-5 font-mono text-[13px]">
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <p
                    key={i}
                    className={
                      i === visibleLines - 1
                        ? "terminal-cursor text-secondary-soft"
                        : "text-light/45"
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
