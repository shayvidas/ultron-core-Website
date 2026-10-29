import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";

const kindTone: Record<Project["kind"], "cyan" | "violet" | "mint"> = {
  Concept: "violet",
  "Internal Demo": "cyan",
  "Client Project": "mint",
};

/**
 * HONESTY RULE: every card shows its kind (Concept / Internal Demo / Client
 * Project). A `coming-soon` project is visibly marked as not-yet-built rather
 * than implying a finished deliverable.
 */
export function ProjectCard({ project }: { project: Project }) {
  const comingSoon = project.status === "coming-soon";
  return (
    <article className="surface-card flex flex-col gap-4 p-6">
      <div className="flex items-center justify-between gap-3">
        <Badge tone={kindTone[project.kind]}>{project.kind}</Badge>
        {comingSoon ? (
          <span className="text-xs font-medium text-[var(--color-text-dim)]">Coming soon</span>
        ) : null}
      </div>
      <h3 className="text-h3">{project.title}</h3>
      <p className="text-sm text-[var(--color-text-dim)]">{project.summary}</p>
      <ul className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.stack.map((item) => (
          <li
            key={item}
            className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-text-dim)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
