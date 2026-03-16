import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { isValidEmail, isValidPhone } from "@/lib/validation";

type Payload = {
  nombreAlumno: string;
  edad: string;
  curso: string;
  experiencia: string;
  nombreTutor: string;
  telefono: string;
  email: string;
  mensaje: string;
  recibirInfo: boolean;
};

export async function POST(req: Request) {
  try {
    // --- ENV CHECKS ---
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Faltan variables de Supabase");
      return Response.json(
        { error: "Configuración del servidor incorrecta (Supabase)." },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no definida");
      return Response.json(
        { error: "Configuración del servidor incorrecta (Email)." },
        { status: 500 }
      );
    }

    // --- BODY ---
    const body = (await req.json().catch(() => null)) as Payload | null;
    if (!body) {
      return Response.json({ error: "Body inválido." }, { status: 400 });
    }

    const nombreAlumno = String(body?.nombreAlumno ?? "").trim();
    const edad = String(body?.edad ?? "").trim();
    const curso = String(body?.curso ?? "").trim();
    const experiencia = String(body?.experiencia ?? "").trim();
    const nombreTutor = String(body?.nombreTutor ?? "").trim();
    const telefono = String(body?.telefono ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const mensaje = String(body?.mensaje ?? "").trim();
    const recibirInfo = Boolean(body?.recibirInfo);

    // --- VALIDACIÓN ---
    if (!nombreAlumno || !edad || !nombreTutor || !telefono || !email) {
      return Response.json(
        { error: "Por favor, completa los campos obligatorios." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json({ error: "Email inválido." }, { status: 400 });
    }

    if (!isValidPhone(telefono)) {
      return Response.json({ error: "Teléfono inválido." }, { status: 400 });
    }

    const edadNumber = Number(edad);
    if (!Number.isFinite(edadNumber) || edadNumber < 7 || edadNumber > 16) {
      return Response.json(
        { error: "Edad inválida. Debe estar entre 7 y 16 años." },
        { status: 400 }
      );
    }

    // --- SUPABASE INSERT ---
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { error: dbError } = await supabase.from("solicitudes_plaza").insert([
      {
        nombre_alumno: nombreAlumno,
        edad,
        curso: curso || null,
        experiencia: experiencia || null,
        nombre_tutor: nombreTutor,
        telefono,
        email,
        mensaje: mensaje || null,
        recibir_info: recibirInfo,
      },
    ]);

    // --- EMAIL (Resend) ---
    const resend = new Resend(process.env.RESEND_API_KEY);

    const to = process.env.CONTACT_TO_EMAIL || "info@oriacademy.es";
    const from =
      process.env.CONTACT_FROM_EMAIL || "Oriacademy <no-reply@oriacademy.es>";

    const subject = `Nueva solicitud de plaza: ${nombreAlumno} (${edad} años)`;

    const text = [
      `Nueva solicitud de plaza`,
      ``,
      `Alumno: ${nombreAlumno}`,
      `Edad: ${edad}`,
      `Curso: ${curso || "-"}`,
      `Experiencia: ${experiencia || "-"}`,
      ``,
      `Tutor: ${nombreTutor}`,
      `Teléfono: ${telefono}`,
      `Email: ${email}`,
      ``,
      `Recibir info: ${recibirInfo ? "Sí" : "No"}`,
      ``,
      `Mensaje:`,
      `${mensaje || "-"}`,
      ``,
      dbError ? `⚠️ Nota: Guardado en BD FALLÓ (${dbError.message})` : `✅ Guardado en BD OK`,
    ].join("\n");

    const html = `
      <h2>Nueva solicitud de plaza</h2>
      <p><b>Alumno:</b> ${escapeHtml(nombreAlumno)}</p>
      <p><b>Edad:</b> ${escapeHtml(edad)}</p>
      <p><b>Curso:</b> ${escapeHtml(curso || "-")}</p>
      <p><b>Experiencia:</b> ${escapeHtml(experiencia || "-")}</p>
      <hr/>
      <p><b>Tutor:</b> ${escapeHtml(nombreTutor)}</p>
      <p><b>Teléfono:</b> ${escapeHtml(telefono)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Recibir info:</b> ${recibirInfo ? "Sí" : "No"}</p>
      <p><b>Mensaje:</b></p>
      <p style="white-space:pre-wrap;">${escapeHtml(mensaje || "-")}</p>
      ${
        dbError
          ? `<p style="color:#b91c1c"><b>⚠️ Nota:</b> Guardado en BD FALLÓ (${escapeHtml(dbError.message)})</p>`
          : `<p style="color:#065f46"><b>✅ Guardado en BD OK</b></p>`
      }
    `;

    const { error: mailError } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email, // para responder al usuario
      text,
      html,
    });

    if (mailError) {
      console.error("RESEND ERROR:", mailError);
      // Si el email falla, devuelve error para que el frontend lo muestre
      return Response.json(
        { error: "Guardado OK, pero falló el envío de email." },
        { status: 502 }
      );
    }

    // Si BD falló pero email ok: lo consideramos éxito (tú decides)
    if (dbError) {
      console.error("SUPABASE ERROR:", dbError);
      return Response.json(
        { ok: true, warning: "Email enviado, pero no se guardó en base de datos." },
        { status: 200 }
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("ERROR /api/solicitar-plaza:", err);
    return Response.json(
      { error: "Error enviando la solicitud." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
