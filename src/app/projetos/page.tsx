"use client";

// app/projetos/page.tsx
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  goal: string;
  whyNeed: string;
  highlights: string[];
  stack?: string[];
  repoUrl?: string;
  liveUrl?: string;
  gallery: { src: string; alt: string }[];
  badge: "Landing Page" | "Sistema Web" | "Em desenvolvimento" | "Projeto em equipe" | "Demo";
};

const projects: Project[] = [
  {
    slug: "otica-vip",
    title: "Ótica VIP",
    subtitle: "Landing page focada em conversão (captação de clientes).",
    badge: "Landing Page",
    repoUrl: "https://github.com/joaoalbuquerque1109/page-oticavip",
    liveUrl: "https://joaoalbuquerque1109.github.io/page-oticavip/",
    goal:
      "Transformar visitas em mensagens no WhatsApp e pedidos de orçamento com uma experiência rápida, bonita e objetiva.",
    whyNeed:
      "Se você vende produto/serviço e depende de indicação, uma landing assim vira seu vendedor 24h: ela filtra curiosos, apresenta prova social e leva o cliente direto pra ação.",
    highlights: [
      "Visual profissional e leve (carrega rápido)",
      "Estrutura de conversão: chamada clara + prova social + CTA",
      "Ideal para tráfego pago e anúncios locais",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind"],
    gallery: [
      { src: "/otica-vip/otica1.png", alt: "Ótica VIP - Hero" },
      { src: "/otica-vip/otica2.png", alt: "Ótica VIP - Seções" },
      { src: "/otica-vip/otica3.png", alt: "Ótica VIP - CTA" },
    ],
  },
  {
    slug: "gestao-beneficios",
    title: "Gestão de Benefícios",
    subtitle: "Sistema para administrar benefícios e processos internos.",
    badge: "Projeto em equipe",
    repoUrl: "https://github.com/joaoalbuquerque1109/gestao-beneficios",
    liveUrl: "https://gestao-beneficios.vercel.app/",
    goal:
      "Centralizar solicitações, aprovações e controle de benefícios em um único fluxo — reduzindo retrabalho e ruído entre setores.",
    whyNeed:
      "Quem já perdeu tempo em planilhas e mensagens soltas sabe: o problema não é 'organização', é falta de processo. Esse tipo de sistema vira necessidade quando você quer previsibilidade, histórico e responsabilidade clara.",
    highlights: [
      "Fluxo organizado (menos 'quem ficou de fazer o quê?')",
      "Histórico e rastreabilidade (quem aprovou, quando, por quê)",
      "Pronto para evoluir com regras por perfil/roles",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind"],
    gallery: [
      { src: "/gestao-beneficios/gestao1.png", alt: "Gestão de Benefícios - Login" },
      { src: "/gestao-beneficios/gestao2.png", alt: "Gestão de Benefícios - Detalhes" },
      { src: "/gestao-beneficios/gestao3.png", alt: "Gestão de Benefícios - Configurações" },
    ],
  },
  {
    slug: "barberflow",
    title: "BarberFlow",
    subtitle: "Sistema de barbearia: agenda, clientes e rotina sem bagunça.",
    badge: "Sistema Web",
    repoUrl: "https://github.com/joaoalbuquerque1109/barberflow-pro-70",
    liveUrl: "https://barberflow-pro-70.lovable.app/",
    goal:
      "Organizar agenda, registrar atendimentos e dar visão clara do dia (e do mês) — sem depender de caderno, direct e conversa no WhatsApp.",
    whyNeed:
      "Para barbearias, a dor não é só 'marcar horário': é perder cliente por falta de confirmação, não ter histórico, não saber o que dá lucro e viver apagando incêndio. Um sistema assim vira o coração do negócio.",
    highlights: [
      "Agenda central e organizada (menos furo e confusão)",
      "Cadastro e histórico de clientes (retenção e recorrência)",
      "Base pronta para evoluir com relatórios e automações",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind"],
    gallery: [
      { src: "/barberflow/barber1.png", alt: "BarberFlow - Home" },
      { src: "/barberflow/barber2.png", alt: "BarberFlow - Dashboard" },
      { src: "/barberflow/barber4.png", alt: "BarberFlow - Login" },
    ],
  },
  {
    slug: "my-erp",
    title: "My-ERP (Contabilidade)",
    subtitle: "Sistema de gestão para escritório contábil (em desenvolvimento).",
    badge: "Em desenvolvimento",
    repoUrl: "https://github.com/joaoalbuquerque1109/My-ERP",
    goal:
      "Criar um ERP modular para rotinas contábeis e administrativas, com foco em reduzir tarefas repetitivas e aumentar controle do escritório.",
    whyNeed:
      "Escritório contábil cresce quando troca esforço por processo. O diferencial não é trabalhar mais — é padronizar, automatizar e ter visão de tudo: clientes, pendências, prazos e entregas. Isso vira necessidade assim que o volume aumenta.",
    highlights: [
      "Visão por processos e rotinas (prazos e pendências)",
      "Estrutura modular (cresce sem virar Frankenstein)",
      "Pensado para automações e integrações futuras",
    ],
    stack: ["Next.js", "TypeScript", "Supabase (planejado)"],
    gallery: [
      { src: "/my-erp/erp1.png", alt: "My-ERP - Visão geral" },
      { src: "/my-erp/erp2.png", alt: "My-ERP - Módulos" },
      { src: "/my-erp/erp3.png", alt: "My-ERP - Fluxos" },
    ],
  },
];

const demoProject: Project = {
  slug: "portfolio-demo",
  title: "Este Portfólio que você está vendo",
  subtitle: "A própria página de projetos é um produto: UI + arquitetura + experiência.",
  badge: "Demo",
  goal:
    "Demonstrar na prática como eu construo interfaces, estrutura, responsividade e comunicação de valor — como um sistema real, não só um “site bonito”.",
  whyNeed:
    "Se você quer contratar alguém para manter/evoluir sistemas, precisa ver clareza, padrão e acabamento. Esse portfólio é a prova do método: organização, consistência e foco em conversão.",
  highlights: [
    "UI moderna com hierarquia visual (não quebra no mobile)",
    "Componentização e padrão visual consistente",
    "Pensado para crescer: novas páginas, serviços, funis e produtos",
  ],
  stack: ["Next.js", "TypeScript", "Tailwind"],
  gallery: [],
};

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function Badge({ text }: { text: Project["badge"] }) {
  const tone =
    text === "Landing Page"
      ? "border-amber-400/20 bg-amber-500/10 text-amber-200"
      : text === "Projeto em equipe"
      ? "border-sky-400/20 bg-sky-500/10 text-sky-200"
      : text === "Em desenvolvimento"
      ? "border-violet-400/20 bg-violet-500/10 text-violet-200"
      : text === "Demo"
      ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-200"
      : "border-white/10 bg-white/5 text-white/80";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tone
      )}
    >
      {text}
    </span>
  );
}

