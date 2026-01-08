"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
// import LumaLogo from "@/components/luma-logo"
// import LumaCube from "@/components/luma-cube"
import { Button } from "@/components/ui/button"

export default function CinematicSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      ref={containerRef}
      id="cinematic"
      className="relative min-h-screen flex items-end justify-center overflow-hidden"
      style={{ background: "linear-gradient(to bottom, oklch(0.25 0.02 140), oklch(0.12 0.01 200))" }}
    >
      {/* Background atmospheric image */}
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <img
          src="/misty-forest-atmospheric-moody-green-tones-cinemat.jpg"
          alt="Fondo atmosférico"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark-bg via-transparent to-transparent" />
      </motion.div>

      {/* Central figure */}
      <motion.div
        className="relative z-10 w-full max-w-md mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img src="/silhouette-profile-bearded-man-looking-up-dark-art.jpg" alt="Silueta perfil" className="w-full h-auto" />
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 px-6 py-6 flex items-center justify-between bg-dark-bg/80 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* <LumaLogo className="h-10" isDark />
        <LumaCube isDark className="w-10 h-10" /> */}
        <Button className="rounded-full px-6 bg-white/90 text-black hover:bg-white">Probar Ahora</Button>
      </motion.div>
    </section>
  )
}
