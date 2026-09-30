import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeScript } from "@/components/portfolio/theme-script";
import { profile } from "@/lib/portfolio-data";
import "./globals.css";
import "react-github-calendar/tooltips.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${profile.aboutMe.name} — ${profile.aboutMe.title}`,
    template: `%s — ${profile.aboutMe.name}`,
  },
  description: profile.professionalSummary.headline,
  authors: [{ name: profile.aboutMe.name }],
  creator: profile.aboutMe.name,
  applicationName: "James Parungao Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
