"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { getHomeAnchor, navigationItems, profile } from "@/lib/portfolio-data";
import { useActiveSection } from "@/components/portfolio/section-navigation";

export function MobileNavigation({
  fromProjectsPage = false,
}: {
  fromProjectsPage?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const activeHref = useActiveSection(fromProjectsPage);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open site navigation"
        className="inline-flex size-10 cursor-pointer items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
      >
        <Menu aria-hidden="true" className="size-5" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[min(22rem,calc(100vw-2rem))] gap-0 border-l border-border bg-background p-0"
      >
        <SheetHeader className="border-b border-border px-6 py-6 pr-14">
          <SheetTitle className="font-sans text-lg font-semibold tracking-tight">
            James Parungao
          </SheetTitle>
          <SheetDescription className="font-mono text-xs">
            Site navigation
          </SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile navigation" className="flex flex-col px-4 py-5">
          {navigationItems.map((item, index) => {
            const isActive = activeHref === item.href;

            return (
              <Link
                key={item.href}
                href={getHomeAnchor(item.href, fromProjectsPage)}
                aria-current={
                  isActive ? (fromProjectsPage ? "page" : "location") : undefined
                }
                onClick={() => setOpen(false)}
                className={`flex min-h-12 items-center justify-between border-b border-border/70 px-2 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  isActive
                    ? "text-[var(--portfolio-accent)]"
                    : "text-foreground hover:text-[var(--portfolio-accent)]"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={`size-1.5 rounded-full ${
                      isActive ? "bg-[var(--portfolio-accent)]" : "bg-transparent"
                    }`}
                  />
                  {item.label}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
              </Link>
            );
          })}
        </nav>
        {profile.aboutMe.links.resume ? (
          <div className="mx-4 border-t border-border pt-4">
            <a
              href={profile.aboutMe.links.resume}
              download
              onClick={() => setOpen(false)}
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "min-h-11 w-full cursor-pointer justify-between px-4",
              })}
            >
              Download resume
              <Download aria-hidden="true" data-icon="inline-end" />
            </a>
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
