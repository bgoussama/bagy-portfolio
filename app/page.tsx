import { Download, GitBranch, Link2, Mail } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { CertificationsSection } from "@/components/certifications/CertificationsSection";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";
import { skills } from "@/data/skills";

const socialDetails = {
  GitHub: { icon: GitBranch, ariaLabel: "Visit GitHub" },
  LinkedIn: { icon: Link2, ariaLabel: "Visit LinkedIn" },
  Email: { icon: Mail, ariaLabel: "Send an email" },
} as const;

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.16),_transparent_45%)]" />
        <Container className="flex min-h-[78vh] items-center py-20 sm:py-28 lg:py-32">
          <AnimatedSection>
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div className="max-w-3xl space-y-8">
                <Badge className="border-white/10 bg-white/5 text-[0.7rem] tracking-[0.28em] text-zinc-300">
                  Final-Year Engineering Student
                </Badge>

                <div className="space-y-5">
                  <p className="text-sm font-medium uppercase tracking-[0.32em] text-muted-foreground">
                    Bagy Oussama
                  </p>
                  <h1 id="hero-heading" className="text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-7xl">
                    Cybersecurity &
                    <br />
                    Telecommunications Engineering
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                    Final-year engineering student in{" "}
                    <strong className="font-semibold text-foreground">Cybersecurity &amp; Telecommunication Systems</strong>
                    {" "}at{" "}
                    <strong className="font-semibold text-foreground">ENSA Marrakech, Cadi Ayyad University</strong>.
                    {" "}Currently completing a{" "}
                    <strong className="font-semibold text-foreground">Software Engineering Internship</strong> at{" "}
                    <strong className="font-semibold text-foreground">Optipark</strong>. Focused on{" "}
                    <strong className="font-semibold text-foreground">Cybersecurity</strong>,{" "}
                    <strong className="font-semibold text-foreground">AI Security</strong>,{" "}
                    <strong className="font-semibold text-foreground">Cloud Security</strong>,{" "}
                    <strong className="font-semibold text-foreground">Offensive Security</strong> and{" "}
                    <strong className="font-semibold text-foreground">Secure Software Engineering</strong>.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#projects"
                    className={
                      buttonVariants({ size: "lg", variant: "default" }) +
                      " bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-[0_14px_40px_rgba(139,92,246,0.24)] transition duration-300 hover:-translate-y-0.5 hover:from-violet-400 hover:to-indigo-400 hover:shadow-[0_18px_55px_rgba(139,92,246,0.32)]"
                    }
                  >
                    View Projects
                  </a>
                  <a
                    href="#experience"
                    className={
                      buttonVariants({ size: "lg", variant: "default" }) +
                      " bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-[0_14px_40px_rgba(126,34,206,0.2)] transition duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-purple-400 hover:shadow-[0_18px_55px_rgba(126,34,206,0.28)]"
                    }
                  >
                    Experience
                  </a>
                  <a
                    href="#skills"
                    className={
                      buttonVariants({ size: "lg", variant: "default" }) +
                      " bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-[0_14px_40px_rgba(126,34,206,0.2)] transition duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-purple-400 hover:shadow-[0_18px_55px_rgba(126,34,206,0.28)]"
                    }
                  >
                    Skills
                  </a>
                  <a
                    href="/Oussama_Bagy_CV.pdf"
                    download
                    aria-label="Download Oussama Bagy's CV as a PDF"
                    className={
                      buttonVariants({ size: "lg", variant: "default" }) +
                      " min-h-[52px] w-full gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 text-base font-semibold text-white shadow-[0_14px_40px_rgba(6,182,212,0.3)] transition duration-300 hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_18px_52px_rgba(6,182,212,0.42)] focus-visible:border-cyan-300 focus-visible:ring-cyan-400/50 sm:w-auto"
                    }
                  >
                    <Download className="size-[1.125rem]" aria-hidden="true" />
                    Download CV
                  </a>
                </div>
              </div>

              <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  Let&apos;s Connect
                </p>
                <nav aria-label="Social links" className="mt-6 flex flex-wrap gap-3">
                  {socials.map((link) => {
                    const details = socialDetails[link.label as keyof typeof socialDetails];
                    const Icon = details.icon;
                    const isExternal = link.href.startsWith("http");

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        aria-label={details.ariaLabel}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/70 px-4 py-2 text-sm text-foreground transition hover:border-white/20 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        <span>{link.label}</span>
                      </a>
                    );
                  })}
                </nav>
              </aside>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <ProjectsSection projects={projects} />

      <ExperienceSection experience={experience} />
      <SkillsSection skills={skills} />
      <CertificationsSection />
    </main>
  );
}
