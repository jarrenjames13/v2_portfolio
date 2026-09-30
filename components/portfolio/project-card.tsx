"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Images } from "lucide-react";

import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatLinkLabel, type PortfolioProject } from "@/lib/portfolio-data";

export function ProjectCard({
  project,
  detailed = false,
}: {
  project: PortfolioProject;
  detailed?: boolean;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const cover = project.images[0];
  const activeImage = project.images[activeImageIndex] ?? cover;
  const technologies = detailed
    ? project.technologies
    : project.technologies.slice(0, 5);
  const highlights = detailed ? project.highlights : project.highlights.slice(0, 2);

  if (!cover || !activeImage) return null;

  return (
    <Dialog>
      <Card className="group/project relative h-full gap-0 overflow-hidden rounded-xl border-0 bg-card py-0 ring-1 ring-border transition-shadow duration-200 hover:shadow-md motion-reduce:transition-none">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted/60">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes={
              detailed
                ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className={`object-contain ${project.wip ? "p-3 sm:p-5" : "p-1.5 sm:p-2.5"}`}
          />
          {project.wip ? (
            <span className="absolute left-3 top-3 inline-flex items-center rounded-md border border-border bg-background/95 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-foreground shadow-sm">
              Work in progress
            </span>
          ) : null}
        </div>

        <article className="flex h-full flex-col px-4 pb-5 pt-4 sm:px-5 sm:pb-6">
          <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
            <span>{project.organization}</span>
            <span aria-hidden="true" className="text-border">
              /
            </span>
            <span>{project.role}</span>
          </div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {project.description}
          </p>

          {highlights.length > 0 ? (
            <ul className="mt-4 space-y-2 border-l border-border pl-3 text-xs leading-5 text-foreground/80">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          ) : null}

          <div className="mt-auto flex items-end justify-between gap-3 pt-5">
            <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded border border-border/80 bg-background px-2 py-1 font-mono text-[10px] leading-4 text-muted-foreground"
                >
                  {technology}
                </li>
              ))}
              {!detailed && project.technologies.length > technologies.length ? (
                <li className="px-1 py-1 font-mono text-[10px] leading-4 text-muted-foreground">
                  +{project.technologies.length - technologies.length}
                </li>
              ) : null}
            </ul>
            <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.08em] text-foreground/70 group-hover/project:text-[var(--portfolio-accent)]">
              <Images aria-hidden="true" className="size-3.5" />
              View details
            </span>
          </div>
        </article>

        <DialogTrigger
          aria-label={`Open ${project.name} project images and details`}
          className="absolute inset-0 z-10 rounded-xl bg-transparent focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-ring"
        />
      </Card>

      <DialogContent className="w-[min(96vw,76rem)]">
        <div className="grid min-h-0 flex-1 grid-cols-1 overflow-y-auto md:grid-cols-[minmax(0,1.08fr)_minmax(19rem,0.92fr)] md:overflow-hidden">
          <section
            aria-label={`${project.name} project images`}
            className="min-w-0 border-b border-border bg-muted/30 p-3 sm:p-5 md:min-h-0 md:overflow-y-auto md:border-b-0 md:border-r"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-background">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="(max-width: 768px) 94vw, 54vw"
                className="object-contain p-1.5 sm:p-2"
              />
            </div>
            {project.images.length > 1 ? (
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
                {project.images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    aria-label={`Show image: ${image.alt}`}
                    aria-pressed={activeImageIndex === index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative aspect-[4/3] overflow-hidden rounded-md border bg-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none ${
                      activeImageIndex === index
                        ? "border-foreground"
                        : "border-border hover:border-foreground/50"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 30vw, 160px"
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </section>

          <section className="min-w-0 p-5 sm:p-6 md:min-h-0 md:overflow-y-auto">
            <div className="pr-8">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
                {project.organization} <span aria-hidden="true">/</span> {project.role}
              </p>
              <DialogTitle className="text-xl sm:text-2xl">{project.name}</DialogTitle>
              <DialogDescription className="mt-3 leading-6">
                {project.description}
              </DialogDescription>
              {project.wip ? (
                <p className="mt-3 inline-flex rounded border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-foreground">
                  Work in progress
                </p>
              ) : null}
            </div>

            {highlights.length > 0 ? (
              <section className="mt-6 border-t border-border pt-4">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Highlights
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm leading-5 text-foreground/85">
                      <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-[var(--portfolio-accent)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section className="mt-6 border-t border-border pt-4">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Technologies and capabilities
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded border border-border bg-background px-2 py-1 font-mono text-[10px] leading-4 text-muted-foreground"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </section>

            {project.links && Object.values(project.links).some(Boolean) ? (
              <section className="mt-6 border-t border-border pt-4">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Project links
                </h3>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                  {Object.entries(project.links).map(([label, href]) =>
                    href ? (
                      <li key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-[var(--portfolio-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                        >
                          {formatLinkLabel(label)}
                          <ArrowUpRight aria-hidden="true" className="size-3.5" />
                        </a>
                      </li>
                    ) : null,
                  )}
                </ul>
              </section>
            ) : null}
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
