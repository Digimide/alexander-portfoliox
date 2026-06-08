import { motion } from "framer-motion";
import { MapPin, Globe2 } from "lucide-react";
import portrait from "@/assets/ayomide-portrait.jpg";

const stats = [
  { value: "4+", label: "Years experience" },
  { value: "30+", label: "Projects delivered" },
  { value: "30%", label: "Faster load speeds" },
  { value: "100%", label: "On-time delivery" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
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
                alt="Ayomide Alexander Abiola — Full-Stack Software Developer"
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
              About Me
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Engineering products that <span className="text-gradient">scale</span>.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                I'm a Full-Stack Software Developer with over 4 years of hands-on
                experience building scalable, responsive, and user-focused web
                applications.
              </p>
              <p>
                I specialize in the JavaScript ecosystem — React, Next.js, Node.js,
                Express.js — and modern cloud deployment platforms. I've shipped
                client-facing applications across multiple industries, focusing on
                performance, clean architecture, usability, and business growth.
              </p>
              <p>
                I enjoy turning ideas into production-ready software that creates
                real-world impact and measurable results.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-foreground/90">
                <MapPin className="h-4 w-4 text-primary" />
                Ohio, United States
              </span>
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-foreground/90">
                <Globe2 className="h-4 w-4 text-primary" />
                Available Worldwide / Remote
              </span>
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
