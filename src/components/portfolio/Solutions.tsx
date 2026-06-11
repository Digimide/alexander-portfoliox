import { motion } from "framer-motion";
import {
  Globe2,
  Smartphone,
  Server,
  Cloud,
  Sparkles,
  Gauge,
} from "lucide-react";

const solutions = [
  {
    icon: Globe2,
    title: "Web Applications",
    body: "Custom web apps with React, Next.js, and Vue — fast, accessible, and built to scale with your product roadmap.",
    tags: ["SPA & SSR", "Design systems", "API integration"],
  },
  {
    icon: Smartphone,
    title: "Mobile Experiences",
    body: "Cross-platform iOS and Android apps with polished UX, offline support, and store-ready releases.",
    tags: ["React Native", "Push & offline", "App Store CI"],
  },
  {
    icon: Server,
    title: "Backend Systems",
    body: "APIs, microservices, and data layers with Node.js — auth, queues, caching, and observability included.",
    tags: ["REST & GraphQL", "PostgreSQL", "Microservices"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    body: "AWS and Vercel architecture with IaC, cost control, and CI/CD pipelines your team can run with confidence.",
    tags: ["Terraform", "Docker", "Monitoring"],
  },
  {
    icon: Sparkles,
    title: "AI Integrations",
    body: "LLMs, NLP, and automation embedded in your product — with secure data handling and production-grade workflows.",
    tags: ["LLM integration", "RAG", "Automation"],
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    body: "Audits and refactoring to improve Core Web Vitals, cut cloud spend, and pay down technical debt safely.",
    tags: ["Core Web Vitals", "Profiling", "Caching"],
  },
];

export function Solutions() {
  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            What I Do
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Services & Solutions
          </h2>
          <p className="mt-5 text-muted-foreground">
            I unite product thinking and engineering craft — web and mobile products, cloud
            infrastructure, AI integrations, and performance work built for the long haul.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group rounded-[2rem] glass p-7 transition-all hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl glass text-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-foreground/10 bg-foreground/[0.04] px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
