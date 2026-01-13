"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
// import LumaLogo from "@/components/luma-logo"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { href: "#Home", label: "inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navigation() {
  // const [isScrolled, setIsScrolled] = useState(false);
  // const [isDarkSection, setIsDarkSection] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //     const cinematicSection = document.getElementById("cinematic");
  //     const ray3Section = document.getElementById("ray3");
  //     if (cinematicSection && ray3Section) {
  //       const cinematicRect = cinematicSection.getBoundingClientRect();
  //       const ray3Rect = ray3Section.getBoundingClientRect();
  //       setIsDarkSection(
  //         (cinematicRect.top < 100 && cinematicRect.bottom > 100) ||
  //           (ray3Rect.top < 100 && ray3Rect.bottom > 100)
  //       );
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const pathname = usePathname();
  // const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const id = href.replace("#", "");
    router.push(`${pathname}#${id}`);
  };

  // useEffect(() => {
  //   // Cuando cambia la ruta/query, si hay hash en la URL hacemos scroll suave
  //   if (typeof window === "undefined") return;
  //   const hash = window.location.hash;
  //   if (!hash) return;
  //   const id = hash.replace("#", "");
  //   const el = document.getElementById(id);
  //   if (el) {
  //     el.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [pathname, searchParams]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl flex justify-between px-6 py-4"
          // isScrolled ? "backdrop-blur-xl" : "bg-transparent",
          // isDarkSection ? "text-white" : "text-foreground"
        )}
      >

           <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 +  0.1 }}
                >
                  <Link
                    href={"#Home"}
                    scroll={false}
                    prefetch={false}
                    onClick={handleClick("#Home")}
                    className="w-fit text-2xl font-medium text-foreground hover:text-accent transition-colors capitalize"
                  >
                    espindola javier
                  </Link>
                </motion.div>

        <nav className=" max-w-7xl  flex items-center justify-between">
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
                <Link
                  href={item.href}
                  scroll={false}
                  prefetch={false}
                  onClick={handleClick(item.href)}
                  className={cn(
                    "text-sm transition-colors duration-300 relative group capitalize hover:text-accent",
                  )}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
            {/* <Link
              href="#footer"
              replace={false}
              scroll={false}
              prefetch={false}
              onClick={handleClick("#footer")}
              className="text-2xl font-medium text-foreground hover:text-accent transition-colors"
            >
              Contacto
            </Link> */}
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
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    scroll={false}
                    prefetch={false}
                    onClick={handleClick(item.href)}
                    className="text-2xl font-medium text-foreground hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Button className="rounded-full px-8 bg-foreground text-background">
                Probar Ahora
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
