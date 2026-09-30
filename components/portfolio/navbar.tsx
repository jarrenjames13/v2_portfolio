import Link from "next/link";

import { MobileNavigation } from "@/components/portfolio/mobile-navigation";
import { SectionNavigation } from "@/components/portfolio/section-navigation";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";

export function Navbar({ fromProjectsPage = false }: { fromProjectsPage?: boolean }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-tight text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          James Parungao
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <SectionNavigation fromProjectsPage={fromProjectsPage} />
          <ThemeToggle />
          <MobileNavigation fromProjectsPage={fromProjectsPage} />
        </div>
      </div>
    </header>
  );
}
