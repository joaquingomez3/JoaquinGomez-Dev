"use client";

import { LineMask, Reveal } from "./motion/Reveal";

const links = [
  {
    key: "email",
    label: "EMAIL",
    value: "gomezjoaquing3@gmail.com",
    href: "mailto:gomezjoaquing3@gmail.com",
  },
  {
    key: "linkedin",
    label: "LINKEDIN",
    value: "in/joaquingomez-dev",
    href: "https://www.linkedin.com/in/joaquingomez-dev",
  },
  {
    key: "github",
    label: "GITHUB",
    value: "github.com/joaquingomez3",
    href: "https://github.com/joaquingomez3",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="pb-16 pt-10 sm:pb-24 sm:pt-14 md:pb-36 md:pt-14"
    >
      <div className="container-fx text-center">
        <Reveal>
          <div className="t-rule flex items-center justify-between gap-4 pb-4 pt-6">
            <span className="label-accent">§04 / CONTACTO</span>
            <span className="label hidden sm:inline">RESPONDO RÁPIDO</span>
          </div>
        </Reveal>

        <h2 className="h-display mt-12 text-[clamp(2.2rem,11vw,9rem)] uppercase">
          <LineMask>¿Trabajamos</LineMask>
          <LineMask delay={0.1}>
            <span className="text-outline">juntos</span>
            <span className="text-accent">?</span>
          </LineMask>
        </h2>

        <Reveal>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            Busco mi primera experiencia laboral en IT, con disponibilidad
            inmediata. Si tenés una vacante o un proyecto, escribime — respondo
            rápido.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:gomezjoaquing3@gmail.com" className="btn-force">
              Enviame un email
            </a>
            <a
              href="/CV_Joaquin_Gomez.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-brutal"
            >
              Descargar CV
            </a>
          </div>
        </Reveal>
      </div>

      <div className="container-fx mt-16 md:mt-20">
        <Reveal>
          <div className="t-rule grid border-x border-rule sm:grid-cols-3">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 border-b border-rule px-5 py-6 text-left transition-colors hover:bg-accent hover:text-accent-ink sm:border-r sm:last:border-r-0"
              >
                <span className="flex min-w-0 flex-col gap-1.5">
                  <span className="font-mono text-[11px] text-ink-faint transition-colors group-hover:text-accent-ink/70">
                    /{l.key}
                  </span>
                  <span className="font-mono text-sm font-semibold uppercase tracking-widest">
                    {l.label}
                  </span>
                  <span className="truncate font-mono text-[11px] text-ink-soft transition-colors group-hover:text-accent-ink/80">
                    {l.value}
                  </span>
                </span>
                <span className="font-mono shrink-0">↗</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