/**
 * Gallery com Lightbox responsivo:
 * - trava scroll do fundo (body overflow hidden)
 * - permite rolagem DENTRO do modal (container rolável)
 * - ESC fecha | ← → navega
 */
function Gallery({ items }: { items: { src: string; alt: string }[] }) {
  const safeItems = useMemo(
    () => (items ?? []).filter((it) => typeof it?.src === "string" && it.src.trim().startsWith("/")),
    [items]
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : safeItems[activeIndex];

  // ESC + setas
  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i === null ? null : Math.min(i + 1, safeItems.length - 1)));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i === null ? null : Math.max(i - 1, 0)));
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, safeItems.length]);

  if (!safeItems.length) return null;

  return (
    <>
      {/* Thumbs */}
      <div className="mt-4">
        <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {safeItems.map((img, idx) => (
            <button
              key={`${img.src}-${idx}`}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="relative h-40 w-72 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/20 md:h-44 md:w-80"
              aria-label={`Abrir imagem: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="cursor-zoom-in object-cover transition-transform duration-300 hover:scale-[1.03]"
                sizes="(max-width: 768px) 288px, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black/55 shadow-2xl animate-modal-scale"
          style={{ WebkitOverflowScrolling: "touch" }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          {/* spacer p/ permitir rolagem confortável */}
          <div className="min-h-[100svh] px-4 py-6 sm:px-6 sm:py-10">
            <div
              className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black/55 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex flex-col gap-2 border-b border-white/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white/90">{active.alt}</p>
                  <p className="text-xs text-white/50">
                    {activeIndex! + 1} / {safeItems.length} • ESC fecha • ← → navega
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 sm:justify-end">
                  <a
                    href={active.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs font-medium text-white/85 hover:bg-black/40"
                  >
                    Abrir imagem em nova aba
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(null)}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/85 hover:bg-white/10"
                  >
                    Fechar
                  </button>
                </div>
              </div>

              {/* Imagem responsiva */}
              <div className="relative w-full">
                {/* Em vez de “travado” em vh, aqui mantém uma boa altura e ainda permite rolar o modal */}
                <div className="relative h-[55svh] w-full sm:h-[70svh]">
                  <Image
                    src={active.src}
                    alt={active.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 92vw, 1024px"
                    priority
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="flex flex-col gap-2 border-t border-white/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={() => setActiveIndex((i) => (i === null ? null : Math.max(i - 1, 0)))}
                  disabled={activeIndex === 0}
                  className={cn(
                    "w-full rounded-xl border px-4 py-2 text-sm sm:w-auto",
                    "border-white/10 bg-white/5 text-white/85 hover:bg-white/10",
                    activeIndex === 0 && "cursor-not-allowed opacity-40 hover:bg-white/5"
                  )}
                >
                  ← Anterior
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((i) => (i === null ? null : Math.min(i + 1, safeItems.length - 1)))
                  }
                  disabled={activeIndex === safeItems.length - 1}
                  className={cn(
                    "w-full rounded-xl border px-4 py-2 text-sm sm:w-auto",
                    "border-white/10 bg-white/5 text-white/85 hover:bg-white/10",
                    activeIndex === safeItems.length - 1 &&
                      "cursor-not-allowed opacity-40 hover:bg-white/5"
                  )}
                >
                  Próxima →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-white md:text-xl">{p.title}</h3>
            <Badge text={p.badge} />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/70">{p.subtitle}</p>
        </div>

        <div className="flex gap-2 md:justify-end">
          {p.repoUrl && (
            <Link
              href={p.repoUrl}
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/85 hover:bg-black/30"
            >
              GitHub
            </Link>
          )}
          {p.liveUrl && (
            <Link
              href={p.liveUrl}
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
            >
              Ver online
            </Link>
          )}
        </div>
      </div>

      <Gallery items={p.gallery} />

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
          <p className="text-xs font-semibold tracking-wide text-white/70">OBJETIVO</p>
          <p className="mt-2 text-sm leading-relaxed text-white/75">{p.goal}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
          <p className="text-xs font-semibold tracking-wide text-white/70">
            POR QUE ISSO VIRA NECESSIDADE
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/75">{p.whyNeed}</p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-black/10 p-4">
        <p className="text-xs font-semibold tracking-wide text-white/70">DIFERENCIAIS</p>
        <ul className="mt-3 space-y-2 text-sm text-white/75">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {p.stack?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {s}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function ProjetosPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image src="/bg.jpg" alt="" fill priority className="object-cover" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 -z-10 vignette" />

      <section className="container-page py-12">
        <div className="glass rounded-3xl p-6 md:p-10">
          {/* Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-white md:text-3xl">Projetos</h1>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
                Aqui você vê sistemas que eu criei (e evoluo) com foco em{" "}
                <span className="text-white/90">resultado</span>: menos retrabalho, mais controle,
                mais conversão e mais previsibilidade no dia a dia.
              </p>
            </div>

            <Link
              href="/servicos"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
            >
              Quero um orçamento
            </Link>
          </div>

          {/* Projects */}
          <div className="mt-8 grid gap-5">
            {projects.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}

            {/* Portfolio demo */}
            <ProjectCard p={demoProject} />
          </div>

          {/* CTA final */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-black/10 p-6 md:p-7">
            <h2 className="text-lg font-semibold text-white md:text-xl">
              Quer transformar isso em necessidade no seu negócio?
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
              Se hoje você sente que “tá tudo espalhado” (mensagens, planilhas, caderno, anotações),
              o próximo passo não é trabalhar mais: é criar um fluxo e um sistema que te dê
              <span className="text-white/90"> controle</span>, <span className="text-white/90">histórico</span> e{" "}
              <span className="text-white/90">previsibilidade</span>.
            </p>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-emerald-500/15 px-5 py-3 text-sm font-medium text-emerald-100 hover:bg-emerald-500/20"
              >
                Ver serviços e pacotes
              </Link>
              <Link
                href="https://github.com/joaoalbuquerque1109"
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/15"
              >
                Ver GitHub completo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
