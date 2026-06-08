import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const SITE_URL = "https://alexander-portfoliox.lovable.app";
const TITLE = "Ayomide Alexander Abiola | Full-Stack Software Developer";
const DESCRIPTION =
  "Full-Stack Software Developer based in Ohio, United States, specializing in React, Next.js, Node.js, scalable web applications, SaaS products, AI integrations, and modern business solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Full-Stack Developer, React Developer, Next.js Developer, Node.js Developer, JavaScript Developer, Software Engineer, Web Developer, SaaS Development, API Integration, Ohio Developer, Remote Developer",
      },
      { name: "author", content: "Ayomide Alexander Abiola" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ayomide Alexander Abiola",
          jobTitle: "Full-Stack Software Developer",
          url: SITE_URL,
          email: "mailto:emailux10@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Ohio",
            addressCountry: "US",
          },
          sameAs: [
            "https://linkedin.com/in/abiola-ayomide-5796022aa",
            "https://github.com/Xzavior34",
          ],
          knowsAbout: [
            "React",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Full-Stack Development",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
