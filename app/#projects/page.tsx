import { Container } from "@/components/layout/Container";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const regularProjects = projects.filter((project) => !project.featured);

  return (
    <main id="projects-page" className="py-20 sm:py-28 lg:py-32">
      <Container className="max-w-5xl space-y-10">
        <AnimatedSection>
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-muted-foreground">Projects</p>
            <h1 className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
              Selected Engineering Work
            </h1>
          </div>
        </AnimatedSection>

        {featuredProject ? (
          <AnimatedSection>
            <FeaturedProject project={featuredProject} />
          </AnimatedSection>
        ) : null}

        {regularProjects.length > 0 ? (
          <AnimatedSection>
            <ProjectsGrid projects={regularProjects} />
          </AnimatedSection>
        ) : null}
      </Container>
    </main>
  );
}
