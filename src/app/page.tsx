export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Top Bar / Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-semibold tracking-tight">
            João Victor <span className="text-zinc-500">• Portfolio</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            <a className="hover:text-zinc-900" href="#projetos">Projetos</a>
            <a className="hover:text-zinc-900" href="#skills">Skills</a>
            <a className="hover:text-zinc-900" href="#sobre">Sobre</a>
            <a className="hover:text-zinc-900" href="#contato">Contato</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contato"
              className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Fale comigo
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600">
              Disponível para vagas remotas • Backend / Fullstack
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Eu construo sistemas web rápidos, escaláveis e fáceis de manter.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-lg">
              Backend Developer Jr focado em PHP/Laravel, APIs REST e integrações.
              Experiência com SQL, manutenção em produção e entrega orientada a
              requisitos. Também atuo com Next.js/TypeScript quando faz sentido.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projetos"
                className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Ver projetos
              </a>
              <a
                href="#contato"
                className="rounded-xl border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Entrar em contato
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2 text-xs text-zinc-600">
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">PHP</span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">Laravel</span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">MySQL</span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">TypeScript</span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">Next.js</span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">Git</span>
            </div>
          </div>

          {/* Card visual (substitui foto por enquanto) */}
          <div className="rounded-3xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white p-6 shadow-sm">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm font-medium text-zinc-900">Destaque</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                “Transformo requisitos em entregas claras, com boa documentação,
                código organizado e foco em performance e manutenção.”
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-xs text-zinc-600">Foco</p>
                  <p className="mt-1 text-sm font-semibold">APIs + Sistemas</p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-xs text-zinc-600">Entrega</p>
                  <p className="mt-1 text-sm font-semibold">Produção & manutenção</p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-xs text-zinc-600">Método</p>
                  <p className="mt-1 text-sm font-semibold">Scrum / Agile</p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-xs text-zinc-600">Diferencial</p>
                  <p className="mt-1 text-sm font-semibold">Suporte → Dev</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href="https://github.com/joaoalbuquerque1109"
                  target="_blank"
                  className="rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/joão-victor-albuquerque-932747257"
                  target="_blank"
                  className="rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="public\cv.pdf"
                  className="rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
                >
                  Baixar CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Projetos em destaque</h2>
            <p className="mt-2 text-zinc-600">
              Cases que mostram backend, integrações, banco de dados e entrega real.
            </p>
          </div>
          <a className="text-sm text-zinc-600 hover:text-zinc-900" href="#">
            Ver todos →
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ProjectCard
            title="Sistema de RH (MVP)"
            desc="Cadastros, avaliações, faltas e relatórios. Acesso por perfil e trilha de auditoria."
            tags={["Laravel", "MySQL", "APIs", "RBAC"]}
          />
          <ProjectCard
            title="Portal de serviços (prefeitura)"
            desc="Melhorias de performance, correção de bugs em produção e evolução de módulos."
            tags={["PHP", "SQL", "Manutenção", "Produção"]}
          />
          <ProjectCard
            title="SaaS ERP (em andamento)"
            desc="Core multi-tenant com regras por tenant, autenticação e painéis."
            tags={["Next.js", "TypeScript", "Postgres", "RLS"]}
          />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Skills e ferramentas</h2>
          <p className="mt-2 text-zinc-600">
            Minha stack principal hoje e onde eu entrego mais rápido.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <InfoCard
              title="Backend"
              items={["PHP", "Laravel", "Node.js", "APIs REST", "Auth/RBAC"]}
            />
            <InfoCard
              title="Banco de dados"
              items={["MySQL", "PostgreSQL", "Modelagem", "Otimização de queries", "Relatórios"]}
            />
            <InfoCard
              title="Frontend & DevOps"
              items={["Next.js", "TypeScript", "Tailwind", "Git", "Deploy (Vercel)"]}
            />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold tracking-tight">Sobre mim</h2>
            <p className="mt-2 text-zinc-600">
              Visão de produto, suporte e desenvolvimento.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <p className="leading-relaxed text-zinc-700">
                Sou analista de suporte técnico com experiência liderando equipe e
                entregando soluções web em ambiente institucional. Tenho foco em
                backend (PHP/Laravel), banco de dados e integrações. Minha força
                está em entender o problema, traduzir em requisitos e entregar
                código sustentável com melhoria contínua.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Stat label="Experiência em TI" value="2+ anos" />
                <Stat label="Foco atual" value="Backend / Fullstack" />
                <Stat label="Modelo" value="Remoto" />
                <Stat label="Objetivo" value="Crescer rápido em impacto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Vamos conversar</h2>
                <p className="mt-2 text-zinc-600">
                  Se você tem uma vaga remota ou um projeto, eu respondo rápido.
                </p>

                <div className="mt-6 space-y-2 text-sm text-zinc-700">
                  <p><span className="font-medium">Email:</span> joao.albuquerque1109@gmail.com</p>
                  <p><span className="font-medium">WhatsApp:</span> +55 (81) 99489-1208</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="rounded-xl border border-zinc-200 px-5 py-3 text-sm font-medium hover:bg-zinc-50"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Form (estático) */}
              <form className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Nome</label>
                  <input
                    className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-200"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-200"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Mensagem</label>
                  <textarea
                    className="mt-1 h-28 w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-200"
                    placeholder="Me conte sobre a vaga/projeto..."
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Enviar (configurar)
                </button>
                <p className="text-xs text-zinc-500">
                  Este formulário está como UI. Depois a gente liga em uma API Route (Next) ou Resend.
                </p>
              </form>
            </div>
          </div>

          <footer className="py-10 text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} João Victor Albuquerque. Todos os direitos reservados.
          </footer>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({
  title,
  desc,
  tags,
}: {
  title: string;
  desc: string;
  tags: string[];
}) {
  return (
    <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <a href="#" className="text-sm font-medium text-zinc-900 hover:underline">
          Ver detalhes →
        </a>
      </div>
    </article>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-zinc-600">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
      <p className="text-xs text-zinc-600">{label}</p>
      <p className="mt-1 text-sm font-semibold text-zinc-900">{value}</p>
    </div>
  );
}
