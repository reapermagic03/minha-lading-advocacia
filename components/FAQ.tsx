"use client";

const items = [
  {
    question: "Atendem casos de golpe no Pix?",
    answer:
      "Sim. A análise considera o historico da fraude, a conduta da instituição financeira e as medidas cabíveis para buscar reparação.",
  },
  {
    question: "Empréstimo não solicitado pode ser cancelado?",
    answer:
      "Dependendo do caso, e possível discutir cancelamento, interrupção de descontos, restituição de valores e indenização por danos.",
  },
  {
    question: "Quem sofre desconto de cartão RMC ou RCC pode pedir revisão?",
    answer:
      "Sim. O atendimento jurídico avalia a regularidade da contratação, a transparência da operação e o impacto no benefício do cliente.",
  },
  {
    question: "Preciso ter todos os documentos antes de entrar em contato?",
    answer:
      "Não. O ideal é reunir o que já tiver disponível. A orientação inicial ajuda a identificar quais comprovantes vão fortalecer a demanda.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#f3f0ea] px-6 py-20 md:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6a2f]">
            Dúvidas frequentes
          </p>
          <h2 className="font-serif text-4xl text-[#171717] md:text-5xl">
            Informações objetivas para quem precisa agir com segurança.
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-[22px] border border-[#ddd2bf] bg-white px-6 py-5"
            >
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-[#171717]">
                {item.question}
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#555]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
