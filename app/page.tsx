export default function Home() {
  return (
    <main className="relative h-screen w-full">
      {/* Imagen fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Texto */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-5xl md:text-7xl font-bold text-center">
          Oriacademy
          <br />
          <span className="text-2xl md:text-3xl font-medium">
            Muy pronto
          </span>
        </h1>
      </div>
    </main>
  );
}