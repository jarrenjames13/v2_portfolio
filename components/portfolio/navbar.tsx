import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";

import { MobileNavigation } from "@/components/portfolio/mobile-navigation";
import { SectionNavigation } from "@/components/portfolio/section-navigation";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";

export function Navbar({ fromProjectsPage = false }: { fromProjectsPage?: boolean }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <Image
            src="/icon.png"
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-md"
          />
          <span>James Parungao</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <SectionNavigation fromProjectsPage={fromProjectsPage} />
          <ThemeToggle />
          {profile.aboutMe.links.resume ? (
            <div className="hidden lg:flex">
              <a
                href={profile.aboutMe.links.resume}
                download
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "cursor-pointer",
                })}
              >
                Resume
                <Download aria-hidden="true" data-icon="inline-end" />
              </a>
            </div>
          ) : null}
          <MobileNavigation fromProjectsPage={fromProjectsPage} />
        </div>
      </div>
    </header>
  );
}
