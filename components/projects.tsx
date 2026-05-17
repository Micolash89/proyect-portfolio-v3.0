"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/constants";



export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [showAllMobile, setShowAllMobile] = useState(false);

  const mobileProjects = useMemo(
    () => (showAllMobile ? projects : projects.slice(0, 3)),
    [showAllMobile]
  );

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
            portfolio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground capitalize"
          >
            proyectos <span className="text-muted-foreground">destacados</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:hidden">
          {mobileProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        {!showAllMobile && projects.length > 3 && (
          <div className="mt-8 flex justify-center md:hidden">
            <button
              type="button"
              onClick={() => setShowAllMobile(true)}
              className="rounded-full border border-border/70 bg-card px-6 py-3 text-sm uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-secondary"
            >
              Mostrar más
            </button>
          </div>
        )}

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
