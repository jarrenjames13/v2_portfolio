import Link from "next/link";

import { MobileNavigation } from "@/components/portfolio/mobile-navigation";
import { getHomeAnchor, navigationItems } from "@/lib/portfolio-data";

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

        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={getHomeAnchor(item.href, fromProjectsPage)}
              className="py-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <MobileNavigation fromProjectsPage={fromProjectsPage} />
      </div>
    </header>
  );
}
