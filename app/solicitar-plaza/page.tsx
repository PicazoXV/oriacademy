"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { courses } from "@/lib/data/courses";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  edad: string;
  cursoId: string;
  mensaje: string;
};

const initial: FormState = {
  nombre: "",
  email: "",
  telefono: "",
  edad: "",
  cursoId: "",
  mensaje: "",
};

export default function SolicitarPlazaPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);

  const courseOptions = useMemo(
    () => courses.map((c) => ({ value: String(c.id), label: `${c.subtitle} — ${c.ages}` })),
    []
  );

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((s) => ({ ...s, [key]: value }));
  }

  const isValid =
    form.nombre.trim().length >= 2 &&
    form.email.includes("@") &&
    form.telefono.trim().length >= 7 &&
    form.edad.trim().length > 0 &&
    form.cursoId.trim().length > 0;

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    // Opción A (simple): por ahora no enviamos a backend.
    // Luego lo conectamos con un API route / server action / email provider.
    setSent(true);
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="py-16 px-6 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-4">
            <div className="inline-flex w-fit bg-orange-500/10 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
              Plaza y clase de prueba
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Solicitar plaza
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Rellena el formulario y te contactamos para confirmar disponibilidad,
              horarios y nivel recomendado.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/cursos" className="text-teal-700 font-semibold hover:underline">
                ← Ver cursos
              </Link>
              <Link href="/contacto" className="text-slate-700 font-semibold hover:underline">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Form card */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              {!sent ? (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Datos del alumno/a
                  </h2>
                  <p className="text-slate-600 mb-8">
                    Te responderemos lo antes posible. Campos obligatorios marcados con *.
                  </p>

                  <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-5">
                      <Field label="Nombre y apellidos *">
                        <input
                          value={form.nombre}
                          onChange={(e) => set("nombre", e.target.value)}
                          className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-200"
                          placeholder="Ej. Marta García"
                        />
                      </Field>

                      <Field label="Edad *">
                        <input
                          value={form.edad}
                          onChange={(e) => set("edad", e.target.value)}
                          className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-200"
                          placeholder="Ej. 11"
                        />
                      </Field>

                      <Field label="Email *">
                        <input
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          type="email"
                          className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-200"
                          placeholder="familia@email.com"
                        />
                      </Field>

                      <Field label="Teléfono *">
                        <input
                          value={form.telefono}
                          onChange={(e) => set("telefono", e.target.value)}
                          className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-200"
                          placeholder="600 000 000"
                        />
                      </Field>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <Field label="Curso de interés *">
                        <select
                          value={form.cursoId}
                          onChange={(e) => set("cursoId", e.target.value)}
                          className="w-full rounded-2xl border border-slate-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-200"
                        >
                          <option value="">Selecciona un curso</option>
                          {courseOptions.map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                      </Field>

                      <Field label="Preferencia (opcional)">
                        <select
                          className="w-full rounded-2xl border border-slate-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-200"
                          defaultValue=""
                        >
                          <option value="">Sin preferencia</option>
                          <option value="tarde">Tarde</option>
                          <option value="sabado">Sábados</option>
                          <option value="online">Online</option>
                        </select>
                      </Field>
                    </div>

                    <Field label="Mensaje (opcional)">
                      <textarea
                        value={form.mensaje}
                        onChange={(e) => set("mensaje", e.target.value)}
                        rows={5}
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-200"
                        placeholder="Cuéntanos nivel, experiencia, disponibilidad..."
                      />
                    </Field>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Button
                        type="submit"
                        className={`rounded-full px-8 py-6 text-white shadow-lg ${
                          isValid
                            ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                            : "bg-slate-300 cursor-not-allowed"
                        }`}
                        disabled={!isValid}
                      >
                        Enviar solicitud
                      </Button>

                      <Link href="/horarios">
                        <Button className="rounded-full px-8 py-6 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">
                          Ver horarios
                        </Button>
                      </Link>
                    </div>

                    {!isValid && (
                      <p className="text-sm text-slate-500">
                        Completa nombre, edad, email, teléfono y curso para enviar.
                      </p>
                    )}
                  </form>
                </>
              ) : (
                <div className="py-6">
                  <h2 className="text-3xl font-extrabold text-slate-900">
                    ¡Solicitud enviada!
                  </h2>
                  <p className="mt-3 text-slate-600">
                    Te contactaremos pronto para confirmar disponibilidad y próximos pasos.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/cursos">
                      <Button className="rounded-full px-8 py-6 bg-slate-900 text-white hover:bg-slate-800">
                        Volver a cursos
                      </Button>
                    </Link>
                    <Button
                      className="rounded-full px-8 py-6 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50"
                      onClick={() => {
                        setForm(initial);
                        setSent(false);
                      }}
                    >
                      Enviar otra solicitud
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Side info */}
          <div className="lg:col-span-1">
            <Card className="p-8 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900">Qué pasa después</h3>
              <ul className="mt-5 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#5DD4C1]" />
                  <span>Te llamamos o escribimos para confirmar el curso ideal.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#5DD4C1]" />
                  <span>Te proponemos horarios disponibles y una clase de prueba.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#5DD4C1]" />
                  <span>Confirmas plaza y empezamos.</span>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl bg-teal-50 border border-teal-100 p-5">
                <div className="font-bold text-slate-900">¿Dudas?</div>
                <p className="text-sm text-slate-700 mt-2">
                  Escríbenos y te ayudamos a elegir el curso.
                </p>
                <div className="mt-4">
                  <Link href="/contacto">
                    <Button className="w-full rounded-full px-6 py-5 bg-gradient-to-r from-[#5DD4C1] to-[#3AB4A1] text-white">
                      Contactar
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-sm font-semibold text-slate-900 mb-2">{label}</div>
      {children}
    </label>
  );
}