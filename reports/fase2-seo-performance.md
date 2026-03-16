# Fase 2 - SEO técnico + Performance

## Archivos eliminados
- `app/curso/[id]/page.tsx`
- `lib/fonts.ts`

## Archivo: `app/layout.tsx`
```tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s | ORI Academy",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.defaultImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: [siteConfig.defaultImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    email: "info@oriacademy.es",
    telephone: "+34 624 54 74 06",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Cruz, 21",
      postalCode: "02001",
      addressLocality: "Albacete",
      addressCountry: "ES",
    },
    sameAs: ["https://wa.me/34624547406"],
  };

  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased bg-white text-slate-900 flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

```

## Archivo: `lib/seo.ts`
```ts
import type { Metadata } from "next";

export const siteConfig = {
  name: "ORI Academy",
  shortName: "ORI Academy",
  description:
    "Academia de programación y desarrollo de videojuegos para niños y adolescentes de 7 a 16 años.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.oriacademy.es").replace(
    /\/$/,
    "",
  ),
  locale: "es_ES",
  twitterHandle: "@oriacademy",
  defaultImage: "/hero.jpg",
};

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  image = siteConfig.defaultImage,
}: MetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${siteConfig.url}${canonicalPath}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${siteConfig.url}${image.startsWith("/") ? image : `/${image}`}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url: canonicalUrl,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitterHandle,
      images: [imageUrl],
    },
  };
}

```

## Archivo: `app/page.tsx`
```tsx
import niña from "@/public/niña.png";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  BookOpen,
  TrendingUp,
  Sparkles,
  Gamepad2,
  Code2,
} from "lucide-react";

import { Card } from "@/components/Card";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Academia de Programación y Videojuegos para Niños",
  description:
    "ORI Academy: programación y desarrollo de videojuegos para niños y adolescentes de 7 a 16 años con proyectos reales y grupos reducidos.",
  path: "/",
});

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "es",
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 bg-gradient-to-br from-[rgb(var(--brand-mint)/0.14)] via-white to-[rgb(var(--brand-lilac)/0.12)]">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-44 -left-44 hidden h-[560px] w-[560px] rounded-full bg-[rgb(var(--brand-mint))] opacity-[0.12] blur-3xl md:block" />
          <div className="absolute -bottom-48 -right-48 hidden h-[620px] w-[620px] rounded-full bg-[rgb(var(--brand-lilac))] opacity-[0.12] blur-3xl md:block" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(15,23,42,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.12) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* LEFT */}
            <div className="space-y-8">
              <div
                className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-sm font-extrabold shadow-sm backdrop-blur"
              >
                <Sparkles size={16} className="text-[rgb(var(--brand-lilac))]" />
                Academia creativa · 7–16 años
              </div>

              <h1
                className="font-title text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.02]"
              >
                Programación y <br />
                <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,rgb(var(--brand-mint)),rgb(var(--brand-lilac)))]">
                  desarrollo de videojuegos
                </span>
              </h1>

              <p
                className="text-xl font-semibold text-slate-700 leading-relaxed"
              >
                Para niños y adolescentes de 7 a 16 años. <br />
                Aprende Scratch, Minecraft, Roblox y Unity.
              </p>

              <div
                className="flex flex-wrap gap-4"
              >
                <Link href="/cursos" className="btn-primary">
                  Ver Cursos
                </Link>

                <Link href="/solicitar-plaza" className="btn-secondary">
                  Solicitar Plaza
                </Link>
              </div>

              {/* Tech pills */}
              <div
                className="flex flex-wrap items-center gap-3 pt-4"
              >
                {[
                  { label: "Scratch", icon: <Code2 size={16} /> },
                  { label: "Unity", icon: <Gamepad2 size={16} /> },
                  { label: "Roblox", icon: <Sparkles size={16} /> },
                ].map((t) => (
                  <div
                    key={t.label}
                    className="inline-flex items-center gap-2 rounded-2xl border border-black/5 bg-white/80 px-5 py-3 text-sm font-extrabold text-slate-900 shadow-sm backdrop-blur"
                  >
                    <span className="text-[rgb(var(--brand-mint))]">{t.icon}</span>
                    {t.label}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-[linear-gradient(135deg,rgb(var(--brand-mint)/0.28),rgb(var(--brand-lilac)/0.22))] blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={niña}
                  alt="Niño programando videojuegos"
                  width={1080}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 py-14 bg-white">
        <div className="mx-auto max-w-7xl">
          <div
            className="grid gap-6 rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur md:grid-cols-3"
          >
            {[
              { kpi: "8–12", label: "Alumnos por clase", hint: "Atención real" },
              { kpi: "90 min", label: "Sesión semanal", hint: "Progreso constante" },
              { kpi: "Proyectos", label: "Desde el día 1", hint: "Aprender haciendo" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-slate-900">{s.kpi}</div>
                <div className="mt-1 text-sm font-extrabold text-slate-700">{s.label}</div>
                <div className="mt-1 text-xs font-semibold text-slate-500">{s.hint}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-24 px-6 bg-[rgb(var(--brand-mint)/0.08)]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-title text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Por qué ORI Academy
          </h2>
          <p className="text-lg font-semibold text-slate-600">
            Lo que nos hace diferentes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: Users,
              title: "Grupos Reducidos",
              text: "8–12 alumnos por clase para atención personalizada.",
            },
            {
              icon: BookOpen,
              title: "Proyectos Reales",
              text: "Crean videojuegos desde el primer día. Aprender haciendo.",
            },
            {
              icon: TrendingUp,
              title: "Progreso Anual",
              text: "Seguimiento continuo y certificación al finalizar.",
            },
          ].map((b) => (
            <div
              key={b.title}
            >
              <Card className="p-8 bg-white hover:shadow-xl transition border border-black/5">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[linear-gradient(135deg,rgb(var(--brand-mint)),rgb(var(--brand-lilac)))] flex items-center justify-center shadow-lg">
                    <b.icon size={28} className="text-white" />
                  </div>
                </div>
                <h3 className="font-title text-2xl font-extrabold text-slate-900 mb-3">
                  {b.title}
                </h3>
                <p className="text-slate-600 font-semibold leading-relaxed">{b.text}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden px-6 py-24 bg-[linear-gradient(90deg,rgb(var(--brand-mint)),rgb(var(--brand-lilac)))]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-[-140px] hidden h-[520px] w-[520px] rounded-full bg-white opacity-10 blur-3xl md:block" />
          <div className="absolute -bottom-56 right-[-180px] hidden h-[640px] w-[640px] rounded-full bg-black opacity-10 blur-3xl md:block" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center text-white">
          <h2 className="font-title text-4xl md:text-5xl font-extrabold mb-6">
            Solicita tu Clase de Prueba
          </h2>
          <p className="text-xl font-semibold mb-10 opacity-95">
            Gratis y sin compromiso. Descubre por qué tantas familias confían en ORI.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto"
              className="btn-secondary rounded-full px-10 py-6 text-lg font-extrabold shadow-lg bg-white text-slate-900 hover:bg-slate-100"
            >
              Clase Gratuita
            </Link>
            <Link
              href="/cursos"
              className="rounded-full px-10 py-6 text-lg font-extrabold shadow-lg border-2 border-white text-white bg-white/10 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--brand-lilac))]"
            >
              Ver cursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

```

## Archivo: `app/cursos/page.tsx`
```tsx
import type { Metadata } from "next";
import CursosPageClient from "./CursosPageClient";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cursos de Programación y Videojuegos",
  description:
    "Descubre los cursos de ORI Academy para edades de 7 a 16 años: Scratch, Minecraft, Roblox, Unity, desarrollo web e inteligencia artificial.",
  path: "/cursos",
});

export default function CursosPage() {
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <CursosPageClient />
    </>
  );
}

```

