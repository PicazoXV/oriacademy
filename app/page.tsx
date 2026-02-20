import Link from "next/link";
import Image from "next/image";
import { Users, BookOpen, TrendingUp, Quote, Star } from "lucide-react";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Programación y<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5DD4C1] to-[#3AB4A1]">
                  desarrollo de<br />
                  videojuegos
                </span>
              </h1>

              <p className="text-xl text-gray-700">
                Para niños y adolescentes de 7 a 16 años.
                <br />
                Aprende Scratch, Minecraft, Roblox y Unity.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/cursos">
                  <Button className="bg-gradient-to-r from-[#5DD4C1] to-[#4AC4B1] hover:from-[#4AC4B1] hover:to-[#3AB4A1] text-white rounded-full px-10 py-7 text-lg shadow-lg">
                    Ver Cursos
                  </Button>
                </Link>

                <Link href="/solicitar-plaza">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-10 py-7 text-lg shadow-lg">
                    Solicitar Plaza
                  </Button>
                </Link>
              </div>

              {/* Platform Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-8">
                <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-3 shadow-md">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="6" fill="#FFAB19" />
                    <circle cx="16" cy="12" r="3" fill="white" />
                    <path
                      d="M12 16L10 22H14L16 18L18 22H22L20 16H12Z"
                      fill="white"
                    />
                  </svg>
                  <span className="font-bold text-gray-900 text-lg">Scratch</span>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-3 shadow-md">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4L4 10L16 16L28 10L16 4Z" fill="#000000" />
                    <path
                      d="M4 16L16 22L28 16"
                      stroke="#000000"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M4 22L16 28L28 22"
                      stroke="#000000"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <span className="font-bold text-gray-900 text-lg">Unity</span>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-3 shadow-md">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="4" width="24" height="24" rx="4" fill="#E11D48" />
                    <path d="M12 16L16 12L20 16L16 20L12 16Z" fill="white" />
                  </svg>
                  <span className="font-bold text-gray-900 text-lg">Roblox</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1525829528215-ffae12a76ac8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Niño programando videojuegos"
                  width={1080}
                  height={720}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#5DD4C1] rounded-full opacity-20 blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#3AB4A1] rounded-full opacity-20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Qué Ofrecemos Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Qué Ofrecemos
            </h2>
            <p className="text-xl text-gray-600">
              Tecnologías reales para crear proyectos increíbles
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 text-4xl mx-auto shadow-lg">
                🎨
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Scratch</h3>
              <p className="text-gray-600 mb-4">
                Programación visual por bloques. Perfecto para empezar.
              </p>
              <div className="text-sm text-orange-600 font-semibold">7-9 años</div>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 bg-gradient-to-br from-green-50 to-white border-2 border-green-200">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 text-4xl mx-auto shadow-lg">
                🎮
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Minecraft</h3>
              <p className="text-gray-600 mb-4">
                Automatización y programación dentro de Minecraft.
              </p>
              <div className="text-sm text-green-600 font-semibold">7-11 años</div>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 bg-gradient-to-br from-red-50 to-white border-2 border-red-200">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 text-4xl mx-auto shadow-lg">
                🕹️
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Roblox</h3>
              <p className="text-gray-600 mb-4">Crea mundos 3D y programación en Lua.</p>
              <div className="text-sm text-red-600 font-semibold">10-14 años</div>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-6 text-4xl mx-auto shadow-lg">
                🚀
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Unity</h3>
              <p className="text-gray-600 mb-4">
                Motor profesional y programación en C#.
              </p>
              <div className="text-sm text-gray-700 font-semibold">12-16 años</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mini Ruta Educativa */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Camino del Alumno
            </h2>
            <p className="text-xl text-gray-600">Progresión educativa de 7 a 16 años</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#5DD4C1] to-[#3AB4A1] transform -translate-y-1/2" />

            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                {
                  n: "1",
                  title: "Fundamentos",
                  age: "7-9 años",
                  desc: "Scratch · Pensamiento lógico",
                  grad: "from-orange-400 to-orange-600",
                },
                {
                  n: "2",
                  title: "Creatividad",
                  age: "7-11 años",
                  desc: "Minecraft · Automatización",
                  grad: "from-green-500 to-green-700",
                },
                {
                  n: "3",
                  title: "Desarrollo",
                  age: "10-14 años",
                  desc: "Roblox · Lua · 3D",
                  grad: "from-red-500 to-pink-600",
                },
                {
                  n: "4",
                  title: "Profesional",
                  age: "12-16 años",
                  desc: "Unity · C# · Portfolio",
                  grad: "from-[#5DD4C1] to-[#3AB4A1]",
                },
              ].map((s) => (
                <Card key={s.n} className="p-6 text-center bg-white hover:shadow-xl transition-all">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${s.grad} rounded-full mx-auto mb-4 flex items-center justify-center text-2xl shadow-lg`}
                  >
                    {s.n}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{s.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{s.age}</p>
                  <p className="text-xs text-gray-500">{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/camino-alumno">
              <Button className="bg-gradient-to-r from-[#5DD4C1] to-[#4AC4B1] hover:from-[#4AC4B1] hover:to-[#3AB4A1] text-white rounded-full px-10 py-6 text-lg shadow-lg">
                Ver Ruta Completa →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Por qué ORI Academy
            </h2>
            <p className="text-xl text-gray-600">Lo que nos hace diferentes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all bg-white border-2 border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5DD4C1] to-[#4AC4B1] flex items-center justify-center shadow-lg">
                  <Users size={32} className="text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Grupos Reducidos</h3>
              <p className="text-gray-600 leading-relaxed">
                8-12 alumnos por clase para atención personalizada y mejor aprendizaje.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all bg-white border-2 border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg">
                  <BookOpen size={32} className="text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Proyectos Reales</h3>
              <p className="text-gray-600 leading-relaxed">
                Los alumnos crean videojuegos desde el primer día. Aprender haciendo.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all bg-white border-2 border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                  <TrendingUp size={32} className="text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Progreso Anual</h3>
              <p className="text-gray-600 leading-relaxed">
                Cursos anuales con seguimiento continuo y certificación al finalizar.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Qué dicen nuestras familias
            </h2>
            <p className="text-xl text-gray-600">Testimonios reales de alumnos y padres</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ana García",
                meta: "Madre de alumno (11 años)",
                text:
                  "Mi hijo lleva 2 años y ha cambiado completamente. Ya no solo juega, ahora crea sus propios juegos.",
              },
              {
                name: "Carlos Martínez",
                meta: "Alumno (13 años)",
                text:
                  "He aprendido a programar en Roblox y ya tengo 3 juegos publicados. Mis amigos los juegan.",
              },
              {
                name: "Laura Pérez",
                meta: "Madre de alumna (10 años)",
                text:
                  "La mejor inversión educativa. Mi hija ha desarrollado lógica, creatividad y autonomía.",
              },
            ].map((t) => (
              <Card key={t.name} className="p-8 bg-white hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <Quote size={32} className="text-[#5DD4C1] opacity-30 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  “{t.text}”
                </p>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.meta}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#5DD4C1] to-[#3AB4A1]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solicita tu Clase de Prueba
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Gratis y sin compromiso. Descubre por qué cientos de familias confían en nosotros.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto">
              <Button className="bg-white hover:bg-gray-100 text-[#5DD4C1] rounded-full px-10 py-7 text-lg shadow-lg">
                Clase Gratuita
              </Button>
            </Link>
            <Link href="/horarios">
              <Button className="bg-[#3AB4A1] hover:bg-[#2A9481] text-white border-2 border-white rounded-full px-10 py-7 text-lg shadow-lg">
                Ver Horarios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}