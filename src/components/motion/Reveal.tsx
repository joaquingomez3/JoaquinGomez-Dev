"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Fade-up al entrar en viewport. Equivalente en framer-motion al
 * `data-reveal` de GSAP: mismo desplazamiento (28px) y misma curva.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Reveal de línea con máscara: el contenedor recorta y la línea sube desde
 * abajo.
 *
 * OJO: el observer va en el contenedor que recorta, NO en la línea. La línea
 * arranca desplazada 110% y queda completamente fuera del área visible del
 * `overflow: hidden`; un IntersectionObserver sobre ella nunca dispararía
 * (la intersección se calcula ya recortada por el ancestro), y el texto
 * quedaría invisible para siempre.
 *
 * El padding/margen negativo evita que se corten los descendentes (g, y, p)
 * y los acentos.
 */
export function LineMask({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  if (reduce) {
    return <span className={`block ${className ?? ""}`}>{children}</span>;
  }

  return (
    <span
      ref={ref}
      className="block overflow-hidden"
      style={{ padding: "0.06em 0", margin: "-0.06em 0 0" }}
    >
      <motion.span
        className={`block ${className ?? ""}`}
        initial={{ y: "110%" }}
        animate={inView ? { y: "0%" } : { y: "110%" }}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
