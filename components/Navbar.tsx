"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Languages } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const nextLocale = params.locale === "es" ? "en" : "es";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 dark:border-neutral-800/50 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-bold tracking-tighter text-lg cursor-pointer hover:opacity-80 transition-opacity">
          Desarrollador Web
          <span className="text-gray-400 dark:text-neutral-500">.</span>
        </h1>

        <div className="flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-neutral-400">
          <div className="hidden md:flex gap-6">
            <a
              href="#about"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              {t("about")}
            </a>
            <a
              href="#projects"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              {t("projects")}
            </a>
            <a
              href="#contact"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              {t("contact")}
            </a>
          </div>

          <div className="flex items-center gap-2 border-l border-gray-200 dark:border-neutral-800 pl-6 ml-2">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors uppercase font-bold text-xs flex items-center gap-1.5"
              aria-label={t("languageToggle")}
              title={t("languageToggle")}
            >
              <Languages size={14} />
              {params.locale === "es" ? "EN" : "ES"}
            </button>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label={t("themeToggle")}
                title={t("themeToggle")}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
