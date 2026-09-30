import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Footer } from "@/components/portfolio/footer";
import { Navbar } from "@/components/portfolio/navbar";
import { ProjectGrid } from "@/components/portfolio/project-grid";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects by ${profile.aboutMe.name}, ${profile.aboutMe.title}.`,
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar fromProjectsPage />
      <main className="min-h-[60vh]">
        <section aria-labelledby="all-projects-heading">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <Link
              href="/#profile"
              className={buttonVariants({ variant: "ghost", size: "sm", className: "mb-6 -ml-2" })}
            >
              <ArrowLeft aria-hidden="true" />
              Return to profile
            </Link>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6 sm:mb-10 sm:pb-8">
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.17em] text-muted-foreground">
                  Project index / {profile.projects.length.toString().padStart(2, "0")} entries
                </p>
                <h1
                  id="all-projects-heading"
                  className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
                >
                  All projects
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                  Projects across production products, internal business systems, and personal work.
                </p>
              </div>
            </div>
            <ProjectGrid projects={profile.projects} detailed />
          </div>
        </section>
      </main>
      <Footer profile={profile} fromProjectsPage />
    </>
  );
}
