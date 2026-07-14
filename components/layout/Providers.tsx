"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

import { ThemeProvider } from "@/components/layout/ThemeProvider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
