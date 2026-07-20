"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
