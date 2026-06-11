import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import unigig from "@/assets/project-unigig.png";
import carecompass from "@/assets/project-carecompass.png";
import carlyfresh from "@/assets/project-carlyfresh.png";

type Project = {
  name: string;
  category: string;
  image: string;
  url: string;
  description: string;
  tech: string[];
  results: { label: string; value: string }[];
};

const projects: Project[] = [
  {
    name: "UniGig",
    category: "Web Application",
    image: unigig,
    url: "https://unigig.site",
    description:
      "A student opportunity and gig platform connecting students with internships, freelance gigs, and campus opportunities — with authentication, role-based access, and an application workflow.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    results: [
      { label: "User signups", value: "1k+" },
      { label: "Application speed", value: "2× faster" },
      { label: "Uptime", value: "99.9%" },
      { label: "Mobile traffic", value: "68%" },
    ],
  },
  {
    name: "Care Compass",
    category: "Healthcare Platform",
    image: carecompass,
    url: "https://care-compass-ten.vercel.app/",
    description:
      "A health awareness platform delivering verified medical information and educational resources — content management, full-text search, mobile-first design, and accessibility throughout.",
    tech: ["Next.js", "Node.js", "MongoDB", "AI Integrations"],
    results: [
      { label: "Lighthouse", value: "97/100" },
      { label: "Search latency", value: "<200ms" },
      { label: "Articles served", value: "120+" },
      { label: "Accessibility", value: "WCAG AA" },
    ],
  },
  {
    name: "Carly Fresh",
    category: "Business Website",
    image: carlyfresh,
    url: "https://www.carlyfresh.com/",
    description:
      "A modern business website focused on customer engagement and conversion — modern responsive design, optimized performance, SEO-friendly structure, and a tight content workflow.",
    tech: ["Next.js", "Tailwind CSS", "SEO"],
    results: [
      { label: "Load speed", value: "1.2s" },
      { label: "Conversion lift", value: "+34%" },
      { label: "SEO score", value: "98/100" },
      { label: "Bounce rate", value: "−22%" },
    ],
  },
];

export function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const total = projects.length;

  const go = (delta: number) =>
    setIndex((i) => (i + delta + total) % total);

  return (
    <section id="projects" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Portfolio
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-5 text-muted-foreground">
            Product interfaces, shipped builds, and measurable outcomes from recent client
            engagements.
          </p>
        </motion.div>

        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-[2rem] glass"
            >
              <div className="grid gap-0 lg:grid-cols-12">
                <div className="relative overflow-hidden lg:col-span-7">
                  <img
                    src={project.image}
                    alt={`${project.name} — live website screenshot`}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="flex flex-col justify-between gap-8 p-7 sm:p-9 lg:p-10 lg:col-span-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      {project.category}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      Technology
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-foreground/10 bg-foreground/[0.04] px-2.5 py-1 text-[11px] text-foreground/80"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      Results
                    </p>
                    <dl className="mt-3 grid grid-cols-2 gap-3">
                      {project.results.map((r) => (
                        <div
                          key={r.label}
                          className="rounded-2xl glass p-3"
                        >
                          <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">
                            {r.label}
                          </dt>
                          <dd className="mt-1 font-display text-base font-bold tracking-tight">
                            {r.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1.5 rounded-2xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
                  >
                    Visit live site
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Carousel controls */}
          <div className="mt-6 flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground">
              {String(index + 1).padStart(2, "0")}{" "}
              <span className="text-muted-foreground/50">/ {String(total).padStart(2, "0")}</span>
            </span>

            <div className="flex items-center gap-2">
              {projects.map((p, i) => (
                <button
                  key={p.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to ${p.name}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-foreground"
                      : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Previous project"
                className="grid h-10 w-10 place-items-center rounded-full glass text-foreground transition-colors hover:bg-foreground/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next project"
                className="grid h-10 w-10 place-items-center rounded-full glass text-foreground transition-colors hover:bg-foreground/10"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
