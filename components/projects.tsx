"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "Proyecto 1: Portfolio Animado",
    description:
      "Una app dinámica inspirada en sitios modernos con animaciones scroll avanzadas y efectos 3D.",
    image: "/dark-minimal-website-with-animations.jpg",
    tags: ["Next.js", "Framer Motion", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Proyecto 2: Dashboard Interactivo",
    description:
      "Panel de administración con gráficos en tiempo real y transiciones fluidas entre vistas.",
    image: "/dark-dashboard-interface-with-charts.jpg",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Proyecto 3: E-commerce Moderno",
    description:
      "Tienda online con carrito dinámico, filtros animados y experiencia de compra fluida.",
    image: "/dark-ecommerce-website-minimal.jpg",
    tags: ["Next.js", "Stripe", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Proyecto 4: App de Productividad",
    description:
      "Aplicación de gestión de tareas con drag and drop, notificaciones y sincronización en la nube.",
    image: "/dark-productivity-app-interface.jpg",
    tags: ["TypeScript", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="proyectos"
      className="relative py-32 md:py-48 bg-card"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm text-muted-foreground uppercase tracking-[0.3em] mb-4 block"
          >
            Proyectos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
          >
            Trabajo <span className="text-muted-foreground">Seleccionado</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
