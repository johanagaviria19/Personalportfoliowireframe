"use client";

import { GothicCross, DividerOrnament, BatOrnament } from "./gothic/GothicOrnaments";
import { useLanguage } from "../language-context";

export function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="relative bg-card/30 border-t-4 border-primary">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Brand column with gothic cross */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GothicCross size="sm" className="text-primary" />
              <div className="w-1 h-12 bg-primary/40"></div>
              <h3 className="text-xl font-black uppercase tracking-widest" style={{ fontFamily: "'Cinzel Decorative', serif" }}>Johana <span className="text-primary">Catalina</span></h3>
            </div>
            <div className="space-y-4 text-xs text-foreground/60 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p>{language === "en" ? "Software Engineer & Creative Designer. Merging logic and aesthetics to build meaningful digital experiences." : "Ingeniera de Software & Diseñadora Creativa. Fusionando lógica y estética para construir experiencias digitales significativas."}</p>
            </div>
            
            {/* Bat ornaments */}
            <div className="flex gap-3 pt-2">
              <BatOrnament className="text-primary/40 w-8 h-8" />
              <BatOrnament className="text-primary/30 w-8 h-8" />
            </div>
          </div>
          
          {/* Links column 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold text-primary uppercase tracking-[0.3em]">{language === "en" ? "Navigation" : "Navegación"}</h4>
              <div className="w-2 h-2 bg-primary rotate-45"></div>
            </div>
            <div className="space-y-4 text-xs uppercase tracking-widest font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p className="hover:text-primary cursor-pointer transition-colors duration-300">{language === "en" ? "Home" : "Inicio"}</p>
              <p className="hover:text-primary cursor-pointer transition-colors duration-300">{language === "en" ? "About Me" : "Sobre Mí"}</p>
              <p className="hover:text-primary cursor-pointer transition-colors duration-300">{language === "en" ? "Projects" : "Proyectos"}</p>
              <p className="hover:text-primary cursor-pointer transition-colors duration-300">{language === "en" ? "Testimonials" : "Testimonios"}</p>
            </div>
          </div>
          
          {/* Links column 2 */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Social</h4>
              <div className="w-2 h-2 bg-primary rotate-45"></div>
            </div>
            <div className="space-y-4 text-xs uppercase tracking-widest font-medium">
              <p className="hover:text-primary cursor-pointer transition-colors duration-300">GitHub</p>
              <p className="hover:text-primary cursor-pointer transition-colors duration-300">LinkedIn</p>
              <p className="hover:text-primary cursor-pointer transition-colors duration-300">Instagram</p>
            </div>
          </div>
          
        </div>
        
        {/* Divider ornament */}
        <div className="mb-8">
          <DividerOrnament className="mx-auto text-primary opacity-40" />
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t-2 border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
              <div className="w-48 h-px bg-foreground/30"></div>
            </div>
            
            {/* Social links with gothic frames */}
            <div className="flex gap-4">
              <button className="relative w-10 h-10 border-2 border-primary/40 hover:border-primary bg-transparent hover:bg-primary/10 transition-all duration-300 group">
                <div className="absolute inset-2 border border-primary/20 rotate-45 group-hover:rotate-0 transition-transform duration-300"></div>
              </button>
              <button className="relative w-10 h-10 border-2 border-primary/40 hover:border-primary bg-transparent hover:bg-primary/10 transition-all duration-300 group">
                <div className="relative z-10 w-4 h-px bg-foreground/40 group-hover:bg-primary mx-auto"></div>
              </button>
              <button className="relative w-10 h-10 border-2 border-primary/40 hover:border-primary bg-transparent hover:bg-primary/10 transition-all duration-300 group flex items-center justify-center">
                <BatOrnament className="text-primary/60 group-hover:text-primary w-6 h-4" />
              </button>
              <button className="relative w-10 h-10 border-2 border-primary bg-primary/20 hover:bg-primary transition-all duration-300 group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ boxShadow: '0 0 15px rgba(193, 18, 31, 0.5)' }}></div>
              </button>
            </div>
            
            {/* Legal links */}
            <div className="flex gap-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              <div className="group cursor-pointer">
                <div className="w-20 h-px bg-foreground/30 group-hover:bg-primary transition-colors duration-300"></div>
              </div>
              <div className="w-px h-4 bg-primary/30"></div>
              <div className="group cursor-pointer">
                <div className="w-24 h-px bg-foreground/30 group-hover:bg-primary transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
    </footer>
  );
}
