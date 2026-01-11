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

const colorWords = ["real", "posible", "mágico", "tuyo", "único"];

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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
        {/* Animated Silhouette Image */}

        {/* Floating Images - Left Side */}
        
          <motion.div
            className="absolute left-4 md:left-12 top-1/4 w-48 md:w-64 aspect-3/4 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            style={{ y}}
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
          </motion.div>

          {/* Floating Images - Right Side */}
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

          {/* Small floating card - bottom left */}
          <motion.div
            className="absolute left-8 md:left-24 bottom-1/4 w-40 md:w-52 rounded-xl overflow-hidden shadow-xl bg-card"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
            initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: 1, y: 0 }}
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
            {/* <div className="p-3 flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Try click</span>
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path
                d="M3 9L9 3M9 3H4M9 3V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div> */}
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

        {/* Content that appears after silhouette moves */}
        {/* <motion.div
          className="relative z-20 text-center px-6 max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: phase === "bottom" ? 1 : 0,
            y: phase === "bottom" ? 0 : 40,
          }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6">
            New <span className="italic text-zinc-400">freedoms</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto">
            Un nuevo medio fluido para crear imágenes y videos impresionantes.
          </p>
        </motion.div> */}

        <motion.div
          style={{ opacity }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center "
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: phase === "bottom" ? 1 : 0,
              y: phase === "bottom" ? 0 : 40,
            }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-sans font-medium tracking-tight text-foreground mb-8 "
          >
            Hazlo{" "}
            <span className="relative inline-block w-[200px] md:w-[300px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 -top-10 lg:-top-22 bg-linear-to-r from-luma-green via-luma-blue to-luma-orange bg-clip-text italic text-zinc-400"
                >
                  {colorWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: phase === "bottom" ? 1 : 0,
              y: phase === "bottom" ? 0 : 40,
            }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed"
          >
            Un nuevo medio fluido para crear imágenes y videos impresionantes
            que parecen de otro mundo. Todo lo que necesitas es preguntar.
          </motion.p>

          {/* Green pill CTA */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-luma-green text-white font-medium text-sm hover:bg-luma-green/90 transition-colors shadow-lg shadow-luma-green/25">
              <span>Visuales emocionantes para tu música</span>
            </button>
          </motion.div> */}
        </motion.div>

        {/* Decorative text right side */}
        {/* <motion.div
          className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 text-right z-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: phase === "bottom" ? 1 : 0,
            x: phase === "bottom" ? 0 : 50,
          }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          <span className="text-4xl md:text-6xl font-light text-zinc-600">
            of
          </span>
          <p className="text-3xl md:text-5xl italic text-zinc-700">
            imagination
          </p>
        </motion.div> */}
      </section>

      {/* Second section - content to scroll */}
      <section className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">
            Continúa explorando
          </h2>
          <p className="text-zinc-400">
            Haz scroll para ver cómo la silueta desaparece hacia el infinito
          </p>
        </div>
      </section>
    </div>
  );
}
