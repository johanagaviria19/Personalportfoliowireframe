import { 
  CathedralArch, 
  CornerOrnament, 
  DividerOrnament, 
  GothicEmblem, 
  DanglingOrnament, 
  FiligreeCorner, 
  SideOrnamentBar,
  GothicCross
} from "./gothic/GothicOrnaments";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-background flex items-center 
      mt-[64px] sm:mt-[80px] lg:mt-[82px]
      min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-82px)]
      pt-6 pb-10 lg:pt-16 lg:pb-20">
      
      {/* Background texture and noise */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")' }}></div>
      
      {/* 
          ESQUINAS Y MARCOS (Separación explícita)
          --------------------------------------
      */}
      
      {/* ORNAMENTOS MÓVIL (Hasta 1023px) */}
      <div className="lg:hidden absolute inset-0 pointer-events-none z-50">
        <FiligreeCorner position="top-left" className="absolute top-4 left-4 scale-90 opacity-60 text-primary" />
        <FiligreeCorner position="top-right" className="absolute top-4 right-4 scale-90 opacity-60 text-primary" />
        <FiligreeCorner position="bottom-left" className="absolute bottom-4 left-4 scale-90 opacity-60 text-primary" />
        <FiligreeCorner position="bottom-right" className="absolute bottom-4 right-4 scale-90 opacity-60 text-primary" />
      </div>

      {/* ORNAMENTOS ESCRITORIO (Desde 1024px+) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-50">
        {/* Esquinas superiores más bajas para que se vean debajo de la barra */}
        <FiligreeCorner position="top-left" className="absolute top-16 left-16 scale-[1.8] opacity-90 text-primary drop-shadow-[0_0_15px_rgba(193,18,31,0.5)]" />
        <FiligreeCorner position="top-right" className="absolute top-16 right-16 scale-[1.8] opacity-90 text-primary drop-shadow-[0_0_15px_rgba(193,18,31,0.5)]" />
        
        {/* Esquinas inferiores */}
        <FiligreeCorner position="bottom-left" className="absolute bottom-10 left-16 scale-[1.8] opacity-90 text-primary drop-shadow-[0_0_15px_rgba(193,18,31,0.5)]" />
        <FiligreeCorner position="bottom-right" className="absolute bottom-10 right-16 scale-[1.8] opacity-90 text-primary drop-shadow-[0_0_15px_rgba(193,18,31,0.5)]" />

        {/* Barras laterales de escritorio */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 h-1/3 opacity-30">
          <SideOrnamentBar side="left" className="text-primary h-full" />
        </div>
        <div className="absolute right-12 top-1/2 -translate-y-1/2 h-1/3 opacity-30">
          <SideOrnamentBar side="right" className="text-primary h-full" />
        </div>
      </div>

      {/* 
          CONTENIDO CENTRAL
          -----------------
      */}
      <div className="w-full max-w-[1600px] mx-auto relative z-10 px-4 sm:px-12 lg:px-24">
        <div className="flex justify-center items-center w-full">
          <div className="w-full max-w-[1300px]">
            <div className="relative group">
              {/* Brillo del arco (más intenso en escritorio) */}
              <div className="absolute inset-0 opacity-10 lg:opacity-20 pointer-events-none"
                   style={{ 
                     background: 'radial-gradient(circle at 50% 30%, rgba(193, 18, 31, 0.4) 0%, transparent 75%)',
                     filter: 'blur(50px)'
                   }}></div>
              
              <CathedralArch className="min-h-[380px] sm:min-h-[450px] lg:min-h-[600px]">
                <div className="flex flex-col items-center justify-center text-center px-6 sm:px-16 lg:px-48 relative -mt-6 sm:-mt-10 lg:-mt-12">
                  
                  {/* Emblema superior (Ajustado por pantalla) */}
                  <div className="flex flex-col items-center -mt-8 sm:-mt-12 lg:-mt-10 mb-6 scale-[0.7] sm:scale-90 lg:scale-110">
                    <GothicEmblem className="text-primary" size="md" />
                    <DanglingOrnament className="text-primary opacity-50 -mt-2" />
                  </div>
                  
                  {/* Nombre Principal */}
                  <div className="space-y-4 lg:space-y-6 max-w-full" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
                      JOHANA <br className="sm:hidden" />
                      <span className="text-primary sm:ml-4">CATALINA</span>
                    </h1>
                    
                    {/* Línea decorativa */}
                    <div className="flex items-center justify-center gap-4 opacity-40">
                      <div className="h-px w-8 sm:w-16 lg:w-32 bg-gradient-to-r from-transparent to-primary"></div>
                      <div className="w-1.5 h-1.5 bg-primary rotate-45"></div>
                      <div className="h-px w-8 sm:w-16 lg:w-32 bg-gradient-to-l from-transparent to-primary"></div>
                    </div>

                    {/* Título Profesional */}
                    <p className="text-[10px] sm:text-xs md:text-base lg:text-xl font-medium tracking-[0.15em] sm:tracking-[0.25em] text-primary/90 uppercase px-4">
                      Ingeniera de Software 
                      <span className="mx-2 sm:mx-4 text-primary/30">|</span>
                      Diseñadora Creativa
                    </p>
                  </div>
                  
                  {/* Eslogan */}
                  <div className="mt-6 lg:mt-10 max-w-[280px] sm:max-w-xl lg:max-w-3xl px-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <p className="text-[10px] sm:text-xs lg:text-xl italic text-foreground/70 leading-relaxed font-light">
                      “Donde el código se encuentra con la estética y lo funcional se vuelve arte.”
                    </p>
                  </div>
                  
                  {/* Botones de Acción */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 sm:mt-12 lg:mt-16 w-full sm:w-auto px-6 sm:px-0">
                    <a href="#projects" className="w-full sm:w-auto relative px-8 sm:px-12 lg:px-20 py-3 lg:py-5 border-2 border-primary bg-primary text-primary-foreground font-bold tracking-[0.2em] transition-all duration-500 group overflow-hidden uppercase text-[10px] lg:text-sm text-center">
                      <span className="relative z-10">Ver proyectos</span>
                      <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                           style={{ boxShadow: '0 0 40px rgba(193, 18, 31, 0.6)' }}></div>
                    </a>
                    
                    <a href="/CV.pdf" download className="w-full sm:w-auto relative px-8 sm:px-12 lg:px-20 py-3 lg:py-5 border-2 border-primary/40 hover:border-primary bg-transparent text-foreground font-bold tracking-[0.2em] transition-all duration-500 group uppercase text-[10px] lg:text-sm overflow-hidden text-center">
                      <span className="relative z-10">Descargar CV</span>
                      <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </a>
                  </div>
                </div>
              </CathedralArch>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
