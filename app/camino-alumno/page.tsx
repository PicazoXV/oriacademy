import Link from "next/link";
import type { Metadata } from "next";
import {
  CheckCircle2,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/Card";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Camino del Alumno",
  description:
    "Descubre el plan de aprendizaje de ORI Academy de 7 a 16 años: etapas progresivas, proyectos reales y certificaciones.",
  path: "/camino-alumno",
});

const timeline = [
  {
    age: "7-9 años",
    title: "Etapa 1: Fundamentos",
    color: "from-orange-400 to-orange-600",
    courses: ["Fundamentos de la programación I", "Fundamentos de la programación II"],
    skills: [
      "Pensamiento lógico",
      "Resolución de problemas",
      "Creatividad digital",
      "Trabajo en equipo",
    ],
    projects: [
      "Juegos de plataformas",
      "Animaciones interactivas",
      "Mundos en Minecraft",
    ],
  },
  {
    age: "10-12 años",
    title: "Etapa 2: Desarrollo",
    color: "from-red-500 to-pink-600",
    courses: ["Creación de Juegos en Roblox", "Desarrollo Web"],
    skills: [
      "Programación textual",
      "Diseño 3D",
      "Lógica de juego",
      "Publicación de proyectos",
    ],
    projects: ["Juegos 3D en Roblox", "Sistemas de puntuación", "Multijugador online"],
  },
  {
    age: "13-14 años",
    title: "Etapa 3: Especialización",
    color: "from-blue-500 to-cyan-600",
    courses: ["Unity", "Desarrollo Web", "C#"],
    skills: [
      "Programación profesional",
      "Diseño de interfaces",
      "Física de videojuegos",
      "Optimización",
    ],
    projects: ["Videojuegos en Unity", "Páginas web interactivas", "Aplicaciones móviles"],
  },
  {
    age: "15-16 años",
    title: "Etapa 4: Avanzado",
    color: "from-[#5DD4C1] to-[#3AB4A1]",
    courses: ["Unity Avanzado", "IA", "Python"],
    skills: [
      "Arquitectura de software",
      "Machine Learning",
      "Desarrollo completo",
      "Portfolio profesional",
    ],
    projects: ["Juegos comerciales", "Sistemas de IA", "Portfolio GitHub"],
  },
];

const certifications = [
  "Certificado por cada curso completado",
  "Portfolio de proyectos realizados",
  "Recomendaciones académicas"
];

