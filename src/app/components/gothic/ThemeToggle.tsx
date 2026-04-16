"use client";

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-12 h-12 border-2 border-primary bg-background hover:bg-card transition-all duration-300 group overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
           style={{ boxShadow: 'inset 0 0 20px rgba(193, 18, 31, 0.3)' }}></div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
        ) : (
          <Moon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
        )}
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
           style={{ boxShadow: '0 0 20px rgba(193, 18, 31, 0.5)' }}></div>
    </button>
  );
}
