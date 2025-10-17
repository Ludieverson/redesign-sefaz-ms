"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => void;
    };
  }
}

export default function VLibras() {
  useEffect(() => {
    console.log("[VLibras] Componente montado, carregando script...");

    // Verifica se já existe o script
    const existingScript = document.querySelector(
      'script[src="https://vlibras.gov.br/app/vlibras-plugin.js"]'
    );

    if (existingScript) {
      console.log("[VLibras] Script já existe, inicializando...");
      if (window.VLibras) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      }
      return;
    }

    // Adiciona o script do VLibras
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    script.onload = () => {
      console.log("[VLibras] Script carregado com sucesso!");
      // Pequeno delay para garantir que o VLibras está pronto
      setTimeout(() => {
        if (window.VLibras) {
          console.log("[VLibras] Inicializando widget...");
          new window.VLibras.Widget("https://vlibras.gov.br/app");
          console.log("[VLibras] Widget inicializado!");
        } else {
          console.error("[VLibras] window.VLibras não está disponível!");
        }
      }, 100);
    };
    script.onerror = () => {
      console.error("[VLibras] Erro ao carregar o script!");
    };
    document.body.appendChild(script);
    console.log("[VLibras] Script adicionado ao body");
  }, []);

  return (
    <div {...{ vw: "" }} className="enabled">
      <div {...{ "vw-access-button": "" }} className="active"></div>
      <div {...{ "vw-plugin-wrapper": "" }}>
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}
