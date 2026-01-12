"use client";

import { motion, useInView } from "framer-motion";
// import LumaLogo from "@/components/luma-logo"
import {  Mail, Linkedin, Github } from "lucide-react";
import { useRef } from "react";

export default function Footer() {

  const containerRef = useRef<HTMLElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:tu@email.com",
      value: "tu@email.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/tunombre",
      value: "/in/tunombre",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/tunombre",
      value: "@tunombre",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 bg-zinc-900 "
      ref={containerRef} 
      id="footer"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* <LumaLogo className="h-10" /> */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Espindola Javier. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.length > 0 &&
              socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <link.icon size={16} />
                  <span>{link.value}</span>
                </motion.a>
              ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
