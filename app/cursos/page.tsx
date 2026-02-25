"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Users, Calendar, Trophy, Award, Sparkles } from "lucide-react";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { courses } from "@/lib/data/courses";

const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

const progression = [
  { name: "Fundamentos", subtitle: "Scratch", color: "bg-orange-400", emoji: "🎨", level: "7-9" },
  { name: "Creativo", subtitle: "Minecraft", color: "bg-green-500", emoji: "🎮", level: "7-11" },
  { name: "Roblox", subtitle: "Lua", color: "bg-red-500", emoji: "🕹️", level: "10-14" },
  { name: "Unity", subtitle: "C#", color: "bg-slate-700", emoji: "🚀", level: "12-17" },
  { name: "Web", subtitle: "JS", color: "bg-blue-500", emoji: "💻", level: "13-17" },
  { name: "IA", subtitle: "Python", color: "bg-[rgb(var(--brand-mint))]", emoji: "🤖", level: "14-17" },
];

export default function CursosPage() {
  const [selectedAge, setSelectedAge] = useState<string>("all");

  const filtered = useMemo(() => {
    if (selectedAge === "all") return courses;
    if (selectedAge === "7-9") return courses.filter((c) => c.ages.includes("7-9"));
    if (selectedAge === "10-12") return courses.filter((c) => c.ages.includes("10-14") || c.ages.includes("10-12"));
    if (selectedAge === "13-16")
      return courses.filter((c) => c.ages.includes("12-17") || c.ages.includes("13-17") || c.ages.includes("14-17"));
    return courses;
  }, [selectedAge]);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 bg-gradient-to-br from-[rgb(var(--brand-mint)/0.14)] via-white to-[rgb(var(--brand-lilac)/0.12)]">
        {/* Ambient blobs + subtle grid */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-44 -left-44 h-[560px] w-[560px] rounded-full bg-[rgb(var(--brand-mint))] opacity-12 blur-3xl" />
          <div className="absolute -bottom-48 -right-48 h-[620px] w-[620px] rounded-full bg-[rgb(var(--brand-lilac))] opacity-12 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(15,23,42,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.12) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* LEFT */}
            <div className="space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-sm font-extrabold shadow-sm backdrop-blur"
              >
                <Sparkles size={16} className="text-[rgb(var(--brand-lilac))]" />
                Cursos 2026 · 90 min/semana
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
                className="font-title text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.02]"
              >
                Todos Nuestros <br />
                <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,rgb(var(--brand-mint)),rgb(var(--brand-lilac)))]">
                  Cursos
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
                className="text-xl font-semibold text-slate-700 leading-relaxed"
              >
                Programación y desarrollo de software para niños y adolescentes de 7 a 16 años.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.18 }}
                className="text-base font-semibold text-slate-600 leading-relaxed max-w-xl"
              >
                Avanzan por niveles: desde entornos visuales hasta código real, creando proyectos que pueden enseñar y compartir.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.22 }}
                className="flex flex-wrap gap-4 pt-1"
              >
                <Link href="/horarios" className="btn-primary">
                  Ver Horarios
                </Link>
                <Link href="/solicitar-plaza" className="btn-secondary">
                  Solicitar plaza
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.28 }}
                className="flex flex-wrap gap-3 pt-4"
              >
                {["Scratch", "Minecraft", "Roblox", "Unity"].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-black/5 bg-white/80 px-5 py-3 text-sm font-extrabold text-slate-900 shadow-sm backdrop-blur"
                  >
                    {t}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.12 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-[linear-gradient(135deg,rgb(var(--brand-mint)/0.28),rgb(var(--brand-lilac)/0.22))] blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1758685733664-4cde7bbe4713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Estudiantes aprendiendo programación"
                  width={1080}
                  height={720}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AGE SELECTOR */}
      <section className="sticky top-16 z-40 border-b border-black/10 bg-white/85 px-6 py-10 backdrop-blur">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              onClick={() => setSelectedAge("all")}
              className={selectedAge === "all" ? "btn-primary" : "btn-soft-lilac"}
            >
              Todos los Cursos
            </Button>

            <Button
              onClick={() => setSelectedAge("7-9")}
              className={selectedAge === "7-9" ? "btn-primary" : "btn-soft-mint"}
            >
              7-9 años
            </Button>

            <Button
              onClick={() => setSelectedAge("10-12")}
              className={selectedAge === "10-12" ? "btn-primary" : "btn-soft-lilac"}
            >
              10-12 años
            </Button>

            <Button
              onClick={() => setSelectedAge("13-16")}
              className={selectedAge === "13-16" ? "btn-primary" : "btn-soft-mint"}
            >
              13-16 años
            </Button>
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-title text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Encuentra tu Curso Perfecto
            </h2>
            <p className="mt-3 text-lg font-semibold text-slate-600">
              Desde principiantes hasta avanzados
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: EASE, delay: idx * 0.05 }}
                viewport={{ once: true, margin: "-60px" }}
              >
                <Card className="group overflow-hidden border border-black/5 bg-white transition-all hover:-translate-y-1 hover:shadow-2xl">
                  {/* Top gradient */}
                  <div className={`relative bg-gradient-to-r ${course.gradient} p-6 text-white`}>
                    <div className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-extrabold backdrop-blur-sm">
                      Curso anual · 90 min/semana
                    </div>

                    <div className="flex items-start justify-between pt-6">
                      <div className="flex-1">
                        <div className="mb-1 text-sm font-extrabold opacity-95">{course.subtitle}</div>
                        <h3 className="mb-2 text-xl font-extrabold">{course.title}</h3>
                        <p className="text-sm font-semibold opacity-95">{course.description}</p>
                      </div>
                      <div className="ml-4 text-4xl">{course.emoji}</div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="space-y-6 p-6">
                    <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-slate-700">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-[rgb(var(--brand-mint))]" />
                        <span>{course.ages}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy size={16} className="text-[rgb(var(--brand-lilac))]" />
                        <span>{course.level}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-[rgb(var(--brand-mint))]" />
                        <span>{course.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-[rgb(var(--brand-lilac))]" />
                        <span>{course.duration.split(" ")[0]} sesiones</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 text-sm font-extrabold text-slate-900">Qué aprenderá:</h4>
                      <div className="space-y-2">
                        {course.features.map((feature: string, i: number) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[rgb(var(--brand-mint))]" />
                            <span className="text-sm font-semibold text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-black/5 bg-[rgb(var(--brand-mint)/0.10)] p-3">
                      <Award size={18} className="text-[rgb(var(--brand-mint))]" />
                      <span className="text-sm font-extrabold text-slate-800">Proyecto final certificado</span>
                    </div>

                    <div className="space-y-2 pt-1">
                      <Link href={`/curso/${course.id}`} className="btn-primary w-full">
                        Ver Temario Completo
                      </Link>
                      <Link href="/solicitar-plaza" className="btn-secondary w-full">
                        Solicitar Plaza
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PATH */}
      <section className="relative overflow-hidden px-6 py-24 bg-[rgb(var(--brand-mint)/0.08)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-40 left-[-140px] h-[560px] w-[560px] rounded-full bg-[rgb(var(--brand-lilac))] opacity-10 blur-3xl" />
          <div className="absolute -bottom-52 right-[-180px] h-[680px] w-[680px] rounded-full bg-[rgb(var(--brand-mint))] opacity-10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-title text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Tu Camino de Aprendizaje
            </h2>
            <p className="mt-3 text-lg font-semibold text-slate-600">
              Progresa de principiante a experto
            </p>
          </div>

          <div className="mb-12 flex flex-wrap justify-center gap-6">
            {progression.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-60px" }}
                className="relative"
              >
                <Card className="w-[175px] bg-white/85 p-6 text-center backdrop-blur transition-all hover:-translate-y-1 hover:shadow-lg border border-black/5">
                  <div
                    className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl ${step.color} text-3xl shadow-lg`}
                  >
                    {step.emoji}
                  </div>
                  <h4 className="mb-1 text-sm font-extrabold text-slate-900">{step.name}</h4>
                  <p className="mb-1 text-xs font-semibold text-slate-600">{step.subtitle}</p>
                  <p className="text-xs font-extrabold text-[rgb(var(--brand-lilac))]">{step.level} años</p>
                </Card>

                {index < progression.length - 1 && (
                  <div
                    className="absolute top-1/2 hidden -translate-y-1/2 translate-x-full text-slate-400 lg:block"
                    style={{ right: "-0.75rem" }}
                  >
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="space-y-6 text-center">
            <p className="mx-auto max-w-2xl text-lg font-semibold text-slate-700">
              Cada curso está diseñado para construir sobre las habilidades anteriores, asegurando un progreso continuo y significativo.
            </p>

            <Link href="/solicitar-plaza" className="btn-primary px-10 py-4">
              Solicitar Clase de Prueba Gratuita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}