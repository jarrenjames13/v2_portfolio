"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getHomeAnchor, navigationItems } from "@/lib/portfolio-data";

export function useActiveSection(fromProjectsPage = false) {
  const [observedHref, setObservedHref] = useState("#profile");
  const activeHref = fromProjectsPage ? "#projects" : observedHref;

  useEffect(() => {
    if (fromProjectsPage || !("IntersectionObserver" in window)) return;

    const sections = navigationItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;
    let frame = 0;

    const updateActiveSection = () => {
      const atPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (atPageBottom) {
        setObservedHref("#contact");
        return;
      }

      const marker = window.innerHeight * 0.45;
      const active =
        sections.find((section) => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= marker && bounds.bottom > marker;
        }) ??
        sections
          .filter((section) => section.getBoundingClientRect().top <= marker)
          .at(-1) ??
        sections[0];

      if (active) setObservedHref(`#${active.id}`);
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateActiveSection();
      });
    };

    let observer: IntersectionObserver | undefined;

    const observeSections = () => {
      observer?.disconnect();
      const topInset = Math.round(window.innerHeight * 0.3);
      const bottomInset = Math.round(window.innerHeight * 0.4);
      observer = new IntersectionObserver(scheduleUpdate, {
        rootMargin: `-${topInset}px 0px -${bottomInset}px 0px`,
        threshold: 0,
      });
      sections.forEach((section) => observer?.observe(section));
      scheduleUpdate();
    };

    observeSections();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", observeSections);

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", observeSections);
    };
  }, [fromProjectsPage]);

  return activeHref;
}

export function SectionNavigation({
  fromProjectsPage = false,
}: {
  fromProjectsPage?: boolean;
}) {
  const activeHref = useActiveSection(fromProjectsPage);

  return (
    <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
      {navigationItems.map((item) => {
        const isActive = activeHref === item.href;

        return (
          <Link
            key={item.href}
            href={getHomeAnchor(item.href, fromProjectsPage)}
            aria-current={
              isActive ? (fromProjectsPage ? "page" : "location") : undefined
            }
            className={`relative py-2 text-[13px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring ${
              isActive
                ? "text-[var(--portfolio-accent)] after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-[var(--portfolio-accent)] after:content-['']"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
