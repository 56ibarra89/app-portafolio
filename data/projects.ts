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
    image: "/images/placeholder-2.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
    github: "https://github.com/tuusuario/eco-store",
    demo: "https://eco-store-demo.com",
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
