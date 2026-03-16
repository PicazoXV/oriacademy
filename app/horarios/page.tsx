import Link from "next/link";
import type { Metadata } from "next";
import { Clock3, CalendarClock, Phone } from "lucide-react";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Horarios",
  description:
    "Consulta las franjas horarias orientativas de ORI Academy para cursos anuales y talleres intensivos, y confirma disponibilidad en tiempo real.",
  path: "/horarios",
});

const annualTracks = [
  {
    title: "7-9 años",
    slots: ["Lunes y miércoles · 17:30-19:00", "Martes y jueves · 18:00-19:30"],
  },
  {
    title: "10-12 años",
    slots: ["Lunes y miércoles · 19:00-20:30", "Martes y jueves · 17:30-19:00"],
  },
  {
    title: "13-16 años",
    slots: ["Martes y jueves · 19:00-20:30", "Viernes · 17:30-19:30"],
  },
];

export default function HorariosPage() {
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
        name: "Horarios",
        item: `${siteConfig.url}/horarios`,
      },
    ],
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <section className="relative overflow-hidden px-6 py-14 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-mint))/0.15] via-white to-[rgb(var(--brand-lilac))/0.12]" />
        <div className="absolute -top-40 -left-40 hidden h-[520px] w-[520px] rounded-full bg-[rgb(var(--brand-mint))/20] blur-3xl md:block" />
        <div className="absolute -bottom-40 -right-40 hidden h-[560px] w-[560px] rounded-full bg-[rgb(var(--brand-lilac))/20] blur-3xl md:block" />

        <div className="relative mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur">
            <CalendarClock className="h-4 w-4 text-[rgb(var(--brand-mint))]" />
            Horarios orientativos actualizados
          </div>

          <h1 className="mt-5 font-title text-4xl md:text-5xl font-extrabold text-slate-900">
            Horarios de ORI Academy
          </h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg text-slate-700">
            Estas franjas te ayudan a orientarte. La disponibilidad real puede
            cambiar por grupo y nivel, así que te confirmamos plazas al momento.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacto?motivo=horarios" className="btn-primary btn-cta">
              Confirmar disponibilidad
            </Link>
            <a href="tel:+34624547406" className="btn-secondary btn-cta">
              <Phone className="mr-2 h-4 w-4" />
              Llamar ahora
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-3">
          {annualTracks.map((track) => (
            <article
              key={track.title}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <h2 className="font-title text-2xl font-extrabold text-slate-900">
                {track.title}
              </h2>

              <div className="mt-5 space-y-3">
                {track.slots.map((slot) => (
                  <div
                    key={slot}
                    className="flex items-start gap-3 rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    <Clock3 className="mt-0.5 h-4 w-4 text-[rgb(var(--brand-lilac))]" />
                    <span>{slot}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-black/10 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="font-title text-2xl md:text-3xl font-extrabold text-slate-900">
            Talleres intensivos y periodos vacacionales
          </h2>
          <p className="mt-3 text-slate-700">
            En Semana Santa y verano abrimos bloques especiales de mañana y
            tarde. Te pasamos opciones según edad y nivel del alumno.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/talleres" className="btn-secondary btn-cta">
              Ver talleres
            </Link>
            <Link href="/solicitar-plaza" className="btn-primary btn-cta">
              Solicitar plaza
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