## Archivo: `app/cursos/CursosPageClient.tsx`
```tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Users, Calendar, Trophy, Award, Sparkles } from "lucide-react";
import niño from "@/public/niñotraje.png";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { courses } from "@/lib/data/courses";

const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

const progression = [
  {
    name: "Fundamentos",
    subtitle: "Scratch",
    color: "bg-orange-400",
    emoji: "🐱",
    level: "7-9",
  },
  {
    name: "Creativo",
    subtitle: "Minecraft",
    color: "bg-green-500",
    emoji: "🧱",
    level: "7-11",
  },
  {
    name: "Roblox",
    subtitle: "Lua",
    color: "bg-red-500",
    emoji: "🎮",
    level: "10-14",
  },
  {
    name: "Unity",
    subtitle: "C#",
    color: "bg-slate-700",
    emoji: "🚀",
    level: "12-16",
  },
  {
    name: "Web",
    subtitle: "JS",
    color: "bg-blue-500",
    emoji: "💻",
    level: "13-16",
  },
  {
    name: "IA",
    subtitle: "Python",
    color: "bg-[rgb(var(--brand-mint))]",
    emoji: "🤖",
    level: "14-16",
  },
];

export default function CursosPage() {
  const [selectedAge, setSelectedAge] = useState<string>("all");

  const filtered = useMemo(() => {
    if (selectedAge === "all") return courses;
    if (selectedAge === "7-9")
      return courses.filter((c) => c.ages.includes("7-9"));
    if (selectedAge === "10-12")
      return courses.filter(
        (c) => c.ages.includes("10-14") || c.ages.includes("10-12"),
      );
    if (selectedAge === "13-16")
      return courses.filter(
        (c) =>
          c.ages.includes("12-16") ||
          c.ages.includes("13-16") ||
          c.ages.includes("14-16"),
      );
    return courses;
  }, [selectedAge]);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 bg-gradient-to-br from-[rgb(var(--brand-mint)/0.14)] via-white to-[rgb(var(--brand-lilac)/0.12)]">
        {/* Ambient blobs + subtle grid */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-44 -left-44 hidden h-[560px] w-[560px] rounded-full bg-[rgb(var(--brand-mint))] opacity-[0.12] blur-3xl md:block" />
          <div className="absolute -bottom-48 -right-48 hidden h-[620px] w-[620px] rounded-full bg-[rgb(var(--brand-lilac))] opacity-[0.12] blur-3xl md:block" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(15,23,42,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.12) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* LEFT */}
            <div className="space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-sm font-extrabold shadow-sm backdrop-blur"
              >
                <Sparkles
                  size={16}
                  className="text-[rgb(var(--brand-lilac))]"
                />
                Cursos 2026 · 90 min/semana
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
                className="font-title text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.02]"
              >
                Todos Nuestros <br />
                <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,rgb(var(--brand-mint)),rgb(var(--brand-lilac)))]">
                  Cursos
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
                className="text-xl font-semibold text-slate-700 leading-relaxed"
              >
                Programación y desarrollo de software para niños y adolescentes
                de 7 a 16 años.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.18 }}
                className="text-base font-semibold text-slate-600 leading-relaxed max-w-xl"
              >
                Avanzan por niveles: desde entornos visuales hasta código real,
                creando proyectos que pueden enseñar y compartir.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.22 }}
                className="flex flex-wrap gap-4 pt-1"
              >
                <Link href="/horarios" className="btn-primary">
                  Consultar horarios
                </Link>
                <Link href="/solicitar-plaza" className="btn-secondary">
                  Solicitar plaza
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.28 }}
                className="flex flex-wrap gap-3 pt-4"
              >
                {["Scratch", "Minecraft", "Roblox", "Unity"].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-black/5 bg-white/80 px-5 py-3 text-sm font-extrabold text-slate-900 shadow-sm backdrop-blur"
                  >
                    {t}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.12 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-[linear-gradient(135deg,rgb(var(--brand-mint)/0.28),rgb(var(--brand-lilac)/0.22))] blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={niño}
                  alt="Estudiantes aprendiendo programación"
                  width={1080}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto w-full"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AGE SELECTOR */}
<section className="border-b border-black/10 bg-white/85 px-6 py-10 backdrop-blur">
  <div className="mx-auto max-w-7xl">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: EASE }}
      viewport={{ once: true, margin: "-60px" }}
      className="flex flex-wrap justify-center gap-4"
    >
      <Button
        onClick={() => setSelectedAge("all")}
        className={selectedAge === "all" ? "btn-primary" : "btn-soft-lilac"}
      >
        Todos los Cursos
      </Button>

      <Button
        onClick={() => setSelectedAge("7-9")}
        className={selectedAge === "7-9" ? "btn-primary" : "btn-soft-mint"}
      >
        7-9 años
      </Button>

      <Button
        onClick={() => setSelectedAge("10-12")}
        className={selectedAge === "10-12" ? "btn-primary" : "btn-soft-lilac"}
      >
        10-12 años
      </Button>

      <Button
        onClick={() => setSelectedAge("13-16")}
        className={selectedAge === "13-16" ? "btn-primary" : "btn-soft-mint"}
      >
        13-16 años
      </Button>
    </motion.div>
  </div>
</section>

      {/* GRID */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-title text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Encuentra tu Curso Perfecto
            </h2>
            <p className="mt-3 text-lg font-semibold text-slate-600">
              Desde principiantes hasta avanzados
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: EASE, delay: idx * 0.05 }}
                viewport={{ once: true, margin: "-60px" }}
              >
                <Card className="group overflow-hidden border border-black/5 bg-white transition-all hover:-translate-y-1 hover:shadow-2xl">
                  {/* Top gradient */}
                  <div
                    className={`relative bg-gradient-to-r ${course.gradient} p-6 text-white`}
                  >
                    <div className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-extrabold backdrop-blur-sm">
                      Curso anual · 90 min/semana
                    </div>

                    <div className="flex items-start justify-between pt-6">
                      <div className="flex-1">
                        <div className="mb-1 text-sm font-extrabold opacity-95">
                          {course.subtitle}
                        </div>

                        <h3 className="mb-2 text-xl font-extrabold">
                          {course.title}
                        </h3>

                        <p className="text-sm font-semibold opacity-95">
                          {course.description}
                        </p>
                      </div>

                      {/* Icono en vez de emoji */}
                      <div className="ml-4 flex h-36 w-36 items-center justify-center rounded-3xl bg-white/15 backdrop-blur border border-white/20 shadow-xl overflow-hidden">
                        {course.icon ? (
                          <Image
                            src={`/${course.icon}`}
                            alt={course.subtitle}
                            width={120}
                            height={120}
                            sizes="120px"
                            className="w-full h-full object-contain p-3"
                          />
                        ) : course.emoji ? (
                          <span className="text-5xl">{course.emoji}</span>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="space-y-6 p-6">
                    <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-slate-700">
                      <div className="flex items-center gap-2">
                        <Users
                          size={16}
                          className="text-[rgb(var(--brand-mint))]"
                        />
                        <span>{course.ages}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy
                          size={16}
                          className="text-[rgb(var(--brand-lilac))]"
                        />
                        <span>{course.level}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock
                          size={16}
                          className="text-[rgb(var(--brand-mint))]"
                        />
                        <span>{course.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar
                          size={16}
                          className="text-[rgb(var(--brand-lilac))]"
                        />
                        <span>{course.duration.split(" ")[0]} sesiones</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 text-sm font-extrabold text-slate-900">
                        Qué aprenderá:
                      </h4>
                      <div className="space-y-2">
                        {course.features.map((feature: string, i: number) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[rgb(var(--brand-mint))]" />
                            <span className="text-sm font-semibold text-slate-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-black/5 bg-[rgb(var(--brand-mint)/0.10)] p-3">
                      <Award
                        size={18}
                        className="text-[rgb(var(--brand-mint))]"
                      />
                      <span className="text-sm font-extrabold text-slate-800">
                        Proyecto final certificado
                      </span>
                    </div>

                    <div className="space-y-2 pt-1">
                      <Link
                        href={`/curso/${course.slug}`}
                        className="btn-primary w-full"
                      >
                        Ver Temario Completo
                      </Link>
                      <Link
                        href="/solicitar-plaza"
                        className="btn-secondary w-full"
                      >
                        Solicitar Plaza
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PATH */}
      <section className="relative overflow-hidden px-6 py-24 bg-[rgb(var(--brand-mint)/0.08)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-40 left-[-140px] h-[560px] w-[560px] rounded-full bg-[rgb(var(--brand-lilac))] opacity-10 blur-3xl" />
          <div className="absolute -bottom-52 right-[-180px] h-[680px] w-[680px] rounded-full bg-[rgb(var(--brand-mint))] opacity-10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-title text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Tu Camino de Aprendizaje
            </h2>
            <p className="mt-3 text-lg font-semibold text-slate-600">
              Progresa de principiante a experto
            </p>
          </div>

          <div className="mb-12 flex flex-wrap justify-center gap-6">
            {progression.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-60px" }}
                className="relative"
              >
                <Card className="w-[190px] bg-white/85 p-7 text-center backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl border border-black/5">
  <div
    className={`mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-3xl ${step.color} text-4xl shadow-lg`}
  >
    {step.emoji}
  </div>

  <h4 className="mb-2 text-base font-extrabold text-slate-900">
    {step.name}
  </h4>

  <p className="mb-1 text-sm font-semibold text-slate-600">
    {step.subtitle}
  </p>

  <p className="text-sm font-extrabold text-[rgb(var(--brand-lilac))]">
    {step.level} años
  </p>
</Card>

                {index < progression.length - 1 && (
                  <div
                    className="absolute top-1/2 hidden -translate-y-1/2 translate-x-full text-slate-400 lg:block"
                    style={{ right: "-0.75rem" }}
                  >
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="space-y-6 text-center">
            <p className="mx-auto max-w-2xl text-lg font-semibold text-slate-700">
              Cada curso está diseñado para construir sobre las habilidades
              anteriores, asegurando un progreso continuo y significativo.
            </p>

            <Link href="/solicitar-plaza" className="btn-primary px-10 py-4">
              Solicitar Clase de Prueba Gratuita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

```

