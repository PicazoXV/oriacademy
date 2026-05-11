import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { isValidEmail, isValidPhone } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return new Response(
        JSON.stringify({ error: "Configuración del servidor incorrecta (Supabase)." }),
        { status: 500 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Configuración del servidor incorrecta (Email)." }),
        { status: 500 },
      );
    }

    const body = await req.json();

    const nombreAlumno = String(body?.nombreAlumno ?? "").trim();
    const edad = String(body?.edad ?? "").trim();
    const taller = String(body?.taller ?? "").trim();
    const nombrePadre = String(body?.nombrePadre ?? "").trim();
    const telefono = String(body?.telefono ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const recibirInfo = Boolean(body?.recibirInfo ?? false);
    const semanasInteres: string[] = Array.isArray(body?.semanasInteres)
      ? (body.semanasInteres as unknown[]).map((s) => String(s))
      : [];

    // Validación mínima
    if (
      !nombreAlumno ||
      !edad ||
      !taller ||
      !nombrePadre ||
      !telefono ||
      !email
    ) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios." }),
        { status: 400 },
      );
    }
    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ error: "Email inválido." }), {
        status: 400,
      });
    }
    if (!isValidPhone(telefono)) {
      return new Response(JSON.stringify({ error: "Teléfono inválido." }), {
        status: 400,
      });
    }

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
    );

    // 1) Guardar en Supabase
    const { error: dbError } = await supabase
      .from("reservas_semana_santa")
      .insert({
        nombre_alumno: nombreAlumno,
        edad,
        taller,
        nombre_padre: nombrePadre,
        telefono,
        email,
        recibir_info: recibirInfo,
      });

    if (dbError) {
      console.error("DB ERROR:", dbError);
      return new Response(JSON.stringify({ error: dbError.message }), {
        status: 500,
      });
    }

    // 2) Enviar email
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error: mailError } = await resend.emails.send({
      from: "ORI Academy <info@oriacademy.es>",
      to: "info@oriacademy.es",
      replyTo: email,
      subject: `Reserva Talleres Verano 2026: ${nombreAlumno} (${edad})`,
      html: `
        <h2>Nueva reserva — Talleres de Verano 2026</h2>
        <p><strong>Alumno/a:</strong> ${escapeHtml(nombreAlumno)}</p>
        <p><strong>Edad:</strong> ${escapeHtml(edad)}</p>
        <p><strong>Taller:</strong> ${escapeHtml(taller)}</p>
        <p><strong>Semanas de interés:</strong> ${semanasInteres.length ? semanasInteres.map(escapeHtml).join(", ") : "Cualquier semana"}</p>
        <p><strong>Padre/Madre/Tutor:</strong> ${escapeHtml(nombrePadre)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Acepta recibir info:</strong> ${recibirInfo ? "Sí" : "No"}</p>
      `,
    });

    if (mailError) {
      console.error("RESEND ERROR:", mailError);
      return new Response(JSON.stringify({ error: mailError.message }), {
        status: 502,
      });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "Solicitud inválida." }), {
      status: 400,
    });
  }
}

// Anti-inyección simple para el HTML del email
function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
