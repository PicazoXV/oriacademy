"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Users, Calendar, Trophy, Award } from "lucide-react";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { courses } from "@/lib/data/courses";

const progression = [
  { name: "Fundamentos", subtitle: "Scratch", color: "bg-orange-400", emoji: "🎨", level: "7-9" },
  { name: "Creativo", subtitle: "Minecraft", color: "bg-green-500", emoji: "🎮", level: "7-11" },
  { name: "Roblox", subtitle: "Lua", color: "bg-red-500", emoji: "🕹️", level: "10-14" },
  { name: "Unity", subtitle: "C#", color: "bg-gray-700", emoji: "🚀", level: "12-17" },
  { name: "Web", subtitle: "JS", color: "bg-blue-500", emoji: "💻", level: "13-17" },
  { name: "IA", subtitle: "Python", color: "bg-[#5DD4C1]", emoji: "🤖", level: "14-17" },
];

export default function CursosPage() {
  const [selectedAge, setSelectedAge] = useState<string>("all");

  const filterCourses = () => {
    if (selectedAge === "all") return courses;
    if (selectedAge === "7-9") return courses.filter((c) => c.ages.includes("7-9"));
    if (selectedAge === "10-12") return courses.filter((c) => c.ages.includes("10-14") || c.ages.includes("10-12"));
    if (selectedAge === "13-16")
      return courses.filter(
        (c) => c.ages.includes("12-17") || c.ages.includes("13-17") || c.ages.includes("14-17")
      );
    return courses;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-[#5DD4C1]/20 text-[#3AB4A1] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Cursos 2026
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Todos Nuestros<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5DD4C1] to-[#3AB4A1]">
                  Cursos
                </span>
              </h1>

              <p className="text-xl text-gray-700">
                Programación y desarrollo de software<br />
                para niños y adolescentes de 7 a 16 años.
              </p>

              <p className="text-gray-600">
                Aprenderán a programar desde cero y avanzarán<br />
                por distintos niveles, desde entornos visuales<br />
                hasta código profesional.
              </p>

              <Link href="/horarios">
                <Button className="bg-gradient-to-r from-[#5DD4C1] to-[#4AC4B1] hover:from-[#4AC4B1] hover:to-[#3AB4A1] text-white rounded-full px-8 py-6 text-lg shadow-lg">
                  Ver Horarios
                </Button>
              </Link>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1758685733664-4cde7bbe4713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Estudiantes aprendiendo programación"
                width={1080}
                height={720}
                className="w-full h-auto rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Age selector */}
      <section className="py-12 px-6 bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setSelectedAge("all")}
              className={`rounded-full px-8 py-6 text-lg transition-all ${
                selectedAge === "all"
                  ? "bg-gradient-to-r from-[#5DD4C1] to-[#4AC4B1] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Todos los Cursos
            </Button>

            <Button
              onClick={() => setSelectedAge("7-9")}
              className={`rounded-full px-8 py-6 text-lg transition-all ${
                selectedAge === "7-9"
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              7-9 años
            </Button>

            <Button
              onClick={() => setSelectedAge("10-12")}
              className={`rounded-full px-8 py-6 text-lg transition-all ${
                selectedAge === "10-12"
                  ? "bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              10-12 años
            </Button>

            <Button
              onClick={() => setSelectedAge("13-16")}
              className={`rounded-full px-8 py-6 text-lg transition-all ${
                selectedAge === "13-16"
                  ? "bg-gradient-to-r from-[#5DD4C1] to-[#3AB4A1] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              13-16 años
            </Button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Encuentra tu Curso Perfecto</h2>
            <p className="text-xl text-gray-600">Desde principiantes hasta avanzados</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filterCourses().map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className={`bg-gradient-to-r ${course.gradient} p-6 text-white relative`}>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                    Curso anual · 90 min/semana
                  </div>
                  <div className="flex items-start justify-between pt-6">
                    <div className="flex-1">
                      <div className="text-sm opacity-90 mb-1">{course.subtitle}</div>
                      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                      <p className="text-sm opacity-90">{course.description}</p>
                    </div>
                    <div className="text-4xl ml-4">{course.emoji}</div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={16} className="text-[#5DD4C1]" />
                      <span>{course.ages}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Trophy size={16} className="text-[#5DD4C1]" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={16} className="text-[#5DD4C1]" />
                      <span>{course.hours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} className="text-[#5DD4C1]" />
                      <span>{course.duration.split(" ")[0]} sesiones</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Qué aprenderá:</h4>
                    <div className="space-y-2">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5DD4C1] mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-[#5DD4C1]/10 rounded-lg p-3">
                    <Award size={20} className="text-[#5DD4C1]" />
                    <span className="text-sm font-semibold text-gray-700">Proyecto final certificado</span>
                  </div>

                  <div className="space-y-2 pt-4">
                    <Link href={`/curso/${course.id}`}>
                      <Button className={`w-full bg-gradient-to-r ${course.gradient} text-white rounded-full`}>
                        Ver Temario Completo
                      </Button>
                    </Link>

                    <Link href="/solicitar-plaza">
                      <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full">
                        Solicitar Plaza
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Path */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tu Camino de Aprendizaje</h2>
            <p className="text-xl text-gray-600">Progresa de principiante a experto</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {progression.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 text-center w-[160px] hover:shadow-lg transition-all hover:-translate-y-1 bg-white">
                  <div className={`w-20 h-20 ${step.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg`}>
                    {step.emoji}
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{step.name}</h4>
                  <p className="text-xs text-gray-600 mb-1">{step.subtitle}</p>
                  <p className="text-xs text-[#5DD4C1] font-semibold">{step.level} años</p>
                </Card>

                {index < progression.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform translate-x-full -translate-y-1/2 text-gray-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center space-y-6">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada curso está diseñado para construir sobre las habilidades anteriores,
              asegurando un progreso continuo y significativo.
            </p>
            <Link href="/solicitar-plaza">
              <Button className="bg-gradient-to-r from-[#5DD4C1] to-[#3AB4A1] hover:from-[#4AC4B1] hover:to-[#2A9481] text-white rounded-full px-12 py-7 text-lg shadow-lg">
                Solicitar Clase de Prueba Gratuita
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}