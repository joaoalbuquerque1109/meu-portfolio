import Image from "next/image";
import { Server, Monitor, Database } from "lucide-react";

export default function SobrePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Vignette */}
      <div className="absolute inset-0 -z-10 vignette" />

      <section className="container-page py-12">
        <div className="glass rounded-3xl p-8 md:p-10">
          <h1 className="text-2xl font-semibold text-white md:text-3xl">
            Sobre Mim
          </h1>

          {/* Texto + Foto lado a lado */}
        <div className="mt-6 grid gap-8 md:grid-cols-5 items-start">

        {/* Texto */}
        <div className="md:col-span-3 space-y-4 text-sm leading-relaxed text-white/70 md:text-base">
            <p>
            Sou desenvolvedor web com foco em manutenção, correção e evolução de sistemas
            já em produção. Atuo principalmente no backend, lidando com código legado, regras 
            de negócio, integrações e banco de dados, sempre priorizando estabilidade, clareza 
            técnica e impacto real. Atualmente estudo Software Development na BYU–Idaho 
            (Estados Unidos) de forma online e também presto serviços para clientes no exterior.
            </p>
            <p>
            Busco consolidar minha carreira como desenvolvedor, com foco no mercado internacional,
            assumindo responsabilidades técnicas crescentes e entregando valor ao longo do tempo. 
            Tenho abertura para atuar em regime CLT ou PJ e vejo a criação de uma empresa de tecnologia
             como um objetivo de longo prazo, baseado em experiência prática e solidez técnica.
            </p>

            <p>
            Minha experiência vem de ambientes institucionais principalmente 
            no setor público, onde atuei em sistemas internos, onde confiabilidade, 
            organização e continuidade são essenciais. Tenho facilidade em 
            compreender contextos complexos e transformar necessidades
            em soluções técnicas sustentáveis.
            </p>

            <p>
            Meu background em suporte técnico e liderança de equipe contribui
            para uma visão completa do ciclo de vida do software, desde o uso
            real pelo usuário até a manutenção contínua da aplicação.
            </p>

            <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Baixar currículo (PDF)
          </a>
        </div>

        {/* Foto */}
        <div className="md:col-span-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <Image
                src="/me.png"
                alt="João Victor Albuquerque"
                fill
                className="object-cover"
                priority
            />
            </div>
        </div>
        </div>

          {/* Tecnologias */}
          <div className="mt-10">
            <h2 className="mb-6 text-lg font-semibold text-white/85">
              Tecnologias e Ferramentas
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
            {/* Backend */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                <Server className="h-4 w-4 text-white/70" />
                Backend
              </h3>

              <ul className="mt-3 space-y-2 text-sm md:text-base leading-relaxed text-white/80">
                <li>PHP + Laravel</li>
                <li>Node.js</li>
                <li>APIs REST</li>
                <li>Autenticação e autorização</li>
              </ul>
            </div>

            {/* Frontend */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                <Monitor className="h-4 w-4 text-white/70" />
                Frontend
              </h3>

              <ul className="mt-3 space-y-2 text-sm md:text-base leading-relaxed text-white/80">
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Vue.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* Banco de Dados & Infra */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                <Database className="h-4 w-4 text-white/70" />
                Banco de Dados & Infra
              </h3>

              <ul className="mt-3 space-y-2 text-sm md:text-base leading-relaxed text-white/80">
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Modelagem de dados</li>
                <li>Git / GitHub</li>
              </ul>
            </div>
          </div>
          </div>

          {/* Forma de atuação técnica */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-white/85">
              Meus Diferenciais
            </h2>

            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm text-white/70 md:text-base">
              <li>Experiência em sistemas de produção, com foco em manutenção, estabilidade e evolução segura.</li>
              <li>Capacidade de transformar regras de negócio complexas em soluções técnicas sustentáveis.</li>
              <li>Atuação orientada à redução de risco, previsibilidade e impacto real no produto.</li>
              <li>Comunicação clara com equipes distribuídas e stakeholders não técnicos.</li>
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
      <ul className="mt-3 space-y-2 text-sm md:text-base leading-relaxed text-white/80">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
