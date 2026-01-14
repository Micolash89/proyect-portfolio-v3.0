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
    positionClass: "right-16 md:right-32 top-48",
    imageSrc: "/images/tech/next.jpg",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    positionClass: "right-8 md:right-16 top-16",
  },
  {
    name: "React",
    Icon: SiReact,
    positionClass: "left-6 md:left-20 top-32",
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    positionClass: "right-40 md:right-56 top-20",
  },
  {
    name: "Framer Motion",
    Icon: SiFramer,
    positionClass: "left-16 md:left-40 bottom-32",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    positionClass: "right-24 md:right-44 bottom-40",
  },
  {
    name: "Git",
    Icon: SiGit,
    positionClass: "left-32 md:left-64 top-56",
  },
  {
    name: "Vercel",
    Icon: SiVercel,
    positionClass: "left-8 md:left-16 top-12",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    positionClass: "right-52 md:right-80 top-36",
  },
  {
    name: "HTML5",
    Icon: SiHtml5,
    positionClass: "right-12 md:right-28 bottom-24",
  },
  {
    name: "CSS3",
    Icon: SiCss,
    positionClass: "left-24 md:left-52 top-20",
  },
  {
    name: "Spring",
    Icon: SiSpring,
    positionClass: "left-48 md:left-96 top-44",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    positionClass: "left-12 md:left-28 bottom-20",
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
    positionClass: "right-36 md:right-64 bottom-28",
  },
  {
    name: "Supabase",
    Icon: SiSupabase,
    positionClass: "left-40 md:left-80 top-12",
  },
  {
    name: "pnpm",
    Icon: SiPnpm,
    positionClass: "right-48 md:right-72 top-52",
  },
  {
    name: "Express.js",
    Icon: SiExpress,
    positionClass: "left-64 md:left-[420px] top-28",
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    positionClass: "right-60 md:right-96 bottom-36",
  },
  {
    name: "Prisma",
    Icon: SiPrisma,
    positionClass: "left-56 md:left-[360px] bottom-16",
  },
  {
    name: "Postman",
    Icon: SiPostman,
    positionClass: "right-20 md:right-40 top-60",
  },
  {
    name: "GitHub",
    Icon: SiGithub,
    positionClass: "left-20 md:left-44 top-64",
  },
  {
    name: "Python",
    Icon: SiPython,
    positionClass: "right-64 md:right-[420px] top-16",
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
