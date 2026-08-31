"use client";

import SectionHeader from "./SectionHeader";
import { Reveal } from "./motion/Reveal";

interface Group {
  n: string;
  name: string;
  items: string[];
}

const groups: Group[] = [
  {
    n: "01",
    name: "Lenguajes",
    items: [
      "JavaScript",
      "TypeScript",
      "C#",
      "Java",
      "Dart",
      "Python",
      "HTML",
      "CSS",
    ],
  },
  {
    n: "02",
    name: "Backend & APIs",
    items: [
      "Node.js",
      "Express",
      ".NET / .NET Core",
      "ASP.NET Web API",
      "Next.js (App Router)",
      "Server Actions",
      "API RESTful",
      "JWT",
      "Auth.js",
      "Zod",
      "Auth por roles",
    ],
  },
  {
    n: "03",
    name: "Móvil híbrido",
    items: ["Flutter", "Dart", "Android Studio", "Retrofit", "Android / iOS"],
  },
  {
    n: "04",
    name: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Radix UI / shadcn",
      "Recharts",
      "Bootstrap",
      "FullCalendar",
      "DataTables",
    ],
  },
  {
    n: "05",
    name: "Datos",
    items: [
      "MySQL",
      "PostgreSQL / Neon",
      "SQL Server",
      "Drizzle ORM",
      "Modelado relacional",
      "Pandas",
      "NumPy",
    ],
  },
  {
    n: "06",
    name: "Herramientas & IA",
    items: [
      "Git / GitHub",
      "Pull requests",
      "Postman",
      "Vitest",
      "Vercel",
      "VS Code",
      "Claude · Claude Code",
      "Gemini · ChatGPT",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="border-y border-rule bg-bg-soft pb-16 pt-10 sm:pb-24 sm:pt-14 md:pb-28 md:pt-16"
    >
      <SectionHeader
        num="§02"
        label="HERRAMIENTAS DEL OFICIO"
        title="Stack tecnológico"
        desc="Lo que uso para construir de punta a punta: del diseño de la API y el modelo de datos hasta la app móvil que lo consume."
        monoTag="02 / INDEX"
      />

      <div className="container-fx mt-10 md:mt-14">
        <ul className="t-rule" role="list">
          {groups.map((group) => (
            <li key={group.name} className="b-rule">
              <Reveal>
                <div className="grid items-baseline gap-4 py-7 md:grid-cols-12 md:gap-6 md:py-9">
                  <span className="font-mono text-[12px] text-accent md:col-span-1">
                    {group.n}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase md:col-span-4 md:text-3xl">
                    {group.name}
                  </h3>
                  <ul className="flex flex-wrap gap-2 md:col-span-7" role="list">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
