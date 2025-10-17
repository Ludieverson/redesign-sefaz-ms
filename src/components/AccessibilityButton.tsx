"use client";

import { useState } from "react";
import { Hand, Volume2, Languages, Settings } from "lucide-react";
import { RxAccessibility } from "react-icons/rx";

export default function AccessibilityButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVLibras = () => {
    // Fecha o modal
    setIsOpen(false);

    // Tenta encontrar o botão do VLibras, mostrá-lo e clicar nele
    setTimeout(() => {
      const vLibrasButton = document.querySelector('[vw-access-button]') as HTMLElement;
      if (vLibrasButton) {
        // Remove o display: none para mostrar o botão
        vLibrasButton.style.display = 'block';
        // Clica no botão para abrir o widget
        vLibrasButton.click();
      } else {
        console.log('VLibras ainda não carregou. Tentando novamente...');
        // Tenta novamente após 2 segundos
        setTimeout(() => {
          const retryButton = document.querySelector('[vw-access-button]') as HTMLElement;
          if (retryButton) {
            retryButton.style.display = 'block';
            retryButton.click();
          }
        }, 2000);
      }
    }, 500);
  };

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-6 bottom-6 text-white p-2.5 rounded-full shadow-lg transition-shadow hover:shadow-xl"
        style={{
          zIndex: 9999,
          backgroundColor: '#004F9F',
          cursor: 'pointer',
        }}
      >
        <RxAccessibility className="w-8 h-8" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(12px) saturate(0.8) brightness(0.7)",
            WebkitBackdropFilter: "blur(12px) saturate(0.8) brightness(0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "32px",
              width: "90%",
              maxWidth: "480px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(255, 255, 255, 0.8)",
            }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px", color: "#1e293b" }}>
              Acessibilidade
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <button
                onClick={toggleVLibras}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px 16px",
                  border: "2px solid #e2e8f0",
                  borderRadius: "12px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.15)";
                  e.currentTarget.style.borderColor = "#3b82f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                <Hand style={{ width: "40px", height: "40px", marginBottom: "12px", color: "#3b82f6" }} />
                <span style={{ fontSize: "15px", fontWeight: "600", color: "#334155" }}>WebLibras</span>
              </button>

              <button
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px 16px",
                  border: "2px solid #e2e8f0",
                  borderRadius: "12px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.15)";
                  e.currentTarget.style.borderColor = "#3b82f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                <Settings style={{ width: "40px", height: "40px", marginBottom: "12px", color: "#3b82f6" }} />
                <span style={{ fontSize: "15px", fontWeight: "600", color: "#334155" }}>Acessibilidade</span>
              </button>

              <button
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px 16px",
                  border: "2px solid #e2e8f0",
                  borderRadius: "12px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.15)";
                  e.currentTarget.style.borderColor = "#3b82f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                <Volume2 style={{ width: "40px", height: "40px", marginBottom: "12px", color: "#3b82f6" }} />
                <span style={{ fontSize: "15px", fontWeight: "600", color: "#334155" }}>Voz</span>
              </button>

              <button
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px 16px",
                  border: "2px solid #e2e8f0",
                  borderRadius: "12px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.15)";
                  e.currentTarget.style.borderColor = "#3b82f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                <Languages style={{ width: "40px", height: "40px", marginBottom: "12px", color: "#3b82f6" }} />
                <span style={{ fontSize: "15px", fontWeight: "600", color: "#334155" }}>Tradução</span>
              </button>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                marginTop: "16px",
                width: "100%",
                backgroundColor: "#e5e7eb",
                padding: "8px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
