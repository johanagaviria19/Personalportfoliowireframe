"use client";

import { GothicCross, CornerOrnament, DividerOrnament } from "./gothic/GothicOrnaments";
import { useLanguage } from "../language-context";

export function Experience() {
  const { language } = useLanguage();
  return (
    <section id="experience" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-card/30 overflow-hidden">
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
              {language === "en" ? <>Journey <span className="text-primary italic">&</span> Education</> : <>Linaje <span className="text-primary italic">&</span> Formación</>}
            </h2>
          </div>
          <DividerOrnament className="mx-auto mt-8 text-primary opacity-60" />
        </div>
        
        {/* Timeline layout with gothic styling */}
        <div className="space-y-12 lg:space-y-16">
          <div className="pb-2">
            <p className="text-sm font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {language === "en" ? "Academic Education" : "Formación académica"}
            </p>
          </div>
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
                  <span className="text-xl font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>{language === "en" ? "2024 - Present" : "2024 - Actualidad"}</span>
                  <p className="text-xs text-foreground/40 uppercase tracking-widest font-medium">Grado Superior</p>
                </div>
              </div> 
            </div>
            
            {/* Content with ornamental frame */}
            <div className="lg:col-span-9 min-w-0">
              <div className="relative bg-background p-5 sm:p-8 lg:p-10 border-4 border-primary group hover:border-accent transition-all duration-300 overflow-hidden">
                {/* Corner ornaments */}
                <CornerOrnament position="top-left" className="absolute top-2 left-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                
                {/* Inner decorative border */}
                <div className="absolute inset-6 border border-primary/20 group-hover:border-primary/40 transition-all duration-300"></div>
                
                <div className="relative z-10 space-y-6 min-w-0">
                  {/* Title & company */}
                  <div className="space-y-2 min-w-0" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground uppercase tracking-tight group-hover:text-primary transition-colors duration-300 break-words [overflow-wrap:anywhere]">{language === "en" ? "Software Engineering" : "Ingeniería de Software"}</h3>
                    <p className="text-xs sm:text-sm font-medium text-primary/60 uppercase tracking-[0.08em] sm:tracking-widest italic break-words [overflow-wrap:anywhere]">{language === "en" ? "Professional & Continuous Education" : "Formación Profesional & Continua"}</p>
                  </div>
                  
                  {/* Small divider */}
                  <svg className="w-32 h-6" viewBox="0 0 120 20" fill="none">
                    <path d="M0 10 L50 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                    <circle cx="60" cy="10" r="3" fill="currentColor" className="text-primary"/>
                    <path d="M70 10 L120 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                  </svg>
                  
                  {/* Description */}
                  <div className="space-y-4 text-foreground/70 leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <p>{language === "en" ? "Specialized in the software lifecycle, from logical conception to visual implementation. My education blends technical rigor with constant creative exploration." : "Especialización en el ciclo de vida del software, desde la concepción lógica hasta la implementación visual. Mi formación integra rigurosidad técnica con exploración creativa constante."}</p>
                  </div>
                  
                  {/* Achievements/highlights with gothic bullets */}
                  <div className="space-y-4 pt-4">
                    {(language === "en"
                      ? [
                          "Software Engineering (Professional Degree).",
                          "Complementary UI/UX design courses.",
                          "Continuous training in digital tools and frontend development.",
                          "Languages: Spanish (Native) | English (Intermediate/Advanced)."
                        ]
                      : [
                          "Ingeniería de Software (Título Profesional).",
                          "Cursos complementarios en Diseño UI/UX.",
                          "Formación continua en herramientas digitales y desarrollo Frontend.",
                          "Idiomas: Español (Nativo) | Inglés (Intermedio/Avanzado)."
                        ]).map((item, i) => (
                      <div key={i} className="flex gap-3 sm:gap-4 items-start group/item min-w-0">
                        <div className="w-2 h-2 border border-primary rotate-45 group-hover/item:bg-primary transition-colors duration-300 flex-shrink-0"></div>
                        <p className="text-[11px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-widest text-foreground/60 group-hover/item:text-foreground transition-colors duration-300 break-words [overflow-wrap:anywhere]">{item}</p>
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
          
          {/* Experience item 2 - Academic high school */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-6 h-6 border-4 border-primary bg-accent rotate-45"
                         style={{ boxShadow: '0 0 15px rgba(193, 18, 31, 0.5)' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <GothicCross size="sm" className="text-primary w-3 h-4" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>2019 - 2023</span>
                  <p className="text-xs text-foreground/40 uppercase tracking-widest font-medium">{language === "en" ? "Academic High School" : "Bachillerato Académico"}</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-9 min-w-0">
              <div className="relative bg-background p-5 sm:p-8 lg:p-10 border-4 border-primary group hover:border-accent transition-all duration-300 overflow-hidden">
                <CornerOrnament position="top-right" className="absolute top-2 right-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                
                <div className="absolute inset-6 border border-primary/20 group-hover:border-primary/40 transition-all duration-300"></div>
                
                <div className="relative z-10 space-y-6 min-w-0">
                  <div className="space-y-2 min-w-0" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground uppercase tracking-tight group-hover:text-primary transition-colors duration-300 break-words [overflow-wrap:anywhere]">{language === "en" ? "Academic High School" : "Bachillerato Académico"}</h3>
                    <p className="text-sm font-medium text-primary/60 uppercase tracking-widest italic">Colegio La Inmaculada</p>
                  </div>
                  
                  <svg className="w-32 h-6" viewBox="0 0 120 20" fill="none">
                    <path d="M0 10 L50 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                    <circle cx="60" cy="10" r="3" fill="currentColor" className="text-primary"/>
                    <path d="M70 10 L120 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                  </svg>
                  
                  <div className="space-y-4 text-foreground/70 leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <p>{language === "en" ? "Comprehensive education focused on logical thinking, creativity, and communication skills. A key stage to strengthen academic discipline and technological vocation." : "Formación integral con énfasis en pensamiento lógico, creatividad y habilidades comunicativas. Etapa clave para consolidar disciplina académica y vocación tecnológica."}</p>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    {(language === "en"
                      ? [
                          "Academic High School completed in 2023.",
                          "Student president: leadership, mediation, and peer guidance.",
                          "Active participation in institutional activities and collaborative projects.",
                          "Strengthened oral/written communication and teamwork skills."
                        ]
                      : [
                          "Bachillerato Académico finalizado en 2023.",
                          "Presidenta estudiantil: liderazgo, mediación y consejería entre compañeros.",
                          "Participación activa en actividades institucionales y proyectos colaborativos.",
                          "Fortalecimiento de competencias de comunicación oral, escrita y trabajo en equipo."
                        ]).map((item, i) => (
                      <div key={i} className="flex gap-3 sm:gap-4 items-start group/item min-w-0">
                        <div className="w-2 h-2 border border-primary rotate-45 group-hover/item:bg-primary transition-colors duration-300 flex-shrink-0"></div>
                        <p className="text-[11px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-widest text-foreground/60 group-hover/item:text-foreground transition-colors duration-300 break-words [overflow-wrap:anywhere]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                     style={{ boxShadow: 'inset 0 0 40px rgba(193, 18, 31, 0.1)' }}></div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-sm font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {language === "en" ? "Work Experience" : "Experiencia laboral"}
            </p>
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
                  <span className="text-xl font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>{language === "en" ? "2025 - Present" : "2025 - Actualidad"}</span>
                  <p className="text-xs text-foreground/40 uppercase tracking-widest font-medium">{language === "en" ? "Web Development" : "Desarrollo Web"}</p>
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
                    <p className="text-sm font-medium text-primary/60 uppercase tracking-widest italic">{language === "en" ? "Freelance & Personal Projects" : "Freelance & Proyectos Personales"}</p>
                  </div>
                  
                  <svg className="w-32 h-6" viewBox="0 0 120 20" fill="none">
                    <path d="M0 10 L50 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                    <circle cx="60" cy="10" r="3" fill="currentColor" className="text-primary"/>
                    <path d="M70 10 L120 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                  </svg>
                  
                  <div className="space-y-4 text-foreground/70 leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <p>{language === "en" ? "Development of modern web applications using cutting-edge technologies. Focused on intuitive interfaces and robust systems." : "Desarrollo de aplicaciones web modernas utilizando tecnologías de vanguardia. Enfoque en la creación de interfaces intuitivas y sistemas robustos."}</p>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    {(language === "en"
                      ? [
                          "Design and development of responsive websites.",
                          "API and NoSQL/SQL database integration.",
                          "Performance optimization and technical SEO.",
                          "Deployment management in cloud environments."
                        ]
                      : [
                          "Diseño y desarrollo de sitios web responsivos.",
                          "Integración de APIs y bases de datos NoSQL/SQL.",
                          "Optimización de rendimiento y SEO técnico.",
                          "Gestión de despliegue en entornos cloud."
                        ]).map((item, i) => (
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
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 border-4 border-primary bg-accent rotate-45"
                       style={{ boxShadow: '0 0 15px rgba(193, 18, 31, 0.5)' }}></div>
                  <div className="w-0.5 h-32 bg-gradient-to-b from-primary to-primary/20 hidden lg:block"></div>
                </div>
                <div className="space-y-2 min-w-0">
                  <span className="text-lg sm:text-xl font-bold text-primary uppercase tracking-[0.08em] sm:tracking-widest break-words" style={{ fontFamily: "'Montserrat', sans-serif" }}>{language === "en" ? "2019 - Present" : "2019 - Actualidad"}</span>
                  <p className="text-[10px] sm:text-xs text-foreground/40 uppercase tracking-[0.08em] sm:tracking-widest font-medium break-words">{language === "en" ? "Design & Product" : "Diseño & Producto"}</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-9">
              <div className="relative bg-background p-5 sm:p-8 lg:p-10 border-4 border-primary group hover:border-accent transition-all duration-300 overflow-hidden">
                <CornerOrnament position="top-right" className="absolute top-2 right-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                
                <div className="absolute inset-6 border border-primary/20 group-hover:border-primary/40 transition-all duration-300"></div>
                
                <div className="relative z-10 space-y-6 min-w-0">
                  <div className="space-y-2 min-w-0" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    <h3 className="text-[clamp(1.9rem,8vw,2.35rem)] sm:text-2xl font-black text-foreground uppercase tracking-tight group-hover:text-primary transition-colors duration-300 leading-[1.05] break-words [overflow-wrap:anywhere] max-w-full">{language === "en" ? "Product Designer and Developer" : "Diseñadora y Desarrolladora de Productos"}</h3>
                    <p className="text-xs sm:text-sm font-medium text-primary/60 uppercase tracking-[0.08em] sm:tracking-widest italic break-words [overflow-wrap:anywhere]">{language === "en" ? "Gaviort - Art and Design Workshop" : "Gaviort – Taller de Arte y Diseño"}</p>
                  </div>
                  
                  <svg className="w-32 h-6" viewBox="0 0 120 20" fill="none">
                    <path d="M0 10 L50 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                    <circle cx="60" cy="10" r="3" fill="currentColor" className="text-primary"/>
                    <path d="M70 10 L120 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                  </svg>
                  
                  <div className="space-y-4 text-foreground/70 leading-relaxed text-sm min-w-0" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <p className="break-words [overflow-wrap:anywhere]">{language === "en" ? "Development and co-creation of personalized products, integrating creativity, functionality, and digital tools to turn ideas into concrete results." : "Desarrollo y co-creación de productos personalizados, integrando creatividad, funcionalidad y herramientas digitales para llevar ideas a resultados concretos."}</p>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    {(language === "en"
                      ? [
                          "Development and co-creation of personalized products tailored to client needs.",
                          "Design of innovative proposals combining creativity and functionality.",
                          "Application of technical concepts and calculations to optimize design and production processes.",
                          "Management of creative projects from idea to final delivery.",
                          "Use of digital tools for graphic design and visual development."
                        ]
                      : [
                          "Desarrollo y co-creación de productos personalizados, adaptados a las necesidades del cliente.",
                          "Diseño de propuestas innovadoras combinando creatividad y funcionalidad.",
                          "Aplicación de conceptos técnicos y cálculos para optimizar procesos de diseño y producción.",
                          "Gestión de proyectos creativos desde la idea hasta la entrega final.",
                          "Uso de herramientas digitales para diseño gráfico y desarrollo visual."
                        ]).map((item, i) => (
                      <div key={i} className="flex gap-3 sm:gap-4 items-start group/item min-w-0">
                        <div className="w-2 h-2 border border-primary rotate-45 group-hover/item:bg-primary transition-colors duration-300 flex-shrink-0"></div>
                        <p className="text-[11px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-widest text-foreground/60 group-hover/item:text-foreground transition-colors duration-300 break-words [overflow-wrap:anywhere]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                     style={{ boxShadow: 'inset 0 0 40px rgba(193, 18, 31, 0.1)' }}></div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-6 h-6 border-4 border-primary bg-accent rotate-45"
                         style={{ boxShadow: '0 0 15px rgba(193, 18, 31, 0.5)' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <GothicCross size="sm" className="text-primary w-3 h-4" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>2025 - 2026</span>
                  <p className="text-xs text-foreground/40 uppercase tracking-widest font-medium">{language === "en" ? "Branding & Communication" : "Marca & Comunicación"}</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-9 min-w-0">
              <div className="relative bg-background p-5 sm:p-8 lg:p-10 border-4 border-primary group hover:border-accent transition-all duration-300 overflow-hidden">
                <CornerOrnament position="top-left" className="absolute top-2 left-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                <CornerOrnament position="top-right" className="absolute top-2 right-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 text-primary/60 w-8 h-8 group-hover:text-accent transition-colors duration-300" />
                
                <div className="absolute inset-6 border border-primary/20 group-hover:border-primary/40 transition-all duration-300"></div>
                
                <div className="relative z-10 space-y-6 min-w-0">
                  <div className="space-y-2 min-w-0" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground uppercase tracking-tight group-hover:text-primary transition-colors duration-300 break-words [overflow-wrap:anywhere]">{language === "en" ? "Information Designer and Brand Development Support" : "Diseñadora de Información y Apoyo en Desarrollo de Marca"}</h3>
                    <p className="text-sm font-medium text-primary/60 uppercase tracking-widest italic">Carvajal Autotech</p>
                  </div>
                  
                  <svg className="w-32 h-6" viewBox="0 0 120 20" fill="none">
                    <path d="M0 10 L50 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                    <circle cx="60" cy="10" r="3" fill="currentColor" className="text-primary"/>
                    <path d="M70 10 L120 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                  </svg>
                  
                  <div className="space-y-4 text-foreground/70 leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <p>{language === "en" ? "Visual information design for corporate communication, strengthening brand identity and structuring content for clarity and impact." : "Diseño de información visual para comunicación corporativa, fortaleciendo la identidad de marca y estructurando contenidos para maximizar claridad e impacto."}</p>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    {(language === "en"
                      ? [
                          "Visual information design for corporate presentations and training materials.",
                          "Development of customized proposals focused on brand identity and positioning.",
                          "Support in audiovisual content creation for internal and external communication.",
                          "Organization and structuring of information to improve understanding and visual impact."
                        ]
                      : [
                          "Diseño de información visual para presentaciones corporativas y contenidos formativos.",
                          "Desarrollo de propuestas personalizadas enfocadas en la identidad y posicionamiento de marca.",
                          "Apoyo en la creación de contenido audiovisual para comunicación interna y externa.",
                          "Organización y estructuración de información para facilitar la comprensión y el impacto visual."
                        ]).map((item, i) => (
                      <div key={i} className="flex gap-3 sm:gap-4 items-start group/item min-w-0">
                        <div className="w-2 h-2 border border-primary rotate-45 group-hover/item:bg-primary transition-colors duration-300 flex-shrink-0"></div>
                        <p className="text-[11px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-widest text-foreground/60 group-hover/item:text-foreground transition-colors duration-300 break-words [overflow-wrap:anywhere]">{item}</p>
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
