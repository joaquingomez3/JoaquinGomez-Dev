"use client";

import { ArrowUpRight, Github, Lock } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Reveal } from "./motion/Reveal";

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
  /** Texto del sello cuando el codigo no es publico. */
  privateNote?: string;
  /** Etiqueta de la barra superior; por defecto "Confidencial". */
  privateBadge?: string;
}

const projects: Project[] = [
  {
    index: "01",
    title: "TRESMA — Sistema de gestión y ventas",
    role: "Cliente real · Distribuidora de artículos de limpieza",
    year: "2026 — Entregado",
    description:
      "Sistema web interno de stock, ventas y precios, en uso diario por el negocio. Construí 12 módulos —dashboard con rentabilidad, productos con SKU y EAN-13 autogenerado, cambio masivo de precios con historial, combos, ventas con lector de código de barras y pago dividido, compras, gastos, fiados, auditoría de stock y roles— con las reglas de negocio siempre del lado del servidor: el precio y los descuentos los decide el backend, nunca el navegador. Es mobile-first porque se vende desde el celular, y el sistema de fiados valúa la deuda en mercadería a precio del día del pago en vez de en pesos, para protegerse de la inflación.",
    metrics: ["12 módulos", "Mobile-first", "Lector EAN-13", "Deuda en mercadería"],
    tech: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "PostgreSQL / Neon",
      "Drizzle ORM",
      "Auth.js",
      "Tailwind CSS",
      "Vitest",
      "Vercel",
    ],
    confidential: true,
    privateNote: "Sistema privado del cliente",
    privateBadge: "Privado",
  },
  {
    index: "02",
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
    index: "03",
    title: "ChallengeFit",
    role: "Proyecto personal · App de gestión deportiva",
    year: "2025",
    description:
      "Plataforma de matching entre entrenadores y alumnos. Diseñé e integré individualmente una API REST de más de 20 endpoints consumida desde una app Android con Retrofit, con login por 2 roles, módulo de vinculación con seguimiento de progreso y CRUD completos de rutinas y desafíos. Resolví de forma autónoma un bug de cámara en Android 13 vía debugging asistido por IA.",
    metrics: ["+20 endpoints", "+650 hs", "10 pantallas", "10-11 tablas"],
    tech: [".NET / C#", "Android (Java)", "Retrofit", "MySQL", "JWT", "REST API"],
    repos: [
      { label: "API", href: "https://github.com/joaquingomez3/ApiChallengeFit.git" },
      { label: "App Android", href: "https://github.com/joaquingomez3/ChallengeFit.git" },
    ],
  },
  {
    index: "04",
    title: "Sistema de turnos médicos",
    role: "Proyecto académico · Gestión de consultorios",
    year: "2024",
    description:
      "Sistema web de gestión de turnos con discriminación de 3 roles (secretaria, paciente y administrador). Implementé los CRUD de pacientes, doctores, obras sociales y días feriados, integrando FullCalendar y DataTables, cubriendo todo el flujo desde la solicitud del paciente hasta la confirmación.",
    metrics: ["7 tablas", "3 roles", "+380 hs", "8-9 pantallas"],
    tech: ["Node.js", "Express", "MySQL", "Bootstrap", "FullCalendar"],
    repos: [
      { label: "Repositorio", href: "https://github.com/joaquingomez3/agenda-consultorios.git" },
    ],
  },
  {
    index: "05",
    title: "Gestión inmobiliaria web + mobile",
    role: "Proyecto académico · Equipo de 2",
    year: "2024",
    description:
      "Plataforma de gestión inmobiliaria con 3 roles de usuario. Lideré íntegramente la app Android (6 pantallas: login, perfil, propiedades, contratos, inquilinos y carga de imágenes) y participé en partes iguales del desarrollo web en .NET, incluyendo los CRUD de inmuebles, propietarios e inquilinos y el cálculo de pagos mensuales.",
    metrics: ["Web + Mobile", "3 roles", "6-7 tablas", "Cálculo de pagos"],
    tech: [".NET", "C#", "MySQL", "Bootstrap", "Android Studio"],
    repos: [
      { label: "Web (.NET)", href: "https://github.com/joaquingomez3/BienesRaices-JP.git" },
      { label: "App Android", href: "https://github.com/joaquingomez3/InmobiliariaApi.git" },
      { label: "API", href: "https://github.com/joaquingomez3/ApiBienesRaices.git" },
    ],
  },
];

function Card({ project }: { project: Project }) {
  return (
    <article className="group flex min-w-0 flex-col border border-rule bg-bg-raised transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[6px_6px_0_0_var(--color-accent)]">
      <div className="flex items-center justify-between gap-3 border-b border-rule">
        <span className="bg-accent px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-accent-ink">
          {project.index}
        </span>
        <span className="flex items-center gap-3 px-4 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          {project.confidential && (
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3 w-3" />
              {project.privateBadge ?? "Confidencial"}
            </span>
          )}
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-display text-2xl font-bold uppercase leading-tight transition-colors group-hover:text-accent md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
          {project.role}
        </p>

        <p className="mt-5 text-sm leading-relaxed text-ink-soft">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2" role="list">
          {project.metrics.map((m) => (
            <li
              key={m}
              className="border border-rule-strong bg-bg-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink"
            >
              {m}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <div className="b-rule pb-3">
            <span className="label">STACK</span>
          </div>
          <ul
            className="t-rule flex flex-wrap gap-x-4 gap-y-1.5 pt-3 font-mono text-[11px] text-ink-faint"
            role="list"
          >
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            {project.confidential ? (
              <span className="inline-flex items-center gap-2 border border-rule px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                <Lock className="h-3.5 w-3.5" />
                {project.privateNote ?? "Código bajo NDA"}
              </span>
            ) : (
              project.repos?.map((repo) => (
                <a
                  key={repo.label}
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-rule-strong px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition hover:border-accent hover:text-accent"
                >
                  <Github className="h-3.5 w-3.5" />
                  {repo.label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="pb-16 pt-10 sm:pb-24 sm:pt-14 md:pb-32 md:pt-16"
    >
      <SectionHeader
        num="§01"
        label="SELECCIÓN · 2024—2026"
        title="Proyectos"
        desc="Sistemas entregados a clientes reales, proyectos propios y trabajo académico. Del modelo de datos a la app móvil."
        monoTag="01 / INDEX"
      />

      <div className="container-fx mt-12 grid gap-6 md:mt-14 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.08} className="flex">
            <Card project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
