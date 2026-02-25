import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-black/10 bg-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 bottom-[-160px] h-[420px] w-[420px] rounded-full bg-[rgb(var(--brand-mint))] opacity-10 blur-3xl" />
        <div className="absolute -right-40 top-[-180px] h-[520px] w-[520px] rounded-full bg-[rgb(var(--brand-lilac))] opacity-10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="text-2xl font-extrabold tracking-tight text-slate-900">
              ORI Academy
            </div>
            <p className="text-sm font-semibold text-slate-600 leading-relaxed">
              Programación y desarrollo de videojuegos para niños y adolescentes.
            </p>
            <Link href="/solicitar-plaza" className="btn-primary inline-flex">
              Solicitar plaza
            </Link>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
              Navegación
            </div>
            <div className="flex flex-col gap-3 text-sm font-semibold text-slate-700">
              <Link href="/cursos" className="hover:text-[rgb(var(--brand-lilac))] transition">
                Cursos
              </Link>
              <Link href="/talleres" className="hover:text-[rgb(var(--brand-lilac))] transition">
                Talleres
              </Link>
              <Link href="/contacto" className="hover:text-[rgb(var(--brand-lilac))] transition">
                Contacto
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
              ORI
            </div>
            <p className="text-sm font-semibold text-slate-600">
              Aprendemos creando proyectos reales, paso a paso.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-6 text-center text-xs font-semibold text-slate-500">
          © {new Date().getFullYear()} ORI Academy · Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}