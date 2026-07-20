import Link from "next/link";
import { Sparkles } from "lucide-react";

import { navigation } from "@/data/navigation";
import { Container } from "@/components/layout/Container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-foreground uppercase">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-muted/50">
            <Sparkles className="h-4 w-4" />
          </span>
          Bagy Oussama
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
