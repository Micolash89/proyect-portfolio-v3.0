"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiGit,
  SiVercel,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSpring,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiPnpm,
  SiExpress,
  SiMysql,
  SiPrisma,
  SiPostman,
  SiPython,
  SiGithub,
  IconType,
} from "@icons-pack/react-simple-icons";

export type Technology = {
  name: string;
  Icon: IconType;
  positionClass: string;
  imageSrc?: string;
};

export const technologies: Technology[] = [
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    positionClass: "left-2 md:left-10 top-1/6",
    imageSrc: "/images/tech/next.jpg",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    positionClass: "right-2 md:right-10 top-1/5",
  },
  {
    name: "React",
    Icon: SiReact,
    positionClass: "left-12 md:left-32 top-1/3",
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    positionClass: "right-12 md:right-32 top-1/4",
  },
  {
    name: "Framer Motion",
    Icon: SiFramer,
    positionClass: "left-20 md:left-40 top-1/2",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    positionClass: "right-20 md:right-40 top-2/5",
  },
  {
    name: "Git",
    Icon: SiGit,
    positionClass: "left-32 md:left-56 top-3/5",
  },
  {
    name: "Vercel",
    Icon: SiVercel,
    positionClass: "right-32 md:right-56 top-3/4",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    positionClass: "left-10 md:left-24 top-2/3",
  },
  {
    name: "HTML5",
    Icon: SiHtml5,
    positionClass: "right-10 md:right-24 top-2/3",
  },
  {
    name: "CSS3",
    Icon: SiCss,
    positionClass: "left-24 md:left-48 top-4/5",
  },
  {
    name: "Spring",
    Icon: SiSpring,
    positionClass: "right-24 md:right-48 top-4/5",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    positionClass: "left-40 md:left-72 top-5/6",
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
    positionClass: "right-40 md:right-72 top-5/6",
  },
  {
    name: "Supabase",
    Icon: SiSupabase,
    positionClass: "left-52 md:left-96 top-11/12",
  },
  {
    name: "pnpm",
    Icon: SiPnpm,
    positionClass: "right-52 md:right-96 top-11/12",
  },
  {
    name: "Express.js",
    Icon: SiExpress,
    positionClass: "left-64 md:left-112 top-3/4",
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    positionClass: "right-64 md:right-112 top-3/4",
  },
  {
    name: "Prisma",
    Icon: SiPrisma,
    positionClass: "left-72 md:left-128 top-2/3",
  },
  {
    name: "Postman",
    Icon: SiPostman,
    positionClass: "right-72 md:right-128 top-2/3",
  },
  {
    name: "GitHub",
    Icon: SiGithub,
    positionClass: "left-80 md:left-144 top-1/2",
  },
  {
    name: "Python",
    Icon: SiPython,
    positionClass: "right-80 md:right-144 top-1/2",
  },
];

export default function Technologies() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section
      ref={containerRef}
      id="tecnologias"
      className="relative py-32 md:py-48 bg-background overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm text-muted-foreground uppercase tracking-[0.3em] mb-4 block"
          >
            Stack Tecnológico
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
          >
            Herramientas que{" "}
            <span className="text-muted-foreground">domino</span>
          </motion.h2>
        </div>

        <motion.div
          style={{ x }}
          className="grid grid-cols-4 md:grid-cols-7 gap-2 md:gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.2 },
              }}
              className="group relative p-2 md:p-8 bg-card rounded-2xl border border-border/50 hover:border-border transition-all duration-300"
              style={{ perspective: 1000 }}
            >
              <div className="flex flex-col items-center gap-4">
                <tech.Icon
                  size={48}
                  className=" text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                />
                <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
