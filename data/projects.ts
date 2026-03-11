import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "App Factura",
    description:
      "Sistema de facturación desarrollado con React, TypeScript, Material UI y Electron.",
    image: "/images/app-factura.png",
    technologies: ["React", "TypeScript", "Electron", "Material UI"],
    github: "https://github.com/tuusuario/app-factura",
  },
  {
    id: 2,
    title: "Eco Store E-commerce",
    description:
      "Plataforma de comercio electrónico sustentable con carrito de compras, pasarela de pagos integrada y panel de administración.",
    image: "/images/placeholder-2.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
    github: "https://github.com/tuusuario/eco-store",
    demo: "https://eco-store-demo.com",
  },
  {
    id: 3,
    title: "Dashboard Analítico",
    description:
      "Panel de control interactivo para visualización de métricas en tiempo real con gráficos dinámicos y exportación de reportes.",
    image: "/images/placeholder-3.jpg",
    technologies: ["Vue.js", "Chart.js", "Firebase", "Node.js"],
    github: "https://github.com/tuusuario/analytics-dashboard",
  },
];
