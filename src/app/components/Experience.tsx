import { GothicCross, CornerOrnament, DividerOrnament } from "./gothic/GothicOrnaments";

export function Experience() {
  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-card/30">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ backgroundImage: 'linear-gradient(30deg, transparent 48%, currentColor 49%, currentColor 51%, transparent 52%), linear-gradient(150deg, transparent 48%, currentColor 49%, currentColor 51%, transparent 52%)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-[1400px] mx-auto relative">
        {/* Section header */}
        <div className="mb-16 lg:mb-24 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary/60"></div>
            <div className="w-32 h-0.5 bg-primary"></div>
            <div className="w-12 h-px bg-primary/60"></div>
          </div>
          <div className="space-y-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground uppercase tracking-widest">
              Linaje <span className="text-primary italic">&</span> Formación
            </h2>
          </div>
          <DividerOrnament className="mx-auto mt-8 text-primary opacity-60" />
        </div>
        
        {/* Timeline layout with gothic styling */}
        <div className="space-y-12 lg:space-y-16">
          {/* Experience item 1 - Education */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Timeline marker & date */}
            <div className="lg:col-span-3">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  {/* Gothic cross marker */}
                  <div className="w-6 h-6 border-4 border-primary bg-accent rotate-45"
                       style={{ boxShadow: '0 0 15px rgba(193, 18, 31, 0.5)' }}></div>
                  <div className="w-0.5 h-32 bg-gradient-to-b from-primary to-primary/20 hidden lg:block"></div>
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>2024 - Actualidad</span>
                  <p className="text-xs text-foreground/40 uppercase tracking-widest font-medium">Grado Superior</p>
                </div>
              </div> 
            </div>
            
            {/* Content with ornamental frame */}
            <div className="lg:col-span-9">
              <div className="relative bg-background p-8 lg:p-10 border-4 border-primary group hover:border-accent transition-all duration-300">
                {/* Corner ornaments */}
                <CornerOrnament position="top-left" className="absolute top-2 left-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                
                {/* Inner decorative border */}
                <div className="absolute inset-6 border border-primary/20 group-hover:border-primary/40 transition-all duration-300"></div>
                
                <div className="relative z-10 space-y-6">
                  {/* Title & company */}
                  <div className="space-y-2" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    <h3 className="text-2xl font-black text-foreground uppercase tracking-tight group-hover:text-primary transition-colors duration-300">Ingeniería de Software</h3>
                    <p className="text-sm font-medium text-primary/60 uppercase tracking-widest italic">Formación Profesional & Continua</p>
                  </div>
                  
                  {/* Small divider */}
                  <svg className="w-32 h-6" viewBox="0 0 120 20" fill="none">
                    <path d="M0 10 L50 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                    <circle cx="60" cy="10" r="3" fill="currentColor" className="text-primary"/>
                    <path d="M70 10 L120 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                  </svg>
                  
                  {/* Description */}
                  <div className="space-y-4 text-foreground/70 leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <p>Especialización en el ciclo de vida del software, desde la concepción lógica hasta la implementación visual. Mi formación integra rigurosidad técnica con exploración creativa constante.</p>
                  </div>
                  
                  {/* Achievements/highlights with gothic bullets */}
                  <div className="space-y-4 pt-4">
                    {[
                      "Ingeniería de Software (Título Profesional).",
                      "Cursos complementarios en Diseño UI/UX.",
                      "Formación continua en herramientas digitales y desarrollo Frontend.",
                      "Idiomas: Español (Nativo) | Inglés (Intermedio/Avanzado)."
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center group/item">
                        <div className="w-2 h-2 border border-primary rotate-45 group-hover/item:bg-primary transition-colors duration-300 flex-shrink-0"></div>
                        <p className="text-xs uppercase tracking-widest text-foreground/60 group-hover/item:text-foreground transition-colors duration-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                     style={{ boxShadow: 'inset 0 0 40px rgba(193, 18, 31, 0.1)' }}></div>
              </div>
            </div>
          </div>
          
          {/* Experience item 2 */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 border-4 border-primary bg-accent rotate-45"
                       style={{ boxShadow: '0 0 15px rgba(193, 18, 31, 0.5)' }}></div>
                  <div className="w-0.5 h-32 bg-gradient-to-b from-primary to-primary/20 hidden lg:block"></div>
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>2022 - 2024</span>
                  <p className="text-xs text-foreground/40 uppercase tracking-widest font-medium">Desarrollo Web</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-9">
              <div className="relative bg-background p-8 lg:p-10 border-4 border-primary group hover:border-accent transition-all duration-300">
                <CornerOrnament position="top-right" className="absolute top-2 right-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                
                <div className="absolute inset-6 border border-primary/20 group-hover:border-primary/40 transition-all duration-300"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="space-y-2" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    <h3 className="text-2xl font-black text-foreground uppercase tracking-tight group-hover:text-primary transition-colors duration-300">Full Stack Developer</h3>
                    <p className="text-sm font-medium text-primary/60 uppercase tracking-widest italic">Freelance & Proyectos Personales</p>
                  </div>
                  
                  <svg className="w-32 h-6" viewBox="0 0 120 20" fill="none">
                    <path d="M0 10 L50 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                    <circle cx="60" cy="10" r="3" fill="currentColor" className="text-primary"/>
                    <path d="M70 10 L120 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                  </svg>
                  
                  <div className="space-y-4 text-foreground/70 leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <p>Desarrollo de aplicaciones web modernas utilizando tecnologías de vanguardia. Enfoque en la creación de interfaces intuitivas y sistemas robustos.</p>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    {[
                      "Diseño y desarrollo de sitios web responsivos.",
                      "Integración de APIs y bases de datos NoSQL/SQL.",
                      "Optimización de rendimiento y SEO técnico.",
                      "Gestión de despliegue en entornos cloud."
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center group/item">
                        <div className="w-2 h-2 border border-primary rotate-45 group-hover/item:bg-primary transition-colors duration-300 flex-shrink-0"></div>
                        <p className="text-xs uppercase tracking-widest text-foreground/60 group-hover/item:text-foreground transition-colors duration-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                     style={{ boxShadow: 'inset 0 0 40px rgba(193, 18, 31, 0.1)' }}></div>
              </div>
            </div>
          </div>
          
          {/* Experience item 3 - Final item without connecting line */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-6 h-6 border-4 border-primary bg-accent rotate-45"
                         style={{ boxShadow: '0 0 15px rgba(193, 18, 31, 0.5)' }}></div>
                    {/* Gothic cross on final marker */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <GothicCross size="sm" className="text-primary w-3 h-4" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>2020 - 2022</span>
                  <p className="text-xs text-foreground/40 uppercase tracking-widest font-medium">Diseño Creativo</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-9">
              <div className="relative bg-background p-8 lg:p-10 border-4 border-primary group hover:border-accent transition-all duration-300">
                <CornerOrnament position="top-left" className="absolute top-2 left-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                <CornerOrnament position="top-right" className="absolute top-2 right-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                
                <div className="absolute inset-6 border border-primary/20 group-hover:border-primary/40 transition-all duration-300"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="space-y-2" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    <h3 className="text-2xl font-black text-foreground uppercase tracking-tight group-hover:text-primary transition-colors duration-300">Diseño Visual & Multimedia</h3>
                    <p className="text-sm font-medium text-primary/60 uppercase tracking-widest italic">Academia de Artes Digitales</p>
                  </div>
                  
                  <svg className="w-32 h-6" viewBox="0 0 120 20" fill="none">
                    <path d="M0 10 L50 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                    <circle cx="60" cy="10" r="3" fill="currentColor" className="text-primary"/>
                    <path d="M70 10 L120 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                  </svg>
                  
                  <div className="space-y-4 text-foreground/70 leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <p>Exploración de lenguajes visuales y herramientas de diseño gráfico. Especialización en la creación de identidades visuales y contenido multimedia de alto impacto.</p>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    {[
                      "Dominio de herramientas de la Suite Adobe (Photoshop, Illustrator).",
                      "Creación de prototipos interactivos en Figma.",
                      "Desarrollo de conceptos creativos para marcas.",
                      "Producción y edición de contenido audiovisual."
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center group/item">
                        <div className="w-2 h-2 border border-primary rotate-45 group-hover/item:bg-primary transition-colors duration-300 flex-shrink-0"></div>
                        <p className="text-xs uppercase tracking-widest text-foreground/60 group-hover/item:text-foreground transition-colors duration-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                     style={{ boxShadow: 'inset 0 0 40px rgba(193, 18, 31, 0.1)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
