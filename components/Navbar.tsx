"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          ORI Academy
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/">Inicio</Link>
          <Link href="/cursos">Cursos</Link>
          <Link href="/talleres">Talleres</Link>
          <Link href="/camino-del-alumno">Camino del Alumno</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        <Link
          href="/reserva-plaza"
          className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
        >
          Solicitar Plaza
        </Link>
      </div>
    </header>
  );
}