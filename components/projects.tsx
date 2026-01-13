"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "Generador de Curriculum Vitae con IA",
    description: "Proyecto personal - Frontend y Backend",
    image: "/images/proyect-cv.jpg",
    tags: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "pnpm",
      "HTML5",
      "CSS3",
      "VSCode",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Micolash89/proyect-cv",
  },
  {
    title: "Gestión de Inscripciones",
    description: "sistema de gestión de inscripciones para práctica del acelerador del POLO IT",
    image: "/images/gestion-estudiantes.jpg",
    tags: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "PostgreSQL",
      "pnpm",
      "HTML5",
      "CSS3",
      "VSCode",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/gabito1966/mvp_poloit",
  },
  {
    title: "Crud Page",
    description: "Crud Page - Frontend y Backend - proyecto integrador full stack NodeJs",
    image: "/images/U7GKDnI.jpeg",
    tags: [
      "React",
      "Vite",
      "NodeJS",
      "Express",
      "MySQL",
      "npm",
      "HTML5",
      "CSS3",
      "VSCode",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Micolash89/crud-page",
  },
  {
    title: "E-commerce",
    description: "E-commerce Page - Frontend y Backend - proyecto personal",
    image: "/images/e-commerce.jpg",
    tags: [
      "React",
      "Vite",
      "NodeJS",
      "Express",
      "MongoDB",
      "npm",
      "HTML5",
      "CSS3",
      "VSCode",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Micolash89/e-commerce-Coder-FrontEnd",
  },
  {
    title: "Porfolio",
    description: "proyecto integrador curso de Educacion IT - Frond End React",
    image: "/images/educacion-it-proyecto-integrador2.jpg",
    tags: ["React", "Vite", "HTML5", "CSS3", "VSCode"],
    liveUrl: "#",
    githubUrl: "https://github.com/Micolash89/Javier-Espindola-entrega03",
  },
  {
    title: "Biblioteca Wep App",
    description: "Proyecto integrador - Argentina Programa, Egg Cooperation",
    image: "/images/proyecto-integrador-Sprint-Egg-Cooperation-.jpg",
    tags: [
      "Java",
      "MySQL",
      "Spring Boot",
      "Maven",
      "Hibernate",
      "HTML5",
      "CSS3",
      "NetBeans",
    ],
    liveUrl: "#",
    githubUrl:
      "https://github.com/Micolash89/proyecto-bilioteca-egg-sprint-boot",
  },
  // {
  //   title: "Creacion de una splash Screen",
  //   description: "Curso introducción a android - Fundación Telefónica Movistar",
  //   image: "/images/android-screen-splash.jpg",
  //   tags: ["Kotlin", "Android Studio"],
  //   liveUrl: "#",
  //   githubUrl:
  //     "https://github.com/Micolash89/Modulo-3-Creacion-de-una-splash-screen-en-android/tree/master",
  // },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
