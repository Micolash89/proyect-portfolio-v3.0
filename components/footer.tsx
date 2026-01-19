"use client";

import { socialLinks } from "@/lib/constants";
import { Temporal } from "@js-temporal/polyfill";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div className=" bg-zinc-900">
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        ref={containerRef}
        className="py-12 "
        id="footer"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 * 0.1 }}
              className="text-sm text-muted-foreground"
            >
              © {Temporal.Now.plainDateISO().year} Espindola Javier. Todos los
              derechos reservados.
            </motion.p>
            <div className="flex items-center gap-6 md:flex-row flex-col">
              {socialLinks.length > 0 &&
                socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
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
    </div>
  );
}
