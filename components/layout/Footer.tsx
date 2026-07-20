import { Container } from "@/components/layout/Container";
import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-border/60 bg-background/70">
      <Container className="flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Crafted for the next phase of the portfolio experience.</p>
        <div className="flex items-center gap-4">
          {socials.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
