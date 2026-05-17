"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { colorWords, technologies } from "@/lib/constants";

const mobileCarouselRows = [
  technologies.slice(0, 7),
  technologies.slice(7, 14),
  technologies.slice(14, 21),
  technologies.slice(21),
]

export default function AnimatedSilhouetteHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"center" | "bottom">("center");
  const [isMobileCarouselActive, setIsMobileCarouselActive] = useState(false);
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
    const timer = setTimeout(() => {
      setIsMobileCarouselActive(true);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % colorWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0 pointer-events-none md:hidden">
          <div className="absolute inset-0 flex flex-col justify-center gap-3 px-2">
            {mobileCarouselRows.map((row, rowIndex) => {
              const moveRight = rowIndex % 2 === 0
              return (
                <div key={`row-${rowIndex}`} className="overflow-hidden">
                  <motion.div
                    className="flex w-max gap-2"
                    initial={false}
                    animate={
                      isMobileCarouselActive
                        ? {
                            x: moveRight ? ["-50%", "0%"] : ["0%", "-50%"],
                            opacity: 0.38,
                          }
                        : { x: "0%", opacity: 0 }
                    }
                    transition={
                      isMobileCarouselActive
                        ? {
                            x: {
                              duration: 18 + rowIndex * 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            },
                            opacity: { duration: 0.45 },
                          }
                        : { opacity: { duration: 0.25 } }
                    }
                  >
                    {[...row, ...row].map((tech, index) => (
                      <div
                        key={`${tech.name}-${rowIndex}-${index}`}
                        className="flex items-center gap-2 rounded-xl border border-border/45 bg-card/55 px-3 py-2 backdrop-blur-sm"
                      >
                        <tech.Icon size={16} className="text-muted-foreground" />
                        <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/90">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="hidden md:block">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className={`absolute size-15 rounded-2xl overflow-hidden shadow-2xl ${tech.positionClass}`}
              style={{ y }}
              initial={{ opacity: 0, x: 0, scale: 0.8 }}
              animate={{
                opacity: phase === "bottom" ? 1 : 0,
                x: phase === "bottom" ? 0 : 40,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <div className="flex items-center justify-center w-full h-full bg-card">
                <tech.Icon size={40} className="text-muted-foreground" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute z-10 hidden md:block"
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
            src="/images/silueta3.png"
            alt="Silueta de perfil"
            width={500}
            height={650}
            className={`w-72 md:w-96 lg:w-[450px] h-auto object-contain  ${
              phase === "bottom" ? "brightness-75" : ""
            }`}
            priority
            style={{
              maskImage:
                "linear-gradient(to bottom, black 60%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 60%, transparent 100%)",
            }}
          />
        </motion.div>
        <motion.div
          className="absolute z-10 block md:hidden"
          initial={{
            top: "50%",
            left: "50%",
            x: "-40%",
            y: "-50%",
            scale: 1.9,
          }}
          animate={{
            top: phase === "center" ? "50%" : "75%",
            y: phase === "center" ? "-50%" : "-40%",
            scale: phase === "center" ? 1.9 : 1.2,
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
            src="/images/silueta3.png"
            alt="Silueta de perfil"
            width={500}
            height={650}
            className={`w-72 md:w-96 lg:w-[450px] h-auto object-contain  ${
              phase === "bottom" ? "brightness-75" : ""
            }`}
            priority
            style={{
              maskImage:
                "linear-gradient(to bottom, black 60%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 60%, transparent 100%)",
            }}
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
            <span>

            Soy{" "}
            </span>
            <span className="relative inline-block w-[200px] md:w-[300px] text-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 -top-8 md:-top-11.5 xl:-top-13 bg-linear-to-r from-luma-green via-luma-blue to-luma-orange bg-clip-text italic text-zinc-400 sm:text-zinc-200 "
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
