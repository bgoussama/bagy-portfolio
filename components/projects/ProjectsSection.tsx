import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Container } from "@/components/layout/Container";
import type { Project } from "@/types/project";

interface ProjectsSectionProps {
  projects: Project[];
}

const featuredProjectIds = {
  hero: "next-generation-devsecops-platform",
  large: ["security-operations-center-soc", "tls-posture-analyzer"],
  medium: ["infrastructure-hardening-project", "vmware-vsphere-private-cloud-infrastructure"],
} as const;

const additionalProjectIds = [
  "enterprise-network-access-control-nac",
  "voip-security-hardening-asterisk-zoiper",
  "inventory-management-system",
  "gossipguard-post-quantum-secure-ipc",
  "apache-spark-distributed-computing-engine",
] as const;

function selectProjects(projects: Project[], ids: readonly string[]) {
  return ids
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => project !== undefined);
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const heroProject = projects.find((project) => project.id === featuredProjectIds.hero);
  const largeProjects = selectProjects(projects, featuredProjectIds.large);
  const mediumProjects = selectProjects(projects, featuredProjectIds.medium);
  const additionalProjects = selectProjects(projects, additionalProjectIds);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
      <Container className="max-w-5xl space-y-16 lg:space-y-20">
        <div className="space-y-10">
          <AnimatedSection>
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-muted-foreground">Projects</p>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
                Featured Engineering Projects
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                A selection of my most advanced cybersecurity, DevSecOps, cloud infrastructure, and security engineering projects.
              </p>
            </div>
          </AnimatedSection>

          {heroProject ? (
            <AnimatedSection>
              <FeaturedProject project={heroProject} />
            </AnimatedSection>
          ) : null}

          <AnimatedSection>
            <ProjectsGrid projects={largeProjects} className="grid gap-6 md:grid-cols-2" />
          </AnimatedSection>

          <AnimatedSection>
            <ProjectsGrid projects={mediumProjects} className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2" />
          </AnimatedSection>
        </div>

        <div className="space-y-10">
          <AnimatedSection>
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
                Additional Engineering Projects
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <ProjectsGrid
              projects={additionalProjects}
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              compact
            />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
