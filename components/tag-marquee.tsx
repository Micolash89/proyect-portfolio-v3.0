"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type TagMarqueeProps = {
  tags: string[];
};

// Velocidad constante del desplazamiento (px por segundo).
const SPEED_PX_PER_SECOND = 30;

// Cuando los tags desbordan se duplican una vez: con 2 copias el loop
// queda continuo, porque la segunda siempre cubre el ancho visible.
const COPIES_WHEN_OVERFLOWING = 2;

/**
 * Fila de tecnologías para las cards de proyectos.
 * - Si los tags entran, se muestran quietos en una sola fila.
 * - Si desbordan, se convierten en un carrusel infinito.
 * - Desktop: se mueve mientras el puntero está sobre la card (ver globals.css).
 * - Táctil: se mueve solo mientras la fila está a la vista.
 */
export default function TagMarquee({ tags }: TagMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);

  const [marquee, setMarquee] = useState<{
    shift: number;
    duration: number;
  } | null>(null);
  const [inView, setInView] = useState(false);

  // 1) Activar el carrusel solo si los tags desbordan el ancho disponible.
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const firstSet = firstSetRef.current;
    if (!container || !track || !firstSet) return;

    const measure = () => {
      const overflows = firstSet.scrollWidth > container.clientWidth;
      if (!overflows) {
        setMarquee(null);
        return;
      }

      // El desplazamiento exacto de una copia = ancho del set + el gap entre copias.
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const shift = firstSet.scrollWidth + gap;
      setMarquee({ shift, duration: shift / SPEED_PX_PER_SECOND });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    observer.observe(firstSet);
    return () => observer.disconnect();
  }, [tags]);

  // 2) En pantallas táctiles, animar solo mientras la fila está a la vista.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const copies = marquee ? COPIES_WHEN_OVERFLOWING : 1;

  return (
    <div
      ref={containerRef}
      data-in-view={inView}
      className={`tag-marquee${marquee ? " tag-marquee--active" : ""}`}
      style={
        marquee
          ? ({
              "--marquee-shift": `${marquee.shift}px`,
              "--marquee-duration": `${marquee.duration}s`,
            } as CSSProperties)
          : undefined
      }
    >
      <div ref={trackRef} className="tag-marquee__track">
        {Array.from({ length: copies }).map((_, copy) => (
          <div
            key={copy}
            ref={copy === 0 ? firstSetRef : undefined}
            className="flex shrink-0 gap-2"
            aria-hidden={copy > 0}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-secondary text-muted-foreground rounded-full whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
