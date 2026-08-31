"use client";

const items = [
  "Node.js",
  ".NET",
  "C#",
  "Next.js",
  "TypeScript",
  "React",
  "Flutter",
  "Dart",
  "PostgreSQL",
  "MySQL",
  "API REST",
  "JWT",
  "Python",
  "Android",
  "Git",
];

export default function Marquee() {
  const row = [...items, ...items];

  return (
    <div className="relative select-none overflow-hidden border-b border-rule bg-bg-soft">
      <div className="marquee-track">
        {row.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="h-display px-6 py-4 text-xl uppercase sm:text-2xl">
              {item}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
          </div>
        ))}
      </div>

      {/* Difuminado en los bordes */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg-soft to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg-soft to-transparent sm:w-24" />
    </div>
  );
}
