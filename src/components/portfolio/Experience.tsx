import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

const timeline = [
  {
    year: "2022 — Present",
    role: "Freelance Software Developer",
    org: "Self-employed",
    tag: "Role",
    highlights: [
      "Developed and deployed 8+ responsive web applications.",
      "Improved website performance by up to 30%.",
      "Integrated payment gateways and authentication systems.",
      "Converted UI/UX designs into production-ready applications.",
      "Maintained 100% on-time project delivery.",
    ],
  },
  {
    year: "2024 — Present",
    role: "Founder & Technical Lead",
    org: "Digimide",
    tag: "Role",
    highlights: [
      "Built and launched an e-commerce platform.",
      "Improved conversion rates through UX optimization.",
      "Managed hosting, deployment, maintenance, and infrastructure.",
      "Led technical product development and implementation.",
    ],
  },
  {
    year: "Feb 2024 — Sep 2024",
    role: "Software Developer",
    org: "Klassen (klassen.eu)",
    tag: "Role",
    highlights: [
      "Integrated automotive product data.",
      "Improved product upload workflows.",
      "Fixed frontend issues and improved user experience.",
      "Maintained responsive design consistency.",
    ],
  },
];

const certifications = [
  "JavaScript Algorithms and Data Structures — freeCodeCamp",
  "Frontend Development with React — Coursera",
  "Node.js, Express & MongoDB Bootcamp — Udemy",
  "Full-Stack Web Development Certification — Meta",
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">Journey</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Experience & Certifications
          </h2>
        </div>

        <ol className="relative mt-16 space-y-10 border-l border-foreground/10 pl-8 sm:pl-12">
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          {timeline.map((t, i) => (
            <motion.li
              key={t.role + t.org}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[42px] sm:-left-[58px] grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                <Briefcase className="h-4 w-4" />
              </span>
              <div className="glass rounded-2xl p-6 shadow-card-soft">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {t.role}
                  </h3>
                  <span className="text-xs text-muted-foreground">{t.year}</span>
                </div>
                <p className="mt-1 text-sm text-primary">{t.org}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {t.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-primary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
              <Award className="h-4 w-4" />
            </span>
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              Certifications
            </h3>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {certifications.map((c) => (
              <li
                key={c}
                className="glass rounded-xl px-5 py-4 text-sm text-foreground/90 shadow-card-soft"
              >
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
