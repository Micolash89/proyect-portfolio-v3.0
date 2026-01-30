import { Mail, Linkedin } from "lucide-react";
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
  SiRender,
} from "@icons-pack/react-simple-icons";

import { Technology } from "@/lib/definitions";
import { FaJava, FaLinkedinIn } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { SiApachenetbeanside, SiVite } from "react-icons/si";

export const colorWords = [
  "programador",
  "estudiante",
  "innovador",
  "resiliente",
  "creativo",
  "apasionado",
  "visionario",
  "líder",
  "colaborador",
  "solucionador",
  "adaptable",
  "curioso",
  "detallista",
  "estratégico",
  "proactivo",
  "comunicativo",
  "organizado",
  "eficiente",
  "responsable",
  "comprometido",
];

export const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:espindolajavier2013@gmail.com",
    value: "espindolajavier2013@gmail.com",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://linkedin.com/in/javier-espindola/",
    value: "javier Espindola",
  },
  {
    icon: SiGithub,
    label: "GitHub",
    href: "https://github.com/Micolash89",
    value: "@Micolash89",
  },
];

export const navItems = [
  { href: "#Home", label: "inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#aboutme", label: "acerca de mí" },
  { href: "#contacto", label: "Contacto" },
];

export const projects = [
  {
    title: "E-commerce de Cartas Coleccionables",
    description:
      "Tienda online de cartas de Yu-Gi-Oh! y Digimon. Desarrollo del frontend.",
    image: "/images/laRataDuelista.jpg",
    tags: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "pnpm",
      "HTML5",
      "CSS3",
      "VSCode",
    ],
    liveUrl: "https://www.larataduelista.com.ar/",
    githubUrl: "",
  },
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
    liveUrl: "https://proyect-cv.vercel.app/",
    githubUrl: "https://github.com/Micolash89/proyect-cv",
  },
  {
    title: "Gestión de Inscripciones",
    description:
      "sistema de gestión de inscripciones para práctica del acelerador del POLO IT",
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
    liveUrl: "https://mvp-poloit.vercel.app/",
    githubUrl: "https://github.com/gabito1966/mvp_poloit",
  },
  {
    title: "Crud Page",
    description:
      "Crud Page - Frontend y Backend - proyecto integrador full stack NodeJs",
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
    liveUrl: "https://micolash89.github.io/crud-page/",
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
    liveUrl: "https://micolash89.github.io/e-commerce-Coder-FrontEnd/",
    githubUrl: "https://github.com/Micolash89/e-commerce-Coder-FrontEnd",
  },
  {
    title: "Porfolio",
    description:
      "proyecto integrador - curso de Educacion IT - Frond End React",
    image: "/images/educacion-it-proyecto-integrador2.jpg",
    tags: ["React", "Vite", "HTML5", "CSS3", "VSCode"],
    liveUrl: "https://micolash89.github.io/Javier-Espindola-entrega03/",
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
    liveUrl: "",
    githubUrl:
      "https://github.com/Micolash89/proyecto-bilioteca-egg-sprint-boot",
  },
];

export const technologies: Technology[] = [
  {
    name: "TypeScript",
    Icon: SiTypescript,
    positionClass: "right-8 md:right-16 top-16",
  },
  {
    name: "Java",
    Icon: FaJava,
    positionClass: "left-10 md:left-24 top-24",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    positionClass: "right-52 md:right-80 top-36",
  },
  {
    name: "Python",
    Icon: SiPython,
    positionClass: "right-64 md:right-[420px] top-16",
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
    name: "Next.js",
    Icon: SiNextdotjs,
    positionClass: "right-16 md:right-32 top-48",
    imageSrc: "/images/tech/next.jpg",
  },
  {
    name: "React",
    Icon: SiReact,
    positionClass: "left-6 md:left-20 top-32",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    positionClass: "right-24 md:right-44 bottom-40",
  },
  {
    name: "Express.js",
    Icon: SiExpress,
    positionClass: "left-64 md:left-[420px] top-28",
  },
  {
    name: "Spring",
    Icon: SiSpring,
    positionClass: "left-48 md:left-96 top-44",
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
    name: "ViteJS",
    Icon: SiVite,
    positionClass: "left-28 md:left-60 bottom-48",
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
    positionClass: "right-36 md:right-64 bottom-28",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    positionClass: "left-12 md:left-28 bottom-20",
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
    name: "Supabase",
    Icon: SiSupabase,
    positionClass: "left-40 md:left-80 top-12",
  },
  {
    name: "Git",
    Icon: SiGit,
    positionClass: "left-32 md:left-64 top-56",
  },
  {
    name: "GitHub",
    Icon: SiGithub,
    positionClass: "left-20 md:left-44 top-64",
  },
  {
    name: "Postman",
    Icon: SiPostman,
    positionClass: "right-20 md:right-40 top-60",
  },
  {
    name: "pnpm",
    Icon: SiPnpm,
    positionClass: "right-48 md:right-72 top-52",
  },
  {
    name: "Vercel",
    Icon: SiVercel,
    positionClass: "left-8 md:left-16 top-48",
  },
  {
    name: "Render",
    Icon: SiRender,
    positionClass: "right-44 md:right-68 top-28",
  },
  {
    name: "Visual Studio Code",
    Icon: DiVisualstudio,
    positionClass: "left-36 md:left-72 bottom-24",
  },
  {
    name: "Apache NetBeans",
    Icon: SiApachenetbeanside,
    positionClass: "right-28 md:right-52 bottom-52",
  },
];
