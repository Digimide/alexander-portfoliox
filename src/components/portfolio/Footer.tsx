import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import {
  LOGO_URL,
  WHATSAPP_URL,
  EMAIL,
  EMAIL_HREF,
  LINKEDIN_URL,
  GITHUB_URL,
} from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-foreground/5 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 font-semibold tracking-tight">
              <img
                src={LOGO_URL}
                alt="Digimide"
                className="h-8 w-8 rounded-lg object-cover ring-1 ring-foreground/10"
              />
              <span>Ayomide Alexander Abiola</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Full-Stack Software Developer building fast, scalable digital products with
              modern web technologies.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { Icon: Linkedin, href: LINKEDIN_URL, label: "LinkedIn" },
                { Icon: Github, href: GITHUB_URL, label: "GitHub" },
                { Icon: MessageCircle, href: WHATSAPP_URL, label: "WhatsApp" },
                { Icon: Mail, href: EMAIL_HREF, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full glass text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Quick Links
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                { href: "#home", label: "Home" },
                { href: "#why-choose", label: "Why Choose" },
                { href: "#services", label: "Services" },
                { href: "#projects", label: "Projects" },
                { href: "#resume", label: "Resume" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Services
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              <li>Web Applications</li>
              <li>Mobile Experiences</li>
              <li>Backend Systems</li>
              <li>Cloud & DevOps</li>
              <li>AI Integrations</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-foreground/5 pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>© 2026 Ayomide Alexander Abiola. All rights reserved.</p>
          <p>
            <a href={EMAIL_HREF} className="hover:text-foreground">{EMAIL}</a>
            {" · "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