export default function Page() {
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
        name: "Camino del alumno",
        item: `${siteConfig.url}/camino-alumno`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* HERO premium */}
      <section className="relative overflow-hidden">
        {/* Fondo tipo Cursos (mint → gris → lilac) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))/26] via-slate-100 to-[rgb(var(--brand-lilac))/26]" />
        <div className="absolute inset-0 bg-slate-200/25" />

        {/* glows */}
        <div className="absolute -top-44 -left-44 hidden h-[680px] w-[680px] rounded-full bg-[rgb(var(--brand-mint))/26] blur-3xl md:block" />
        <div className="absolute -bottom-56 -right-52 hidden h-[760px] w-[760px] rounded-full bg-[rgb(var(--brand-lilac))/26] blur-3xl md:block" />

        {/* grid sutil */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 text-center">
          <div
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[rgb(var(--ink))/80] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-[rgb(var(--brand-mint))]" />
              <span>Ruta completa 7–16 años</span>
              <span className="opacity-40">·</span>
              <span>Proyectos reales</span>
            </div>

            <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900">
              Camino del{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]">
                Alumno
              </span>
            </h1>

            <p className="font-body mx-auto mt-6 max-w-3xl text-lg md:text-xl text-slate-700">
              Un viaje educativo diseñado para desarrollar habilidades de programación
              desde los 7 hasta los 16 años, con metas claras y proyectos que motivan.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#timeline" className="btn-primary btn-cta w-full sm:w-auto rounded-full">
                Ver etapas
              </Link>
              <Link href="/solicitar-plaza" className="btn-secondary btn-cta w-full sm:w-auto rounded-full">
                Solicitar plaza
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE premium */}
      <section id="timeline" className="relative py-16 md:py-20 px-6 scroll-mt-24">
        <div className="mx-auto max-w-7xl">
          <div
            className="text-center"
          >
            <h2 className="font-title text-3xl md:text-4xl font-extrabold text-slate-900">
              Etapas con objetivos claros
            </h2>
            <p className="font-body mx-auto mt-4 max-w-3xl text-slate-600 text-lg">
              Cada etapa construye sobre la anterior: más autonomía, más nivel, más portfolio.
            </p>
          </div>

          <div className="relative mt-14">
            {/* Línea central (integrada, sin negro duro) */}
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-black/10 via-black/5 to-transparent md:block" />

            <div className="space-y-10 md:space-y-14">
              {timeline.map((stage, index) => {
                const sideLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="relative"
                  >
                    <div className="grid items-stretch gap-6 md:grid-cols-2">
                      {/* Columna izquierda */}
                      <div className={sideLeft ? "" : "md:order-2"}>
                        <StageCard stage={stage} index={index} />
                      </div>

                      {/* Columna derecha */}
                      <div className={sideLeft ? "md:order-2" : ""}>
                        <StagePanel stage={stage} />
                      </div>
                    </div>

                    {/* Punto en la línea central */}
                    <div className="pointer-events-none absolute left-1/2 top-10 hidden -translate-x-1/2 md:block">
                      <div className="relative">
                        <div
                          className={`h-5 w-5 rounded-full bg-gradient-to-r ${stage.color} shadow-lg`}
                        />
                        <div
                          className={`absolute -inset-3 rounded-full bg-gradient-to-r ${stage.color} opacity-20 blur-md`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA intermedio */}
          <div
            className="mt-16"
          >
            <Card className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 md:p-10 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))/14] via-white to-[rgb(var(--brand-lilac))/14]" />
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="font-title text-2xl md:text-3xl font-extrabold text-slate-900">
                    ¿No sabes por dónde empezar?
                  </h3>
                  <p className="font-body mt-2 text-slate-600">
                    Te recomendamos la etapa ideal según edad y experiencia.
                  </p>
                </div>
                <Link href="/contacto" className="btn-primary btn-cta rounded-full">
                  Hablar con nosotros <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* PORTFOLIO + CERTIFICACIONES premium */}
      <section className="relative overflow-hidden py-16 md:py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-mint))/10] via-white to-[rgb(var(--brand-lilac))/10]" />
        <div className="absolute -top-48 right-[-160px] hidden h-[620px] w-[620px] rounded-full bg-[rgb(var(--brand-mint))/16] blur-3xl md:block" />
        <div className="absolute -bottom-56 left-[-170px] hidden h-[700px] w-[700px] rounded-full bg-[rgb(var(--brand-lilac))/16] blur-3xl md:block" />

        <div className="relative mx-auto max-w-7xl">
          <div
            className="text-center"
          >
            <h2 className="font-title text-3xl md:text-4xl font-extrabold text-slate-900">
              Portfolio y certificaciones
            </h2>
            <p className="font-body mx-auto mt-4 max-w-3xl text-slate-600 text-lg">
              Al final, no solo “saben programar”: tienen pruebas visibles de lo que hacen.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <Card className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-mint))/12] via-white to-transparent" />
              <div className="relative">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>

                <h3 className="font-title text-2xl md:text-3xl font-extrabold text-slate-900">
                  Portfolio real
                </h3>
                <p className="font-body mt-3 text-slate-600">
                  Cada alumno termina con proyectos que puede enseñar y seguir mejorando.
                </p>

                <ul className="mt-6 space-y-3">
                  <BulletMint>Videojuegos y apps creados durante el curso.</BulletMint>
                  <BulletMint>Documentación simple de su progreso por etapas.</BulletMint>
                  <BulletMint>Base para becas, entrevistas o pruebas técnicas.</BulletMint>
                </ul>

                <div className="mt-8">
                  <Link href="/cursos" className="btn-secondary btn-cta rounded-full">
                    Ver cursos
                  </Link>
                </div>
              </div>
            </Card>

            <div
            >
              <Card className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-lilac))/12] via-white to-transparent" />
                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="font-title text-2xl md:text-3xl font-extrabold text-slate-900">
                    Certificaciones
                  </h3>
                  <p className="font-body mt-3 text-slate-600">
                    Reconocimiento por progreso real: cada etapa suma credenciales y confianza.
                  </p>

                  <ul className="mt-6 space-y-3">
                    {certifications.map((c) => (
                      <BulletMint key={c}>{c}</BulletMint>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link href="/solicitar-plaza" className="btn-primary btn-cta rounded-full">
                      Solicitar plaza
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Subcomponentes premium ---------- */

function StageCard({
  stage,
  index,
}: {
  stage: (typeof timeline)[number];
  index: number;
}) {
  return (
    <Card className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
      {/* header con color de etapa (respetado) */}
      <div className={`p-7 text-white bg-gradient-to-r ${stage.color}`}>
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="text-sm font-semibold opacity-90">{stage.age}</div>
            <h3 className="mt-2 font-title text-2xl md:text-3xl font-extrabold">
              {stage.title}
            </h3>
          </div>

          <div className="relative">
            <div className="text-6xl font-extrabold opacity-20 leading-none">
              {index + 1}
            </div>
          </div>
        </div>
      </div>

      <div className="p-7">
        <div className="grid gap-6 sm:grid-cols-2">
          <MiniBlock title="Cursos" tone="mint">
            {stage.courses.map((t) => (
              <MiniLine key={t} tone="mint">
                {t}
              </MiniLine>
            ))}
          </MiniBlock>

          <MiniBlock title="Habilidades" tone="warm">
            {stage.skills.map((t) => (
              <MiniLine key={t} tone="warm">
                {t}
              </MiniLine>
            ))}
          </MiniBlock>

          <div className="sm:col-span-2">
            <MiniBlock title="Proyectos" tone="green">
              {stage.projects.map((t) => (
                <MiniLine key={t} tone="green">
                  {t}
                </MiniLine>
              ))}
            </MiniBlock>
          </div>
        </div>
      </div>
    </Card>
  );
}

function StagePanel({ stage }: { stage: (typeof timeline)[number] }) {
  return (
    <Card className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.03] via-transparent to-black/[0.02]" />
      <div className="relative space-y-5">
        <h4 className="font-title text-xl font-extrabold text-slate-900">
          Objetivo de la etapa
        </h4>

        <p className="font-body text-slate-600">
          En esta etapa reforzamos la progresión natural: retos diarios, feedback y
          un proyecto final que se puede enseñar y jugar.
        </p>

        <div className="rounded-2xl border border-black/10 bg-white/70 p-5">
          <div className="text-sm font-semibold text-slate-900">Lo más importante</div>
          <div className="mt-3 grid gap-3">
            <InlinePill className={`bg-gradient-to-r ${stage.color}`}>
              Aprenden haciendo
            </InlinePill>
            <InlinePill className={`bg-gradient-to-r ${stage.color}`}>
              Proyecto final jugable
            </InlinePill>
            <InlinePill className={`bg-gradient-to-r ${stage.color}`}>
              Progreso visible
            </InlinePill>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/cursos" className="btn-soft-lilac btn-cta rounded-full text-base">
            Ver cursos
          </Link>
          <Link href="/contacto" className="btn-secondary btn-cta rounded-full text-base">
            Resolver dudas
          </Link>
        </div>
      </div>
    </Card>
  );
}

function MiniBlock({
  title,
  children,
  tone,
}: {
  title: string;
  children: React.ReactNode;
  tone: "mint" | "warm" | "green";
}) {
  const dot =
    tone === "mint"
      ? "text-[rgb(var(--brand-mint))]"
      : tone === "warm"
      ? "text-orange-500"
      : "text-green-600";

  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <span
          className={`inline-flex h-8 w-8 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm ${dot}`}
        >
          <CheckCircle2 className="h-4 w-4" />
        </span>
        <div className="font-semibold text-slate-900">{title}</div>
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function MiniLine({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "mint" | "warm" | "green";
}) {
  const icon =
    tone === "mint"
      ? "text-[rgb(var(--brand-mint))]"
      : tone === "warm"
      ? "text-orange-500"
      : "text-green-600";

  return (
    <div className="flex items-start gap-2 text-slate-700">
      <CheckCircle2 className={`mt-0.5 h-4 w-4 ${icon}`} />
      <span className="font-body">{children}</span>
    </div>
  );
}

function InlinePill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-[rgb(var(--brand-mint))]" />
      <span
        className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm ${className}`}
      >
        {children}
      </span>
    </div>
  );
}

function BulletMint({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-[10px] h-2 w-2 rounded-full bg-[rgb(var(--brand-mint))]" />
      <span className="font-body text-slate-700">{children}</span>
    </li>
  );
}
