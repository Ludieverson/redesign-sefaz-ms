"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AccessibilityButton from "@/components/AccessibilityButton";

function BannerCarousel({
  banners,
}: {
  banners: Array<{ title: string; href: string; image: string }>;
}) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((index) => (index - 1 + banners.length) % banners.length);
  const next = () => setCurrent((index) => (index + 1) % banners.length);

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

  const utilityLinks = [
    { label: "Acessibilidade", href: "#" },
    { label: "Siga @GovernoMS", href: "#" },
  ];

  const utilityIcons: Record<string, JSX.Element | undefined> = {
    Acessibilidade: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-7 w-7">
        <path
          d="M8 1.5C4.40625 1.5 1.5 4.4375 1.5 8C1.5 11.5938 4.40625 14.5 8 14.5C11.5625 14.5 14.5 11.5938 14.5 8C14.5 4.4375 11.5625 1.5 8 1.5ZM8 0.25C12.25 0.25 15.75 3.75 15.75 8C15.75 12.2812 12.25 15.75 8 15.75C3.71875 15.75 0.25 12.2812 0.25 8C0.25 3.75 3.71875 0.25 8 0.25ZM8 2C11.3125 2 14 4.6875 14 8C14 11.3438 11.3125 14 8 14C4.65625 14 2 11.3438 2 8C2 4.6875 4.65625 2 8 2ZM8 3.375C7.375 3.375 6.875 3.90625 6.875 4.5C6.875 5.125 7.375 5.625 8 5.625C8.59375 5.625 9.125 5.125 9.125 4.5C9.125 3.90625 8.59375 3.375 8 3.375ZM11.6562 6.46875C11.9375 6.375 12.0938 6.125 12.0312 5.84375C11.9688 5.59375 11.6875 5.40625 11.4375 5.46875C8.40625 6.1875 7.5625 6.1875 4.53125 5.46875C4.28125 5.40625 4 5.59375 3.9375 5.84375C3.875 6.125 4.03125 6.375 4.3125 6.46875C5.1875 6.65625 6.03125 6.84375 6.875 6.9375C6.84375 10.0938 6.5 10.7812 6.09375 11.8125C5.96875 12.0938 6.125 12.4375 6.40625 12.5312C6.6875 12.6562 7.03125 12.5 7.125 12.2188C7.40625 11.5312 7.65625 10.9375 7.84375 9.75H8.125C8.3125 10.9375 8.5625 11.5312 8.84375 12.2188C8.9375 12.5 9.28125 12.6562 9.5625 12.5312C9.84375 12.4375 10 12.0938 9.875 11.8125C9.46875 10.7812 9.125 10.0938 9.09375 6.9375C9.9375 6.84375 10.7812 6.65625 11.6562 6.46875Z"
          fill="#004F9F"
        />
      </svg>
    ),
  };

  const socialLinks = [
    { label: "Facebook", abbr: "fb", href: "#" },
    { label: "YouTube", abbr: "yt", href: "#" },
    { label: "Instagram", abbr: "ig", href: "#" },
    { label: "X", abbr: "x", href: "#" },
    { label: "TikTok", abbr: "tt", href: "#" },
    { label: "LinkedIn", abbr: "in", href: "#" },
  ];

  const socialIcons: Record<string, JSX.Element> = {
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
    "A SEFAZ",
    "Governo",
    "Serviços",
    "Programas e Projetos",
    "Informativos",
    "Servidor",
    "Fale Conosco",
  ];

    const services: Array<{ title: string; href: string; icon: LucideIcon }> = [
    { title: "IPVA - Consulta de Débito", href: "#", icon: Car },
    { title: "ICMS - isenção para contas de energia elétrica e telecom", href: "#", icon: FileText },
    { title: "Análise das obrigações socioeconômicas pactuadas em termos", href: "#", icon: ClipboardList },
    { title: "Consulta tributária", href: "#", icon: Search },
    { title: "Requerimento de incentivos fiscais com compromisso de operação", href: "#", icon: ClipboardCheck },
    { title: "Fale conosco", href: "#", icon: MessageCircle },
    { title: "Cancelamento ou suspensão de inscrição estadual de terceiros", href: "#", icon: UserMinus },
    { title: "Exclusão ou inclusão de pessoa no quadro societário", href: "#", icon: UserPlus },
    { title: "Emissão de certidões negativas", href: "#", icon: FileMinus },
    { title: "Parcelamento de débitos tributários", href: "#", icon: Wallet },
  ];

  const banners = [
    {
      title: "Mulher trabalhadora, chefe de família",
      href: "#",
      image: "https://www.pge.ms.gov.br/wp-content/themes/new-ms/assets/img/banner/campanha-mulher-trabalhadora.jpg",
    },
    {
      title: "Portal Único MS.GOV.BR",
      href: "#",
      image: "https://www.pge.ms.gov.br/wp-content/themes/new-ms/assets/img/Banner-Cartas-de-Servicos.png",
    },
    {
      title: "Protege - Por elas, proteção de todos os lados",
      href: "#",
      image: "https://www.pge.ms.gov.br/wp-content/themes/new-ms/assets/img/banner/protege.png",
    },
  ];

  const highlightCards = [
    {
      title: "e-Fazenda",
      description: "Portal completo de serviços digitais da SEFAZ.",
      href: "#",
    },
    {
      title: "Documento de Arrecadação - DAEMS",
      description: "Emita e pague seu documento com rapidez.",
      href: "#",
    },
    {
      title: "Inscrição Estadual",
      description: "Cadastre ou atualize os dados da sua IE.",
      href: "#",
    },
    {
      title: "IPVA",
      description: "Consulte valores, datas e parcelamentos disponíveis.",
      href: "#",
    },
    {
      title: "Documentos Fiscais Eletrônicos",
      description: "Acesse NF-e, NFC-e, CT-e e outros documentos.",
      href: "#",
    },
    {
      title: "ITCD",
      description: "Saiba como declarar a transmissão causa mortis ou doação.",
      href: "#",
    },
    {
      title: "Autoparcelamento",
      description: "Negocie débitos e acompanhe suas parcelas online.",
      href: "#",
    },
    {
      title: "Substituição Tributária",
      description: "Confirme tabelas e obrigações atualizadas.",
      href: "#",
    },
  ];

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
                    <a href={link.href} className="px-xs hover:text-text-heading first:pl-0">
                      {link.label}
                    </a>
                    {index < quickLinks.length - 1 ? (
                      <span className="hidden h-3 w-px bg-border-subtle md:mx-2xs md:block" aria-hidden />
                    ) : null}
                  </Fragment>
                ))}
              </nav>
            </div>
            <div className="hidden items-center gap-md md:flex">
              {utilityLinks.map((link, index) => {
                const icon = utilityIcons[link.label];

                return (
                  <Fragment key={link.label}>
                    <a href={link.href} className="flex items-center gap-2 hover:text-text-heading">
                      {icon ? (
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                          {icon}
                        </span>
                      ) : null}
                      <span>{link.label}</span>
                    </a>
                    {index < utilityLinks.length - 1 ? <span className="hidden h-4 w-px bg-border-subtle md:block" aria-hidden /> : null}
                  </Fragment>
                );
              })}
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
                        <span className="text-[0.65rem] font-semibold uppercase">{social.abbr}</span>
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
                  src="/ms.webp"
                  alt="Brasao do Governo de Mato Grosso do Sul"
                  width={240}
                  height={240}
                  priority
                  style={{ marginTop: -24 }}
                />
              <div className="h-16 w-px bg-white/15" aria-hidden />
              <div className="flex flex-col items-center md:items-start">
                <span className="text-lg font-semibold uppercase tracking-wide">SEFAZ</span>
                <span className="text-sm text-white/80">
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
                className="h-10 flex-1 min-w-0 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
              />
              <button
                type="submit"
                className="grid h-10 w-10 place-items-center text-slate-600 transition hover:text-slate-800"
                aria-label="Pesquisar no site"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <nav className="bg-surface">
          <div className="mx-auto max-w-[1300px] px-md">
            <ul className="flex w-full items-center justify-between text-[0.95rem] font-bold uppercase tracking-wide text-text-strong">
              {primaryNav.map((item, index) => (
                <li
                  key={item}
                  className={`flex items-center ${index > 0 ? "pl-md" : ""}`}
                >
                  <a href="#" className="block whitespace-nowrap py-3 text-text-strong transition-colors hover:text-[#004F9F]">
                    {item}
                  </a>
                  {index < primaryNav.length - 1 ? (
                    <span className="hidden h-3 w-px bg-border-subtle md:ml-xl md:block" aria-hidden />
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
            <div className="flex flex-col gap-[0.375rem]">
              <h1 className="text-xl font-semibold text-text-heading md:text-[1.5rem]">Serviços em destaque</h1>
              <p className="text-sm text-text-body/90">
                Acesse rapidamente os principais serviços oferecidos pela Secretaria de Fazenda.
              </p>
            </div>
          <div className="mt-1 grid gap-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {services.map(({ title, href, icon: Icon }) => (
              <a
                key={title}
                href={href}
                className="group flex min-h-[200px] flex-col justify-between gap-md rounded-card border border-border-muted bg-surface p-lg shadow-sm transition-colors"
              >
                <div className="flex flex-1 flex-col">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f2fa] text-[#0F172A]">
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
                <span className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-[#0F172A] underline decoration-slate-300/70 decoration-[1px] underline-offset-[6px] dark:text-slate-100 group-hover:decoration-[#004F9F]/70">
                  Acessar serviço
                  <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.6} />
                </span>
              </a>
            ))}
          </div>
          <div className="mt-2 flex justify-center pt-xs pb-[15px]">
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-full bg-[#004F9F] px-7 py-3.5 text-base font-semibold text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004F9F]"
            >
              <span>Ver todos os serviços</span>
              <ArrowUpRight aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
            </a>
          </div>
          </section>
        </div>

        <section className="w-full bg-white py-10">
          <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-6 px-md">
            <header className="flex flex-col gap-[0.375rem]">
              <h2 className="text-xl font-semibold text-text-heading md:text-[1.5rem]">Campanhas em destaque</h2>
              <p className="text-sm text-text-body/90">
                Iniciativas do Governo de Mato Grosso do Sul que merecem a sua atenção.
              </p>
            </header>
            <BannerCarousel banners={banners} />
          </div>
        </section>

        <div className="mx-auto w-full max-w-[1300px] px-md">
          <section className="mt-12 flex flex-col gap-5">
            <header className="flex flex-col gap-[0.375rem]">
              <h2 className="text-xl font-semibold text-text-heading md:text-[1.5rem]">Destaques</h2>
              <p className="text-sm text-text-body/90">
                Iniciativas do Governo de Mato Grosso do Sul que merecem a sua atenção.
              </p>
            </header>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlightCards.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group flex min-h-[200px] flex-col justify-between gap-md rounded-card border border-border-muted bg-surface p-lg shadow-sm transition-colors"
                >
                  <div className="flex-1 space-y-2xs">
                    <h3
                      className="text-base font-semibold leading-snug text-text-heading"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-body">{item.description}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-800 underline decoration-slate-300/70 decoration-[1px] underline-offset-[6px] dark:text-slate-100 group-hover:decoration-[#004F9F]/70">
                    Acessar serviço
                    <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.6} />
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      <AccessibilityButton />
    </div>
  );
}



