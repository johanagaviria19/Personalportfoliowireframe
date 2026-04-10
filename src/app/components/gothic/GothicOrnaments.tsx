import React from "react";

export function CornerOrnament({ className = "", position = "top-left" }: { className?: string, position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const rotation = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90"
  }[position];

  return (
    <svg className={`w-16 h-16 ${rotation} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5 L5 35 M5 5 L35 5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="15" cy="15" r="3" fill="currentColor"/>
      <path d="M40 5 L48 8 L40 11 M5 40 L8 48 L11 40" stroke="currentColor" strokeWidth="1"/>
      <path d="M25 5 Q28 8 25 12 Q22 8 25 5 M5 25 Q8 28 12 25 Q8 22 5 25" fill="currentColor"/>
      <circle cx="5" cy="5" r="2" fill="currentColor"/>
      <path d="M50 5 L55 5 L52.5 10 Z M5 50 L5 55 L10 52.5 Z" fill="currentColor" opacity="0.6"/>
    </svg>
  );
}

export function DividerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-64 h-12 ${className}`} viewBox="0 0 300 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 25 L130 25" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M170 25 L280 25" stroke="currentColor" strokeWidth="1.5"/>
      
      {/* Center ornament */}
      <circle cx="150" cy="25" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="150" cy="25" r="4" fill="currentColor"/>
      
      <path d="M140 25 L138 20 L136 25 L138 30 Z" fill="currentColor"/>
      <path d="M160 25 L162 20 L164 25 L162 30 Z" fill="currentColor"/>
      
      {/* Side decorations */}
      <path d="M25 25 Q30 20 35 25 Q30 30 25 25 M265 25 Q270 20 275 25 Q270 30 265 25" fill="currentColor"/>
      
      <circle cx="50" cy="25" r="2" fill="currentColor"/>
      <circle cx="70" cy="25" r="2" fill="currentColor"/>
      <circle cx="90" cy="25" r="2" fill="currentColor"/>
      <circle cx="110" cy="25" r="2" fill="currentColor"/>
      
      <circle cx="190" cy="25" r="2" fill="currentColor"/>
      <circle cx="210" cy="25" r="2" fill="currentColor"/>
      <circle cx="230" cy="25" r="2" fill="currentColor"/>
      <circle cx="250" cy="25" r="2" fill="currentColor"/>
    </svg>
  );
}

