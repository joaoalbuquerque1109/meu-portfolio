import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Campos obrigatórios: nome, e-mail e mensagem." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO || "joao.albuquerque1109@gmail.com";
    const fromEmail =
      process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>";

    if (!resendApiKey) {
      return Response.json(
        { error: "RESEND_API_KEY não configurada." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const safeSubject = subject?.trim()
      ? subject.trim()
      : "Mensagem pelo Portfólio";

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>Nova mensagem do Portfólio</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Assunto:</strong> ${escapeHtml(safeSubject)}</p>
        <p><strong>Mensagem:</strong></p>
        <pre style="white-space: pre-wrap; background:#f6f6f6; padding:12px; border-radius:8px;">${escapeHtml(
          message
        )}</pre>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email, // você responde direto para quem enviou
      subject: `[Contato] ${safeSubject}`,
      html,
    });

    if (error) {
      return Response.json(
        { error: "Falha ao enviar e-mail. Tente novamente." },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Erro ao enviar. Tente novamente." },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string) {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
