/* PetLove Canoas - funções JavaScript para a fase 2 */

document.addEventListener("DOMContentLoaded", () => {
  initDynamicGreeting();
  initFooterYear();
  initAgendamentoForm();
});

/**
 * Exibe uma saudação baseada no horário atual e atualiza o texto a cada minuto.
 */
function initDynamicGreeting() {
  const greetingElement = document.getElementById("greeting-message");
  if (!greetingElement) return;

  const updateGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    let greeting = "Olá";

    if (hour < 12) greeting = "Bom dia";
    else if (hour < 18) greeting = "Boa tarde";
    else greeting = "Boa noite";

    const formatted = now.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    greetingElement.textContent = `${greeting}! Agora são ${formatted}. Nosso time está pronto para cuidar do seu pet.`;
  };

  updateGreeting();
  setInterval(updateGreeting, 60_000);
}

/**
 * Define automaticamente o ano corrente no rodapé.
 */
function initFooterYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Ativa o formulário de agendamento com feedback dinâmico para o usuário.
 */
function initAgendamentoForm() {
  const agendamentoForm = document.getElementById("agendamentoForm");
  const resumoElement = document.getElementById("agendamentoResumo");
  const enderecoGroup = document.getElementById("enderecoGroup");
  if (!agendamentoForm || !resumoElement) return;

  const dataInput = agendamentoForm.querySelector("input[name='data']");
  if (dataInput) {
    const today = new Date().toISOString().split("T")[0];
    dataInput.min = today;
  }

  // Função para exibir ou ocultar o campo de endereço conforme o método escolhido.
  const toggleEnderecoField = () => {
    const metodo = agendamentoForm.querySelector("input[name='metodo']:checked");
    const needsAddress = metodo && metodo.value === "tele-busca";
    enderecoGroup.classList.toggle("d-none", !needsAddress);
    enderecoGroup.querySelector("input").required = needsAddress;
  };

  agendamentoForm.querySelectorAll("input[name='metodo']").forEach((radio) => {
    radio.addEventListener("change", toggleEnderecoField);
  });
  toggleEnderecoField();

  agendamentoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!agendamentoForm.reportValidity()) return;

    const formData = new FormData(agendamentoForm);
    const cliente = formData.get("nome");
    const pet = formData.get("petNome");
    const servico = formData.get("servico");
    const data = formData.get("data");
    const hora = formData.get("hora");
    const metodo = formData.get("metodo") === "tele-busca" ? "Tele-busca" : "Entrega no local";

    resumoElement.textContent = `Reserva confirmada para ${cliente} e ${pet}: ${servico} em ${data} às ${hora} (${metodo}).`;
    agendamentoForm.reset();
    toggleEnderecoField();
  });
}

