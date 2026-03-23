import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    image: "/images/app-factura.png",
    technologies: ["React", "TypeScript", "Electron", "Material UI"],
    github: "https://github.com/tuusuario/app-factura",
  },
  {
    id: 2,
    image: "/images/pokemon-game.png",
    technologies: ["Vue.js", "Tailwind CSS", "TypeScript", "Pinia"],
    github: "https://github.com/56ibarra89/pokemon-game",
    demo: "https://0dc6acd0.pokemon-game-egh.pages.dev/",
  },
  {
    id: 3,
    image: "/images/placeholder-3.jpg",
    technologies: ["Vue.js", "Chart.js", "Firebase", "Node.js"],
    github: "https://github.com/tuusuario/analytics-dashboard",
  },
  {
    id: 4,
    image: "/images/placeholder-2.jpg",
    technologies: ["Framer Motion", "Tailwind CSS", "React"],
    github: "https://github.com/tuusuario/test-project",
  },
];
