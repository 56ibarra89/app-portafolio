import { useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="max-w-7xl mx-auto py-24 px-4 w-full">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {t("title")}
        </h2>
        <p className="text-gray-600 dark:text-neutral-400">{t("subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
