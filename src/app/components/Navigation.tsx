 "use client";

import { GothicCross } from "./gothic/GothicOrnaments";
import { ThemeToggle } from "./gothic/ThemeToggle";
import { Languages } from "lucide-react";
import { useLanguage } from "../language-context";

export function Navigation() {
  const { language, toggleLanguage } = useLanguage();

  const navItems =
    language === "en"
      ? [
          { name: "Home", href: "#hero" },
          { name: "About", href: "#about" },
          { name: "Projects", href: "#projects" },
          { name: "Passions", href: "#passions" },
          { name: "Skills", href: "#skills" },
          { name: "Background", href: "#experience" },
          { name: "Philosophy", href: "#philosophy" },
          { name: "Testimonials", href: "#testimonials" }
        ]
      : [
          { name: "Inicio", href: "#hero" },
          { name: "Sobre Mí", href: "#about" },
          { name: "Proyectos", href: "#projects" },
          { name: "Pasiones", href: "#passions" },
          { name: "Habilidades", href: "#skills" },
          { name: "Formación", href: "#experience" },
          { name: "Filosofía", href: "#philosophy" },
          { name: "Testimonios", href: "#testimonials" }
        ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with gothic cross */}
          <a href="#hero" className="flex items-center gap-3 group cursor-pointer">
            <GothicCross size="sm" className="text-primary group-hover:rotate-180 transition-transform duration-500" />
          </a>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {navItems.map((item) => (
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
            <button
              type="button"
              onClick={toggleLanguage}
              className="relative w-12 h-12 border-2 border-primary bg-background hover:bg-card transition-all duration-300 group overflow-hidden"
              aria-label={language === "en" ? "Switch language to Spanish" : "Switch language to English"}
              title={language === "en" ? "ES" : "EN"}
            >
              <div
                className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: "inset 0 0 20px rgba(193, 18, 31, 0.3)" }}
              ></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <Languages className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-black tracking-widest text-primary/80 group-hover:text-accent transition-colors duration-300">
                {language === "en" ? "EN" : "ES"}
              </div>
            </button>
          </div>
          
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </nav>
  );
}
