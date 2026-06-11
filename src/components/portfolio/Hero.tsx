import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { CV_URL, CV_FILENAME } from "@/lib/contact";

export function Hero() {
  const stats = [
    { v: "4+", l: "Years\nExperience" },
    { v: "30+", l: "Projects\nDelivered" },
    { v: "30%", l: "Faster Load\nSpeeds" },
    { v: "100%", l: "On-Time\nDelivery" },
  ];

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32"
    >
      {/* Soft ambient refractions */}
      <div
        className="pointer-events-none absolute -top-32 -left-20 -z-10 h-[40vh] w-[50vw] rounded-full bg-foreground/[0.04] blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-16 -z-10 h-[30vh] w-[40vw] rounded-full bg-foreground/[0.03] blur-[100px]"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          Available for new projects
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.02 }}
          className="mb-4 text-sm font-medium tracking-wide text-muted-foreground"
        >
          Ayomide Alexander Abiola
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[5rem] lg:leading-[1.05]"
        >
          <span className="text-foreground">Full-Stack Developer building </span>
          <span className="text-foreground/50">fast, scalable digital products.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-8 max-w-2xl text-balance text-sm text-muted-foreground sm:text-base"
        >
          I help startups, founders, and business owners transform ideas into modern web
          applications using React, Next.js, Node.js, and cutting-edge technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-10 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
        >
          <a
            href="#projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-foreground px-6 py-4 text-sm font-semibold text-background shadow-glow transition-transform active:scale-[0.98] sm:w-auto"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={CV_URL}
            download={CV_FILENAME}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl glass px-6 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10 active:scale-[0.98] sm:w-auto"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.v + s.l}
              className="glass rounded-[2rem] p-5 text-left"
            >
              <div className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {s.v}
              </div>
              <div className="mt-1 whitespace-pre-line text-[10px] font-semibold uppercase tracking-wider leading-tight text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
