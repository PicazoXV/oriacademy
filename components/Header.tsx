"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import logo from "@/public/logo.png";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/cursos", label: "Cursos" },
  { href: "/talleres", label: "Talleres" },
  { href: "/camino-alumno", label: "Camino del alumno" },
  { href: "/por-que-ori", label: "Por qué ORI" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      {/* Header FIXED (siempre pegado arriba) */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="bg-white/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
            <Link href="/" className="flex h-full items-center">
              <img
                src={logo.src}
                alt="Oriacademy"
                className="h-full max-h-16 w-auto object-contain py-2"
              />
            </Link>

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
                    {active && (
                      <span
                        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[rgb(var(--brand-mint))/22] to-[rgb(var(--brand-lilac))/22]"
                        aria-hidden="true"
                      />
                    )}
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
              <Link
                href="/solicitar-plaza"
                className="btn-primary hidden md:inline-flex"
              >
                Solicitar plaza
              </Link>

              <button
                type="button"
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white/70 shadow-sm backdrop-blur transition hover:bg-white"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Cerrar menú"
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
            />

            <div className="fixed right-0 top-0 z-50 h-dvh w-[86%] max-w-sm">
              <div className="h-full bg-white/85 backdrop-blur-xl shadow-2xl border-l border-black/10">
                <div className="flex items-center justify-between px-5 h-16 border-b border-black/5">
                  <div className="font-title font-extrabold text-slate-900">
                    Menú
                  </div>
                  <button
                    type="button"
                    aria-label="Cerrar menú"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-white/70 shadow-sm"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="px-5 py-6 space-y-2">
                  {nav.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block rounded-2xl px-4 py-3 text-base font-semibold transition",
                          active
                            ? "bg-gradient-to-r from-[rgb(var(--brand-mint))/18] to-[rgb(var(--brand-lilac))/18] text-slate-900"
                            : "text-[rgb(var(--ink))/75] hover:bg-[rgb(var(--brand-mint))/10] hover:text-[rgb(var(--ink))]"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}

                  <div className="pt-4">
                    <Link href="/solicitar-plaza" className="btn-primary w-full">
                      Solicitar plaza
                    </Link>
                  </div>
                </nav>

                <div className="mt-auto px-5 pb-6 text-xs text-slate-500">
                  ORI Academy · Programación y videojuegos (7–16)
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer para que el contenido no quede debajo del header fijo */}
      <div className="h-16" />
    </>
  );
}