## Archivo: `app/contacto/page.tsx`
```tsx
import type { Metadata } from "next";
import ContactoPageClient from "./ContactoPageClient";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contacto",
  description:
    "Contacta con ORI Academy para resolver dudas, consultar horarios y encontrar el curso de programación ideal para tu hijo o hija.",
  path: "/contacto",
});

export default function ContactoPage() {
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
        name: "Contacto",
        item: `${siteConfig.url}/contacto`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ContactoPageClient />
    </>
  );
}

```

## Archivo: `app/contacto/ContactoPageClient.tsx`
```tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { isValidEmail, isValidPhone } from "@/lib/validation";

const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "+34 624 54 74 06",
    link: "tel:+34624547406",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@oriacademy.es",
    link: "mailto:info@oriacademy.es",
  },
  {
    icon: MapPin,
    title: "Dirección",
    value: "Calle Cruz, 21, Albacete, 02001",
    link: "https://maps.google.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+34 624 54 74 06",
    link: "https://wa.me/34624547406",
  },
];

const talleresLabels: Record<string, string> = {
  "game-makers-junior": "Ori Game Makers Junior (7-9 años)",
  "programacion-creativa": "Ori Programación Creativa (10-12 años)",
  "game-makers-avanzado": "Ori Game Makers Avanzado (13-16 años)",
};

export default function Page() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string>("");

  const prefilledMessage = useMemo(() => {
    const taller = searchParams.get("taller");
    if (!taller) return "";
    const label = talleresLabels[taller] ?? taller;
    return `Hola, quiero más información sobre el taller: ${label}.`;
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);
    setSuccess(false);
    setError("");

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      // Honeypot anti-spam (debe ir vacío).
      company: String(formData.get("company") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setError("Por favor, completa los campos obligatorios.");
      setLoading(false);
      return;
    }

    if (!isValidEmail(payload.email)) {
      setError("Introduce un email válido.");
      setLoading(false);
      return;
    }

    if (payload.phone && !isValidPhone(payload.phone)) {
      setError("Introduce un teléfono válido.");
      setLoading(false);
      return;
    }

    if (payload.company) {
      setLoading(false);
      setSuccess(true);
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          message: payload.message,
        }),
      });

      const data = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!res.ok) {
        throw new Error(data?.error || "Error al enviar el mensaje.");
      }

      setSuccess(true);
      form.reset();
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Hubo un error al enviar el mensaje.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HERO premium */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))/26] via-slate-100 to-[rgb(var(--brand-lilac))/26]" />
        <div className="absolute inset-0 bg-slate-200/25" />
        <div className="absolute -top-44 -left-44 h-[680px] w-[680px] rounded-full bg-[rgb(var(--brand-mint))/24] blur-3xl" />
        <div className="absolute -bottom-56 -right-52 h-[760px] w-[760px] rounded-full bg-[rgb(var(--brand-lilac))/24] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[rgb(var(--ink))/80] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-[rgb(var(--brand-mint))]" />
              <span>Te ayudamos a elegir</span>
              <span className="opacity-40">·</span>
              <span>Sin compromiso</span>
            </div>

            <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900">
              Contacto
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]">
                ORI Academy
              </span>
            </h1>

            <p className="font-body mx-auto mt-6 max-w-3xl text-lg md:text-xl text-slate-700">
              Escríbenos y te orientamos según la edad y el nivel. Respondemos
              rápido.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#form"
                className="btn-primary w-full sm:w-auto rounded-full px-10 py-6 text-lg"
              >
                Enviar mensaje
              </a>
              <Link
                href="/solicitar-plaza"
                className="btn-secondary w-full sm:w-auto rounded-full px-10 py-6 text-lg"
              >
                Solicitar plaza
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 items-start">
          {/* INFO */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <h2 className="font-title text-3xl md:text-4xl font-extrabold text-slate-900">
                Información de contacto
              </h2>
              <p className="font-body mt-3 text-slate-600 text-lg">
                Elige la vía que te sea más cómoda.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const isHttp = info.link.startsWith("http");

                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={isHttp ? "_blank" : undefined}
                    rel={isHttp ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.55,
                      ease: EASE,
                      delay: index * 0.05,
                    }}
                    className="group flex items-start gap-4 rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <div className="relative">
                      <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))/18] to-[rgb(var(--brand-lilac))/18] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-lg">
                        <Icon size={22} className="text-white" />
                      </div>
                    </div>

                    <div>
                      <div className="font-semibold text-slate-900">
                        {info.title}
                      </div>
                      <div className="text-slate-600">{info.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <Card className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))/14] via-white to-[rgb(var(--brand-lilac))/14]" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-md">
                      <Clock size={20} className="text-white" />
                    </div>
                    <h3 className="font-title text-xl font-extrabold text-slate-900">
                      Horario de atención
                    </h3>
                  </div>

                  <div className="space-y-2 text-sm text-slate-700">
                    <p>
                      <span className="font-semibold">Lunes a Viernes:</span>{" "}
                      9:00 - 20:00
                    </p>
                    <p>
                      <span className="font-semibold">Sábados:</span> 10:00 -
                      14:00
                    </p>
                    <p>
                      <span className="font-semibold">Domingos:</span> Cerrado
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* FORM premium */}
          <div id="form">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="relative rounded-[32px] p-[1px] shadow-2xl"
            >
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] opacity-70 blur-sm" />

              <Card className="relative rounded-[30px] border border-white/60 bg-white/90 p-8 md:p-10 shadow-sm backdrop-blur-xl">
                <h2 className="font-title text-2xl md:text-3xl font-extrabold text-slate-900">
                  Envíanos un mensaje
                </h2>
                <p className="font-body mt-2 text-slate-600">
                  Te respondemos lo antes posible.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="hidden">
                    <label htmlFor="contact-company">
                      Company
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </label>
                  </div>

                  <PremiumInput
                    label="Nombre completo *"
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    required
                    disabled={loading}
                  />

                  <PremiumInput
                    label="Email *"
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    autoComplete="email"
                    disabled={loading}
                  />

                  <PremiumInput
                    label="Teléfono"
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+34 123 456 789"
                    autoComplete="tel"
                    disabled={loading}
                  />

                  <PremiumTextarea
                    label="Mensaje *"
                    id="contact-message"
                    name="message"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    required
                    defaultValue={prefilledMessage}
                    disabled={loading}
                  />

                  <Button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full rounded-full py-6 text-lg shadow-xl disabled:opacity-60"
                  >
                    <Send size={20} className="mr-2" />
                    {loading ? "Enviando..." : "Enviar mensaje"}
                  </Button>

                  {success && (
                    <div
                      role="status"
                      aria-live="polite"
                      className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
                    >
                      ¡Mensaje enviado! Te responderemos lo antes posible.
                    </div>
                  )}

                  {error && (
                    <div
                      role="alert"
                      aria-live="assertive"
                      className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                    >
                      {error}
                    </div>
                  )}
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-mint))/10] via-white to-[rgb(var(--brand-lilac))/10]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center mb-12"
          >
            <h2 className="font-title text-4xl md:text-5xl font-extrabold text-slate-900">
              Visítanos
            </h2>
            <p className="font-body mt-3 text-lg text-slate-600">
              Ven a conocer nuestras instalaciones.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))/14] via-white to-[rgb(var(--brand-lilac))/14]" />
            <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-white/40" />
            <div className="relative h-[420px] w-full">
              <iframe
                title="Mapa de ORI Academy en Albacete"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.9597863392423!2d-1.852814922981808!3d38.9934141410314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd665feab7ae0583%3A0xc119c9cf553eeba8!2sC.%20Cruz%2C%2021%2C%2002001%20Albacete!5e0!3m2!1ses!2ses!4v1772187015250!5m2!1ses!2ses"
                className="h-full w-full rounded-3xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.9)_1px,transparent_0)] [background-size:26px_26px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-title text-4xl md:text-5xl font-extrabold"
          >
            ¿Listo para empezar?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
            className="mt-5 text-lg md:text-xl opacity-90"
          >
            Agenda tu clase de prueba y te recomendamos el mejor camino.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/solicitar-plaza"
              className="btn-secondary bg-white hover:bg-white/90 text-slate-900 rounded-full px-10 py-7 text-lg shadow-lg"
            >
              Solicitar plaza
            </Link>
            <Link
              href="/cursos"
              className="rounded-full px-10 py-7 text-lg text-white border border-white/30 bg-white/15 hover:bg-white/20 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--brand-lilac))]"
            >
              Ver cursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function PremiumInput(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string },
) {
  const { label, className, id, name, ...rest } = props;
  const fieldId = id ?? name;
  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        id={fieldId}
        name={name}
        {...rest}
        className={
          "mt-2 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-slate-900 shadow-sm " +
          "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-mint))] " +
          "transition " +
          (className ?? "")
        }
      />
    </div>
  );
}

function PremiumTextarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string },
) {
  const { label, className, id, name, ...rest } = props;
  const fieldId = id ?? name;
  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <textarea
        id={fieldId}
        name={name}
        {...rest}
        className={
          "mt-2 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-slate-900 shadow-sm " +
          "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-mint))] " +
          "transition " +
          (className ?? "")
        }
      />
    </div>
  );
}

```

