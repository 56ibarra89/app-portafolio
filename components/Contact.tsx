import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto py-24 px-4 border-t border-gray-200/50 dark:border-neutral-800/50 mt-12 block w-full"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          {t("title")}
        </h2>

        <p className="text-gray-600 dark:text-neutral-400 mb-10 text-lg leading-relaxed">
          {t("description")}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="[EMAIL_ADDRESS]"
            className="flex items-center justify-center gap-2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-6 py-3 rounded-full font-medium hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            {t("email")}
          </a>

          <a
            href="https://github.com/56ibarra89"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white border border-gray-200 dark:border-neutral-800 px-6 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all"
          >
            {t("github")}
          </a>

          <a
            href="https://linkedin.com/in/francisco-ibarra-valle"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white border border-gray-200 dark:border-neutral-800 px-6 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all"
          >
            {t("linkedin")}
          </a>
        </div>
      </div>
    </section>
  );
}
