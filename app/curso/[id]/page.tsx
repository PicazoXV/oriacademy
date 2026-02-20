import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/lib/data/courses";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CursoDetailPage({ params }: Props) {
  const { id } = await params;
  const courseId = Number(id);

  if (!Number.isFinite(courseId)) notFound();

  const course = courses.find((c) => c.id === courseId);
  if (!course) notFound();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className={`bg-gradient-to-r ${course.gradient} text-white py-16 px-6`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
                <span>{course.subtitle}</span>
                <span className="opacity-70">·</span>
                <span>{course.ages}</span>
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
                {course.title}
              </h1>

              <p className="mt-4 text-lg opacity-95 max-w-2xl">
                {course.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/solicitar-plaza">
                  <Button className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 py-6 text-lg shadow-lg">
                    Solicitar plaza
                  </Button>
                </Link>
                <Link href="/cursos">
                  <Button className="bg-white/15 hover:bg-white/20 text-white border border-white/30 rounded-full px-8 py-6 text-lg">
                    ← Volver a cursos
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-6xl md:text-7xl shrink-0">{course.emoji}</div>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Temario / Aprendizaje */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Qué aprenderá
              </h2>

              <div className="space-y-3">
                {course.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#5DD4C1]" />
                    <p className="text-slate-700">{f}</p>
                  </div>
                ))}
              </div>
            </Card>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/horarios">
                <Button className="rounded-full px-8 py-6 bg-slate-900 text-white hover:bg-slate-800">
                  Ver horarios
                </Button>
              </Link>
              <Link href="/contacto">
                <Button className="rounded-full px-8 py-6 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">
                  Hablar con nosotros
                </Button>
              </Link>
            </div>
          </div>

          {/* Sidebar info */}
          <div className="lg:col-span-1">
            <Card className="p-8 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-6">
                Información del curso
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-600">Edad</span>
                  <span className="font-semibold text-slate-900">{course.ages}</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-600">Nivel</span>
                  <span className="font-semibold text-slate-900">{course.level}</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-600">Duración</span>
                  <span className="font-semibold text-slate-900">{course.duration}</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-600">Horas</span>
                  <span className="font-semibold text-slate-900">{course.hours}</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-600">Grupo</span>
                  <span className="font-semibold text-slate-900">{course.students}</span>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/solicitar-plaza">
                  <Button className={`w-full rounded-full px-6 py-6 text-white bg-gradient-to-r ${course.gradient}`}>
                    Reservar plaza
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}