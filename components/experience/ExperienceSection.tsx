import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Container } from "@/components/layout/Container";
import type { Experience } from "@/types/experience";

interface ExperienceSectionProps {
  experience: Experience[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const companyOrder = ["Optipark", "ABSEC Cybersecurity", "Hack Secure", "ENSA Marrakech"];
  const orderedExperience = [...experience].sort((a, b) => {
    const aIndex = companyOrder.indexOf(a.company);
    const bIndex = companyOrder.indexOf(b.company);

    return (aIndex === -1 ? companyOrder.length : aIndex) - (bIndex === -1 ? companyOrder.length : bIndex);
  });

  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28 lg:py-32" aria-labelledby="experience-heading">
      <Container className="max-w-5xl space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-muted-foreground">Experience</p>
          <h2 id="experience-heading" className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Professional Timeline
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8">
          <div
            className="absolute bottom-0 left-1.5 top-0 w-px bg-gradient-to-b from-violet-300/45 via-violet-400/20 to-violet-500/5 shadow-[0_0_14px_rgba(139,92,246,0.16)] sm:left-2.5"
            aria-hidden="true"
          />
          <div className="space-y-3 sm:space-y-4">
            {orderedExperience.map((item, index) => (
              <div key={item.id} className="relative">
                <span
                  className={`absolute -left-[1.7rem] top-6 h-3 w-3 rounded-full border sm:-left-[2rem] ${
                    item.current
                      ? "border-violet-200/70 bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.65)]"
                      : "border-violet-300/40 bg-background shadow-[0_0_8px_rgba(139,92,246,0.2)]"
                  }`}
                  aria-hidden="true"
                />
                <ExperienceCard experience={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