## Archivo: `app/solicitar-plaza/page.tsx`
```tsx
import type { Metadata } from "next";
import SolicitarPlazaPageClient from "./SolicitarPlazaPageClient";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Solicitar Plaza",
  description:
    "Solicita plaza en ORI Academy. Te ayudamos a elegir el curso adecuado según edad, nivel y objetivos del alumno.",
  path: "/solicitar-plaza",
});

export default function SolicitarPlazaPage() {
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
        name: "Solicitar plaza",
        item: `${siteConfig.url}/solicitar-plaza`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <SolicitarPlazaPageClient />
    </>
  );
}

```

## Archivo: `app/solicitar-plaza/SolicitarPlazaPageClient.tsx`
```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { isValidEmail, isValidPhone } from "@/lib/validation";
import {
  Sparkles,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  User,
  GraduationCap,
  Calendar,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

type FormState = {
  nombreAlumno: string;
  edad: string;
  curso: string;
  experiencia: string;
  nombreTutor: string;
  telefono: string;
  email: string;
  mensaje: string;
  recibirInfo: boolean;
};

const cursosOptions = [
  { value: "", label: "Selecciona un curso" },
  { value: "programacion1", label: "Fundamentos de la programación I" },
  { value: "programacion2", label: "Fundamentos de la programación II" },
  { value: "roblox", label: "Creación de juegos en Roblox" },
  { value: "unity", label: "Desarrollo con Unity I" },
  { value: "unity2", label: "Desarrollo con Unity II" },
  { value: "web", label: "Desarrollo Web" },
  { value: "ia", label: "Inteligencia Artificial I" },
  { value: "ia2", label: "Inteligencia Artificial II" }
];

export default function SolicitarPlazaPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormState>({
    nombreAlumno: "",
    edad: "",
    curso: "",
    experiencia: "principiante",
    nombreTutor: "",
    telefono: "",
    email: "",
    mensaje: "",
    recibirInfo: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      const target = e.target;
      const { name, checked } = target;
      setFormData((p) => ({ ...p, [name]: checked }));
      return;
    }

    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOk(false);
    setErrorMsg(null);

    if (
      !formData.nombreAlumno.trim() ||
      !formData.edad.trim() ||
      !formData.nombreTutor.trim() ||
      !formData.telefono.trim() ||
      !formData.email.trim()
    ) {
      setErrorMsg("Por favor, completa los campos obligatorios.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setErrorMsg("Introduce un email válido.");
      return;
    }

    if (!isValidPhone(formData.telefono)) {
      setErrorMsg("Introduce un teléfono válido.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/solicitar-plaza", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMsg(data?.error || "No se pudo enviar la solicitud.");
        return;
      }

      setOk(true);
      setFormData({
        nombreAlumno: "",
        edad: "",
        curso: "",
        experiencia: "principiante",
        nombreTutor: "",
        telefono: "",
        email: "",
        mensaje: "",
        recibirInfo: true,
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setErrorMsg("Error de red. Inténtalo de nuevo en unos segundos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))/26] via-slate-100 to-[rgb(var(--brand-lilac))/26]" />
        <div className="absolute inset-0 bg-slate-200/25" />
        <div className="absolute -top-44 -left-44 h-[680px] w-[680px] rounded-full bg-[rgb(var(--brand-mint))/24] blur-3xl" />
        <div className="absolute -bottom-56 -right-52 h-[760px] w-[760px] rounded-full bg-[rgb(var(--brand-lilac))/24] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center"
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[rgb(var(--ink))/80] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-[rgb(var(--brand-mint))]" />
              <span>Plazas limitadas</span>
              <span className="opacity-40">·</span>
              <span>Respuesta rápida</span>
            </div>

            <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900">
              Solicitar
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]">
                Plaza
              </span>
            </h1>

            <p className="font-body mx-auto mt-6 max-w-3xl text-lg md:text-xl text-slate-700">
              Cuéntanos la edad y el nivel. Te recomendamos el curso ideal y te confirmamos
              disponibilidad.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#form" className="btn-primary w-full sm:w-auto rounded-full px-10 py-6 text-lg">
                Rellenar solicitud
              </a>
              <Link href="/cursos" className="btn-secondary w-full sm:w-auto rounded-full px-10 py-6 text-lg">
                Ver cursos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section id="form" className="py-20 px-6">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-3 items-start">
          {/* FORM */}
          <div className="lg:col-span-2">
            {ok ? (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                role="status"
                aria-live="polite"
                className="rounded-3xl border border-black/10 bg-white p-10 md:p-12 shadow-xl text-center"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-lg">
                  <CheckCircle2 className="h-10 w-10 text-white" />
                </div>

                <h2 className="font-title text-3xl md:text-4xl font-extrabold text-slate-900">
                  ¡Solicitud enviada!
                </h2>

                <p className="font-body mt-4 text-lg text-slate-700">
                  Gracias. Te contactaremos pronto para confirmar disponibilidad y recomendarte
                  el curso ideal.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/cursos"
                    className="btn-secondary rounded-full px-10 py-6 text-lg"
                  >
                    Ver cursos
                  </Link>
                  <Button
                    className="btn-primary rounded-full px-10 py-6 text-lg"
                    onClick={() => setOk(false)}
                  >
                    Enviar otra solicitud
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: EASE }}
                className="relative rounded-[32px] p-[1px] shadow-2xl"
              >
                {/* borde degradado */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] opacity-70 blur-sm" />

                <Card className="relative rounded-[30px] border border-white/60 bg-white/90 p-8 md:p-10 shadow-sm backdrop-blur-xl">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h2 className="font-title text-2xl md:text-3xl font-extrabold text-slate-900">
                        Solicitud de plaza
                      </h2>
                      <p className="font-body mt-2 text-slate-600">
                        Completa los datos y te contactamos.
                      </p>
                    </div>
                    <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-lg">
                      <Send className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                    {/* Alumno */}
                    <div className="space-y-5">
                      <div className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
                        Datos del alumno
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <PremiumInput
                          label="Nombre del alumno *"
                          name="nombreAlumno"
                          value={formData.nombreAlumno}
                          onChange={handleChange}
                          disabled={loading}
                          placeholder="Nombre y apellidos"
                          icon={<User className="h-4 w-4" />}
                        />

                        <PremiumSelect
                          label="Edad *"
                          name="edad"
                          value={formData.edad}
                          onChange={handleChange}
                          disabled={loading}
                          icon={<GraduationCap className="h-4 w-4" />}
                        >
                          <option value="">Selecciona edad</option>
                          {Array.from({ length: 10 }, (_, i) => 7 + i).map((n) => (
                            <option key={n} value={String(n)}>
                              {n} años
                            </option>
                          ))}
                        </PremiumSelect>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <PremiumSelect
                          label="Curso de interés"
                          name="curso"
                          value={formData.curso}
                          onChange={handleChange}
                          disabled={loading}
                          icon={<Calendar className="h-4 w-4" />}
                        >
                          {cursosOptions.map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </PremiumSelect>

                        <PremiumSelect
                          label="Nivel / experiencia"
                          name="experiencia"
                          value={formData.experiencia}
                          onChange={handleChange}
                          disabled={loading}
                          icon={<ShieldCheck className="h-4 w-4" />}
                        >
                          <option value="principiante">Principiante</option>
                          <option value="medio">Intermedio</option>
                          <option value="avanzado">Avanzado</option>
                        </PremiumSelect>
                      </div>

                      <PremiumTextarea
                        label="Mensaje (opcional)"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="¿Algo que debamos saber? (experiencia previa, disponibilidad, etc.)"
                        rows={4}
                      />
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                    {/* Tutor */}
                    <div className="space-y-5">
                      <div className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
                        Datos de contacto
                      </div>

                      <PremiumInput
                        label="Nombre del padre/madre/tutor *"
                        name="nombreTutor"
                        value={formData.nombreTutor}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="Nombre completo"
                        icon={<User className="h-4 w-4" />}
                      />

                      <div className="grid gap-6 md:grid-cols-2">
                        <PremiumInput
                          label="Teléfono *"
                          name="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={handleChange}
                          disabled={loading}
                          placeholder="+34 ..."
                          icon={<Phone className="h-4 w-4" />}
                        />
                        <PremiumInput
                          label="Email *"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={loading}
                          placeholder="tu@email.com"
                          icon={<Mail className="h-4 w-4" />}
                        />
                      </div>

                      <div className="flex items-start gap-3 rounded-2xl bg-slate-50 px-6 py-4 border border-slate-200">
                        <input
                          id="recibirInfo"
                          name="recibirInfo"
                          type="checkbox"
                          checked={formData.recibirInfo}
                          onChange={handleChange}
                          disabled={loading}
                          className="mt-1 h-5 w-5 rounded accent-[rgb(var(--brand-mint))]"
                        />
                        <label htmlFor="recibirInfo" className="text-sm text-slate-600">
                          Quiero recibir información de cursos y novedades
                        </label>
                      </div>

                      {errorMsg && (
                        <div
                          role="alert"
                          aria-live="assertive"
                          className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                        >
                          {errorMsg}
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full rounded-full py-6 text-lg shadow-xl disabled:opacity-60"
                      >
                        {loading ? "Enviando..." : "Enviar solicitud"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>

                      <p className="text-center text-xs text-slate-500">
                        Te contactaremos para confirmar disponibilidad · Sin compromiso
                      </p>
                    </div>
                  </form>
                </Card>
              </motion.div>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
              className="sticky top-24 space-y-6"
            >
              <Card className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
                <h3 className="font-title text-xl font-extrabold text-slate-900">
                  ¿Qué pasa después?
                </h3>
                <div className="mt-4 space-y-3 text-slate-700">
                  <Step n="1" text="Revisamos tu solicitud." />
                  <Step n="2" text="Te llamamos / escribimos para confirmar." />
                  <Step n="3" text="Te recomendamos el curso ideal y horarios." />
                  <Step n="4" text="Reservamos plaza y listo." />
                </div>
              </Card>

              <Card className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
                <h3 className="font-title text-xl font-extrabold text-slate-900">
                  ¿Prefieres hablar ahora?
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Te orientamos en 2 minutos por teléfono o WhatsApp.
                </p>

                <div className="mt-5 space-y-3">
                  <a href="tel:+34624547406" className="btn-primary w-full rounded-full px-8 py-6 text-lg">
                    <Phone className="mr-2 h-5 w-5" />
                    +34 624 54 74 06
                  </a>

                  <a
                    href="https://wa.me/34624547406"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full rounded-full px-8 py-6 text-lg"
                  >
                    WhatsApp
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Step({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[rgb(var(--brand-mint))/18] text-sm font-extrabold text-slate-900">
        {n}
      </span>
      <span className="font-body">{text}</span>
    </div>
  );
}

function PremiumInput(
  props: React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    icon?: React.ReactNode;
  }
) {
  const { label, icon, className, id, name, ...rest } = props;
  const fieldId = id ?? name;
  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-semibold text-slate-700">{label}</label>
      <div className="mt-2 flex items-center gap-3 rounded-2xl border border-black/10 bg-white/80 px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[rgb(var(--brand-mint))] transition">
        {icon ? <span className="text-slate-400">{icon}</span> : null}
        <input
          id={fieldId}
          name={name}
          {...rest}
          className={
            "w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none " +
            (className ?? "")
          }
        />
      </div>
    </div>
  );
}

function PremiumSelect(
  props: React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
  }
) {
  const { label, icon, className, children, id, name, ...rest } = props;
  const fieldId = id ?? name;
  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-semibold text-slate-700">{label}</label>
      <div className="mt-2 flex items-center gap-3 rounded-2xl border border-black/10 bg-white/80 px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[rgb(var(--brand-mint))] transition">
        {icon ? <span className="text-slate-400">{icon}</span> : null}
        <select
          id={fieldId}
          name={name}
          {...rest}
          className={
            "w-full bg-transparent text-slate-900 focus:outline-none " + (className ?? "")
          }
        >
          {children}
        </select>
      </div>
    </div>
  );
}

function PremiumTextarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
  }
) {
  const { label, className, id, name, ...rest } = props;
  const fieldId = id ?? name;
  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-semibold text-slate-700">{label}</label>
      <textarea
        id={fieldId}
        name={name}
        {...rest}
        className={
          "mt-2 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-slate-900 shadow-sm " +
          "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-mint))] transition " +
          (className ?? "")
        }
      />
    </div>
  );
}

```

