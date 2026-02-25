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
      {/* HERO premium (marca) */}
      {/* HERO dinámico por curso */}
<section className="relative overflow-hidden">
  {/* Base gradient dinámico */}
  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient}`} />

  {/* Capa de profundidad */}
  <div className="absolute inset-0 bg-black/10" />

  {/* Glow izquierdo */}
  <div className="absolute -top-40 -left-40 h-[650px] w-[650px] rounded-full bg-white/20 blur-3xl" />

  {/* Glow derecho */}
  <div className="absolute -bottom-52 -right-40 h-[700px] w-[700px] rounded-full bg-black/15 blur-3xl" />

  {/* Grid tech sutil */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.15] 
    [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),
    linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)]
    [background-size:64px_64px]" 
  />

  <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20 text-white">
    <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">

      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
          <span>{course.subtitle}</span>
          <span className="opacity-60">·</span>
          <span>{course.ages}</span>
        </div>

        <h1 className="mt-6 font-title text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
          {course.title}
        </h1>

        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90">
          {course.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/solicitar-plaza">
            <Button className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 py-6 text-lg shadow-xl">
              Solicitar plaza
            </Button>
          </Link>

          <Link href="/cursos">
            <Button className="bg-white/15 hover:bg-white/25 text-white border border-white/30 rounded-full px-8 py-6 text-lg">
              ← Volver a cursos
            </Button>
          </Link>
        </div>
      </div>

      {/* Emoji card premium */}
      <div className="flex justify-start lg:justify-end">
        <div className="relative">
          <div className="absolute -inset-6 rounded-[36px] bg-white/20 blur-2xl" />
          <div className="relative flex items-center justify-center rounded-[32px] border border-white/20 bg-white/10 px-10 py-10 backdrop-blur-xl shadow-2xl">
            <div className="text-6xl md:text-7xl">
              {course.emoji}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* CONTENIDO */}
      <section className="py-14 px-6">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-3">
          {/* Temario / Aprendizaje */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
              {/* mini-acento */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]" />

              <h2 className="font-title text-2xl md:text-3xl font-extrabold text-slate-900 mb-5">
                Qué aprenderá
              </h2>

              <div className="grid gap-3">
                {course.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[rgb(var(--brand-mint))]" />
                    <p className="font-body text-slate-700">{f}</p>
                  </div>
                ))}
              </div>

              {/* Mini callout */}
              <div className="mt-8 rounded-2xl border border-black/10 bg-[rgb(var(--brand-mint))/10] px-5 py-4 text-slate-800">
                <p className="font-semibold">
                  Consejo: si tu hijo/a ya ha hecho Scratch, este curso se aprovecha muchísimo más.
                </p>
              </div>
            </Card>

            <div className="flex flex-wrap gap-3">
              <Link href="/horarios">
                <Button className="btn-primary rounded-full px-8 py-6 text-lg">
                  Ver horarios
                </Button>
              </Link>
              <Link href="/contacto">
                <Button className="btn-soft-lilac rounded-full px-8 py-6 text-lg">
                  Hablar con nosotros
                </Button>
              </Link>
            </div>
          </div>

          {/* Sidebar info */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
              <h3 className="font-title text-lg font-extrabold text-slate-900 mb-6">
                Información del curso
              </h3>

              <div className="space-y-4 text-sm">
                <InfoRow label="Edad" value={course.ages} />
                <InfoRow label="Nivel" value={course.level} />
                <InfoRow label="Duración" value={course.duration} />
                <InfoRow label="Horas" value={course.hours} />
                <InfoRow label="Grupo" value={course.students} />
              </div>

              <div className="mt-8 space-y-3">
                <Link href="/solicitar-plaza" className="block">
                  <Button className="btn-primary w-full rounded-full px-6 py-6 text-lg">
                    Reservar plaza
                  </Button>
                </Link>

                <Link href="/contacto" className="block">
                  <Button className="btn-secondary w-full rounded-full px-6 py-6 text-lg">
                    Resolver dudas
                  </Button>
                </Link>

                <p className="text-center text-xs text-slate-500">
                  Te contestamos rápido · Sin compromiso
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-slate-600">{label}</span>
      <span className="font-semibold text-slate-900">{value}</span>
    </div>
  );
}