"use client";

import { sendWhats, messages } from "@/lib/whatsapp";

const steps = [
  {
    number: "01",
    title: "Conte o que aconteceu",
    text: "Envie a situação pelo WhatsApp com os principais documentos e registros disponíveis que solicitarmos.",
  },
  {
    number: "02",
    title: "Receba a orientação inicial",
    text: "A demanda é analisada para identificar urgência, provas relevantes e estratégia de atuação.",
  },
  {
    number: "03",
    title: "Defina o próximo passo",
    text: "Com o caso enquadrado, o atendimento avança para as medidas administrativas e judiciais cabíveis.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#16130f] px-6 py-20 text-white md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d2b279]">
              Como funciona
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Atendimento objetivo, com fluxo claro desde o primeiro contato.
            </h2>
          </div>
          <button
            onClick={() => sendWhats(messages.geral)}
            className="inline-flex w-fit items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#d2b279] hover:text-[#f4d8a1]"
          >
            Iniciar conversa agora
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[24px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
            >
              <span className="text-sm font-semibold tracking-[0.24em] text-[#d2b279]">
                {step.number}
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-white/72">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
