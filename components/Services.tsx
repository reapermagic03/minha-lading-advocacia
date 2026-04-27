"use client";

import Image from "next/image";
import { sendWhats, messages } from "@/lib/whatsapp";

const services = [
  {
    title: "Emprestimo não solicitado",
    text: "Análise de contratação irregular, suspensão de descontos e busca por restituição de valores cobrados indevidamente.",
    message: messages.emprestimo,
  },
  {
    title: "Revisional de juros",
    text: "Avaliação técnica de contratos para discutir abusividade, equilibrar parcelas e revisar encargos.",
    message: messages.revisional,
  },
  {
    title: "Cartão RMC ou RCC",
    text: "Atuação contra descontos ocultos em benefício previdenciário e falta de transparência na operação.",
    message: messages.rmc,
  },
];

export default function Services() {
  return (
    <section
      id="areas-de-atuacao"
      className="bg-[#f3f0ea] px-6 py-20 md:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6a2f]">
              Áreas de atuação
            </p>
            <h2 className="font-serif text-4xl leading-tight text-[#171717] md:text-5xl">
              Demandas mais recorrentes nos processos bancários.
            </h2>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-5">
            {services.map((service) => (
              <button
                key={service.title}
                onClick={() => sendWhats(service.message)}
                className="rounded-[24px] border border-[#ddd2bf] bg-white p-7 text-left transition hover:border-[#b7975f] hover:shadow-[0_18px_50px_rgba(32,24,16,0.08)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8a6a2f]">
                  Clique aqui para atendimento
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[#1a1a1a]">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#5b5b5b]">
                  {service.text}
                </p>
              </button>
            ))}
          </div>

          <button
            onClick={() => sendWhats(messages.pix)}
            className="group relative min-h-[560px] overflow-hidden rounded-[30px] text-left"
          >
            <Image
              src="/pix.png"
              alt="Atendimento para golpe no Pix"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,15,0.05)_0%,rgba(15,15,15,0.42)_45%,rgba(15,15,15,0.84)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d8bb86]">
                Atenção 
              </p>
              <h3 className="mt-4 font-serif text-4xl leading-tight">
                Golpe do Pix e fraude em operações bancárias feitas por Whatsapp.
              </h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-white/78">
                Análise da falha de seguranca, preservação de provas, contato
                com o banco e estrategia jurídica voltada a responsabilização e
                recuperação de prejuízos.
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
