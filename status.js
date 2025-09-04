function atualizarStatus(status) {
  const statusSpan = document.getElementById('status-assinatura');
  const cancelamentoInfo = document.getElementById('cancelamento-info');
  if (status === 'Ativa') {
    statusSpan.textContent = 'Ativa';
    statusSpan.classList.remove('status-cancelado');
    statusSpan.classList.add('status-ativo');
    if (cancelamentoInfo) cancelamentoInfo.style.display = 'none';
  } else if (status === 'Cancelado') {
    statusSpan.textContent = 'Cancelado';
    statusSpan.classList.remove('status-ativo');
    statusSpan.classList.add('status-cancelado');
    if (cancelamentoInfo) {
      const agora = new Date();
      const dataHora = agora.toLocaleString('pt-BR');
      cancelamentoInfo.textContent = `Cancelado em: ${dataHora}`;
      cancelamentoInfo.style.display = 'block';
    }
  }
}

// Exemplo de uso:
// atualizarStatus('Cancelado');