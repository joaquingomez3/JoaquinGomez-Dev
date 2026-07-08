"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Github, Linkedin, FileText } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "+20", label: "endpoints REST" },
  { value: "+650", label: "horas / ChallengeFit" },
  { value: "4", label: "proyectos full stack" },
  { value: "3", label: "certificaciones" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8"
        >
          <span className="kicker">Full Stack Junior — San Luis, AR</span>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-ink-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            Disponible para trabajar
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.05 }}
          className="font-display font-semibold text-ink leading-[0.92] tracking-tight text-[clamp(3rem,11vw,8.5rem)]"
        >
          Joaquín
          <br />
          Gómez<span className="text-accent">.</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="mt-8 max-w-2xl text-xl sm:text-2xl text-ink-2 leading-snug"
        >
          Desarrollador Full Stack enfocado en{" "}
          <span className="font-display italic text-ink">APIs backend</span> con
          Node.js y .NET, y apps móviles híbridas con{" "}
          <span className="font-display italic text-ink">Flutter</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.22 }}
          className="mt-5 max-w-xl text-base text-ink-3 leading-relaxed"
        >
          Próximo a graduarme de la Tecnicatura Universitaria en Desarrollo de
          Software (UdeLaPunta). Diseño soluciones de punta a punta y aprendo
          rápido lo que un proyecto real necesita.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-ink text-paper text-sm font-semibold pl-6 pr-5 py-3.5 rounded-full hover:bg-accent transition-colors duration-300"
          >
            Ver proyectos
            <ArrowDownRight className="w-4 h-4 group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="/CV_Joaquin_Gomez.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-line-strong text-ink text-sm font-semibold pl-5 pr-5 py-3.5 rounded-full hover:border-ink transition-colors duration-300"
          >
            <FileText className="w-4 h-4 text-ink-3 group-hover:text-accent transition-colors" />
            Descargar CV
          </a>
          <a
            href="https://github.com/joaquingomez3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-line-strong text-ink hover:border-ink hover:text-accent transition-colors"
          >
            <Github className="w-[18px] h-[18px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/joaquingomez-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-line-strong text-ink hover:border-ink hover:text-accent transition-colors"
          >
            <Linkedin className="w-[18px] h-[18px]" />
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 border-t border-line"
        >
          {stats.map((s) => (
            <div key={s.label} className="py-5 pr-4 border-line">
              <dt className="font-display text-4xl font-semibold text-ink">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs text-ink-3 uppercase tracking-wider">
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Corner scroll hint */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="hidden lg:flex absolute right-8 bottom-10 items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-3 hover:text-accent transition-colors"
      >
        Scroll
        <ArrowUpRight className="w-3.5 h-3.5 rotate-90" />
      </motion.a>
    </section>
  );
}
