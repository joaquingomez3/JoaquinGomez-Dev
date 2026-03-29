"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, ArrowUpRight, Send, Phone } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    description: "gomezjoaquing3@gmail.com",
    href: "mailto:gomezjoaquing3@gmail.com",
    icon: <Mail className="w-6 h-6" />,
    action: "Enviar email",
    gradient: "from-rose-500/20 to-orange-500/20",
  },
  {
    name: "LinkedIn",
    description: "joaquingomez3",
    href: "https://www.linkedin.com/in/joaquingomez-dev",
    icon: <Linkedin className="w-6 h-6" />,
    action: "Ver perfil",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "GitHub",
    description: "Mis repositorios y código",
    href: "https://github.com/joaquingomez3",
    icon: <Github className="w-6 h-6" />,
    action: "Ver repos",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-accent mb-4 block">
            Contacto
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-4">
            ¿Trabajamos{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-accent bg-clip-text text-transparent">
              juntos
            </span>
            ?
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Estoy buscando mi primera experiencia laboral en el mundo IT.
            ¡No dudes en contactarme!
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl border border-border bg-surface-light/40 backdrop-blur-sm p-8 text-center transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2">
                {/* Gradient bg */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="inline-flex p-4 rounded-2xl bg-accent/10 text-accent border border-accent/20 mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    {link.icon}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-accent transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-sm text-text-muted mb-4">
                    {link.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    {link.action}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 relative rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/5 via-accent/10 to-cyan-accent/5 p-8 sm:p-12 text-center overflow-hidden"
        >
          <div className="relative z-10">
            <Send className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              ¿Tenés un proyecto? ¿Buscás un desarrollador?
            </h3>
            <p className="text-text-secondary mb-2 max-w-md mx-auto">
              Estoy listo para aportar valor a tu equipo con mis conocimientos
              en .NET, Node.js, React y bases de datos.
            </p>
            <div className="flex items-center justify-center gap-2 text-text-muted text-sm mb-6">
              <Phone className="w-4 h-4" />
              <span>2664-894029</span>
            </div>
            <a
              href="mailto:gomezjoaquing3@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-dark text-white font-semibold text-lg hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              Contactame
            </a>
          </div>

          {/* Decorative orbs */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent/10 blur-[60px]" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-cyan-accent/10 blur-[60px]" />
        </motion.div>
      </div>
    </section>
  );
}
