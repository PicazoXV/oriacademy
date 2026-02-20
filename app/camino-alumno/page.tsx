// src/app/camino-alumno/page.tsx

import Link from "next/link";
import { CheckCircle2, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

const timeline = [
  {
    age: "7-9 años",
    title: "Etapa 1: Fundamentos",
    color: "from-orange-400 to-orange-600",
    courses: ["Scratch", "Minecraft Education"],
    skills: [
      "Pensamiento lógico",
      "Resolución de problemas",
      "Creatividad digital",
      "Trabajo en equipo",
    ],
    projects: ["Juegos de plataformas", "Animaciones interactivas", "Mundos en Minecraft"],
  },
  {
    age: "10-12 años",
    title: "Etapa 2: Desarrollo",
    color: "from-red-500 to-pink-600",
    courses: ["Roblox Studio", "Lua Programming"],
    skills: ["Programación textual", "Diseño 3D", "Lógica de juego", "Publicación de proyectos"],
    projects: ["Juegos 3D en Roblox", "Sistemas de puntuación", "Multijugador online"],
  },
  {
    age: "13-14 años",
    title: "Etapa 3: Especialización",
    color: "from-blue-500 to-cyan-600",
    courses: ["Unity", "Desarrollo Web", "C#"],
    skills: ["Programación profesional", "Diseño de interfaces", "Física de videojuegos", "Optimización"],
    projects: ["Videojuegos en Unity", "Páginas web interactivas", "Aplicaciones móviles"],
  },
  {
    age: "15-16 años",
    title: "Etapa 4: Avanzado",
    color: "from-[#5DD4C1] to-[#3AB4A1]",
    courses: ["Unity Avanzado", "IA", "Python"],
    skills: ["Arquitectura de software", "Machine Learning", "Desarrollo completo", "Portfolio profesional"],
    projects: ["Juegos comerciales", "Sistemas de IA", "Portfolio GitHub"],
  },
];

const certifications = [
  "Certificado por cada curso completado",
  "Portfolio de proyectos realizados",
  "Recomendaciones académicas",
  "Acceso a comunidad de alumni",
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Camino del{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5DD4C1] to-[#3AB4A1]">
              Alumno
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Un viaje educativo diseñado para desarrollar habilidades
            <br />
            de programación desde los 7 hasta los 16 años.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {timeline.map((stage, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-32 w-1 h-full bg-gradient-to-b from-[#5DD4C1] to-transparent opacity-30 z-0"></div>
                )}

                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                  <div className={`bg-gradient-to-r ${stage.color} p-8 text-white`}>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <div className="text-sm opacity-90 mb-1">{stage.age}</div>
                        <h3 className="text-3xl font-bold">{stage.title}</h3>
                      </div>
                      <div className="text-6xl opacity-20">{index + 1}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 p-8">
                    {/* Courses */}
                    <div>
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#5DD4C1] flex items-center justify-center">
                          📚
                        </div>
                        Cursos
                      </h4>
                      <ul className="space-y-2">
                        {stage.courses.map((course, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle2 size={16} className="text-[#5DD4C1]" />
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                          💡
                        </div>
                        Habilidades
                      </h4>
                      <ul className="space-y-2">
                        {stage.skills.map((skill, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle2 size={16} className="text-orange-500" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
                          🎯
                        </div>
                        Proyectos
                      </h4>
                      <ul className="space-y-2">
                        {stage.projects.map((project, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle2 size={16} className="text-green-500" />
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio & Certification */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Portfolio */}
            <Card className="p-8 bg-white">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5DD4C1] to-[#3AB4A1] flex items-center justify-center mb-6 shadow-lg">
                <Briefcase size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Portfolio Profesional</h3>
              <p className="text-gray-600 mb-6">
                Al final del camino, cada alumno tendrá un portfolio completo con todos sus proyectos,
                listo para presentar en universidades o entrevistas de trabajo.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-[#5DD4C1] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">GitHub con proyectos públicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-[#5DD4C1] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Videojuegos publicados en plataformas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-[#5DD4C1] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Portfolio web personal</span>
                </li>
              </ul>
            </Card>

            {/* Certifications */}
            <Card className="p-8 bg-white">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-6 shadow-lg">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Certificaciones</h3>
              <p className="text-gray-600 mb-6">
                Reconocimiento oficial por cada etapa completada, avalado por ORI Academy y respaldado por
                nuestra experiencia educativa.
              </p>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#5DD4C1] to-[#3AB4A1]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Comienza el Camino Hoy</h2>
          <p className="text-xl mb-10 opacity-90">
            Únete a cientos de alumnos que ya están construyendo su futuro en tecnología.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cursos">
              <Button className="bg-white hover:bg-gray-100 text-[#5DD4C1] rounded-full px-10 py-7 text-lg shadow-lg">
                Ver Cursos
              </Button>
            </Link>

            <Link href="/contacto">
              <Button className="bg-[#3AB4A1] hover:bg-[#2A9481] text-white border-2 border-white rounded-full px-10 py-7 text-lg shadow-lg">
                Solicitar Información
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}