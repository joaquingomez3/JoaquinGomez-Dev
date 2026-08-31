"use client";

import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { LineMask, Reveal } from "./motion/Reveal";

interface Entry {
  title: string;
  meta: string;
  date: string;
  detail?: string;
}

interface Cert {
  title: string;
  issuer: string;
  year: string;
  file: string;
}

interface Ficha {
  tag: string;
  value: string;
  hint: string;
}

const experience: Entry[] = [
  {
    title: "Sistema de gestión y ventas para TRESMA",
    meta: "Cliente real · Artículos de limpieza",
    date: "2026",
    detail:
      "Sistema web interno de stock, ventas y precios, entregado y en uso diario. Lo diseñé mobile-first para operar desde el celular con lector de código de barras, con las reglas de negocio validadas siempre del lado del servidor.",
  },
  {
    title: "Desarrollador Full Stack — Práctica Profesional Supervisada",
    meta: "Cliente confidencial · Universidad de La Punta",
    date: "2026 — Presente",
    detail:
      "App híbrida Android/iOS con panel web (Flutter/Dart) en equipo de 2. Incorporé Flutter de forma autodidacta y uso IA (Claude, Gemini, ChatGPT) con criterio técnico propio sobre cada solución.",
  },
];

const education: Entry[] = [
  {
    title: "Tecnicatura Universitaria en Desarrollo de Software",
    meta: "Universidad de La Punta",
    date: "2021 — 2026",
    detail: "Finalización estimada: diciembre 2026.",
  },
  {
    title: "Diplomatura en Python para Ciencia de Datos y Machine Learning",
    meta: "Universidad de La Punta",
    date: "2026 — Presente",
  },
  {
    title: "Bachiller con orientación en Informática",
    meta: "E.S. Héroes de Malvinas",
    date: "2016 — 2018",
  },
];

const certs: Cert[] = [
  {
    title: "Flutter — Móvil: De Cero a Experto",
    issuer: "Udemy",
    year: "2026",
    file: "/certificado-flutter.pdf",
  },
  {
    title: ".NET Backend: .NET Core, SQL Server y Seguridad JWT",
    issuer: "Udemy",
    year: "2025",
    file: "/certificado-net.pdf",
  },
  {
    title: "Desarrollo de API RESTful con Node.js y MySQL",
    issuer: "Udemy",
    year: "2024",
    file: "/certificado-node.pdf",
  },
];

const ficha: Ficha[] = [
  { tag: "idioma", value: "Español", hint: "nativo" },
  { tag: "idioma", value: "Inglés", hint: "básico" },
  { tag: "egreso", value: "2026", hint: "tecnicatura UDLP" },
  { tag: "api", value: "+20", hint: "endpoints propios" },
  { tag: "proyectos", value: "05", hint: "web + mobile" },
  { tag: "disponibilidad", value: "Inmediata", hint: "San Luis / remoto" },
];

/** Encabezado de sub-bloque: etiqueta a la izquierda, conteo a la derecha. */
function BlockHead({ title, aside }: { title: string; aside: string }) {
  return (
    <div className="b-rule flex items-baseline justify-between gap-4 pb-3">
      <span className="label">{title}</span>
      <span className="label hidden sm:inline">{aside}</span>
    </div>
  );
}

/**
 * Fila de línea de tiempo. La fecha y el lugar viven en su propia columna a
 * la izquierda; el detalle respira en la de la derecha. En mobile la fila se
 * apila, así que nada compite por el ancho.
 */
