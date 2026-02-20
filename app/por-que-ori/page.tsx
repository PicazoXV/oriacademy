// src/app/por-que-ori/page.tsx

import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Sparkles, Trophy, Users, Heart, Zap, Target } from "lucide-react";

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
    color: "from-[#5DD4C1] to-[#4AC4B1]",
    title: "Clases Reducidas",
    description:
      "Grupos pequeños de 8-12 estudiantes para atención personalizada y mejor aprendizaje.",
  },
  {
    id: 3,
    icon: Trophy,
    color: "from-[#3AB4A1] to-[#2A9481]",
    title: "Certificación",
    description:
      "Certificados oficiales al completar cada curso y portfolio de proyectos realizados.",
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
    color: "from-[#5DD4C1] to-[#3AB4A1]",
    title: "Futuro Profesional",
    description:
      "Preparamos a los estudiantes para carreras en tecnología, programación y diseño de videojuegos.",
  },
];

const instructors = [
  {
    id: 1,
    name: "Pedro García",
    role: "Director y Fundador",
    image:
      "https://images.unsplash.com/photo-1608174449868-c4f83d217020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMG1hbGUlMjB0ZWFjaGVyJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDY1MDY4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "María Rodríguez",
    role: "Instructora Principal",
    image:
      "https://images.unsplash.com/photo-1600696444233-20accba67df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGxhdGluYSUyMGZlbWFsZSUyMHRlYWNoZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA2NTA2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const testimonials = [
  {
    name: "Ana García",
    role: "Madre de estudiante",
    text: "Mi hijo ha cambiado completamente su relación con la tecnología. Ahora no solo juega, sino que crea sus propios juegos. ¡Estamos encantados!",
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                ¿Por qué elegir
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5DD4C1] to-[#3AB4A1]">
                  ORI Academy?
                </span>
              </h1>

              <p className="text-xl text-gray-700">
                Somos más que una escuela de programación.
                <br />
                Somos una comunidad que inspira a crear.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-[#5DD4C1] to-[#4AC4B1] hover:from-[#4AC4B1] hover:to-[#3AB4A1] text-white rounded-full px-8 py-6 text-lg shadow-lg">
                  Agenda una Visita
                </Button>
                <Button className="bg-white hover:bg-gray-50 text-[#5DD4C1] border-2 border-[#5DD4C1] rounded-full px-8 py-6 text-lg shadow-lg">
                  Ver Instalaciones
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwdGVhbXdvcmslMjBsZWFybmluZyUyMHRvZ2V0aGVyJTIwaGFwcHl8ZW58MXx8fHwxNzcwNjUzMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Estudiantes trabajando en equipo"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lo que nos hace diferentes
            </h2>
            <p className="text-xl text-gray-600">
              Una experiencia educativa única y transformadora
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={benefit.id}
                  className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 bg-white border-2 border-gray-100"
                >
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon size={32} className="text-white" strokeWidth={2} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600">
              Profesionales apasionados por la educación tecnológica
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {instructors.map((instructor) => (
              <Card
                key={instructor.id}
                className="overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#5DD4C1] to-[#3AB4A1]">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {instructor.name}
                  </h3>
                  <p className="text-[#5DD4C1] font-semibold">
                    {instructor.role}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Classroom */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestras Instalaciones
            </h2>
            <p className="text-xl text-gray-600">
              Aulas equipadas con la mejor tecnología
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1741529189646-056bf8ea92cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjBjb21wdXRlcnMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDY1NjkyOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Aula moderna con computadoras"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1662686439618-12cfd337c067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwaGVscGluZyUyMHN0dWRlbnQlMjBjb21wdXRlcnxlbnwxfHx8fDE3NzA2NTY5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Profesor ayudando a estudiante"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestras familias
            </h2>
            <p className="text-xl text-gray-600">
              Testimonios reales de padres y estudiantes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-white hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-[#5DD4C1] opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Listo para unirte a ORI Academy?
          </h2>

          <p className="text-xl text-gray-600 mb-10">
            Agenda una clase de prueba gratuita y descubre por qué somos la mejor
            opción.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-[#5DD4C1] to-[#4AC4B1] hover:from-[#4AC4B1] hover:to-[#3AB4A1] text-white rounded-full px-10 py-7 text-lg shadow-lg">
              Clase Gratuita
            </Button>

            <Button className="bg-white hover:bg-gray-50 text-[#5DD4C1] border-2 border-[#5DD4C1] rounded-full px-10 py-7 text-lg shadow-lg">
              Conoce Más
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}