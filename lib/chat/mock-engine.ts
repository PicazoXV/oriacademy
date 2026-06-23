import type { ChatMessage } from "./types";

type Intent = {
  patterns: RegExp[];
  handler: (message: string, history: ChatMessage[]) => string;
};

function findAgeInHistory(history: ChatMessage[]): number | null {
  for (const msg of [...history].reverse()) {
    const match = msg.content.match(/(\d{1,2})\s*a[ñn]os?/i);
    if (match) {
      const age = parseInt(match[1], 10);
      if (age >= 4 && age <= 20) return age;
    }
  }
  return null;
}

function recommendByAge(age: number): string {
  if (age >= 7 && age <= 9) {
    return `Para un alumno de ${age} años, te recomiendo empezar con **Fundamentos de Programación I (Scratch)**, donde aprenderá pensamiento lógico y programación visual creando juegos y animaciones. Si ya tiene algo de experiencia, también puede ir directo a **Fundamentos de Programación II (Minecraft Education)**.

Los grupos son de máximo 10 alumnos y las sesiones duran 90 minutos. ¿Quieres que te cuente más sobre alguno de estos cursos o prefieres solicitar una clase de prueba gratuita? Puedes hacerlo en /solicitar-plaza`;
  }

  if (age >= 10 && age <= 12) {
    return `Para ${age} años tenemos varias opciones geniales:

- **Creación de Juegos en Roblox** (si le gustan los videojuegos): aprenderá Lua y diseño 3D creando sus propios mundos en Roblox.
- **Desarrollo Web** (si le interesa crear páginas): HTML, CSS y JavaScript para hacer sitios web interactivos.

Ambos son nivel intermedio con grupos reducidos de 8-12 alumnos. ¿Le tira más los videojuegos o la web? También puedes solicitar una clase de prueba gratuita en /solicitar-plaza`;
  }

  if (age >= 13 && age <= 16) {
    return `Para ${age} años tenemos cursos avanzados muy potentes:

- **Desarrollo con Unity I/II** (C#): crear videojuegos profesionales en 2D y 3D.
- **Inteligencia Artificial I/II** (Python): desde programación de videojuegos hasta redes neuronales y algoritmos de IA.

Son los cursos más completos, con sesiones de 120 minutos y +90 horas de contenido. ¿Qué le interesa más, los videojuegos o la inteligencia artificial? Puedes reservar una clase de prueba en /solicitar-plaza`;
  }

  if (age < 7) {
    return `Nuestros cursos empiezan a partir de los 7 años. Si tu hijo/a tiene ${age}, te recomiendo esperar un poquito. Mientras tanto, Scratch (scratch.mit.edu) es una herramienta genial para que vaya explorando desde casa. ¡Contáctanos cuando esté listo/a!`;
  }

  return `Nuestros cursos van dirigidos a niños y adolescentes de 7 a 16 años. Si tienes alguna consulta especial, no dudes en llamarnos al +34 624 54 74 06 o escribirnos a info@oriacademy.es.`;
}

