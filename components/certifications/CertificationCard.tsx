"use client";

import { ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import type { Certification } from "@/data/certifications";

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

export function CertificationCard({ certification, index }: CertificationCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.01, y: -4, transition: { duration: 0.25, delay: 0 } }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : index * 0.05, ease: "easeOut" }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border bg-gradient-to-br from-zinc-950/95 via-violet-950/15 to-zinc-950/90 p-5 ring-1 ring-inset ring-white/[0.04] backdrop-blur transition-[border-color,box-shadow] duration-300 hover:border-violet-300/50 hover:shadow-[0_22px_70px_rgba(139,92,246,0.15)] ${
        certification.featured
          ? "border-violet-300/30 shadow-[0_22px_75px_rgba(139,92,246,0.1)] md:p-6"
          : "border-violet-400/20 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.13),transparent_38%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-300/20 bg-white/95 p-1.5">
            <Image
              src={`https://www.google.com/s2/favicons?domain=${certification.logo}&sz=128`}
              alt={`${certification.provider} logo`}
              width={32}
              height={32}
              unoptimized
              className="h-8 w-8 object-contain"
            />
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-violet-200/80">{certification.provider}</p>
            {certification.issued ? <p className="mt-1 text-sm text-muted-foreground">Issued {certification.issued}</p> : null}
          </div>
        </div>

        <h4 className={`${certification.featured ? "text-2xl" : "text-xl"} font-extrabold leading-tight tracking-tight text-white`}>
          {certification.title}
        </h4>

        {certification.description ? <p className="text-[15px] leading-7 text-zinc-300">{certification.description}</p> : null}

        <div className="mt-auto pt-2">
          {certification.credentialUrl ? (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${certification.title} credential from ${certification.provider} in a new tab`}
              className={
                buttonVariants({ size: "sm", variant: "outline" }) +
                " border-violet-300/25 bg-violet-500/10 text-zinc-100 transition duration-300 hover:border-violet-300/45 hover:bg-violet-500/15"
              }
            >
              View Credential
              <ExternalLink aria-hidden="true" />
            </a>
          ) : (
            <span
              aria-disabled="true"
              className={buttonVariants({ size: "sm", variant: "outline" }) + " cursor-not-allowed border-white/10 opacity-50"}
            >
              View Credential
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
