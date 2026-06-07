import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      {/* gradient & grid backdrops */}
      <div className="absolute inset-0 -z-10 bg-hero-glow" aria-hidden />
      <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />

      {/* floating orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute right-[8%] top-[40%] h-80 w-80 rounded-full bg-accent/15 blur-3xl animate-float-slow" />
        <div className="absolute left-[40%] bottom-[10%] h-64 w-64 rounded-full bg-primary-glow/15 blur-3xl animate-float" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>Available for select engagements · Q3 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="font-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-[5.25rem] lg:leading-[1.05]"
        >
          <span className="text-foreground">I build </span>
          <span className="text-gradient">high-performance software</span>
          <span className="text-foreground"> that helps businesses scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-8 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          I'm Alexander — a software engineer and digital product builder. For the past
          decade I've partnered with startups and enterprise teams to ship resilient,
          beautiful products that move metrics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            View my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
          >
            Book a call
          </a>
        </motion.div>

        {/* marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mx-auto mt-20 max-w-3xl"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by teams shipping at scale
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-muted-foreground/70">
            {["Northwind", "Helix Labs", "Vantage", "Orbital", "Quanta", "Meridian"].map(
              (b) => (
                <span key={b} className="tracking-tight">
                  {b}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
