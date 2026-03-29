"use client";

import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent to-cyan-accent flex items-center justify-center">
            <Terminal className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm text-text-muted">
            Joaquín<span className="text-accent">.</span>dev
          </span>
        </div>

        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Joaquín Gómez — Todos los derechos reservados
        </p>

        <div className="flex items-center gap-1 text-xs text-text-muted">
          <span>Hecho con</span>
          <span className="text-accent font-semibold">Next.js</span>
          <span>+</span>
          <span className="text-accent font-semibold">Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
