export const phone = "553172526567";

export const messages = {
  geral: "Olá, gostaria de atendimento jurídico.",
  emprestimo:
    "Olá, fui vítima de empréstimo não solicitado e preciso de ajuda.",
  revisional: "Olá, gostaria de revisar juros abusivos do meu contrato.",
  rmc: "Olá, tenho desconto de cartão RMC/RCC e quero entender melhor sobre.",
  pix: "Olá, sofri um golpe via Pix e preciso de orientação urgente.",
};

export function sendWhats(message: string) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
