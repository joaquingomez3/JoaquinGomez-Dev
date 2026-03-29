"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Globe, Server, Building2 } from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  type: "Web" | "API" | "Gestión";
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  gradient: string;
  icon: React.ReactNode;
  gridClass: string;
}

const projects: Project[] = [
  {
    title: "Sistema de Agenda — Consultorios Médicos",
    description: "Gestión integral de turnos y pacientes",
    longDescription:
      "Sistema web completo para la gestión de consultorios médicos. Incluye administración de pacientes, doctores y turnos con sistema de login seguro. Interfaz intuitiva con Bootstrap para una experiencia de usuario fluida.",
    type: "Web",
    technologies: ["Node.js", "MySQL", "Bootstrap", "Express", "Login/Auth"],
    githubUrl: "https://github.com/joaquingomez3",
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    icon: <Globe className="w-5 h-5" />,
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    title: "API de Obras de Arte — Museo",
    description: "API para gestión de colecciones artísticas",
    longDescription:
      "API desarrollada con JavaScript vanilla para la gestión y consulta de obras de arte de un museo. Interfaz frontend con HTML y CSS para la visualización del catálogo de obras.",
    type: "API",
    technologies: ["JavaScript", "HTML", "CSS", "REST API"],
    githubUrl: "https://github.com/joaquingomez3",
    gradient: "from-blue-500/20 via-cyan-500/10 to-teal-500/20",
    icon: <Server className="w-5 h-5" />,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Sistema de Gestión Inmobiliaria",
    description: "Plataforma integral para inmobiliarias",
    longDescription:
      "Sistema completo para la gestión de una inmobiliaria con módulos de propietarios, inquilinos, inmuebles, contratos y pagos. Incluye sistema de autenticación con login seguro.",
    type: "Gestión",
    technologies: [".NET", "C#", "MySQL", "Bootstrap", "Login/Auth"],
    githubUrl: "https://github.com/joaquingomez3",
    gradient: "from-emerald-500/20 via-green-500/10 to-lime-500/20",
    icon: <Building2 className="w-5 h-5" />,
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] as const }}
      className={`${project.gridClass} group relative`}
    >
      <div className="relative h-full rounded-2xl border border-border bg-surface-light/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1">
        {/* Gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20">
                {project.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                {project.type}
              </span>
            </div>
            <div className="flex gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-lighter/50 text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-300"
                aria-label="Ver código en GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface-lighter/50 text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-300"
                  aria-label="Ver demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-text-muted mb-2">{project.description}</p>
          <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
            {project.longDescription}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-3 py-1.5 rounded-lg bg-surface/60 text-text-secondary border border-border group-hover:border-accent/20 group-hover:text-accent/80 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover glow line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-accent mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-4">
            Proyectos{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-accent bg-clip-text text-transparent">
              académicos
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Proyectos desarrollados durante mi formación en la Tecnicatura en
            Desarrollo de Software en la Universidad de La Punta.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
