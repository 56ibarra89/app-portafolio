import Image from "next/image";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 flex flex-col bg-white dark:bg-neutral-900/50 backdrop-blur-sm group">
      <div className="relative w-full h-52 mb-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-neutral-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 tracking-tight">{project.title}</h3>
      <p className="text-gray-600 dark:text-neutral-400 mb-6 flex-1 text-sm leading-relaxed">
        {project.description}
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
    </div>
  );
}
