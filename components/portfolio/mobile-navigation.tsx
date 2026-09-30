"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getHomeAnchor, navigationItems } from "@/lib/portfolio-data";

export function MobileNavigation({
  fromProjectsPage = false,
}: {
  fromProjectsPage?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open site navigation"
        className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
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
          {navigationItems.map((item, index) => (
            <Link
              key={item.href}
              href={getHomeAnchor(item.href, fromProjectsPage)}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-between border-b border-border/70 px-2 text-base font-medium text-foreground transition-colors hover:text-[var(--portfolio-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <span>{item.label}</span>
              <span className="font-mono text-xs text-muted-foreground">
                0{index + 1}
              </span>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
