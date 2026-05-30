"use client";

import { motion, useReducedMotion } from "framer-motion";

const capabilities = [
  {
    category: "Intelligence",
    summary: "Applied AI systems for real operations.",
    items: ["Voice AI", "Agentic workflows", "RAG pipelines", "Knowledge systems", "Model evaluation"],
    className: "md:col-span-7",
  },
  {
    category: "Product",
    summary: "Digital tools shaped around the workflow.",
    items: ["Next.js", "React", "TypeScript", "Web applications", "Internal tools"],
    className: "md:col-span-5",
  },
  {
    category: "Infrastructure",
    summary: "Foundations that stay reliable after launch.",
    items: ["Node.js", "Python", "PostgreSQL", "Cloud deployment", "CI/CD"],
    className: "md:col-span-5",
  },
  {
    category: "Experience",
    summary: "Interfaces that make complex systems easier to use.",
    items: ["Interface design", "Brand systems", "Motion design", "Responsive web", "Figma"],
    className: "md:col-span-7",
  },
  {
    category: "Growth",
    summary: "Promotion connected to the product and the next action.",
    items: ["Paid search", "Social campaigns", "SEO", "Analytics", "Email flows"],
    className: "md:col-span-12",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function HyperframeSkills() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative z-10 overflow-hidden bg-[#060c16] py-24 text-light md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-18%] right-[-8%] h-[520px] w-[520px] rounded-full bg-secondary/5 blur-[140px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease }}
            className="lg:sticky lg:top-28 lg:h-fit"
          >
            <h2 className="font-display text-[3.2rem] font-light leading-[0.94] text-light md:text-[5.2rem]">
              The full stack,
              <br />
              <em className="inline-block pb-1 leading-[1.1] text-secondary-soft">under one roof.</em>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-light/55">
              The tools change with the problem. The standard stays the same: one connected team, accountable for the outcome.
            </p>
            <div className="mt-9 max-w-xs border-t border-secondary/15 pt-5">
              <p className="text-[13px] leading-6 text-light/40">
                Strategy, implementation, and ongoing operation stay in the same conversation.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[1.4rem] border border-secondary/12 bg-secondary/12 md:grid-cols-12">
            {capabilities.map((capability, index) => (
              <motion.article
                key={capability.category}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.06, ease }}
                className={`group min-h-[250px] bg-[#0a1624] p-6 transition-colors duration-300 hover:bg-[#0c1a2a] md:p-7 ${capability.className}`}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <h3 className="font-display text-[2.25rem] font-light leading-none text-light">
                      {capability.category}
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-light/50">
                      {capability.summary}
                    </p>
                  </div>
                  <ul className="mt-10 flex flex-wrap gap-x-4 gap-y-2">
                    {capability.items.map((item) => (
                      <li
                        key={item}
                        className="text-[11px] font-semibold uppercase tracking-[0.12em] text-secondary/70 transition-colors duration-200 group-hover:text-secondary-soft"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
