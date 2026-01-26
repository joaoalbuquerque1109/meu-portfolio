import Image from "next/image";

export default function SobrePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 -z-10 vignette" />

      <section className="container-page py-12">
        <div className="glass rounded-3xl p-8 md:p-10">
          <h1 className="text-2xl font-semibold text-white md:text-3xl">
            Sobre Mim
          </h1>

          {/* Texto principal */}
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-relaxed text-white/70 md:text-base">
            <p>
              Sou desenvolvedor web com foco em manutenção, correção e evolução de
              sistemas já em produção. Atuo principalmente no backend, lidando com
              código legado, regras de negócio, integrações e banco de dados, sempre
              priorizando estabilidade, clareza técnica e impacto real.
            </p>

            <p>
              Minha experiência vem de ambientes institucionais e sistemas
              internos, onde confiabilidade, organização e continuidade são
              essenciais. Tenho facilidade em compreender contextos complexos e
              transformar necessidades em soluções técnicas sustentáveis.
            </p>

            <p>
              Meu background em suporte técnico e liderança de equipe contribui
              para uma visão completa do ciclo de vida do software, desde o uso
              real pelo usuário até a manutenção contínua da aplicação.
            </p>
          </div>

          {/* Tecnologias */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-white/85">
              Tecnologias e Ferramentas
            </h2>

            <div className="mt-4 grid gap-5 md:grid-cols-3">
              <TechGroup
                title="Backend"
                items={[
                  "PHP",
                  "Laravel",
                  "APIs REST",
                  "Autenticação e autorização",
                  "Integrações",
                ]}
              />

              <TechGroup
                title="Frontend"
                items={[
                  "Next.js",
                  "TypeScript",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                ]}
              />

              <TechGroup
                title="Banco de Dados & Infra"
                items={[
                  "MySQL",
                  "PostgreSQL",
                  "Modelagem de dados",
                  "Git / GitHub",
                  "Deploy e manutenção",
                ]}
              />
            </div>
          </div>

          {/* Forma de atuação técnica */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-white/85">
              Forma de Atuação
            </h2>

            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm text-white/70 md:text-base">
              <li>Atuação em sistemas já existentes e ambientes de produção</li>
              <li>Foco em código legível, organizado e fácil de manter</li>
              <li>Entendimento de regras de negócio antes da implementação</li>
              <li>Entrega incremental e evolução contínua</li>
              <li>Comunicação clara com áreas técnicas e não técnicas</li>
            </ul>
          </div>

          {/* CTA discreto */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/projetos"
              className="btn-glow rounded-xl bg-gradient-to-b from-indigo-500/90 to-indigo-700/70 px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
            >
              Ver Projetos
            </a>

            <a
              href="/servicos"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function TechGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="text-sm font-semibold text-white/90">
        {title}
      </h3>
      <ul className="mt-3 space-y-1 text-xs text-white/65">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
