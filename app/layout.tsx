import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Escritorio de Direito Bancario",
  description:
    "Landing page profissional para atendimento juridico em direito bancario e fraude financeira.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
