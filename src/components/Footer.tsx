export default function Footer() {
  return (
    <footer className="bg-ink text-paper/60 px-6 lg:px-8 pb-10 pt-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-paper/15 pt-8">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-lg font-semibold text-paper">
            Joaquín Gómez
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent -translate-y-[2px]" />
        </div>

        <p className="font-mono text-xs">
          © {new Date().getFullYear()} — San Luis, Argentina
        </p>

        <p className="font-mono text-xs">Diseñado y construido con Next.js</p>
      </div>
    </footer>
  );
}
