import type { Experience } from "@/types/experience";

interface TimelineProps {
  experience: Experience[];
}

export function Timeline({ experience }: TimelineProps) {
  return (
    <div className="relative border-l border-white/10 pl-6 before:absolute before:-left-1.5 before:top-0 before:h-full before:w-0.5 before:bg-white/10">
      <div className="space-y-10">
        {experience.map((item) => (
          <div key={item.id} className="relative">
            <span className="absolute -left-3.5 top-1 h-5 w-5 rounded-full border border-white/20 bg-background" />
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm font-semibold text-foreground">{item.role}</p>
                <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{item.type}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {item.company} · {item.location}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.startDate} – {item.current ? "Present" : item.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
