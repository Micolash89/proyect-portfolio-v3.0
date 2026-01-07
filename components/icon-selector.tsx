"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const icons = [
  { id: "flower", emoji: "🌸", color: "bg-luma-blue", label: "Crear" },
  { id: "wing", emoji: "🪶", color: "bg-white", label: "Animar" },
  { id: "cloud", emoji: "☁️", color: "bg-luma-green", label: "Generar" },
  { id: "wolf", emoji: "🐺", color: "bg-luma-red", label: "Transformar" },
  { id: "lantern", emoji: "🏮", color: "bg-luma-orange", label: "Iluminar" },
]

export default function IconSelector() {
  const [selected, setSelected] = useState("cloud")

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="flex items-center gap-2 p-2 rounded-full bg-secondary/50">
            {icons.map((icon) => (
              <motion.button
                key={icon.id}
                onClick={() => setSelected(icon.id)}
                className={cn(
                  "relative flex items-center justify-center rounded-full transition-all duration-300",
                  selected === icon.id ? `${icon.color} w-16 h-12 shadow-lg` : "w-12 h-12 bg-card hover:bg-card/80",
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={icon.label}
              >
                <span className="text-xl">{icon.emoji}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
