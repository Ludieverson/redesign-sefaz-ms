import Image from "next/image";

export default function Home() {
  const quickLinks = [
    { label: "Conteudo", href: "#" },
    { label: "Menu", href: "#" },
    { label: "Busca", href: "#" },
    { label: "Ouvidoria/SIC", href: "#" },
    { label: "Transparencia", href: "#" },
  ];

  const utilityLinks = [
    { label: "Acessibilidade", href: "#" },
    { label: "V-Libras", href: "#" },
    { label: "Siga @GovernoMS", href: "#" },
  ];

  const socialLinks = [
    { label: "Facebook", abbr: "fb", href: "#" },
    { label: "YouTube", abbr: "yt", href: "#" },
    { label: "Instagram", abbr: "ig", href: "#" },
    { label: "X", abbr: "x", href: "#" },
    { label: "TikTok", abbr: "tt", href: "#" },
    { label: "LinkedIn", abbr: "in", href: "#" },
  ];

  const primaryNav = [
    "Inicio",
    "A SEFAZ",
    "Governo",
    "Servicos",
    "Transparencia Fiscal",
    "Programas e Projetos",
    "Comunicacao",
    "Servidor",
    "Fale Conosco",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200">
        <div className="bg-slate-100 text-xs uppercase tracking-wide text-slate-600">
          <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-500">Ir para:</span>
              <nav className="flex items-center gap-3">
                {quickLinks.map((link) => (
                  <a key={link.label} href={link.href} className="hover:text-slate-800">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="hidden items-center gap-4 md:flex">
              {utilityLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-slate-800">
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0c4da2] text-[0.65rem] font-semibold uppercase text-white transition hover:bg-[#083777]"
                    aria-label={social.label}
                  >
                    {social.abbr}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0c4da2] text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 items-center gap-5">
              <div className="relative h-16 w-[220px] md:h-20 md:w-[260px]">
                <Image
                  src="/ms.webp"
                  alt="Logotipo do Governo de Mato Grosso do Sul"
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 260px, 220px"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight md:text-2xl">ms.gov.br</span>
                <span className="text-lg font-semibold uppercase tracking-wide">SEFAZ</span>
                <span className="text-sm text-white/80">Secretaria de Estado de Fazenda</span>
              </div>
            </div>
            <form className="flex w-full max-w-sm items-center overflow-hidden rounded-full bg-white pl-5 pr-2">
              <input
                type="search"
                placeholder="Buscar no site"
                className="h-12 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="grid h-9 w-9 place-items-center rounded-full bg-[#0c4da2] text-white transition hover:bg-[#083777]"
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

        <nav className="bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-4 text-sm font-semibold uppercase tracking-wide text-slate-700">
              {primaryNav.map((item, index) => (
                <li key={item} className="flex items-center gap-6">
                  <a href="#" className="transition hover:text-[#0c4da2]">
                    {item}
                  </a>
                  {index < primaryNav.length - 1 ? (
                    <span className="hidden h-4 w-px bg-slate-200 md:block" aria-hidden />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12">
        <h1 className="text-2xl font-bold text-slate-800">Bem-vindo a SEFAZ</h1>
        <p className="text-slate-600">
          Personalize esta pagina inicial com noticias, destaques ou atalhos para os servicos mais
          utilizados pelos cidadaos. Este layout inicial replica o topo institucional para servir de
          base as proximas secoes do portal.
        </p>
      </main>
    </div>
  );
}
