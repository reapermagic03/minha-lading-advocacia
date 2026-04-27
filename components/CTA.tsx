"use client";

import { sendWhats, messages } from "@/lib/whatsapp";

export default function CTA() {
  return (
    <section className="bg-white px-6 py-20 md:px-20">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-[#171411] px-8 py-12 text-white md:px-12 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d2b279]">
              Precisa de ajuda para lidar com outra situação jurídica?
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-large">
              Você pode solicitar uma análise inicial para algum outro caso ou dúvida jurídica que tenha.
            </h2>

          </div>

          <div className="rounded-[28px] border border-white/8 bg-white/6 p-4">
            <div className="space-y-3 text-sm text-white/68">
            </div>

            <button
              onClick={() => sendWhats(messages.geral)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#d2b279] px-6 py-4 text-sm font-semibold text-[#171411] transition hover:bg-[#e3c791]"
            >
              Chamar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
