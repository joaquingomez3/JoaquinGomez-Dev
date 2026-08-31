"use client";

import { LineMask, Reveal } from "./motion/Reveal";

interface Props {
  num: string;
  label: string;
  title: string;
  desc?: string;
  monoTag?: string;
  /** rule=false cuando la sección ya viene después de un borde fuerte. */
  rule?: boolean;
}

export default function SectionHeader({
  num,
  label,
  title,
  desc,
  monoTag = "JOAQUÍN GÓMEZ",
  rule = true,
}: Props) {
  return (
    <div className="container-fx">
      <Reveal className={`pb-4 ${rule ? "t-rule pt-6" : "pt-0"}`}>
        <div className="flex items-baseline justify-between gap-4">
          <span className="label-accent">
            {num} / {label}
          </span>
          <span className="label hidden sm:inline">{monoTag}</span>
        </div>
      </Reveal>

      <div className="pb-4 pt-2">
        <h2 className="h-display text-[clamp(2.1rem,7.5vw,6.5rem)]">
          <LineMask>{title}</LineMask>
        </h2>
      </div>

      {desc && (
        <Reveal>
          <p className="max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  );
}
