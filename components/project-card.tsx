"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  index: number
}

export default function ProjectCard({ title, description, image, tags, liveUrl, githubUrl, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    setRotateX(-mouseY / 20)
    setRotateY(mouseX / 20)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-border transition-colors duration-300"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />

          {/* Hover overlay with links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-background/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-foreground text-background rounded-full hover:scale-110 transition-transform"
                aria-label="Ver proyecto"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-foreground text-background rounded-full hover:scale-110 transition-transform"
                aria-label="Ver código"
              >
                <Github size={20} />
              </a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 bg-secondary text-muted-foreground rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
