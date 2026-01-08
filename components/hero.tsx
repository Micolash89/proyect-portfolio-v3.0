"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"

const colorWords = ["real", "posible", "mágico", "tuyo", "único"]

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % colorWords.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Floating Images - Left Side */}
      <motion.div
        className="absolute left-4 md:left-12 top-1/4 w-48 md:w-64 aspect-3/4 rounded-2xl overflow-hidden shadow-2xl"
        style={{ y }}
        initial={{ opacity: 0, x: -100, rotate: -5 }}
        animate={{ opacity: 1, x: 0, rotate: -5 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image src="/person-doing-yoga-in-nature-golden-hour.jpg" alt="Persona en naturaleza" className="w-full h-full object-cover"  width={100} height={100}/>
      </motion.div>

      {/* Floating Images - Right Side */}
      <motion.div
        className="absolute right-4 md:right-12 top-1/3 w-56 md:w-72 aspect-video rounded-2xl overflow-hidden shadow-2xl "
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
        initial={{ opacity: 0, x: 100, rotate: 3 }}
        animate={{ opacity: 1, x: 0, rotate: 3 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <Image src="/aurora-borealis-landscape-cinematic.jpg" alt="Aurora boreal" className="w-full h-full object-cover"  width={100} height={100}/>
      </motion.div>

      {/* Small floating card - bottom left */}
      <motion.div
        className="absolute left-8 md:left-24 bottom-1/4 w-40 md:w-52 rounded-xl overflow-hidden shadow-xl bg-card"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <Image src="/musicians-playing-in-desert-golden-hour.jpg" alt="Músicos en desierto" className="w-full aspect-video object-cover" width={100} height={100}/>
        <div className="p-3 flex items-center gap-2">
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
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-sans font-medium tracking-tight text-foreground mb-8"
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
                className="absolute left-0 -top-22 bg-linear-to-r from-luma-green via-luma-blue to-luma-orange bg-clip-text"
              >
                {colorWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed"
        >
          Un nuevo medio fluido para crear imágenes y videos impresionantes que parecen de otro mundo. Todo lo que
          necesitas es preguntar.
        </motion.p>

        {/* Green pill CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-luma-green text-white font-medium text-sm hover:bg-luma-green/90 transition-colors shadow-lg shadow-luma-green/25">
            <span>Visuales emocionantes para tu música</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Central Silhouette Figure */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 md:w-80"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <Image src="/silhouette-profile-man-with-beard-looking-up-dark-.jpg" alt="Silueta de perfil" className="w-full h-auto" width={100} height={100}/>
      </motion.div>
    </section>
  )
}
