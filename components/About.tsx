"use client";

import Image from "next/image";
import { sendWhats, messages } from "@/lib/whatsapp";

const pillars = [
  {
    title: "Especialização em Direito Bancário",
    text: "Análise detalhada de contratos, identificação de juros abusivos, fraudes e cobranças indevidas.",
  },
  {
    title: "Clareza e direcionamento jurídico",
    text: "Você entende seu caso, quais são seus direitos e quais medidas podem ser adotadas.",
  },
  {
    title: "Atendimento ágil e eficiente",
    text: "Triagem rápida e orientação inicial para tomada de decisão com segurança.",
  },
];

export default function About() {
  return (
    <section className="bg-white px-6 py-20 md:px-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6a2f]">
              Assessoria jurídica em direito bancário com atendimento claro e estratégico
            </p>
            <h2 className="max-w-2xl font-serif text-4xl leading-tight text-[#161616] md:text-5xl">
              Entenda seus direitos, evite prejuízos e tenha orientação jurídica segura desde o primeiro contato.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[#4c4c4c]">
          Atuamos na defesa de consumidores em questões bancárias, com análise técnica e atendimento transparente. 
          Nosso objetivo é esclarecer sua situação, identificar possíveis irregularidades e 
          indicar o melhor caminho jurídico para o seu caso, sempre com responsabilidade e estratégia.
          Se você enfrenta problemas com contratos, descontos indevidos, fraudes ou cobranças abusivas, 
          oferecemos um atendimento ágil e direcionado para que você saiba exatamente como proceder.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-[#e9e2d4] bg-[#fbf9f4] p-6"
              >
                <h3 className="mb-3 text-base font-semibold text-[#1d1d1d]">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-7 text-[#5b5b5b]">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="relative min-h-[540px] overflow-hidden rounded-[28px] bg-[#1c1b19]">
            <Image
              src="/advogada.webp"
              alt="Advogada especialista em direito bancario"
              fill
              className="object-cover object-[76%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <p className="text-xs uppercase tracking-[0.24em] text-[#cdb68a]">
                Sua advogada sempre presente
              </p>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/86">
              Sther Viana é advogada com especialização na área bancária, 
              com atuação focada em golpes e fraudes bancárias.
              Pós-graduada, oferece atendimento presencial, acessível e estratégico, 
              auxiliando seus clientes na identificação de irregularidades e 
              na adoção das medidas jurídicas adequadas para cada caso.
              </p>
            </div>
          </div>

          <button
            onClick={() => sendWhats(messages.geral)}
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#181512] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#2a241e]"
          >
            Solicitar avaliação
          </button>
        </div>
      </div>
    </section>
  );
}