## Archivo: `app/talleres/page.tsx`
```tsx
import type { Metadata } from "next";
import TalleresPageClient from "./TalleresPageClient";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Talleres Intensivos de Programación",
  description:
    "Talleres intensivos de programación y creación de videojuegos por edades. Grupos reducidos y metodología práctica en ORI Academy.",
  path: "/talleres",
});

export default function TalleresPage() {
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
        name: "Talleres",
        item: `${siteConfig.url}/talleres`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <TalleresPageClient />
    </>
  );
}

```

## Archivo: `app/talleres/TalleresPageClient.tsx`
```tsx
"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Clock,
  Award,
  UserCircle,
  Gamepad2,
  Code2,
  Blocks,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { isValidEmail, isValidPhone } from "@/lib/validation";

const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

type FormState = {
  nombreAlumno: string;
  edad: string;
  taller: string;
  nombrePadre: string;
  telefono: string;
  email: string;
  recibirInfo: boolean;
};

export default function TalleresPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormState>({
    nombreAlumno: "",
    edad: "",
    taller: "",
    nombrePadre: "",
    telefono: "",
    email: "",
    recibirInfo: false,
  });

  const talleres = useMemo(
    () => [
      {
        id: "game-makers-junior",
        edad: "7–9 años",
        title: "Ori Game Makers Junior",
        subtitle: "Crea tu primer videojuego jugando y aprendiendo.",
        icon: Blocks,
        highlights: [
          { icon: Gamepad2, text: "Videojuegos con Scratch" },
          { icon: UserCircle, text: "Ideal para principiantes" },
          { icon: Clock, text: "5 días · 90'/día" },
          { icon: Users, text: "Grupos reducidos" },
        ],
      },
      {
        id: "programacion-creativa",
        edad: "10–12 años",
        title: "Ori Programación Creativa",
        subtitle: "Lógica, creatividad y proyectos que enganchan.",
        icon: Code2,
        highlights: [
          { icon: Sparkles, text: "Proyectos creativos" },
          { icon: UserCircle, text: "Nivel medio" },
          { icon: Clock, text: "5 días · 90'/día" },
          { icon: Users, text: "Grupos reducidos" },
        ],
      },
      {
        id: "game-makers-avanzado",
        edad: "13-16 años",
        title: "Ori Game Makers Avanzado",
        subtitle: "Más retos, más mecánicas, más nivel.",
        icon: Award,
        highlights: [
          { icon: Gamepad2, text: "Mecánicas más avanzadas" },
          { icon: ShieldCheck, text: "Para alumnos con experiencia" },
          { icon: Clock, text: "5 días · 90'/día" },
          { icon: Users, text: "Grupos reducidos" },
        ],
      },
      
    ],
    [],
  );

  const resetForm = () => {
    setFormData({
      nombreAlumno: "",
      edad: "",
      taller: "",
      nombrePadre: "",
      telefono: "",
      email: "",
      recibirInfo: false,
    });
    setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (
      !formData.nombreAlumno.trim() ||
      !formData.edad.trim() ||
      !formData.taller.trim() ||
      !formData.nombrePadre.trim() ||
      !formData.telefono.trim() ||
      !formData.email.trim()
    ) {
      setErrorMsg("Por favor, completa todos los campos obligatorios.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setErrorMsg("Introduce un email válido.");
      return;
    }

    if (!isValidPhone(formData.telefono)) {
      setErrorMsg("Introduce un teléfono válido.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/semana-santa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMsg(data?.error || "No se pudo enviar la solicitud.");
        return;
      }

      setFormSubmitted(true);
      resetForm();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setErrorMsg("Error de red. Inténtalo de nuevo en unos segundos.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = e.target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      const { name, checked } = target;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
<section className="relative overflow-hidden">
  {/* Fondo tipo Cursos */}
  <div className="absolute inset-0 
    bg-gradient-to-r 
    from-[rgb(var(--brand-mint))/28] 
    via-slate-100 
    to-[rgb(var(--brand-lilac))/28]" 
  />

  {/* Capa gris suave para ese efecto ligeramente frío */}
  <div className="absolute inset-0 bg-slate-200/30" />

  {/* Glow lateral mint */}
  <div className="absolute -top-40 -left-32 h-[600px] w-[600px] 
    rounded-full bg-[rgb(var(--brand-mint))/30] blur-3xl" 
  />

  {/* Glow lateral lilac */}
  <div className="absolute -bottom-48 -right-32 h-[650px] w-[650px] 
    rounded-full bg-[rgb(var(--brand-lilac))/30] blur-3xl" 
  />

  <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="text-center"
    >
      <h1 className="font-title text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 ">
        Talleres de Programación
        <span className="block text-transparent bg-clip-text
          bg-gradient-to-r   
          from-[rgb(var(--brand-mint))] 
          to-[rgb(var(--brand-lilac))]">
          para crear videojuegos
        </span>
      </h1>

      <p className="font-body mx-auto mt-6 max-w-3xl text-lg md:text-2xl text-slate-700">
        5 días para que aprendan creando: lógica, creatividad, programación y proyectos jugables en todas las clases.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#reserva" className="btn-primary w-full sm:w-auto rounded-full px-10 py-6 text-lg shadow-lg">
          Solicitar información
        </a>
        <a href="#talleres" className="btn-secondary w-full sm:w-auto rounded-full px-10 py-6 text-lg">
          Ver talleres
        </a>
      </div>
    </motion.div>
  </div>
</section>

      {/* TALLERES */}
      <section id="talleres" className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center"
          >
            <h2 className="font-title text-4xl md:text-5xl font-extrabold text-gray-900">
              Elige tu taller
            </h2>
            <p className="font-body mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              3 opciones por edades y nivel. Mismo enfoque: aprender creando.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {talleres.map((t, idx) => {
              const Icon = t.icon;
              const isSelected = formData.taller === t.id;

              return (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: idx * 0.06 }}
                >
                  <Card className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                    {/* Header */}
                    <div className="relative p-7">
                      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))/18] via-white to-[rgb(var(--brand-lilac))/18]" />
                      <div className="relative flex items-start justify-between gap-6">
                        <div>
                          <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur">
                            {t.edad}
                          </div>
                          <h3 className="font-title mt-3 text-2xl font-extrabold text-gray-900">
                            {t.title}
                          </h3>
                          <p className="font-body mt-2 text-gray-700">
                            {t.subtitle}
                          </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] text-white shadow-md">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-7 pt-0">
                      <div className="mt-4 space-y-3">
                        {t.highlights.map((h, i) => {
                          const Hi = h.icon;
                          return (
                            <div
                              key={i}
                              className="flex items-center gap-3 text-gray-700"
                            >
                              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm">
                                <Hi className="h-5 w-5 text-[rgb(var(--brand-mint))]" />
                              </span>
                              <span className="font-body">{h.text}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-8 flex flex-col gap-3">
                        <Link
                          href={`/contacto?taller=${encodeURIComponent(t.id)}`}
                          className={
                            "w-full rounded-full py-6 text-lg " +
                            (isSelected ? "btn-primary" : "btn-soft-lilac")
                          }
                        >
                          {isSelected ? "Seleccionado ✓" : "Solicitar información"}
                        </Link>

                        <div className="text-center text-xs text-gray-500">
                          Te contactamos para confirmar disponibilidad
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INCLUYE */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-mint))/10] via-white to-[rgb(var(--brand-lilac))/10]" />
        <div className="absolute -top-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-[rgb(var(--brand-mint))/18] blur-3xl" />
        <div className="absolute -bottom-44 left-[-140px] h-[560px] w-[560px] rounded-full bg-[rgb(var(--brand-lilac))/18] blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="space-y-6"
            >
              <h2 className="font-title text-4xl md:text-5xl font-extrabold text-gray-900">
                Qué incluye el taller
              </h2>
              <p className="font-body text-lg text-gray-700">
                Una experiencia completa para que se inicien en el mundo de la programación mientras se divierten.
              </p>

              <div className="grid gap-4">
                <Feature
                  icon={<Users className="h-5 w-5 text-white" />}
                  title="Grupos reducidos"
                  desc="Atención cercana y ritmo adaptado."
                />
                <Feature
                  icon={<Clock className="h-5 w-5 text-white" />}
                  title="Formato intensivo"
                  desc="5 días · 90'/día."
                />
                <Feature
                  icon={<Award className="h-5 w-5 text-white" />}
                  title="Diploma incluido"
                  desc="Se llevan su logro a casa."
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
              className="space-y-6"
            >
              <Card className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
                <h3 className="font-title text-2xl font-extrabold text-gray-900">
                  ¿Qué se llevan a casa?
                </h3>

                <ul className="mt-6 space-y-4 text-gray-700">
                  <Bullet>Un proyecto final jugable creado por ellos.</Bullet>
                  <Bullet>
                    Conceptos de programación aplicados de forma práctica.
                  </Bullet>
                  <Bullet>
                    Motivación y confianza para seguir aprendiendo.
                  </Bullet>
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#reserva" className="btn-primary w-full rounded-full px-8 py-6 text-lg shadow-lg">
                    Quiero reservar
                  </a>
                  <a href="#talleres" className="btn-secondary w-full sm:w-auto rounded-full px-10 py-6 text-lg">
                    Ver opciones
                  </a>
                </div>
              </Card>

              <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] text-white shadow-md">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Metodología ORI
                    </p>
                    <p className="font-body text-gray-600">
                      Aprenden “haciendo”, con retos, feedback y mini-logros
                      diarios.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="reserva" className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-mint))/10] via-white to-[rgb(var(--brand-lilac))/10]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.25] [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] [background-size:28px_28px]" />

        <div className="relative mx-auto max-w-3xl px-6">
          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              role="status"
              aria-live="polite"
              className="rounded-3xl border border-black/10 bg-white p-10 md:p-12 shadow-xl text-center"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-lg">
                <CheckCircle2 className="h-10 w-10 text-white" />
              </div>

              <h2 className="font-title text-3xl md:text-4xl font-extrabold text-gray-900">
                ¡Solicitud enviada!
              </h2>

              <p className="font-body mt-4 text-lg text-gray-700">
                Gracias por tu interés. Te contactaremos pronto para confirmar
                disponibilidad y detalles.
              </p>

              <div className="mt-8">
                <Button
                  onClick={() => {
                    setFormSubmitted(false);
                    setErrorMsg(null);
                  }}
                  className="btn-primary rounded-full px-10 py-6 text-lg shadow-lg"
                >
                  Enviar otra solicitud
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
  initial={{ opacity: 0, y: 14 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.6, ease: EASE }}
  className="relative rounded-[32px] p-[1px] shadow-2xl"
>
  {/* Borde degradado exterior */}
  <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] opacity-70 blur-sm" />

  {/* Card interior */}
  <div className="relative rounded-[30px] bg-white/90 backdrop-blur-xl border border-white/60 p-10 md:p-14">

    <div className="text-center">
      <h2 className="font-title text-4xl md:text-5xl font-extrabold text-slate-900">
        Solicita información
      </h2>
      <p className="font-body mt-4 text-slate-600 text-lg">
        Completa el formulario y nos pondremos en contacto para confirmar disponibilidad y resolver tus dudas. Sin compromiso.
      </p>
    </div>

    <form onSubmit={handleSubmit} className="mt-12 space-y-8">

      {/* BLOQUE ALUMNO */}
      <div className="space-y-6">
        <h3 className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
          Datos del alumno
        </h3>

        <div className="grid gap-6 md:grid-cols-2">
          <PremiumInput
            label="Nombre del alumno *"
            id="nombreAlumno"
            name="nombreAlumno"
            value={formData.nombreAlumno}
            onChange={handleChange}
            disabled={loading}
            placeholder="Nombre y apellidos"
          />

          <PremiumSelect
            label="Edad *"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="">Selecciona edad</option>
            {Array.from({ length: 10 }, (_, i) => 7 + i).map((n) => (
              <option key={n} value={String(n)}>
                {n} años
              </option>
            ))}
          </PremiumSelect>
        </div>

        <PremiumSelect
          label="Taller de interés *"
          id="taller"
          name="taller"
          value={formData.taller}
          onChange={handleChange}
          disabled={loading}
        >
          <option value="">Selecciona un taller</option>
          <option value="game-makers-junior">
            Ori Game Makers Junior (7–9 años)
          </option>
          <option value="programacion-creativa">
            Ori Programación Creativa (10–12 años)
          </option>
          <option value="game-makers-avanzado">
            Ori Game Makers Avanzado (13-16 años)
          </option>
          <option value="no-lo-tengo-claro">
            No lo tengo claro todavía
          </option>
        </PremiumSelect>
      </div>

      {/* DIVISOR */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      {/* BLOQUE CONTACTO */}
      <div className="space-y-6">
        <h3 className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
          Datos de contacto
        </h3>

        <PremiumInput
          label="Nombre del padre/madre/tutor *"
          id="nombrePadre"
          name="nombrePadre"
          value={formData.nombrePadre}
          onChange={handleChange}
          disabled={loading}
          placeholder="Nombre completo"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <PremiumInput
            label="Teléfono *"
            id="telefono"
            name="telefono"
            type="tel"
            value={formData.telefono}
            onChange={handleChange}
            disabled={loading}
            placeholder="+34..."
          />

          <PremiumInput
            label="Email *"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            placeholder="tu@email.com"
          />
        </div>
      </div>

      {/* CHECKBOX */}
      <div className="flex items-start gap-3 rounded-2xl bg-slate-50 px-6 py-4 border border-slate-200">
        <input
          id="recibirInfo"
          name="recibirInfo"
          type="checkbox"
          checked={formData.recibirInfo}
          onChange={handleChange}
          disabled={loading}
          className="mt-1 h-5 w-5 rounded accent-[rgb(var(--brand-mint))]"
        />
        <label htmlFor="recibirInfo" className="text-sm text-slate-600">
          Quiero recibir información de los cursos anuales
        </label>
      </div>

      {errorMsg && (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {errorMsg}
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="btn-primary w-full py-6 text-lg shadow-xl"
      >
        {loading ? "Enviando..." : "Solicitar información"}
      </Button>

      <p className="text-center text-sm text-slate-500">
        Te contactaremos para confirmar disponibilidad · Sin compromiso
      </p>
    </form>
  </div>
</motion.div>
          )}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.9)_1px,transparent_0)] [background-size:26px_26px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-title text-2xl md:text-3xl font-extrabold"
          >
            Las vacaciones también pueden ser una oportunidad para aprender algo
            que les motive.
          </motion.p>

          <div className="mt-10">
            <a
              href="#reserva"
              className="btn-secondary rounded-full px-12 py-6 text-lg shadow-lg bg-white text-gray-900 hover:bg-white/90"
            >
              Solicitar información
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- UI bits ---------- */

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-md">
        {icon}
      </div>
      <div>
        <p className="font-title font-extrabold text-gray-900">{title}</p>
        <p className="font-body text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-[rgb(var(--brand-mint))]" />
      <span className="font-body">{children}</span>
    </li>
  );
}

function PremiumInput(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }
) {
  const { label, id, name, className, ...rest } = props;
  const fieldId = id ?? name;
  return (
    <div>
      <label htmlFor={fieldId} className="text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        id={fieldId}
        name={name}
        {...rest}
        className={
          "mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-4 py-3 shadow-sm " +
          "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-mint))] transition " +
          (className ?? "")
        }
      />
    </div>
  );
}

function PremiumSelect(
  props: React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
    children: React.ReactNode;
  }
) {
  const { label, children, id, name, className, ...rest } = props;
  const fieldId = id ?? name;
  return (
    <div>
      <label htmlFor={fieldId} className="text-sm font-semibold text-slate-700">
        {label}
      </label>
      <select
        id={fieldId}
        name={name}
        {...rest}
        className={
          "mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-4 py-3 shadow-sm " +
          "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand-mint))] transition " +
          (className ?? "")
        }
      >
        {children}
      </select>
    </div>
  );
}

```

