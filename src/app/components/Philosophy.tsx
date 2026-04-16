"use client";

import { GothicCross, DividerOrnament } from "./gothic/GothicOrnaments";
import { useLanguage } from "../language-context";

export function Philosophy() {
  const { language } = useLanguage();
  return (
    <section id="philosophy" className="relative py-24 lg:py-32 px-6 lg:px-12 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full pointer-events-none rotate-45"></div>
      
      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <GothicCross size="lg" className="mx-auto text-primary mb-12 opacity-80" />
        
        <div className="space-y-12">
          <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-[0.2em]" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            {language === "en" ? <>Creative <span className="text-primary italic">Philosophy</span></> : <>Filosofía <span className="text-primary italic">Creativa</span></>}
          </h2>
          
          <div className="space-y-8 text-xl lg:text-2xl font-light leading-relaxed italic text-foreground/80" style={{ fontFamily: "'Playfair Display', serif" }}>
            <p className="relative">
              <span className="text-6xl text-primary absolute -top-8 -left-8 opacity-20">"</span>
              {language === "en"
                ? "Design should not only look good, it should be felt. Code should not only work, it should build experiences."
                : "El diseño no solo debe verse bien, debe sentirse. El código no solo debe funcionar, debe construir experiencias."}
            </p>
            <p>
              {language === "en"
                ? "I believe in the union of technical and artistic thinking as a way to create something truly meaningful."
                : "Creo en la unión entre lo técnico y lo artístico como una forma de crear algo verdaderamente significativo."}
              <span className="text-6xl text-primary absolute -bottom-12 -right-8 opacity-20">"</span>
            </p>
          </div>
          
          <div className="pt-12">
            <DividerOrnament className="mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
