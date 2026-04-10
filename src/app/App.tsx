import { ThemeProvider } from "next-themes";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Passions } from "./components/Passions";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { RedParticles } from "./components/gothic/RedParticles";
import { Philosophy } from "./components/Philosophy";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden" 
           style={{ fontFamily: "'Inter', sans-serif" }}>
        {/* Red particles effect (only visible in dark mode) */}
        <RedParticles />
        
        {/* Background grain texture */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-30 dark:opacity-20"
             style={{ 
               backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)" opacity="0.05"/%3E%3C/svg%3E")',
               backgroundRepeat: 'repeat',
               mixBlendMode: 'overlay'
             }}>
        </div>
        
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
    </ThemeProvider>
  );
}
