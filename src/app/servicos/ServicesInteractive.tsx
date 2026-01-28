// app/servicos/ServicesInteractive.tsx
"use client";

import { useMemo, useState } from "react";
import {
  Wrench,
  ShieldCheck,
  Bug,
  Gauge,
  Server,
  Database,
  Plug,
  Globe,
  PencilRuler,
  Megaphone,
  Image as ImageIcon,
  MessageCircle,
  Mail,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BadgeCheck,
  Zap,
  Timer,
  FileText,
  CompassIcon,
  Star,
  Crown,
} from "lucide-react";

type PlanKey = "base" | "plus" | "Pro";
type DeliveryMode = "alugar" | "comprar";
type ContractType = "projeto" | "semestral" | "anual";

const WHATSAPP_URL =
  "https://wa.me/5581994891208?text=Ol%C3%A1%20Jo%C3%A3o%2C%20vim%20pela%20p%C3%A1gina%20Servi%C3%A7os%20e%20quero%20um%20or%C3%A7amento%20para...";
const EMAIL = "joao.albuquerque1109@gmail.com";

export default function ServicesInteractive() {
  const [plan, setPlan] = useState<PlanKey>("plus");
  const [deliveryMode, setDeliveryMode] = useState<DeliveryMode>("alugar");
  const [contract, setContract] = useState<ContractType>("projeto");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const planMeta = useMemo(
    () => ({
      base: {
        label: "Base",
        icon: <CheckCircle2 className="h-4 w-4 text-white/80" />,
        tone: "border-white/10 bg-white/5",
        tagline: "Essencial, direto ao ponto.",
      },
      plus: {
        label: "Plus",
        icon: <Sparkles className="h-4 w-4 text-indigo-200" />,
        tone: "border-indigo-400/20 bg-indigo-500/10",
        tagline: "Equilíbrio: velocidade e qualidade.",
      },
      Pro: {
        label: "Pro",
        icon: <Crown className="h-4 w-4 text-white/200" />,
        tone: "border-emerald-400/20 bg-emerald-500/10",
        tagline: "Mais previsivel, menos risco.",
      },
    }),
    []
  );

  // 6 serviços (3 colunas x 2 linhas)
  const services = useMemo(
    () => [
      {
        title: "Manutenção & Evolução (System Care)",
        icon: <Wrench className="h-5 w-5 text-white/80" />,
        desc:
          "System care para sites e sistemas em produção: correções, ajustes e evolução contínua com foco em estabilidade e previsibilidade.",
        fits: ["PJ contínuo", "Semestral", "Anual"],
        bullets: [
          "Correção de bugs e incidentes",
          "Refatoração segura e melhoria contínua",
          "Performance e ajustes em produção",
          "Checklist de estabilidade (system care)",
        ],
      },
      {
        title: "Backend (PHP/APIs) & Regras de Negócio",
        icon: <Server className="h-5 w-5 text-white/80" />,
        desc:
          "Desenvolvimento e manutenção de backend, APIs REST e regras de negócio claras, com integrações e autenticação quando necessário.",
        fits: ["Projeto", "PJ contínuo", "Semestral", "Anual"],
        bullets: [
          "APIs REST e endpoints",
          "Auth / autorização",
          "Regras de negócio sustentáveis",
          "Boas práticas e organização",
        ],
      },
      {
        title: "Dados & Automações",
        icon: <Database className="h-5 w-5 text-white/80" />,
        desc:
          "Manipulação de dados, documentos e automações personalizadas por negócio para reduzir tarefas manuais e aumentar eficiência.",
        fits: ["Projeto", "PJ contínuo", "Semestral", "Anual"],
        bullets: [
          "Rotinas com dados e relatórios",
          "Automação de documentos e fluxos",
          "Integrações orientadas a processos",
          "Soluções sob medida por operação",
        ],
      },
      {
        title: "Criação de Sites & Landing Pages",
        icon: <Globe className="h-5 w-5 text-white/80" />,
        desc:
          "Sites e landing pages rápidas, responsivas e objetivas. Você pode alugar (assinatura) ou comprar (entrega única).",
        fits: ["Projeto", "Semestral", "Anual (aluguel)"],
        bullets: [
          "Performance e responsividade",
          "SEO básico e estrutura clara",
          "Seções orientadas a conversão",
          "Alugar ou comprar (regra de manutenção)",
        ],
        hasBuyOrRent: true,
      },
      {
        title: "Design Gráfico (essencial)",
        icon: <ImageIcon className="h-5 w-5 text-white/80" />,
        desc:
          "Artes simples e úteis para web: banners, thumbnails e ajustes visuais para apoiar sites e campanhas com consistência.",
        fits: ["Projeto", "Semestral"],
        bullets: [
          "Banners e peças para web",
          "Ajustes visuais e padronização",
          "Templates simples",
          "Entrega rápida e objetiva",
        ],
      },
      {
        title: "Suporte ao Usuário & Consultoria",
        icon: <CompassIcon className="h-5 w-5 text-white/80" />,
        desc:
          "Apoio técnico e consultivo para usuários e equipes, focado em resolução de problemas, orientação prática e melhoria contínua no uso de sistemas e processos.",
        fits: ["Projeto", "PJ contínuo", "Semestral", "Anual"],
        bullets: [
          "Suporte técnico ao usuário final",
          "Diagnóstico e resolução de problemas",
          "Orientação sobre uso de sistemas e ferramentas",
          "Consultoria para melhoria de processos e rotinas",
        ],
      },
    ],
    []
  );

  const combos = useMemo(
    () => ({
      base: {
        title: "Base",
        subtitle: "Para resolver o essencial com clareza.",
        items: [
          "Entrega objetiva (escopo bem definido)",
          "Checklist de qualidade básico",
          "Documentação mínima do que foi feito",
          "Suporte por e-mail",
        ],
        bestFor: "Demandas pontuais e projetos pequenos.",
      },
      plus: {
        title: "Plus",
        subtitle: "O pacote que mais vale a pena (padrão).",
        items: [
          "Tudo do Base",
          "Validações do essencial (redução de risco)",
          "Pequeno buffer para ajustes pós-entrega",
          "Relatório curto com próximos passos",
        ],
        bestFor: "Sites/landings, evoluções em produção e automações.",
      },
    Pro: {
        title: "Pro",
        subtitle: "Quando o custo do erro é alto.",
        items: [
          "Tudo do Plus",
          "Plano de entrega incremental com prioridade",
          "Observabilidade básica quando aplicável",
          "Alinhamento semanal (se contrato contínuo)",
        ],
        bestFor: "System care contínuo e demandas críticas.",
      },
    }),
    []
  );

  const contractCopy = useMemo(
    () => ({
      projeto: {
        title: "Projeto (escopo fechado)",
        icon: <FileText className="h-4 w-4 text-white/80" />,
        desc:
          "Ideal para entregas pontuais. Você aprova escopo, prazo e valor — eu entrego e encerro com checklist.",
        highlights: ["Escopo definido", "Prazo claro", "Entrega objetiva"],
      },
      semestral: {
        title: "Semestral",
        icon: <Timer className="h-4 w-4 text-white/80" />,
        desc:
          "Ótimo para evolução contínua com previsibilidade. Indicado para system care, melhorias e automações recorrentes.",
        highlights: ["Previsibilidade", "Backlog evolutivo", "Prioridade maior"],
      },
      anual: {
        title: "Anual",
        icon: <ShieldCheck className="h-4 w-4 text-white/80" />,
        desc:
          "Para quem quer consistência e redução de risco ao longo do tempo. Indicado para operação contínua e crescimento.",
        highlights: ["Maior estabilidade", "Evolução contínua", "Menos risco"],
      },
    }),
    []
  );

  const buyOrRentRules = useMemo(
    () => ({
      alugar: {
        title: "Alugar (assinatura)",
        desc:
          "Você paga uma assinatura e eu mantenho o site/landing rodando e atualizado conforme o pacote.",
        bullets: [
          "Melhor para atualizações contínuas",
          "Ajustes e atualizações enquanto durar a assinatura",
          "Correções incluídas conforme o combo",
          "Previsibilidade para o negócio",
        ],
      },
      comprar: {
        title: "Comprar (entrega única)",
        desc:
          "Você compra o projeto e recebe a entrega final. A manutenção fica inclusa por 90 dias após a entrega.",
        bullets: [
          "Entrega final + posse do projeto",
          "Entrega final + handoff",
          "Manutenção inclusa por 90 dias após a compra",
          "Após 90 dias: manutenção via contrato PJ ou novo escopo",
        ],
      },
    }),
    []
  );

  const faq = useMemo(
    () => [
      {
        q: "Site/landing: alugar ou comprar?",
        a: "Se você quer atualizações contínuas e ajustes recorrentes, alugar faz mais sentido. Se você quer entrega única e controle total, comprar é ideal — com manutenção inclusa por 90 dias após a entrega.",
      },
      {
        q: "O que entra em manutenção (system care)?",
        a: "Correções, ajustes e melhorias incrementais com foco em estabilidade em produção. Mudanças maiores viram novo escopo ou entram no backlog de contratos semestrais/anuais.",
      },
      {
        q: "Como escolher o contrato PJ?",
        a: `
Projeto (escopo fechado): indicado para entregas pontuais com começo, meio e fim — como site/landing, peças essenciais, ajustes específicos ou automações fechadas.

Semestral (PJ): ideal para system care, melhorias recorrentes, manutenção e evolução com previsibilidade por um período intermediário.

Anual (PJ): recomendado quando o sistema é crítico para o negócio e você quer estabilidade, evolução contínua e menor risco no longo prazo.
        `.trim(),
      },
      {
        q: "Qual o primeiro passo?",
        a: "Envie o contexto (objetivo, urgência e links). Eu retorno com perguntas mínimas e uma proposta clara de escopo, prazo e modelo recomendado.",
      },
    ],
    []
  );

  const ctaText = useMemo(() => {
    const planLabel = planMeta[plan].label;
    const contractLabel = contractCopy[contract].title;
    const modeLabel = deliveryMode === "alugar" ? "Alugar" : "Comprar";
    return `Quero orçamento (${planLabel} • ${contractLabel} • ${modeLabel})`;
  }, [plan, contract, deliveryMode, planMeta, contractCopy]);

  return (
    <div className="space-y-10">
      {/* Seletor interativo */}
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
        {/* Combo */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 ">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-white">Plano</h2>
            <span className="text-xs text-white/50">Base • Plus • Pro</span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {(["base", "plus", "Pro"] as PlanKey[]).map((k) => {
              const active = plan === k;
              return (
                <button
                  key={k}
                  onClick={() => setPlan(k)}
                  className={[
                    "rounded-xl border px-3 py-2 text-left text-sm transition",
                    active
                      ? `${planMeta[k].tone} border-white/20`
                      : "border-white/10 bg-black/10 hover:bg-white/5",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-2">
                    {planMeta[k].icon}
                    <span className="font-medium text-white">
                      {planMeta[k].label}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-white/60">
                    {planMeta[k].tagline}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-black/10 p-4">
            <div className="text-sm font-medium text-white">
              {combos[plan].subtitle}
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {combos[plan].items.map((it) => (
                <li key={it} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-white/60" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 text-xs text-white/50">
              Melhor para:{" "}
              <span className="text-white/70">{combos[plan].bestFor}</span>
            </div>
          </div>
        </div>

        {/* Contrato */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-white">Contrato</h2>
            <span className="text-xs text-white/50">Escopo / PJ</span>
          </div>

          <div className="mt-4 grid gap-2">
            {(["projeto", "semestral", "anual"] as ContractType[]).map((k) => {
              const active = contract === k;
              return (
                <button
                  key={k}
                  onClick={() => setContract(k)}
                  className={[
                    "rounded-xl border px-4 py-3 text-left text-sm transition",
                    active
                      ? "border-white/20 bg-white/10"
                      : "border-white/10 bg-black/10 hover:bg-white/5",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-2">
                    {contractCopy[k].icon}
                    <span className="font-medium text-white">
                      {contractCopy[k].title}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-white/60">
                    {contractCopy[k].desc}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {contractCopy[k].highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-black/10 p-4 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-white/70" />
              <span>
                Dica: <b className="text-white/75">Semestral/Anual</b> para
                system care e evolução. <b className="text-white/75">Projeto</b>{" "}
                para entregas pontuais.
              </span>
            </div>
          </div>
        </div>

        {/* Alugar vs Comprar */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-white">Sites & Landing</h2>
            <span className="text-xs text-white/50">Alugar ou Comprar</span>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 p-2">
            <button
              onClick={() => setDeliveryMode("alugar")}
              className={[
                "flex-1 rounded-lg px-3 py-2 text-sm transition",
                deliveryMode === "alugar"
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5",
              ].join(" ")}
            >
              Alugar
            </button>
            <button
              onClick={() => setDeliveryMode("comprar")}
              className={[
                "flex-1 rounded-lg px-3 py-2 text-sm transition",
                deliveryMode === "comprar"
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5",
              ].join(" ")}
            >
              Comprar
            </button>
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-black/10 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-medium text-white">
                  {buyOrRentRules[deliveryMode].title}
                </div>
                <div className="mt-1 text-xs text-white/60">
                  {buyOrRentRules[deliveryMode].desc}
                </div>
              </div>
            </div>

            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {buyOrRentRules[deliveryMode].bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 text-white/50" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-3 flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/60">
              <Bug className="mt-0.5 h-4 w-4 text-white/70" />
              <span>
                <b className="text-white/75">Regra (compra):</b> manutenção por{" "}
                <b className="text-white/75">90 dias</b> após a entrega. Depois:
                contrato PJ ou novo escopo.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Serviços (3 colunas x 2 linhas) */}
      <div>
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white/85">O que eu entrego</h2>
            <p className="mt-1 text-sm text-white/60">
              Selecione um combo e um contrato acima — e use como referência para pedir orçamento.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-indigo-500/90 to-indigo-700/70 px-5 py-3 text-sm font-medium text-white transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4 text-white/90" />
              Falar no WhatsApp
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4 text-white/80" />
              Enviar e-mail
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/7"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-xl border border-white/10 bg-black/10 p-2">
                    {s.icon}
                  </span>
                  <h3 className="text-base font-semibold text-white">{s.title}</h3>
                </div>

                <span className="rounded-full border border-white/10 bg-black/10 px-2 py-1 text-[11px] text-white/60">
                  {s.fits.includes("PJ contínuo") ? "PJ" : "Escopo"}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/65">{s.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {s.fits.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-white/50" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {s.hasBuyOrRent ? (
                <div className="mt-4 rounded-xl border border-white/10 bg-black/10 p-4 text-xs text-white/60">
                  <div className="flex items-start gap-2">
                    <Gauge className="mt-0.5 h-4 w-4 text-white/70" />
                    <span>
                      <b className="text-white/75">Alugar:</b> ajustes enquanto durar o contrato.{" "}
                      <b className="text-white/75">Comprar:</b> entrega única +{" "}
                      <b className="text-white/75">90 dias</b> de manutenção.
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* Como funciona */}
      <div className="grid gap-6 md:grid-cols-3">
        <InfoCard
          icon={<ShieldCheck className="h-5 w-5 text-white/80" />}
          title="Qualidade & estabilidade"
          desc="Entregas incrementais, foco em previsibilidade e risco baixo em produção."
        />
        <InfoCard
          icon={<Bug className="h-5 w-5 text-white/80" />}
          title="Correção com rastreio"
          desc="Diagnóstico, correção e melhoria com registro do que foi feito."
        />
        <InfoCard
          icon={<Timer className="h-5 w-5 text-white/80" />}
          title="Prazos realistas"
          desc="Sem promessas mágicas. Escopo, prazo e entregáveis definidos antes de começar."
        />
      </div>

      {/* FAQ */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-semibold text-white/85">Perguntas rápidas</h2>

        <div className="mt-4 divide-y divide-white/10">
          {faq.map((item, idx) => {
            const open = openFaq === idx;
            return (
              <div key={item.q} className="py-3">
                <button
                  onClick={() => setOpenFaq(open ? null : idx)}
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <span className="text-sm font-medium text-white/85">{item.q}</span>
                  <span className="rounded-lg border border-white/10 bg-black/10 px-2 py-1 text-xs text-white/60">
                    {open ? "−" : "+"}
                  </span>
                </button>

                {open ? (
                  <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-white/65">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/10 p-4">
          <div className="flex items-start gap-3">
            <Zap className="mt-0.5 h-5 w-5 text-indigo-200" />
            <div>
              <div className="text-sm font-semibold text-white">Pronto pra fechar?</div>
              <div className="text-xs text-white/60">
                Me chama com contexto e eu retorno com proposta objetiva.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-indigo-500/90 to-indigo-700/70 px-5 py-3 text-sm font-medium text-white transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4 text-white/90" />
              {ctaText}
            </a>

            <a
              href={`mailto:${EMAIL}?subject=Or%C3%A7amento%20-%20Servi%C3%A7os&body=Ol%C3%A1%20Jo%C3%A3o%2C%20quero%20um%20or%C3%A7amento%20para...`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4 text-white/80" />
              Orçamento por e-mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-2">
        <span className="rounded-xl border border-white/10 bg-black/10 p-2">
          {icon}
        </span>
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/65">{desc}</p>
    </div>
  );
}
