import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="about" className="max-w-5xl mx-auto pt-40 pb-24 px-4 flex flex-col items-start justify-center min-h-[80vh]">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
        {t("greeting")}{" "}
        <span className="bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-500 dark:from-white dark:to-neutral-500">
          Francisco
        </span>
      </h1>

      <p className="text-gray-600 dark:text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
        {t.rich("description", {
          important: (chunks) => <strong className="font-medium text-gray-900 dark:text-white">{chunks}</strong>
        })}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a href="#projects" className="bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-7 py-3 rounded-full font-medium hover:scale-105 active:scale-95 transition-all shadow-lg shadow-neutral-900/20 dark:shadow-white/10">
          {t("viewProjects")}
        </a>

        <a href="#contact" className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white border border-gray-200 dark:border-neutral-800 px-7 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all">
          {t("contact")}
        </a>
      </div>
    </section>
  );
}
