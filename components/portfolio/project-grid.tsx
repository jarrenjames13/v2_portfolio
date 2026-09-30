import type { PortfolioProject } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/portfolio/project-card";

export function ProjectGrid({
  projects,
  detailed = false,
}: {
  projects: PortfolioProject[];
  detailed?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} detailed={detailed} />
      ))}
    </div>
  );
}
