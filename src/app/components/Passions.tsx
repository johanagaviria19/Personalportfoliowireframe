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
              Pasiones <span className="italic">&</span> Sombras
            </h2>
          </div>
          <DividerOrnament className="mx-auto mt-8 text-primary-foreground/50" />
        </div>
        
        {/* Dynamic asymmetric layout with ornamental boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
          {/* Large block 1 - Designing and Drawing */}
          <div className="col-span-2 row-span-2 group">
            <div className="relative h-full border-4 border-accent bg-background/5 backdrop-blur-sm overflow-hidden flex flex-col justify-end p-8 transition-all duration-500 hover:bg-background/20">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop" 
                alt="Diseñar y Dibujar"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
              />
              <CornerOrnament position="top-left" className="absolute top-2 left-2 text-accent/60 w-8 h-8 z-10" />
              <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 text-accent/60 w-8 h-8 z-10" />
              
              <div className="relative z-10 space-y-4">
                <div className="w-16 h-16 border-4 border-accent/40 flex items-center justify-center bg-background/40">
                  <div className="w-8 h-8 border-2 border-accent rotate-45 flex items-center justify-center">
                    <span className="text-xl font-bold tracking-tighter">D</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black uppercase tracking-widest" style={{ fontFamily: "'Cinzel Decorative', serif" }}>Diseñar & Dibujar</h3>
                  <p className="text-sm text-primary-foreground/90 leading-relaxed italic bg-black/20 p-2">"El trazo es la materialización del pensamiento oscuro."</p>
                </div>
              </div>
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                   style={{ boxShadow: 'inset 0 0 60px rgba(193, 18, 31, 0.4)' }}></div>
            </div>
          </div>
          
          {/* Small block 1 - Piano */}
          <div className="col-span-1 group">
            <div className="relative aspect-square border-2 border-primary-foreground/30 bg-background/10 backdrop-blur-sm overflow-hidden flex flex-col justify-end p-4 hover:border-accent transition-all duration-300">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1520527053377-4710dbf6c0fa?q=80&w=1000&auto=format&fit=crop" 
                alt="Piano"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-all duration-500"
              />
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] bg-black/40 p-1 inline-block">Piano</p>
              </div>
            </div>
          </div>
          
          {/* Small block 2 - Violin */}
          <div className="col-span-1 group">
            <div className="relative aspect-square border-4 border-primary-foreground bg-primary-foreground/10 overflow-hidden flex flex-col justify-end p-4 hover:bg-primary-foreground/20 transition-all duration-300">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?q=80&w=1000&auto=format&fit=crop" 
                alt="Violín"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-all duration-500"
              />
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] bg-black/40 p-1 inline-block">Violín</p>
              </div>
            </div>
          </div>
          
          {/* Medium block - Gymnastics */}
          <div className="col-span-2 md:col-span-2 group">
            <div className="relative h-full border-2 border-accent/60 bg-background/5 backdrop-blur-sm overflow-hidden flex flex-col justify-end p-8 hover:border-accent transition-all duration-300">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1000&auto=format&fit=crop" 
                alt="Gimnasia"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-all duration-500"
              />
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-4 border-primary-foreground/30 flex items-center justify-center bg-black/20">
                    <span className="text-lg font-black">G</span>
                  </div>
                  <BatOrnament className="text-accent w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest" style={{ fontFamily: "'Cinzel Decorative', serif" }}>Gimnasia</h3>
                <p className="text-xs text-primary-foreground/80 leading-tight bg-black/20 p-1">Fuerza y equilibrio en la penumbra del esfuerzo.</p>
              </div>
            </div>
          </div>
          
          {/* Small block 3 - Art */}
          <div className="col-span-1 group">
            <div className="relative aspect-square border-2 border-accent bg-accent/10 overflow-hidden flex flex-col justify-end p-4 hover:bg-accent/20 transition-all duration-300">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1515405299443-f71bb40409f5?q=80&w=1000&auto=format&fit=crop" 
                alt="Arte"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-all duration-500"
              />
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] bg-black/40 p-1 inline-block">Arte Oscuro</p>
              </div>
            </div>
          </div>
          
          {/* Small block 4 - Symbology */}
          <div className="col-span-1 group">
            <div className="relative aspect-square border-4 border-primary-foreground/40 bg-background/10 overflow-hidden flex flex-col justify-end p-4 hover:border-primary-foreground transition-all duration-300">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1518131394553-c4031f00882e?q=80&w=1000&auto=format&fit=crop" 
                alt="Simbología"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-all duration-500"
              />
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] bg-black/40 p-1 inline-block">Simbología</p>
              </div>
            </div>
          </div>

          {/* Medium block - Aesthetic (Moved below Gymnastics and sized properly) */}
          <div className="col-span-2 md:col-span-2 group">
            <div className="relative h-full border-2 border-primary-foreground/30 bg-background/5 backdrop-blur-sm p-6 hover:border-accent transition-all duration-300 overflow-hidden flex flex-col justify-center">
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 border-4 border-accent/60 flex shrink-0 items-center justify-center bg-black/20">
                  <GothicCross className="text-accent w-6 h-6" />
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="text-[10px] font-black uppercase tracking-widest" style={{ fontFamily: "'Cinzel Decorative', serif" }}>Cultura & Estética</h4>
                  <div className="w-full h-0.5 bg-primary-foreground"></div>
                  <div className="w-2/3 h-px bg-primary-foreground/60"></div>
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
