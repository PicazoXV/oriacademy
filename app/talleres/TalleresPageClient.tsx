"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Gamepad2,
  Code2,
  CheckCircle2,
  Sparkles,
  Sun,
  Calendar,
  Zap,
  Lightbulb,
  Rocket,
  Brain,
  Target,
  Tent,
  Star,
} from "lucide-react";

import { Button } from "@/components/Button";
import { isValidEmail, isValidPhone } from "@/lib/validation";

const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

type FormState = {
  nombreAlumno: string;
  edad: string;
  taller: string;
  hazloCampamento: boolean;
  nombrePadre: string;
  telefono: string;
  email: string;
  semanasInteres: string[];
  recibirInfo: boolean;
};

const SEMANAS = [
  { value: "semana-1", label: "Semana 1", dates: "22–26 junio" },
  { value: "semana-2", label: "Semana 2", dates: "29 jun – 3 jul" },
  { value: "semana-3", label: "Semana 3", dates: "7–11 julio" },
  { value: "semana-4", label: "Semana 4", dates: "14–17 julio" },
];

export default function TalleresPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormState>({
    nombreAlumno: "",
    edad: "",
    taller: "",
    hazloCampamento: false,
    nombrePadre: "",
    telefono: "",
    email: "",
    semanasInteres: [],
    recibirInfo: false,
  });

  const bloqueVerano = useMemo(
    () => [
      {
        id: "verano-junior",
        edad: "7 a 9 años",
        title: "Introducción a la programación",
        desc: "Los alumnos aprenderán los fundamentos de la programación creando sus primeros videojuegos y proyectos interactivos.",
        tools: ["Scratch", "Minecraft Education"],
        icon: Star,
        color: "from-emerald-400 to-[rgb(var(--brand-mint))]",
        bg: "from-emerald-50 to-teal-50",
        toolColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
      },
      {
        id: "verano-medio",
        edad: "10 a 12 años",
        title: "Diseño de videojuegos",
        desc: "Creación de videojuegos y mundos interactivos utilizando herramientas profesionales adaptadas a su edad.",
        tools: ["Minecraft Education", "Roblox Studio"],
        icon: Gamepad2,
        color: "from-violet-500 to-[rgb(var(--brand-lilac))]",
        bg: "from-violet-50 to-purple-50",
        toolColor: "bg-violet-100 text-violet-700 border-violet-200",
      },
      {
        id: "verano-avanzado",
        edad: "13 a 16 años",
        title: "Programación avanzada",
        desc: "Retos avanzados de programación y desarrollo de proyectos tecnológicos más complejos.",
        tools: ["Python", "C#"],
        icon: Code2,
        color: "from-orange-400 to-rose-500",
        bg: "from-orange-50 to-rose-50",
        toolColor: "bg-orange-100 text-orange-700 border-orange-200",
      },
    ],
    [],
  );

  const beneficios = [
    { icon: Gamepad2, label: "Crear videojuegos propios" },
    { icon: Code2, label: "Aprender programación" },
    { icon: Lightbulb, label: "Desarrollar creatividad" },
    { icon: Brain, label: "Pensamiento lógico" },
    { icon: Users, label: "Trabajo en equipo" },
    { icon: Rocket, label: "Tecnología aplicada" },
  ];

  const resetForm = () => {
    setFormData({
      nombreAlumno: "",
      edad: "",
      taller: "",
      hazloCampamento: false,
      nombrePadre: "",
      telefono: "",
      email: "",
      semanasInteres: [],
      recibirInfo: false,
    });
    setErrorMsg(null);
  };

  const toggleSemana = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      semanasInteres: prev.semanasInteres.includes(value)
        ? prev.semanasInteres.filter((s) => s !== value)
        : [...prev.semanasInteres, value],
    }));
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

    if (!isValidEmail(formData.email)) {
      setErrorMsg("Introduce un email válido.");
      return;
    }

    if (!isValidPhone(formData.telefono)) {
      setErrorMsg("Introduce un teléfono válido.");
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

  return (
    <div className="min-h-screen bg-white">

      {/* ═══════════════════════════════════════════
          VERANO 2026 — HERO BANNER
      ═══════════════════════════════════════════ */}
      <section id="verano" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d1a]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgb(71_215_172/1)_1px,transparent_1px),linear-gradient(90deg,rgb(71_215_172/1)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[rgb(var(--brand-mint))/20] blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-[rgb(var(--brand-lilac))/25] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <motion.span
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-rose-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-orange-500/30"
              >
                <Zap className="h-4 w-4" />
                Plazas limitadas
              </motion.span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--brand-mint))/40] bg-[rgb(var(--brand-mint))/15] px-4 py-2 text-sm font-semibold text-[rgb(var(--brand-mint))]">
                <Calendar className="h-4 w-4" />
                Del 22 de junio al 17 de julio
              </span>
            </div>

            <h1 className="font-title text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
              Talleres de
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--brand-mint))] via-cyan-300 to-[rgb(var(--brand-lilac))]">
                Verano
              </span>
              <span className="ml-4 text-white/30">2026</span>
            </h1>

            <p className="font-body mx-auto mt-6 max-w-2xl text-xl text-white/75">
              Aprende programación creando videojuegos este verano
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {[
                { label: "Scratch", color: "bg-orange-500/20 border-orange-500/40 text-orange-300" },
                { label: "Minecraft Education", color: "bg-emerald-500/20 border-emerald-500/40 text-emerald-300" },
                { label: "Roblox Studio", color: "bg-blue-500/20 border-blue-500/40 text-blue-300" },
                { label: "Python", color: "bg-yellow-500/20 border-yellow-500/40 text-yellow-300" },
                { label: "C#", color: "bg-violet-500/20 border-violet-500/40 text-violet-300" },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${color}`}
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#verano-reserva"
                className="btn-primary btn-cta w-full sm:w-auto rounded-full shadow-xl shadow-[rgb(var(--brand-mint))/30]"
              >
                Reservar plaza
              </a>
              <a
                href="#verano-bloques"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/20 w-full sm:w-auto"
              >
                Ver talleres
              </a>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-5 py-2.5 text-sm text-white/60">
              <Sun className="h-4 w-4 text-yellow-400" />
              Mañanas de verano llenas de tecnología, creatividad y diversión
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOQUES POR EDADES — VERANO 2026
      ═══════════════════════════════════════════ */}
      <section id="verano-bloques" className="relative py-20 md:py-28 scroll-mt-24 bg-[rgb(var(--brand-mint)/0.08)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-44 hidden h-[500px] w-[500px] rounded-full bg-[rgb(var(--brand-mint))] opacity-[0.10] blur-3xl md:block" />
          <div className="absolute -bottom-40 -right-44 hidden h-[500px] w-[500px] rounded-full bg-[rgb(var(--brand-lilac))] opacity-[0.10] blur-3xl md:block" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm mb-6">
              <Sun className="h-4 w-4 text-yellow-500" />
              Talleres de Verano 2026
            </span>
            <h2 className="font-title text-4xl md:text-5xl font-extrabold text-gray-900">
              Elige tu nivel de verano
            </h2>
            <p className="font-body mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Tres bloques por edad y nivel, cada uno con herramientas profesionales adaptadas.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {bloqueVerano.map((bloque, idx) => {
              const Icon = bloque.icon;
              return (
                <motion.div
                  key={bloque.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className={`relative h-full flex flex-col rounded-3xl border border-black/8 bg-gradient-to-b ${bloque.bg} overflow-hidden shadow-sm hover:shadow-xl transition-shadow`}>
                    <div className={`relative h-2 bg-gradient-to-r ${bloque.color}`} />

                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <span className="inline-flex items-center rounded-full bg-white border border-black/10 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm">
                          {bloque.edad}
                        </span>
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${bloque.color} text-white shadow-md`}>
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      <h3 className="font-title text-2xl font-extrabold text-gray-900 mt-4">
                        {bloque.title}
                      </h3>

                      <p className="font-body mt-3 text-gray-600 text-sm leading-relaxed">
                        {bloque.desc}
                      </p>

                      <div className="mt-5">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                          Herramientas
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {bloque.tools.map((tool) => (
                            <span
                              key={tool}
                              className={`rounded-lg border px-3 py-1 text-xs font-bold ${bloque.toolColor}`}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto pt-6">
                        <a
                          href="#verano-reserva"
                          className={`block w-full rounded-full bg-gradient-to-r ${bloque.color} py-3 text-center text-sm font-bold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all`}
                        >
                          Reservar plaza
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CAMPAMENTO
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d1a] via-[#131326] to-[#0d0d1a]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgb(71_215_172/1)_1px,transparent_1px),linear-gradient(90deg,rgb(71_215_172/1)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute top-0 left-1/4 h-64 w-96 rounded-full bg-[rgb(var(--brand-mint))/15] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-96 rounded-full bg-[rgb(var(--brand-lilac))/15] blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]" />

              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-[1fr_auto] gap-8 md:items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--brand-mint))/40] bg-[rgb(var(--brand-mint))/10] px-4 py-2 text-sm font-bold text-[rgb(var(--brand-mint))] mb-6">
                      <Tent className="h-4 w-4" />
                      Modalidad especial
                    </div>

                    <h2 className="font-title text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                      HAZLO{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--brand-mint))] to-cyan-300">
                        CAMPAMENTO
                      </span>
                    </h2>

                    <p className="font-body mt-4 text-lg text-white/70 max-w-xl">
                      Los alumnos también podrán asistir en formato campamento durante toda la mañana.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {[
                        { icon: Gamepad2, text: "Videojuegos" },
                        { icon: Code2, text: "Programación" },
                        { icon: Target, text: "Retos" },
                        { icon: Users, text: "Trabajo en equipo" },
                        { icon: Sparkles, text: "Creatividad" },
                      ].map(({ icon: I, text }) => (
                        <span
                          key={text}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-sm text-white/80"
                        >
                          <I className="h-3.5 w-3.5 text-[rgb(var(--brand-mint))]" />
                          {text}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8">
                      <a href="#verano-reserva" className="btn-primary btn-cta rounded-full shadow-xl shadow-[rgb(var(--brand-mint))/25]">
                        Reservar modalidad campamento
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="relative rounded-3xl border border-white/15 bg-white/8 p-8 text-center min-w-[180px]">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[rgb(var(--brand-mint))/10] to-[rgb(var(--brand-lilac))/10]" />
                      <div className="relative">
                        <Sun className="mx-auto h-10 w-10 text-yellow-400 mb-3" />
                        <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Horario</p>
                        <p className="font-title text-3xl font-extrabold text-white">9:30</p>
                        <p className="text-white/40 text-lg font-bold">—</p>
                        <p className="font-title text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[rgb(var(--brand-mint))] to-cyan-300">13:00</p>
                        <p className="mt-3 text-xs text-white/50 font-semibold">Toda la mañana</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BENEFICIOS
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 md:py-24 bg-[rgb(var(--brand-lilac)/0.07)] overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-40 left-[-140px] hidden h-[560px] w-[560px] rounded-full bg-[rgb(var(--brand-lilac))] opacity-10 blur-3xl md:block" />
          <div className="absolute -bottom-52 right-[-180px] hidden h-[680px] w-[680px] rounded-full bg-[rgb(var(--brand-mint))] opacity-10 blur-3xl md:block" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center mb-14"
          >
            <h2 className="font-title text-4xl md:text-5xl font-extrabold text-gray-900">
              Lo que se llevan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]">
                este verano
              </span>
            </h2>
            <p className="font-body mx-auto mt-4 max-w-xl text-lg text-gray-600">
              Más que programación: habilidades para toda la vida.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {beneficios.map(({ icon: Icon, label }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: EASE, delay: idx * 0.07 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-4 rounded-3xl border border-black/8 bg-white p-7 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-md">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <p className="font-title font-extrabold text-gray-900 text-sm leading-tight">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRECIOS
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-44 hidden h-[500px] w-[500px] rounded-full bg-[rgb(var(--brand-mint))] opacity-[0.10] blur-3xl md:block" />
          <div className="absolute -bottom-40 -right-44 hidden h-[500px] w-[500px] rounded-full bg-[rgb(var(--brand-lilac))] opacity-[0.10] blur-3xl md:block" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="relative mx-auto max-w-3xl rounded-3xl p-[2px] shadow-2xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] opacity-60" />

              <div className="relative rounded-[22px] bg-white p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[rgb(var(--brand-mint))] mb-2">
                      Talleres de Verano 2026
                    </p>
                    <h2 className="font-title text-4xl md:text-5xl font-extrabold text-gray-900">
                      Precios{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]">
                        desde 60€
                      </span>
                    </h2>
                    <p className="font-body mt-3 text-gray-600 max-w-sm">
                      Formato intensivo de 5 días. Grupos reducidos. Diploma incluido.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {["Grupos reducidos", "Diploma incluido", "Material incluido"].map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5 text-sm text-slate-700 font-semibold"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[rgb(var(--brand-mint))]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4 shrink-0">
                    <div className="text-center">
                      <p className="text-sm text-gray-500 font-semibold">Desde solo</p>
                      <p className="font-title text-6xl font-extrabold text-gray-900">60€</p>
                      <p className="text-sm text-gray-500">/ semana</p>
                    </div>
                    <a href="#verano-reserva" className="btn-primary btn-cta rounded-full shadow-lg w-full text-center">
                      Reservar plaza
                    </a>
                    <p className="text-xs text-gray-500 text-center">Sin compromiso · Plazas limitadas</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FORMULARIO DE RESERVA
      ═══════════════════════════════════════════ */}
      <section id="verano-reserva" className="relative overflow-hidden py-16 md:py-24 scroll-mt-24 bg-[rgb(var(--brand-mint)/0.08)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-44 -left-44 hidden h-[560px] w-[560px] rounded-full bg-[rgb(var(--brand-mint))] opacity-[0.12] blur-3xl md:block" />
          <div className="absolute -bottom-48 -right-48 hidden h-[620px] w-[620px] rounded-full bg-[rgb(var(--brand-lilac))] opacity-[0.12] blur-3xl md:block" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(15,23,42,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.12) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-3xl px-6">
          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              role="status"
              aria-live="polite"
              className="rounded-3xl border border-black/10 bg-white p-10 md:p-12 shadow-xl text-center"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-lg">
                <CheckCircle2 className="h-10 w-10 text-white" />
              </div>
              <h2 className="font-title text-3xl md:text-4xl font-extrabold text-gray-900">
                ¡Solicitud enviada!
              </h2>
              <p className="font-body mt-4 text-lg text-gray-700">
                Gracias por tu interés. Te contactaremos pronto para confirmar disponibilidad y detalles.
              </p>
              <div className="mt-8">
                <Button
                  onClick={() => {
                    setFormSubmitted(false);
                    setErrorMsg(null);
                  }}
                  className="btn-primary btn-cta rounded-full shadow-lg"
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
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] opacity-70 blur-sm" />
              <div className="relative rounded-[30px] bg-white/90 backdrop-blur-xl border border-white/60 p-10 md:p-14">
                <div className="text-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[rgb(var(--brand-mint))/15] to-[rgb(var(--brand-lilac))/15] border border-[rgb(var(--brand-mint))/25] px-4 py-2 text-sm font-semibold text-slate-700 mb-6">
                    <Sun className="h-4 w-4 text-yellow-500" />
                    Talleres de Verano 2026
                  </span>

                  <h2 className="font-title text-4xl md:text-5xl font-extrabold text-slate-900">
                    Reserva tu plaza
                  </h2>
                  <p className="font-body mt-4 text-slate-600 text-lg">
                    Completa el formulario y nos pondremos en contacto para confirmar disponibilidad y resolver tus dudas. Sin compromiso.
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Los campos marcados con * son obligatorios.
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
                        required
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
                        required
                      >
                        <option value="">Selecciona edad</option>
                        {Array.from({ length: 10 }, (_, i) => 7 + i).map((n) => (
                          <option key={n} value={String(n)}>{n} años</option>
                        ))}
                      </PremiumSelect>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-700">Taller de interés *</p>
                      <div className="mt-2 space-y-2">
                        {[
                          { value: "verano-junior", label: "Introducción a la programación", sub: "7–9 años" },
                          { value: "verano-medio", label: "Diseño de videojuegos", sub: "10–12 años" },
                          { value: "verano-avanzado", label: "Programación avanzada", sub: "13–16 años" },
                        ].map(({ value, label, sub }) => (
                          <label
                            key={value}
                            className={`flex items-center gap-3 rounded-2xl border p-4 cursor-pointer transition-all ${
                              formData.taller === value
                                ? "border-[rgb(var(--brand-mint))] bg-[rgb(var(--brand-mint))/10] shadow-sm ring-1 ring-[rgb(var(--brand-mint))/30]"
                                : "border-slate-200 bg-white hover:border-[rgb(var(--brand-mint))/50] hover:bg-slate-50"
                            }`}
                          >
                            <input
                              type="radio"
                              name="taller"
                              value={value}
                              checked={formData.taller === value}
                              onChange={handleChange}
                              disabled={loading}
                              className="accent-[rgb(var(--brand-mint))] h-4 w-4 shrink-0"
                            />
                            <div>
                              <span className={`text-sm font-bold ${formData.taller === value ? "text-[rgb(var(--brand-mint))]" : "text-slate-700"}`}>
                                {label}
                              </span>
                              <span className="ml-2 text-xs text-slate-500">— {sub}</span>
                            </div>
                          </label>
                        ))}
                      </div>

                      <label
                        className={`mt-3 flex items-center gap-3 rounded-2xl border p-4 cursor-pointer transition-all ${
                          formData.hazloCampamento
                            ? "border-[rgb(var(--brand-mint))] bg-[rgb(var(--brand-mint))/10] shadow-sm ring-1 ring-[rgb(var(--brand-mint))/30]"
                            : "border-slate-200 bg-white hover:border-[rgb(var(--brand-mint))/50] hover:bg-slate-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          id="hazloCampamento"
                          name="hazloCampamento"
                          checked={formData.hazloCampamento}
                          onChange={handleChange}
                          disabled={loading}
                          className="accent-[rgb(var(--brand-mint))] h-4 w-4 shrink-0"
                        />
                        <div>
                          <span className={`text-sm font-bold flex items-center gap-1.5 ${formData.hazloCampamento ? "text-[rgb(var(--brand-mint))]" : "text-slate-700"}`}>
                            <Tent className="h-4 w-4" />
                            Hazlo Campamento
                          </span>
                          <span className="text-xs text-slate-500">Modalidad mañana completa · 9:30–13:00</span>
                        </div>
                      </label>
                    </div>

                    {/* Semanas de interés — selección múltiple */}
                    <div>
                      <label className="text-sm font-semibold text-slate-700">
                        Semanas de interés
                      </label>
                      <p className="mt-1 mb-3 text-xs text-slate-500">
                        Puedes seleccionar varias semanas
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {SEMANAS.map(({ value, label, dates }) => {
                          const isSelected = formData.semanasInteres.includes(value);
                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() => toggleSemana(value)}
                              disabled={loading}
                              className={`flex flex-col rounded-2xl border p-4 text-left transition-all ${
                                isSelected
                                  ? "border-[rgb(var(--brand-mint))] bg-[rgb(var(--brand-mint))/10] shadow-md ring-1 ring-[rgb(var(--brand-mint))/30]"
                                  : "border-slate-200 bg-white hover:border-[rgb(var(--brand-mint))/50] hover:bg-slate-50"
                              }`}
                            >
                              <span className={`text-sm font-bold ${isSelected ? "text-[rgb(var(--brand-mint))]" : "text-slate-700"}`}>
                                {label}
                              </span>
                              <span className="text-xs text-slate-500 mt-0.5">{dates}</span>
                              {isSelected && (
                                <CheckCircle2 className="mt-2 h-4 w-4 text-[rgb(var(--brand-mint))]" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
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
                      required
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
                        inputMode="tel"
                        autoComplete="tel"
                        required
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
                        autoComplete="email"
                        required
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
                    <div
                      role="alert"
                      aria-live="assertive"
                      className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="btn-primary btn-cta w-full shadow-xl"
                  >
                    {loading ? "Enviando..." : "Reservar plaza"}
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

      {/* ═══════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(var(--brand-mint)),rgb(var(--brand-lilac)))]" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-[-140px] hidden h-[520px] w-[520px] rounded-full bg-white opacity-10 blur-3xl md:block" />
          <div className="absolute -bottom-56 right-[-180px] hidden h-[640px] w-[640px] rounded-full bg-black opacity-10 blur-3xl md:block" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="font-title text-2xl md:text-3xl font-extrabold">
              Las vacaciones también pueden ser una oportunidad para aprender algo que les motive.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#verano-reserva"
                className="btn-secondary btn-cta rounded-full shadow-lg bg-white text-slate-900 hover:bg-slate-100 font-extrabold"
              >
                Reservar plaza de verano
              </a>
              <a
                href="#verano-bloques"
                className="inline-flex items-center justify-center rounded-full font-extrabold shadow-lg border-2 border-white text-white bg-white/10 hover:bg-white/20 px-8 py-4 text-base transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Ver talleres
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════
   UI HELPERS
═══════════════════════════════════════════ */

function PremiumInput(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }
) {
  const { label, id, name, className, ...rest } = props;
  const fieldId = id ?? name;
  return (
    <div>
      <label htmlFor={fieldId} className="text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        id={fieldId}
        name={name}
        {...rest}
        className={
          "mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-4 py-3 shadow-sm " +
          "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-mint))] transition " +
          (className ?? "")
        }
      />
    </div>
  );
}

function PremiumSelect(
  props: React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
    children: React.ReactNode;
  }
) {
  const { label, children, id, name, className, ...rest } = props;
  const fieldId = id ?? name;
  return (
    <div>
      <label htmlFor={fieldId} className="text-sm font-semibold text-slate-700">
        {label}
      </label>
      <select
        id={fieldId}
        name={name}
        {...rest}
        className={
          "mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-4 py-3 shadow-sm " +
          "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-mint))] transition " +
          (className ?? "")
        }
      >
        {children}
      </select>
    </div>
  );
}
