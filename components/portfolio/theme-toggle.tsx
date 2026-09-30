"use client";

import { Moon, Sun } from "lucide-react";

import {
  setPortfolioTheme,
  usePortfolioTheme,
} from "@/components/portfolio/use-portfolio-theme";

export function ThemeToggle() {
  const theme = usePortfolioTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";

  function toggleTheme() {
    setPortfolioTheme(nextTheme);
  }

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === "dark"}
      title={`Switch to ${nextTheme} theme`}
      onClick={toggleTheme}
      className="inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
    >
      <Moon aria-hidden="true" className="size-4 dark:hidden" />
      <Sun aria-hidden="true" className="hidden size-4 dark:block" />
    </button>
  );
}
