"use client";

import { BrainCircuit, CloudCog, Code2, Network, Server, Shield } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import type { SkillCategory } from "@/data/skills";

const icons = {
  shield: Shield,
  "cloud-cog": CloudCog,
  code: Code2,
  server: Server,
  network: Network,
  brain: BrainCircuit,
} as const;

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export function SkillCard({ category, index }: SkillCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = icons[category.icon];

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.01, y: -4, transition: { duration: 0.25, delay: 0 } }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : index * 0.06, ease: "easeOut" }}
      className="group relative h-full overflow-hidden rounded-xl border border-violet-400/25 bg-gradient-to-br from-zinc-950/95 via-violet-950/15 to-zinc-950/90 p-6 shadow-[0_18px_65px_rgba(0,0,0,0.2)] ring-1 ring-inset ring-white/[0.04] backdrop-blur transition-[border-color,box-shadow] duration-300 hover:border-violet-300/50 hover:shadow-[0_22px_70px_rgba(139,92,246,0.15)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.13),transparent_38%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col gap-5">
        <div className="mb-1 flex items-center gap-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-300/25 bg-violet-500/10 text-violet-200">
            <Icon className="h-[1.8rem] w-[1.8rem]" aria-hidden="true" />
          </span>
          <h3 className="text-xl font-extrabold leading-tight tracking-tight text-foreground md:text-2xl lg:text-3xl">
            {category.title}
          </h3>
        </div>

        <p className="text-base leading-7 text-zinc-200/90">{category.description}</p>

        <div className="mt-auto flex flex-wrap gap-2">
          {category.technologies.map((technology, technologyIndex) => (
            <span
              key={technology}
              className={`inline-flex min-h-7 items-center rounded-full px-3 py-1 text-xs font-medium tracking-[0.02em] transition-colors duration-300 hover:border-violet-300/40 hover:bg-violet-500/10 hover:text-zinc-200 ${
                technologyIndex < 3
                  ? "border border-violet-300/35 bg-violet-500/15 text-zinc-200"
                  : "border border-violet-300/15 bg-black/25 text-zinc-400"
              }`}
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
