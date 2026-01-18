"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-zinc-900 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-900 via-zinc-900 to-zinc-800" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating accent circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-luma-green/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-luma-blue/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <h1 className="text-[120px] sm:text-[180px] md:text-[220px] font-bold leading-none tracking-tighter">
            <span className="text-zinc-400 bg-clip-text ">
              4
            </span>
            <span className="text-zinc-400">0</span>
            <span className="text-zinc-400 bg-clip-text">
              4
            </span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground mb-4"
        >
          Página no encontrada
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed"
        >
          Lo sentimos, la página que buscas no existe o ha sido movida a otra ubicación.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="group flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all duration-300"
          >
            <Home size={18} />
            <span>Volver al inicio</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 px-6 py-3 border border-border/50 text-foreground rounded-full font-medium hover:border-luma-green hover:text-luma-green transition-all duration-300"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Página anterior</span>
          </button>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 h-px w-32 mx-auto bg-linear-to-r from-transparent via-luma-green/50 to-transparent"
        />
      </div>
    </main>
  );
}