function TimelineRow({ entry }: { entry: Entry }) {
  return (
    <li className="b-rule">
      <Reveal>
        <div className="grid gap-3 py-7 md:grid-cols-12 md:gap-8 md:py-9">
          <div className="md:col-span-4 lg:col-span-3">
            <span className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
              {entry.date}
            </span>
            <p className="mt-2 font-mono text-[11px] uppercase leading-relaxed tracking-wide text-ink-faint">
              {entry.meta}
            </p>
          </div>

          <div className="md:col-span-8 lg:col-span-9">
            <h4 className="font-display text-xl font-bold leading-tight md:text-2xl">
              {entry.title}
            </h4>
            {entry.detail && (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
                {entry.detail}
              </p>
            )}
          </div>
        </div>
      </Reveal>
    </li>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="pb-16 pt-10 sm:pb-24 sm:pt-14 md:pb-32 md:pt-16"
    >
      <SectionHeader
        num="§03"
        label="PERFIL"
        title="Sobre mí"
        monoTag="03 / INDEX"
      />

      <div className="container-fx mt-12 md:mt-16">
        <p className="h-display max-w-5xl text-2xl uppercase leading-[1.05] sm:text-3xl md:text-4xl lg:text-5xl">
          <LineMask>Estudiante avanzado, ordenado</LineMask>
          <LineMask delay={0.1}>
            y <span className="text-outline">autodidacta</span>.
          </LineMask>
        </p>

        <div className="mt-10 max-w-3xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink-soft">
              <span className="mono text-ink-faint">&para; </span>
              Diseñé de punta a punta una API de{" "}
              <span className="text-accent">+20 endpoints</span>, entregué un{" "}
              <span className="text-accent">sistema en producción</span> a un
              cliente real y construí sistemas con múltiples roles y decenas de
              tablas — y busco mi{" "}
              <span className="text-accent">primera posición</span> Full Stack,
              con disponibilidad inmediata.
            </p>
          </Reveal>
        </div>

        {/* Experiencia */}
        <div className="mt-16 md:mt-24">
          <BlockHead title="EXPERIENCIA" aside={`0${experience.length} / TRABAJO`} />
          <ul className="t-rule" role="list">
            {experience.map((e) => (
              <TimelineRow key={e.title} entry={e} />
            ))}
          </ul>
        </div>

        {/* Educación */}
        <div className="mt-14 md:mt-20">
          <BlockHead title="EDUCACIÓN" aside={`0${education.length} / FORMACIÓN`} />
          <ul className="t-rule" role="list">
            {education.map((e) => (
              <TimelineRow key={e.title} entry={e} />
            ))}
          </ul>
        </div>

        {/* Certificaciones */}
        <div className="mt-14 md:mt-20">
          <BlockHead
            title="CERTIFICACIONES"
            aside={`0${certs.length} / CURSOS`}
          />
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {certs.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.08} className="flex">
                <article className="group flex flex-1 flex-col border border-rule bg-bg-raised transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[6px_6px_0_0_var(--color-accent)]">
                  <div className="flex items-center justify-between border-b border-rule">
                    <span className="bg-accent px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-accent-ink">
                      {c.year}
                    </span>
                    <span className="px-4 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                      {c.issuer}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h4 className="font-display text-lg font-bold leading-tight transition-colors group-hover:text-accent">
                      {c.title}
                    </h4>
                    <div className="mt-auto pt-6">
                      <a
                        href={c.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-rule-strong px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition hover:border-accent hover:text-accent"
                      >
                        Ver certificado
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Ficha: idiomas + datos duros, en celdas del mismo tamaño. */}
        <div className="mt-14 md:mt-20">
          <BlockHead title="FICHA" aside="IDIOMAS + DATOS" />
          <Reveal>
            <dl className="t-rule grid grid-cols-2 border-l border-rule md:grid-cols-3 lg:grid-cols-6">
              {ficha.map((f) => (
                <div
                  key={`${f.tag}-${f.value}`}
                  className="border-b border-r border-rule p-4"
                >
                  <dt className="mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                    [{f.tag}]
                  </dt>
                  <dd className="mt-2">
                    <span className="block font-display text-xl font-bold leading-tight">
                      {f.value}
                    </span>
                    <span className="mt-1 block font-mono text-[11px] text-ink-faint">
                      {f.hint}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
