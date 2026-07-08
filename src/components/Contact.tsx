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
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-32 px-6 lg:px-8 bg-ink text-paper"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-accent">
            Contacto
          </span>
          <h2 className="mt-5 font-display text-[clamp(2.75rem,13vw,7rem)] font-semibold tracking-tight leading-[0.95]">
            ¿Trabajamos
            <br />
            <span className="italic">juntos?</span>
          </h2>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-paper/70 leading-relaxed">
            Busco mi primera experiencia laboral en IT, con disponibilidad
            inmediata. Si tenés una vacante o un proyecto, escribime — respondo
            rápido.
          </p>

          <a
            href="mailto:gomezjoaquing3@gmail.com"
            className="group mt-8 inline-flex items-center gap-3 bg-accent text-paper text-sm sm:text-base font-semibold pl-6 pr-5 py-3.5 sm:py-4 rounded-full hover:bg-paper hover:text-ink transition-colors duration-300"
          >
            Enviame un email
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 sm:mt-20 border-t border-paper/15"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group block border-b border-paper/15 py-5 sm:py-6 transition-colors"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span className="font-mono text-[0.7rem] uppercase tracking-widest text-paper/50 group-hover:text-accent transition-colors">
                  {link.label}
                </span>
                <span className="flex items-center gap-2 min-w-0 font-display text-xl sm:text-2xl lg:text-3xl font-medium text-paper group-hover:text-accent transition-colors">
                  <span className="truncate">{link.value}</span>
                  <ArrowUpRight className="w-5 h-5 shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
