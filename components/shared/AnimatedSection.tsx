"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { revealOnScroll } from "@/lib/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={revealOnScroll}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
