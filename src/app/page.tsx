"use client";

import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import type { ReactElement } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Car,
  ClipboardCheck,
  ClipboardList,
  FileMinus,
  FileText,
  MessageCircle,
  Search,
  UserMinus,
  UserPlus,
  Wallet,
  MapPin,
  Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LuSearch } from "react-icons/lu";
import AccessibilityButton from "@/components/AccessibilityButton";

function BannerCarousel({
  banners,
}: {
  banners: Array<{ title: string; href: string; image: string }>;
}) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((index) => (index - 1 + banners.length) % banners.length);
  const next = () => setCurrent((index) => (index + 1) % banners.length);
  useEffect(() => {
    if (banners.length <= 1) {
      return;
    }
    const timer = setInterval(() => {
      setCurrent((index) => (index + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  if (banners.length === 0) {
    return null;
  }

  const activeBanner = banners[current];

  return (
    <div className="group relative">
      <a
        href={activeBanner.href}
        className="block overflow-hidden rounded-card border border-border-muted bg-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004F9F]"
      >
        <figure className="relative aspect-[8/1] w-full">
          <Image
            src={activeBanner.image}
            alt={activeBanner.title}
            fill
            sizes="(min-width: 1024px) 100vw, 100vw"
            className="object-cover"
            priority
          />
        </figure>
        <span className="sr-only">{activeBanner.title}</span>
      </a>

      {banners.length > 1 ? (
        <>
          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 transition-opacity pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
            <button
              onClick={prev}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#004F9F] shadow-sm transition hover:bg-white"
              aria-label="Banner anterior"
            >
              <ArrowLeft aria-hidden className="h-5 w-5" strokeWidth={1.8} />
            </button>
            <button
              onClick={next}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#004F9F] shadow-sm transition hover:bg-white"
              aria-label="Próximo banner"
            >
              <ArrowRight aria-hidden className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>
          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Mostrar banner ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  current === index ? "bg-[#004F9F]" : "bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default function Home() {
  const quickLinks = [
    { label: "Conteúdo", href: "#" },
    { label: "Menu", href: "#" },
    { label: "Busca", href: "#" },
    { label: "Ouvidoria/SIC", href: "#" },
    { label: "Transparência", href: "#" },
  ];

  const socialLinks = [
    { label: "Facebook", abbr: "fb", href: "#" },
    { label: "YouTube", abbr: "yt", href: "#" },
    { label: "Instagram", abbr: "ig", href: "#" },
    { label: "X", abbr: "x", href: "#" },
    { label: "TikTok", abbr: "tt", href: "#" },
    { label: "LinkedIn", abbr: "in", href: "#" },
  ];

  const socialIcons: Record<string, ReactElement> = {
    fb: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
        <path
          fill="currentColor"
          d="M12 .5C5.65.5.5 5.65.5 12c0 5.72 4.19 10.46 9.66 11.4v-7.89H7.47V12h2.69V9.66c0-2.65 1.57-4.13 3.98-4.13 1.15 0 2.35.21 2.35.21v2.58h-1.33c-1.31 0-1.72.81-1.72 1.64V12h2.92l-.47 3.51h-2.45v7.89C19.31 22.46 23.5 17.72 23.5 12 23.5 5.65 18.35.5 12 .5Z"
        />
      </svg>
    ),
    tt: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
        <path
          fill="currentColor"
          d="M13.2 2c1.3 1.54 2.97 2.45 4.84 2.6v2.96c-1.14-.08-2.27-.46-3.28-1.04v5.54c0 3.78-3.03 6.84-6.83 6.84C4.26 18.9 1 15.74 1 12c0-3.26 2.2-5.92 5.14-6.52v3.02c-1.1.47-1.86 1.55-1.86 2.8 0 1.72 1.4 3.12 3.13 3.12s3.13-1.4 3.13-3.12V2h1.43c.19 1.18 1.18 2.1 2.43 2.1V2.62c-.94-.14-1.78-.53-2.4-1.1Z"
        />
      </svg>
    ),
    yt: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
        <path
          fill="currentColor"
          d="M23.5 6.2a2.97 2.97 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.58a2.97 2.97 0 0 0-2.1 2.1A30.4 30.4 0 0 0 0 12a30.4 30.4 0 0 0 .5 5.8 2.97 2.97 0 0 0 2.1 2.1c2 .58 9.4.58 9.4.58s7.4 0 9.4-.58a2.97 2.97 0 0 0 2.1-2.1A30.4 30.4 0 0 0 24 12a30.4 30.4 0 0 0-.5-5.8ZM9.8 15V9l5.7 3-5.7 3Z"
        />
      </svg>
    ),
    ig: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
        <path
          fill="currentColor"
          d="M7.75 2C4.14 2 2 4.14 2 7.75v8.5C2 19.86 4.14 22 7.75 22h8.5C19.86 22 22 19.86 22 16.25v-8.5C22 4.14 19.86 2 16.25 2h-8.5Zm8.5 2c2.12 0 3.5 1.38 3.5 3.5v8.5c0 2.12-1.38 3.5-3.5 3.5h-8.5c-2.12 0-3.5-1.38-3.5-3.5v-8.5c0-2.12 1.38-3.5 3.5-3.5h8.5Zm-4.25 3.5A4.5 4.5 0 0 0 7.5 12a4.5 4.5 0 0 0 4.5 4.5 4.5 4.5 0 0 0 4.5-4.5 4.5 4.5 0 0 0-4.5-4.5Zm0 2c1.43 0 2.5 1.07 2.5 2.5s-1.07 2.5-2.5 2.5A2.48 2.48 0 0 1 9.5 12c0-1.43 1.07-2.5 2.5-2.5Zm5-2.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
        />
      </svg>
    ),
    x: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
        <path
          fill="currentColor"
          d="M3 3h4.9l4.37 6.33L16.64 3H21l-6.58 8.42L21 21h-4.9l-4.64-6.9L7.36 21H3l6.76-9.07L3 3Zm3.41 1.72 5.53 8.29 5.69-8.29h-1.6l-4.1 5.93-3.86-5.93H6.41Zm11.18 14.56-5.79-8.68-5.97 8.68h1.6l4.25-6.17 4.17 6.17h1.74Z"
        />
      </svg>
    ),
    in: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
        <path
          fill="currentColor"
          d="M4.77 3.5a1.77 1.77 0 1 1-3.54 0 1.77 1.77 0 0 1 3.54 0ZM1.5 21h3.97V7.94H1.5V21Zm6.38-13.06h3.8v1.77h.05c.53-1 1.83-2.05 3.77-2.05 4.04 0 4.79 2.7 4.79 6.2V21h-3.97v-5.88c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.09V21H7.88V7.94Z"
        />
      </svg>
    ),
  };

  const primaryNav = [
    "Início",
    "Institucional",
    "Serviços",
    "Programas e Projetos",
    "Informativos",
    "Sistemas",
    "Fale Conosco",
  ];

  const services: Array<{ title: string; href: string; icon: LucideIcon }> = [
    { title: "IPVA - Consulta de Débito", href: "#", icon: Car },
    {
      title: "ICMS - isenção para contas de energia elétrica e telecom",
      href: "#",
      icon: FileText,
    },
    {
      title: "Análise das obrigações socioeconômicas pactuadas em termos",
      href: "#",
      icon: ClipboardList,
    },
    { title: "Consulta tributária", href: "#", icon: Search },
    {
      title: "Requerimento de incentivos fiscais com compromisso de operação",
      href: "#",
      icon: ClipboardCheck,
    },
    { title: "Fale conosco", href: "#", icon: MessageCircle },
    {
      title: "Cancelamento ou suspensão de inscrição estadual de terceiros",
      href: "#",
      icon: UserMinus,
    },
    { title: "Exclusão ou inclusão de pessoa no quadro societário", href: "#", icon: UserPlus },
    { title: "Emissão de certidões negativas", href: "#", icon: FileMinus },
    { title: "Parcelamento de débitos tributários", href: "#", icon: Wallet },
  ];

  const banners = [
    {
      title: "Mulher trabalhadora, chefe de família",
      href: "#",
      image:
        "https://www.pge.ms.gov.br/wp-content/themes/new-ms/assets/img/banner/campanha-mulher-trabalhadora.jpg",
    },
    {
      title: "Portal Único MS.GOV.BR",
      href: "#",
      image:
        "https://www.pge.ms.gov.br/wp-content/themes/new-ms/assets/img/Banner-Cartas-de-Servicos.png",
    },
    {
      title: "Protege - Por elas, proteção de todos os lados",
      href: "#",
      image: "https://www.pge.ms.gov.br/wp-content/themes/new-ms/assets/img/banner/protege.png",
    },
  ];

  const highlightCards: Array<{
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
    govBadge?: boolean;
    autoBadge?: boolean;
  }> = [
    {
      title: "e-Fazenda",
      description: "Portal completo de serviços digitais da SEFAZ.",
      href: "#",
      icon: ClipboardList,
      govBadge: true,
    },
    {
      title: "Documento de Arrecadação - DAEMS",
      description: "Emita e pague seu documento com rapidez.",
      href: "#",
      icon: FileText,
    },
    {
      title: "Inscrição Estadual",
      description: "Cadastre ou atualize os dados da sua IE.",
      href: "#",
      icon: UserPlus,
    },
    {
      title: "IPVA",
      description: "Consulte valores, datas e parcelamentos disponíveis.",
      href: "#",
      icon: Car,
      autoBadge: true,
    },
    {
      title: "Documentos Fiscais Eletrônicos",
      description: "Acesse NF-e, NFC-e, CT-e e outros documentos.",
      href: "#",
      icon: FileMinus,
    },
    {
      title: "ITCD",
      description: "Saiba como declarar a transmissão causa mortis ou doação.",
      href: "#",
      icon: ClipboardCheck,
      autoBadge: true,
    },
    {
      title: "Autoparcelamento",
      description: "Negocie débitos e acompanhe suas parcelas online.",
      href: "#",
      icon: Wallet,
    },
    {
      title: "Substituição Tributária",
      description: "Confirme tabelas e obrigações atualizadas.",
      href: "#",
      icon: Search,
    },
  ];

  const partnerOrganizations = [
    {
      name: "Educação Fiscal",
      description: "Programa Estadual de Educação Fiscal.",
      href: "#",
    },
    {
      name: "Nota MS Premiada",
      description: "Programa de incentivo Nota MS Premiada.",
      href: "#",
    },
    {
      name: "COGEF",
      description: "Comissão de Gestão Fazendária.",
      href: "#",
    },
    {
      name: "PGE",
      description: "Procuradoria-Geral do Estado.",
      href: "#",
    },
    {
      name: "CGE",
      description: "Controladoria-Geral do Estado.",
      href: "#",
    },
    {
      name: "CGU",
      description: "Controladoria-Geral da União.",
      href: "#",
    },
    {
      name: "Sintegra",
      description: "Sistema Integrado de Informações sobre Operações Interestaduais.",
      href: "#",
    },
    {
      name: "Sindifiscal MS",
      description: "Sindicato dos Fiscais Tributários de Mato Grosso do Sul.",
      href: "#",
    },
    {
      name: "Sindifisco MS",
      description: "Sindicato dos Auditores Fiscais do Estado.",
      href: "#",
    },
    {
      name: "Portal MS",
      description: "Portal oficial do Governo de Mato Grosso do Sul.",
      href: "#",
    },
  ];

  const partnerCarouselRef = useRef<HTMLDivElement>(null);

  const scrollPartners = (direction: "left" | "right") => {
    const container = partnerCarouselRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>("[data-partner-card]");
    const amount = card ? card.offsetWidth + 16 : container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const footerLinks = [
    { label: "LGPD", href: "#" },
    { label: "FALA SERVIDOR", href: "#" },
    { label: "ACESSIBILIDADE", href: "#" },
    { label: "ORDEM CRONOLÓGICA DE PAGAMENTOS", href: "#" },
    { label: "PLANOS DE CONTRATAÇÕES ANUAIS", href: "#" },
  ];

  const footerContact = {
    title: "Procuradoria-Geral do Estado",
    address: [
      "Av. Des. José Nunes da Cunha s/n, Bloco 4",
      "Parque dos Poderes - Campo Grande | MS",
      "CEP.: 79031-310",
    ],
    mapLabel: "Mapa",
    mapHref: "#",
  };

  return (
    <div className="min-h-screen bg-surface-muted text-text-body">
      <header className="border-b border-border-muted">
        <div className="bg-surface text-xs uppercase tracking-wide text-text-body">
          <div className="mx-auto flex h-10 max-w-[1300px] items-center justify-between px-md">
            <div className="flex items-center gap-sm">
              <span className="font-semibold text-text-subtle">Ir para:</span>
              <nav className="flex items-center text-xs">
                {quickLinks.map((link, index) => (
                  <Fragment key={link.label}>
                    <a href={link.href} className="px-xs font-medium hover:text-[#004F9F] first:pl-0">
                      {link.label}
                    </a>
                    {index < quickLinks.length - 1 ? (
                      <span
                        className="hidden h-3 w-px bg-border-subtle md:mx-2xs md:block"
                        aria-hidden
                      />
                    ) : null}
                  </Fragment>
                ))}
              </nav>
            </div>
            <div className="hidden items-center gap-md md:flex">
              <span>Siga @GovernoMS</span>
              <div className="flex items-center gap-xs">
                {socialLinks.map((social) => {
                  const icon = socialIcons[social.abbr];

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary text-white transition hover:bg-brand-primary-strong"
                      aria-label={social.label}
                    >
                      {icon ?? (
                        <span className="text-[0.65rem] font-semibold uppercase">
                          {social.abbr}
                        </span>
                      )}
                      <span className="sr-only">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-primary text-white">
          <div className="mx-auto flex max-w-[1300px] flex-col gap-lg px-md py-lg md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 flex-col items-center gap-md md:flex-row md:items-start md:gap-md">
              <Image
                src="/msgov.svg"
                alt="Brasao do Governo de Mato Grosso do Sul"
                width={240}
                height={240}
                priority
                style={{ marginTop: -24 }}
              />
              <div className="h-16 w-px translate-y-[2px] bg-white/15" aria-hidden />
              <div className="flex flex-col items-center md:items-start">
                <span className="text-lg font-semibold uppercase tracking-wide">SEFAZ</span>
                <span className="inline-block -translate-y-[1px] text-sm text-white/80">
                  Secretaria de Estado de
                  <br />
                  Fazenda
                </span>
              </div>
            </div>
              <form className="flex w-full max-w-sm min-w-[240px] items-center overflow-hidden rounded-full bg-white pl-6 pr-3 shadow-sm transition focus-within:ring-2 focus-within:ring-[#0b5fbe] focus-within:ring-offset-2 focus-within:ring-offset-white md:w-auto">
                <input
                  type="search"
                  placeholder="Buscar no site"
                  className="h-12 flex-1 min-w-0 bg-transparent text-sm text-slate-800 placeholder:text-text-body outline-none"
                />
                <button
                  type="submit"
                  className="grid h-12 w-12 place-items-center text-text-body transition hover:text-slate-800"
                  aria-label="Pesquisar no site"
                >
                <LuSearch className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <nav className="bg-surface">
          <div className="mx-auto max-w-[1300px] px-md">
            <ul className="flex w-full items-center justify-between text-[0.95rem] font-bold uppercase tracking-wide text-text-strong">
              {primaryNav.map((item, index) => (
                <li key={item} className={`flex items-center ${index > 0 ? "pl-md" : ""}`}>
                  <a
                    href="#"
                    className="block whitespace-nowrap py-3 text-text-strong transition-colors hover:text-[#004F9F]"
                  >
                    {item}
                  </a>
                  {index < primaryNav.length - 1 ? (
                    <span
                      className="hidden h-3 w-px bg-border-subtle md:ml-xl md:block"
                      aria-hidden
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <main className="flex flex-col gap-lg py-9">
        <div className="mx-auto w-full max-w-[1300px] px-md">
          <section className="flex flex-col gap-lg pt-0">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-3 w-3 shrink-0 rounded-full bg-[#007F31]" />
                <h1 className="text-xl font-semibold text-text-heading md:text-[1.5rem]">
                  Sistemas e Serviços Digitais
                </h1>
              </div>
              <p className="text-sm text-text-body/90 md:text-base">
                Acesse rapidamente os principais serviços e sistemas online.
              </p>
            </div>
            <div className="mt-1 grid gap-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {services.map(({ title, href, icon: Icon }) => (
                <a
                  key={title}
                  href={href}
                  className="group flex flex-col justify-between gap-md rounded-card border border-border-muted bg-surface p-lg shadow-sm transition-colors"
                >
                  <div className="flex flex-1 flex-col">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e0f6ec] text-[#007F31]">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h2
                      className="mt-4 flex-1 text-[15px] font-semibold leading-tight text-[#0F172A]"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {title}
                    </h2>
                  </div>
                  <span className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-text-body underline decoration-slate-300/70 decoration-[1px] underline-offset-[6px] group-hover:text-[#007F31] group-hover:decoration-[#007F31]/80">
                    Acessar serviço
                    <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.6} />
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-2 flex justify-center pt-xs pb-[15px]">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full bg-[#007F31] px-7 py-3.5 text-base font-semibold text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007F31]"
              >
                <span>Ver todos os serviços</span>
                <ArrowUpRight aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
              </a>
            </div>
          </section>
        </div>

        <section className="w-full bg-white py-10">
          <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-6 px-md">
            <header className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold text-text-heading md:text-[1.5rem]">
                Campanhas em destaque
              </h2>
              <p className="text-sm text-text-body/90 md:text-base">
                Iniciativas do Governo de Mato Grosso do Sul que merecem a sua atenção.
              </p>
            </header>
            <BannerCarousel banners={banners} />
          </div>
        </section>

        <div className="mx-auto w-full max-w-[1300px] px-md">
          <section className="mt-12 flex flex-col gap-5">
            <header className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-3 w-3 shrink-0 rounded-full bg-[#0C4DA2]" />
                <h2 className="text-xl font-semibold text-text-heading md:text-[1.5rem]">
                  Destaques
                </h2>
              </div>
              <p className="text-sm text-text-body/90 md:text-base">
                Iniciativas do Governo de Mato Grosso do Sul que merecem a sua atenção.
              </p>
            </header>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {highlightCards.map(({ title, description, href, icon: Icon }) => (
                <a
                  key={title}
                  href={href}
                  className="group flex flex-col justify-between gap-md rounded-card border border-border-muted bg-surface p-lg shadow-sm transition-colors"
                >
                  <div className="flex flex-1 flex-col">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E5F1FF] text-[#0C4DA2]">
                      <Icon aria-hidden className="size-5" strokeWidth={1.8} />
                    </span>
                    <h3
                      className="mt-4 text-[15px] font-semibold leading-tight text-[#0F172A]"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      className="mt-2 text-sm text-text-body"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {description}
                    </p>
                  </div>
                  <span className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-text-body underline decoration-slate-300/70 decoration-[1px] underline-offset-[6px] group-hover:decoration-[#004F9F]/70">
                    Acessar serviço
                    <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.6} />
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-16 w-full bg-white py-12">
          <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-8 px-md">
            <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-3 w-3 shrink-0 rounded-full bg-gradient-to-br from-[#FECF3B] to-[#F59E0B]" />
                  <h2 className="text-xl font-semibold text-text-heading md:text-[1.5rem]">
                    Instituições relacionadas
                  </h2>
                </div>
                <p className="text-sm text-text-body/85 md:text-base">
                  Conecte-se com órgãos parceiros que reforçam os serviços e iniciativas da Secretaria
                  de Fazenda.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollPartners("left")}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-muted bg-white text-text-body shadow-sm transition hover:text-[#004F9F]"
                  aria-label="Ver instituições anteriores"
                >
                  <ArrowLeft aria-hidden className="size-5" strokeWidth={1.8} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollPartners("right")}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-muted bg-white text-text-body shadow-sm transition hover:text-[#004F9F]"
                  aria-label="Ver próximas instituições"
                >
                  <ArrowRight aria-hidden className="size-5" strokeWidth={1.8} />
                </button>
              </div>
            </header>
            <div className="relative">
              <div
                className="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                ref={partnerCarouselRef}
              >
                {partnerOrganizations.map(({ name, description, href }) => (
                  <a
                    key={name}
                    href={href}
                    className="flex min-w-[230px] max-w-[260px] flex-col gap-4 rounded-card border border-border-muted bg-surface p-5 shadow-sm"
                    data-partner-card
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#FFF4D6] text-[#C78500]">
                        <Globe aria-hidden className="size-5" strokeWidth={1.8} />
                      </span>
                      <div className="space-y-1">
                        <h3
                          className="text-sm font-semibold leading-snug text-[#0F172A]"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {name}
                        </h3>
                        <p
                          className="text-sm text-text-body"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {description}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[#0052B4] underline decoration-[#0052B4]/60 decoration-[1px] underline-offset-[6px]">
                      Acessar site
                      <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.6} />
                    </span>
                  </a>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-white via-white/80 to-transparent sm:block" />
            </div>
            <div className="flex justify-center gap-3 sm:hidden">
              <button
                type="button"
                onClick={() => scrollPartners("left")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-muted bg-white text-text-body shadow-sm transition hover:text-[#004F9F]"
                aria-label="Ver instituições anteriores"
              >
                <ArrowLeft aria-hidden className="size-5" strokeWidth={1.8} />
              </button>
              <button
                type="button"
                onClick={() => scrollPartners("right")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-muted bg-white text-text-body shadow-sm transition hover:text-[#004F9F]"
                aria-label="Ver próximas instituições"
              >
                <ArrowRight aria-hidden className="size-5" strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-muted bg-white">
        <div className="bg-[#E5E7EB]">
          <div className="mx-auto flex max-w-[1300px] flex-wrap items-center gap-x-4 gap-y-3 px-md py-4 text-sm font-semibold text-[#3F3F46]">
            {footerLinks.map((item, index) => (
              <Fragment key={item.label}>
                <a
                  href={item.href}
                  className="transition hover:text-[#0C4DA2]"
                >
                  {item.label}
                </a>
                {index < footerLinks.length - 1 && (
                  <span className="h-3 w-px bg-border-subtle" aria-hidden />
                )}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="border-t border-border-muted">
          <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-8 px-md py-10 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3 text-sm text-text-body">
              <h3 className="text-base font-semibold uppercase tracking-wide text-[#0F172A]">
                {footerContact.title}
              </h3>
              {footerContact.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <a
                href={footerContact.mapHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0052B4] underline decoration-[#0052B4]/60 decoration-[1px] underline-offset-[6px]"
              >
                {footerContact.mapLabel}
                <MapPin aria-hidden className="size-4" strokeWidth={1.8} />
              </a>
            </div>
            <div className="flex items-center justify-start md:justify-end">
              <Image
                src="/GOV-MS-horizontal-COLOR.png"
                alt="Governo de Mato Grosso do Sul"
                width={220}
                height={60}
                className="h-auto w-[220px]"
                priority
              />
            </div>
          </div>
        </div>

        <div className="bg-[#004F9F]">
          <p className="mx-auto max-w-[1300px] px-md py-3 text-center text-xs font-semibold uppercase tracking-wide text-white">
            SETDIG | Secretaria-Executiva de Transformação Digital
          </p>
        </div>
      </footer>

      <AccessibilityButton />
    </div>
  );
}
