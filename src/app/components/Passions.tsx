import { GothicCross, BatOrnament, CornerOrnament, DividerOrnament } from "./gothic/GothicOrnaments";

export function Passions() {
  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-primary/95 text-primary-foreground overflow-hidden"
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
          {/* Large block 1 - Music */}
          <div className="col-span-2 row-span-2">
            <div className="relative h-full border-4 border-accent bg-background/5 backdrop-blur-sm p-8 flex flex-col justify-between group hover:bg-background/10 transition-all duration-300">
              <CornerOrnament position="top-left" className="absolute top-2 left-2 text-accent/60 w-8 h-8" />
              <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 text-accent/60 w-8 h-8" />
              
              <div className="w-20 h-20 border-4 border-accent/40 flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-accent rotate-45 flex items-center justify-center">
                  <span className="text-2xl font-bold tracking-tighter">D</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-widest" style={{ fontFamily: "'Cinzel Decorative', serif" }}>Estética Digital</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed italic">"El diseño visual es el lenguaje del alma en el mundo binario."</p>
                <div className="w-1/2 h-px bg-primary-foreground/40"></div>
              </div>
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ boxShadow: 'inset 0 0 40px rgba(255, 42, 42, 0.2)' }}></div>
            </div>
          </div>
          
          {/* Small block 1 - Art */}
          <div className="col-span-1">
            <div className="aspect-square border-2 border-primary-foreground/30 bg-background/10 backdrop-blur-sm p-6 flex flex-col justify-between group hover:border-accent transition-all duration-300">
              <div className="w-12 h-12 border-2 border-primary-foreground/40 flex items-center justify-center">
                <GothicCross size="sm" className="w-6 h-8 text-accent" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Arte Oscuro</p>
            </div>
          </div>
          
          {/* Small block 2 - Literature */}
          <div className="col-span-1">
            <div className="aspect-square border-4 border-primary-foreground bg-primary-foreground/10 p-6 flex flex-col justify-between group hover:bg-primary-foreground/20 transition-all duration-300">
              <div className="w-12 h-12 bg-accent/20 border-2 border-accent flex items-center justify-center">
                <div className="w-6 h-6 bg-accent rotate-45"></div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground">Simbología</p>
            </div>
          </div>
          
          {/* Medium block - Architecture */}
          <div className="col-span-2 md:col-span-2">
            <div className="h-full border-2 border-accent/60 bg-background/5 backdrop-blur-sm p-8 flex flex-col justify-between group hover:border-accent transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 border-4 border-primary-foreground/30 flex items-center justify-center">
                  <div className="w-full h-full border-2 border-accent/40 -translate-x-2 -translate-y-2 flex items-center justify-center bg-background/20">
                    <span className="text-xl font-black">T</span>
                  </div>
                </div>
                <BatOrnament className="text-accent w-12 h-12" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold uppercase tracking-widest" style={{ fontFamily: "'Cinzel Decorative', serif" }}>Cultura Visual</h3>
                <p className="text-xs text-primary-foreground/60 leading-tight">Explorando la unión entre tecnología avanzada y estética alternativa.</p>
              </div>
            </div>
          </div>
          
          {/* Small block 3 */}
          <div className="col-span-1">
            <div className="aspect-square border-2 border-accent bg-accent/10 p-6 flex flex-col justify-between group hover:bg-accent/20 transition-all duration-300"
                 style={{ boxShadow: '0 0 20px rgba(255, 42, 42, 0.2)' }}>
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-2 border-primary-foreground/40 rotate-45"></div>
                <div className="absolute inset-2 border border-accent"></div>
              </div>
              <div className="w-3/4 h-px bg-primary-foreground"></div>
            </div>
          </div>
          
          {/* Small block 4 */}
          <div className="col-span-1">
            <div className="aspect-square border-4 border-primary-foreground/40 bg-background/10 p-6 flex flex-col justify-between">
              <div className="w-12 h-12 flex items-center justify-center">
                <CornerOrnament position="top-left" className="text-accent w-10 h-10" />
              </div>
              <div className="w-3/4 h-px bg-primary-foreground/60"></div>
            </div>
          </div>
          
          {/* Wide block */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <div className="border-2 border-primary-foreground/30 bg-background/5 backdrop-blur-sm p-8 group hover:border-accent transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 border-4 border-accent/60 flex items-center justify-center">
                  <GothicCross className="text-accent" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="w-2/3 h-0.5 bg-primary-foreground"></div>
                  <div className="w-1/2 h-px bg-primary-foreground/60"></div>
                </div>
                <BatOrnament className="text-primary-foreground/40 group-hover:text-accent transition-colors duration-300" />
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
