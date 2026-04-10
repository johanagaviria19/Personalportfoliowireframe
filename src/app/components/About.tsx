import { CornerOrnament, DividerOrnament, GothicCross } from "./gothic/GothicOrnaments";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 px-6 lg:px-12 bg-card/30">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.015]" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)' }}></div>
      
      <div className="max-w-[1400px] mx-auto relative">
        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image placeholder with ornamental frame */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main frame */}
              <div className="relative w-full aspect-[4/5] border-4 border-primary bg-background/80 overflow-hidden flex items-center justify-center">
                <div 
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-1000"
                  style={{ backgroundImage: 'url("/Perfil.png")' }}
                  aria-label="Code Aesthetic"
                ></div>
                {/* Corner ornaments */}
                <CornerOrnament position="top-left" className="absolute top-2 left-2 text-primary w-12 h-12" />
                <CornerOrnament position="top-right" className="absolute top-2 right-2 text-primary w-12 h-12" />
                <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 text-primary w-12 h-12" />
                <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 text-primary w-12 h-12" />
                
                {/* Inner decorative borders */}
                <div className="absolute inset-8 border-2 border-primary/40 pointer-events-none"></div>
                <div className="absolute inset-12 border border-primary/20 pointer-events-none"></div>
              </div>
              
              {/* Small accent block with cross */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary border-2 border-accent hidden lg:flex items-center justify-center"
                   style={{ boxShadow: '0 0 30px rgba(193, 18, 31, 0.5)' }}>
                <GothicCross size="sm" className="text-primary-foreground" />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Section label with ornament */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary/60"></div>
              <div className="w-32 h-0.5 bg-primary" style={{ fontFamily: "'Montserrat', sans-serif" }}></div>
              <div className="w-12 h-px bg-primary/60"></div>
            </div>
            
            {/* Title - Gothic font */}
            <div className="space-y-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              <h2 className="text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight">
                Sobre <span className="text-primary italic">mí</span>
              </h2>
            </div>
            
            {/* Divider ornament */}
            <div className="py-2">
              <DividerOrnament className="w-48 h-8 text-primary" />
            </div>
            
            {/* Body text lines */}
            <div className="space-y-4 pt-4 text-foreground/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p className="text-lg">
                Soy ingeniera de software y diseñadora apasionada por crear experiencias digitales que combinan lógica, estética y emoción. Me especializo en transformar ideas en productos funcionales con identidad visual fuerte, cuidando tanto la estructura del código como la narrativa visual.
              </p>
              <p>
                Mi enfoque se centra en el equilibrio entre tecnología y diseño, buscando siempre soluciones innovadoras, intuitivas y visualmente impactantes. Disfruto trabajar en proyectos donde puedo explorar creatividad, detalle y significado.
              </p>
            </div>  
            
            {/* Hybrid identity emphasis - Two ornamental boxes */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              {/* Engineering side */}
              <div className="flex-1 relative border-2 border-primary/60 bg-background/50 p-6 group hover:border-primary transition-all duration-300">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ boxShadow: 'inset 0 0 30px rgba(193, 18, 31, 0.2)' }}></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 border-2 border-primary/40 bg-card mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 border border-primary rotate-45"></div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-primary uppercase tracking-widest text-sm">Lógica & Estructura</h4>
                    <p className="text-xs text-foreground/60 leading-tight">Arquitectura de software escalable y código limpio.</p>
                  </div>
                </div>
                <CornerOrnament position="top-right" className="absolute top-1 right-1 w-6 h-6 text-primary/30" />
              </div>
              
              {/* Creative side */}
              <div className="flex-1 relative border-2 border-primary bg-primary/95 p-6 group hover:bg-accent transition-all duration-300"
                   style={{ boxShadow: '0 0 30px rgba(193, 18, 31, 0.3)' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 border-2 border-primary-foreground/40 mb-4 flex items-center justify-center">
                    <GothicCross size="sm" className="text-primary-foreground w-8 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-primary-foreground uppercase tracking-widest text-sm">Estética & Narrativa</h4>
                    <p className="text-xs text-primary-foreground/70 leading-tight">Diseño visual con propósito y emoción.</p>
                  </div>
                </div>
                <CornerOrnament position="bottom-left" className="absolute bottom-1 left-1 w-6 h-6 text-primary-foreground/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
