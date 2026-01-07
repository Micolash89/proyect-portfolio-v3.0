"use client"

import { cn } from "@/lib/utils"

interface LumaLogoProps {
  className?: string
  isDark?: boolean
}

export default function LumaLogo({ className, isDark = false }: LumaLogoProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span
        className={cn(
          "text-xl font-serif italic tracking-tight leading-none",
          isDark ? "text-white" : "text-foreground",
        )}
      >
        Dream
      </span>
      <span
        className={cn(
          "text-xs font-bold tracking-[0.3em] uppercase leading-none",
          isDark ? "text-white" : "text-foreground",
        )}
      >
        MACHINE
      </span>
    </div>
  )
}
