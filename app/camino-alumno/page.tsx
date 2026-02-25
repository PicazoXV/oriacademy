"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Briefcase,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

const timeline = [
  {
    age: "7-9 años",
    title: "Etapa 1: Fundamentos",
    color: "from-orange-400 to-orange-600",
    courses: ["Scratch", "Minecraft Education"],
    skills: [
      "Pensamiento lógico",
      "Resolución de problemas",
      "Creatividad digital",
      "Trabajo en equipo",
    ],
    projects: [
      "Juegos de plataformas",
      "Animaciones interactivas",
      "Mundos en Minecraft",
    ],
  },
  {
    age: "10-12 años",
    title: "Etapa 2: Desarrollo",
    color: "from-red-500 to-pink-600",
    courses: ["Roblox Studio", "Lua Programming"],
    skills: [
      "Programación textual",
      "Diseño 3D",
      "Lógica de juego",
      "Publicación de proyectos",
    ],
    projects: ["Juegos 3D en Roblox", "Sistemas de puntuación", "Multijugador online"],
  },
  {
    age: "13-14 años",
    title: "Etapa 3: Especialización",
    color: "from-blue-500 to-cyan-600",
    courses: ["Unity", "Desarrollo Web", "C#"],
    skills: [
      "Programación profesional",
      "Diseño de interfaces",
      "Física de videojuegos",
      "Optimización",
    ],
    projects: ["Videojuegos en Unity", "Páginas web interactivas", "Aplicaciones móviles"],
  },
  {
    age: "15-16 años",
    title: "Etapa 4: Avanzado",
    color: "from-[#5DD4C1] to-[#3AB4A1]",
    courses: ["Unity Avanzado", "IA", "Python"],
    skills: [
      "Arquitectura de software",
      "Machine Learning",
      "Desarrollo completo",
      "Portfolio profesional",
    ],
    projects: ["Juegos comerciales", "Sistemas de IA", "Portfolio GitHub"],
  },
];

