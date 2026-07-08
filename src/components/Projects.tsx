"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github, Lock } from "lucide-react";

interface Repo {
  label: string;
  href: string;
}

interface Project {
  index: string;
  title: string;
  role: string;
  year: string;
  description: string;
  metrics: string[];
  tech: string[];
  repos?: Repo[];
  confidential?: boolean;
}

// NOTA: reemplazá los "href" de abajo por las URLs reales de cada repo.
const projects: Project[] = [
  {
    index: "01",
    title: "Aplicación híbrida para cliente real",
    role: "Práctica Profesional Supervisada",
    year: "2026 — En curso",
    description:
      "App móvil híbrida Android/iOS con panel de administración web para un cliente del sector de servicios, desarrollada en equipo de 2 bajo acuerdo de confidencialidad. Incorporé Flutter y Dart de forma autodidacta para cubrir un requerimiento real no incluido en el plan de estudios.",
    metrics: ["Android + iOS", "Panel web admin", "Equipo de 2"],
    tech: ["Flutter", "Dart", "Web Admin", "Git/GitHub"],
    confidential: true,
  },
  {
    index: "02",
    title: "ChallengeFit",
    role: "Proyecto personal · App de gestión deportiva",
    year: "2025",
    description:
      "Plataforma de matching entre entrenadores y alumnos. Diseñé e integré individualmente una API REST de más de 20 endpoints consumida desde una app Android con Retrofit, con login por 2 roles, módulo de vinculación con seguimiento de progreso y CRUD completos de rutinas y desafíos. Resolví de forma autónoma un bug de cámara en Android 13 vía debugging asistido por IA.",
    metrics: ["+20 endpoints", "+650 hs", "10 pantallas", "10-11 tablas"],
    tech: [
      ".NET / C#",
      "Android (Java)",
      "Retrofit",
      "MySQL",
      "JWT",
      "REST API",
    ],
    repos: [
      {
        label: "API",
        href: "https://github.com/joaquingomez3/ApiChallengeFit.git",
      },
      {
        label: "App Android",
        href: "https://github.com/joaquingomez3/ChallengeFit.git",
      },
    ],
  },
  {
    index: "03",
    title: "Sistema de turnos médicos",
    role: "Proyecto académico · Gestión de consultorios",
    year: "2024",
    description:
      "Sistema web de gestión de turnos con discriminación de 3 roles (secretaria, paciente y administrador). Implementé los CRUD de pacientes, doctores, obras sociales y días feriados, integrando FullCalendar y DataTables, cubriendo todo el flujo desde la solicitud del paciente hasta la confirmación.",
    metrics: ["7 tablas", "3 roles", "+380 hs", "8-9 pantallas"],
    tech: ["Node.js", "Express", "MySQL", "Bootstrap", "FullCalendar"],
    repos: [
      {
        label: "Repositorio",
        href: "https://github.com/joaquingomez3/agenda-consultorios.git",
      },
    ],
  },
  {
    index: "04",
    title: "Gestión inmobiliaria web + mobile",
    role: "Proyecto académico · Equipo de 2",
    year: "2024",
    description:
      "Plataforma de gestión inmobiliaria con 3 roles de usuario. Lideré íntegramente la app Android (6 pantallas: login, perfil, propiedades, contratos, inquilinos y carga de imágenes) y participé en partes iguales del desarrollo web en .NET, incluyendo los CRUD de inmuebles, propietarios e inquilinos y el cálculo de pagos mensuales.",
    metrics: ["Web + Mobile", "3 roles", "6-7 tablas", "Cálculo de pagos"],
    tech: [".NET", "C#", "MySQL", "Bootstrap", "Android Studio"],
    repos: [
      {
        label: "Web (.NET)",
        href: "https://github.com/joaquingomez3/BienesRaices-JP.git",
      },
      {
        label: "App Android",
        href: "https://github.com/joaquingomez3/InmobiliariaApi.git",
      },
      {
        label: "API",
        href: "https://github.com/joaquingomez3/ApiBienesRaices.git",
      },
    ],
  },
];

function Row({ project, i }: { project: Project; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group border-t border-line py-8 sm:py-10 transition-colors duration-300 hover:bg-paper-2 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
        {/* Index + year */}
        <div className="md:col-span-2 flex md:flex-col items-center md:items-start justify-between gap-2">
          <span className="font-mono text-sm text-accent">{project.index}</span>
          <span className="font-mono text-xs text-ink-3">{project.year}</span>
        </div>

        {/* Main */}
        <div className="md:col-span-7">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink group-hover:text-accent transition-colors flex items-center gap-3">
            {project.title}
            {project.confidential && (
              <Lock className="w-4 h-4 text-ink-3 shrink-0" />
            )}
          </h3>
          <p className="mt-1 text-sm text-ink-3">{project.role}</p>
          <p className="mt-4 text-[0.95rem] text-ink-2 leading-relaxed max-w-2xl">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.metrics.map((m) => (
              <span
                key={m}
                className="font-mono text-xs text-ink bg-accent-soft px-2.5 py-1 rounded"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Tech + repo links */}
        <div className="md:col-span-3 flex flex-col md:items-end gap-4">
          <div className="flex flex-wrap md:justify-end gap-x-3 gap-y-1">
            {project.tech.map((t) => (
              <span key={t} className="text-xs text-ink-3">
                {t}
              </span>
            ))}
          </div>

          {project.confidential ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-3">
              <Lock className="w-3.5 h-3.5" />
              Confidencial
            </span>
          ) : (
            <div className="flex flex-wrap md:justify-end gap-2">
              {project.repos?.map((repo) => (
                <a
                  key={repo.label}
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink border border-line-strong rounded-full px-3 py-1.5 hover:border-ink hover:text-accent transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  {repo.label}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-6 mb-8"
        >
          <div>
            <span className="kicker">Selección · 2024—2026</span>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl font-semibold text-ink tracking-tight">
              Proyectos
            </h2>
          </div>
          <p className="hidden sm:block text-sm text-ink-3 max-w-xs text-right">
            Trabajo académico, personal y profesional. Del backend a la app
            móvil.
          </p>
        </motion.div>

        <div className="border-b border-line">
          {projects.map((project, i) => (
            <Row key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
