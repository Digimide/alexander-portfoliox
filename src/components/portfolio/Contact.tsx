import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[400px] max-w-5xl bg-hero-glow opacity-60" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">
              Get in touch
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Let's build something{" "}
              <span className="text-gradient">remarkable</span>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Tell me about your project. I read every message personally and reply within
              one business day.
            </p>

            <div className="mt-10 space-y-3">
              {[
                { Icon: Mail, label: "alex@alexander.dev", href: "mailto:alex@alexander.dev" },
                { Icon: Linkedin, label: "linkedin.com/in/alexander", href: "#" },
                { Icon: Github, label: "github.com/alexander", href: "#" },
                { Icon: Twitter, label: "@alexander", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-3 rounded-xl glass px-4 py-3 text-sm transition-colors hover:bg-foreground/10"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-foreground/5 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-foreground/90 group-hover:text-foreground">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass relative rounded-3xl p-6 sm:p-8 shadow-elegant lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" placeholder="Jane Doe" required />
              <Field id="email" type="email" label="Email" placeholder="jane@company.com" required />
              <Field
                id="company"
                label="Company"
                placeholder="Acme Inc."
                className="sm:col-span-2"
              />
              <div className="sm:col-span-2">
                <label htmlFor="details" className="mb-2 block text-sm text-muted-foreground">
                  Project details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  required
                  placeholder="What are you building? Timeline? Budget range?"
                  className="w-full resize-none rounded-xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 sm:px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] sm:w-auto"
            >
              {sent ? "Message sent — talk soon" : "Send message"}
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
  className = "",
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={200}
        className="w-full rounded-xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
