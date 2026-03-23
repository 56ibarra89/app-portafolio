import Image from "next/image";
import { useTranslations } from "next-intl";
import { Project } from "@/types/project";
import { Github, ExternalLink } from "lucide-react";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const t = useTranslations("Projects.items");
  const tGeneral = useTranslations("Projects");

  return (
    <div className="h-full border border-gray-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 flex flex-col bg-white dark:bg-neutral-900/50 backdrop-blur-sm group">
      <div className="relative w-full h-52 mb-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-neutral-800">
        <Image
          src={project.image}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...{ alt: t(`${project.id}.title` as any) }}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <h3 className="text-xl font-bold mb-2 tracking-tight">{t(`${project.id}.title` as any)}</h3>
      <p className="text-gray-600 dark:text-neutral-400 mb-6 flex-1 text-sm leading-relaxed">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {t(`${project.id}.description` as any)}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 border border-transparent dark:border-neutral-700/50"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.github || project.demo) && (
        <div className="flex gap-4 mt-6 pt-4 border-t border-gray-100 dark:border-neutral-800">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
            >
              <Github size={16} />
              {tGeneral("viewCode")}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
              {tGeneral("viewDemo")}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
