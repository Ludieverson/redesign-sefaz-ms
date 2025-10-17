"use client";

import { useState } from "react";
import { Settings, Hand, Volume2, Languages } from "lucide-react";

export default function AccessibilityButtonTailwind() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Hand, title: "WebLibras" },
    { icon: Settings, title: "Acessibilidade" },
    { icon: Volume2, title: "Voz" },
    { icon: Languages, title: "Tradução" },
  ];

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 p-4 text-white shadow-lg hover:bg-blue-700"
      >
        <Settings className="size-6" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="mx-4 w-full max-w-md rounded-xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-xl font-bold">Acessibilidade</h2>

            <div className="grid grid-cols-2 gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.title}
                  className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
                >
                  <item.icon className="mb-2 size-8" />
                  <span className="text-sm">{item.title}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full rounded-lg bg-gray-200 py-2 hover:bg-gray-300"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
