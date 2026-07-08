"use client";

const items = [
  "Node.js",
  ".NET",
  "C#",
  "Flutter",
  "Dart",
  "React",
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
    <div className="relative border-y border-line bg-paper-2 overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        {row.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="font-display text-xl sm:text-2xl italic text-ink px-6 py-4">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          </div>
        ))}
      </div>
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper-2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper-2 to-transparent" />
    </div>
  );
}
