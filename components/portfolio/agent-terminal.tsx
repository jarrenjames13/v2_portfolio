"use client";

import { ArrowUpRight, Download, Terminal } from "lucide-react";

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
      <div className="overflow-hidden rounded-xl border border-[#44475a] bg-[#21222c] text-[#f8f8f2] shadow-sm">
        <div className="flex items-center justify-between gap-4 border-b border-[#44475a] px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-2.5 font-mono text-xs sm:text-sm">
            <Terminal aria-hidden="true" className="size-4 shrink-0 text-[#bd93f9]" />
            <span className="truncate text-[#e1e0e8]">$ cat {agentFile.filename}</span>
          </div>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-[#c2c4d2]">
            profile file
          </span>
        </div>

        <dl className="space-y-4 px-4 py-5 sm:px-5 sm:py-6">
          <div>
            <dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c2c4d2]">
              description
            </dt>
            <dd className="text-sm leading-6 text-[#f8f8f2]">
              {agentFile.description}
            </dd>
          </div>
          <div className="grid gap-4 border-t border-[#44475a] pt-4 sm:grid-cols-[0.7fr_1.3fr]">
            <div>
              <dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c2c4d2]">
                mode
              </dt>
              <dd className="font-mono text-xs text-[#f8f8f2]">{agentFile.mode}</dd>
            </div>
            <div>
              <dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c2c4d2]">
                permission
              </dt>
              <dd className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-[#f8f8f2]">
                {permissions.map(([name, value]) => (
                  <span key={name}>
                    {name}: {value}
                  </span>
                ))}
              </dd>
            </div>
          </div>
        </dl>

        <DialogTrigger className="group/trigger flex min-h-11 w-full cursor-pointer items-center justify-between border-t border-[#44475a] px-4 py-3 text-left font-mono text-[10px] uppercase tracking-[0.13em] text-[#c2c4d2] transition-colors hover:bg-[#30323f] hover:text-[#f8f8f2] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#bd93f9] motion-reduce:transition-none sm:px-5">
          <span>Open full profile</span>
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover/trigger:translate-x-0.5 group-hover/trigger:-translate-y-0.5 motion-reduce:transition-none"
          />
        </DialogTrigger>
      </div>

      <DialogContent
        className="bg-[#21222c] text-[#f8f8f2]"
        closeButtonClassName="text-[#c2c4d2] hover:text-[#f8f8f2] focus-visible:text-[#f8f8f2]"
      >
        <div className="border-b border-[#44475a] px-5 py-5 pr-14 sm:px-7 sm:py-6">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c2c4d2]">
            $ cat {agentFile.filename}
          </p>
          <DialogTitle className="text-xl text-[#f8f8f2] sm:text-2xl">
            {aboutMe.name}
          </DialogTitle>
          <DialogDescription className="mt-1 text-[#c2c4d2]">
            {aboutMe.title} · {aboutMe.location}
          </DialogDescription>
        </div>

        <div
          role="region"
          aria-label="Scrollable full profile"
          tabIndex={0}
          className="min-h-0 space-y-7 overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-5 py-5 sm:px-7 sm:py-6"
        >
          <section>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c2c4d2]">
              professional summary
            </p>
            <p className="font-medium leading-6 text-[#f8f8f2]">
              {professionalSummary.headline}
            </p>
            <p className="mt-2 text-sm leading-6 text-[#e1e0e8]">
              {professionalSummary.summary}
            </p>
          </section>

          <section>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c2c4d2]">
              focus areas and capabilities
            </p>
            <ul className="flex flex-wrap gap-2">
              {professionalSummary.focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-md border border-[#44475a] px-2.5 py-1 font-mono text-[11px] text-[#e1e0e8]"
                >
                  {area}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c2c4d2]">
              technology stack
            </p>
            <div className="space-y-3">
              {Object.entries(techStack).map(([category, technologies]) => (
                <div
                  key={category}
                  className="grid gap-1.5 border-t border-[#44475a] pt-2.5 sm:grid-cols-[10rem_1fr]"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#c2c4d2]">
                    {category}
                  </p>
                  <p className="text-xs leading-5 text-[#e1e0e8]">
                    {technologies.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-5 border-t border-[#44475a] pt-5 sm:grid-cols-2">
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c2c4d2]">
                about
              </p>
              <p className="text-sm leading-6 text-[#e1e0e8]">{aboutMe.bio}</p>
            </div>
            <div className="space-y-5">
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c2c4d2]">
                  engineering approach
                </p>
                <p className="text-sm leading-6 text-[#e1e0e8]">
                  {aboutMe.engineeringApproach}
                </p>
              </div>
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c2c4d2]">
                  AI-assisted workflow
                </p>
                <p className="text-sm leading-6 text-[#e1e0e8]">
                  {aboutMe.aiAssistedWorkflow}
                </p>
              </div>
            </div>
          </section>

          <section>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c2c4d2]">
              professional journey
            </p>
            <div className="space-y-6">
              {professionalJourney.map((experience) => (
                <article
                  key={`${experience.company}-${experience.period.start}`}
                  className="border-t border-[#44475a] pt-4"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-medium text-[#f8f8f2]">{experience.role}</h3>
                      <p className="text-sm text-[#c2c4d2]">{experience.company}</p>
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#c2c4d2]">
                      {experience.period.label}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#e1e0e8]">
                    {experience.overview}
                  </p>
                  <p className="mt-3 text-xs leading-5 text-[#c2c4d2]">
                    {experience.technologies.join(" · ")}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="border-l border-[#6272a4] pl-3 text-xs leading-5 text-[#e1e0e8]"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <details className="mt-3 text-xs text-[#c2c4d2]">
                    <summary className="cursor-pointer font-medium text-[#f8f8f2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd93f9]">
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
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c2c4d2]">
                profile links
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {availableLinks.map(([label, href]) => {
                  if (!href) return null;
                  const isEmail = label === "email";
                  const isResume = label === "resume";
                  const target = isEmail ? `mailto:${href}` : href;

                  return (
                    <li key={label}>
                      <a
                        href={target}
                        target={isEmail || isResume ? undefined : "_blank"}
                        rel={isEmail || isResume ? undefined : "noreferrer"}
                        download={isResume ? true : undefined}
                        className="inline-flex items-center gap-1 text-xs text-[#e1e0e8] underline decoration-[#6272a4] underline-offset-4 hover:text-[#bd93f9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd93f9]"
                      >
                        {formatLinkLabel(label)}
                        {isResume ? (
                          <Download aria-hidden="true" className="size-3.5" />
                        ) : isEmail ? null : (
                          <ArrowUpRight aria-hidden="true" className="size-3.5" />
                        )}
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
