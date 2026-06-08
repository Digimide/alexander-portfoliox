import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import unigig from "@/assets/project-unigig.png";
import carecompass from "@/assets/project-carecompass.png";
import carlyfresh from "@/assets/project-carlyfresh.png";

const projects = [
  {
    name: "UniGig",
    image: unigig,
    url: "https://unigig.site",
    description:
      "A student opportunity and gig platform connecting students with internships, freelance gigs, and campus opportunities.",
    tech: ["React", "Node.js", "MongoDB"],
    features: [
      "Authentication system",
      "Role-based access control",
      "Student dashboard",
      "Opportunity application workflow",
      "Scalable database structure",
    ],
  },
  {
    name: "Care Compass",
    image: carecompass,
    url: "https://care-compass-ten.vercel.app/",
    description:
      "A health awareness platform designed to provide verified health information and educational resources.",
    tech: ["Next.js", "Node.js", "MongoDB", "AI Integrations"],
    features: [
      "Content management system",
      "Search functionality",
      "Mobile-first design",
      "Accessibility-focused experience",
    ],
  },
  {
    name: "Carly Fresh",
    image: carlyfresh,
    url: "https://www.carlyfresh.com/",
    description:
      "A modern business website focused on customer engagement, online presence, and conversion optimization.",
    tech: ["Next.js", "Tailwind CSS", "SEO"],
    features: [
      "Modern responsive design",
      "Optimized performance",
      "SEO-friendly structure",
      "Conversion-focused user experience",
    ],
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
            A selection of recent engagements — each held to the same bar: thoughtful
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
                    alt={`${p.name} — live website screenshot`}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10 lg:col-span-5">
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
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-foreground/90">
                          <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
                    >
                      Visit live site
                      <ArrowUpRight className="h-4 w-4" />
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
