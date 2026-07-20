"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileText, GitFork, Play, Presentation } from "lucide-react";

import { ProjectTags } from "@/components/projects/ProjectTags";
import { TechStack } from "@/components/projects/TechStack";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { slideInUp } from "@/lib/animations";
import type { Project } from "@/types/project";

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const shouldReduceMotion = useReducedMotion();
  const visibleTechnologies = project.technologies.slice(0, 6);
  const resources = [
    {
      label: "View Repository",
      url: project.repositoryUrl ?? project.githubUrl,
      icon: GitFork,
    },
    { label: "Watch Demo", url: project.demoUrl, icon: Play },
    { label: "View Report", url: project.reportUrl, icon: FileText },
    {
      label: "Read Research Paper",
      url: project.paperUrl,
      icon: FileText,
    },
    {
      label: "View Presentation",
      url: project.presentationUrl,
      icon: Presentation,
    },
  ].filter(
    (resource): resource is typeof resource & { url: string } =>
      typeof resource.url === "string" && resource.url.length > 0,
  );

  return (
    <motion.section
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={slideInUp}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.24),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.12),transparent_32%)] blur-3xl" />
      <div className="relative rounded-[2rem] bg-gradient-to-r from-violet-400/35 via-violet-500/20 to-indigo-400/25 p-px shadow-[0_40px_120px_rgba(99,102,241,0.2)]">
        <div className="relative overflow-hidden rounded-[1.9rem] border border-violet-300/20 bg-gradient-to-br from-zinc-950/85 via-violet-950/20 to-zinc-950/90 p-8 md:p-10">
          <div className="pointer-events-none absolute inset-0 rounded-[1.9rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_25%)] opacity-40" />
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {project.status ? (
                <Badge className="border-violet-300/25 bg-violet-500/12 px-2.5 py-0.5 text-[0.6rem] tracking-[0.2em] text-zinc-200">
                  {project.status}
                </Badge>
              ) : null}
              {project.category ? (
                <span className="rounded-full border border-violet-300/20 bg-violet-500/10 px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.2em] text-zinc-300">
                  {project.category}
                </span>
              ) : null}
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="flex h-full flex-col gap-5">
                <div className="space-y-1">
                  <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl">
                    {project.title || "Featured Project"}
                  </h2>
                  <p className="line-clamp-3 max-w-2xl text-[15px] leading-7 text-zinc-300">
                    {project.description || "Featured project details will be added soon."}
                  </p>
                </div>
                <ProjectTags tags={project.tags} />
                <div className="[&_span]:border-violet-300/15 [&_span]:bg-black/25">
                  <TechStack technologies={visibleTechnologies} />
                </div>
                {resources.length > 0 ? (
                  <div className="mt-auto flex flex-wrap gap-2.5 pt-2">
                    {resources.map(({ label, url, icon: Icon }, index) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          buttonVariants({ size: "lg", variant: "outline" }) +
                          " min-h-10 rounded-lg border-violet-300/55 px-4 py-2.5 font-semibold text-white shadow-[0_6px_20px_rgba(109,40,217,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-200/90 hover:bg-violet-500/40 hover:text-white hover:shadow-[0_8px_24px_rgba(139,92,246,0.32)] focus-visible:border-violet-200 focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 " +
                          (index === 0
                            ? " bg-gradient-to-r from-violet-600/90 to-indigo-600/90 shadow-[0_8px_26px_rgba(124,58,237,0.3)] hover:from-violet-500 hover:to-indigo-500"
                            : " bg-violet-500/25")
                        }
                      >
                        <Icon aria-hidden="true" />
                        {label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="relative overflow-hidden rounded-xl border border-violet-300/20 bg-violet-500/[0.08] p-5 shadow-inner backdrop-blur-sm transition-colors duration-300 hover:border-violet-300/30 md:p-6"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/0 opacity-60" />
                <div className="relative z-10">
                  <p className="text-sm font-medium uppercase tracking-[0.26em] text-violet-200/80">Featured Focus</p>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-300">
                    {project.longDescription || "Detailed project overview will be added soon."}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
