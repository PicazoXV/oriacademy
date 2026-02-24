import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no definida");
      return new Response(
        JSON.stringify({ error: "Configuración del servidor incorrecta." }),
        { status: 500 }
      );
    }

    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios." }),
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const to = process.env.CONTACT_TO_EMAIL || "info@oriacademy.es";
    const from =
      process.env.CONTACT_FROM_EMAIL ||
      "Oriacademy <no-reply@oriacademy.es>";

    const subject = `Nuevo mensaje de contacto: ${name}`;

    const textContent = `
Nuevo mensaje desde la web:

Nombre: ${name}
Email: ${email}
Teléfono: ${phone}

Mensaje:
${message}
`;

    const htmlContent = `
      <h2>Nuevo mensaje desde el formulario de contacto</h2>
      <p><b>Nombre:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      ${phone ? `<p><b>Teléfono:</b> ${escapeHtml(phone)}</p>` : ""}
      <p><b>Mensaje:</b></p>
      <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email,
      text: textContent,
      html: htmlContent,
    });

    if (error) {
      console.error("Error Resend:", error);
      return new Response(
        JSON.stringify({ error: "No se pudo enviar el email." }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error("Error general:", error);
    return new Response(
      JSON.stringify({ error: "Error enviando el mensaje." }),
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}