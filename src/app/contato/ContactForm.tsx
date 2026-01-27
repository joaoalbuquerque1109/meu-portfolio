// app/contato/ContactForm.tsx
"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMsg("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      subject: String(form.get("subject") || "").trim(),
      message: String(form.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setMsg("Preencha nome, e-mail e mensagem.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Falha ao enviar.");
      }

      setStatus("success");
      setMsg("Mensagem enviada! Vou te responder no e-mail informado.");
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus("error");
      setMsg(err?.message || "Erro ao enviar. Tente novamente.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nome" name="name" placeholder="Seu nome" />
        <Field
          label="E-mail"
          name="email"
          type="email"
          placeholder="seuemail@exemplo.com"
        />
      </div>

      <Field
        label="Assunto (opcional)"
        name="subject"
        placeholder="Ex.: Manutenção em sistema / Projeto novo / Suporte"
      />

      <div className="grid gap-2">
        <label className="text-sm font-medium text-white/85">Mensagem</label>
        <textarea
          name="message"
          rows={6}
          placeholder="Explique o contexto, prazo e o que você espera como resultado."
          className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/85 outline-none transition placeholder:text-white/40 focus:border-white/20"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-glow inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-indigo-500/90 to-indigo-700/70 px-6 py-3 text-sm font-medium text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Enviando..." : "Enviar mensagem"}
        </button>

        <a
          href="mailto:joao.albuquerque1109@gmail.com"
          className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
        >
          Enviar por e-mail
        </a>
      </div>

      {msg ? (
        <p
          className={`text-sm ${
            status === "success" ? "text-emerald-300" : "text-rose-300"
          }`}
        >
          {msg}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-white/85">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/85 outline-none transition placeholder:text-white/40 focus:border-white/20"
      />
    </div>
  );
}
