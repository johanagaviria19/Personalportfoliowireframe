import { GothicCross, CornerOrnament, DividerOrnament } from "./gothic/GothicOrnaments";

export function Skills() {
  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-12">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.015]" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-[1400px] mx-auto relative">
        {/* Section header */}
        <div className="mb-16 lg:mb-24 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary/60"></div>
            <div className="w-32 h-0.5 bg-primary"></div>
            <GothicCross size="sm" className="text-primary" />
            <div className="w-32 h-0.5 bg-primary"></div>
            <div className="w-12 h-px bg-primary/60"></div>
          </div>
          <div className="space-y-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground uppercase tracking-widest">
              Maestría <span className="text-primary italic">&</span> Técnica
            </h2>
          </div>
          <DividerOrnament className="mx-auto mt-8 text-primary opacity-60" />
        </div>
        
        {/* Two column layout: Technical vs Creative */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Technical Skills - Left side */}
          <div className="relative">
            <div className="space-y-8 border-4 border-primary bg-card/50 p-8 lg:p-10">
              {/* Corner ornaments */}
              <CornerOrnament position="top-left" className="absolute top-2 left-2 text-primary w-10 h-10" />
              <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 text-primary w-10 h-10" />
              
              <div className="flex items-center gap-4 pb-4 border-b-4 border-primary">
                <div className="w-8 h-8 border-4 border-primary flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rotate-45"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                  Forja Digital
                </h3>
              </div>
              
              {/* Skill bars with gothic decoration */}
              <div className="space-y-8 relative">
                {[
                  { name: "Desarrollo Web (HTML/CSS/JS)", level: "95%" },
                  { name: "Frameworks (React/Next.js)", level: "90%" },
                  { name: "Diseño UI/UX", level: "85%" },
                  { name: "Prototipado (Figma)", level: "90%" },
                  { name: "Control de versiones (Git)", level: "80%" },
                  { name: "Diseño Visual & Branding", level: "85%" }
                ].map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between text-sm font-bold tracking-widest uppercase text-foreground/80">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}</span>
                    </div>
                    <div className="relative h-4 bg-background border-2 border-primary/20 overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-primary border-r-2 border-accent transition-all duration-1000"
                           style={{ width: skill.level, boxShadow: '0 0 15px rgba(193, 18, 31, 0.4)' }}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Tag cloud for tech stack with ornamental style */}
              <div className="pt-8 border-t-2 border-primary/20">
                <div className="flex flex-wrap gap-3">
                  {[
                    "HTML5", "CSS3", "JavaScript", "TypeScript", 
                    "React", "Next.js", "Tailwind CSS", "Figma", 
                    "Git", "GitHub", "UI/UX", "Branding"
                  ].map((tech, i) => (
                    <div key={tech} className={`px-4 py-2 border border-primary/40 hover:border-primary hover:bg-primary/10 transition-all duration-300 group cursor-default ${i % 3 === 0 ? 'bg-primary/5' : ''}`}>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/70 group-hover:text-primary">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Creative Skills - Right side */}
          <div className="relative">
            <div className="space-y-8 border-4 border-primary/60 bg-card/30 p-8 lg:p-10">
              {/* Corner ornaments */}
              <CornerOrnament position="top-right" className="absolute top-2 right-2 text-primary w-10 h-10" />
              <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 text-primary w-10 h-10" />
              
              <div className="flex items-center gap-4 pb-4 border-b-2 border-primary/40">
                <div className="w-8 h-8 border-2 border-primary/60 flex items-center justify-center">
                  <GothicCross size="sm" className="w-4 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                  Esencia Humana
                </h3>
              </div>
              
              {/* Grouped blocks representation with ornamental frames */}
              <div className="space-y-8">
                {[
                  { name: "Pensamiento Creativo", desc: "Soluciones fuera de lo convencional." },
                  { name: "Resolución de Problemas", desc: "Lógica aplicada a desafíos complejos." },
                  { name: "Comunicación Efectiva", desc: "Narrativa clara y colaborativa." },
                  { name: "Atención al Detalle", desc: "Búsqueda de la perfección en cada píxel." },
                  { name: "Trabajo en Equipo", desc: "Sinergia para lograr objetivos comunes." },
                  { name: "Adaptabilidad", desc: "Evolución constante en entornos digitales." }
                ].map((skill, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="relative w-12 h-12 border-2 border-primary/40 bg-card group-hover:border-primary transition-all duration-300 flex-shrink-0">
                      <div className="absolute inset-2 border border-primary/20 rotate-45 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-primary group-hover:scale-150 transition-transform duration-300"></div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="text-sm font-bold text-primary uppercase tracking-widest">{skill.name}</h4>
                      <p className="text-xs text-foreground/60 leading-tight italic">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
