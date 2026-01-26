import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "João Victor Albuquerque | Desenvolvedor Web",
  description:
    "Portfólio de João Victor Albuquerque — desenvolvimento, manutenção e evolução de sistemas web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen overflow-x-hidden`}
      >
        {/* Background global */}
        <div className="fixed inset-0 -z-20">
          <Image
            src="/bg.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Vignette / glow global (usa sua classe do globals.css) */}
        <div className="fixed inset-0 -z-10 vignette" />

        {/* Header global */}
        <header className="relative z-50 border-b border-white/10 bg-black/25 backdrop-blur">
          <div className="container-page flex h-16 items-center justify-between">
            {/* Logo -> Home */}
            <Link href="/" className="flex items-center gap-3">
              <h2 className="text-lg font-semibold text-white">
                João Victor Albuquerque
              </h2>
            </Link>

            {/* Navegação (desktop) */}
            <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
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

        {/* Conteúdo */}
        <main className="relative z-10">{children}</main>

        {/* Footer global padronizado */}
        <footer className="relative z-50 border-t border-white/10 bg-black/25 py-6 backdrop-blur">
          <div className="container-page flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <TechLogo
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                alt="Laravel"
              />
              <TechLogo
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                alt="PHP"
              />
              <TechLogo
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
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
            </div>

            <div className="text-xs text-white/50">
              © {new Date().getFullYear()} João Victor Albuquerque
            </div>
          </div>
        </footer>
      </body>
    </html>
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
    <img
      src={src}
      alt={alt}
      title={alt}
      className={`h-6 w-auto opacity-70 transition hover:opacity-100 ${
        invert ? "invert" : ""
      }`}
      loading="lazy"
    />
  );
}
