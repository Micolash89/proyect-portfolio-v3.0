"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LumaCubeProps {
  className?: string
  isDark?: boolean
}

export default function LumaCube({ className, isDark = false }: LumaCubeProps) {
  return (
    <motion.div
      className={cn("relative w-8 h-8", className)}
      animate={{ rotateY: [0, 360] }}
      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* 3D Cube SVG representation */}
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path
          d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
          className={isDark ? "fill-white/20 stroke-white" : "fill-foreground/10 stroke-foreground"}
          strokeWidth="1.5"
        />
        <path
          d="M16 2L16 16M16 16L4 9M16 16L28 9"
          className={isDark ? "stroke-white/50" : "stroke-foreground/50"}
          strokeWidth="1"
        />
        <path d="M16 16V30" className={isDark ? "stroke-white/30" : "stroke-foreground/30"} strokeWidth="1" />
      </svg>
    </motion.div>
  )
}
