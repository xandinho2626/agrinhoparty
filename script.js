function enviarFormulario() {
  const nome = document.getElementById("nome").value;
  alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
  return false; // Previne o envio real do formulário
}