"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const t = useTranslations("Projects");
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto py-24 px-4 w-full">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 dark:text-neutral-400">{t("subtitle")}</p>
        </div>
        
        {/* Controles del Carrusel (Solo visibles en Desktop normalmente o útiles en móvil) */}
        <div className="hidden md:flex gap-3">
          <button 
            onClick={() => scroll("left")}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Contenedor del carrusel */}
      <div 
        ref={carouselRef}
        className="grid grid-flow-col auto-cols-[85vw] sm:auto-cols-[calc(50%-0.75rem)] lg:auto-cols-[calc(33.3333%-1.333rem)] gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
      >
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="snap-center h-full"
          >
            <div className="w-full h-full"> 
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
