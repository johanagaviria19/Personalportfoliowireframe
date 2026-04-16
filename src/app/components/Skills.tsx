"use client";

import { GothicCross, CornerOrnament, DividerOrnament } from "./gothic/GothicOrnaments";
import { useLanguage } from "../language-context";

export function Skills() {
  const { language } = useLanguage();

  const digitalForgeSkills =
    language === "en"
      ? [
          "Artificial Intelligence",
          "Web Development (HTML/CSS/JS)",
          "Frameworks (React/Next.js)",
          "Backend & Automation (Python)",
          "Cloud (AWS)",
          "REST APIs & Integrations",
          "Databases (SQL/NoSQL)",
          "UI/UX Design",
          "Prototyping (Figma)",
          "Version Control (Git)",
          "Visual Design (CorelDraw/Photoshop)",
          "Analytics & Dashboards (Power BI)",
          "Testing & Quality",
          "Deploy & CI/CD"
        ]
      : [
          "Inteligencia Artificial",
          "Desarrollo Web (HTML/CSS/JS)",
          "Frameworks (React/Next.js)",
          "Backend & Automatización (Python)",
          "Cloud (AWS)",
          "APIs REST & Integraciones",
          "Bases de Datos (SQL/NoSQL)",
          "Diseño UI/UX",
          "Prototipado (Figma)",
          "Control de versiones (Git)",
          "Diseño Visual (CorelDraw/Photoshop)",
          "Analítica & Dashboards (Power BI)",
          "Testing & Calidad",
          "Deploy & CI/CD"
        ];

  const humanEssenceSkills =
    language === "en"
      ? [
          { name: "Creative Thinking", desc: "Solutions beyond the conventional." },
          { name: "Problem Solving", desc: "Applied logic for complex challenges." },
          { name: "Effective Communication", desc: "Clear and collaborative narrative." },
          { name: "Attention to Detail", desc: "Pursuit of excellence in every pixel." },
          { name: "Teamwork", desc: "Synergy to achieve shared goals." },
          { name: "Adaptability", desc: "Constant evolution in digital environments." },
          { name: "Empathy", desc: "Real understanding of user needs and context." },
          { name: "Active Listening", desc: "Openness to feedback and improvement." },
          { name: "Collaborative Leadership", desc: "Team momentum with clarity and respect." },
          { name: "Time Management", desc: "Efficient organization to meet deliverables." }
        ]
      : [
          { name: "Pensamiento Creativo", desc: "Soluciones fuera de lo convencional." },
          { name: "Resolución de Problemas", desc: "Lógica aplicada a desafíos complejos." },
          { name: "Comunicación Efectiva", desc: "Narrativa clara y colaborativa." },
          { name: "Atención al Detalle", desc: "Búsqueda de la perfección en cada píxel." },
          { name: "Trabajo en Equipo", desc: "Sinergia para lograr objetivos comunes." },
          { name: "Adaptabilidad", desc: "Evolución constante en entornos digitales." },
          { name: "Empatía", desc: "Comprensión real de necesidades y contextos del usuario." },
          { name: "Escucha Activa", desc: "Apertura para recibir feedback y convertirlo en mejoras." },
          { name: "Liderazgo Colaborativo", desc: "Impulso de equipos con claridad, respeto y propósito." },
          { name: "Gestión del Tiempo", desc: "Organización eficiente para cumplir metas y entregables." }
        ];

  return (
    <section id="skills" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
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
              {language === "en" ? <>Mastery <span className="text-primary italic">&</span> Technique</> : <>Maestría <span className="text-primary italic">&</span> Técnica</>}
            </h2>
          </div>
          <DividerOrnament className="mx-auto mt-8 text-primary opacity-60" />
        </div>
        
        {/* Two column layout: Technical vs Creative */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Technical Skills - Left side */}
          <div className="relative">
            <div className="relative space-y-8 border-4 border-primary bg-card/50 p-5 sm:p-8 lg:p-10 overflow-hidden">
              {/* Corner ornaments */}
              <CornerOrnament position="top-left" className="absolute top-2 left-2 text-primary w-10 h-10" />
              <CornerOrnament position="bottom-right" className="absolute -bottom-1 right-2 text-primary w-10 h-10" />
              
              <div className="flex items-center gap-3 sm:gap-4 pb-4 border-b-4 border-primary min-w-0">
                <div className="w-8 h-8 border-4 border-primary flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rotate-45"></div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary uppercase tracking-[0.08em] sm:tracking-widest break-words" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                  {language === "en" ? "Digital Forge" : "Forja Digital"}
                </h3>
              </div>
              
              {/* Skill list without bars */}
              <div className="space-y-6 relative pt-4">
                {digitalForgeSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4 group min-w-0">
                    <div className="w-2 h-2 border border-primary rotate-45 bg-primary/20 group-hover:bg-primary transition-colors duration-300"></div>
                    <span className="min-w-0 text-xs sm:text-sm font-bold tracking-[0.08em] sm:tracking-widest uppercase text-foreground/80 group-hover:text-primary transition-colors duration-300 break-words [overflow-wrap:anywhere]">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Tag cloud for tech stack with ornamental style */}
              <div className="pt-8 border-t-2 border-primary/20">
                <div className="flex flex-wrap gap-3">
                  {[
                    "Inteligencia Artificial",
                    "HTML5", "CSS3", "JavaScript", "TypeScript", 
                    "React", "Next.js", "Tailwind CSS", "Figma", 
                    "Git", "GitHub", "UI/UX", "Branding",
                    "CorelDraw", "Photoshop", "Power BI",
                    "Python", "AWS"
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
            <div className="relative lg:h-full space-y-8 border-4 border-primary/60 bg-card/30 p-5 sm:p-8 lg:p-10 overflow-hidden">
              {/* Corner ornaments */}
              <CornerOrnament position="top-right" className="absolute top-2 right-2 text-primary w-10 h-10" />
              <CornerOrnament position="bottom-left" className="absolute -bottom-1 left-2 text-primary w-10 h-10" />
              
              <div className="flex items-center gap-3 sm:gap-4 pb-4 border-b-2 border-primary/40 min-w-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 border-2 border-primary/60 flex items-center justify-center">
                  <GothicCross size="sm" className="w-4 h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary uppercase tracking-[0.08em] sm:tracking-widest break-words" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                  {language === "en" ? "Human Essence" : "Esencia Humana"}
                </h3>
              </div>
              
              {/* Grouped blocks representation with ornamental frames */}
              <div className="space-y-8">
                {humanEssenceSkills.map((skill, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 group min-w-0">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 border-2 border-primary/40 bg-card group-hover:border-primary transition-all duration-300 flex-shrink-0">
                      <div className="absolute inset-2 border border-primary/20 rotate-45 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-primary group-hover:scale-150 transition-transform duration-300"></div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                      <h4 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.08em] sm:tracking-widest break-words [overflow-wrap:anywhere]">{skill.name}</h4>
                      <p className="text-xs text-foreground/60 leading-tight italic break-words">{skill.desc}</p>
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
