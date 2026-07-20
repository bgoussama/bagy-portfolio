import { Badge } from "@/components/ui/badge";

interface CompanyBadgeProps {
  company: string;
}

export function CompanyBadge({ company }: CompanyBadgeProps) {
  return (
    <Badge className="border-violet-300/20 bg-violet-500/10 text-[0.7rem] uppercase tracking-[0.26em] text-zinc-200">
      {company}
    </Badge>
  );
}
