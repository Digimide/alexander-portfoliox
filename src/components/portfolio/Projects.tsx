import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import saas from "@/assets/project-saas.jpg";
import fintech from "@/assets/project-fintech.jpg";
import ai from "@/assets/project-ai.jpg";

const projects = [
  {
    name: "Northwind Analytics",
    image: saas,
    description:
      "A real-time analytics platform processing 2B+ events per month, with sub-100ms query latency.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "ClickHouse", "AWS"],
    results: ["+38% retention", "12× faster queries", "$2.4M ARR in year one"],
  },
  {
    name: "Vantage Wealth",
    image: fintech,
    description:
      "Mobile-first wealth management app with automated portfolio rebalancing and instant ACH.",
    tech: ["React Native", "Node.js", "Plaid", "Stripe", "GCP"],
    results: ["120k+ active users", "SOC 2 compliant", "App Store Editor's Choice"],
  },
  {
    name: "Helix AI Copilot",
    image: ai,
    description:
      "An AI assistant for engineering teams — retrieval-augmented, multi-tenant, fully observable.",
    tech: ["Python", "FastAPI", "OpenAI", "pgvector", "Docker"],
    results: ["-46% support tickets", "9.4/10 CSAT", "Acquired Q4 2025"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">
              Featured work
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Products that ship and scale.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A selection of recent engagements — each one held to the same bar: thoughtful
            design, ruthless performance, measurable outcomes.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl glass shadow-card-soft"
            >
              <div className="grid gap-0 lg:grid-cols-12">
                <div className="relative overflow-hidden lg:col-span-7">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <img
                    src={p.image}
                    alt={`${p.name} product preview`}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between gap-8 p-8 sm:p-10 lg:col-span-5">
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                      {p.name}
                    </h3>
                    <p className="mt-4 text-muted-foreground">{p.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-foreground/10 bg-foreground/[0.04] px-3 py-1 text-xs text-muted-foreground"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-6 space-y-2 text-sm">
                      {p.results.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-foreground/90">
                          <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
                    >
                      Live demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/[0.04] px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
