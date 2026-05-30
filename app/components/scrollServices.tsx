"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    title: "AI systems",
    body: "Agents and automations that handle repeatable work, connect your tools, and keep your team focused on decisions.",
    detail: "Voice agents, workflow automation, knowledge systems",
    className: "md:col-span-7 md:row-span-2",
    featured: true,
  },
  {
    title: "Digital products",
    body: "Custom applications shaped around the way your business actually operates.",
    detail: "Web apps, portals, internal tools",
    className: "md:col-span-5",
  },
  {
    title: "Websites and brand",
    body: "Clear, fast digital experiences that make the right first impression and stay healthy after launch.",
    detail: "Design, development, ongoing management",
    className: "md:col-span-5",
  },
  {
    title: "Growth systems",
    body: "Promotion that connects the message, the channel, and the next action into one measurable system.",
    detail: "Paid search, social, email, analytics",
    className: "md:col-span-12",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ScrollServices() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="relative z-10 overflow-hidden bg-[#060c16] py-24 text-light md:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12%] top-[18%] h-[540px] w-[540px] rounded-full bg-secondary/5 blur-[140px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease }}
          className="mb-12 max-w-3xl md:mb-16"
        >
          <h2 className="font-display text-[3.2rem] font-light leading-[0.94] text-light md:text-[5.6rem]">
            One team for the
            <br />
            <em className="inline-block pb-1 leading-[1.1] text-secondary-soft">whole system.</em>
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-light/55">
            Strategy, design, development, automation, and promotion stay connected from the first brief through daily operation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: reduceMotion ? 0 : index * 0.06, ease }}
              className={`group relative isolate min-h-[250px] overflow-hidden rounded-[1.4rem] border border-secondary/12 bg-[#0a1624] p-6 transition-colors duration-300 hover:border-secondary/30 md:p-8 ${service.className} ${
                service.featured ? "md:min-h-[560px]" : ""
              }`}
            >
              {service.featured && (
                <>
                  <div className="absolute inset-x-0 bottom-0 h-[62%] overflow-hidden">
                    <Image
                      src="/images/customApplication.png"
                      alt="Custom application interface preview"
                      fill
                      sizes="(min-width: 768px) 58vw, 100vw"
                      className="object-cover object-top opacity-55 transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a1624] via-[#0a1624]/88 to-[#07111c]/45" />
                </>
              )}

              {!service.featured && (
                <div className="pointer-events-none absolute -bottom-20 -right-16 h-48 w-48 rounded-full border border-secondary/10 transition-transform duration-500 motion-safe:group-hover:-translate-x-3 motion-safe:group-hover:-translate-y-3" />
              )}

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <h3 className="font-display text-[2.25rem] font-light leading-none text-light md:text-[2.8rem]">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-light/55">
                    {service.body}
                  </p>
                </div>
                <p className="mt-12 max-w-sm text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary/70">
                  {service.detail}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.18 }}
          className="mt-8 flex flex-col gap-4 border-t border-secondary/12 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[13px] leading-6 text-light/40">
            Every engagement is scoped around the operation, not a preset package.
          </p>
          <a
            href="#work"
            className="w-fit touch-manipulation text-[13px] font-semibold text-secondary-soft underline decoration-secondary/35 underline-offset-4 transition-colors duration-200 hover:text-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            See selected work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
