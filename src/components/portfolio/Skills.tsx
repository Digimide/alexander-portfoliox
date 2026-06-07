import { motion } from "framer-motion";
import { Braces, Layout, Server, Database, Cloud } from "lucide-react";

const groups = [
  {
    icon: Braces,
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "C#"],
  },
  {
    icon: Layout,
    title: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express", "Laravel", "Django"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Vercel", "GitHub Actions"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">Toolbelt</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            A modern stack, used with intention.
          </h2>
          <p className="mt-5 text-muted-foreground">
            The right tool for the job — chosen for clarity, performance, and longevity.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{g.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-foreground/10 bg-foreground/[0.04] px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
