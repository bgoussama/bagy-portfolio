import Link from "next/link";
import { GitBranch, Link2, Mail } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/", icon: GitBranch, ariaLabel: "Visit GitHub" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Link2, ariaLabel: "Visit LinkedIn" },
  { label: "Email", href: "mailto:hello@bagy.dev", icon: Mail, ariaLabel: "Send an email" },
] as const;

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
                  Cybersecurity Engineer
                </Badge>

                <div className="space-y-5">
                  <p className="text-sm font-medium uppercase tracking-[0.32em] text-muted-foreground">
                    Bagy Oussama
                  </p>
                  <h1 id="hero-heading" className="text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-7xl">
                    Building Secure Infrastructure with AI,
                    <br />
                    DevSecOps & Offensive Security.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                    Cybersecurity Engineering Student at ENSA Marrakech. Currently Software Engineering Intern at Optipark. Interested in AI Security, Cloud Security, DevSecOps and Offensive Security.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link href="/#projects" className={buttonVariants({ size: "lg", variant: "default" })}>
                    View Projects
                  </Link>
                  <Link href="/resume.pdf" className={buttonVariants({ size: "lg", variant: "outline" })}>
                    Download Resume
                  </Link>
                </div>
              </div>

              <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  Connect
                </p>
                <nav aria-label="Social links" className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        aria-label={link.ariaLabel}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
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
    </main>
  );
}
