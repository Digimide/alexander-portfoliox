import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32"
    >
      <div className="absolute inset-0 -z-10 bg-hero-glow" aria-hidden />
      <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />

      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute right-[8%] top-[40%] h-80 w-80 rounded-full bg-accent/15 blur-3xl animate-float-slow" />
        <div className="absolute left-[40%] bottom-[10%] h-64 w-64 rounded-full bg-primary-glow/15 blur-3xl animate-float" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>Available worldwide · Open to new projects</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.02 }}
          className="mb-4 text-sm font-medium tracking-wide text-primary"
        >
          Ayomide Alexander Abiola
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[5rem] lg:leading-[1.05]"
        >
          <span className="text-foreground">Full-Stack Developer building </span>
          <span className="text-gradient">fast, scalable</span>
          <span className="text-foreground"> digital products.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-8 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          I help startups, founders, and business owners transform ideas into modern web
          applications and websites using React, Next.js, Node.js, and cutting-edge
          technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 sm:px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-5 sm:px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
          >
            <MessageCircle className="h-4 w-4" />
            Book a Discovery Call
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { v: "4+", l: "Years experience" },
            { v: "30+", l: "Projects delivered" },
            { v: "30%", l: "Faster load speeds" },
            { v: "100%", l: "On-time delivery" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl px-4 py-4 text-left">
              <div className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {s.v}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-wide text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