## Archivo: `app/por-que-ori/page.tsx`
```tsx
// src/app/por-que-ori/page.tsx
import grupo from "@/public/gruponiños.png";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";
import { Sparkles, Trophy, Users, Heart, Zap, Target } from "lucide-react";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Por Qué ORI Academy",
  description:
    "Conoce la metodología, valores y beneficios de ORI Academy para aprender programación y desarrollo de videojuegos desde edades tempranas.",
  path: "/por-que-ori",
});

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
    color: "from-teal-400 to-violet-500",
    title: "Clases Reducidas",
    description:
      "Grupos pequeños de 8-12 estudiantes para atención personalizada y mejor aprendizaje.",
  },
  {
    id: 3,
    icon: Trophy,
    color: "from-emerald-400 to-violet-500",
    title: "Certificación",
    description:
      "Certificados al completar cada curso y portfolio de proyectos realizados.",
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
    color: "from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]",
    title: "Futuro Profesional",
    description:
      "Preparamos a los estudiantes para carreras en tecnología, programación y diseño de videojuegos.",
  },
];

const testimonials = [
  {
    name: "Elisabeth",
    role: "Madre de estudiante",
    text: "Nos ha encantado la experiencia. Mi hijo se lo ha pasado en grande y Dani, el profesor, fue muy atento y paciente. Sin duda repetiríamos.",
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
        name: "Por qué ORI",
        item: `${siteConfig.url}/por-que-ori`,
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
        <div className="absolute -top-44 -left-44 hidden h-[680px] w-[680px] rounded-full bg-[rgb(var(--brand-mint))/24] blur-3xl md:block" />
        <div className="absolute -bottom-56 -right-52 hidden h-[760px] w-[760px] rounded-full bg-[rgb(var(--brand-lilac))/24] blur-3xl md:block" />

        {/* grid sutil */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[rgb(var(--ink))/80] shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-[rgb(var(--brand-mint))]" />
                <span>Metodología práctica</span>
                <span className="opacity-40">·</span>
                <span>Proyectos reales</span>
              </div>

              <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900">
                ¿Por qué elegir
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]">
                  ORI Academy?
                </span>
              </h1>

              <p className="font-body text-xl text-slate-700">
                Somos más que una escuela de programación.
                <br />
                Somos una comunidad que inspira a crear.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contacto" className="btn-primary rounded-full px-8 py-6 text-lg">
                  Agenda una visita
                </Link>
                <a href="#testimonios" className="btn-secondary rounded-full px-8 py-6 text-lg">
                  Ver testimonios
                </a>
              </div>
            </div>

            {/* Right image */}
            <div
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-[rgb(var(--brand-mint))/18] to-[rgb(var(--brand-lilac))/18] blur-2xl" />
              <Image
                src={grupo}
                alt="Estudiantes trabajando en equipo"
                width={1080}
                height={720}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="relative w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
          >
            <h2 className="font-title text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Lo que nos hace diferentes
            </h2>
            <p className="font-body text-xl text-slate-600">
              Una experiencia educativa única y transformadora
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.id}
                >
                  <Card className="relative overflow-hidden p-8 rounded-3xl bg-white border border-black/10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] via-transparent to-black/[0.02]" />
                    <div className="relative">
                      <div className="mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg`}
                        >
                          <Icon size={32} className="text-white" strokeWidth={2} />
                        </div>
                      </div>

                      <h3 className="font-title text-2xl font-extrabold text-slate-900 mb-3">
                        {benefit.title}
                      </h3>

                      <p className="font-body text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* (ELIMINADO) Nuestro Equipo */}

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
          >
            <h2 className="font-title text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Lo que dicen nuestras familias
            </h2>
            <p className="font-body text-xl text-slate-600">
              Testimonios reales de padres y estudiantes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
              >
                <Card className="p-8 rounded-3xl bg-white border border-black/10 shadow-sm hover:shadow-xl transition-shadow">
                  <div className="mb-6">
                    <svg
                      className="w-12 h-12 text-[rgb(var(--brand-mint))] opacity-40"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <p className="font-body text-slate-700 mb-6 italic leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div>
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-600">{t.role}</div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-title text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            ¿Listo para unirte a ORI Academy?
          </h2>

          <p className="font-body text-xl text-slate-600 mb-10">
            Agenda una clase de prueba y descubre por qué somos la mejor opción.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/solicitar-plaza" className="btn-primary rounded-full px-10 py-7 text-lg shadow-lg">
              Solicitar plaza
            </Link>

            <Link href="/contacto" className="btn-secondary rounded-full px-10 py-7 text-lg shadow-lg">
              Hablar con nosotros
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

