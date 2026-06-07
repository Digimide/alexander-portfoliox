import { motion } from "framer-motion";
import portrait from "@/assets/alexander-portrait.jpg";

const stats = [
  { value: "120+", label: "Projects completed" },
  { value: "80+", label: "Happy clients" },
  { value: "10", label: "Years experience" },
  { value: "25+", label: "Technologies mastered" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-primary opacity-20 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-foreground/10 shadow-elegant">
              <img
                src={portrait}
                alt="Alexander, software engineer"
                width={896}
                height={1152}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">
              About Alexander
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Engineering that compounds in value.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                I'm a full-stack engineer with a decade of experience building digital
                products for ambitious teams — from seed-stage startups to publicly listed
                enterprises. My focus is on resilient architecture, exceptional UX, and
                code that ages well.
              </p>
              <p>
                I've shipped products across fintech, healthtech, e-commerce, developer
                tooling, and AI. I care about systems that don't just ship, but compound:
                fast feedback loops, clean abstractions, and a strong design point of view.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.04] sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-card/40 p-5">
                  <dt className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
