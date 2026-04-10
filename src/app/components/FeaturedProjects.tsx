import { CornerOrnament, DividerOrnament, GothicCross } from "./gothic/GothicOrnaments";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="mb-16 lg:mb-24 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary/60"></div>
            <div className="w-32 h-0.5 bg-primary"></div>
            <div className="w-12 h-px bg-primary/60"></div>
          </div>
          <div className="space-y-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground uppercase tracking-widest">
              Reliquias <span className="text-primary italic">&</span> Proyectos
            </h2>
          </div>
          <DividerOrnament className="mx-auto mt-8 text-primary opacity-60" />
        </div>
        
        {/* Featured large project with cathedral arch style */}
        <div className="mb-16 lg:mb-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Large featured image with ornamental frame */}
            <div className="lg:col-span-7">
              <div className="relative group cursor-pointer">
                {/* Main project frame */}
                <div className="relative w-full aspect-[16/10] border-4 border-primary bg-card/80 overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Project Cathedral"
                    className="w-full h-full object-cover grayscale opacity-50 mix-blend-luminosity transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <GothicCross size="lg" className="text-primary w-48 h-64" />
                  </div>
                  {/* Corner ornaments */}
                  <CornerOrnament position="top-left" className="absolute top-2 left-2 text-primary w-10 h-10 z-10" />
                  <CornerOrnament position="top-right" className="absolute top-2 right-2 text-primary w-10 h-10 z-10" />
                  <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 text-primary w-10 h-10 z-10" />
                  <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 text-primary w-10 h-10 z-10" />
                  
                  {/* Inner decorative frame */}
                  <div className="absolute inset-6 border-2 border-primary/30 transition-all duration-300 group-hover:border-accent group-hover:inset-4 pointer-events-none"></div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                       style={{ boxShadow: 'inset 0 0 60px rgba(193, 18, 31, 0.3)' }}></div>
                </div>
                
                {/* External glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                     style={{ boxShadow: '0 0 40px rgba(255, 42, 42, 0.4)' }}></div>
              </div>
            </div>
            
            {/* Project info */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              {/* Title - Gothic */}
              <div className="space-y-2" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                <h3 className="text-3xl font-black text-foreground uppercase tracking-tighter">
                  Interfaces <span className="text-primary italic">Modernas</span>
                </h3>
                <p className="text-sm font-medium tracking-widest text-primary/80 uppercase">Desarrollo Frontend & UX</p>
              </div>
              
              {/* Small divider */}
              <svg className="w-32 h-6" viewBox="0 0 120 20" fill="none">
                <path d="M0 10 L50 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
                <circle cx="60" cy="10" r="3" fill="currentColor" className="text-primary"/>
                <path d="M70 10 L120 10" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
              </svg>
              
              {/* Description */}
              <div className="space-y-4 text-foreground/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p>Desarrollo de interfaces web modernas con un enfoque obsesivo en la experiencia del usuario y la fluidez interactiva. Integración de lógica compleja con estética minimalista.</p>
                <p className="text-xs font-bold text-primary uppercase tracking-widest italic">Rol: Diseño & Desarrollo</p>
              </div>
              
              {/* Tags with gothic style */}
              <div className="flex gap-2 flex-wrap">
                {["React", "TypeScript", "Tailwind", "Framer Motion"].map((tag) => (
                  <span key={tag} className="px-3 py-1 border border-primary/40 text-[10px] font-bold tracking-widest uppercase text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Action button */}
              <button className="relative px-8 py-3 border-2 border-primary text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 group overflow-hidden">
                <span className="relative z-10">Ver Proyecto</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ boxShadow: '0 0 30px rgba(193, 18, 31, 0.6)' }}></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Grid of projects with decorative cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Project Card 1 */}
          <div className="group cursor-pointer">
            <div className="relative mb-6">
              <div className="relative w-full aspect-[4/3] border-2 border-primary/40 bg-card/50 group-hover:border-primary transition-all duration-300">
                <CornerOrnament position="top-left" className="absolute top-1 left-1 text-primary/30 w-8 h-8" />
                <CornerOrnament position="bottom-right" className="absolute bottom-1 right-1 text-primary/30 w-8 h-8" />
                <div className="absolute inset-4 border border-primary/20 group-hover:border-primary/40 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                   style={{ boxShadow: '0 0 30px rgba(193, 18, 31, 0.3)' }}></div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                <div className="w-3/4 h-0.5 bg-primary"></div>
                <div className="w-1/2 h-0.5 bg-primary/60"></div>
              </div>
              <div className="space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                <div className="w-full h-px bg-foreground/20"></div>
                <div className="w-5/6 h-px bg-foreground/20"></div>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 border border-primary/40 text-xs">
                  <div className="w-12 h-px bg-foreground/40"></div>
                </div>
                <div className="px-3 py-1.5 border border-primary/40 text-xs">
                  <div className="w-16 h-px bg-foreground/40"></div>
                </div>
                <div className="px-3 py-1.5 border border-primary/40 text-xs">
                  <div className="w-12 h-px bg-foreground/40"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Card 2 - Alternate style */}
          <div className="group cursor-pointer">
            <div className="relative mb-6">
              <div className="relative w-full aspect-[4/3] border-4 border-primary bg-background group-hover:bg-card transition-all duration-300">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <GothicCross className="text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
                </div>
                <div className="absolute inset-6 border-2 border-primary/30"></div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                   style={{ boxShadow: '0 0 30px rgba(193, 18, 31, 0.3)' }}></div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                <div className="w-3/4 h-0.5 bg-primary"></div>
                <div className="w-1/2 h-0.5 bg-primary/60"></div>
              </div>
              <div className="space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                <div className="w-full h-px bg-foreground/20"></div>
                <div className="w-5/6 h-px bg-foreground/20"></div>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 border border-primary/40">
                  <div className="w-12 h-px bg-foreground/40"></div>
                </div>
                <div className="px-3 py-1.5 border border-primary/40">
                  <div className="w-16 h-px bg-foreground/40"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Card 3 */}
          <div className="group cursor-pointer">
            <div className="relative mb-6">
              <div className="relative w-full aspect-[4/3] border-2 border-primary bg-primary/5 group-hover:bg-primary/10 transition-all duration-300">
                <CornerOrnament position="top-right" className="absolute top-1 right-1 text-primary/30 w-8 h-8" />
                <CornerOrnament position="bottom-left" className="absolute bottom-1 left-1 text-primary/30 w-8 h-8" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ boxShadow: 'inset 0 0 40px rgba(193, 18, 31, 0.2)' }}></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                <div className="w-3/4 h-0.5 bg-primary"></div>
                <div className="w-1/2 h-0.5 bg-primary/60"></div>
              </div>
              <div className="space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                <div className="w-full h-px bg-foreground/20"></div>
                <div className="w-5/6 h-px bg-foreground/20"></div>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 border border-primary/40">
                  <div className="w-16 h-px bg-foreground/40"></div>
                </div>
                <div className="px-3 py-1.5 border border-primary/40">
                  <div className="w-12 h-px bg-foreground/40"></div>
                </div>
                <div className="px-3 py-1.5 border border-primary/40">
                  <div className="w-20 h-px bg-foreground/40"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Card 4 */}
          <div className="group cursor-pointer">
            <div className="relative mb-6">
              <div className="relative w-full aspect-[4/3] border-2 border-primary/40 bg-card group-hover:border-accent transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border-2 border-primary/20 rotate-45 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300"></div>
                </div>
                <CornerOrnament position="top-left" className="absolute top-1 left-1 text-primary/20 w-6 h-6" />
                <CornerOrnament position="top-right" className="absolute top-1 right-1 text-primary/20 w-6 h-6" />
                <CornerOrnament position="bottom-left" className="absolute bottom-1 left-1 text-primary/20 w-6 h-6" />
                <CornerOrnament position="bottom-right" className="absolute bottom-1 right-1 text-primary/20 w-6 h-6" />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                   style={{ boxShadow: '0 0 30px rgba(255, 42, 42, 0.25)' }}></div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                <div className="w-3/4 h-0.5 bg-primary"></div>
                <div className="w-1/2 h-0.5 bg-primary/60"></div>
              </div>
              <div className="space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                <div className="w-full h-px bg-foreground/20"></div>
                <div className="w-5/6 h-px bg-foreground/20"></div>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 border border-primary/40">
                  <div className="w-12 h-px bg-foreground/40"></div>
                </div>
                <div className="px-3 py-1.5 border border-primary/40">
                  <div className="w-16 h-px bg-foreground/40"></div>
                </div>
                <div className="px-3 py-1.5 border border-primary/40">
                  <div className="w-14 h-px bg-foreground/40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
