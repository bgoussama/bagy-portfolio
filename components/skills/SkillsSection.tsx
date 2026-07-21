import { Container } from "@/components/layout/Container";
import { SkillCard } from "@/components/skills/SkillCard";
import { buttonVariants } from "@/components/ui/button";
import type { SkillCategory } from "@/data/skills";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28 lg:py-32" aria-labelledby="skills-heading">
      <Container className="max-w-5xl space-y-9">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-muted-foreground">Skills</p>
          <h2 id="skills-heading" className="text-4xl font-semibold tracking-[-0.025em] text-foreground sm:text-[2.75rem]">
            Skills &amp; Expertise
          </h2>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {skills.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>

        <div className="flex justify-center pt-6 sm:pt-8">
          <a
            href="#certifications"
            className={
              buttonVariants({ size: "lg", variant: "default" }) +
              " min-w-56 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-6 text-white shadow-[0_14px_40px_rgba(139,92,246,0.24)] transition duration-300 hover:-translate-y-0.5 hover:from-violet-400 hover:to-indigo-400 hover:shadow-[0_18px_55px_rgba(139,92,246,0.32)]"
            }
          >
            Explore Certifications
          </a>
        </div>
      </Container>
    </section>
  );
}
