import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          <div>
            <div className="font-extrabold text-slate-900">ORI Academy</div>
            <p className="text-sm text-slate-600 mt-2">
              Programación y desarrollo de videojuegos para niños y adolescentes.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/cursos" className="text-slate-700 hover:text-slate-900">
              Cursos
            </Link>
            <Link href="/talleres" className="text-slate-700 hover:text-slate-900">
              Talleres
            </Link>
            <Link href="/contacto" className="text-slate-700 hover:text-slate-900">
              Contacto
            </Link>
            <Link
              href="/solicitar-plaza"
              className="text-[#3AB4A1] hover:underline"
            >
              Solicitar plaza
            </Link>
          </div>
        </div>

        <div className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} ORI Academy. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}