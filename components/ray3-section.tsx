"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

export default function Ray3Section() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const textX = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={containerRef}
      id="aboutme"
      className="relative pb-24 pt-0 sm:pb-36 sm:pt-28 bg-dark-bg text-dark-fg overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-0 sm:px-6">
        <div className="grid sm:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              style={{ x: imageX }}
            >
              <motion.div
                className="relative w-full max-w-xl aspect-video h-[500] lg:w-auto lg:h-[700] overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Image
                  src="/images/silueta3.png"
                  alt="Comparación"
                  className="w-full h-full object-cover object-top"
                  width={500}
                  height={650}
                  priority
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 60%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 60%, transparent 100%)",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:block px-6 sm:px-0"
            style={{ x: textX }}
          >
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              className="text-6xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white/90 mb-8 uppercase"
            >
              acerca de mí
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <p className="text-sm/10 text-dark-muted leading-relaxed mb-8 max-w-md text-balance">
                Soy un{" "}
                <span className="text-dark-fg font-semibold">
                  desarrollador full stack
                </span>{" "}
                apasionado por crear experiencias digitales que resuelven
                problemas reales. Actualmente cursando
                <span className="text-dark-fg font-semibold">
                  {" "}
                  Ingeniería en Informática
                </span>
                , me especializo en construir soluciones escalables y centradas
                en el usuario, desde interfaces intuitivas hasta sistemas
                backend robustos. Mi trayectoria incluye proyectos innovadores
                con inteligencia artificial y sistemas de gestión desarrollados
                en equipos multidisciplinarios. Lo que más me motiva es
                transformar ideas en productos de alto impacto, aplicando buenas
                prácticas y aprendiendo continuamente para llevar cada proyecto
                al siguiente nivel.
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="px-3 block lg:hidden">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white/90 mb-8 uppercase text-left"
            >
              acerca de mí
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <p className="text-sm/10 text-dark-muted leading-relaxed mb-8 max-w-xs text-balance ">
                Soy un{" "}
                <span className="text-dark-fg font-semibold">
                  desarrollador full stack
                </span>{" "}
                apasionado por crear experiencias digitales que resuelven
                problemas reales. Actualmente cursando
                <span className="text-dark-fg font-semibold">
                  {" "}
                  Ingeniería en Informática
                </span>
                , me especializo en construir soluciones escalables y centradas
                en el usuario, desde interfaces intuitivas hasta sistemas
                backend robustos. Mi trayectoria incluye proyectos innovadores
                con inteligencia artificial y sistemas de gestión desarrollados
                en equipos multidisciplinarios. Lo que más me motiva es
                transformar ideas en productos de alto impacto, aplicando buenas
                prácticas y aprendiendo continuamente para llevar cada proyecto
                al siguiente nivel.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
