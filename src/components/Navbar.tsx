"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Proyectos", href: "#projects", n: "01" },
  { name: "Stack", href: "#tech", n: "02" },
  { name: "Perfil", href: "#about", n: "03" },
  { name: "Contacto", href: "#contact", n: "04" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // El panel móvil se cierra al tocar fuera o con Escape.
  useEffect(() => {
    if (!mobileOpen) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bg/90 backdrop-blur-md">
      <nav
        className="container-fx flex h-14 items-center justify-between gap-4"
        aria-label="Principal"
      >
        <a
          href="#top"
          className="flex items-center gap-1 font-display text-base font-bold tracking-tight"
        >
          Joaquín Gómez
          <span className="text-accent">.dev</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="group inline-flex items-baseline gap-1.5 mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft transition hover:text-accent"
              >
                <span className="text-ink-faint transition group-hover:text-accent">
                  {link.n}
                </span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div ref={wrapRef} className="relative flex items-center gap-3">
          <a
            href="/CV_Joaquin_Gomez.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-force hidden px-4 py-2 sm:inline-flex"
          >
            CV
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center border border-rule-strong text-ink transition hover:border-accent hover:text-accent lg:hidden"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="absolute right-0 top-full mt-2 w-[min(20rem,calc(100vw-2.5rem))] border border-rule bg-bg-raised shadow-[6px_6px_0_0_var(--color-rule-strong)] lg:hidden"
              >
                <ul className="flex flex-col" role="list">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-baseline gap-3 border-b border-rule px-4 py-3.5 mono text-[11px] uppercase tracking-[0.18em] text-ink-soft transition hover:bg-bg-soft hover:text-accent"
                      >
                        <span className="text-ink-faint">{link.n}</span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="/CV_Joaquin_Gomez.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="block bg-accent px-4 py-3.5 mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-ink"
                    >
                      Descargar CV
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}
