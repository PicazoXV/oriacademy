"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { isValidEmail, isValidPhone } from "@/lib/validation";

const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "+34 624 54 74 06",
    link: "tel:+34624547406",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@oriacademy.es",
    link: "mailto:info@oriacademy.es",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "Calle Cruz, 21, Albacete, 02001",
    link: "https://www.google.com/maps/search/?api=1&query=Calle+Cruz+21+Albacete",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+34 624 54 74 06",
    link: "https://wa.me/34624547406",
  },
];

const talleresLabels: Record<string, string> = {
  "game-makers-junior": "Ori Game Makers Junior (7-9 años)",
  "programacion-creativa": "Ori Programación Creativa (10-12 años)",
  "game-makers-avanzado": "Ori Game Makers Avanzado (13-16 años)",
};

export default function Page() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string>("");

  const prefilledMessage = useMemo(() => {
    const taller = searchParams.get("taller");
    const curso = searchParams.get("curso");
    const motivo = searchParams.get("motivo");

    if (taller) {
      const label = talleresLabels[taller] ?? taller;
      return `Hola, quiero más información sobre el taller: ${label}.`;
    }

    if (curso) {
      return `Hola, quiero más información sobre el curso: ${curso}.`;
    }

    if (motivo === "clase-prueba") {
      return "Hola, quiero solicitar una clase de prueba y orientación para elegir curso.";
    }

    if (motivo === "horarios") {
      return "Hola, me gustaría confirmar horarios disponibles para este mes.";
    }

    return "";
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);
    setSuccess(false);
    setError("");

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      // Honeypot anti-spam (debe ir vacío).
      company: String(formData.get("company") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setError("Por favor, completa los campos obligatorios.");
      setLoading(false);
      return;
    }

    if (!isValidEmail(payload.email)) {
      setError("Introduce un email válido.");
      setLoading(false);
      return;
    }

    if (payload.phone && !isValidPhone(payload.phone)) {
      setError("Introduce un teléfono válido.");
      setLoading(false);
      return;
    }

    if (payload.company) {
      setLoading(false);
      setSuccess(true);
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          message: payload.message,
        }),
      });

      const data = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!res.ok) {
        throw new Error(data?.error || "Error al enviar el mensaje.");
      }

      setSuccess(true);
      form.reset();
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Hubo un error al enviar el mensaje.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HERO premium */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))/26] via-slate-100 to-[rgb(var(--brand-lilac))/26]" />
        <div className="absolute inset-0 bg-slate-200/25" />
        <div className="absolute -top-44 -left-44 hidden h-[680px] w-[680px] rounded-full bg-[rgb(var(--brand-mint))/24] blur-3xl md:block" />
        <div className="absolute -bottom-56 -right-52 hidden h-[760px] w-[760px] rounded-full bg-[rgb(var(--brand-lilac))/24] blur-3xl md:block" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[rgb(var(--ink))/80] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-[rgb(var(--brand-mint))]" />
              <span>Te ayudamos a elegir</span>
              <span className="opacity-40">·</span>
              <span>Sin compromiso</span>
            </div>

            <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900">
              Contacto
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]">
                ORI Academy
              </span>
            </h1>

            <p className="font-body mx-auto mt-6 max-w-3xl text-lg md:text-xl text-slate-700">
              Escríbenos y te orientamos según la edad y el nivel. Respondemos
              rápido.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#form"
                className="btn-primary btn-cta w-full sm:w-auto rounded-full"
              >
                Enviar mensaje
              </Link>
              <Link
                href="/solicitar-plaza"
                className="btn-secondary btn-cta w-full sm:w-auto rounded-full"
              >
                Solicitar plaza
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 items-start">
          {/* INFO */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <h2 className="font-title text-3xl md:text-4xl font-extrabold text-slate-900">
                Información de contacto
              </h2>
              <p className="font-body mt-3 text-slate-600 text-lg">
                Elige la vía que te sea más cómoda.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const isHttp = info.link.startsWith("http");

                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={isHttp ? "_blank" : undefined}
                    rel={isHttp ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.55,
                      ease: EASE,
                      delay: index * 0.05,
                    }}
                    className="group flex items-start gap-4 rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <div className="relative">
                      <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))/18] to-[rgb(var(--brand-lilac))/18] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-lg">
                        <Icon size={22} className="text-white" />
                      </div>
                    </div>

                    <div>
                      <div className="font-semibold text-slate-900">
                        {info.title}
                      </div>
                      <div className="text-slate-600">{info.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <Card className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))/14] via-white to-[rgb(var(--brand-lilac))/14]" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-md">
                      <Clock size={20} className="text-white" />
                    </div>
                    <h3 className="font-title text-xl font-extrabold text-slate-900">
                      Horario de atención
                    </h3>
                  </div>

                  <div className="space-y-2 text-sm text-slate-700">
                    <p>
                      <span className="font-semibold">Lunes a Viernes:</span>{" "}
                      9:00 - 20:00
                    </p>
                    <p>
                      <span className="font-semibold">Sábados:</span> 10:00 -
                      14:00
                    </p>
                    <p>
                      <span className="font-semibold">Domingos:</span> Cerrado
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* FORM premium */}
          <div id="form" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="relative rounded-[32px] p-[1px] shadow-2xl"
            >
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] opacity-70 blur-sm" />

              <Card className="relative rounded-[30px] border border-white/60 bg-white/90 p-8 md:p-10 shadow-sm backdrop-blur-xl">
                <h2 className="font-title text-2xl md:text-3xl font-extrabold text-slate-900">
                  Envíanos un mensaje
                </h2>
                <p className="font-body mt-2 text-slate-600">
                  Te respondemos lo antes posible.
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Los campos marcados con * son obligatorios.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="hidden">
                    <label htmlFor="contact-company">
                      Company
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </label>
                  </div>

                  <PremiumInput
                    label="Nombre completo *"
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    required
                    disabled={loading}
                  />

                  <PremiumInput
                    label="Email *"
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    autoComplete="email"
                    disabled={loading}
                  />

                  <PremiumInput
                    label="Teléfono"
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+34 123 456 789"
                    autoComplete="tel"
                    disabled={loading}
                  />

                  <PremiumTextarea
                    label="Mensaje *"
                    id="contact-message"
                    name="message"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    required
                    defaultValue={prefilledMessage}
                    disabled={loading}
                  />

                  <Button
                    type="submit"
                    disabled={loading}
                    className="btn-primary btn-cta w-full rounded-full shadow-xl disabled:opacity-60"
                  >
                    <Send size={20} className="mr-2" />
                    {loading ? "Enviando..." : "Enviar mensaje"}
                  </Button>

                  {success && (
                    <div
                      role="status"
                      aria-live="polite"
                      className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
                    >
                      ¡Mensaje enviado! Te responderemos lo antes posible.
                    </div>
                  )}

                  {error && (
                    <div
                      role="alert"
                      aria-live="assertive"
                      className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                    >
                      {error}
                    </div>
                  )}
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-mint))/10] via-white to-[rgb(var(--brand-lilac))/10]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center mb-12"
          >
            <h2 className="font-title text-4xl md:text-5xl font-extrabold text-slate-900">
              Visítanos
            </h2>
            <p className="font-body mt-3 text-lg text-slate-600">
              Te esperamos en nuestro centro en Albacete.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))/14] via-white to-[rgb(var(--brand-lilac))/14]" />
            <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-white/40" />
            <div className="relative h-[320px] w-full sm:h-[380px] lg:h-[420px]">
              <iframe
                title="Mapa de ORI Academy en Albacete"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.9597863392423!2d-1.852814922981808!3d38.9934141410314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd665feab7ae0583%3A0xc119c9cf553eeba8!2sC.%20Cruz%2C%2021%2C%2002001%20Albacete!5e0!3m2!1ses!2ses!4v1772187015250!5m2!1ses!2ses"
                className="h-full w-full rounded-3xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.9)_1px,transparent_0)] [background-size:26px_26px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-title text-4xl md:text-5xl font-extrabold"
          >
            ¿Listo para empezar?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
            className="mt-5 text-lg md:text-xl opacity-90"
          >
            Agenda tu clase de prueba y te recomendamos el mejor camino.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/solicitar-plaza"
              className="btn-secondary btn-cta bg-white hover:bg-white/90 text-slate-900 rounded-full shadow-lg"
            >
              Solicitar plaza
            </Link>
            <Link
              href="/cursos"
              className="btn-cta rounded-full text-white border border-white/30 bg-white/15 hover:bg-white/20 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--brand-lilac))]"
            >
              Ver cursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function PremiumInput(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string },
) {
  const { label, className, id, name, ...rest } = props;
  const fieldId = id ?? name;
  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        id={fieldId}
        name={name}
        {...rest}
        className={
          "mt-2 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-slate-900 shadow-sm " +
          "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-mint))] " +
          "transition " +
          (className ?? "")
        }
      />
    </div>
  );
}

function PremiumTextarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string },
) {
  const { label, className, id, name, ...rest } = props;
  const fieldId = id ?? name;
  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <textarea
        id={fieldId}
        name={name}
        {...rest}
        className={
          "mt-2 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-slate-900 shadow-sm " +
          "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-mint))] " +
          "transition " +
          (className ?? "")
        }
      />
    </div>
  );
}
