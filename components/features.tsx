"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const features = [
  {
    title: "Crea personajes únicos",
    description: "Personajes únicos y consistentes desde una sola imagen. Reimagínalos en escenarios infinitos.",
    image: "/artistic-portrait-man-with-clouds-in-hair-surreal.jpg",
  },
  {
    title: "Referencia visuales",
    description: "Proporciona referencias visuales para crear las cosas como las imaginas.",
    images: ["/mountain-landscape-misty-artistic.jpg", "/renaissance-portrait.png"],
  },
  {
    title: "Modifica",
    description: "Edita imágenes y videos describiendo tus cambios.",
    image: "/fish-eye-lens-landscape-dramatic.jpg",
    hasInput: true,
  },
  {
    title: "Lluvia de Ideas Creativa",
    description:
      "Nunca te quedes sin ideas. Simplemente pregunta o haz clic en lluvia de ideas para inspiración infinita.",
    image: "/akihabara-tokyo-neon-street-vibrant.jpg",
  },
]

export default function Features() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex gap-4 overflow-x-auto pb-8 -mx-6 px-6 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="shrink-0 w-72 md:w-80 p-6 rounded-3xl bg-card border border-border/30"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>

              {feature.image && !feature.images && (
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full aspect-square object-cover"
                  />
                  {feature.hasInput && (
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur shadow-lg">
                      <span className="text-xs text-gray-600 truncate">Fish eye lens shot...</span>
                      <span className="text-xs text-luma-green font-medium">Learn ↗</span>
                    </div>
                  )}
                </div>
              )}

              {feature.images && (
                <div className="flex gap-2">
                  {feature.images.map((img, i) => (
                    <div key={i} className="flex-1 rounded-xl overflow-hidden">
                      <img src={img || "/placeholder.svg"} alt="" className="w-full aspect-3/4 object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
