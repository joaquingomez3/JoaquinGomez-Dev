"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "gomezjoaquing3@gmail.com",
    href: "mailto:gomezjoaquing3@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "in/joaquingomez-dev",
    href: "https://www.linkedin.com/in/joaquingomez-dev",
  },
  {
    label: "GitHub",
    value: "github.com/joaquingomez3",
    href: "https://github.com/joaquingomez3",
  },
  {
    label: "Teléfono",
    value: "+54 9 2664 894029",
    href: "tel:+5492664894029",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-6 lg:px-8 bg-ink text-paper"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-accent">
            Contacto
          </span>
          <h2 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]">
            ¿Trabajamos
            <br />
            <span className="italic">juntos?</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-paper/70">
            Busco mi primera experiencia laboral en IT, con disponibilidad
            inmediata. Si tenés una vacante o un proyecto, escribime — respondo
            rápido.
          </p>

          <a
            href="mailto:gomezjoaquing3@gmail.com"
            className="group mt-10 inline-flex items-center gap-3 bg-accent text-paper text-base font-semibold pl-7 pr-6 py-4 rounded-full hover:bg-paper hover:text-ink transition-colors duration-300"
          >
            Enviame un email
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 border-t border-paper/15"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between gap-6 border-b border-paper/15 py-6 transition-colors hover:text-accent"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-paper/50 group-hover:text-accent/70 transition-colors">
                {link.label}
              </span>
              <span className="flex items-center gap-3 font-display text-xl sm:text-3xl font-medium text-paper group-hover:text-accent transition-colors">
                {link.value}
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
