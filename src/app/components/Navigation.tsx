import { GothicCross } from "./gothic/GothicOrnaments";
import { ThemeToggle } from "./gothic/ThemeToggle";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with gothic cross */}
          <a href="#hero" className="flex items-center gap-3 group cursor-pointer">
            <GothicCross size="sm" className="text-primary group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-lg font-black uppercase tracking-widest text-foreground" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
              PORTAFOLIO
            </span>
          </a>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {[
              { name: "Inicio", href: "#hero" },
              { name: "Sobre Mí", href: "#about" },
              { name: "Proyectos", href: "#projects" },
              { name: "Testimonios", href: "#testimonials" }
            ].map((item) => (
              <a key={item.name} href={item.href} className="relative group cursor-pointer py-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60 group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            {/* Theme toggle */}
            <ThemeToggle />
          </div>
          
          {/* Mobile menu icon */}
          <div className="md:hidden flex flex-col gap-1.5 cursor-pointer group">
            <div className="w-6 h-0.5 bg-primary group-hover:bg-accent transition-colors duration-300"></div>
            <div className="w-6 h-0.5 bg-primary group-hover:bg-accent transition-colors duration-300"></div>
            <div className="w-6 h-0.5 bg-primary group-hover:bg-accent transition-colors duration-300"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </nav>
  );
}
