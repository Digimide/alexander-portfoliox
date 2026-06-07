import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexander — Software Engineer & Product Builder" },
      {
        name: "description",
        content:
          "Alexander is a software engineer building high-performance digital products for ambitious teams. View featured work, services, and get in touch.",
      },
      { property: "og:title", content: "Alexander — Software Engineer & Product Builder" },
      {
        property: "og:description",
        content:
          "High-performance software that helps businesses scale. A decade of full-stack engineering across fintech, SaaS, and AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        <Projects />
        <Experience />
        <Testimonials />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
