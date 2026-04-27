import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111111] px-6 py-10 text-white md:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-center">
        <div className="flex items-center gap-4">
        </div>

        <p className="text-sm text-white/58">
          Copyright 2026. Sther Viana Sociedade Individual de Advocacia. Todos os Direitos Reservados.
        </p>
      </div>
    </footer>
  );
}