const certifications = [
  "Certificado por cada curso completado",
  "Portfolio de proyectos realizados",
  "Recomendaciones académicas",
  "Acceso a comunidad de alumni",
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO premium */}
      <section className="relative overflow-hidden">
        {/* Fondo tipo Cursos (mint → gris → lilac) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))/26] via-slate-100 to-[rgb(var(--brand-lilac))/26]" />
        <div className="absolute inset-0 bg-slate-200/25" />

        {/* glows */}
        <div className="absolute -top-44 -left-44 h-[680px] w-[680px] rounded-full bg-[rgb(var(--brand-mint))/26] blur-3xl" />
        <div className="absolute -bottom-56 -right-52 h-[760px] w-[760px] rounded-full bg-[rgb(var(--brand-lilac))/26] blur-3xl" />

        {/* grid sutil */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[rgb(var(--ink))/80] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-[rgb(var(--brand-mint))]" />
              <span>Ruta completa 7–16 años</span>
              <span className="opacity-40">·</span>
              <span>Proyectos reales</span>
            </div>

            <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900">
              Camino del{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]">
                Alumno
              </span>
            </h1>

            <p className="font-body mx-auto mt-6 max-w-3xl text-lg md:text-xl text-slate-700">
              Un viaje educativo diseñado para desarrollar habilidades de programación
              desde los 7 hasta los 16 años, con metas claras y proyectos que motivan.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#timeline" className="w-full sm:w-auto">
                <Button className="btn-primary w-full sm:w-auto rounded-full px-10 py-6 text-lg">
                  Ver etapas
                </Button>
              </a>
              <Link href="/solicitar-plaza" className="w-full sm:w-auto">
                <Button className="btn-secondary w-full sm:w-auto rounded-full px-10 py-6 text-lg">
                  Solicitar plaza
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE premium */}
      <section id="timeline" className="relative py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center"
          >
            <h2 className="font-title text-3xl md:text-4xl font-extrabold text-slate-900">
              Etapas con objetivos claros
            </h2>
            <p className="font-body mx-auto mt-4 max-w-3xl text-slate-600 text-lg">
              Cada etapa construye sobre la anterior: más autonomía, más nivel, más portfolio.
            </p>
          </motion.div>

          <div className="relative mt-14">
            {/* Línea central (integrada, sin negro duro) */}
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-black/10 via-black/5 to-transparent md:block" />

            <div className="space-y-10 md:space-y-14">
              {timeline.map((stage, index) => {
                const sideLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: EASE, delay: index * 0.05 }}
                    className="relative"
                  >
                    <div className="grid items-stretch gap-6 md:grid-cols-2">
                      {/* Columna izquierda */}
                      <div className={sideLeft ? "" : "md:order-2"}>
                        <StageCard stage={stage} index={index} />
                      </div>

                      {/* Columna derecha */}
                      <div className={sideLeft ? "md:order-2" : ""}>
                        <StagePanel stage={stage} />
                      </div>
                    </div>

                    {/* Punto en la línea central */}
                    <div className="pointer-events-none absolute left-1/2 top-10 hidden -translate-x-1/2 md:block">
                      <div className="relative">
                        <div
                          className={`h-5 w-5 rounded-full bg-gradient-to-r ${stage.color} shadow-lg`}
                        />
                        <div
                          className={`absolute -inset-3 rounded-full bg-gradient-to-r ${stage.color} opacity-20 blur-md`}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA intermedio */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-16"
          >
            <Card className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 md:p-10 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))/14] via-white to-[rgb(var(--brand-lilac))/14]" />
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="font-title text-2xl md:text-3xl font-extrabold text-slate-900">
                    ¿No sabes por dónde empezar?
                  </h3>
                  <p className="font-body mt-2 text-slate-600">
                    Te recomendamos la etapa ideal según edad y experiencia.
                  </p>
                </div>
                <Link href="/contacto">
                  <Button className="btn-primary rounded-full px-8 py-6 text-lg">
                    Hablar con nosotros <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO + CERTIFICACIONES premium */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-mint))/10] via-white to-[rgb(var(--brand-lilac))/10]" />
        <div className="absolute -top-48 right-[-160px] h-[620px] w-[620px] rounded-full bg-[rgb(var(--brand-mint))/16] blur-3xl" />
        <div className="absolute -bottom-56 left-[-170px] h-[700px] w-[700px] rounded-full bg-[rgb(var(--brand-lilac))/16] blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center"
          >
            <h2 className="font-title text-3xl md:text-4xl font-extrabold text-slate-900">
              Portfolio y certificaciones
            </h2>
            <p className="font-body mx-auto mt-4 max-w-3xl text-slate-600 text-lg">
              Al final, no solo “saben programar”: tienen pruebas visibles de lo que hacen.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <Card className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-mint))/12] via-white to-transparent" />
                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-lg">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="font-title text-2xl md:text-3xl font-extrabold text-slate-900">
                    Portfolio profesional
                  </h3>
                  <p className="font-body mt-3 text-slate-600">
                    Proyectos reales acumulados por etapas: jugables, publicables y presentables.
                  </p>

                  <ul className="mt-6 space-y-3">
                    <BulletMint>GitHub con proyectos públicos</BulletMint>
                    <BulletMint>Videojuegos publicados en plataformas</BulletMint>
                    <BulletMint>Portfolio web personal</BulletMint>
                  </ul>

                  <div className="mt-8">
                    <Link href="/cursos">
                      <Button className="btn-soft-mint rounded-full px-8 py-6 text-lg">
                        Ver cursos
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
            >
              <Card className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-lilac))/12] via-white to-transparent" />
                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="font-title text-2xl md:text-3xl font-extrabold text-slate-900">
                    Certificaciones
                  </h3>
                  <p className="font-body mt-3 text-slate-600">
                    Reconocimiento por progreso real: cada etapa suma credenciales y confianza.
                  </p>

                  <ul className="mt-6 space-y-3">
                    {certifications.map((c) => (
                      <BulletMint key={c}>{c}</BulletMint>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link href="/solicitar-plaza">
                      <Button className="btn-primary rounded-full px-8 py-6 text-lg">
                        Solicitar plaza
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Subcomponentes premium ---------- */

function StageCard({
  stage,
  index,
}: {
  stage: (typeof timeline)[number];
  index: number;
}) {
  return (
    <Card className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
      {/* header con color de etapa (respetado) */}
      <div className={`p-7 text-white bg-gradient-to-r ${stage.color}`}>
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="text-sm font-semibold opacity-90">{stage.age}</div>
            <h3 className="mt-2 font-title text-2xl md:text-3xl font-extrabold">
              {stage.title}
            </h3>
          </div>

          <div className="relative">
            <div className="text-6xl font-extrabold opacity-20 leading-none">
              {index + 1}
            </div>
          </div>
        </div>
      </div>

      <div className="p-7">
        <div className="grid gap-6 sm:grid-cols-2">
          <MiniBlock title="Cursos" tone="mint">
            {stage.courses.map((t) => (
              <MiniLine key={t} tone="mint">
                {t}
              </MiniLine>
            ))}
          </MiniBlock>

          <MiniBlock title="Habilidades" tone="warm">
            {stage.skills.map((t) => (
              <MiniLine key={t} tone="warm">
                {t}
              </MiniLine>
            ))}
          </MiniBlock>

          <div className="sm:col-span-2">
            <MiniBlock title="Proyectos" tone="green">
              {stage.projects.map((t) => (
                <MiniLine key={t} tone="green">
                  {t}
                </MiniLine>
              ))}
            </MiniBlock>
          </div>
        </div>
      </div>
    </Card>
  );
}

function StagePanel({ stage }: { stage: (typeof timeline)[number] }) {
  return (
    <Card className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.03] via-transparent to-black/[0.02]" />
      <div className="relative space-y-5">
        <h4 className="font-title text-xl font-extrabold text-slate-900">
          Objetivo de la etapa
        </h4>

        <p className="font-body text-slate-600">
          En esta etapa reforzamos la progresión natural: retos diarios, feedback y
          un proyecto final que se puede enseñar y jugar.
        </p>

        <div className="rounded-2xl border border-black/10 bg-white/70 p-5">
          <div className="text-sm font-semibold text-slate-900">Lo más importante</div>
          <div className="mt-3 grid gap-3">
            <InlinePill className={`bg-gradient-to-r ${stage.color}`}>
              Aprenden haciendo
            </InlinePill>
            <InlinePill className={`bg-gradient-to-r ${stage.color}`}>
              Proyecto final jugable
            </InlinePill>
            <InlinePill className={`bg-gradient-to-r ${stage.color}`}>
              Progreso visible
            </InlinePill>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/cursos">
            <Button className="btn-soft-lilac rounded-full px-7 py-5 text-base">
              Ver cursos
            </Button>
          </Link>
          <Link href="/contacto">
            <Button className="btn-secondary rounded-full px-7 py-5 text-base">
              Resolver dudas
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

function MiniBlock({
  title,
  children,
  tone,
}: {
  title: string;
  children: React.ReactNode;
  tone: "mint" | "warm" | "green";
}) {
  const dot =
    tone === "mint"
      ? "text-[rgb(var(--brand-mint))]"
      : tone === "warm"
      ? "text-orange-500"
      : "text-green-600";

  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <span
          className={`inline-flex h-8 w-8 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm ${dot}`}
        >
          <CheckCircle2 className="h-4 w-4" />
        </span>
        <div className="font-semibold text-slate-900">{title}</div>
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function MiniLine({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "mint" | "warm" | "green";
}) {
  const icon =
    tone === "mint"
      ? "text-[rgb(var(--brand-mint))]"
      : tone === "warm"
      ? "text-orange-500"
      : "text-green-600";

  return (
    <div className="flex items-start gap-2 text-slate-700">
      <CheckCircle2 className={`mt-0.5 h-4 w-4 ${icon}`} />
      <span className="font-body">{children}</span>
    </div>
  );
}

function InlinePill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-[rgb(var(--brand-mint))]" />
      <span
        className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm ${className}`}
      >
        {children}
      </span>
    </div>
  );
}

function BulletMint({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-[10px] h-2 w-2 rounded-full bg-[rgb(var(--brand-mint))]" />
      <span className="font-body text-slate-700">{children}</span>
    </li>
  );
}