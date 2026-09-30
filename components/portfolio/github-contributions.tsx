"use client";

import { ArrowUpRight, GitBranch } from "lucide-react";
import dynamic from "next/dynamic";

import { buttonVariants } from "@/components/ui/button";
import { usePortfolioTheme } from "@/components/portfolio/use-portfolio-theme";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((module) => module.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div
        role="status"
        aria-live="polite"
        className="flex min-h-32 items-center justify-center font-mono text-xs text-muted-foreground"
      >
        Loading contribution activity…
      </div>
    ),
  },
);

type GitHubContributionsProps = {
  githubUrl: string;
};

const calendarTheme = {
  light: ["#eeebf9", "#d8cef4", "#b9a5eb", "#9275df", "#6d4aff"],
  dark: ["#44475a", "#66557f", "#8466ad", "#a47bd5", "#bd93f9"],
};

function getUsernameFromGitHubUrl(githubUrl: string) {
  try {
    const url = new URL(githubUrl);

    if (
      url.protocol !== "https:" ||
      !["github.com", "www.github.com"].includes(url.hostname.toLowerCase())
    ) {
      return null;
    }

    const username = url.pathname.split("/").filter(Boolean)[0];

    if (!username || !/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(username)) {
      return null;
    }

    return username;
  } catch {
    return null;
  }
}

export function GitHubContributions({ githubUrl }: GitHubContributionsProps) {
  const username = getUsernameFromGitHubUrl(githubUrl);
  const colorScheme = usePortfolioTheme();

  if (!username) return null;

  return (
    <section
      aria-labelledby="github-contributions-heading"
      className="min-w-0"
    >
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            GitHub activity
          </p>
          <h2
            id="github-contributions-heading"
            className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
          >
            Contributions
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Recent development activity across repositories and projects.
          </p>
        </div>

        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({
            variant: "ghost",
            size: "sm",
            className: "w-fit cursor-pointer",
          })}
        >
          <GitBranch aria-hidden="true" />
          View GitHub
          <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
        </a>
      </div>

      <div className="min-w-0 max-w-full overflow-hidden rounded-xl border border-border bg-card p-3 sm:p-4 md:p-5">
        <div className="min-w-0 max-w-full">
          <GitHubCalendar
            username={username}
            year="last"
            colorScheme={colorScheme}
            theme={calendarTheme}
            blockSize={12}
            blockMargin={4}
            blockRadius={2}
            fontSize={12}
            showWeekdayLabels
            throwOnError={false}
            errorMessage="GitHub contribution activity is temporarily unavailable."
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
