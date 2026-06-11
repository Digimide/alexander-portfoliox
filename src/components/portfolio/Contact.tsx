import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle, MapPin, Send } from "lucide-react";
import { WHATSAPP_URL, EMAIL, EMAIL_HREF, LINKEDIN_URL, GITHUB_URL } from "@/lib/contact";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot anti-spam
    if ((fd.get("website") as string)?.trim()) {
      setSent(true);
      form.reset();
      return;
    }

    const name = (fd.get("name") as string)?.trim();
    const email = (fd.get("email") as string)?.trim();
    const company = (fd.get("company") as string)?.trim();
    const budget = (fd.get("budget") as string)?.trim();
    const details = (fd.get("details") as string)?.trim();

    if (!name || name.length < 2 || name.length > 100) {
      setError("Please enter your full name.");
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!details || details.length < 10 || details.length > 2000) {
      setError("Please share a few details about your project (10+ characters).");
      return;
    }

    const subject = `New project inquiry from ${name}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      (company ? `Company: ${company}\n` : "") +
      (budget ? `Budget: ${budget}\n` : "") +
      `\nProject details:\n${details}\n`;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Build Something Together
          </h2>
          <p className="mt-5 text-muted-foreground">
            Ready to start your project? Get in touch and let's discuss how I can help bring
            your vision to life.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <h3 className="font-display text-xl font-bold tracking-tight">Get in Touch</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Whether you need a full-stack application, AI integration, or technical
              consultation — I'm ready to help bring your vision to life.
            </p>


            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a
                href={EMAIL_HREF}
                className="inline-flex items-center gap-2 rounded-2xl glass px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </a>
            </div>


            <div className="mt-10 space-y-3">
              {[
                { Icon: Mail, label: EMAIL, href: EMAIL_HREF },
                { Icon: MessageCircle, label: "WhatsApp: +1 (559) 681-4509", href: WHATSAPP_URL, external: true },
                { Icon: Linkedin, label: "linkedin.com/in/abiola-ayomide", href: LINKEDIN_URL, external: true },
                { Icon: Github, label: "github.com/Xzavior34", href: GITHUB_URL, external: true },
                { Icon: MapPin, label: "Ohio, United States" },
              ].map(({ Icon, label, href, external }) => {
                const inner = (
                  <>
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-foreground/5 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-foreground/90 group-hover:text-foreground">
                      {label}
                    </span>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-3 rounded-xl glass px-4 py-3 text-sm transition-colors hover:bg-foreground/10"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl glass px-4 py-3 text-sm"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass relative rounded-[2rem] p-6 sm:p-8 lg:col-span-3"
            noValidate
          >
            {/* Honeypot field for anti-spam */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full Name" placeholder="Jane Doe" required />
              <Field
                id="email"
                type="email"
                label="Email Address"
                placeholder="jane@company.com"
                required
              />
              <Field
                id="company"
                label="Company Name (optional)"
                placeholder="Acme Inc."
              />
              <Field
                id="budget"
                label="Project Budget (optional)"
                placeholder="e.g. $2k – $10k"
              />
              <div className="sm:col-span-2">
                <label
                  htmlFor="details"
                  className="mb-2 block text-sm text-muted-foreground"
                >
                  Project Details / Message
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  required
                  maxLength={2000}
                  placeholder="What are you building? Timeline? Goals?"
                  className="w-full resize-none rounded-xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            {error && (
              <p className="mt-4 text-sm text-destructive" role="alert">
                {error}
              </p>
            )}

            {sent && (
              <p
                className="mt-4 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground"
                role="status"
              >
                Thank you for reaching out. I've received your message and will get back
                to you as soon as possible.
              </p>
            )}

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl glass px-6 py-3 text-sm font-semibold text-foreground hover:bg-foreground/10"
              >
                <MessageCircle className="h-4 w-4" />
                Or message on WhatsApp
              </a>
            </div>

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
        maxLength={255}
        className="w-full rounded-xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
