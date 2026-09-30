import { ArrowUpRight, GitBranch, Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import type { PortfolioProfile } from "@/lib/portfolio-data";

export function ContactSection({ profile }: { profile: PortfolioProfile }) {
  const { links } = profile.aboutMe;

  return (
    <div className="grid gap-7 border-y border-border py-7 sm:grid-cols-[1fr_auto] sm:items-center sm:py-9">
      <div className="max-w-xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          Contact
        </p>
        <h2
          id="contact-heading"
          className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Find me online
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Connect through the links currently listed in my profile.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {links.github ? (
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            <GitBranch aria-hidden="true" />
            GitHub
            <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
          </a>
        ) : null}
        {links.linkedin ? (
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            LinkedIn
            <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
          </a>
        ) : null}
        {links.email ? (
          <a
            href={`mailto:${links.email}`}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <Mail aria-hidden="true" />
            Email
          </a>
        ) : null}
      </div>
    </div>
  );
}
