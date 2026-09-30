import type { PortfolioProfile } from "@/lib/portfolio-data";

export function ExperienceTimeline({
  experiences,
}: {
  experiences: PortfolioProfile["professionalJourney"];
}) {
  return (
    <ol className="space-y-8 border-l border-border pl-5 sm:pl-7">
      {experiences.map((experience) => (
        <li key={`${experience.company}-${experience.period.start}`} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[1.62rem] top-1.5 size-2 rounded-full border border-foreground bg-background sm:-left-[2.12rem]"
          />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <div>
              <h3 className="font-semibold tracking-tight text-foreground">
                {experience.role}
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {experience.company}
              </p>
            </div>
            <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
              {experience.period.label}
            </p>
          </div>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
            {experience.overview}
          </p>

          <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[10px] leading-5 text-foreground/75">
            {experience.technologies.map((technology) => (
              <li key={technology} className="after:ml-2 after:text-border after:content-['/'] last:after:content-none">
                {technology}
              </li>
            ))}
          </ul>

          <ul className="mt-3 space-y-2 text-xs leading-5 text-foreground/80">
            {experience.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-[var(--portfolio-accent)]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {experience.responsibilities.length > 0 ? (
            <details className="mt-4 max-w-3xl rounded-md border border-border/80 px-3 py-2.5 text-xs text-muted-foreground">
              <summary className="cursor-pointer font-medium text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                View responsibilities
              </summary>
              <ul className="mt-3 list-disc space-y-1.5 pl-4 leading-5">
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </details>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
