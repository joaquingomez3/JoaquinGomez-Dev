"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Group {
  n: string;
  name: string;
  items: string[];
}

const groups: Group[] = [
  {
    n: "01",
    name: "Lenguajes",
    items: ["JavaScript", "C#", "Java", "Dart", "Python", "HTML", "CSS"],
  },
  {
    n: "02",
    name: "Backend & APIs",
    items: [
      "Node.js",
      "Express",
      ".NET / .NET Core",
      "ASP.NET Web API",
      "API RESTful",
      "JWT",
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
    items: ["React", "Bootstrap", "HTML / CSS", "FullCalendar", "DataTables"],
  },
  {
    n: "05",
    name: "Datos",
    items: ["MySQL", "SQL Server", "Modelado relacional", "Pandas", "NumPy"],
  },
  {
    n: "06",
    name: "Herramientas & IA",
    items: [
      "Git / GitHub",
      "Pull requests",
      "Postman",
      "Vercel",
      "VS Code",
      "Claude · Claude Code",
      "Gemini · ChatGPT",
    ],
  },
];

function GroupBlock({ group, i }: { group: Group; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-line pt-6"
    >
      <div className="flex items-baseline gap-3 mb-5">
        <span className="font-mono text-xs text-accent">{group.n}</span>
        <h3 className="font-display text-xl font-semibold text-ink">
          {group.name}
        </h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="text-sm text-ink-2 border border-line-strong rounded-full px-3 py-1.5 hover:border-ink hover:text-ink transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="relative py-20 sm:py-32 px-6 lg:px-8 bg-paper-2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <span className="kicker">Herramientas del oficio</span>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl font-semibold text-ink tracking-tight">
            Stack tecnológico
          </h2>
          <p className="mt-4 text-ink-2 text-lg">
            Lo que uso para construir de punta a punta: del diseño de la API y el
            modelo de datos hasta la app móvil que lo consume.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {groups.map((group, i) => (
            <GroupBlock key={group.name} group={group} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
