"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./language-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
