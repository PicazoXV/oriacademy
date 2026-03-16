import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { Card } from "@/components/Card";
import { courses, type Course } from "@/lib/data/courses";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

function resolveCourse(slug: string): { course: Course; isLegacyId: boolean } | null {
  const bySlug = courses.find((item) => item.slug === slug);
  if (bySlug) return { course: bySlug, isLegacyId: false };

  if (/^\d+$/.test(slug)) {
    const id = Number(slug);
    const byId = courses.find((item) => item.id === id);
    if (byId) return { course: byId, isLegacyId: true };
  }

  return null;
}

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveCourse(slug);

  if (!resolved) {
    return buildPageMetadata({
      title: "Curso no encontrado",
      description: "El curso solicitado no existe o ya no está disponible.",
      path: "/cursos",
    });
  }

  const { course } = resolved;
  return buildPageMetadata({
    title: course.title,
    description: `${course.description}. ${course.ages}. Nivel ${course.level}.`,
    path: `/curso/${course.slug}`,
    type: "article",
  });
}

export default async function CursoDetailPage({ params }: Props) {
  const { slug } = await params;
  const resolved = resolveCourse(slug);
  if (!resolved) notFound();

  const { course, isLegacyId } = resolved;
  if (isLegacyId) {
    permanentRedirect(`/curso/${course.slug}`);
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    educationalLevel: course.level,
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
    timeRequired: course.duration,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cursos",
        item: `${siteConfig.url}/cursos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: course.title,
        item: `${siteConfig.url}/curso/${course.slug}`,
      },
    ],
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient}`} />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute -top-40 -left-40 hidden h-[650px] w-[650px] rounded-full bg-white/20 blur-3xl md:block" />
        <div className="absolute -bottom-52 -right-40 hidden h-[700px] w-[700px] rounded-full bg-black/15 blur-3xl md:block" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20 text-white">
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
                <Link
                  href={`/solicitar-plaza?curso=${encodeURIComponent(course.slug)}`}
                  className="btn-secondary btn-cta bg-white text-slate-900 hover:bg-slate-100 rounded-full shadow-xl"
                >
                  Solicitar plaza
                </Link>

                <Link
                  href="/cursos"
                  className="btn-cta rounded-full text-white border border-white/30 bg-white/15 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--brand-lilac))]"
                >
                  Volver a cursos
                </Link>
              </div>
            </div>

            <div className="flex justify-start lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-6 rounded-[36px] bg-white/20 blur-2xl" />
                <div className="relative flex items-center justify-center rounded-[32px] border border-white/20 bg-white/10 px-10 py-10 backdrop-blur-xl shadow-2xl">
                  {course.icon ? (
                    <Image
                      src={`/${course.icon}`}
                      alt={course.subtitle}
                      width={112}
                      height={112}
                      sizes="112px"
                      className="h-24 w-24 object-contain"
                    />
                  ) : (
                    <div className="text-6xl md:text-7xl">{course.emoji}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]" />

              <h2 className="font-title text-2xl md:text-3xl font-extrabold text-slate-900 mb-5">
                Qué aprenderá
              </h2>

              <div className="grid gap-3">
                {course.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[rgb(var(--brand-mint))]" />
                    <p className="font-body text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-black/10 bg-[rgb(var(--brand-mint))/10] px-5 py-4 text-slate-800">
                <p className="font-semibold">
                  Consejo: curso ideal para construir habilidades técnicas con proyectos reales.
                </p>
              </div>
            </Card>

            <div className="flex flex-wrap gap-3">
              <Link href="/horarios" className="btn-primary btn-cta rounded-full">
                Consultar horarios
              </Link>
              <Link href="/contacto" className="btn-soft-lilac btn-cta rounded-full">
                Hablar con nosotros
              </Link>
            </div>
          </div>

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
                <Link
                  href={`/solicitar-plaza?curso=${encodeURIComponent(course.slug)}`}
                  className="btn-primary btn-cta w-full rounded-full"
                >
                  Reservar plaza
                </Link>

                <Link
                  href="/contacto"
                  className="btn-secondary btn-cta w-full rounded-full"
                >
                  Resolver dudas
                </Link>

                <p className="text-center text-xs text-slate-500">
                  Te contestamos rápido · Sin compromiso
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
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
