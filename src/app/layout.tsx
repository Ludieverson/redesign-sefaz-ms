import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import VLibrasWidget from "@/components/VLibrasWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "SEFAZ - Secretaria de Estado de Fazenda",
  description: "Portal da Secretaria de Estado de Fazenda de Mato Grosso do Sul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <VLibrasWidget />
      </body>
    </html>
  );
}
