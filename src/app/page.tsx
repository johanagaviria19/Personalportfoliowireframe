import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Passions } from "./components/Passions";
import { Philosophy } from "./components/Philosophy";
import { Skills } from "./components/Skills";
import { Testimonials } from "./components/Testimonials";
import { RedParticles } from "./components/gothic/RedParticles";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-background text-foreground relative overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <RedParticles />

      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)" opacity="0.05"/%3E%3C/svg%3E")',
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay"
        }}
      />

      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <FeaturedProjects />
        <Passions />
        <Skills />
        <Experience />
        <Philosophy />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

