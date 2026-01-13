"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  useInView,
} from "framer-motion";
import Image from "next/image";
import { technologies } from "./technologies";
//palabras que referentes a guts de berserk
const colorWords = [
  "programador",
  "estudiante",
  "código",
  "diseño",
  "ideas",
  "sueños",
  "innovación",
  "futuro",
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
];

export default function AnimatedSilhouetteHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [phase, setPhase] = useState<"center" | "bottom">("center");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const { scrollY } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const smoothScrollY = useSpring(scrollY, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const scrollOpacity = useTransform(smoothScrollY, [0, 300, 600], [1, 0.5, 0]);
  const scrollTranslateY = useTransform(smoothScrollY, [0, 600], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("bottom");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % colorWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
        {/* <motion.div
          style={{ x }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {technologies.map((tech: Technology, index: number) => (
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
              className="group relative p-8 bg-card rounded-2xl border border-border/50 hover:border-border transition-all duration-300"
              style={{ perspective: 1000 }}
            >
              <div className="flex flex-col items-center gap-4">
                <tech.Icon
                  size={48}
                  className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`absolute size-15 rounded-2xl overflow-hidden shadow-2xl ${tech.positionClass}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, scale: 0.8 }}
            animate={
              isInView
                ? { opacity: phase === "bottom" ? 1 : 0, x: 0, scale: 1 }
                : {}
            }
            transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
            style={{ y }} // un único MotionValue para todos
          >
            <div className="flex items-center justify-center w-full h-full bg-card">
              <tech.Icon size={40} className="text-muted-foreground" />
            </div>
          </motion.div>
        ))}

        {/* <motion.div
          className="absolute left-4 md:left-12 top-1/4 w-48 md:w-64 aspect-3/4 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -100, rotate: -5 }}
          style={{ y }}
          animate={
            isInView
              ? {
                  opacity: phase === "bottom" ? 1 : 0,
                  x: phase === "bottom" ? 0 : 50,
                  rotate: phase === "bottom" ? -5 : -5,
                }
              : {}
          }
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/images/batman.jpg"
            alt="Persona en naturaleza"
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </motion.div> */}

        <motion.div
          className="absolute right-4 md:right-12 top-1/3 w-56 md:w-72 aspect-video rounded-2xl overflow-hidden shadow-2xl "
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
          initial={{ opacity: 0, x: 100, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          // animate={{
          //   opacity: phase === "bottom" ? 1 : 0,
          //   y: phase === "bottom" ? 0 : 40,
          //   rotate: phase === "bottom" ? 3 : 3,
          // }}
          transition={{ duration: 2, delay: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/aurora-borealis-landscape-cinematic.jpg"
            alt="Aurora boreal"
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </motion.div>

        <motion.div
          className="absolute left-8 md:left-24 bottom-1/4 w-40 md:w-52 rounded-xl overflow-hidden shadow-xl bg-card"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: phase === "bottom" ? 1 : 0,
            y: phase === "bottom" ? 0 : 40,
          }}
          transition={{ duration: 2, delay: 0.9, ease: "easeOut" }}
        >
          <Image
            src="/images/silueta.pn"
            alt="Músicos en desierto"
            className="w-full aspect-video object-cover"
            width={100}
            height={100}
          />
        </motion.div>

        <motion.div
          className="absolute z-10"
          initial={{
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            scale: 1.2,
          }}
          animate={{
            top: phase === "center" ? "50%" : "75%",
            y: phase === "center" ? "-50%" : "-50%",
            scale: phase === "center" ? 1.2 : 0.7,
          }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            opacity: phase === "bottom" ? scrollOpacity : 1,
            translateY: phase === "bottom" ? scrollTranslateY : 0,
          }}
        >
          <Image
            src="/images/silueta.png"
            alt="Silueta de perfil"
            width={500}
            height={650}
            className="w-72 md:w-96 lg:w-[450px] h-auto object-contain"
            priority
          />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center "
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: phase === "bottom" ? 1 : 0,
              y: phase === "bottom" ? 0 : 40,
            }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed"
          >
            Full Stack Developer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: phase === "bottom" ? 1 : 0,
              y: phase === "bottom" ? 0 : 40,
            }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-sans font-medium tracking-tight text-foreground mb-8 "
          >
            Espindola Javier
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: phase === "bottom" ? 1 : 0,
              y: phase === "bottom" ? 0 : 40,
            }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-foreground mb-8 w-full md:ml-10 text-center"
          >
            Soy{" "}
            <span className="relative inline-block w-[200px] md:w-[300px] text-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 -top-10 lg:-top-13 bg-linear-to-r from-luma-green via-luma-blue to-luma-orange bg-clip-text italic text-zinc-400"
                >
                  {colorWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h2>
        </motion.div>
      </section>
    </div>
  );
}
