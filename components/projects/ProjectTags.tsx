interface ProjectTagsProps {
  tags: string[];
}

export function ProjectTags({ tags }: ProjectTagsProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex rounded-full border border-violet-300/15 bg-violet-500/[0.07] px-3 py-1 text-[0.65rem] tracking-[0.22em] text-zinc-300 transition duration-300 hover:border-violet-300/35 hover:bg-violet-500/10"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