```

## Archivo: `app/camino-alumno/page.tsx`
```tsx
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

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24 text-center">
          <div
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[rgb(var(--ink))/80] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-[rgb(var(--brand-mint))]" />
              <span>Ruta completa 7–16 años</span>
              <span className="opacity-40">·</span>
              <span>Proyectos reales</span>
            </div>

            <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900">
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
              <a href="#timeline" className="btn-primary w-full sm:w-auto rounded-full px-10 py-6 text-lg">
                Ver etapas
              </a>
              <Link href="/solicitar-plaza" className="btn-secondary w-full sm:w-auto rounded-full px-10 py-6 text-lg">
                Solicitar plaza
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE premium */}
      <section id="timeline" className="relative py-20 px-6">
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
                <Link href="/contacto" className="btn-primary rounded-full px-8 py-6 text-lg">
                  Hablar con nosotros <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* PORTFOLIO + CERTIFICACIONES premium */}
      <section className="relative overflow-hidden py-20 px-6">
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
            <div
            >
              
            </div>

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
                    <Link href="/solicitar-plaza" className="btn-primary rounded-full px-8 py-6 text-lg">
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
          <Link href="/cursos" className="btn-soft-lilac rounded-full px-7 py-5 text-base">
            Ver cursos
          </Link>
          <Link href="/contacto" className="btn-secondary rounded-full px-7 py-5 text-base">
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

