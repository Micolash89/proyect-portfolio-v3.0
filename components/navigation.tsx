"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
// import LumaLogo from "@/components/luma-logo"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#join", label: "Únete" },
  { href: "#photon", label: "Photon" },
  { href: "#ray3", label: "Ray3" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkSection, setIsDarkSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const cinematicSection = document.getElementById("cinematic")
      const ray3Section = document.getElementById("ray3")
      if (cinematicSection && ray3Section) {
        const cinematicRect = cinematicSection.getBoundingClientRect()
        const ray3Rect = ray3Section.getBoundingClientRect()
        setIsDarkSection(
          (cinematicRect.top < 100 && cinematicRect.bottom > 100) || (ray3Rect.top < 100 && ray3Rect.bottom > 100),
        )
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "backdrop-blur-xl" : "bg-transparent",
          isDarkSection ? "text-white" : "text-foreground",
        )}
      >
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* <LumaLogo className="h-8" isDark={isDarkSection} /> */}
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <a
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors duration-300 relative group",
                    isDarkSection ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button
                className={cn(
                  "rounded-full px-6 transition-all duration-300",
                  isDarkSection
                    ? "bg-white/90 text-black hover:bg-white"
                    : "bg-foreground text-background hover:bg-foreground/90",
                )}
              >
                Probar Ahora
              </Button>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-2xl font-medium text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <Button className="rounded-full px-8 bg-foreground text-background">Probar Ahora</Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
