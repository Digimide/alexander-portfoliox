import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

const timeline = [
  {
    year: "2023 — Present",
    role: "Independent Software Consultant",
    org: "Self-employed",
    body: "Partnering with funded startups and growth-stage teams on platform architecture, AI integration, and 0→1 product engineering.",
    tag: "Freelance",
  },
  {
    year: "2021 — 2023",
    role: "Staff Engineer",
    org: "Orbital Systems",
    body: "Led the migration to an event-driven architecture serving 40M MAU. Mentored a team of 12 engineers.",
    tag: "Role",
  },
  {
    year: "2019 — 2021",
    role: "Senior Full-Stack Engineer",
    org: "Helix Labs",
    body: "Shipped the company's flagship analytics SDK now embedded in 6,000+ production applications.",
    tag: "Role",
  },
  {
    year: "2018",
    role: "AWS Solutions Architect — Professional",
    org: "Certification",
    body: "Awarded for distributed-system design and large-scale infrastructure expertise.",
    tag: "Cert",
  },
  {
    year: "2016 — 2019",
    role: "Software Engineer",
    org: "Northwind",
    body: "Joined as employee #11. Built the original billing platform processing $40M+ annually.",
    tag: "Role",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">Journey</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            A decade of compounding craft.
          </h2>
        </div>

        <ol className="relative mt-16 space-y-10 border-l border-foreground/10 pl-8 sm:pl-12">
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          {timeline.map((t, i) => (
            <motion.li
              key={t.role}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[42px] sm:-left-[58px] grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                {t.tag === "Cert" ? (
                  <Award className="h-4 w-4" />
                ) : (
                  <Briefcase className="h-4 w-4" />
                )}
              </span>
              <div className="glass rounded-2xl p-6 shadow-card-soft">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {t.role}
                  </h3>
                  <span className="text-xs text-muted-foreground">{t.year}</span>
                </div>
                <p className="mt-1 text-sm text-primary">{t.org}</p>
                <p className="mt-3 text-sm text-muted-foreground">{t.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
