"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import {
  Sparkles,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  User,
  GraduationCap,
  Calendar,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

type FormState = {
  nombreAlumno: string;
  edad: string;
  curso: string;
  experiencia: string;
  nombreTutor: string;
  telefono: string;
  email: string;
  mensaje: string;
  recibirInfo: boolean;
};

const cursosOptions = [
  { value: "", label: "Selecciona un curso" },
  { value: "scratch", label: "Scratch / Iniciación" },
  { value: "minecraft", label: "Minecraft Education" },
  { value: "roblox", label: "Roblox Studio" },
  { value: "unity", label: "Unity / C#" },
  { value: "web", label: "Desarrollo Web" },
  { value: "otro", label: "No lo sé todavía" },
];

export default function SolicitarPlazaPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormState>({
    nombreAlumno: "",
    edad: "",
    curso: "",
    experiencia: "principiante",
    nombreTutor: "",
    telefono: "",
    email: "",
    mensaje: "",
    recibirInfo: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;

    if (target.type === "checkbox") {
      const { name, checked } = target;
      setFormData((p) => ({ ...p, [name]: checked }));
      return;
    }

    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOk(false);
    setErrorMsg(null);

    if (
      !formData.nombreAlumno.trim() ||
      !formData.edad.trim() ||
      !formData.nombreTutor.trim() ||
      !formData.telefono.trim() ||
      !formData.email.trim()
    ) {
      setErrorMsg("Por favor, completa los campos obligatorios.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/solicitar-plaza", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMsg(data?.error || "No se pudo enviar la solicitud.");
        return;
      }

      setOk(true);
      setFormData({
        nombreAlumno: "",
        edad: "",
        curso: "",
        experiencia: "principiante",
        nombreTutor: "",
        telefono: "",
        email: "",
        mensaje: "",
        recibirInfo: true,
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setErrorMsg("Error de red. Inténtalo de nuevo en unos segundos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))/26] via-slate-100 to-[rgb(var(--brand-lilac))/26]" />
        <div className="absolute inset-0 bg-slate-200/25" />
        <div className="absolute -top-44 -left-44 h-[680px] w-[680px] rounded-full bg-[rgb(var(--brand-mint))/24] blur-3xl" />
        <div className="absolute -bottom-56 -right-52 h-[760px] w-[760px] rounded-full bg-[rgb(var(--brand-lilac))/24] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center"
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[rgb(var(--ink))/80] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-[rgb(var(--brand-mint))]" />
              <span>Plazas limitadas</span>
              <span className="opacity-40">·</span>
              <span>Respuesta rápida</span>
            </div>

            <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900">
              Solicitar
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]">
                Plaza
              </span>
            </h1>

            <p className="font-body mx-auto mt-6 max-w-3xl text-lg md:text-xl text-slate-700">
              Cuéntanos la edad y el nivel. Te recomendamos el curso ideal y te confirmamos
              disponibilidad.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#form" className="w-full sm:w-auto">
                <Button className="btn-primary w-full sm:w-auto rounded-full px-10 py-6 text-lg">
                  Rellenar solicitud
                </Button>
              </a>
              <Link href="/cursos" className="w-full sm:w-auto">
                <Button className="btn-secondary w-full sm:w-auto rounded-full px-10 py-6 text-lg">
                  Ver cursos
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section id="form" className="py-20 px-6">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-3 items-start">
          {/* FORM */}
          <div className="lg:col-span-2">
            {ok ? (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="rounded-3xl border border-black/10 bg-white p-10 md:p-12 shadow-xl text-center"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-lg">
                  <CheckCircle2 className="h-10 w-10 text-white" />
                </div>

                <h2 className="font-title text-3xl md:text-4xl font-extrabold text-slate-900">
                  ¡Solicitud enviada!
                </h2>

                <p className="font-body mt-4 text-lg text-slate-700">
                  Gracias. Te contactaremos pronto para confirmar disponibilidad y recomendarte
                  el curso ideal.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/cursos">
                    <Button className="btn-secondary rounded-full px-10 py-6 text-lg">
                      Ver cursos
                    </Button>
                  </Link>
                  <Button
                    className="btn-primary rounded-full px-10 py-6 text-lg"
                    onClick={() => setOk(false)}
                  >
                    Enviar otra solicitud
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: EASE }}
                className="relative rounded-[32px] p-[1px] shadow-2xl"
              >
                {/* borde degradado */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] opacity-70 blur-sm" />

                <Card className="relative rounded-[30px] border border-white/60 bg-white/90 p-8 md:p-10 shadow-sm backdrop-blur-xl">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h2 className="font-title text-2xl md:text-3xl font-extrabold text-slate-900">
                        Solicitud de plaza
                      </h2>
                      <p className="font-body mt-2 text-slate-600">
                        Completa los datos y te contactamos.
                      </p>
                    </div>
                    <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-lg">
                      <Send className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                    {/* Alumno */}
                    <div className="space-y-5">
                      <div className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
                        Datos del alumno
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <PremiumInput
                          label="Nombre del alumno *"
                          name="nombreAlumno"
                          value={formData.nombreAlumno}
                          onChange={handleChange}
                          disabled={loading}
                          placeholder="Nombre y apellidos"
                          icon={<User className="h-4 w-4" />}
                        />

                        <PremiumSelect
                          label="Edad *"
                          name="edad"
                          value={formData.edad}
                          onChange={handleChange}
                          disabled={loading}
                          icon={<GraduationCap className="h-4 w-4" />}
                        >
                          <option value="">Selecciona edad</option>
                          {Array.from({ length: 10 }, (_, i) => 7 + i).map((n) => (
                            <option key={n} value={String(n)}>
                              {n} años
                            </option>
                          ))}
                        </PremiumSelect>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <PremiumSelect
                          label="Curso de interés"
                          name="curso"
                          value={formData.curso}
                          onChange={handleChange}
                          disabled={loading}
                          icon={<Calendar className="h-4 w-4" />}
                        >
                          {cursosOptions.map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </PremiumSelect>

                        <PremiumSelect
                          label="Nivel / experiencia"
                          name="experiencia"
                          value={formData.experiencia}
                          onChange={handleChange}
                          disabled={loading}
                          icon={<ShieldCheck className="h-4 w-4" />}
                        >
                          <option value="principiante">Principiante</option>
                          <option value="medio">Intermedio</option>
                          <option value="avanzado">Avanzado</option>
                        </PremiumSelect>
                      </div>

                      <PremiumTextarea
                        label="Mensaje (opcional)"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="¿Algo que debamos saber? (experiencia previa, disponibilidad, etc.)"
                        rows={4}
                      />
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                    {/* Tutor */}
                    <div className="space-y-5">
                      <div className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
                        Datos de contacto
                      </div>

                      <PremiumInput
                        label="Nombre del padre/madre/tutor *"
                        name="nombreTutor"
                        value={formData.nombreTutor}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="Nombre completo"
                        icon={<User className="h-4 w-4" />}
                      />

                      <div className="grid gap-6 md:grid-cols-2">
                        <PremiumInput
                          label="Teléfono *"
                          name="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={handleChange}
                          disabled={loading}
                          placeholder="+34 ..."
                          icon={<Phone className="h-4 w-4" />}
                        />
                        <PremiumInput
                          label="Email *"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={loading}
                          placeholder="tu@email.com"
                          icon={<Mail className="h-4 w-4" />}
                        />
                      </div>

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
                          Quiero recibir información de cursos y novedades
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
                        className="btn-primary w-full rounded-full py-6 text-lg shadow-xl disabled:opacity-60"
                      >
                        {loading ? "Enviando..." : "Enviar solicitud"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>

                      <p className="text-center text-xs text-slate-500">
                        Te contactaremos para confirmar disponibilidad · Sin compromiso
                      </p>
                    </div>
                  </form>
                </Card>
              </motion.div>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
              className="sticky top-24 space-y-6"
            >
              <Card className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
                <h3 className="font-title text-xl font-extrabold text-slate-900">
                  ¿Qué pasa después?
                </h3>
                <div className="mt-4 space-y-3 text-slate-700">
                  <Step n="1" text="Revisamos tu solicitud." />
                  <Step n="2" text="Te llamamos / escribimos para confirmar." />
                  <Step n="3" text="Te recomendamos el curso ideal y horarios." />
                  <Step n="4" text="Reservamos plaza y listo." />
                </div>
              </Card>

              <Card className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
                <h3 className="font-title text-xl font-extrabold text-slate-900">
                  ¿Prefieres hablar ahora?
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Te orientamos en 2 minutos por teléfono o WhatsApp.
                </p>

                <div className="mt-5 space-y-3">
                  <a href="tel:+34123456789" className="block">
                    <Button className="btn-primary w-full rounded-full px-8 py-6 text-lg">
                      <Phone className="mr-2 h-5 w-5" />
                      Llamar
                    </Button>
                  </a>

                  <a
                    href="https://wa.me/34123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="btn-secondary w-full rounded-full px-8 py-6 text-lg">
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Step({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[rgb(var(--brand-mint))/18] text-sm font-extrabold text-slate-900">
        {n}
      </span>
      <span className="font-body">{text}</span>
    </div>
  );
}

function PremiumInput(
  props: React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    icon?: React.ReactNode;
  }
) {
  const { label, icon, className, ...rest } = props;
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700">{label}</label>
      <div className="mt-2 flex items-center gap-3 rounded-2xl border border-black/10 bg-white/80 px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[rgb(var(--brand-mint))] transition">
        {icon ? <span className="text-slate-400">{icon}</span> : null}
        <input
          {...rest}
          className={
            "w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none " +
            (className ?? "")
          }
        />
      </div>
    </div>
  );
}

function PremiumSelect(
  props: React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
  }
) {
  const { label, icon, className, children, ...rest } = props;
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700">{label}</label>
      <div className="mt-2 flex items-center gap-3 rounded-2xl border border-black/10 bg-white/80 px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[rgb(var(--brand-mint))] transition">
        {icon ? <span className="text-slate-400">{icon}</span> : null}
        <select
          {...rest}
          className={
            "w-full bg-transparent text-slate-900 focus:outline-none " + (className ?? "")
          }
        >
          {children}
        </select>
      </div>
    </div>
  );
}

function PremiumTextarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    icon?: React.ReactNode;
  }
) {
  const { label, className, ...rest } = props;
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700">{label}</label>
      <textarea
        {...rest}
        className={
          "mt-2 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-slate-900 shadow-sm " +
          "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-mint))] transition " +
          (className ?? "")
        }
      />
    </div>
  );
}