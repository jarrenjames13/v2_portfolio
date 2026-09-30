import { PORTFOLIO_THEME_STORAGE_KEY } from "@/lib/portfolio-theme";

const initializeTheme = `(()=>{var root=document.documentElement,theme="dark";try{var saved=localStorage.getItem(${JSON.stringify(PORTFOLIO_THEME_STORAGE_KEY)});if(saved==="light"||saved==="dark")theme=saved}catch(e){}root.classList.toggle("dark",theme==="dark");root.style.colorScheme=theme})();`;

export function ThemeScript() {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: initializeTheme }}
    />
  );
}
