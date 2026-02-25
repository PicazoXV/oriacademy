"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Clock,
  Calendar,
  Award,
  UserCircle,
  Gamepad2,
  Code2,
  Blocks,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

type FormState = {
  nombreAlumno: string;
  edad: string;
  taller: string;
  nombrePadre: string;
  telefono: string;
  email: string;
  recibirInfo: boolean;
};

export default function TalleresPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormState>({
    nombreAlumno: "",
    edad: "",
    taller: "",
    nombrePadre: "",
    telefono: "",
    email: "",
    recibirInfo: false,
  });

  const talleres = useMemo(
    () => [
      {
        id: "game-makers-junior",
        edad: "7–9 años",
        title: "Ori Game Makers Junior",
        subtitle: "Crea tu primer videojuego jugando y aprendiendo.",
        icon: Blocks,
        highlights: [
          { icon: Gamepad2, text: "Videojuegos con Scratch" },
          { icon: UserCircle, text: "Ideal para principiantes" },
          { icon: Clock, text: "5 días · 90'/día" },
          { icon: Users, text: "Grupos reducidos" },
        ],
      },
      {
        id: "programacion-creativa",
        edad: "10–12 años",
        title: "Ori Programación Creativa",
        subtitle: "Lógica, creatividad y proyectos que enganchan.",
        icon: Code2,
        highlights: [
          { icon: Sparkles, text: "Proyectos creativos" },
          { icon: UserCircle, text: "Nivel medio" },
          { icon: Clock, text: "5 días · 90'/día" },
          { icon: Users, text: "Grupos reducidos" },
        ],
      },
      {
        id: "game-makers-avanzado",
        edad: "13-16 años",
        title: "Ori Game Makers Avanzado",
        subtitle: "Más retos, más mecánicas, más nivel.",
        icon: Award,
        highlights: [
          { icon: Gamepad2, text: "Mecánicas más avanzadas" },
          { icon: ShieldCheck, text: "Para alumnos con experiencia" },
          { icon: Clock, text: "5 días · 90'/día" },
          { icon: Users, text: "Grupos reducidos" },
        ],
      },
    ],
    [],
  );

  const resetForm = () => {
    setFormData({
      nombreAlumno: "",
      edad: "",
      taller: "",
      nombrePadre: "",
      telefono: "",
      email: "",
      recibirInfo: false,
    });
    setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (
      !formData.nombreAlumno.trim() ||
      !formData.edad.trim() ||
      !formData.taller.trim() ||
      !formData.nombrePadre.trim() ||
      !formData.telefono.trim() ||
      !formData.email.trim()
    ) {
      setErrorMsg("Por favor, completa todos los campos obligatorios.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/semana-santa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMsg(data?.error || "No se pudo enviar la solicitud.");
        return;
      }

      setFormSubmitted(true);
      resetForm();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setErrorMsg("Error de red. Inténtalo de nuevo en unos segundos.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = e.target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      const { name, checked } = target;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const pickTaller = (id: string) => {
    setFormData((prev) => ({ ...prev, taller: id }));
    document.getElementById("reserva")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
<section className="relative overflow-hidden">
  {/* Fondo tipo Cursos */}
  <div className="absolute inset-0 
    bg-gradient-to-r 
    from-[rgb(var(--brand-mint))/28] 
    via-slate-100 
    to-[rgb(var(--brand-lilac))/28]" 
  />

  {/* Capa gris suave para ese efecto ligeramente frío */}
  <div className="absolute inset-0 bg-slate-200/30" />

  {/* Glow lateral mint */}
  <div className="absolute -top-40 -left-32 h-[600px] w-[600px] 
    rounded-full bg-[rgb(var(--brand-mint))/30] blur-3xl" 
  />

  {/* Glow lateral lilac */}
  <div className="absolute -bottom-48 -right-32 h-[650px] w-[650px] 
    rounded-full bg-[rgb(var(--brand-lilac))/30] blur-3xl" 
  />

  <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="text-center"
    >
      <h1 className="font-title text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
        Talleres de Programación
        <span className="block text-transparent bg-clip-text 
          bg-gradient-to-r 
          from-[rgb(var(--brand-mint))] 
          to-[rgb(var(--brand-lilac))]">
          para crear videojuegos
        </span>
      </h1>

      <p className="font-body mx-auto mt-6 max-w-3xl text-lg md:text-2xl text-slate-700">
        5 días para que aprendan creando: lógica, creatividad y un proyecto final jugable.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#reserva" className="w-full sm:w-auto">
          <Button className="btn-primary w-full sm:w-auto rounded-full px-10 py-6 text-lg shadow-lg">
            Reservar plaza
          </Button>
        </a>
        <a href="#talleres" className="w-full sm:w-auto">
          <Button className="btn-secondary w-full sm:w-auto rounded-full px-10 py-6 text-lg">
            Ver talleres
          </Button>
        </a>
      </div>
    </motion.div>
  </div>
</section>

      {/* TALLERES */}
      <section id="talleres" className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center"
          >
            <h2 className="font-title text-4xl md:text-5xl font-extrabold text-gray-900">
              Elige tu taller
            </h2>
            <p className="font-body mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              3 opciones por edades y nivel. Mismo enfoque: aprender creando.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {talleres.map((t, idx) => {
              const Icon = t.icon;
              const isSelected = formData.taller === t.id;

              return (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: idx * 0.06 }}
                >
                  <Card className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                    {/* Header */}
                    <div className="relative p-7">
                      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))/18] via-white to-[rgb(var(--brand-lilac))/18]" />
                      <div className="relative flex items-start justify-between gap-6">
                        <div>
                          <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur">
                            {t.edad}
                          </div>
                          <h3 className="font-title mt-3 text-2xl font-extrabold text-gray-900">
                            {t.title}
                          </h3>
                          <p className="font-body mt-2 text-gray-700">
                            {t.subtitle}
                          </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] text-white shadow-md">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-7 pt-0">
                      <div className="mt-4 space-y-3">
                        {t.highlights.map((h, i) => {
                          const Hi = h.icon;
                          return (
                            <div
                              key={i}
                              className="flex items-center gap-3 text-gray-700"
                            >
                              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm">
                                <Hi className="h-5 w-5 text-[rgb(var(--brand-mint))]" />
                              </span>
                              <span className="font-body">{h.text}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-8 flex flex-col gap-3">
                        <Link
  href={`/contacto?taller=${encodeURIComponent(t.id)}`}
  className="block w-full"
>
  <Button
    type="button"
    className={
      "w-full rounded-full py-6 text-lg " +
      (isSelected ? "btn-primary" : "btn-soft-lilac")
    }
  >
    {isSelected ? "Seleccionado ✓" : "Solicitar información"}
  </Button>
</Link>

                        <div className="text-center text-xs text-gray-500">
                          Te contactamos para confirmar disponibilidad
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INCLUYE */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-mint))/10] via-white to-[rgb(var(--brand-lilac))/10]" />
        <div className="absolute -top-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-[rgb(var(--brand-mint))/18] blur-3xl" />
        <div className="absolute -bottom-44 left-[-140px] h-[560px] w-[560px] rounded-full bg-[rgb(var(--brand-lilac))/18] blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="space-y-6"
            >
              <h2 className="font-title text-4xl md:text-5xl font-extrabold text-gray-900">
                Qué incluye el taller
              </h2>
              <p className="font-body text-lg text-gray-700">
                Una experiencia completa para que se inicien en el mundo de la programación mientras se divierten.
              </p>

              <div className="grid gap-4">
                <Feature
                  icon={<Users className="h-5 w-5 text-white" />}
                  title="Grupos reducidos"
                  desc="Atención cercana y ritmo adaptado."
                />
                <Feature
                  icon={<Clock className="h-5 w-5 text-white" />}
                  title="Formato intensivo"
                  desc="5 días · 90'/día."
                />
                <Feature
                  icon={<Award className="h-5 w-5 text-white" />}
                  title="Diploma incluido"
                  desc="Se llevan su logro a casa."
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
              className="space-y-6"
            >
              <Card className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
                <h3 className="font-title text-2xl font-extrabold text-gray-900">
                  ¿Qué se llevan a casa?
                </h3>

                <ul className="mt-6 space-y-4 text-gray-700">
                  <Bullet>Un proyecto final jugable creado por ellos.</Bullet>
                  <Bullet>
                    Conceptos de programación aplicados de forma práctica.
                  </Bullet>
                  <Bullet>
                    Motivación y confianza para seguir aprendiendo.
                  </Bullet>
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#reserva" className="w-full sm:w-auto">
                    <Button className="btn-primary w-full rounded-full px-8 py-6 text-lg shadow-lg">
                      Quiero reservar
                    </Button>
                  </a>
                  <a href="#talleres" className="w-full sm:w-auto">
                    <Button className="btn-secondary w-full sm:w-auto rounded-full px-10 py-6 text-lg">
            Ver opciones
          </Button>
                  </a>
                </div>
              </Card>

              <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] text-white shadow-md">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Metodología ORI
                    </p>
                    <p className="font-body text-gray-600">
                      Aprenden “haciendo”, con retos, feedback y mini-logros
                      diarios.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="reserva" className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-mint))/10] via-white to-[rgb(var(--brand-lilac))/10]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.25] [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] [background-size:28px_28px]" />

        <div className="relative mx-auto max-w-3xl px-6">
          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="rounded-3xl border border-black/10 bg-white p-10 md:p-12 shadow-xl text-center"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-lg">
                <CheckCircle2 className="h-10 w-10 text-white" />
              </div>

              <h2 className="font-title text-3xl md:text-4xl font-extrabold text-gray-900">
                ¡Solicitud enviada!
              </h2>

              <p className="font-body mt-4 text-lg text-gray-700">
                Gracias por tu interés. Te contactaremos pronto para confirmar
                disponibilidad y detalles.
              </p>

              <div className="mt-8">
                <Button
                  onClick={() => {
                    setFormSubmitted(false);
                    setErrorMsg(null);
                  }}
                  className="btn-primary rounded-full px-10 py-6 text-lg shadow-lg"
                >
                  Enviar otra solicitud
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
  initial={{ opacity: 0, y: 14 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.6, ease: EASE }}
  className="relative rounded-[32px] p-[1px] shadow-2xl"
