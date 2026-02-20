"use client";

import { useState } from "react";
import {
  Users,
  Clock,
  Calendar,
  Award,
  UserCircle,
  Gamepad2,
  Code,
  Blocks,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export default function TalleresPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombreAlumno: "",
    edad: "",
    taller: "",
    nombrePadre: "",
    telefono: "",
    email: "",
    recibirInfo: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Visual only: sin backend todavía.
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5DD4C1] to-[#3AB4A1]">
              Talleres de Programación
            </span>
            <br />
            Semana Santa
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Talleres intensivos para niños y adolescentes. Aprende creando videojuegos y
            proyectos increíbles en solo unos días.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#reserva">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-10 py-7 text-lg shadow-lg">
                Reservar plaza
              </Button>
            </a>

            <a href="#talleres">
              <Button className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-10 py-7 text-lg shadow-lg border border-gray-200">
                Ver talleres
              </Button>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-700">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-5 py-3 rounded-full shadow-sm">
              <Calendar className="w-5 h-5 text-[#5DD4C1]" />
              <span className="font-semibold">Semana Santa</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-5 py-3 rounded-full shadow-sm">
              <Clock className="w-5 h-5 text-[#5DD4C1]" />
              <span className="font-semibold">Intensivo</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-5 py-3 rounded-full shadow-sm">
              <Users className="w-5 h-5 text-[#5DD4C1]" />
              <span className="font-semibold">Grupos reducidos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Talleres */}
      <section id="talleres" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Elige tu Taller
            </h2>
            <p className="text-xl text-gray-600">
              3 opciones para diferentes edades y niveles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Taller 1 */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-8 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm opacity-90 mb-2">7–9 años</div>
                    <h3 className="text-2xl font-bold mb-2">Ori Game Makers Junior</h3>
                    <p className="opacity-95">Crea tu primer videojuego</p>
                  </div>
                  <Blocks className="w-10 h-10 opacity-90" />
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-3 text-gray-700">
                  <Line icon={<Gamepad2 className="w-5 h-5 text-orange-500" />}>
                    Videojuegos con Scratch
                  </Line>
                  <Line icon={<UserCircle className="w-5 h-5 text-orange-500" />}>
                    Ideal para principiantes
                  </Line>
                  <Line icon={<Clock className="w-5 h-5 text-orange-500" />}>
                    4 días · 2h/día
                  </Line>
                  <Line icon={<Users className="w-5 h-5 text-orange-500" />}>
                    10-12 alumnos
                  </Line>
                </div>

                <a href="#reserva">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full py-6 text-lg shadow-lg">
                    Reservar
                  </Button>
                </a>
              </div>
            </Card>

            {/* Taller 2 */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-r from-[#5DD4C1] to-[#3AB4A1] p-8 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm opacity-90 mb-2">10–12 años</div>
                    <h3 className="text-2xl font-bold mb-2">Ori Programación Creativa</h3>
                    <p className="opacity-95">Crea juegos con lógica y código</p>
                  </div>
                  <Code className="w-10 h-10 opacity-90" />
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-3 text-gray-700">
                  <Line icon={<Gamepad2 className="w-5 h-5 text-[#3AB4A1]" />}>
                    Proyectos creativos
                  </Line>
                  <Line icon={<UserCircle className="w-5 h-5 text-[#3AB4A1]" />}>
                    Para nivel medio
                  </Line>
                  <Line icon={<Clock className="w-5 h-5 text-[#3AB4A1]" />}>
                    4 días · 2h/día
                  </Line>
                  <Line icon={<Users className="w-5 h-5 text-[#3AB4A1]" />}>
                    10-12 alumnos
                  </Line>
                </div>

                <a href="#reserva">
                  <Button className="w-full bg-gradient-to-r from-[#5DD4C1] to-[#4AC4B1] hover:from-[#4AC4B1] hover:to-[#3AB4A1] text-white rounded-full py-6 text-lg shadow-lg">
                    Reservar
                  </Button>
                </a>
              </div>
            </Card>

            {/* Taller 3 */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-r from-red-500 to-pink-600 p-8 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm opacity-90 mb-2">9–12 años</div>
                    <h3 className="text-2xl font-bold mb-2">Ori Game Makers Avanzado</h3>
                    <p className="opacity-95">Más retos, más juego</p>
                  </div>
                  <Award className="w-10 h-10 opacity-90" />
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-3 text-gray-700">
                  <Line icon={<Gamepad2 className="w-5 h-5 text-pink-600" />}>
                    Mecánicas más avanzadas
                  </Line>
                  <Line icon={<UserCircle className="w-5 h-5 text-pink-600" />}>
                    Para alumnos con experiencia
                  </Line>
                  <Line icon={<Clock className="w-5 h-5 text-pink-600" />}>
                    4 días · 2h/día
                  </Line>
                  <Line icon={<Users className="w-5 h-5 text-pink-600" />}>
                    10-12 alumnos
                  </Line>
                </div>

                <a href="#reserva">
                  <Button className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-red-600 text-white rounded-full py-6 text-lg shadow-lg">
                    Reservar
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Qué incluye el taller
              </h2>
              <p className="text-xl text-gray-700">
                Una experiencia completa para que aprendan y se lo pasen bien.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Grupos reducidos</h3>
                    <p className="text-gray-600">Atención personalizada</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Duración</h3>
                    <p className="text-gray-600">4 días · 2 horas/día</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5DD4C1] to-[#4AC4B1] rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Diploma</h3>
                    <p className="text-gray-600">Diploma incluido</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  ¿Qué se llevan a casa?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#5DD4C1]" />
                    <span>Un proyecto final jugable creado por ellos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#5DD4C1]" />
                    <span>Conceptos de programación aplicados de forma práctica.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#5DD4C1]" />
                    <span>Motivación y confianza para seguir aprendiendo.</span>
                  </li>
                </ul>
              </Card>

              <a href="#reserva">
                <Button className="w-full bg-gradient-to-r from-[#5DD4C1] to-[#3AB4A1] hover:from-[#4AC4B1] hover:to-[#2A9481] text-white rounded-full py-6 text-lg shadow-lg">
                  Quiero reservar plaza
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Reserva */}
      <section
        id="reserva"
        className="py-20 px-6 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50"
      >
        <div className="max-w-3xl mx-auto">
          {formSubmitted ? (
            <div className="bg-white rounded-2xl p-12 shadow-xl text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¡Solicitud enviada!
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Gracias por tu interés en nuestros talleres de Semana Santa. Nos
                pondremos en contacto contigo pronto para confirmar la disponibilidad
                y todos los detalles.
              </p>
              <Button
                onClick={() => setFormSubmitted(false)}
                className="bg-gradient-to-r from-[#5DD4C1] to-[#4AC4B1] hover:from-[#4AC4B1] hover:to-[#3AB4A1] text-white rounded-full px-8 py-6"
              >
                Enviar otra solicitud
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
                Reserva tu plaza para Semana Santa
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <FieldLabel htmlFor="nombreAlumno">
                      Nombre del alumno *
                    </FieldLabel>
                    <TextInput
                      id="nombreAlumno"
                      name="nombreAlumno"
                      required
                      value={formData.nombreAlumno}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <FieldLabel htmlFor="edad">Edad del alumno *</FieldLabel>
                    <select
                      id="edad"
                      name="edad"
                      required
                      value={formData.edad}
                      onChange={handleChange}
                      className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5DD4C1] bg-white"
                    >
                      <option value="">Selecciona edad</option>
                      <option value="7">7 años</option>
                      <option value="8">8 años</option>
                      <option value="9">9 años</option>
                      <option value="10">10 años</option>
                      <option value="11">11 años</option>
                      <option value="12">12 años</option>
                    </select>
                  </div>
                </div>

                <div>
                  <FieldLabel htmlFor="taller">Taller de interés *</FieldLabel>
                  <select
                    id="taller"
                    name="taller"
                    required
                    value={formData.taller}
                    onChange={handleChange}
                    className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5DD4C1] bg-white"
                  >
                    <option value="">Selecciona un taller</option>
                    <option value="game-makers-junior">
                      Ori Game Makers Junior (7–9 años)
                    </option>
                    <option value="programacion-creativa">
                      Ori Programación Creativa (10–12 años)
                    </option>
                    <option value="game-makers-avanzado">
                      Ori Game Makers Avanzado (9–12 años)
                    </option>
                  </select>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Datos de contacto
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <FieldLabel htmlFor="nombrePadre">
                        Nombre del padre/madre/tutor *
                      </FieldLabel>
                      <TextInput
                        id="nombrePadre"
                        name="nombrePadre"
                        required
                        value={formData.nombrePadre}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <FieldLabel htmlFor="telefono">Teléfono *</FieldLabel>
                        <TextInput
                          id="telefono"
                          name="telefono"
                          type="tel"
                          required
                          value={formData.telefono}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <FieldLabel htmlFor="email">Email *</FieldLabel>
                        <TextInput
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <input
                    id="recibirInfo"
                    type="checkbox"
                    checked={formData.recibirInfo}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        recibirInfo: e.target.checked,
                      }))
                    }
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-[#3AB4A1] accent-[#3AB4A1]"
                  />
                  <label
                    htmlFor="recibirInfo"
                    className="text-sm cursor-pointer text-gray-700"
                  >
                    Quiero recibir información de los cursos anuales
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full py-6 text-lg shadow-lg"
                >
                  Solicitar plaza
                </Button>

                <p className="text-center text-sm text-gray-600">
                  Te contactaremos para confirmar disponibilidad · Sin compromiso
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#5DD4C1] to-[#3AB4A1] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl mb-8 font-semibold">
            Las vacaciones también pueden ser una oportunidad para aprender algo que les motive.
          </p>
          <a href="#reserva">
            <Button className="bg-white text-[#5DD4C1] hover:bg-gray-100 rounded-full px-12 py-6 text-lg shadow-lg">
              Reservar plaza ahora
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

function Line({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <span>{children}</span>
    </div>
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
        "mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5DD4C1] " +
        (props.className ?? "")
      }
    />
  );
}