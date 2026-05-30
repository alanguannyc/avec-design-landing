"use client";

import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  {
    title: "Fewer handoffs",
    body: "Strategy, design, development, and promotion stay with one accountable team.",
  },
  {
    title: "Less manual work",
    body: "Repeatable tasks become reliable systems with clear ownership and room for review.",
  },
  {
    title: "Built to adapt",
    body: "Your tools can evolve as the workflow changes, without starting from zero each time.",
  },
];

const rhythm = [
  {
    title: "Understand",
    body: "Find the friction, clarify the goal, and choose the right level of intervention.",
  },
  {
    title: "Build",
    body: "Design and ship the system in focused increments that can be tested early.",
  },
  {
    title: "Operate",
    body: "Measure what matters, maintain the foundation, and improve the parts that earn it.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function StatsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative z-10 overflow-hidden bg-[#080f1a] py-24 text-light md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease }}
          className="max-w-3xl"
        >
          <h2 className="font-display text-[3rem] font-light leading-[0.96] text-light md:text-[5rem]">
            A launch is only the
            <br />
            <em className="inline-block pb-1 leading-[1.1] text-secondary-soft">starting point.</em>
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-light/55">
            The work should make the business easier to run, then keep improving after it reaches the real world.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 border-y border-secondary/15 md:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.07, ease }}
              className="border-b border-secondary/12 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <h3 className="font-display text-[2rem] font-light leading-none text-secondary-soft">
                {outcome.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-6 text-light/50">
                {outcome.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="font-display text-[2.35rem] font-light leading-[0.98] text-light md:text-[3.2rem]">
              From first conversation to daily operation.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-3">
            {rhythm.map((item, index) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.07, ease }}
              >
                <h3 className="text-sm font-semibold text-light/90">{item.title}</h3>
                <p className="mt-3 text-[13px] leading-6 text-light/45">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
