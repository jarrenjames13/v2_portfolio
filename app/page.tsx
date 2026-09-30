import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText, GitBranch, MapPin } from "lucide-react";

import { AgentTerminal } from "@/components/portfolio/agent-terminal";
import { ContactSection } from "@/components/portfolio/contact-section";
import { ExperienceTimeline } from "@/components/portfolio/experience-timeline";
import { Footer } from "@/components/portfolio/footer";
import { Navbar } from "@/components/portfolio/navbar";
import { ProjectGrid } from "@/components/portfolio/project-grid";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { StackSection } from "@/components/portfolio/stack-section";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";

export default function Home() {
  const featuredProjects = profile.projects
    .filter((project) => project.featured)
    .slice(0, 4);
  const { links } = profile.aboutMe;

  return (
    <>
      <Navbar />
      <main>
        <section
          id="profile"
          aria-labelledby="profile-heading"
          className="scroll-mt-24 border-b border-border"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-14 lg:px-8 lg:py-24">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                <span>{profile.aboutMe.title}</span>
                <span aria-hidden="true" className="text-border">
                  /
                </span>
                <span className="inline-flex items-center gap-1.5 normal-case tracking-normal">
                  <MapPin aria-hidden="true" className="size-3.5" />
                  {profile.aboutMe.location}
                </span>
              </div>
              <h1
                id="profile-heading"
                className="max-w-3xl text-[clamp(2.8rem,9vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-foreground"
              >
                {profile.aboutMe.name}
              </h1>
              <p className="mt-5 max-w-xl text-lg font-medium leading-7 tracking-tight text-foreground/85 sm:text-xl">
                {profile.professionalSummary.headline}
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                {profile.professionalSummary.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                <Link
                  href="#projects"
                  className={buttonVariants({ variant: "default", size: "lg" })}
                >
                  View projects
                  <ArrowRight aria-hidden="true" data-icon="inline-end" />
                </Link>
                {links.github ? (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({ variant: "outline", size: "lg" })}
                  >
                    <GitBranch aria-hidden="true" />
                    GitHub
                    <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
                  </a>
                ) : null}
                {links.resume ? (
                  <Link
                    href={links.resume}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({ variant: "ghost", size: "lg" })}
                  >
                    <FileText aria-hidden="true" />
                    Resume
                    <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
                  </Link>
                ) : null}
              </div>

              <div className="mt-9 border-t border-border pt-5">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  Focus areas
                </p>
                <ul className="flex flex-wrap gap-x-2 gap-y-2">
                  {profile.professionalSummary.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="rounded-md border border-border/80 bg-background px-2.5 py-1.5 text-xs text-foreground/80"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:pl-1">
              <AgentTerminal profile={profile} />
            </div>
          </div>
        </section>

        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="scroll-mt-24 border-b border-border"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
              <SectionHeading
                eyebrow="Selected work"
                title="Projects"
                description="A few projects across production systems, internal tools, and personal builds."
                id="projects-heading"
              />
              <div className="mb-8 flex shrink-0 items-center gap-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {featuredProjects.length.toString().padStart(2, "0")} featured
                </p>
                <Link
                  href="/projects"
                  className={buttonVariants({ variant: "outline", size: "default" })}
                >
                  View all projects
                  <ArrowRight aria-hidden="true" data-icon="inline-end" />
                </Link>
              </div>
            </div>

            <ProjectGrid projects={featuredProjects} />

            <div className="mt-8 border-t border-border pt-5">
              <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                More projects and project details are available on the projects page.
              </p>
            </div>
          </div>
        </section>

        <section
          id="stack"
          aria-labelledby="stack-heading"
          className="scroll-mt-24 border-b border-border"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <SectionHeading
              eyebrow="Tools and technologies"
              title="Stack"
              description="A practical toolkit for building, testing, shipping, and supporting software across the stack."
              id="stack-heading"
            />
            <StackSection techStack={profile.techStack} />
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-24 border-b border-border"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <SectionHeading
              eyebrow="How I work"
              title="About"
              description={profile.aboutMe.bio}
              id="about-heading"
            />

            <div className="grid gap-6 border-y border-border py-6 sm:grid-cols-2 sm:gap-10 sm:py-8">
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  Engineering approach
                </h3>
                <p className="mt-3 text-sm leading-7 text-foreground/85">
                  {profile.aboutMe.engineeringApproach}
                </p>
              </div>
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  AI-assisted workflow
                </h3>
                <p className="mt-3 text-sm leading-7 text-foreground/85">
                  {profile.aboutMe.aiAssistedWorkflow}
                </p>
              </div>
            </div>

            <div className="mt-12 sm:mt-16">
              <SectionHeading
                eyebrow="Professional journey"
                title="Experience"
                description="Roles and selected outcomes from my professional work."
              />
              <ExperienceTimeline experiences={profile.professionalJourney} />
            </div>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-24"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <ContactSection profile={profile} />
          </div>
        </section>
      </main>
      <Footer profile={profile} />
    </>
  );
}
