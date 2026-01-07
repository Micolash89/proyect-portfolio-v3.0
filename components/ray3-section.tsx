"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const ray3Features = [
  { title: "Seguimiento de Instrucciones", description: "Adherente" },
  { title: "Alta Fidelidad", description: "Matices y Detalles" },
  { title: "Física Avanzada", description: "Y Simulaciones" },
  { title: "Interactividad de Luz", description: "Y Reflejos" },
]

export default function Ray3Section() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <section ref={containerRef} id="ray3" className="relative py-24 md:py-32 bg-dark-bg text-dark-fg overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Feature pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur">
                  <img src="/toy-car-miniature-yellow.jpg" alt="Miniatura" className="w-16 h-12 object-cover rounded-lg" />
                  <span className="text-sm">{ray3Features[0].title}</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur">
                  <span className="text-sm">{ray3Features[1].title}</span>
                </div>
              </div>

              <p className="text-sm text-dark-muted leading-relaxed mb-8 max-w-md">
                <span className="text-dark-fg font-semibold">Ray3</span> es un modelo de video inteligente diseñado para
                contar historias. Ray3 es capaz de pensar y razonar en visuales y ofrece física y consistencia de última
                generación. En una primicia mundial, Ray3 genera videos en color de Alto Rango Dinámico de 16 bits,
                llevando video generativo a pipelines de estudio profesional.
              </p>

              {/* Comparison slider */}
              <motion.div
                className="relative w-full max-w-lg aspect-video rounded-2xl overflow-hidden cursor-ew-resize"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img src="/spaceship-cockpit-sci-fi-red-dramatic-lighting.jpg" alt="Comparación" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg">
                  <span className="text-xs text-gray-600">Drag ↔</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - RAY3 Title */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white/90 mb-8"
            >
              RAY3
            </motion.h2>

            {/* Feature cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <div className="relative w-48 aspect-video rounded-xl overflow-hidden">
                <img src="/martial-arts-fighters-action-cinematic.jpg" alt="Física avanzada" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                  <span className="text-xs text-white">
                    Advanced Physics
                    <br />& Simulations
                  </span>
                </div>
              </div>
              <div className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur">
                <span className="text-xs text-dark-muted">
                  Light
                  <br />
                  Interactivity
                  <br />&<br />
                  Reflections
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Big Luma text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24"
        >
          <h3 className="text-7xl md:text-9xl lg:text-[12rem] font-serif text-white/90 leading-none">Luma</h3>
        </motion.div>
      </div>
    </section>
  )
}
