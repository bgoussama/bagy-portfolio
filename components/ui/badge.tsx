import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function Badge({ className, ...props }: BadgeProps) {
  return <span className={cn("inline-flex items-center rounded-full border border-border/70 bg-muted/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground", className)} {...props} />;
}
