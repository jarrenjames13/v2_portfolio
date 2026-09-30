"use client";

import { ArrowUpRight, Terminal } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatLinkLabel, type PortfolioProfile } from "@/lib/portfolio-data";

export function AgentTerminal({ profile }: { profile: PortfolioProfile }) {
  const { agentFile, professionalSummary, techStack, aboutMe, professionalJourney } =
    profile;
  const permissions = Object.entries(agentFile.permission);
  const availableLinks = Object.entries(aboutMe.links).filter(([, href]) => href);

  return (
    <Dialog>
      <div className="overflow-hidden rounded-xl border border-neutral-700 bg-[#171918] text-neutral-100 shadow-sm">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-2.5 font-mono text-xs sm:text-sm">
            <Terminal aria-hidden="true" className="size-4 shrink-0 text-neutral-400" />
            <span className="truncate text-neutral-300">$ cat {agentFile.filename}</span>
          </div>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500">
            profile file
          </span>
        </div>

        <dl className="space-y-4 px-4 py-5 sm:px-5 sm:py-6">
          <div>
            <dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
              description
            </dt>
            <dd className="text-sm leading-6 text-neutral-200">
              {agentFile.description}
            </dd>
          </div>
          <div className="grid gap-4 border-t border-white/10 pt-4 sm:grid-cols-[0.7fr_1.3fr]">
            <div>
              <dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                mode
              </dt>
              <dd className="font-mono text-xs text-neutral-200">{agentFile.mode}</dd>
            </div>
            <div>
              <dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                permission
              </dt>
              <dd className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-neutral-200">
                {permissions.map(([name, value]) => (
                  <span key={name}>
                    {name}: {value}
                  </span>
                ))}
              </dd>
            </div>
          </div>
        </dl>

        <DialogTrigger className="group/trigger flex min-h-11 w-full items-center justify-between border-t border-white/10 px-4 py-3 text-left font-mono text-[10px] uppercase tracking-[0.13em] text-neutral-400 transition-colors hover:bg-white/[0.035] hover:text-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-neutral-100 sm:px-5">
          <span>Open full profile</span>
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover/trigger:translate-x-0.5 group-hover/trigger:-translate-y-0.5 motion-reduce:transition-none"
          />
        </DialogTrigger>
      </div>

      <DialogContent className="bg-[#171918] text-neutral-100">
        <div className="border-b border-white/10 px-5 py-5 pr-14 sm:px-7 sm:py-6">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
            $ cat {agentFile.filename}
          </p>
          <DialogTitle className="text-xl text-neutral-50 sm:text-2xl">
            {aboutMe.name}
          </DialogTitle>
          <DialogDescription className="mt-1 text-neutral-400">
            {aboutMe.title} · {aboutMe.location}
          </DialogDescription>
        </div>

        <div className="min-h-0 space-y-7 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          <section>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
              professional summary
            </p>
            <p className="font-medium leading-6 text-neutral-200">
              {professionalSummary.headline}
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-300">
              {professionalSummary.summary}
            </p>
          </section>

          <section>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
              focus areas and capabilities
            </p>
            <ul className="flex flex-wrap gap-2">
              {professionalSummary.focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-md border border-white/10 px-2.5 py-1 font-mono text-[11px] text-neutral-300"
                >
                  {area}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
              technology stack
            </p>
            <div className="space-y-3">
              {Object.entries(techStack).map(([category, technologies]) => (
                <div
                  key={category}
                  className="grid gap-1.5 border-t border-white/10 pt-2.5 sm:grid-cols-[10rem_1fr]"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                    {category}
                  </p>
                  <p className="text-xs leading-5 text-neutral-300">
                    {technologies.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-5 border-t border-white/10 pt-5 sm:grid-cols-2">
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                about
              </p>
              <p className="text-sm leading-6 text-neutral-300">{aboutMe.bio}</p>
            </div>
            <div className="space-y-5">
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                  engineering approach
                </p>
                <p className="text-sm leading-6 text-neutral-300">
                  {aboutMe.engineeringApproach}
                </p>
              </div>
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                  AI-assisted workflow
                </p>
                <p className="text-sm leading-6 text-neutral-300">
                  {aboutMe.aiAssistedWorkflow}
                </p>
              </div>
            </div>
          </section>

          <section>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
              professional journey
            </p>
            <div className="space-y-6">
              {professionalJourney.map((experience) => (
                <article
                  key={`${experience.company}-${experience.period.start}`}
                  className="border-t border-white/10 pt-4"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-medium text-neutral-100">{experience.role}</h3>
                      <p className="text-sm text-neutral-400">{experience.company}</p>
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-neutral-500">
                      {experience.period.label}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-neutral-300">
                    {experience.overview}
                  </p>
                  <p className="mt-3 text-xs leading-5 text-neutral-400">
                    {experience.technologies.join(" · ")}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="border-l border-neutral-600 pl-3 text-xs leading-5 text-neutral-300"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <details className="mt-3 text-xs text-neutral-400">
                    <summary className="cursor-pointer font-medium text-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-100">
                      Responsibilities
                    </summary>
                    <ul className="mt-2 list-disc space-y-1.5 pl-4 leading-5">
                      {experience.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </details>
                </article>
              ))}
            </div>
          </section>

          {availableLinks.length > 0 ? (
            <section>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                profile links
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {availableLinks.map(([label, href]) => {
                  if (!href) return null;
                  const isEmail = label === "email";
                  const target = isEmail ? `mailto:${href}` : href;

                  return (
                    <li key={label}>
                      <a
                        href={target}
                        target={isEmail ? undefined : "_blank"}
                        rel={isEmail ? undefined : "noreferrer"}
                        className="inline-flex items-center gap-1 text-xs text-neutral-200 underline decoration-neutral-600 underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-100"
                      >
                        {formatLinkLabel(label)}
                        {isEmail ? null : <ArrowUpRight aria-hidden="true" className="size-3.5" />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
