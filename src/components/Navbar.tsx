"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Proyectos", href: "#projects" },
  { name: "Stack", href: "#tech" },
  { name: "Sobre mí", href: "#about" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-surface/70 backdrop-blur-2xl border-b border-border shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#hero"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-cyan-accent flex items-center justify-center">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                Joaquín<span className="text-accent">.</span>dev
              </span>
            </motion.a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors group"
                >
                  {link.name}
                  <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-accent/0 via-accent to-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 px-5 py-2 text-sm font-semibold rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
              >
                Hablemos
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-2xl pt-20 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-xl font-medium text-text-secondary hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 px-8 py-3 text-lg font-semibold rounded-full bg-accent text-white hover:bg-accent-light transition-colors"
              >
                Hablemos
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
