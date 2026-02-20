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
      "Introducción a algoritmos",
    ],
    ages: "7-9 años",
    level: "Principiante",
    duration: "35 sesiones de 90 min",
    hours: "+50 horas",
    students: "10-12 por clase",
  },
  {
    id: 2,
    title: "Programación Creativa I",
    subtitle: "Minecraft Education",
    gradient: "from-green-500 to-green-700",
    emoji: "🎮",
    description: "Aprende programando en Minecraft",
    features: [
      "Automatización en Minecraft",
      "Programación visual y Python",
      "Resolución de problemas",
      "Construcción con código",
    ],
    ages: "7-9 años",
    level: "Principiante",
    duration: "35 sesiones de 90 min",
    hours: "+50 horas",
    students: "10-12 por clase",
  },
  {
    id: 3,
    title: "Creación de Juegos en Roblox",
    subtitle: "Lua Programming",
    gradient: "from-red-500 to-pink-600",
    emoji: "🕹️",
    description: "Crea tus propios mundos en Roblox",
    features: ["Programación en Lua", "Diseño de niveles 3D", "Mecánicas de juego", "Publicación de juegos"],
    ages: "10-14 años",
    level: "Intermedio",
    duration: "40 sesiones de 90 min",
    hours: "+60 horas",
    students: "8-10 por clase",
  },
  {
    id: 4,
    title: "Desarrollo con Unity",
    subtitle: "C# Programming",
    gradient: "from-gray-700 to-gray-900",
    emoji: "🚀",
    description: "Videojuegos profesionales con Unity",
    features: ["Programación en C#", "Motor Unity 3D", "Física y animaciones", "Juegos multiplataforma"],
    ages: "12-17 años",
    level: "Avanzado",
    duration: "45 sesiones de 120 min",
    hours: "+90 horas",
    students: "8-10 por clase",
  },
  {
    id: 5,
    title: "Desarrollo Web",
    subtitle: "HTML, CSS & JavaScript",
    gradient: "from-blue-500 to-cyan-600",
    emoji: "💻",
    description: "Crea sitios web interactivos",
    features: ["HTML y CSS moderno", "JavaScript interactivo", "Diseño responsive", "Publicación web"],
    ages: "13-17 años",
    level: "Intermedio",
    duration: "40 sesiones de 90 min",
    hours: "+60 horas",
    students: "10-12 por clase",
  },
  {
    id: 6,
    title: "Inteligencia Artificial",
    subtitle: "Python & Machine Learning",
    gradient: "from-[#5DD4C1] to-[#3AB4A1]",
    emoji: "🤖",
    description: "Introducción al Machine Learning",
    features: ["Python avanzado", "Algoritmos de IA", "Redes neuronales", "Proyectos prácticos"],
    ages: "14-17 años",
    level: "Avanzado",
    duration: "45 sesiones de 120 min",
    hours: "+90 horas",
    students: "8-10 por clase",
  },
];