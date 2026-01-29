// app/servicos/page.tsx
import Image from "next/image";
import ServicesInteractive from "./ServicesInteractive";

export default function ServicosPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      
      {/* Vignette */}
      <div className="absolute inset-0 -z-10 vignette" />

      <section className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="glass rounded-3xl p-8 md:p-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold text-white md:text-3xl">
              Serviços
            </h1>

            <p className="max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
              Escolha o formato ideal: <span className="text-white/85">projeto fechado</span>{" "}
              (escopo), <span className="text-white/85">PJ contínuo</span> (system care / evolução) ou{" "}
              <span className="text-white/85">contrato semestral/anual</span> para previsibilidade.
              Sem promessa vazia — foco em entrega e estabilidade.
            </p>
          </div>

          <div className="mt-10">
            <ServicesInteractive />
          </div>

          <p className="mt-10 text-xs text-white/50">
            Observação: valores variam por complexidade, urgência e integrações. Você recebe proposta com escopo e prazos antes de começar.
          </p>
        </div>
      </section>
    </main>
  );
}
