// app/contato/page.tsx
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { Linkedin, Github, Mail, MessageCircle } from "lucide-react";

export default function ContatoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image src="/bg.jpg" alt="" fill priority className="object-cover" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 -z-10 vignette" />

      <section className="container-page py-12">
        <div className="glass rounded-3xl p-8 md:p-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold text-white md:text-3xl">
              Contato
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
              Envie uma mensagem com o contexto do que você precisa. Eu respondo
              o mais rápido possível com uma proposta objetiva.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-8 md:grid-cols-5">
            {/* Coluna esquerda: Cards de contato */}
            <div className="md:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-base font-semibold text-white">
                  Canais principais
                </h2>

                <div className="mt-4 space-y-3">
                  {/* Email */}
                  <a
                    href="mailto:joao.albuquerque1109@gmail.com"
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10"
                  >
                    <Mail className="mt-0.5 h-4 w-4 text-white/70" />
                    <div>
                      <div className="font-medium text-white">E-mail</div>
                      <div className="text-white/70">
                        joao.albuquerque1109@gmail.com
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/5581994891208?text=Ol%C3%A1%20Jo%C3%A3o%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20sobre..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10"
                  >
                    <MessageCircle className="mt-0.5 h-4 w-4 text-emerald-300" />
                    <div>
                      <div className="font-medium text-white">WhatsApp</div>
                      <div className="text-white/70">+55 (81) 99489-1208</div>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/joão-victor-albuquerque-932747257"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10"
                  >
                    <Linkedin className="mt-0.5 h-4 w-4 text-sky-300" />
                    <div>
                      <div className="font-medium text-white">LinkedIn</div>
                      <div className="text-white/70">www.linkedin.com/in/joão-victor-albuquerque-932747257</div>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://https://github.com/joaoalbuquerque1109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10"
                  >
                    <Github className="mt-0.5 h-4 w-4 text-white/70" />
                    <div>
                      <div className="font-medium text-white">GitHub</div>
                      <div className="text-white/70">https://github.com/joaoalbuquerque1109</div>
                    </div>
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/5581994891208?text=Ol%C3%A1%20Jo%C3%A3o%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20sobre..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-indigo-500/90 to-indigo-700/70 px-5 py-3 text-sm font-medium text-white transition hover:brightness-110"
                  >
                    <MessageCircle className="h-4 w-4 text-white/90" />
                    Falar no WhatsApp
                  </a>

                  <Link
                    href="/projetos"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                  >
                    Ver Projetos
                  </Link>
                </div>
              </div>
            </div>

            {/* Coluna direita: Form */}
            <div className="md:col-span-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-base font-semibold text-white">
                  Enviar mensagem
                </h2>
                <p className="mt-2 text-sm text-white/70">
                  Preencha abaixo e eu recebo no meu e-mail.
                </p>

                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>

          {/* Rodapé discreto */}
          <p className="mt-10 text-xs text-white/50">
            Dica: se for algo urgente, prefira WhatsApp.
          </p>
        </div>
      </section>
    </main>
  );
}
