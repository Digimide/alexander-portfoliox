import { motion } from "framer-motion";
import {
  Clock,
  CheckCircle2,
  Layers,
  Gauge,
  Building2,
  Lightbulb,
  MessagesSquare,
  LifeBuoy,
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "4+ Years Experience",
    body: "Real, hands-on experience shipping production software across industries.",
  },
  {
    icon: CheckCircle2,
    title: "100% On-Time Delivery",
    body: "Every project delivered on schedule — without compromising quality.",
  },
  {
    icon: Layers,
    title: "Modern Tech Stack",
    body: "React, Next.js, Node.js, and the tooling top engineering teams rely on.",
  },
  {
    icon: Gauge,
    title: "Performance-Focused",
    body: "Up to 30% faster load speeds through deliberate optimization.",
  },
  {
    icon: Building2,
    title: "Scalable Architecture",
    body: "Systems designed to grow with your business, not break under it.",
  },
  {
    icon: Lightbulb,
    title: "Business-Oriented",
    body: "Engineering decisions tied to real outcomes — conversions, retention, growth.",
  },
  {
    icon: MessagesSquare,
    title: "Clear Communication",
    body: "Frequent updates, no surprises, and easy collaboration end to end.",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Support",
    body: "Ongoing maintenance, improvements, and technical guidance after launch.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">
            Why work with me
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            A partner you can build with.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Whether you're shipping v1 or scaling to your next inflection point — I plug in
            and move the needle.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <s.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-5 font-display text-base font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
