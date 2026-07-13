import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface SectionShellProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title?: string;
}

export function SectionShell({ eyebrow, title, className, children, ...props }: SectionShellProps) {
  return (
    <section className={cn("w-full py-16 sm:py-20", className)} {...props}>
      {(eyebrow || title) && (
        <div className="mb-8 flex flex-col gap-3">
          {eyebrow ? <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p> : null}
          {title ? <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2> : null}
        </div>
      )}
      {children}
    </section>
  );
}
