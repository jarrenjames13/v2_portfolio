import Script from "next/script";

const initializeTheme = `(()=>{let theme="dark";try{const saved=window.localStorage.getItem("portfolio-theme");if(saved==="light"||saved==="dark")theme=saved}catch{}const root=document.documentElement;root.classList.toggle("dark",theme==="dark");root.style.colorScheme=theme})();`;

export function ThemeScript() {
  // Next 16 documents beforeInteractive in the App Router root layout.
  // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
  return <Script id="portfolio-theme-init" strategy="beforeInteractive">{initializeTheme}</Script>;
}
