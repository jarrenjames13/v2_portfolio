"use client";

import { useSyncExternalStore } from "react";

import {
  PORTFOLIO_THEME_CHANGE_EVENT,
  PORTFOLIO_THEME_STORAGE_KEY,
  type PortfolioTheme,
} from "@/lib/portfolio-theme";

function subscribe(onStoreChange: () => void) {
  window.addEventListener(PORTFOLIO_THEME_CHANGE_EVENT, onStoreChange);
  return () => window.removeEventListener(PORTFOLIO_THEME_CHANGE_EVENT, onStoreChange);
}

function getThemeSnapshot(): PortfolioTheme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerThemeSnapshot(): PortfolioTheme {
  return "dark";
}

export function usePortfolioTheme() {
  return useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
}

export function setPortfolioTheme(theme: PortfolioTheme) {
  const root = document.documentElement;

  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;

  try {
    window.localStorage.setItem(PORTFOLIO_THEME_STORAGE_KEY, theme);
  } catch {
    // The in-memory theme still works when storage is unavailable.
  }

  window.dispatchEvent(new Event(PORTFOLIO_THEME_CHANGE_EVENT));
}
