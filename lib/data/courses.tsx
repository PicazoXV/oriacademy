export type Course = {
  id: number;
  title: string;
  subtitle: string;
  gradient: string;
  emoji: string;
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
    title: "Fundamentos de Programación I",
    subtitle: "Scratch",
    gradient: "from-orange-400 to-orange-600",
    emoji: "🎨",
    description: "Introducción a la programación visual",
    features: [
      "Pensamiento lógico y computacional",
      "Programación por bloques",
      "Creación de juegos y animaciones",
      "Introducción a conceptos basicos de programación",
    ],
    ages: "7-9 años",
    level: "Principiante",
    duration: "+35 sesiones de 90 min",
    hours: "+50 horas",
    students: "10 por clase",
  },
  {
    id: 2,
    title: "Fundamentos de Programación II",
    subtitle: "Minecraft Education",
    gradient: "from-green-500 to-green-700",
    emoji: "🎮",
    description: "Aprende programando en Minecraft",
    features: [
      "Programación por bloques en Minecraft",
      "Programación visual y Python",
      "Resolución de problemas",
      "Construcción con código",
      "Ideal para alumnos que ya hayan cursado funamentos de la programacion 1"
    ],
    ages: "7-9 años",
    level: "Principiante",
    duration: "+35 sesiones de 90 min",
    hours: "+50 horas",
    students: "10 por clase",
  },
  {
    id: 3,
    title: "Creación de Juegos en Roblox",
    subtitle: "Lua Programming",
    gradient: "from-red-500 to-pink-600",
    emoji: "🕹️",
    description: "Crea tus propios mundos en Roblox",
    features: ["Programación en Lua", "Diseño de niveles 3D", "Mecánicas de juego", "Publicación de juegos","Se requiere experiencia previa en programacion"],
    ages: "10-14 años",
    level: "Intermedio",
    duration: "+35 sesiones de 90 min",
    hours: "+60 horas",
    students: "8-10 por clase",
  },
  {
    id: 4,
    title: "Desarrollo con Unity I",
    subtitle: "C# Programming",
    gradient: "from-[rgb(var(--brand-lilac))] to-purple-800",
    emoji: "🚀",
    description: "Videojuegos profesionales con Unity",
    features: ["Iniciación a la programación en C#", "Motor Unity 3D", "Física y animaciones 2D", "Juegos multiplataforma", "Ideal para iniciarse en el mundo de laprogramcion"],
    ages: "13-16 años",
    level: "Avanzado",
    duration: "+35 sesiones de 120 min",
    hours: "+90 horas",
    students: "8-10 por clase",
  },
  {
    id: 5,
    title: "Desarrollo con Unity II",
    subtitle: "C# Programming",
    gradient: "from-gray-700 to-gray-900",
    emoji: "🚀",
    description: "Videojuegos profesionales con Unity",
    features: ["Programación avanzada en C#", "Motor Unity 3D", "Física y animaciones 3D", "Juegos multijugadores", "Ideal para iniciarse en el mundo de laprogramcion", "Consejo: imprescindible haber cursado desarrollo con unity I o tener experiencia previa en programacion"],
    ages: "13-16 años",
    level: "Avanzado",
    duration: "+35 sesiones de 120 min",
    hours: "+90 horas",
    students: "8-10 por clase",
  },
  {
    id: 6,
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
    title: "Inteligencia Artificial I",
    subtitle: "Python & Machine Learning",
    gradient: "from-yellow-300 to-amber-400",
    emoji: "🤖",
    description: "Introducción al Machine Learning",
    features: ["Introducción a python", "Programación de videojuegos", "Aplicaciones gráficas", "Proyectos prácticos", "Ideal para iniciarse en el mundo de la inteligencia artificial"],
    ages: "14-16 años",
    level: "Avanzado",
    duration: "+35 sesiones de 120 min",
    hours: "+90 horas",
    students: "8-10 por clase",
  },
  {
    id: 8,
    title: "Inteligencia Artificial II",
    subtitle: "Python & Machine Learning",
    gradient: "from-[#5DD4C1] to-[#3AB4A1]",
    emoji: "🤖",
    description: "Introducción al Machine Learning",
    features: ["Python avanzado", "Algoritmos de IA", "Redes neuronales", "Proyectos prácticos", "Imprescindible conceptos basicos en python"],
    ages: "14-16 años",
    level: "Avanzado",
    duration: "+35 sesiones de 120 min",
    hours: "+90 horas",
    students: "8-10 por clase",
  },
];