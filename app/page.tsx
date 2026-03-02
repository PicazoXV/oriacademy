"use client";
import niña from "@/public/niña.png";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  TrendingUp,
  Quote,
  Star,
  Sparkles,
  Gamepad2,
  Code2,
} from "lucide-react";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 bg-gradient-to-br from-[rgb(var(--brand-mint)/0.14)] via-white to-[rgb(var(--brand-lilac)/0.12)]">
        {/* Ambient background */}
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
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-sm font-extrabold shadow-sm backdrop-blur"
              >
                <Sparkles size={16} className="text-[rgb(var(--brand-lilac))]" />
                Academia creativa · 7–16 años
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
                className="font-title text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.02]"
              >
                Programación y <br />
                <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,rgb(var(--brand-mint)),rgb(var(--brand-lilac)))]">
                  desarrollo de videojuegos
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
                className="text-xl font-semibold text-slate-700 leading-relaxed"
              >
                Para niños y adolescentes de 7 a 16 años. <br />
                Aprende Scratch, Minecraft, Roblox y Unity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.18 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/cursos" className="btn-primary">
                  Ver Cursos
                </Link>

                <Link href="/solicitar-plaza" className="btn-secondary">
                  Solicitar Plaza
                </Link>
              </motion.div>

              {/* Tech pills */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.24 }}
                className="flex flex-wrap items-center gap-3 pt-4"
              >
                {[
                  { label: "Scratch", icon: <Code2 size={16} /> },
                  { label: "Unity", icon: <Gamepad2 size={16} /> },
                  { label: "Roblox", icon: <Sparkles size={16} /> },
                ].map((t) => (
                  <div
                    key={t.label}
                    className="inline-flex items-center gap-2 rounded-2xl border border-black/5 bg-white/80 px-5 py-3 text-sm font-extrabold text-slate-900 shadow-sm backdrop-blur"
                  >
                    <span className="text-[rgb(var(--brand-mint))]">{t.icon}</span>
                    {t.label}
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
                  src={niña}
                  alt="Niño programando videojuegos"
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

      {/* STATS */}
      <section className="px-6 py-14 bg-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-6 rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur md:grid-cols-3"
          >
            {[
              { kpi: "8–12", label: "Alumnos por clase", hint: "Atención real" },
              { kpi: "90 min", label: "Sesión semanal", hint: "Progreso constante" },
              { kpi: "Proyectos", label: "Desde el día 1", hint: "Aprender haciendo" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-slate-900">{s.kpi}</div>
                <div className="mt-1 text-sm font-extrabold text-slate-700">{s.label}</div>
                <div className="mt-1 text-xs font-semibold text-slate-500">{s.hint}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-24 px-6 bg-[rgb(var(--brand-mint)/0.08)]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-title text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Por qué ORI Academy
          </h2>
          <p className="text-lg font-semibold text-slate-600">
            Lo que nos hace diferentes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: Users,
              title: "Grupos Reducidos",
              text: "8–12 alumnos por clase para atención personalizada.",
            },
            {
              icon: BookOpen,
              title: "Proyectos Reales",
              text: "Crean videojuegos desde el primer día. Aprender haciendo.",
            },
            {
              icon: TrendingUp,
              title: "Progreso Anual",
              text: "Seguimiento continuo y certificación al finalizar.",
            },
          ].map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: idx * 0.06 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <Card className="p-8 bg-white hover:shadow-xl transition border border-black/5">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[linear-gradient(135deg,rgb(var(--brand-mint)),rgb(var(--brand-lilac)))] flex items-center justify-center shadow-lg">
                    <b.icon size={28} className="text-white" />
                  </div>
                </div>
                <h3 className="font-title text-2xl font-extrabold text-slate-900 mb-3">
                  {b.title}
                </h3>
                <p className="text-slate-600 font-semibold leading-relaxed">{b.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden px-6 py-24 bg-[linear-gradient(90deg,rgb(var(--brand-mint)),rgb(var(--brand-lilac)))]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-[-140px] h-[520px] w-[520px] rounded-full bg-white opacity-10 blur-3xl" />
          <div className="absolute -bottom-56 right-[-180px] h-[640px] w-[640px] rounded-full bg-black opacity-10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center text-white">
          <h2 className="font-title text-4xl md:text-5xl font-extrabold mb-6">
            Solicita tu Clase de Prueba
          </h2>
          <p className="text-xl font-semibold mb-10 opacity-95">
            Gratis y sin compromiso. Descubre por qué tantas familias confían en ORI.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto">
              <Button className="rounded-full px-10 py-6 text-lg font-extrabold shadow-lg bg-white text-slate-900 hover:bg-slate-100">
                Clase Gratuita
              </Button>
            </Link>
            <Link href="/cursos">
              <Button className="rounded-full px-10 py-6 text-lg font-extrabold shadow-lg border-2 border-white text-white bg-white/10 hover:bg-white/15">
                Ver cursos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}