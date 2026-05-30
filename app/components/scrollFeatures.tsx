"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const agents = [
  {
    tag: "Support",
    name: "Customer Support Agent",
    desc: "Resolves tickets, answers FAQs, escalates edge cases, and syncs conversations back to your CRM without human intervention.",
    stats: [
      { val: "~3s", label: "Response time" },
      { val: "82%", label: "Auto-resolved" },
    ],
    log: [
      "RECV  ticket #4821 — billing inquiry",
      "MATCH knowledge_base[billing_faq]",
      "SEND  resolution → customer",
      "SYNC  CRM: ticket closed ✓",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    tag: "Automation",
    name: "Data Pipeline Agent",
    desc: "Fetches data from APIs, transforms and validates it, then routes it to your warehouse, dashboards, or downstream services on a schedule.",
    stats: [
      { val: "100k+", label: "Rows/hour" },
      { val: "0", label: "Manual steps" },
    ],
    log: [
      "PULL  salesforce → 3,240 records",
      "TRANSFORM  normalize + dedupe",
      "VALIDATE  schema check passed",
      "PUSH  → bigquery.sales_table ✓",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    tag: "Outreach",
    name: "Voice Call Agent",
    desc: "Makes and receives calls using natural-language understanding. Schedules appointments, qualifies leads, and logs outcomes automatically.",
    stats: [
      { val: "24/7", label: "Availability" },
      { val: "60%", label: "Cost vs. rep" },
    ],
    log: [
      "DIAL  +1 (212) 555-0182",
      "INTENT  appointment_scheduling",
      "CONFIRM  Wed 14:00 — Dr. Chen",
      "LOG  CRM: meeting booked ✓",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    tag: "Intelligence",
    name: "Research & Report Agent",
    desc: "Crawls sources, synthesizes findings, and delivers structured reports. Competitive analysis, market research, or internal audits on demand.",
    stats: [
      { val: "Hours", label: "Saved per run" },
      { val: "12+", label: "Sources fused" },
    ],
    log: [
      "QUERY  competitor pricing × 12 sources",
      "EXTRACT  structured data",
      "SYNTHESIZE  GPT-4o analysis",
      "DELIVER  report.pdf → inbox ✓",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
];

const N = agents.length;

export default function ScrollFeatures() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const seg = 1 / N;

  const op0 = useTransform(scrollYProgress, [0, seg * 0.2, seg * 0.85, seg], [0, 1, 1, 0]);
  const op1 = useTransform(scrollYProgress, [seg, seg * 1.2, seg * 1.85, seg * 2], [0, 1, 1, 0]);
  const op2 = useTransform(scrollYProgress, [seg * 2, seg * 2.2, seg * 2.85, seg * 3], [0, 1, 1, 0]);
  const op3 = useTransform(scrollYProgress, [seg * 3, seg * 3.2, 0.99, 1], [0, 1, 1, 1]);

  const y0 = useTransform(scrollYProgress, [0, seg * 0.2], [36, 0]);
  const y1 = useTransform(scrollYProgress, [seg, seg * 1.2], [36, 0]);
  const y2 = useTransform(scrollYProgress, [seg * 2, seg * 2.2], [36, 0]);
  const y3 = useTransform(scrollYProgress, [seg * 3, seg * 3.2], [36, 0]);

  const opacities = [op0, op1, op2, op3];
  const yOffsets = [y0, y1, y2, y3];

  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      id="agents"
      className="relative z-10 bg-[#060c16]"
      style={{ height: `${N * 100}vh` }}
    >
      <div className="sticky top-0 flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-16">
        <div className="container mx-auto px-6">
          <p className="mb-10 text-[11px] uppercase tracking-[0.22em] text-secondary">
            Managed AI Services
          </p>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative h-64">
              {agents.map((agent, i) => (
                <motion.div
                  key={agent.name}
                  style={{ opacity: opacities[i], y: yOffsets[i] }}
                  className="absolute inset-0"
                >
                  <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-secondary/60">
                    {agent.tag}
                  </p>
                  <h3 className="font-display mb-5 font-light leading-none text-[2.2rem] text-light md:text-[3rem]">
                    {agent.name}
                  </h3>
                  <p className="max-w-md text-[15px] leading-relaxed text-light/45">
                    {agent.desc}
                  </p>
                  <div className="mt-8 flex gap-10">
                    {agent.stats.map((s) => (
                      <div key={s.label}>
                        <div className="font-display text-[2rem] font-light leading-none text-secondary-soft">
                          {s.val}
                        </div>
                        <div className="mt-1.5 text-[11px] uppercase tracking-wider text-light/30">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative hidden min-h-72 overflow-hidden rounded-2xl border border-secondary/12 bg-[#080f1a] lg:block">
              <div className="flex items-center gap-1.5 border-b border-secondary/8 bg-primary/60 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-accent/50" />
                <span className="h-2 w-2 rounded-full bg-secondary/40" />
                <span className="h-2 w-2 rounded-full bg-secondary-soft/30" />
                <span className="ml-3 font-mono text-[11px] text-light/25">
                  avec-agent-runtime
                </span>
              </div>

              {agents.map((agent, i) => (
                <motion.div
                  key={agent.name}
                  style={{ opacity: opacities[i] }}
                  className="absolute inset-0 top-10 flex flex-col justify-between p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg border border-secondary/20 bg-secondary/8 p-2 text-secondary-soft">
                      {agent.icon}
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-light/25">{agent.tag}</p>
                      <p className="text-sm font-medium text-light/70">{agent.name}</p>
                    </div>
                  </div>

                  <div className="space-y-2 font-mono text-[12px]">
                    {agent.log.map((line, li) => (
                      <p key={li} className={li === agent.log.length - 1 ? "text-secondary-soft" : "text-light/35"}>
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <div className="h-px bg-secondary/10">
              <motion.div className="h-full bg-secondary/60" style={{ width: barWidth }} />
            </div>
            <div className="mt-3 flex justify-between">
              {agents.map((a) => (
                <span key={a.tag} className="text-[10px] uppercase tracking-widest text-light/20">
                  {a.tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
