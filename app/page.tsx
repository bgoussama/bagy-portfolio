import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.2),_transparent_45%)]" />
      <Container className="flex min-h-[70vh] items-center py-24 sm:py-32">
        <AnimatedSection>
          <div className="max-w-3xl space-y-8">
            <Badge>Foundation Sprint</Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
                A clean slate for the portfolio experience.
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                This sprint establishes the app shell, design system, and shared primitives without introducing any portfolio content.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