const intents: Intent[] = [
  {
    patterns: [/(\d{1,2})\s*a[ñn]os?/i, /tiene\s*(\d{1,2})/i, /edad.*(\d{1,2})/i],
    handler: (message) => {
      const match = message.match(/(\d{1,2})/);
      if (match) {
        return recommendByAge(parseInt(match[1], 10));
      }
      return "¿Podrías decirme la edad exacta del alumno? Así puedo recomendarte el curso más adecuado.";
    },
  },
  {
    patterns: [
      /recomi[eé]nd/i,
      /qu[eé] curso/i,
      /cu[aá]l curso/i,
      /mejor curso/i,
      /qu[eé] le (?:viene|conviene|recomiendas)/i,
    ],
    handler: (message, history) => {
      const ageMatch = message.match(/(\d{1,2})\s*a[ñn]os?/i);
      if (ageMatch) {
        return recommendByAge(parseInt(ageMatch[1], 10));
      }

      const historyAge = findAgeInHistory(history);
      if (historyAge) {
        return recommendByAge(historyAge);
      }

      return "¡Claro que sí! Para recomendarte el curso ideal necesito saber la edad de tu hijo/a. ¿Cuántos años tiene?";
    },
  },
  {
    patterns: [/^(hola|buenas|buenos|hey|saludos|qué tal|que tal|hi)\b/i],
    handler: () =>
      "¡Hola! Soy ORI, el asistente virtual de ORI Academy. Puedo ayudarte con información sobre nuestros cursos de programación y videojuegos para niños de 7 a 16 años. ¿En qué te puedo ayudar?",
  },
  {
    patterns: [/horario/i, /cu[aá]ndo/i, /qu[eé] hora/i, /qu[eé] d[ií]a/i, /a qu[eé] hora/i],
    handler: () =>
      `Nuestros horarios orientativos para el curso anual son:

- **7-9 años**: Lunes y miércoles 17:30-19:00 / Martes y jueves 18:00-19:30
- **10-12 años**: Lunes y miércoles 19:00-20:30 / Martes y jueves 17:30-19:00
- **13-16 años**: Martes y jueves 19:00-20:30 / Viernes 17:30-19:30

Son orientativos y pueden variar según grupo y nivel. Para confirmar disponibilidad exacta, contáctanos en /contacto o llámanos al +34 624 54 74 06.`,
  },
  {
    patterns: [/verano/i, /taller/i, /campamento/i, /junio/i, /julio/i, /intensivo/i],
    handler: () =>
      `¡Los **Talleres de Verano 2026** ya están abiertos! Del 22 de junio al 17 de julio:

- **Junior (7-9 años)**: Introducción a la programación con Scratch y Minecraft Education
- **Medio (10-12 años)**: Diseño de videojuegos con Minecraft Education y Roblox Studio
- **Avanzado (13-16 años)**: Programación avanzada con Python y C#

Desde **60€/semana**, grupos reducidos, diploma y material incluidos. También hay modalidad campamento (9:30-13:00, toda la mañana).

Puedes reservar plaza en /talleres. ¡Las plazas son limitadas!`,
  },
  {
    patterns: [/precio/i, /cu[aá]nto/i, /cuesta/i, /cost[eoa]/i, /tarifa/i, /pago/i],
    handler: () =>
      `Los **Talleres de Verano 2026** empiezan desde **60€/semana**, con grupos reducidos, diploma y material incluidos.

Para los **cursos anuales**, el precio depende del nivel y horario. Te recomiendo contactarnos directamente para un presupuesto personalizado: llámanos al +34 624 54 74 06 o escríbenos en /contacto.`,
  },
  {
    patterns: [
      /contacto/i,
      /tel[eé]fono/i,
      /email/i,
      /correo/i,
      /direcci[oó]n/i,
      /ubicaci[oó]n/i,
      /d[oó]nde est[aá]/i,
      /whatsapp/i,
    ],
    handler: () =>
      `Aquí tienes toda nuestra info de contacto:

- **Teléfono/WhatsApp**: +34 624 54 74 06
- **Email**: info@oriacademy.es
- **Dirección**: Calle Cruz, 21, Albacete 02001
- **Horario de atención**: L-V 9:00-20:00, Sábados 10:00-14:00

También puedes escribirnos directamente desde /contacto. ¡Respondemos rápido!`,
  },
  {
    patterns: [/plaza/i, /inscri/i, /matric/i, /apuntar/i, /reservar/i, /registr/i],
    handler: () =>
      "¡Genial que quieras apuntarte! Puedes solicitar plaza directamente desde /solicitar-plaza. Solo tienes que rellenar el formulario con los datos del alumno y nos pondremos en contacto para confirmar disponibilidad. También puedes llamarnos al +34 624 54 74 06 si prefieres hacerlo por teléfono.",
  },
  {
    patterns: [/scratch/i],
    handler: () =>
      "**Fundamentos de Programación I** usa Scratch como herramienta principal. Es perfecto para niños de 7-9 años sin experiencia previa. Aprenderán pensamiento lógico, programación por bloques y crearán sus propios juegos y animaciones. Las sesiones son de 90 minutos con grupos de máximo 10 alumnos. ¿Te gustaría solicitar una clase de prueba?",
  },
  {
    patterns: [/minecraft/i],
    handler: () =>
      "Usamos **Minecraft Education** en dos cursos:\n\n- **Fundamentos de Programación II** (7-9 años): programación visual y Python dentro de Minecraft.\n- **Talleres de Verano - Junior y Medio**: también incluyen Minecraft Education.\n\n¡Es una forma genial de aprender a programar jugando! ¿Quieres más detalles sobre alguno?",
  },
  {
    patterns: [/roblox/i],
    handler: () =>
      "El curso de **Creación de Juegos en Roblox** es para alumnos de 10-14 años con algo de experiencia previa. Aprenderán programación en Lua, diseño de niveles 3D, mecánicas de juego y hasta publicar sus propios juegos. +60 horas de contenido con grupos de 8-10 alumnos. ¿Te interesa?",
  },
  {
    patterns: [/unity/i, /c#/i, /csharp/i],
    handler: () =>
      "Tenemos dos niveles de **Desarrollo con Unity**:\n\n- **Unity I**: iniciación a C# y Unity 3D, física y animaciones 2D, juegos multiplataforma. Para 13-16 años.\n- **Unity II**: programación avanzada en C#, animaciones 3D y juegos multijugador. Requiere haber cursado Unity I.\n\nSon +90 horas de contenido profesional. ¿Quieres saber más?",
  },
  {
    patterns: [/python/i, /inteligencia artificial/i, /\bIA\b/, /machine learning/i],
    handler: () =>
      "Nuestros cursos de **Inteligencia Artificial** usan Python:\n\n- **IA I**: introducción a Python, programación de videojuegos y aplicaciones gráficas. Para 14-16 años.\n- **IA II**: Python avanzado, algoritmos de IA, redes neuronales. Requiere dominar Python básico.\n\n+90 horas cada uno, con proyectos prácticos reales. ¡Es el futuro! ¿Te interesa?",
  },
  {
    patterns: [/prueba/i, /probar/i, /demo/i, /gratis/i, /gratuita/i],
    handler: () =>
      "¡Sí! Ofrecemos una **clase de prueba gratuita** y sin compromiso para que tu hijo/a pruebe antes de decidirse. Puedes solicitarla en /contacto?motivo=clase-prueba o llamarnos al +34 624 54 74 06. Así veis cómo funcionan las clases y el ambiente. ¡Os esperamos!",
  },
  {
    patterns: [/gracias|genial|perfecto|vale|ok|entendido/i],
    handler: () =>
      "¡De nada! Si tienes cualquier otra duda, aquí estoy. También puedes llamarnos al +34 624 54 74 06 o escribirnos en /contacto. ¡Será un placer ayudarte!",
  },
];

const fallbackResponse =
  "No estoy seguro de poder ayudarte con eso, pero te puedo orientar sobre nuestros cursos, horarios, talleres de verano o cómo solicitar plaza. También puedes contactar directamente con el equipo en /contacto o llamar al +34 624 54 74 06. ¿En qué más puedo ayudarte?";

export function getMockResponse(messages: ChatMessage[]): string {
  const lastUserMessage = [...messages]
    .reverse()
    .find((m) => m.role === "user");
  if (!lastUserMessage) return fallbackResponse;

  const text = lastUserMessage.content;

  for (const intent of intents) {
    if (intent.patterns.some((p) => p.test(text))) {
      return intent.handler(text, messages);
    }
  }

  return fallbackResponse;
}
