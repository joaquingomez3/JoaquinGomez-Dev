"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, FileText, Sparkles, MapPin } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-accent/15 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Estudiante avanzado — Tec. en Desarrollo de Software
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-text-secondary font-medium tracking-wide mb-2"
        >
          Hola, soy
        </motion.p>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6"
        >
          <span className="bg-gradient-to-r from-accent via-accent-light to-cyan-accent bg-clip-text text-transparent animate-gradient">
            Joaquín Gómez
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-bold text-text-primary mb-6"
        >
          Fullstack Developer
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-text-secondary leading-relaxed mb-4"
        >
          Apasionado por crear software de calidad.
          Especializado en{" "}
          <span className="text-accent font-semibold">.NET / C#</span>,{" "}
          <span className="text-accent font-semibold">React</span>,{" "}
          <span className="text-accent font-semibold">Node.js</span> y{" "}
          <span className="text-accent font-semibold">MySQL</span>.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 text-text-muted mb-10"
        >
          <MapPin className="w-4 h-4" />
          <span className="text-sm">San Luis, La Punta — Argentina</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-dark text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-2">
              Mis Proyectos
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="/CV-GomezJoaquin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-2xl border border-border-light bg-surface-light/50 backdrop-blur-sm text-text-primary font-semibold text-lg hover:border-accent/40 hover:bg-surface-lighter/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <FileText className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
            Ver CV
          </a>

          <a
            href="https://github.com/joaquingomez3"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-2xl border border-border-light bg-surface-light/50 backdrop-blur-sm text-text-primary font-semibold text-lg hover:border-accent/40 hover:bg-surface-lighter/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Github className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
            GitHub
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-text-muted" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
