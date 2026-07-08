"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Entry {
  title: string;
  meta: string;
  date: string;
  detail?: string;
}

const experience: Entry[] = [
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

const certs: Entry[] = [
  {
    title: "Flutter — Móvil: De Cero a Experto",
    meta: "Udemy",
    date: "2026",
  },
  {
    title: ".NET Backend: .NET Core, SQL Server y Seguridad JWT",
    meta: "Udemy",
    date: "2025",
  },
  {
    title: "Desarrollo de API RESTful con Node.js y MySQL",
    meta: "Udemy",
    date: "2024",
  },
];

function Block({ title, children }: { title: string; children: ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="kicker mb-6">{title}</h3>
      <div className="space-y-6">{children}</div>
    </motion.div>
  );
}

function Item({ entry }: { entry: Entry }) {
  return (
    <div className="border-t border-line pt-4">
      <span className="font-mono text-xs text-accent-ink">{entry.date}</span>
      <h4 className="mt-1.5 font-display text-lg font-semibold text-ink leading-snug">
        {entry.title}
      </h4>
      <p className="mt-1 text-sm text-ink-2">{entry.meta}</p>
      {entry.detail && (
        <p className="mt-2 text-sm text-ink-3 leading-relaxed">{entry.detail}</p>
      )}
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 sm:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <span className="kicker">Sobre mí</span>
          <p className="mt-6 font-display text-[clamp(1.6rem,6vw,3rem)] font-medium text-ink leading-[1.18] tracking-tight max-w-4xl">
            Estudiante avanzado, ordenado y autodidacta. Diseñé de punta a punta
            una API de{" "}
            <span className="italic text-accent">+20 endpoints</span> y sistemas
            con múltiples roles y decenas de tablas — y busco mi{" "}
            <span className="italic text-accent">primera posición</span> Full
            Stack, con disponibilidad inmediata.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-12 sm:space-y-14">
            <Block title="Experiencia">
              {experience.map((e) => (
                <Item key={e.title} entry={e} />
              ))}
            </Block>
            <Block title="Educación">
              {education.map((e) => (
                <Item key={e.title} entry={e} />
              ))}
            </Block>
          </div>

          <div className="lg:col-span-5 space-y-12 sm:space-y-14">
            <Block title="Certificaciones">
              {certs.map((e) => (
                <Item key={e.title} entry={e} />
              ))}
            </Block>
            <Block title="Idiomas">
              <div className="border-t border-line pt-4 flex items-baseline justify-between">
                <span className="font-display text-lg font-semibold text-ink">
                  Español
                </span>
                <span className="text-sm text-ink-3">Nativo</span>
              </div>
              <div className="border-t border-line pt-4 flex items-baseline justify-between">
                <span className="font-display text-lg font-semibold text-ink">
                  Inglés
                </span>
                <span className="text-sm text-ink-3">Básico</span>
              </div>
            </Block>
          </div>
        </div>
      </div>
    </section>
  );
}
