import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  {
    quote:
      "Alexander joined as a contractor and quickly became indispensable. Our deploys are faster, our bug count is lower, and our team learned a ton.",
    name: "Sarah Chen",
    role: "VP Engineering, Northwind",
    initials: "SC",
  },
  {
    quote:
      "The kind of engineer you wish every team had. Calm, decisive, and genuinely excellent at his craft. Delivered ahead of schedule, twice.",
    name: "Marcus Hale",
    role: "Founder & CEO, Vantage",
    initials: "MH",
  },
  {
    quote:
      "Working with Alexander reshaped how we think about product engineering. He raised our quality bar across the entire org.",
    name: "Priya Nair",
    role: "CTO, Helix Labs",
    initials: "PN",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">
            Kind words
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Trusted by founders and engineering leaders.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="glass relative flex h-full flex-col rounded-2xl p-7 shadow-card-soft"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-sm font-semibold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
