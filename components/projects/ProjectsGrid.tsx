import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types/project";

interface ProjectsGridProps {
  projects: Project[];
  className?: string;
  compact?: boolean;
}

export function ProjectsGrid({ projects, className = "grid gap-6 lg:grid-cols-2", compact = false }: ProjectsGridProps) {
  return (
    <div className={className}>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} compact={compact} />
      ))}
    </div>
  );
}
