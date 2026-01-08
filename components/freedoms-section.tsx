"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
// import LumaLogo from "@/components/luma-logo"
// import LumaCube from "@/components/luma-cube"
import { Button } from "@/components/ui/button"

export default function FreedomsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(to bottom, oklch(0.35 0.05 140), oklch(0.25 0.03 160))" }}
    >
      {/* Background image */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src="/lush-green-nature-soft-light-dreamy-atmosphere.jpg"
          alt="Fondo naturaleza"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-black/30" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-white mb-8">
              <span className="block text-5xl md:text-6xl lg:text-7xl font-sans font-light">New</span>
              <span className="block text-6xl md:text-7xl lg:text-8xl font-serif italic text-white/90">freedoms</span>
            </h2>

            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md mb-6">
              Idea, visualiza, crea videos y comparte tus sueños con el mundo, usando nuestros modelos de imagen y video
              más potentes con IA. Disponible ahora en <span className="underline">iOS</span> y la{" "}
              <span className="underline">Web</span>.
            </p>
          </motion.div>

          {/* Right Column - More Typography */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-right"
          >
            <span className="block text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white/90">of</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-serif italic text-white">imagination</span>
          </motion.div>
        </div>
      </div>

      {/* Central silhouette */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 md:w-96"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img src="/silhouette-profile-bearded-man-dark-artistic.jpg" alt="Silueta" className="w-full h-auto" />
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 px-6 py-6 flex items-center justify-between bg-dark-bg/80 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* <LumaLogo className="h-10" isDark />
        <LumaCube isDark className="w-10 h-10" /> */}
        <Button className="rounded-full px-6 bg-white/90 text-black hover:bg-white">Probar Ahora</Button>
      </motion.div>
    </section>
  )
}
