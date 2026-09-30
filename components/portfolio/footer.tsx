import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { formatLinkLabel, getHomeAnchor, navigationItems, type PortfolioProfile } from "@/lib/portfolio-data";

export function Footer({
  profile,
  fromProjectsPage = false,
}: {
  profile: PortfolioProfile;
  fromProjectsPage?: boolean;
}) {
  const { links } = profile.aboutMe;
  const connectLinks = [
    links.github ? { label: "GitHub", href: links.github, external: true } : null,
    links.linkedin ? { label: "LinkedIn", href: links.linkedin, external: true } : null,
    links.email ? { label: "Email", href: `mailto:${links.email}`, external: false } : null,
  ].filter((link) => link !== null);

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-11 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-[1.2fr_0.8fr_0.8fr] sm:gap-10">
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              James Parungao
            </Link>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {profile.professionalSummary.headline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Navigate
            </h2>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={getHomeAnchor(item.href, fromProjectsPage)}
                    className="text-sm text-foreground/80 transition-colors hover:text-[var(--portfolio-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Connect
            </h2>
            <ul className="space-y-2">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-[var(--portfolio-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      {formatLinkLabel(link.label)}
                      <ArrowUpRight aria-hidden="true" className="size-3.5" />
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-[var(--portfolio-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      {formatLinkLabel(link.label)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} James Parungao. All rights reserved.</p>
          <p>Design &amp; development by James Parungao</p>
        </div>
      </div>
    </footer>
  );
}
