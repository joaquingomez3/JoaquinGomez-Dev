"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, User, Target, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: <User className="w-6 h-6" />,
    title: "Sobre Mí",
    description:
      "Soy estudiante avanzado de la Tecnicatura en Desarrollo de Software. Me considero una persona responsable, ordenada y con predisposición para el aprendizaje continuo. Me encantaría tener mi primera experiencia laboral en el mundo IT.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Formación Académica",
    description:
      "Tecnicatura en Desarrollo de Software en la Universidad de La Punta (2021 - actualidad). Bachiller con orientación en Informática en la Escuela Secundaria Héroes de Malvinas (2016 - 2018).",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certificaciones",
    description:
      "UDEMY | .NET Backend: .NET Core, SQL Server y seguridad JWT (Oct. 2025). UDEMY | Desarrollo de API RESTful con Node.js y MySQL (Oct. 2024).",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Enfoque",
    description:
      "Me apasiona el desarrollo backend con .NET y Node.js, la creación de APIs RESTful robustas y la gestión eficiente de bases de datos. Siempre busco escribir código limpio y mantenible.",
  },
];

function HighlightCard({
  item,
  index,
}: {
  item: (typeof highlights)[number];
  index: number;
}) {
  const ref = useRef(null);
  const itemInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={itemInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl border border-border bg-surface-light/40 backdrop-blur-sm p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
        <div className="flex items-start gap-4">
          <div className="shrink-0 p-3 rounded-2xl bg-accent/10 text-accent border border-accent/20 group-hover:bg-accent/20 transition-colors duration-300">
            {item.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-text-secondary leading-relaxed text-sm">
              {item.description}
            </p>
          </div>
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6">
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
            Sobre mí
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-4">
            Conocé mi{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-accent bg-clip-text text-transparent">
              perfil
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Estudiante avanzado con sólida formación técnica y
            certificaciones que respaldan mis habilidades.
          </p>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <HighlightCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { value: "3+", label: "Proyectos académicos" },
            { value: "2", label: "Certificaciones Udemy" },
            { value: "5+", label: "Tecnologías dominadas" },
            { value: "∞", label: "Ganas de aprender" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl border border-border bg-surface-light/20"
            >
              <div className="text-3xl sm:text-4xl font-black text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
