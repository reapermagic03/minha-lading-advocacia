"use client";

import Image from "next/image";
import { sendWhats, messages } from "@/lib/whatsapp";

const highlights = [
  "Fraudes e golpe no Pix",
  "Empréstimo não contratado",
  "Cartao RMC e descontos indevidos",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#171411] text-white">
      <div className="pointer-events-none absolute inset-0 mx-auto w-[72vw] max-w-[780px] opacity-28">
        <Image
          src="/logo.webp"
          alt=""
          fill
          priority
          className="object-contain object-center blur-[1px] md:blur-[2px]"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,14,12,0.96)_0%,rgba(17,14,12,0.88)_38%,rgba(17,14,12,0.44)_66%,rgba(17,14,12,0.16)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,182,121,0.18),transparent_34%)]" />

      <div className="relative z-10 px-6 pb-16 pt-6 md:px-20 md:pb-20 md:pt-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/6 px-4 py-3 backdrop-blur-md md:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Logo do escritorio"
              width={42}
              height={42}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d2b279]">
                Direito bancário
              </p>
              <p className="text-xs text-white/70">
                Atendimento online e estratégico
              </p>
            </div>
          </div>

          <button
            onClick={() => sendWhats(messages.geral)}
            className="hidden rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#d2b279] hover:text-[#f7db9b] md:inline-flex"
          >
            Falar com o escritório
          </button>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-[#d2b279]">
              Defesa em conflitos bancários e fraudes financeiras
            </p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] text-[#f5f1ea] md:text-7xl">
              Atendimento jurídico firme para quem precisa reagir com rapidez.
            </h1>
            <p className="mt-15 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Atuação voltada a golpe no Pix, empréstimo indevido, juros
              abusivos, descontos irregulares e responsabilidade bancária.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => sendWhats(messages.geral)}
                className="inline-flex items-center justify-center rounded-full bg-[#d2b279] px-7 py-4 text-sm font-semibold text-[#171411] transition hover:bg-[#e3c791]"
              >
                Atendimento imediato no WhatsApp
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("areas-de-atuacao")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/40"
              >
                Ver áreas de atuação
              </button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-sm text-white/84 backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="max-w-md rounded-[28px] border border-white/12 bg-[#211b16]/72 p-6 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d2b279]">
                Atendimento sob medida
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#f5f1ea]">
                Resolução profissional para todos os problemas bancários 
                com atendimento rápido e direto
              </h2>
              <p className="mt-4 text-base leading-6 text-white/72">
                Atuação focada em problemas bancários, sempre prezando 
                a oportunidade do cliente de reinvidicar o que é seu por direito.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-3xl font-semibold text-[#f5f1ea]">Online</p>
                  <p className="mt-1 text-white/60">
                    Atendimento Segunda a Sexta de 9:00 ás 18:00
                  </p>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
