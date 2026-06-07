import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Plug,
  Brain,
  Smartphone,
  Compass,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom web development",
    body: "Bespoke web platforms built on a modern, type-safe stack — engineered to last.",
  },
  {
    icon: Layers,
    title: "SaaS development",
    body: "End-to-end product engineering: auth, billing, multi-tenancy, analytics, and beyond.",
  },
  {
    icon: Plug,
    title: "API development",
    body: "Resilient, well-documented APIs and integrations that other teams love to build on.",
  },
  {
    icon: Brain,
    title: "AI integrations",
    body: "Production-ready LLM features — retrieval, evals, observability, and guardrails.",
  },
  {
    icon: Smartphone,
    title: "Mobile app development",
    body: "Cross-platform mobile apps with native polish, built with React Native or Flutter.",
  },
  {
    icon: Compass,
    title: "Technical consulting",
    body: "Architecture reviews, team coaching, and strategic guidance for engineering leaders.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">Services</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            How I can help.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Whether you're shipping v1 or scaling to your next inflection point — I plug in
            and move the needle.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <s.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
              >
                Get in touch <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
