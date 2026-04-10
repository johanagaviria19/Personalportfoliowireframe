import { useState } from "react";
import { CornerOrnament, DividerOrnament, GothicCross, BatOrnament } from "./gothic/GothicOrnaments";

const initialTestimonials = [
  {
    text: "El trabajo de Johana es simplemente excepcional. Su capacidad para fusionar una estética gótica profunda con una funcionalidad técnica impecable es algo que rara vez se ve en el desarrollo moderno. El portafolio no solo muestra sus habilidades, sino su alma artística.",
    author: "Alexander Vane",
    role: "Director Creativo",
    company: "Obsidian Digital",
    praise: "Testimonio sobre el diseño y arquitectura del portafolio 2024"
  },
  {
    text: "Johana no solo entiende el código, entiende la narrativa detrás de él. Su trabajo en el desarrollo es tan limpio y estructurado como su visión artística. Es una desarrolladora que realmente se preocupa por la experiencia del usuario.",
    author: "Morgana Thorne",
    role: "Senior Developer",
    company: "Nocturne Systems",
    praise: "Opinión sobre la calidad del código y estructura técnica"
  },
  {
    text: "El portafolio de Johana es una obra maestra de diseño gótico moderno. Logró capturar una esencia oscura pero profesional que destaca sobre cualquier otro desarrollador que hayamos visto en la industria creativa.",
    author: "Victor Draken",
    role: "Lead Designer",
    company: "Crimson Studio",
    praise: "Reconocimiento a la identidad visual y UI/UX"
  }
];

export function Testimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    text: "",
    author: "",
    role: "",
    company: "",
    praise: "Nuevo testimonio del catálogo"
  });

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
    <section id="testimonials" className="relative py-24 lg:py-32 px-6 lg:px-12">
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
              <div className="space-y-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                <h2 className="text-4xl lg:text-5xl font-black text-foreground uppercase tracking-widest">
                  Testimonios
                </h2>
              </div>
            </div>
            
            {/* Decorative divider */}
            <DividerOrnament className="text-primary opacity-60" />
            
            {/* Description */}
            <div className="space-y-4 pt-6 text-foreground/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p>¿Tienes una visión que requiere una estética única y una ejecución técnica impecable? Estoy disponible para colaboraciones que desafíen lo convencional.</p>
            </div>
            
            {/* Action buttons */}
            <div className="pt-8 space-y-4">
              <button 
                onClick={() => setShowForm(!showForm)}
                className="relative w-full h-14 border-2 border-primary bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10 font-bold uppercase tracking-widest text-xs">
                  {showForm ? "Ver Testimonios" : "Invocación de Testimonio"}
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ boxShadow: '0 0 20px rgba(193, 18, 31, 0.4)' }}></div>
              </button>
            </div>

            {/* Contact info blocks with gothic frames */}
            <div className="space-y-6 pt-8">
              <div className="flex gap-4 group cursor-pointer">
                <div className="w-12 h-12 border-2 border-primary/60 group-hover:border-primary bg-card group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                  <div className="w-6 h-6 border border-primary rotate-45 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-primary">@</span>
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-widest">Email</h4>
                  <p className="text-sm text-foreground/80">contacto@ejemplo.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="lg:col-span-7">
            <div className="relative bg-card/50 p-8 lg:p-12 border-4 border-primary h-full flex flex-col justify-center min-h-[550px]">
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

                    <div className="space-y-6 text-center min-h-[160px] flex flex-col justify-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <p className="text-lg lg:text-xl text-foreground/90 italic leading-relaxed">
                        "{current.text}"
                      </p>
                      
                      <div className="flex items-center justify-center gap-4 mt-6">
                        <div className="w-8 h-px bg-primary/40"></div>
                        <div className="w-2 h-2 border border-primary rotate-45"></div>
                        <div className="w-8 h-px bg-primary/40"></div>
                      </div>
                    </div>
                    
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl font-black text-primary uppercase tracking-tighter" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                        {current.author}
                      </h3>
                      <p className="text-xs font-bold text-foreground/40 uppercase tracking-[0.2em]">
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
                        Dejar Testimonio
                      </h3>
                      <p className="text-[10px] text-foreground/50 uppercase tracking-widest mt-2">Inscribe tu palabra en el catálogo del abismo</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Nombre</label>
                        <input 
                          type="text" 
                          name="author"
                          required
                          value={formData.author}
                          onChange={handleInputChange}
                          className="w-full h-12 bg-background/50 border-2 border-primary/40 focus:border-primary px-4 text-sm focus:outline-none transition-all"
                          placeholder="TU NOMBRE"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Empresa</label>
                        <input 
                          type="text" 
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full h-12 bg-background/50 border-2 border-primary/40 focus:border-primary px-4 text-sm focus:outline-none transition-all"
                          placeholder="NOMBRE DE EMPRESA"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Cargo</label>
                      <input 
                        type="text" 
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full h-12 bg-background/50 border-2 border-primary/40 focus:border-primary px-4 text-sm focus:outline-none transition-all"
                        placeholder="TU CARGO PROFESIONAL"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Testimonio</label>
                      <textarea 
                        name="text"
                        required
                        value={formData.text}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-background/50 border-2 border-primary/40 focus:border-primary p-4 text-sm focus:outline-none transition-all resize-none"
                        placeholder="ESCRIBE TU EXPERIENCIA..."
                      />
                    </div>

                    <button 
                      type="submit"
                      className="relative w-full h-14 border-2 border-primary bg-primary hover:bg-accent text-primary-foreground transition-all duration-300 group overflow-hidden"
                    >
                      <span className="relative z-10 font-bold uppercase tracking-widest text-xs">Publicar Testimonio</span>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                           style={{ boxShadow: '0 0 30px rgba(193, 18, 31, 0.6)' }}></div>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Secondary CTA section with cathedral arch style */}
        <div className="mt-24 lg:mt-32">
          <div className="max-w-3xl mx-auto">
            <div className="relative p-12 lg:p-16 border-4 border-primary bg-primary/95"
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
              
              <div className="relative z-10 space-y-8 text-center">
                <div className="space-y-3 mx-auto max-w-md" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                  <div className="w-full h-1.5 bg-primary-foreground mx-auto"></div>
                  <div className="w-4/5 h-1.5 bg-primary-foreground/70 mx-auto"></div>
                </div>
                
                <DividerOrnament className="mx-auto text-primary-foreground/50" />
                
                <div className="space-y-2 mx-auto max-w-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <div className="w-full h-px bg-primary-foreground/40 mx-auto"></div>
                  <div className="w-5/6 h-px bg-primary-foreground/40 mx-auto"></div>
                </div>
                
                <button className="relative w-56 h-14 border-2 border-primary-foreground bg-primary-foreground hover:bg-background text-primary transition-all duration-300 mx-auto group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <div className="relative z-10 w-32 h-1 bg-primary mx-auto"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{ boxShadow: '0 0 30px rgba(193, 18, 31, 0.6)' }}></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
