import sourceProfile from "@/profile.json";

type SourceProfile = typeof sourceProfile;

export type ProjectLinkMap = Record<string, string | undefined>;

export type PortfolioProject = SourceProfile["projects"][number] & {
  links?: ProjectLinkMap;
};

type ProfileLinks = SourceProfile["aboutMe"]["links"] & {
  linkedin?: string;
  email?: string;
};

export type PortfolioProfile = Omit<SourceProfile, "aboutMe" | "projects"> & {
  aboutMe: Omit<SourceProfile["aboutMe"], "links"> & {
    links: ProfileLinks;
  };
  projects: PortfolioProject[];
};

export const profile = sourceProfile as PortfolioProfile;

export const navigationItems = [
  { label: "Profile", href: "#profile" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export function getHomeAnchor(href: string, fromProjectsPage = false) {
  return fromProjectsPage ? `/${href}` : href;
}

export function formatLinkLabel(label: string) {
  const knownLabels: Record<string, string> = {
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    resume: "Resume",
  };
  const knownLabel = knownLabels[label.toLowerCase()];

  if (knownLabel) return knownLabel;

  return label
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}
