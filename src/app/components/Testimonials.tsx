"use client";

import { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { CornerOrnament, DividerOrnament, GothicCross, BatOrnament } from "./gothic/GothicOrnaments";
import { useLanguage } from "../language-context";

const initialTestimonialsEs = [
  {
    text: "Johana tiene algo muy valioso: buenas ideas y la capacidad de llevarlas a algo visual claro. Aunque no se enfoca tanto en lo técnico profundo, sabe cómo plantear soluciones útiles y bien pensadas. Se nota que entiende lo que el usuario necesita.",
    author: "ESTEBAN GAVIRIA",
    role: "SENIOR DATA SCIENTIST",
    company: "INGENIERO INDUSTRIAL",
    praise: "Opinión sobre ideas, claridad visual y enfoque en el usuario"
  },
  {
    text: "Lo que más destaco de Johana es su forma de pensar. No es solo diseño, siempre propone ideas interesantes y diferentes. En programación va paso a paso, pero compensa mucho con creatividad y enfoque en lo que realmente importa del producto.",
    author: "ANDRÉS JARAMILLO",
    role: "FREELANCE",
    company: "INGENIERO DE SOFTWARE",
    praise: "Destaca creatividad, propuestas y enfoque en producto"
  },
  {
    text: "A mí me gustó trabajar con Johana porque entiende fácil lo que uno quiere. Tiene buenas ideas y busca que todo se vea bonito pero también útil. Además, explica sin enredar, eso para uno es muy importante.",
    author: "ROCÍO MONCAYO",
    role: "COMERCIANTE",
    company: "CONTADORA",
    praise: "Resalta comunicación clara y soluciones útiles"
  }
];
const initialTestimonialsEn = [
  {
    text: "Johana has something very valuable: good ideas and the ability to turn them into clear visual outcomes. Even if she does not focus deeply on technical complexity, she knows how to propose useful and thoughtful solutions. She clearly understands user needs.",
    author: "ESTEBAN GAVIRIA",
    role: "SENIOR DATA SCIENTIST",
    company: "INDUSTRIAL ENGINEER",
    praise: "Insight on ideas, visual clarity, and user focus"
  },
  {
    text: "What stands out the most about Johana is her way of thinking. It is not only design, she always proposes interesting and different ideas. In programming she moves step by step, but she strongly compensates with creativity and product focus.",
    author: "ANDRÉS JARAMILLO",
    role: "FREELANCE",
    company: "SOFTWARE ENGINEER",
    praise: "Highlights creativity, proposals, and product focus"
  },
  {
    text: "I liked working with Johana because she quickly understands what you need. She has good ideas and aims for everything to look beautiful but also useful. She also explains clearly, which is very important for us.",
    author: "ROCÍO MONCAYO",
    role: "MERCHANT",
    company: "ACCOUNTANT",
    praise: "Highlights clear communication and useful solutions"
  }
];

export function Testimonials() {
  const { language } = useLanguage();
  const [testimonials, setTestimonials] = useState(initialTestimonialsEs);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    text: "",
    author: "",
    role: "",
    company: "",
    praise: "Nuevo testimonio del catálogo"
  });

  const isEn = language === "en";

  useEffect(() => {
    setTestimonials(isEn ? initialTestimonialsEn : initialTestimonialsEs);
    setCurrentIndex(0);
  }, [isEn]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.text && formData.author) {
      setTestimonials(prev => [...prev, formData]);
      setFormData({
        text: "",
        author: "",
        role: "",
        company: "",
        praise: "Nuevo testimonio del catálogo"
      });
      setShowForm(false);
      setCurrentIndex(testimonials.length); // Ir al nuevo testimonio
    }
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Two column layout */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: Info & CTA */}
          <div className="lg:col-span-5 space-y-8">
            {/* Section header */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary/60"></div>
                <div className="w-32 h-0.5 bg-primary"></div>
                <GothicCross size="sm" className="text-primary" />
              </div>
              <div className="space-y-3 min-w-0" style={{ fontFamily: "'Playfair Display', serif" }}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-[0.08em] sm:tracking-widest leading-tight break-words">
                  {isEn ? "Testimonials" : "Testimonios"}
                </h2>
              </div>
            </div>
            
            {/* Decorative divider */}
            <DividerOrnament className="text-primary opacity-60" />
            
            {/* Description */}
            <div className="space-y-4 pt-6 text-foreground/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p>{isEn ? "Do you have a vision that needs unique aesthetics and flawless technical execution? I am available for collaborations that challenge the conventional." : "¿Tienes una visión que requiere una estética única y una ejecución técnica impecable? Estoy disponible para colaboraciones que desafíen lo convencional."}</p>
            </div>
            
            {/* Action buttons */}
            <div className="pt-8 space-y-4">
              <button 
                onClick={() => setShowForm(!showForm)}
                className="relative w-full h-14 border-2 border-primary bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10 font-bold uppercase tracking-widest text-xs">
                  {showForm ? (isEn ? "View Testimonials" : "Ver Testimonios") : (isEn ? "Testimonial Invocation" : "Invocación de Testimonio")}
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ boxShadow: '0 0 20px rgba(193, 18, 31, 0.4)' }}></div>
              </button>
            </div>
          </div>
          
          {/* Right column */}
          <div className="lg:col-span-7">
            <div className="relative bg-card/50 p-5 sm:p-8 lg:p-12 border-4 border-primary h-full flex flex-col justify-center min-h-[550px] overflow-hidden">
              {/* Corner ornaments */}
              <CornerOrnament position="top-left" className="absolute top-2 left-2 text-primary w-12 h-12" />
              <CornerOrnament position="top-right" className="absolute top-2 right-2 text-primary w-12 h-12" />
              <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 text-primary w-12 h-12" />
              <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 text-primary w-12 h-12" />
              
              {/* Inner decorative border */}
              <div className="absolute inset-6 border border-primary/30 pointer-events-none"></div>
              
              <div className="relative z-10">
                {!showForm ? (
                  /* Slider View */
                  <div className="space-y-10">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 border-2 border-primary/40 flex items-center justify-center rotate-45">
                        <span className="text-4xl text-primary font-serif -rotate-45">"</span>
                      </div>
                    </div>

                    <div className="space-y-6 text-center min-h-[160px] flex flex-col justify-center min-w-0" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <p className="text-base sm:text-lg lg:text-xl text-foreground/90 italic leading-relaxed break-words [overflow-wrap:anywhere]">
                        "{current.text}"
                      </p>
                      
                      <div className="flex items-center justify-center gap-4 mt-6">
                        <div className="w-8 h-px bg-primary/40"></div>
                        <div className="w-2 h-2 border border-primary rotate-45"></div>
                        <div className="w-8 h-px bg-primary/40"></div>
                      </div>
                    </div>
                    
                    <div className="text-center space-y-2 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-black text-primary uppercase tracking-tight break-words [overflow-wrap:anywhere]" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                        {current.author}
                      </h3>
                      <p className="text-[10px] sm:text-xs font-bold text-foreground/40 uppercase tracking-[0.12em] sm:tracking-[0.2em] break-words [overflow-wrap:anywhere]">
                        {current.role} <span className="text-primary mx-2">|</span> {current.company}
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <button 
                        onClick={prevTestimonial}
                        className="w-12 h-12 border border-primary/40 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
                      >
                        <div className="w-2 h-2 border-l border-b border-primary -rotate-45 group-hover:scale-125 transition-transform"></div>
                      </button>
                      
                      <div className="flex gap-3">
                        {testimonials.map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-1.5 h-1.5 rotate-45 border border-primary transition-all duration-300 ${i === currentIndex ? 'bg-primary scale-125' : 'bg-transparent'}`}
                          ></div>
                        ))}
                      </div>

                      <button 
                        onClick={nextTestimonial}
                        className="w-12 h-12 border border-primary/40 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
                      >
                        <div className="w-2 h-2 border-r border-t border-primary -rotate-45 group-hover:scale-125 transition-transform"></div>
                      </button>
                    </div>

                    <div className="pt-4 border-t border-primary/10 text-center">
                      <p className="text-[10px] uppercase tracking-widest text-foreground/50 font-medium">
                        {current.praise}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Form View */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-black text-primary uppercase tracking-widest" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                        {isEn ? "Leave Testimonial" : "Dejar Testimonio"}
                      </h3>
                      <p className="text-[10px] text-foreground/50 uppercase tracking-widest mt-2">{isEn ? "Write your words into the abyss catalog" : "Inscribe tu palabra en el catálogo del abismo"}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-primary uppercase tracking-widest">{isEn ? "Name" : "Nombre"}</label>
                        <input 
                          type="text" 
                          name="author"
                          required
                          value={formData.author}
                          onChange={handleInputChange}
                          className="w-full h-12 bg-background/50 border-2 border-primary/40 focus:border-primary px-4 text-sm focus:outline-none transition-all"
                          placeholder={isEn ? "YOUR NAME" : "TU NOMBRE"}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-primary uppercase tracking-widest">{isEn ? "Company" : "Empresa"}</label>
                        <input 
                          type="text" 
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full h-12 bg-background/50 border-2 border-primary/40 focus:border-primary px-4 text-sm focus:outline-none transition-all"
                          placeholder={isEn ? "COMPANY NAME" : "NOMBRE DE EMPRESA"}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest">{isEn ? "Role" : "Cargo"}</label>
                      <input 
                        type="text" 
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full h-12 bg-background/50 border-2 border-primary/40 focus:border-primary px-4 text-sm focus:outline-none transition-all"
                        placeholder={isEn ? "YOUR PROFESSIONAL ROLE" : "TU CARGO PROFESIONAL"}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest">{isEn ? "Testimonial" : "Testimonio"}</label>
                      <textarea 
                        name="text"
                        required
                        value={formData.text}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-background/50 border-2 border-primary/40 focus:border-primary p-4 text-sm focus:outline-none transition-all resize-none"
                        placeholder={isEn ? "WRITE YOUR EXPERIENCE..." : "ESCRIBE TU EXPERIENCIA..."}
                      />
                    </div>

                    <button 
                      type="submit"
                      className="relative w-full h-14 border-2 border-primary bg-primary hover:bg-accent text-primary-foreground transition-all duration-300 group overflow-hidden"
                    >
                      <span className="relative z-10 font-bold uppercase tracking-widest text-xs">{isEn ? "Publish Testimonial" : "Publicar Testimonio"}</span>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                           style={{ boxShadow: '0 0 30px rgba(193, 18, 31, 0.6)' }}></div>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Business Card section */}
        <div className="mt-24 lg:mt-32">
          <div className="max-w-3xl mx-auto">
            <div className="relative p-5 sm:p-8 lg:p-16 border-4 border-primary bg-primary overflow-hidden"
                 style={{ boxShadow: '0 0 60px rgba(193, 18, 31, 0.4)' }}>
              {/* Top ornament */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <GothicCross className="text-primary drop-shadow-[0_0_20px_rgba(193,18,31,0.8)]" />
              </div>
              
              {/* Corner ornaments */}
              <CornerOrnament position="top-left" className="absolute top-2 left-2 text-primary-foreground/40 w-10 h-10" />
              <CornerOrnament position="top-right" className="absolute top-2 right-2 text-primary-foreground/40 w-10 h-10" />
              <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 text-primary-foreground/40 w-10 h-10" />
              <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 text-primary-foreground/40 w-10 h-10" />
              
              {/* Inner border */}
              <div className="absolute inset-8 border-2 border-primary-foreground/20"></div>
              
              <div className="relative z-10 space-y-8 text-center text-primary-foreground">
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-[0.12em] sm:tracking-[0.2em] break-words" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    Johana Catalina
                  </h3>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-8 sm:w-12 h-0.5 bg-primary-foreground/60"></div>
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.3em] opacity-80 text-center">Software Engineer</p>
                    <div className="w-8 sm:w-12 h-0.5 bg-primary-foreground/60"></div>
                  </div>
                </div>
                
                <DividerOrnament className="mx-auto text-primary-foreground/50" />
                
                {/* Contact Grid */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-lg mx-auto pt-4 min-w-0" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <div className="space-y-3 group/contact">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{isEn ? "Send a Raven" : "Manda un cuervo"}</p>
                    <a href="mailto:johanagaviria19@gmail.com" className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold hover:text-background transition-colors duration-300 min-w-0">
                      <Mail size={16} className="text-primary-foreground/70 group-hover/contact:text-background flex-shrink-0" />
                      <span className="min-w-0 break-words [overflow-wrap:anywhere]">johanacatalinagv@gmail.com</span>
                    </a>
                  </div>
                  <div className="space-y-3 group/contact">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{isEn ? "Professional Network" : "Red Profesional"}</p>
                    <a href="https://linkedin.com/in/johanagaviria19" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold hover:text-background transition-colors duration-300 min-w-0">
                      <Linkedin size={16} className="text-primary-foreground/70 group-hover/contact:text-background flex-shrink-0" />
                      <span className="min-w-0 break-words [overflow-wrap:anywhere]">LinkedIn/johanagaviria</span>
                    </a>
                  </div>
                  <div className="space-y-3 group/contact">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Instagram</p>
                    <a href="https://instagram.com/johanagaviria19" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold hover:text-background transition-colors duration-300 min-w-0">
                      <Instagram size={16} className="text-primary-foreground/70 group-hover/contact:text-background flex-shrink-0" />
                      <span className="min-w-0 break-words [overflow-wrap:anywhere]">@Gaviort.co</span>
                    </a>
                  </div>
                  <div className="space-y-3 group/contact">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{isEn ? "Repositories" : "Repositorios"}</p>
                    <a href="https://github.com/johanagaviria19" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold hover:text-background transition-colors duration-300 min-w-0">
                      <Github size={16} className="text-primary-foreground/70 group-hover/contact:text-background flex-shrink-0" />
                      <span className="min-w-0 break-words [overflow-wrap:anywhere]">GitHub/johanagaviria19</span>
                    </a>
                  </div>
                  <div className="space-y-3 group/contact">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{isEn ? "Direct Call" : "Llamada Directa"}</p>
                    <a href="tel:+573000000000" className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold hover:text-background transition-colors duration-300 min-w-0">
                      <Phone size={16} className="text-primary-foreground/70 group-hover/contact:text-background flex-shrink-0" />
                      <span className="min-w-0 break-words [overflow-wrap:anywhere]">+57 3213285438</span>
                    </a>
                  </div>
                  <div className="space-y-3 group/contact">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{isEn ? "Location" : "Ubicación"}</p>
                    <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold min-w-0">
                      <MapPin size={16} className="text-primary-foreground/70 flex-shrink-0" />
                      <span className="min-w-0 break-words [overflow-wrap:anywhere]">Pasto - Nariño, Colombia</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
