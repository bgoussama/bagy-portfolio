"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileText, GitFork, Play, Presentation } from "lucide-react";

import { TechStack } from "@/components/projects/TechStack";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
  compact?: boolean;
}

const compactDescriptions: Record<string, string> = {
  "enterprise-network-access-control-nac":
    "PacketFence NAC platform using IEEE 802.1X, RADIUS, and identity-based policies to secure enterprise network access.",
  "voip-security-hardening-asterisk-zoiper":
    "Asterisk VoIP infrastructure with Zoiper endpoints, secure SIP communications, authentication, and system hardening.",
  "inventory-management-system":
    "Spring Boot inventory platform for authentication, product and supplier tracking, stock monitoring, and PDF documents.",
  "gossipguard-post-quantum-secure-ipc":
    "Post-quantum IPC system using McEliece encryption to protect process communication against future quantum attacks.",
  "apache-spark-distributed-computing-engine":
    "Apache Spark engine for large-scale analytics workloads using distributed execution and parallel data processing.",
};

const featuredPresentations: Record<string, { description: string; technologies: string[] }> = {
  "security-operations-center-soc": {
    description:
      "An intelligent SOC and self-healing honeynet for detecting attacks, redirecting threats, and supporting controlled remediation. It combines traffic inspection, deception, centralized monitoring, and local AI-assisted analysis.",
    technologies: ["NGINX", "ModSecurity", "OWASP CRS", "Splunk", "Ollama", "Grafana", "Python"],
  },
  "tls-posture-analyzer": {
    description:
      "An open-source Android TLS auditing platform that finds insecure certificate validation, cleartext traffic, weak configurations, and missing pinning. It combines APK analysis, security-standard mapping, and AI-assisted remediation.",
    technologies: ["Python", "FastAPI", "React", "Android", "jadx", "apktool", "Groq API", "Docker"],
  },
  "infrastructure-hardening-project": {
    description:
      "A hardened Wazuh SIEM platform for centralized log collection, integrity monitoring, event correlation, and threat detection. Its objective is to protect the monitoring pipeline while improving infrastructure-wide security visibility.",
    technologies: ["Wazuh", "Linux", "Syslog", "OSSEC", "ELK Stack", "Security Monitoring"],
  },
  "vmware-vsphere-private-cloud-infrastructure": {
    description:
      "An enterprise virtualization environment built with VMware vSphere, two ESXi hosts, and centralized vCenter management. It demonstrates resilient workload operation through clustering, availability, balancing, and migration.",
    technologies: [
      "VMware vSphere 7",
      "ESXi",
      "vCenter Server Appliance",
      "vSphere DRS",
      "vSphere HA",
      "vMotion",
      "VMkernel",
    ],
  },
};

export function ProjectCard({ project, index, compact = false }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isSecondaryCard = !project.featured;
  const featuredPresentation = !compact ? featuredPresentations[project.id] : undefined;
  const visibleTechnologies = featuredPresentation?.technologies ?? project.technologies.slice(0, compact ? 5 : 6);
  const visibleDescription = compact
    ? compactDescriptions[project.id] ?? project.description
    : featuredPresentation?.description ?? project.description;
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
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.008, y: -4, transition: { duration: 0.25, delay: 0 } }}
      transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : index * 0.06, ease: "easeOut" }}
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-violet-400/15 bg-gradient-to-br from-zinc-950/90 via-violet-950/10 to-zinc-950/90 ${compact ? "h-[30rem] p-4 sm:p-5" : isSecondaryCard ? "h-full p-4 sm:p-5" : "h-full p-5"} shadow-[0_18px_65px_rgba(0,0,0,0.18)] ring-1 ring-inset ring-white/[0.03] backdrop-blur transition-[border-color,box-shadow] duration-300 hover:border-violet-300/40 hover:shadow-[0_22px_70px_rgba(139,92,246,0.13)]`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.1),transparent_36%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
      {!compact ? (
        <div className={`relative z-10 flex flex-wrap items-center justify-between ${isSecondaryCard ? "gap-2" : "gap-3"}`}>
          {project.status ? (
            <Badge className="border-violet-300/20 bg-violet-500/10 px-2.5 py-0.5 text-[0.6rem] tracking-[0.2em] text-zinc-200">
              {project.status}
            </Badge>
          ) : null}
          {project.category ? (
            <span className="rounded-full border border-violet-300/15 bg-violet-500/8 px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.2em] text-zinc-300">
              {project.category}
            </span>
          ) : null}
        </div>
      ) : null}

      <div className={`relative z-10 flex-1 ${compact ? "space-y-3" : "mt-4 space-y-5"}`}>
        <div className={compact ? "space-y-1" : "space-y-2"}>
          <h3 className={`${compact ? "min-h-[4.875rem] text-[1.35rem] md:text-2xl" : "text-2xl md:text-3xl"} font-extrabold leading-[1.08] tracking-[-0.025em] text-foreground`}>
            {project.title || "Project Title"}
          </h3>
          <p className={`${compact ? "min-h-14" : "line-clamp-3"} text-[15px] leading-7 text-zinc-300`}>
            {visibleDescription || "Project description will be added soon."}
          </p>
        </div>

        <div className="[&_span]:border-violet-300/10 [&_span]:bg-black/25">
          <TechStack technologies={visibleTechnologies} />
        </div>
      </div>

      {resources.length > 0 ? (
        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-2.5 pt-5">
          {resources.map(({ label, url, icon: Icon }, resourceIndex) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                buttonVariants({ size: "lg", variant: "outline" }) +
                " min-h-10 rounded-lg border-violet-300/55 px-4 py-2.5 font-semibold text-white shadow-[0_6px_20px_rgba(109,40,217,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-200/90 hover:bg-violet-500/40 hover:text-white hover:shadow-[0_8px_24px_rgba(139,92,246,0.32)] focus-visible:border-violet-200 focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 " +
                (resourceIndex === 0
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
    </motion.article>
  );
}