>
  {/* Borde degradado exterior */}
  <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] opacity-70 blur-sm" />

  {/* Card interior */}
  <div className="relative rounded-[30px] bg-white/90 backdrop-blur-xl border border-white/60 p-10 md:p-14">

    <div className="text-center">
      <h2 className="font-title text-4xl md:text-5xl font-extrabold text-slate-900">
        Reserva tu plaza
      </h2>
      <p className="font-body mt-4 text-slate-600 text-lg">
        Completa el formulario y te confirmamos disponibilidad.
      </p>
    </div>

    <form onSubmit={handleSubmit} className="mt-12 space-y-8">

      {/* BLOQUE ALUMNO */}
      <div className="space-y-6">
        <h3 className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
          Datos del alumno
        </h3>

        <div className="grid gap-6 md:grid-cols-2">
          <PremiumInput
            label="Nombre del alumno *"
            id="nombreAlumno"
            name="nombreAlumno"
            value={formData.nombreAlumno}
            onChange={handleChange}
            disabled={loading}
            placeholder="Nombre y apellidos"
          />

          <PremiumSelect
            label="Edad *"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="">Selecciona edad</option>
            {Array.from({ length: 10 }, (_, i) => 7 + i).map((n) => (
              <option key={n} value={String(n)}>
                {n} años
              </option>
            ))}
          </PremiumSelect>
        </div>

        <PremiumSelect
          label="Taller de interés *"
          id="taller"
          name="taller"
          value={formData.taller}
          onChange={handleChange}
          disabled={loading}
        >
          <option value="">Selecciona un taller</option>
          <option value="game-makers-junior">
            Ori Game Makers Junior (7–9 años)
          </option>
          <option value="programacion-creativa">
            Ori Programación Creativa (10–12 años)
          </option>
          <option value="game-makers-avanzado">
            Ori Game Makers Avanzado (13-16 años)
          </option>
        </PremiumSelect>
      </div>

      {/* DIVISOR */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      {/* BLOQUE CONTACTO */}
      <div className="space-y-6">
        <h3 className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
          Datos de contacto
        </h3>

        <PremiumInput
          label="Nombre del padre/madre/tutor *"
          id="nombrePadre"
          name="nombrePadre"
          value={formData.nombrePadre}
          onChange={handleChange}
          disabled={loading}
          placeholder="Nombre completo"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <PremiumInput
            label="Teléfono *"
            id="telefono"
            name="telefono"
            type="tel"
            value={formData.telefono}
            onChange={handleChange}
            disabled={loading}
            placeholder="+34..."
          />

          <PremiumInput
            label="Email *"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            placeholder="tu@email.com"
          />
        </div>
      </div>

      {/* CHECKBOX */}
      <div className="flex items-start gap-3 rounded-2xl bg-slate-50 px-6 py-4 border border-slate-200">
        <input
          id="recibirInfo"
          name="recibirInfo"
          type="checkbox"
          checked={formData.recibirInfo}
          onChange={handleChange}
          disabled={loading}
          className="mt-1 h-5 w-5 rounded accent-[rgb(var(--brand-mint))]"
        />
        <label htmlFor="recibirInfo" className="text-sm text-slate-600">
          Quiero recibir información de los cursos anuales
        </label>
      </div>

      {errorMsg && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="btn-primary w-full py-6 text-lg shadow-xl"
      >
        {loading ? "Enviando..." : "Solicitar plaza"}
      </Button>

      <p className="text-center text-sm text-slate-500">
        Te contactaremos para confirmar disponibilidad · Sin compromiso
      </p>
    </form>
  </div>
</motion.div>
          )}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.9)_1px,transparent_0)] [background-size:26px_26px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-title text-2xl md:text-3xl font-extrabold"
          >
            Las vacaciones también pueden ser una oportunidad para aprender algo
            que les motive.
          </motion.p>

          <div className="mt-10">
            <a href="#reserva">
              <Button className="rounded-full px-12 py-6 text-lg shadow-lg bg-white text-gray-900 hover:bg-white/90">
                Reservar plaza ahora
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- UI bits ---------- */

function Pill({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-gray-800 shadow-sm backdrop-blur">
      <span className="text-[rgb(var(--brand-mint))]">{icon}</span>
      <span className="font-semibold">{children}</span>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-md">
        {icon}
      </div>
      <div>
        <p className="font-title font-extrabold text-gray-900">{title}</p>
        <p className="font-body text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-[rgb(var(--brand-mint))]" />
      <span className="font-body">{children}</span>
    </li>
  );
}

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-semibold text-gray-900">
      {children}
    </label>
  );
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={
        "mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-gray-900 shadow-sm " +
        "placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-mint))] " +
        (props.className ?? "")
      }
    />
  );
}

function SelectInput(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={
        "mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-gray-900 shadow-sm " +
        "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-mint))] " +
        (props.className ?? "")
      }
    />
  );
}
function PremiumInput({ label, ...props }: any) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        {...props}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-4 py-3 shadow-sm
        focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-mint))]
        transition"
      />
    </div>
  );
}

function PremiumSelect({ label, children, ...props }: any) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-700">
        {label}
      </label>
      <select
        {...props}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-4 py-3 shadow-sm
        focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-mint))]
        transition"
      >
        {children}
      </select>
    </div>
  );
}