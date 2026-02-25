"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import logo from "@/public/logo.png";

const nav = [
  { href: "/cursos", label: "Cursos" },
  { href: "/talleres", label: "Talleres" },
  { href: "/camino-alumno", label: "Camino del alumno" },
  { href: "/por-que-ori", label: "Por qué ORI" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* Fondo glass SIN líneas */}
      <div className="bg-white/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo: altura máxima del navbar */}
          <Link href="/" className="flex h-full items-center">
            <img
              src={logo.src}
              alt="Oriacademy"
              className="h-full max-h-16 w-auto object-contain py-2"
            />
          </Link>

          {/* Nav pill (desktop) */}
          <nav className="hidden md:flex items-center rounded-full bg-white/60 backdrop-blur border border-black/5 p-1 shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition",
                    active
                      ? "text-[rgb(var(--ink))]"
                      : "text-[rgb(var(--ink))/70] hover:text-[rgb(var(--ink))]"
                  )}
                >
                  {/* Fondo active premium (sin líneas) */}
                  {active && (
                    <span
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[rgb(var(--brand-mint))/22] to-[rgb(var(--brand-lilac))/22]"
                      aria-hidden="true"
                    />
                  )}

                  {/* Hover suave (sin rayas) */}
                  {!active && (
                    <span
                      className="absolute inset-0 -z-10 rounded-full opacity-0 transition-opacity hover:opacity-100 bg-[rgb(var(--brand-mint))/10]"
                      aria-hidden="true"
                    />
                  )}

                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/solicitar-plaza" className="btn-primary">
              Solicitar plaza
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}