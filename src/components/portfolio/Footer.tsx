import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import { WHATSAPP_URL, EMAIL, EMAIL_HREF, LINKEDIN_URL, GITHUB_URL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-foreground/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">
              A
            </span>
            <span>Ayomide Alexander Abiola</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#skills" className="hover:text-foreground">Skills</a>
            <a href="#experience" className="hover:text-foreground">Experience</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
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
                className="grid h-9 w-9 place-items-center rounded-full border border-foreground/10 bg-foreground/[0.04] text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 text-center text-xs text-muted-foreground">
          <p>
            <a href={EMAIL_HREF} className="hover:text-foreground">{EMAIL}</a>
            {" · "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              WhatsApp
            </a>
          </p>
          <p>© 2026 Ayomide Alexander Abiola. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
