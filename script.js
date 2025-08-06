function calcularParcelas() {
  const valor = parseFloat(document.getElementById("valor").value);
  if (isNaN(valor) || valor <= 0) {
    document.getElementById("resultado").innerHTML = "<p>Insira um valor válido.</p>";
    return;
  }

  const acrescimo = valor * 0.10;
  const totalComAcrescimo = valor + acrescimo;
  let tabela = "<table><tr><th>Parcelas</th><th>Valor da Parcela</th><th>Total com Acréscimo</th></tr>";

  for (let i = 1; i <= 6; i++) {
    const valorParcela = (totalComAcrescimo / i).toFixed(2);
    tabela += `<tr><td>${i}x</td><td>R$ ${valorParcela}</td><td>R$ ${totalComAcrescimo.toFixed(2)}</td></tr>`;
  }
  tabela += "</table>";
  document.getElementById("resultado").innerHTML = tabela;
}
