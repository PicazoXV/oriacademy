export default function Home() {
  return (
    <main>
      <section className="bg-[#E6F6F2] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
          {/* Texto */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Programación y{" "}
              <span className="text-teal-500">
                desarrollo de videojuegos
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Para niños y adolescentes de 7 a 16 años.
              Aprende Scratch, Minecraft, Roblox y Unity.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition">
                Ver Cursos
              </button>

              <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                Solicitar Plaza
              </button>
            </div>
          </div>

          {/* Placeholder imagen */}
          <div className="bg-white shadow-lg rounded-3xl h-96"></div>
        </div>
      </section>
    </main>
  );
}