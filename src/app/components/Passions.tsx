import { GothicCross, BatOrnament, CornerOrnament, DividerOrnament } from "./gothic/GothicOrnaments";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Passions() {
  return (
    <section id="passions" className="relative py-24 lg:py-32 px-6 lg:px-12 bg-primary/95 text-primary-foreground overflow-hidden"
             style={{ boxShadow: 'inset 0 10px 60px rgba(0,0,0,0.5)' }}>
      {/* Background gothic pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M50 10 L60 30 L80 30 L65 45 L70 65 L50 50 L30 65 L35 45 L20 30 L40 30 Z" fill="%23ffffff" fill-opacity="0.1"/%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-[1400px] mx-auto relative">
        {/* Section header */}
        <div className="mb-16 lg:mb-24 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary-foreground/40"></div>
            <GothicCross className="text-primary-foreground" />
            <div className="w-12 h-px bg-primary-foreground/40"></div>
          </div>
          <div className="space-y-3" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            <h2 className="text-4xl lg:text-5xl font-black text-primary-foreground uppercase tracking-widest">
              Pasiones <span className="italic">&</span> Intereses
            </h2>
          </div>
          <DividerOrnament className="mx-auto mt-8 text-primary-foreground/50" />
        </div>
        
        {/* Dynamic asymmetric layout with ornamental boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Large block 1 - Designing and Drawing */}
          <div className="col-span-2 row-span-2 group">
            <div className="relative h-full min-h-[420px] border-4 border-primary-foreground/30 bg-background/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-accent">
              <ImageWithFallback 
                src="/Desing.jpg" 
                alt="Diseñar y Dibujar"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700"
              />
              <CornerOrnament position="top-left" className="absolute top-2 left-2 text-primary-foreground/40 w-8 h-8 z-10" />
              <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 text-primary-foreground/40 w-8 h-8 z-10" />
              <div className="absolute inset-6 border-2 border-primary-foreground/15 group-hover:border-primary-foreground/25 transition-all duration-300 pointer-events-none"></div>
              <div className="absolute inset-0 bg-black/10"></div>

              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 border-2 border-primary-foreground/40 bg-black/25 flex items-center justify-center">
                    <span className="text-xl font-black tracking-widest">D</span>
                  </div>
                  <div className="h-px flex-1 bg-primary-foreground/25"></div>
                </div>
                <div className="bg-black/35 border border-primary-foreground/20 p-5 space-y-2">
                  <h3 className="text-2xl font-black uppercase tracking-widest" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    Diseñar & Dibujar
                  </h3>
                  <p className="text-sm text-primary-foreground/85 leading-relaxed italic" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Del boceto al hechizo visual.
                  </p>
                </div>
              </div>
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                   style={{ boxShadow: 'inset 0 0 60px rgba(193, 18, 31, 0.4)' }}></div>
            </div>
          </div>
          
          {/* Small block 1 - Piano */}
          <div className="col-span-1 group">
            <div className="relative aspect-square border-4 border-primary-foreground/30 bg-background/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-accent">
              <ImageWithFallback 
                src="/Piano.jpg" 
                alt="Practicar Piano"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
              />
              <CornerOrnament position="top-left" className="absolute top-2 left-2 text-primary-foreground/35 w-7 h-7 z-10" />
              <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 text-primary-foreground/35 w-7 h-7 z-10" />
              <div className="absolute inset-4 border border-primary-foreground/15 group-hover:border-primary-foreground/25 transition-all duration-300 pointer-events-none"></div>
              <div className="absolute inset-0 bg-black/10"></div>

              <div className="relative z-10 h-full flex flex-col justify-end p-4">
                <div className="bg-black/35 border border-primary-foreground/20 p-3 space-y-1.5">
                  <h3 className="text-sm font-black uppercase tracking-widest" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    Piano
                  </h3>
                  <p className="text-[11px] text-primary-foreground/85 leading-snug italic" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Ritmo que ordena el caos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Small block 2 - Aprender Violin */}
          <div className="col-span-1 group">
            <div className="relative aspect-square border-4 border-primary-foreground/30 bg-background/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-accent">
              <ImageWithFallback 
                src="/Violin.jpg" 
                alt="Aprender Violín"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
              />
              <CornerOrnament position="top-left" className="absolute top-2 left-2 text-primary-foreground/35 w-7 h-7 z-10" />
              <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 text-primary-foreground/35 w-7 h-7 z-10" />
              <div className="absolute inset-4 border border-primary-foreground/15 group-hover:border-primary-foreground/25 transition-all duration-300 pointer-events-none"></div>
              <div className="absolute inset-0 bg-black/10"></div>

              <div className="relative z-10 h-full flex flex-col justify-end p-4">
                <div className="bg-black/35 border border-primary-foreground/20 p-3 space-y-1.5">
                  <h3 className="text-sm font-black uppercase tracking-widest" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    Violín
                  </h3>
                  <p className="text-[11px] text-primary-foreground/85 leading-snug italic" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Cuerdas que narran silencio.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Medium block - Gymnastics */}
          <div className="col-span-2 md:col-span-2 group">
            <div className="relative aspect-[2/1] border-4 border-primary-foreground/30 bg-background/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-accent">
              <ImageWithFallback 
                src="/GYM.jpg" 
                alt="Gimnasia"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
              />
              <CornerOrnament position="top-left" className="absolute top-2 left-2 text-primary-foreground/35 w-8 h-8 z-10" />
              <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 text-primary-foreground/35 w-8 h-8 z-10" />
              <div className="absolute inset-6 border-2 border-primary-foreground/15 group-hover:border-primary-foreground/25 transition-all duration-300 pointer-events-none"></div>
              <div className="absolute inset-0 bg-black/10"></div>

              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 border-2 border-primary-foreground/40 bg-black/25 flex items-center justify-center">
                    <span className="text-lg font-black tracking-widest">G</span>
                  </div>
                  <div className="h-px flex-1 bg-primary-foreground/25"></div>
                </div>
                <div className="bg-black/35 border border-primary-foreground/20 p-4 space-y-2">
                  <h3 className="text-xl font-black uppercase tracking-widest" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    Gimnasia
                  </h3>
                  <p className="text-sm text-primary-foreground/85 leading-snug italic" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Fuerza que afina el cuerpo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Small block 3 - Art */}
          <div className="col-span-2 md:col-span-4 group">
            <div className="relative aspect-[2/1] md:aspect-[4/1] border-4 border-primary-foreground/30 bg-background/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-accent">
              <ImageWithFallback 
                src="/Leer.jpg" 
                alt="Leer"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
              />
              <CornerOrnament position="top-left" className="absolute top-2 left-2 text-primary-foreground/35 w-8 h-8 z-10" />
              <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 text-primary-foreground/35 w-8 h-8 z-10" />
              <div className="absolute inset-6 border-2 border-primary-foreground/15 group-hover:border-primary-foreground/25 transition-all duration-300 pointer-events-none"></div>
              <div className="absolute inset-0 bg-black/10"></div>

              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 border-2 border-primary-foreground/40 bg-black/25 flex items-center justify-center">
                    <span className="text-lg font-black tracking-widest">L</span>
                  </div>
                  <div className="h-px flex-1 bg-primary-foreground/25"></div>
                </div>
                <div className="bg-black/35 border border-primary-foreground/20 p-4 space-y-2">
                  <h3 className="text-xl font-black uppercase tracking-widest" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    Leer
                  </h3>
                  <p className="text-sm text-primary-foreground/85 leading-snug italic" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Ideas que iluminan en silencio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating bat ornaments */}
        <div className="absolute top-20 right-10 hidden lg:block">
          <BatOrnament className="text-accent/30 w-12 h-8 animate-pulse" />
        </div>
        <div className="absolute bottom-20 left-10 hidden lg:block">
          <BatOrnament className="text-primary-foreground/20 w-10 h-6" />
        </div>
      </div>
    </section>
  );
}
