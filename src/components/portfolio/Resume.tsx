import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { CV_URL, CV_FILENAME } from "@/lib/contact";

export function Resume() {
  return (
    <section id="resume" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Resume
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Download my CV
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">
            Get a detailed overview of my experience, skills, and projects in a single PDF.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-6 sm:p-10"
        >
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <FileText className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold tracking-tight">Ayomide Alexander Abiola</div>
                <div className="text-sm text-muted-foreground">
                  Full-Stack Developer · PDF · Updated 2026
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.04] px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
              >
                <Eye className="h-4 w-4" />
                Preview
              </a>
              <a
                href={CV_URL}
                download={CV_FILENAME}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
