import { motion } from "framer-motion";
import { Layers, Gauge, Building2, MessagesSquare } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Modern Tech Stack",
    body: "React, Next.js, Node.js, and the tooling top engineering teams rely on — applied with senior-level craft on every release.",
  },
  {
    icon: Gauge,
    title: "Performance-Focused Engineering",
    body: "Up to 30% faster load speeds through deliberate optimization, Core Web Vitals audits, and lean architecture decisions.",
  },
  {
    icon: Building2,
    title: "Scalable Architecture",
    body: "Systems designed to grow with your business — clean boundaries, observability, and infrastructure that holds up under load.",
  },
  {
    icon: MessagesSquare,
    title: "Long-Term Partnership",
    body: "Frequent updates, no surprises, ongoing maintenance, and technical guidance well after launch — built for trust.",
  },
];

export function Services() {
  return (
    <section id="why-choose" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Why Choose Ayomide?
          </h2>
          <p className="mt-5 text-muted-foreground">
            Senior-level engineering, performance-first thinking, and partnerships built to
            deliver web and AI at scale.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {reasons.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group rounded-[2rem] glass p-7 sm:p-8 transition-all hover:-translate-y-1"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