export function GothicEmblem({ className = "", size = "md" }: { className?: string, size?: "sm" | "md" | "lg" }) {
  const sizeClass = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-32 h-32"
  }[size];

  return (
    <svg className={`${sizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central Star/Cross */}
      <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" fill="currentColor" />
      <path d="M50 20 L53 47 L80 50 L53 53 L50 80 L47 53 L20 50 L47 47 Z" fill="currentColor" opacity="0.2" />
      
      {/* Outer Circle with Filigree */}
      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.6" />
      
      {/* Filigree accents */}
      <path d="M50 10 Q60 5 70 15 M50 10 Q40 5 30 15" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M50 90 Q60 95 70 85 M50 90 Q40 95 30 85" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M90 50 Q95 60 85 70 M90 50 Q95 40 85 30" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M10 50 Q5 60 15 70 M10 50 Q5 40 15 30" stroke="currentColor" strokeWidth="1" fill="none" />
      
      {/* Small dots */}
      <circle cx="50" cy="5" r="1.5" fill="currentColor" />
      <circle cx="50" cy="95" r="1.5" fill="currentColor" />
      <circle cx="5" cy="50" r="1.5" fill="currentColor" />
      <circle cx="95" cy="50" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function DanglingOrnament({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-24 h-32 ${className}`} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central Chain */}
      <line x1="50" y1="0" x2="50" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M45 45 L50 60 L55 45 L50 30 Z" fill="currentColor" />
      <line x1="50" y1="60" x2="50" y2="100" stroke="currentColor" strokeWidth="1" />
      <path d="M47 100 L50 115 L53 100 L50 90 Z" fill="currentColor" />
      
      {/* Side Chains */}
      <line x1="30" y1="10" x2="30" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      <path d="M28 65 L30 75 L32 65 L30 60 Z" fill="currentColor" opacity="0.8" />
      
      <line x1="70" y1="10" x2="70" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      <path d="M68 65 L70 75 L72 65 L70 60 Z" fill="currentColor" opacity="0.8" />
      
      {/* Even outer chains */}
      <line x1="15" y1="20" x2="15" y2="45" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <circle cx="15" cy="50" r="2" fill="currentColor" opacity="0.6" />
      
      <line x1="85" y1="20" x2="85" y2="45" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <circle cx="85" cy="50" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function FiligreeCorner({ className = "", position = "top-left" }: { className?: string, position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const rotation = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90"
  }[position];

  return (
    <svg className={`w-32 h-32 ${rotation} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main corner lines */}
      <path d="M5 5 L5 60 M5 5 L60 5" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Complex Filigree */}
      <path d="M5 5 Q30 5 40 30 Q45 45 30 40 Q20 35 25 20 Q30 15 45 25" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M5 5 Q5 30 30 40 Q45 45 40 30 Q35 20 20 25 Q15 30 25 45" stroke="currentColor" strokeWidth="1" fill="none" />
      
      {/* Circular accents */}
      <circle cx="15" cy="15" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="15" cy="15" r="2" fill="currentColor" />
      
      {/* Diamond accents */}
      <path d="M8 80 L12 85 L16 80 L12 75 Z" fill="currentColor" />
      <path d="M80 8 L85 12 L80 16 L75 12 Z" fill="currentColor" />
      
      {/* Dots along lines */}
      <circle cx="5" cy="30" r="1.5" fill="currentColor" />
      <circle cx="5" cy="50" r="1.5" fill="currentColor" />
      <circle cx="30" cy="5" r="1.5" fill="currentColor" />
      <circle cx="50" cy="5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function SideOrnamentBar({ className = "", side = "left" }: { className?: string, side?: "left" | "right" }) {
  return (
    <svg className={`w-8 h-full ${className}`} preserveAspectRatio="none" viewBox="0 0 40 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`sideFade-${side}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="15%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="85%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="20" y1="0" x2="20" y2="500" stroke={`url(#sideFade-${side})`} strokeWidth="1.5" opacity="0.5" />
      
      {/* Horizontal accents like in reference */}
      {[100, 200, 300, 400].map(y => (
        <g key={y} opacity={y === 100 || y === 400 ? 0.4 : 0.8}>
          <line x1="5" y1={y} x2="35" y2={y} stroke="currentColor" strokeWidth="1" opacity="0.6" />
          <circle cx={side === "left" ? 35 : 5} cy={y} r="2" fill="currentColor" />
          <path d={`M${side === "left" ? 5 : 35} ${y-5} L${side === "left" ? 10 : 30} ${y} L${side === "left" ? 5 : 35} ${y+5} Z`} fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

export function CathedralArch({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Cathedral arch border */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shadow/Glow Arch */}
        <path d="M48 500 L48 150 Q48 30 200 30 Q352 30 352 150 L352 500" stroke="currentColor" strokeWidth="6" fill="none" opacity="0.1" className="text-primary" />
        
        {/* Main double arch */}
        <path d="M50 500 L50 150 Q50 35 200 35 Q350 35 350 150 L350 500" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M55 500 L55 155 Q55 45 200 45 Q345 45 345 155 L345 500" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7"/>
        
        {/* Inner decorative arch */}
        <path d="M70 480 L70 160 Q70 60 200 60 Q330 60 330 160 L330 480" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
      </svg>
      
      {/* Fade overlay at the bottom to blend with page background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-[5]"></div>
      
      <div className="relative z-10 p-8 lg:p-10">
        {children}
      </div>
    </div>
  );
}

export function GothicCross({ className = "", size = "md" }: { className?: string, size?: "sm" | "md" | "lg" }) {
  const sizeClass = {
    sm: "w-6 h-8",
    md: "w-8 h-12",
    lg: "w-12 h-16"
  }[size];

  return (
    <svg className={`${sizeClass} ${className}`} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Vertical beam */}
      <rect x="25" y="5" width="10" height="70" fill="currentColor"/>
      
      {/* Horizontal beam */}
      <rect x="10" y="20" width="40" height="10" fill="currentColor"/>
      
      {/* Decorative ends */}
      <path d="M25 5 L20 0 L30 0 L35 5" fill="currentColor"/>
      <path d="M25 75 L20 80 L30 80 L35 75" fill="currentColor"/>
      <path d="M10 25 L5 20 L5 30 L10 30" fill="currentColor"/>
      <path d="M50 25 L55 20 L55 30 L50 30" fill="currentColor"/>
      
      {/* Center ornament */}
      <circle cx="30" cy="25" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="30" cy="25" r="3" fill="currentColor"/>
    </svg>
  );
}

export function BatOrnament({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-8 h-6 ${className}`} viewBox="0 0 80 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg" opacity="0.7">
      {/* Body */}
      <ellipse cx="40" cy="35" rx="6" ry="8"/>
      
      {/* Head */}
      <circle cx="40" cy="25" r="5"/>
      
      {/* Ears */}
      <path d="M37 20 L35 15 L38 22" fill="currentColor"/>
      <path d="M43 20 L45 15 L42 22" fill="currentColor"/>
      
      {/* Wings */}
      <path d="M34 35 Q20 30 10 35 Q15 40 20 38 Q25 45 28 42 Q32 38 34 38" fill="currentColor"/>
      <path d="M46 35 Q60 30 70 35 Q65 40 60 38 Q55 45 52 42 Q48 38 46 38" fill="currentColor"/>
    </svg>
  );
}

export function FiligreePattern({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-full h-24 ${className}`} viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 50 Q75 30 100 50 Q125 70 150 50 Q175 30 200 50 Q225 70 250 50 Q275 30 300 50 Q325 70 350 50" 
            stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4"/>
      <path d="M50 50 Q75 70 100 50 Q125 30 150 50 Q175 70 200 50 Q225 30 250 50 Q275 70 300 50 Q325 30 350 50" 
            stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4"/>
      
      {/* Small decorative circles */}
      <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.3"/>
      <circle cx="150" cy="50" r="3" fill="currentColor" opacity="0.3"/>
      <circle cx="250" cy="50" r="3" fill="currentColor" opacity="0.3"/>
      <circle cx="350" cy="50" r="3" fill="currentColor" opacity="0.3"/>
    </svg>
  );
}
