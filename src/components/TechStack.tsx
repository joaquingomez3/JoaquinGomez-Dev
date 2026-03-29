"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Layers,
  Globe,
  Terminal,
  GitBranch,
} from "lucide-react";

interface TechCategory {
  name: string;
  icon: React.ReactNode;
  technologies: {
    name: string;
    level: "Avanzado" | "Intermedio" | "Básico";
  }[];
}

const techCategories: TechCategory[] = [
  {
    name: "Lenguajes",
    icon: <Code2 className="w-5 h-5" />,
    technologies: [
      { name: "JavaScript", level: "Avanzado" },
      { name: "Java", level: "Intermedio" },
      { name: "C# (.NET)", level: "Avanzado" },
      { name: "HTML / CSS", level: "Avanzado" },
    ],
  },
  {
    name: "Frameworks & Librerías",
    icon: <Layers className="w-5 h-5" />,
    technologies: [
      { name: "Node.js", level: "Avanzado" },
      { name: "React", level: "Intermedio" },
      { name: "Bootstrap", level: "Avanzado" },
      { name: ".NET Core", level: "Avanzado" },
    ],
  },
  {
    name: "Bases de Datos",
    icon: <Database className="w-5 h-5" />,
    technologies: [
      { name: "MySQL", level: "Avanzado" },
      { name: "SQL Server", level: "Intermedio" },
      { name: "SQL / Queries", level: "Avanzado" },
    ],
  },
  {
    name: "Backend & APIs",
    icon: <Terminal className="w-5 h-5" />,
    technologies: [
      { name: "API RESTful", level: "Avanzado" },
      { name: "Express.js", level: "Avanzado" },
      { name: "Entity Framework", level: "Intermedio" },
      { name: "JWT Auth", level: "Intermedio" },
    ],
  },
  {
    name: "Herramientas",
    icon: <GitBranch className="w-5 h-5" />,
    technologies: [
      { name: "Git", level: "Avanzado" },
      { name: "GitHub", level: "Avanzado" },
      { name: "VS Code", level: "Avanzado" },
      { name: "Postman", level: "Intermedio" },
    ],
  },
  {
    name: "Otros",
    icon: <Globe className="w-5 h-5" />,
    technologies: [
      { name: "Español", level: "Avanzado" },
      { name: "Inglés", level: "Básico" },
      { name: "Metodologías Ágiles", level: "Intermedio" },
      { name: "Clean Code", level: "Intermedio" },
    ],
  },
];

const levelColors = {
  Avanzado: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Intermedio: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  Básico: "text-blue-400 bg-blue-400/10 border-blue-400/20",
};

function TechCard({
  category,
  index,
}: {
  category: TechCategory;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl border border-border bg-surface-light/40 backdrop-blur-sm p-6 transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20 group-hover:bg-accent/20 transition-colors duration-300">
            {category.icon}
          </div>
          <h3 className="text-lg font-bold text-text-primary">{category.name}</h3>
        </div>

        {/* Tech items */}
        <div className="space-y-3">
          {category.technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-between py-2 px-3 rounded-xl bg-surface/40 border border-transparent hover:border-border-light transition-colors duration-200"
            >
              <div className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-text-muted" />
                <span className="text-sm font-medium text-text-secondary">
                  {tech.name}
                </span>
              </div>
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${levelColors[tech.level]}`}
              >
                {tech.level}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-accent mb-4 block">
            Habilidades Técnicas
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-4">
            Mi{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-accent bg-clip-text text-transparent">
              stack
            </span>{" "}
            tecnológico
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Las herramientas y tecnologías que domino para construir
            soluciones de software robustas y funcionales.
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <TechCard key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          {(["Avanzado", "Intermedio", "Básico"] as const).map((level) => (
            <div key={level} className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  level === "Avanzado"
                    ? "bg-emerald-400"
                    : level === "Intermedio"
                    ? "bg-amber-400"
                    : "bg-blue-400"
                }`}
              />
              <span className="text-xs text-text-muted">{level}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
