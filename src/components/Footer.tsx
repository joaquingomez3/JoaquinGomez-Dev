const nav = [
  { label: "Proyectos", href: "#projects" },
  { label: "Stack", href: "#tech" },
  { label: "Perfil", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

const enlaces = [
  {
    label: "github",
    href: "https://github.com/joaquingomez3",
    external: true,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/joaquingomez-dev",
    external: true,
  },
  { label: "email", href: "mailto:gomezjoaquing3@gmail.com", external: false },
  { label: "cv (pdf)", href: "/CV_Joaquin_Gomez.pdf", external: true },
];

const sistema = [
  "build: portfolio v2",
  "engine: next.js 15",
  "host: vercel",
  "loc: san luis, ar",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-bg-raised">
      <div className="container-fx py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a
              href="#top"
              className="flex items-center gap-1 font-display text-base font-bold tracking-tight"
            >
              Joaquín Gómez
              <span className="text-accent">.dev</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-faint">
              Desarrollador Full Stack Junior. De la base de datos a la app
              móvil: Node.js, .NET, Next.js, React y Flutter.
            </p>
          </div>

          <nav aria-label="Índice">
            <h3 className="label mb-4">INDEX</h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block py-1 font-mono text-sm text-ink-soft transition-colors hover:text-accent"
                  >
                    {item.label.toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="label mb-4">ENLACES</h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {enlaces.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="inline-block py-1 font-mono text-sm text-ink-soft transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label mb-4">SISTEMA</h3>
            <ul
              className="flex flex-col gap-2.5 font-mono text-sm text-ink-faint"
              role="list"
            >
              {sistema.map((item) => (
                <li key={item}>{item}</li>
              ))}
              <li className="pt-2">
                <span className="inline-flex items-center gap-2 text-accent">
                  <span className="h-2 w-2 animate-pulse bg-accent" />
                  disponible
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-rule pt-6 font-mono text-[11px] uppercase tracking-widest text-ink-faint md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} Joaquín Gómez — San Luis, Argentina</p>
          <p>Diseñado y construido con Next.js</p>
        </div>
      </div>
    </footer>
  );
}
