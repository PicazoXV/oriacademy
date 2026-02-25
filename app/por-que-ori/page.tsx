"use client";

// src/app/por-que-ori/page.tsx
import grupo from "@/public/grupo.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Sparkles, Trophy, Users, Heart, Zap, Target } from "lucide-react";

const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

const benefits = [
  {
    id: 1,
    icon: Sparkles,
    color: "from-yellow-400 to-orange-500",
    title: "Aprendizaje Creativo",
    description:
      "Los estudiantes aprenden creando sus propios proyectos, juegos y aplicaciones desde el primer día.",
  },
  {
    id: 2,
    icon: Users,
    color: "from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-mint))/85]",
    title: "Clases Reducidas",
    description:
      "Grupos pequeños de 8-12 estudiantes para atención personalizada y mejor aprendizaje.",
  },
  {
    id: 3,
    icon: Trophy,
    color: "from-[rgb(var(--brand-mint))/90] to-[rgb(var(--brand-lilac))/85]",
    title: "Certificación",
    description:
      "Certificados al completar cada curso y portfolio de proyectos realizados.",
  },
  {
    id: 4,
    icon: Heart,
    color: "from-red-400 to-pink-500",
    title: "Pasión por Enseñar",
    description:
      "Instructores apasionados con experiencia real en desarrollo de videojuegos y software.",
  },
  {
    id: 5,
    icon: Zap,
    color: "from-green-400 to-emerald-500",
    title: "Metodología Práctica",
    description:
      "Aprender haciendo con proyectos reales y retos que mantienen el interés y la motivación.",
  },
  {
    id: 6,
    icon: Target,
    color: "from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]",
    title: "Futuro Profesional",
    description:
      "Preparamos a los estudiantes para carreras en tecnología, programación y diseño de videojuegos.",
  },
];

const testimonials = [
  {
    name: "Elisabeth",
    role: "Madre de estudiante",
    text: "Nos ha encantado la experiencia, mi hijo se lo ha pasado en grande en los cursos y Dani el pofesor, era super atento, tenía una paciencia infinita, sin duda repetiria solo por la buena labor que ha hecho con mi hijo.",
  },
  {
    name: "Carlos Martínez",
    role: "Estudiante de 14 años",
    text: "Las clases son súper divertidas y los profesores explican todo de manera muy clara. Ya he creado 3 juegos y los he compartido con mis amigos.",
  },
  {
    name: "Laura Pérez",
    role: "Madre de estudiante",
    text: "La mejor inversión en la educación de mi hija. Ha desarrollado habilidades de lógica, creatividad y resolución de problemas.",
  },
];

export default function PorQueOriPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO premium */}
      <section className="relative overflow-hidden">
        {/* Fondo tipo Cursos (mint → gris → lilac) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))/26] via-slate-100 to-[rgb(var(--brand-lilac))/26]" />
        <div className="absolute inset-0 bg-slate-200/25" />

        {/* glows */}
        <div className="absolute -top-44 -left-44 h-[680px] w-[680px] rounded-full bg-[rgb(var(--brand-mint))/24] blur-3xl" />
        <div className="absolute -bottom-56 -right-52 h-[760px] w-[760px] rounded-full bg-[rgb(var(--brand-lilac))/24] blur-3xl" />

        {/* grid sutil */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[rgb(var(--ink))/80] shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-[rgb(var(--brand-mint))]" />
                <span>Metodología práctica</span>
                <span className="opacity-40">·</span>
                <span>Proyectos reales</span>
              </div>

              <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900">
                ¿Por qué elegir
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]">
                  ORI Academy?
                </span>
              </h1>

              <p className="font-body text-xl text-slate-700">
                Somos más que una escuela de programación.
                <br />
                Somos una comunidad que inspira a crear.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contacto">
                  <Button className="btn-primary rounded-full px-8 py-6 text-lg">
                    Agenda una visita
                  </Button>
                </Link>
                <a href="#instalaciones">
                  <Button className="btn-secondary rounded-full px-8 py-6 text-lg">
                    Ver instalaciones
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.06 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-[rgb(var(--brand-mint))/18] to-[rgb(var(--brand-lilac))/18] blur-2xl" />
              <img
                src={grupo.src}
                alt="Estudiantes trabajando en equipo"
                className="relative w-full h-auto rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center mb-16"
          >
            <h2 className="font-title text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Lo que nos hace diferentes
            </h2>
            <p className="font-body text-xl text-slate-600">
              Una experiencia educativa única y transformadora
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
                >
                  <Card className="relative overflow-hidden p-8 rounded-3xl bg-white border border-black/10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] via-transparent to-black/[0.02]" />
                    <div className="relative">
                      <div className="mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg`}
                        >
                          <Icon size={32} className="text-white" strokeWidth={2} />
                        </div>
                      </div>

                      <h3 className="font-title text-2xl font-extrabold text-slate-900 mb-3">
                        {benefit.title}
                      </h3>

                      <p className="font-body text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* (ELIMINADO) Nuestro Equipo */}

      {/* INSTALACIONES */}
      <section id="instalaciones" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center mb-16"
          >
            <h2 className="font-title text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Nuestras instalaciones
            </h2>
            <p className="font-body text-xl text-slate-600">
              Aulas equipadas con la mejor tecnología
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1741529189646-056bf8ea92cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Aula moderna con computadoras"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1662686439618-12cfd337c067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Profesor ayudando a estudiante"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center mb-16"
          >
            <h2 className="font-title text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Lo que dicen nuestras familias
            </h2>
            <p className="font-body text-xl text-slate-600">
              Testimonios reales de padres y estudiantes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: EASE, delay: index * 0.05 }}
              >
                <Card className="p-8 rounded-3xl bg-white border border-black/10 shadow-sm hover:shadow-xl transition-shadow">
                  <div className="mb-6">
                    <svg
                      className="w-12 h-12 text-[rgb(var(--brand-mint))] opacity-40"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <p className="font-body text-slate-700 mb-6 italic leading-relaxed">
                    "{t.text}"
                  </p>

                  <div>
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-600">{t.role}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-title text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            ¿Listo para unirte a ORI Academy?
          </h2>

          <p className="font-body text-xl text-slate-600 mb-10">
            Agenda una clase de prueba y descubre por qué somos la mejor opción.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/solicitar-plaza">
              <Button className="btn-primary rounded-full px-10 py-7 text-lg shadow-lg">
                Solicitar plaza
              </Button>
            </Link>

            <Link href="/contacto">
              <Button className="btn-secondary rounded-full px-10 py-7 text-lg shadow-lg">
                Hablar con nosotros
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}