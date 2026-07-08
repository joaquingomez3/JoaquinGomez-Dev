"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Proyectos", href: "#projects", n: "01" },
  { name: "Stack", href: "#tech", n: "02" },
  { name: "Perfil", href: "#about", n: "03" },
  { name: "Contacto", href: "#contact", n: "04" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-paper/80 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#top" className="group flex items-baseline gap-2">
              <span className="font-display text-xl font-semibold tracking-tight text-ink">
                Joaquín Gómez
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent -translate-y-[2px]" />
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-baseline gap-1.5 text-sm font-medium text-ink-2 hover:text-ink transition-colors"
                >
                  <span className="font-mono text-[0.65rem] text-ink-3 group-hover:text-accent transition-colors">
                    {link.n}
                  </span>
                  <span className="link-underline">{link.name}</span>
                </a>
              ))}
              <a
                href="/CV_Joaquin_Gomez.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-paper bg-ink px-4 py-2 rounded-full hover:bg-accent transition-colors duration-300"
              >
                CV
              </a>
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 -mr-2 text-ink"
              aria-label="Abrir menú"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-paper md:hidden pt-24 px-8"
          >
            <div className="flex flex-col divide-y divide-line border-y border-line">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                  className="flex items-baseline gap-4 py-5"
                >
                  <span className="font-mono text-xs text-accent">{link.n}</span>
                  <span className="font-display text-3xl font-medium text-ink">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
            <a
              href="/CV_Joaquin_Gomez.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-8 inline-block text-base font-semibold text-paper bg-ink px-6 py-3 rounded-full"
            >
              Descargar CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
