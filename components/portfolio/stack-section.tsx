import type { PortfolioProfile } from "@/lib/portfolio-data";

const categoryLabels: Record<string, string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases",
  testing: "Testing",
  cloudAndDevOps: "Cloud & DevOps",
  aiAndDeveloperTools: "AI & Developer Tools",
};

export function StackSection({ techStack }: { techStack: PortfolioProfile["techStack"] }) {
  return (
    <dl className="divide-y divide-border border-y border-border">
      {Object.entries(techStack).map(([category, technologies], index) => (
        <div
          key={category}
          className="grid gap-2 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6 sm:py-5"
        >
          <dt className="flex items-baseline gap-2 font-mono text-xs font-medium text-foreground">
            <span className="text-[10px] text-muted-foreground">0{index + 1}</span>
            {categoryLabels[category] ?? category}
          </dt>
          <dd className="flex flex-wrap gap-x-2 gap-y-1.5 text-sm leading-6 text-muted-foreground">
            {technologies.map((technology, technologyIndex) => (
              <span key={technology} className="whitespace-nowrap">
                {technology}
                {technologyIndex < technologies.length - 1 ? (
                  <span aria-hidden="true" className="ml-2 text-border">
                    /
                  </span>
                ) : null}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
