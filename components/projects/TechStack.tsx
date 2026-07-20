"use client";

interface TechStackProps {
  technologies: string[];
}

export function TechStack({ technologies }: TechStackProps) {
  if (technologies.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-full border border-white/10 bg-background/70 px-3 py-1 text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground transition duration-300 hover:border-violet-300 hover:text-white hover:bg-violet-500/10"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}
