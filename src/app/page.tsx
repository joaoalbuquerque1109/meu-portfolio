import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/bg.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Vignette + glows */}
      <div className="absolute inset-0 -z-10 vignette" />

      {/* Header */}
      <header className="border-b border-white/10 bg-black/25 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <h2>João Victor Albuquerque</h2>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <Link href="/sobre" className="hover:text-white">
              Sobre Mim
            </Link>
            <Link href="/projetos" className="hover:text-white">
              Projetos
            </Link>
            <Link href="/servicos" className="hover:text-white">
              Serviços
            </Link>
            <Link href="/contato" className="hover:text-white">
              Contato
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container-page py-14">
        <div className="glass relative overflow-hidden rounded-3xl h-112">
          {/* hero background image */}
          <div className="absolute inset-0">
            <Image
              src="/hero.png"
              alt=""
              fill
              className="object-cover object-right"
              priority
            />
            {/* dark overlay + left fade */}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
          </div>

          <div className="relative grid gap-8 px-8 py-10 md:grid-cols-2 md:px-12 md:py-12">
            <div className="max-w-xl">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Desenvolvedor Web focado<br />
                em manter, corrigir e evoluir<br />
                sistemas.
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                Especialista em Backend PHP/Laravel,<br />
                WordPress Técnico e Sistemas Internos.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projetos"
                  className="btn-glow rounded-xl bg-gradient-to-b from-indigo-500/90 to-indigo-700/70 px-5 py-3 text-sm font-medium text-white transition hover:brightness-110"
                >
                  Ver Projetos Reais
                </a>

                <a
                  href="#contato"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                >
                  Falar Comigo &nbsp;›
                </a>
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold text-white/60 uppercase tracking-wide mb-3">Stack Atual</p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge label="PHP" />
                  <TechBadge label="Laravel" />
                  <TechBadge label="SQL" />
                  <TechBadge label="Next.js" />
                  <TechBadge label="TypeScript" />
                  <TechBadge label="Vue.js" />
                </div>
              </div>
            </div>

            {/* Right column intentionally empty (image already covers) */}
            <div className="hidden md:block" />
          </div>
        </div>
      </section>

      {/* O que eu faço */}
      {/* Como eu ajudo empresas e times */}
      <section id="servicos" className="container-page pb-10">
        <h2 className="mb-4 text-lg font-semibold text-white/85">
          Como eu ajudo empresas e times
        </h2>

        <div className="glass rounded-3xl p-6">
          <div className="grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20">
                <svg className="h-5 w-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white/90">
                Gestão e Manutenção de Sistemas Existentes
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                Atuação contínua em aplicações já em produção, com correções, ajustes de
                regra, performance e estabilidade (System Care).
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20">
                <svg className="h-5 w-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="M8 20h8" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white/90">
                Desenvolvimento e Evolução de Sites
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                Criação e evolução de sites institucionais com foco em performance, SEO
                e facilidade de manutenção.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20">
                <svg className="h-5 w-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 3h18v6H3z" />
                  <path d="M3 9h18v12H3z" />
                  <path d="M7 15h.01" />
                  <path d="M11 15h2" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white/90">
                Desenvolvimento e Manutenção de E-commerces
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                Implementação e suporte técnico de lojas virtuais, integrações de
                pagamento e melhorias no checkout.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20">
                <svg className="h-5 w-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white/90">
                Gestão Técnica de Aplicações Web
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                Organização de código, banco de dados e integrações para garantir
                segurança, previsibilidade e evolução sustentável.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20">
                <svg className="h-5 w-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M8 6h13" />
                  <path d="M8 12h13" />
                  <path d="M8 18h13" />
                  <path d="M3 6h.01" />
                  <path d="M3 12h.01" />
                  <path d="M3 18h.01" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white/90">
                Levantamento de Requisitos e Soluções Sob Medida
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                Tradução das necessidades do negócio em soluções técnicas viáveis,
                evitando retrabalho.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20">
                <svg className="h-5 w-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white/90">
                Correções Críticas e Suporte Especializado
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                Atendimento pontual ou recorrente para bugs em produção, incidentes
                críticos e falhas que impactam a operação.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Projetos Recentes */}
      <section id="projetos" className="container-page pb-10">
        <h2 className="mb-4 text-lg font-semibold text-white/85">Projetos Recentes</h2>

        <div className="glass rounded-3xl p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <ProjectCard
              image="/card-1.jpg"
              title="Sistema de Gestão Interna"
              desc="Manutenção e otimização contínua em ERP."
            />
            <ProjectCard
              image="/card-2.jpg"
              title="Suporte Técnico ao Usuário"
              desc="Entregas evolutivas com feedback contínuo."
            />
            <ProjectCard
              image="/card-3.jpg"
              title="E-commerce Completo"
              desc="Respeito aos ambientes de produção e regras do negócio."
            />
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="#projetos"
              className="btn-glow rounded-xl border border-indigo-300/15 bg-white/5 px-6 py-2.5 text-sm text-white/90 transition hover:bg-white/10"
            >
              Ver Mais Projetos &nbsp;›
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="container-page pb-14">
        <div className="glass rounded-3xl px-6 py-10 text-center">
          <p className="mx-auto max-w-2xl text-xl font-semibold leading-snug text-white/90 md:text-2xl">
            Disponível para contratos PJ ou CLT<br />
            focados em manutenção e evolução de sistemas web.
          </p>

          <p className="mt-3 text-sm text-white/60">
            Envie uma mensagem para conversarmos sobre escopo, prazos e expectativa.
          </p>

          <div className="mt-7 flex justify-center">
            <a
              href="mailto:joao.albuquerque1109@gmail.com"
              className="btn-glow rounded-xl bg-gradient-to-b from-indigo-500/90 to-indigo-700/70 px-7 py-3 text-sm font-medium text-white transition hover:brightness-110"
            >
              Entre em Contato &nbsp;›
            </a>
          </div>
        </div>
      </section>

      {/* Footer tech row */}
      <footer className="border-t border-white/10 bg-black/25 py-6 backdrop-blur">
        <div className="container-page flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">

          <TechLogo
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
            alt="Laravel"
          />

          <TechLogo
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
            alt="PHP"
          />

          <TechLogo
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
            alt="WordPress"
          />

          <TechLogo
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="MySQL"
          />

          <TechLogo
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            invert
          />

          <TechLogo
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
          />

        </div>
      </footer>

    </main>
  );
}

function TechLogo({
  src,
  alt,
  invert = false,
}: {
  src: string;
  alt: string;
  invert?: boolean;
}) {
  return (
    <div className="group flex items-center gap-2 opacity-70 transition hover:opacity-100">
      <img
        src={src}
        alt={alt}
        className={`h-6 w-auto transition ${
          invert ? "invert" : ""
        } group-hover:scale-105`}
      />
    </div>
  );
}


function TechPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
      {label}
    </span>
  );
}

function ServiceCard({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="relative h-36">
        <Image src={image} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-white/90">{title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-white/60">{desc}</p>
      </div>
    </article>
  );
}

function ProjectCard({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="relative h-36">
        <Image src={image} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-white/90">{title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-white/60">{desc}</p>
      </div>
    </article>
  );
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-indigo-300/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-300">
      {label}
    </span>
  );
}
