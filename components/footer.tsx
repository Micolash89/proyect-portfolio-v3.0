"use client"

import { motion } from "framer-motion"
// import LumaLogo from "@/components/luma-logo"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 bg-background border-t border-border/50"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* <LumaLogo className="h-10" /> */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dream Machine. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Términos
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Soporte
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
