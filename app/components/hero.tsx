"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import DotGrid from "./ui/DotGrid";

export default function Hero() {
  const { scrollY } = useScroll();

  const contentOpacity = useTransform(scrollY, [0, 380], [1, 0]);
  const contentY = useTransform(scrollY, [0, 380], [0, -72]);

  const blobScale = useTransform(scrollY, [0, 600], [1, 1.35]);
  const blobOpacity = useTransform(scrollY, [0, 500], [0.85, 0]);

  return (
    <section className="sticky top-0 z-0 flex min-h-[100dvh] items-center overflow-hidden text-light">
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#2F293A"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
      <motion.div
        style={{ scale: blobScale, opacity: blobOpacity }}
        className="pointer-events-none absolute right-[-10%] top-[-20%] h-[900px] w-[900px] rounded-full bg-secondary/15 blur-[130px]"
      />
      <motion.div
        style={{ scale: blobScale, opacity: blobOpacity }}
        className="pointer-events-none absolute left-[-6%] top-[30%] h-[700px] w-[700px] rounded-full bg-secondary/5 blur-[110px]"
      />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="container relative mx-auto px-6 pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display text-[4rem] font-light leading-[0.95] tracking-tight text-light md:text-[8rem] lg:text-[11rem]">
            AVEC Design.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-light/50 md:text-lg">
            We turn brand strategy into designed experiences, custom digital
            products, and promotion systems that keep growing after launch.
          </p>

          <a
            href="#services"
            className="mt-10 inline-block rounded bg-secondary px-8 py-3 text-sm font-semibold text-primary transition hover:bg-secondary-soft active:scale-[0.98]"
          >
            Our Services
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
