"use client";

import { motion, useReducedMotion } from "framer-motion";

import { CompanyBadge } from "@/components/experience/CompanyBadge";
import { TechStack } from "@/components/projects/TechStack";
import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const formatDate = (date: string) => {
    if (!date) return "";

    if (/^\d{4}$/.test(date)) return date;

    const [year, month] = date.split("-");
    const monthLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][
      Number(month) - 1
    ];

    return monthLabel && year ? `${monthLabel} ${year}` : date;
  };

  const startDate = formatDate(experience.startDate);
  const endDate = experience.current ? "Present" : formatDate(experience.endDate);
  const dateRange = startDate && endDate ? `${startDate} – ${endDate}` : startDate || endDate;

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.01, y: -4, transition: { duration: 0.25, delay: 0 } }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : index * 0.06, ease: "easeOut" }}
      className={`relative w-full overflow-hidden rounded-xl border bg-gradient-to-br from-zinc-950/90 via-violet-950/15 to-zinc-950/90 p-4 shadow-[0_18px_65px_rgba(0,0,0,0.2)] backdrop-blur transition-[border-color,box-shadow] duration-300 hover:border-violet-300/50 hover:shadow-[0_22px_70px_rgba(139,92,246,0.16)] sm:p-5 ${
        experience.current
          ? "border-violet-300/35 shadow-[0_18px_65px_rgba(139,92,246,0.1)]"
          : "border-violet-400/20"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_34%)]" />

      <div className="relative z-10 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <CompanyBadge company={experience.company} />
          {experience.current ? (
            <span className="rounded-full border border-violet-300/25 bg-violet-400/10 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-violet-200">
              Current
            </span>
          ) : null}
        </div>

        <div className="space-y-2">
          <p className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">{experience.role}</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            {dateRange ? <span>{dateRange}</span> : null}
          </div>
        </div>

        {experience.description ? (
          <p className="text-[15px] leading-6 text-zinc-300">{experience.description}</p>
        ) : null}

        {experience.technologies.length > 0 ? (
          <div className="[&_span]:text-xs">
            <TechStack technologies={experience.technologies} />
          </div>
        ) : null}

        {experience.achievements.length > 0 ? (
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Key achievements</p>
            <ul className="list-disc space-y-1.5 pl-5 text-[15px] leading-6 text-zinc-300">
              {experience.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