```

## Archivo: `app/horarios/page.tsx`
```tsx
import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Horarios",
  description:
    "Consulta la disponibilidad de horarios de ORI Academy para cursos anuales y talleres intensivos.",
  path: "/horarios",
});

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
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-title text-4xl md:text-5xl font-extrabold text-slate-900">
            Horarios
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Los grupos se organizan por edad y nivel. Para confirmar horarios
            disponibles esta semana, te recomendamos escribirnos.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
              <p className="font-semibold text-slate-900">Cursos anuales</p>
              <p className="mt-2 text-sm text-slate-600">
                Sesiones semanales de 90-120 minutos según curso.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
              <p className="font-semibold text-slate-900">Talleres intensivos</p>
              <p className="mt-2 text-sm text-slate-600">
                Bloques de varios días en periodos vacacionales.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-primary">
              Consultar disponibilidad
            </Link>
            <Link href="/cursos" className="btn-secondary">
              Ver cursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

```

## Archivo: `app/curso/[slug]/page.tsx`
```tsx
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
        <div className="absolute -top-40 -left-40 h-[650px] w-[650px] rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-52 -right-40 h-[700px] w-[700px] rounded-full bg-black/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:64px_64px]" />

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
                <Link
                  href="/solicitar-plaza"
                  className="btn-secondary bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 py-6 text-lg shadow-xl"
                >
                  Solicitar plaza
                </Link>

                <Link
                  href="/cursos"
                  className="rounded-full px-8 py-6 text-lg text-white border border-white/30 bg-white/15 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--brand-lilac))]"
                >
                  ← Volver a cursos
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
              <Link href="/horarios" className="btn-primary rounded-full px-8 py-6 text-lg">
                Consultar horarios
              </Link>
              <Link href="/contacto" className="btn-soft-lilac rounded-full px-8 py-6 text-lg">
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
                  href="/solicitar-plaza"
                  className="btn-primary w-full rounded-full px-6 py-6 text-lg"
                >
                  Reservar plaza
                </Link>

                <Link
                  href="/contacto"
                  className="btn-secondary w-full rounded-full px-6 py-6 text-lg"
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

```

## Archivo: `lib/data/courses.tsx`
```tsx
export type Course = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  gradient: string;
  icon?: string;
  emoji?: string;
  description: string;
  features: string[];
  ages: string;
  level: string;
  duration: string;
  hours: string;
  students: string;
};

export const courses: Course[] = [
  {
    id: 1,
    slug: "fundamentos-programacion-i",
    title: "Fundamentos de Programación I",
    subtitle: "Scratch",
    gradient: "from-orange-400 to-orange-600",
    icon: "logos/scratch.svg",
    description: "Introducción a la programación visual",
    features: [
      "Pensamiento lógico y computacional",
      "Programación por bloques",
      "Creación de juegos y animaciones",
      "Introducción a conceptos básicos de programación",
    ],
    ages: "7-9 años",
    level: "Principiante",
    duration: "+35 sesiones de 90 min",
    hours: "+50 horas",
    students: "10 por clase",
  },
  {
    id: 2,
    slug: "fundamentos-programacion-ii",
    title: "Fundamentos de Programación II",
    subtitle: "Minecraft Education",
    gradient: "from-green-500 to-green-700",
    icon: "logos/image.png",
    description: "Aprende programando en Minecraft",
    features: [
      "Programación por bloques en Minecraft",
      "Programación visual y Python",
      "Resolución de problemas",
      "Construcción con código",
      "Ideal para alumnos que ya hayan cursado Fundamentos de Programación I",
    ],
    ages: "7-9 años",
    level: "Principiante",
    duration: "+35 sesiones de 90 min",
    hours: "+50 horas",
    students: "10 por clase",
  },
  {
    id: 3,
    slug: "creacion-juegos-roblox",
    title: "Creación de Juegos en Roblox",
    subtitle: "Lua Programming",
    gradient: "from-red-500 to-pink-600",
    icon: "logos/roblox.svg",
    description: "Crea tus propios mundos en Roblox",
    features: [
      "Programación en Lua",
      "Diseño de niveles 3D",
      "Mecánicas de juego",
      "Publicación de juegos",
      "Se requiere experiencia previa en programación",
    ],
    ages: "10-14 años",
    level: "Intermedio",
    duration: "+35 sesiones de 90 min",
    hours: "+60 horas",
    students: "8-10 por clase",
  },
  {
    id: 4,
    slug: "desarrollo-unity-i",
    title: "Desarrollo con Unity I",
    subtitle: "C# Programming",
    gradient: "from-[rgb(var(--brand-lilac))] to-purple-800",
    icon: "logos/unity.png",
    description: "Videojuegos profesionales con Unity",
    features: [
      "Iniciación a la programación en C#",
      "Motor Unity 3D",
      "Física y animaciones 2D",
      "Juegos multiplataforma",
      "Ideal para iniciarse en el mundo de la programación",
    ],
    ages: "13-16 años",
    level: "Avanzado",
    duration: "+35 sesiones de 120 min",
    hours: "+90 horas",
    students: "8-10 por clase",
  },
  {
    id: 5,
    slug: "desarrollo-unity-ii",
    title: "Desarrollo con Unity II",
    subtitle: "C# Programming",
    gradient: "from-gray-700 to-gray-900",
    icon: "logos/unity.png",
    description: "Videojuegos profesionales con Unity",
    features: [
      "Programación avanzada en C#",
      "Motor Unity 3D",
      "Física y animaciones 3D",
      "Juegos multijugador",
      "Ideal para iniciarse en el mundo de la programación",
      "Imprescindible haber cursado Desarrollo con Unity I o tener experiencia previa en programación",
    ],
    ages: "13-16 años",
    level: "Avanzado",
    duration: "+35 sesiones de 120 min",
    hours: "+90 horas",
    students: "8-10 por clase",
  },
  {
    id: 6,
    slug: "desarrollo-web",
    title: "Desarrollo Web",
    subtitle: "HTML, CSS & JavaScript",
    gradient: "from-blue-500 to-cyan-600",
    emoji: "💻",
    description: "Crea sitios web interactivos",
    features: ["HTML y CSS moderno", "JavaScript interactivo", "Diseño responsive", "Publicación web"],
    ages: "10-12 años",
    level: "Intermedio",
    duration: "+35 sesiones de 90 min",
    hours: "+60 horas",
    students: "10-12 por clase",
  },
  {
    id: 7,
    slug: "inteligencia-artificial-i",
    title: "Inteligencia Artificial I",
    subtitle: "Python & Machine Learning",
    gradient: "from-yellow-300 to-amber-400",
    emoji: "🤖",
    description: "Introducción al Machine Learning",
    features: [
      "Introducción a Python",
      "Programación de videojuegos",
      "Aplicaciones gráficas",
      "Proyectos prácticos",
      "Ideal para iniciarse en el mundo de la inteligencia artificial",
    ],
    ages: "14-16 años",
    level: "Avanzado",
    duration: "+35 sesiones de 120 min",
    hours: "+90 horas",
    students: "8-10 por clase",
  },
  {
    id: 8,
    slug: "inteligencia-artificial-ii",
    title: "Inteligencia Artificial II",
    subtitle: "Python & Machine Learning",
    gradient: "from-[#5DD4C1] to-[#3AB4A1]",
    emoji: "🤖",
    description: "Introducción al Machine Learning",
    features: [
      "Python avanzado",
      "Algoritmos de IA",
      "Redes neuronales",
      "Proyectos prácticos",
      "Imprescindible dominar conceptos básicos de Python",
    ],
    ages: "14-16 años",
    level: "Avanzado",
    duration: "+35 sesiones de 120 min",
    hours: "+90 horas",
    students: "8-10 por clase",
  },
];

```

## Archivo: `app/robots.ts`
```ts
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}

```

## Archivo: `app/sitemap.ts`
```ts
import type { MetadataRoute } from "next";
import { courses } from "@/lib/data/courses";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/cursos",
    "/talleres",
    "/camino-alumno",
    "/por-que-ori",
    "/contacto",
    "/solicitar-plaza",
    "/horarios",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const courseEntries: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${siteConfig.url}/curso/${course.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...courseEntries];
}

```

## Archivo: `next.config.ts`
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 7,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

```

## Archivo: `tailwind.config.js`
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        title: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          mint: "#47D7AC",
          lilac: "#7C5DC6",
          ink: "#0F172A",
          muted: "#64748B",
          line: "#E2E8F0",
        },
      },
    },
  },
};

```

