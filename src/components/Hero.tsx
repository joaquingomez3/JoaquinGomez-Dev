"use client";

import { Github, Linkedin } from "lucide-react";
import { LineMask, Reveal } from "./motion/Reveal";

const stats = [
  { tag: "api", value: "+20", label: "endpoints REST" },
  { tag: "horas", value: "+650", label: "ChallengeFit" },
  { tag: "work", value: "5", label: "proyectos" },
  { tag: "certs", value: "3", label: "certificaciones" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Grilla de fondo, enmascarada hacia los bordes. */}
      <div
        className="grid-bg pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />

      <div className="container-fx relative pb-8 pt-14 md:pb-12 md:pt-20">
        <Reveal className="mb-10 md:mb-14">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <span className="label-accent">FULL STACK JUNIOR</span>
            <span className="label hidden items-center gap-2 sm:inline-flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 bg-emerald-500" />
              </span>
              DISPONIBLE PARA TRABAJAR
            </span>
            <span className="label">SAN LUIS, AR</span>
          </div>
        </Reveal>

        <h1 className="h-display text-[clamp(2.6rem,12.5vw,10.5rem)] uppercase">
          <LineMask>Joaquín</LineMask>
          <LineMask delay={0.12}>
            <span className="text-outline">Gómez</span>
            <span className="text-accent">.</span>
          </LineMask>
        </h1>
      </div>

      <div className="container-fx relative pb-12 md:pb-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-5">
            <Reveal>
              <p className="text-lg leading-relaxed text-ink-soft">
                <span className="font-display font-bold text-ink">
                  Desarrollador full-stack
                </span>
                , formación universitaria en informática. Amante de los retos y
                el aprendizaje constante. Si algo no lo entiendo,{" "}
                <span className="font-display font-bold text-ink">
                  lo investigo y lo aprendo
                </span>
                .
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-[0.95rem] leading-relaxed text-ink-faint">
                Backend con Node.js, .NET y Next.js. Frontend con React. Móvil
                híbrido con Flutter. Con un sistema entregado y en producción
                para un cliente real, y próximo a graduarme de la Tecnicatura
                Universitaria en Desarrollo de Software (Universidad de La
                Punta).
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-force">
                Ver proyectos
              </a>
              <a
                href="/CV_Joaquin_Gomez.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-brutal"
              >
                Descargar CV
              </a>
              <a
                href="https://github.com/joaquingomez3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="btn-square"
              >
                <Github className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/joaquingomez-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="btn-square"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Tira de métricas */}
      <dl className="grid grid-cols-2 border-t border-rule md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`p-4 md:p-5 ${
              i === 0
                ? "border-b border-r border-rule md:border-b-0"
                : i === 1
                  ? "border-b border-rule md:border-b-0 md:border-r"
                  : i === 2
                    ? "border-r border-rule"
                    : ""
            }`}
          >
            <dt className="mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
              [{s.tag}]
            </dt>
            <dd className="mt-2 flex flex-wrap items-baseline gap-x-2">
              <span className="font-display text-3xl font-bold md:text-4xl">
                {s.value}
              </span>
              <span className="mono text-[11px] text-ink-soft">{s.label}</span>
            </dd>
          </div>
        ))}
      </dl>

      {/* Estado + hint de scroll */}
      <div className="flex items-center justify-between border-y border-rule px-5 py-3 sm:px-8 lg:px-12">
        <span className="mono flex items-center gap-2 text-[11px] uppercase tracking-[0.14em]">
          <span className="text-ink-faint">[status]</span>
          <span className="h-2 w-2 shrink-0 animate-pulse bg-emerald-500" />
          <span className="text-emerald-400">disponible para trabajar</span>
        </span>
        <a
          href="#projects"
          className="mono flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-ink-faint transition-colors hover:text-accent"
        >
          <span className="hidden sm:inline">[scroll]</span>
          <span className="animate-pulse">▼</span>
        </a>
      </div>
    </section>
  );
}
